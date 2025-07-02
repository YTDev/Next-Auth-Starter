import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Authix",
  title:
    "Authix – Full-Stack Next.js 15 Template with Auth.js, Prisma ORM, PostgreSQL, and Shadcn UI",
  description:
    "Modern full-stack template for Next.js 15 featuring Auth.js (NextAuth), Prisma ORM, PostgreSQL, Shadcn UI, and Tailwind CSS v4 for building secure and scalable web apps.",
  origin: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  keywords: [
    "Next.js 15",
    "Authentication",
    "Prisma ORM",
    "PostgreSQL",
    "Tailwind CSS",
    "Tailwind CSS V4",
    "Shadcn UI",
    "TypeScript",
    "Full-Stack Template",
  ],
  // og: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/og.png`,
  og: "https://dummyimage.com/1200x630/0f172a/ffffff.png&text=Authix+OG+Image",

  creator: {
    name: "YTDev",
    url: "https://ytdev.pt/",
  },
  socials: {
    github: "https://github.com/YTDev/Next-Auth-Starter",
    x: "https://x.com/",
  },
};
