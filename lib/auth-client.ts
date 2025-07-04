"use client";

import { signIn as nextAuthSignIn } from "next-auth/react";

export const signIn = {
  social: async (
    config: { provider: string; callbackURL: string },
    options?: { onRequest?: (ctx: unknown) => void }
  ) => {
    if (options?.onRequest) {
      options.onRequest({});
    }

    try {
      await nextAuthSignIn(config.provider, {
        callbackUrl: config.callbackURL,
        redirect: true,
      });
    } catch (error) {
      console.error("Sign in error:", error);
    }
  },
};
