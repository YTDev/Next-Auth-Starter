import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Discord from "next-auth/providers/discord";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in",
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, user }) {
      if (user && session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      // Allow sign in if user already has an account with this provider
      if (account && user) {
        const existingAccount = await prisma.account.findFirst({
          where: {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        });

        if (existingAccount) {
          return true;
        }

        // Check if user with same email exists
        if (user.email) {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
            include: { accounts: true },
          });

          if (existingUser) {
            // Link the new provider account to the existing user
            const accountData: any = {
              userId: existingUser.id,
              type: account.type,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            };

            // Only add fields if they exist and are strings
            if (account.refresh_token)
              accountData.refresh_token = account.refresh_token;
            if (account.access_token)
              accountData.access_token = account.access_token;
            if (account.expires_at)
              accountData.expires_at = Math.floor(Number(account.expires_at));
            if (account.token_type) accountData.token_type = account.token_type;
            if (account.scope && typeof account.scope === "string")
              accountData.scope = account.scope;
            if (account.id_token) accountData.id_token = account.id_token;
            if (account.session_state)
              accountData.session_state = account.session_state;

            await prisma.account.create({
              data: accountData,
            });

            // Update the user object to use the existing user's ID
            user.id = existingUser.id;
            return true;
          }
        }
      }

      return true;
    },
  },
});
