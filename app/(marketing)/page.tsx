"use client";

import { useState } from "react";
import ThemeToggler from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/user-profile";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import {
  PanelsTopLeft,
  Shield,
  Database,
  Server,
  Component,
  Code,
  ArrowRight,
  Sparkle,
  Github,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-hooks";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const { session, isLoading } = useAuth();

  const handleCopy = () => {
    navigator.clipboard.writeText(`git clone ${siteConfig.socials.github}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="w-full h-auto md:h-screen overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto border border-dashed flex flex-col my-2">
        <div className="w-full flex justify-between divide-x">
          <div className="relative hidden md:flex w-1/3 aspect-square bg-black text-slate-100 items-center justify-center group/Authix border-dashed hover:text-yellow-100 transition-colors duration-300">
            <Vegeta />
            <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-white opacity-0 group-hover/Authix:opacity-100 transition-all duration-200"></div>
            <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-white opacity-0 group-hover/Authix:opacity-100 transition-all duration-200"></div>
            <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-white opacity-0 group-hover/Authix:opacity-100 transition-all duration-200"></div>
            <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-white opacity-0 group-hover/Authix:opacity-100 transition-all duration-200"></div>
          </div>
          <div className="flex-1 flex flex-col">
            <div
              id="nav"
              className="w-full flex items-center justify-end border-b border-dashed divide-x"
            >
              <div
                id="brand"
                className="font-mono text-sm flex-1 flex items-center h-full px-3 border-dashed"
              >
                <Link href="/" className="hover:underline">
                  {siteConfig.origin.replace("https://", "")}
                </Link>
              </div>
              {!isLoading &&
                (session?.user ? (
                  <Button
                    className="h-full border-dashed"
                    size="lg"
                    variant="ghost"
                    asChild
                  >
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 group/nav"
                    >
                      <span>Dashboard</span>
                      <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                        <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                        <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
                      </div>
                    </Link>
                  </Button>
                ) : (
                  <Button
                    className="h-full border-dashed"
                    size="lg"
                    variant="ghost"
                    asChild
                  >
                    <Link
                      href="/sign-in"
                      className="flex items-center gap-2 group/nav"
                    >
                      <span>Sign In</span>
                      <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                        <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                        <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
                      </div>
                    </Link>
                  </Button>
                ))}
              <UserProfile className="border-dashed size-10 md:size-14" />
              <ThemeToggler className="border-dashed size-10 md:size-14" />
            </div>
            <div id="hero" className="flex flex-col p-4">
              <h1 className="head-text-md">Authx</h1>
              <p className="text-muted-foreground max-w-3xl">
                {siteConfig.description}
              </p>
            </div>
            <div id="code" className="flex flex-col p-4">
              <div className="p-2 border border-dashed hover:border-primary/50 bg-card text-xs md:text-sm flex items-center justify-between transition-all duration-200 delay-75">
                <pre className="font-mono bg-linear-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
                  git clone {siteConfig.socials.github}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-5 cursor-pointer group/copy"
                  onClick={handleCopy}
                  aria-label={
                    copied ? "Copied to clipboard" : "Copy git clone command"
                  }
                >
                  {copied ? (
                    <Check className="size-3" />
                  ) : (
                    <Copy className="size-3 group-hover/copy:text-foreground" />
                  )}
                </Button>
              </div>
            </div>
            <div id="cta" className="flex items-center gap-4 p-4">
              <Button
                variant="outline"
                asChild
                className="relative border-dashed"
              >
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  className="gap-2 group"
                >
                  <div className="w-full h-[1px] bg-linear-to-r from-primary/0 via-primary to-primary/0 absolute top-0 -left-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Github className="size-4" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button asChild>
                <Link href="/dashboard" className="gap-2 group ">
                  <span>Get started</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-150" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div
          id="grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-dashed"
        >
          {techConfig.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              className={cn(
                "relative w-full p-6 hover:bg-muted/50 transition-all duration-150 group/item border-dashed",
                {
                  "border-b": index < techConfig.length - 1,
                  "md:border-b-0": index >= techConfig.length - 2,
                  "md:border-b": index < techConfig.length - 2,
                  "lg:border-b-0": index >= techConfig.length - 3,
                  "lg:border-b": index < techConfig.length - 3,
                },
                {
                  "md:border-r":
                    index % 2 === 0 && index !== techConfig.length - 1,
                  "lg:border-r":
                    index % 3 !== 2 && index !== techConfig.length - 1,
                }
              )}
            >
              {(index === 0 || index === techConfig.length - 1) && (
                <Sparkle
                  className={cn(
                    "absolute w-4 h-4 z-10 fill-current hidden md:block",
                    {
                      "-bottom-2 -right-2": index === 0,
                      "-top-2 -left-2": index === techConfig.length - 1,
                    }
                  )}
                />
              )}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="group-hover/item:animate-pulse">
                    {tech.icon}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-base font-semibold">
                    {tech.category}
                  </span>
                </div>
                <ArrowRight className="size-4 opacity-0 scale-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:-translate-x-0 group-hover/item:scale-100 transition-all duration-150" />
              </div>
              <h2 className="text-xl font-semibold font-heading tracking-tight mb-2">
                {tech.name}
              </h2>
              <p className="text-sm text-muted-foreground ">
                {tech.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const techConfig = [
  {
    icon: <PanelsTopLeft className="size-4" />,
    category: "Full-stack Framework",
    name: "Next.js 15",
    description:
      "Modern, full-stack React framework for building web applications.",
    link: "https://nextjs.org",
  },
  {
    icon: <Shield className="size-4" />,
    category: "Authentication",
    name: "Auth.js (NextAuth)",
    description:
      "Flexible authentication for Next.js apps with OAuth, social logins, email/password, and secure session management.",
    link: "https://authjs.dev",
  },
  {
    icon: <Database className="size-4" />,
    category: "ORM",
    name: "Prisma ORM",
    description:
      "Next-gen TypeScript ORM for Node.js and TypeScript, providing type safety and an intuitive data model.",
    link: "https://www.prisma.io/",
  },
  {
    icon: <Server className="size-4" />,
    category: "Database",
    name: "Postgres",
    description: "It's a Postgres database, what else do you need?",
    link: "https://neon.tech",
  },
  {
    icon: <Component className="size-4" />,
    category: "UI Components",
    name: "ShadCN/UI",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    link: "https://ui.shadcn.com",
  },
  {
    icon: <Code className="size-4" />,
    category: "CSS Framework",
    name: "Tailwindcss v4",
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces.",
    link: "https://tailwindcss.com",
  },
];

export const Vegeta = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 1920.000000 1920.000000"
      preserveAspectRatio="xMidYMid meet"
      className="fill-current"
    >
      <g
        transform="translate(0.000000,1920.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
      >
        <path d="M10110 18769 c0 -149 -71 -425 -175 -674 -50 -122 -189 -398 -259 -515 l-56 -95 7 55 c12 85 9 407 -5 485 -26 146 -55 258 -63 239 -4 -10 -8 -37 -8 -59 -2 -115 -97 -334 -230 -532 -105 -156 -199 -271 -273 -336 -313 -269 -453 -407 -600 -591 -148 -186 -278 -409 -324 -553 -10 -35 -23 -63 -28 -63 -5 0 -6 92 -3 208 5 237 29 393 98 664 37 146 113 384 168 528 l21 55 -26 -30 c-116 -135 -912 -1179 -1026 -1345 -384 -559 -619 -1330 -647 -2120 l-6 -185 -42 75 c-148 260 -277 814 -348 1485 -15 144 -23 190 -24 152 -1 -9 -26 -212 -56 -450 -183 -1449 -269 -2323 -245 -2500 34 -245 212 -743 514 -1436 l36 -83 -27 6 c-16 4 -89 25 -163 47 -264 79 -501 188 -587 271 -18 18 -33 28 -33 22 1 -19 77 -161 124 -232 181 -270 692 -784 1268 -1277 97 -82 175 -151 173 -153 -1 -1 -45 7 -99 18 -135 28 -309 42 -381 33 l-60 -9 100 -23 c264 -62 825 -270 1335 -495 l105 -47 106 -218 107 -218 138 -105 c250 -188 859 -613 914 -636 58 -24 176 -12 238 24 28 16 232 185 454 375 308 264 413 361 447 408 24 35 72 126 106 203 l63 141 7 -54 c3 -30 7 -211 8 -403 l2 -350 -89 -38 c-131 -57 -483 -175 -492 -165 -1 1 6 43 16 92 21 108 34 212 21 175 -5 -14 -21 -82 -36 -151 l-28 -127 -72 -36 c-97 -49 -231 -93 -335 -112 -87 -15 -325 -21 -395 -9 -204 34 -320 66 -477 131 l-106 45 -47 111 c-26 61 -58 142 -72 180 -14 38 -28 67 -30 64 -6 -6 37 -138 83 -253 36 -94 38 -92 -60 -68 -174 44 -385 136 -435 189 l-23 25 11 337 c11 327 10 416 -3 277 -19 -200 -26 -378 -26 -649 l0 -301 -62 -38 c-68 -42 -430 -283 -541 -361 l-68 -47 -52 16 c-83 26 -205 40 -302 33 -221 -14 -413 -100 -586 -264 -65 -61 -181 -203 -191 -234 -4 -10 -66 -13 -324 -13 -347 0 -399 -6 -625 -64 -342 -89 -591 -235 -760 -449 -105 -131 -169 -265 -221 -462 -55 -208 -50 -524 13 -780 l22 -90 -28 -53 c-49 -89 -207 -354 -321 -537 -196 -315 -296 -541 -343 -775 -36 -177 -37 -190 -71 -855 -6 -107 -15 -235 -21 -285 -10 -98 -39 -276 -45 -287 -3 -4 -47 -39 -100 -79 -350 -263 -619 -670 -724 -1096 -20 -80 -25 -91 -38 -80 -8 6 2 -16 24 -51 102 -166 352 -347 658 -477 378 -160 795 -247 1170 -244 83 0 210 15 159 18 -20 1 -18 8 33 104 62 120 126 303 151 437 29 154 24 434 -10 626 -40 227 -36 364 16 485 14 31 27 40 114 77 456 195 778 515 988 982 134 299 224 669 286 1173 l23 189 36 -79 c31 -66 39 -101 54 -214 73 -585 333 -1301 699 -1926 86 -147 212 -345 238 -374 11 -13 3 3 -17 36 -180 287 -300 502 -414 738 -242 501 -413 1032 -474 1475 -25 175 -25 174 34 105 99 -118 233 -217 354 -264 182 -71 358 -110 576 -129 161 -14 233 -13 228 3 -3 8 -46 14 -141 19 -284 14 -565 76 -737 163 -117 59 -308 236 -357 332 -81 156 -190 594 -237 955 -25 194 -39 426 -33 558 22 448 239 658 817 788 359 82 618 108 760 78 158 -33 244 -94 418 -298 147 -170 187 -199 336 -242 197 -57 252 -61 976 -61 707 0 759 3 946 50 99 25 178 61 236 107 21 16 87 87 146 157 199 232 295 287 522 298 133 6 241 -7 545 -68 358 -71 570 -158 710 -290 174 -165 229 -369 205 -757 -17 -277 -59 -562 -120 -819 -41 -172 -91 -334 -101 -327 -5 3 -9 -9 -9 -26 0 -125 -255 -381 -463 -465 -182 -73 -422 -121 -670 -134 -97 -4 -132 -10 -135 -20 -4 -11 15 -12 109 -7 284 17 472 53 666 126 133 50 195 92 326 221 l108 106 -7 -71 c-3 -39 -17 -135 -30 -213 -101 -613 -394 -1327 -814 -1989 -44 -68 -77 -124 -74 -124 3 0 47 64 98 143 458 700 781 1533 845 2179 7 73 17 117 30 139 l19 32 6 -44 c84 -644 163 -958 326 -1294 210 -433 538 -747 955 -916 44 -17 88 -41 98 -52 9 -11 27 -51 39 -91 31 -100 29 -234 -7 -436 -35 -193 -40 -435 -12 -590 32 -173 100 -368 172 -491 19 -33 35 -62 35 -64 0 -2 -10 -5 -22 -7 -56 -10 170 -20 292 -14 312 16 606 75 873 176 371 139 618 289 767 465 44 52 107 153 80 128 -11 -10 -19 8 -41 96 -112 429 -378 825 -731 1088 -48 36 -89 72 -92 81 -10 35 -36 201 -45 298 -6 56 -17 247 -26 425 -24 500 -41 642 -105 856 -57 194 -133 342 -361 708 -75 121 -172 283 -214 358 -78 138 -78 138 -66 179 37 122 52 239 58 438 6 229 -3 305 -59 480 -58 182 -136 316 -260 446 -186 194 -437 320 -788 397 -184 41 -316 50 -585 42 -192 -5 -243 -4 -256 7 -9 7 -36 40 -61 73 -60 79 -188 201 -263 252 -86 58 -152 89 -252 120 -81 25 -102 27 -253 27 -137 0 -176 -4 -232 -21 l-67 -20 -67 49 c-74 53 -394 261 -544 353 l-95 57 3 232 c4 233 -10 601 -29 798 -9 97 -9 110 9 143 17 34 29 41 138 85 361 143 1043 483 1824 907 157 85 289 159 293 163 5 4 -213 -30 -484 -76 -271 -46 -494 -82 -495 -81 -2 2 38 50 88 107 144 167 302 360 361 442 153 214 471 940 811 1853 70 187 134 358 142 380 18 47 12 42 -50 -47 -85 -121 -265 -318 -590 -645 -176 -178 -321 -321 -323 -319 -2 2 28 68 67 147 150 307 298 747 347 1029 34 194 19 593 -38 1040 -58 454 -223 1308 -357 1850 l-29 115 -7 -100 c-23 -318 -50 -522 -107 -815 -49 -249 -74 -352 -139 -558 -70 -224 -83 -262 -90 -262 -4 0 -22 75 -39 167 -60 303 -175 759 -289 1138 -36 117 -48 143 -124 260 -151 233 -895 1438 -1454 2357 -109 180 -202 328 -206 328 -5 0 -8 -23 -8 -51z m-1434 -6034 c120 -38 218 -112 283 -214 74 -115 411 -961 558 -1401 31 -91 62 -171 69 -179 10 -11 20 10 54 120 77 244 336 919 494 1284 31 72 77 160 101 196 93 136 235 210 437 226 70 5 80 4 121 -20 101 -59 448 -452 506 -572 16 -33 34 -87 40 -120 20 -108 80 -1198 68 -1229 -9 -22 -72 -36 -196 -44 l-109 -7 120 -182 120 -183 70 64 c147 136 253 152 272 39 13 -76 -54 -417 -114 -575 -30 -80 -88 -164 -169 -244 -117 -116 -255 -184 -382 -187 -37 -1 -70 1 -73 4 -3 3 9 41 28 84 l34 77 73 2 c110 3 184 48 266 163 63 89 93 176 100 290 7 108 -6 154 -62 218 l-35 40 35 -67 c45 -83 53 -146 31 -248 -44 -212 -197 -380 -344 -380 -39 0 -53 3 -49 13 3 6 66 153 141 326 75 172 135 315 133 317 -4 5 -48 -91 -384 -841 -119 -264 -233 -505 -253 -535 -51 -74 -69 -90 -505 -460 -226 -192 -398 -330 -423 -341 -28 -12 -67 -19 -111 -19 -58 0 -74 4 -122 33 -62 38 -509 347 -744 515 -255 183 -253 182 -333 340 -76 150 -244 512 -427 920 -65 144 -120 261 -122 259 -3 -4 152 -369 266 -624 l50 -113 -25 -6 c-14 -4 -57 -4 -96 -2 -112 8 -198 58 -328 188 -140 139 -178 213 -220 419 -52 257 -63 446 -29 487 49 59 152 22 292 -106 l55 -50 111 171 c62 93 114 176 117 183 4 10 -21 14 -104 19 -59 4 -126 12 -148 19 l-39 13 2 170 c2 164 33 742 53 971 15 186 39 234 228 460 131 157 256 284 319 325 47 30 50 31 134 25 50 -3 120 -16 165 -31z m-1178 -4988 c29 -8 54 -16 57 -18 2 -3 0 -23 -5 -44 -5 -22 -12 -65 -15 -96 l-6 -56 -57 14 c-31 8 -109 15 -172 15 -225 2 -418 -72 -718 -275 -97 -66 -154 -115 -81 -70 437 269 618 335 877 319 161 -9 162 -10 162 -62 0 -83 61 -343 104 -445 6 -14 -4 -17 -66 -22 -112 -10 -447 -73 -592 -113 -208 -56 -370 -130 -466 -212 -23 -19 -41 -28 -45 -22 -3 5 -4 14 -1 18 3 5 -1 33 -9 63 -8 30 -15 83 -15 119 l0 65 183 96 c212 113 307 155 438 197 133 43 252 63 379 65 60 1 107 4 105 8 -8 12 -158 17 -247 8 -215 -22 -431 -107 -728 -285 -63 -38 -119 -71 -124 -73 -14 -6 1 267 18 324 25 82 170 246 303 341 86 62 221 123 322 145 102 22 312 20 399 -4z m4583 -22 c184 -38 374 -158 516 -324 115 -134 118 -143 130 -371 l6 -124 -24 15 c-191 124 -439 250 -589 299 -158 52 -350 73 -465 51 -31 -5 -8 -9 95 -14 270 -14 436 -70 848 -289 l132 -71 0 -52 c0 -51 -16 -154 -25 -163 -2 -2 -32 14 -66 37 -123 82 -283 144 -519 200 -158 38 -469 91 -533 91 -39 0 -48 3 -43 15 40 105 96 352 96 424 0 47 2 48 121 61 232 26 473 -49 804 -250 149 -91 140 -85 130 -71 -4 7 -62 49 -129 93 -145 97 -351 199 -461 228 -112 30 -258 37 -366 16 -47 -9 -88 -16 -91 -16 -3 0 -8 35 -11 78 -3 42 -8 86 -12 98 -6 20 0 22 77 38 46 9 97 18 113 20 47 6 194 -4 266 -19z" />
        <path d="M8045 11617 c0 -205 -12 -315 -51 -467 -5 -18 -4 -22 4 -15 21 19 61 197 73 320 9 95 9 146 0 229 -20 174 -26 157 -26 -67z" />
        <path d="M11047 11813 c-17 -29 -31 -146 -31 -258 1 -137 29 -292 60 -331 14 -18 15 -18 9 2 -36 134 -54 376 -37 509 10 76 10 96 -1 78z" />
        <path d="M10107 10848 c-116 -163 -327 -500 -327 -522 0 -14 80 97 185 259 122 187 198 315 192 321 -3 3 -25 -23 -50 -58z" />
        <path d="M8851 10834 c108 -128 187 -226 244 -306 38 -54 71 -96 73 -94 6 7 -46 100 -98 174 -57 81 -182 217 -214 234 -20 10 -20 10 -5 -8z" />
        <path d="M9070 10662 c0 -25 318 -537 327 -528 11 10 -144 278 -259 449 -56 83 -68 97 -68 79z" />
        <path d="M10583 10436 c-143 -87 -209 -133 -398 -280 -161 -125 -269 -199 -410 -281 -55 -32 -101 -59 -103 -60 -7 -6 28 -76 41 -81 20 -7 134 38 245 96 l94 50 29 -30 c56 -55 143 -45 192 22 23 30 26 100 7 123 -7 9 -11 17 -9 19 19 15 142 83 216 120 144 72 381 121 552 114 l83 -3 -50 46 c-125 115 -285 219 -337 219 -20 0 -72 -26 -152 -74z" />
        <path d="M8353 10471 c-69 -38 -142 -90 -228 -165 -38 -33 -73 -63 -78 -66 -4 -4 30 -4 76 -2 170 9 402 -43 572 -128 170 -84 219 -117 209 -138 -5 -9 -9 -39 -9 -65 0 -43 4 -52 37 -83 33 -29 45 -34 89 -34 46 0 56 4 82 33 l31 32 82 -43 c88 -45 204 -92 230 -92 8 0 24 20 35 45 11 25 22 45 25 45 3 0 3 -22 -1 -49 -6 -42 -4 -52 14 -70 24 -24 97 -29 124 -8 20 15 27 151 9 182 -9 16 -11 4 -12 -67 0 -77 -2 -89 -20 -98 -18 -10 -20 -7 -21 25 -1 19 -3 40 -4 45 -1 6 -4 22 -5 38 l-2 27 -8 -25 c-4 -14 -8 -44 -9 -68 -1 -36 -4 -43 -18 -40 -15 3 -18 17 -21 91 -2 53 -7 85 -12 82 -6 -4 -10 -14 -10 -24 0 -10 -7 -24 -15 -31 -25 -21 -273 134 -525 330 -80 62 -176 135 -215 162 -112 80 -301 188 -326 188 -13 0 -48 -13 -76 -29z" />
        <path d="M7620 10483 c-62 -23 -97 -111 -86 -216 10 -99 26 -94 26 9 0 113 22 168 75 190 19 8 35 16 35 19 0 6 -31 5 -50 -2z" />
        <path d="M11504 10478 c75 -51 91 -94 81 -223 -7 -92 7 -86 24 11 21 114 -18 203 -94 219 -27 5 -28 4 -11 -7z" />
        <path d="M7756 10329 c-60 -71 -71 -103 -70 -209 0 -156 54 -288 160 -394 62 -62 184 -104 229 -79 13 8 3 11 -44 16 -79 7 -139 42 -196 115 l-45 57 32 3 c56 6 104 -15 147 -65 36 -40 41 -43 41 -23 0 13 -16 39 -38 60 -46 46 -109 67 -154 51 -17 -6 -32 -11 -33 -11 -1 0 -14 26 -28 58 -34 77 -50 165 -46 254 4 72 17 104 75 186 27 37 8 25 -30 -19z" />
        <path d="M10776 10137 c-35 -90 -136 -269 -180 -322 l-34 -40 -188 -6 c-135 -4 -224 -12 -310 -29 l-122 -23 -43 21 -44 21 28 -24 c34 -30 98 -33 227 -9 53 10 153 17 265 18 136 2 186 6 203 17 29 18 98 121 149 224 39 77 89 213 82 220 -2 2 -17 -29 -33 -68z" />
        <path d="M8353 10190 c39 -149 148 -362 222 -430 25 -24 33 -25 153 -27 177 -2 283 -10 385 -28 98 -18 150 -10 183 26 l19 21 -35 -21 c-44 -26 -80 -26 -200 0 -67 14 -150 22 -280 26 -102 3 -193 9 -202 14 -26 14 -126 172 -173 273 -56 122 -76 164 -72 146z" />
        <path d="M11250 10068 c0 -53 27 -108 62 -128 39 -21 44 -7 9 27 -27 28 -51 85 -51 126 0 9 -4 17 -10 17 -5 0 -10 -19 -10 -42z" />
        <path d="M7851 10041 c-8 -32 -25 -61 -48 -85 -40 -40 -25 -51 21 -15 35 28 56 70 56 114 0 50 -14 43 -29 -14z" />
        <path d="M11169 9857 c-35 -23 -83 -86 -74 -96 3 -2 18 9 34 26 39 43 88 66 143 67 79 2 53 26 -26 26 -28 0 -55 -8 -77 -23z" />
        <path d="M8665 9638 c-117 -11 -175 -20 -175 -28 0 -10 143 0 155 11 12 12 70 12 93 0 9 -5 62 -14 117 -20 55 -6 118 -13 140 -16 30 -4 35 -3 20 4 -31 15 -4 13 111 -10 106 -20 151 -20 77 0 -94 27 -283 54 -283 41 0 -10 -65 -3 -95 10 -30 13 -82 16 -160 8z m322 -34 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z" />
        <path d="M10353 9629 c-8 -8 -41 -12 -94 -11 -78 1 -175 -13 -269 -38 -76 -21 -35 -21 71 0 113 22 147 24 114 9 -16 -7 -12 -8 15 -5 19 3 86 10 148 17 61 7 112 16 112 21 0 11 74 10 86 -1 5 -5 45 -12 89 -15 51 -5 76 -3 70 3 -23 22 -323 40 -342 20z m-126 -25 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z" />
        <path d="M9135 9609 c22 -5 73 -21 113 -35 63 -23 77 -25 100 -14 l27 12 -24 19 c-13 10 -28 19 -33 19 -6 0 0 -9 13 -20 l24 -19 -22 -1 c-13 0 -56 11 -97 25 -41 14 -89 25 -108 24 l-33 -1 40 -9z" />
        <path d="M9980 9605 c-25 -7 -58 -18 -73 -24 -16 -6 -40 -11 -55 -11 l-27 0 25 21 25 20 -34 -17 c-33 -16 -34 -17 -16 -30 25 -18 44 -18 91 3 22 9 71 24 109 34 53 13 61 17 35 17 -19 0 -55 -6 -80 -13z" />
        <path d="M9521 9443 c-16 -54 -51 -140 -76 -191 l-45 -94 22 -18 c13 -10 54 -43 93 -74 l70 -56 62 62 c34 34 61 63 60 64 -1 1 -38 5 -82 9 -44 4 -81 8 -82 9 -1 1 4 24 12 50 26 86 38 221 25 277 -7 27 -16 51 -20 54 -5 3 -22 -39 -39 -92z m35 -45 c-4 -57 -13 -137 -20 -178 -16 -84 -13 -90 44 -90 19 0 45 -3 58 -6 l23 -7 -23 -24 c-45 -49 -52 -48 -128 14 -38 31 -70 61 -70 65 0 5 13 34 29 66 31 62 66 166 77 225 12 69 17 37 10 -65z" />
        <path d="M9890 8983 c0 -5 9 -19 20 -33 11 -14 20 -37 20 -52 0 -31 14 -37 24 -12 11 27 7 42 -20 73 -24 29 -44 40 -44 24z" />
        <path d="M9454 8966 c-46 -20 -52 -37 -9 -23 29 9 45 7 86 -7 45 -17 58 -17 124 -6 67 11 77 11 101 -4 36 -24 41 -13 7 14 -26 20 -35 22 -113 15 -66 -5 -93 -3 -122 9 -44 19 -35 19 -74 2z" />
        <path d="M9573 8763 c-29 -11 -11 -25 25 -19 33 6 35 5 20 -7 -26 -20 -22 -27 15 -28 17 0 26 -3 20 -6 -21 -8 -15 -22 16 -38 28 -14 55 -5 31 10 -8 5 -8 11 0 20 9 11 5 17 -17 29 -23 13 -25 15 -8 16 20 1 20 1 1 15 -19 14 -77 19 -103 8z" />
        <path d="M7545 6724 c-16 -2 -73 -9 -125 -15 -241 -27 -433 -80 -595 -162 -128 -66 -235 -167 -285 -271 -52 -110 -63 -202 -57 -481 8 -348 40 -534 153 -875 78 -235 127 -340 186 -397 124 -120 340 -194 651 -224 253 -23 703 -2 962 46 145 28 598 150 890 240 121 37 154 62 194 142 21 42 21 51 19 620 -1 489 -3 537 -8 313 -4 -146 -8 -406 -9 -578 -2 -445 20 -415 -391 -532 -596 -170 -802 -211 -1174 -232 -508 -29 -919 50 -1097 210 -62 56 -88 100 -140 237 -124 332 -182 580 -210 894 -14 169 -6 419 16 506 54 207 235 362 525 449 257 77 679 119 823 81 102 -27 150 -67 279 -240 42 -55 93 -112 114 -126 151 -98 528 -165 979 -173 l220 -5 -190 9 c-447 21 -795 79 -955 160 -64 33 -94 63 -183 186 -80 110 -131 158 -206 192 -52 25 -67 27 -206 28 -82 1 -163 0 -180 -2z" />
        <path d="M11337 6719 c-102 -24 -173 -84 -294 -249 -85 -115 -92 -122 -173 -159 -180 -81 -522 -134 -943 -148 -114 -3 -209 -9 -211 -12 -7 -10 434 7 590 23 281 30 494 78 607 139 51 26 72 48 147 147 109 144 151 185 220 219 53 25 60 26 235 25 273 -2 572 -54 765 -134 165 -68 307 -187 364 -302 50 -102 58 -176 53 -463 -6 -303 -29 -465 -102 -720 -47 -163 -145 -431 -176 -482 -121 -195 -545 -308 -1084 -289 -317 12 -495 36 -780 107 -188 47 -695 188 -749 208 -31 12 -63 46 -87 93 -17 34 -19 78 -29 620 -6 321 -12 597 -14 613 -3 17 -2 -246 0 -584 l5 -614 24 -46 c42 -84 59 -93 305 -165 760 -222 925 -251 1425 -251 262 0 339 3 427 18 295 50 481 135 567 260 36 53 92 192 155 385 94 287 134 514 143 807 6 218 -6 376 -37 459 -104 277 -430 440 -989 496 -122 12 -311 12 -364 -1z" />
        <path d="M11350 6345 c0 -2 60 -23 133 -46 156 -49 442 -151 616 -221 68 -27 125 -47 127 -45 6 5 -172 88 -291 135 -142 57 -290 106 -439 147 -131 35 -146 39 -146 30z" />
        <path d="M7725 6299 c-126 -34 -261 -77 -390 -126 -123 -47 -367 -154 -361 -160 2 -2 100 32 218 78 117 45 314 115 438 157 124 41 227 76 229 78 10 9 -30 1 -134 -27z" />
        <path d="M11885 6310 c11 -5 81 -33 155 -62 74 -29 207 -88 295 -132 180 -90 188 -94 160 -71 -80 66 -309 179 -471 233 -93 31 -176 50 -139 32z" />
        <path d="M7190 6261 c-127 -42 -268 -106 -376 -169 -135 -79 -117 -82 36 -6 85 42 232 108 325 145 187 75 194 89 15 30z" />
        <path d="M9470 6156 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z" />
        <path d="M9405 4449 c-49 -10 -387 -95 -750 -187 l-660 -168 -12 -60 c-45 -220 -66 -724 -44 -1036 23 -314 79 -681 141 -918 36 -139 33 -119 -13 110 -85 418 -111 681 -111 1120 -1 344 10 494 47 699 l12 64 710 180 710 180 175 1 c170 0 179 -1 310 -36 74 -20 389 -100 700 -179 311 -78 568 -146 571 -151 3 -5 14 -51 23 -103 59 -334 64 -853 10 -1295 -22 -182 -80 -517 -104 -600 -5 -19 -10 -42 -9 -50 3 -52 87 349 118 565 65 445 71 973 15 1340 -9 55 -19 116 -24 135 l-10 35 -697 178 c-384 98 -722 182 -752 187 -87 16 -256 11 -356 -11z" />
        <path d="M7786 4013 c-26 -195 -33 -643 -16 -918 26 -399 95 -838 170 -1075 25 -80 23 -67 -29 185 -108 533 -150 1120 -121 1710 4 77 6 141 5 143 -2 2 -6 -18 -9 -45z" />
        <path d="M11415 4005 c16 -192 23 -571 14 -792 -15 -416 -58 -763 -135 -1097 -14 -60 -23 -110 -21 -113 9 -8 72 249 103 422 23 126 52 347 66 505 25 288 12 936 -23 1095 -7 34 -8 31 -4 -20z" />
        <path d="M7972 3615 c24 -25 544 -100 868 -125 556 -42 1198 -42 1675 0 246 22 680 82 694 95 6 7 -2 6 -114 -10 -702 -99 -1543 -120 -2300 -55 -315 27 -674 70 -800 96 -16 4 -27 3 -23 -1z" />
        <path d="M7990 2951 c19 -12 273 -54 480 -80 692 -88 1593 -94 2270 -16 173 20 472 67 466 72 -3 3 -76 -4 -163 -16 -771 -101 -1581 -113 -2393 -36 -218 21 -516 58 -645 81 -21 3 -26 2 -15 -5z" />
        <path d="M8041 2365 c22 -21 556 -94 889 -122 307 -25 1168 -25 1450 0 318 29 766 89 780 104 3 3 -16 3 -42 0 -530 -70 -828 -93 -1318 -102 -498 -10 -1112 31 -1604 105 -132 20 -163 23 -155 15z" />
        <path d="M11420 2014 c-357 -111 -854 -236 -1125 -282 -172 -30 -274 -40 -500 -53 -362 -19 -721 11 -1150 97 -155 30 -629 145 -665 161 -8 3 -24 8 -35 10 -11 2 -100 28 -198 58 -98 30 -182 55 -186 55 -14 0 -49 -91 -61 -159 -25 -141 26 -267 139 -344 l23 -16 -35 -43 c-109 -134 -272 -468 -376 -770 -65 -190 -150 -521 -176 -685 l-7 -43 2596 0 2596 0 0 23 c0 36 -58 312 -96 455 -114 438 -288 835 -489 1118 -7 9 -2 21 17 41 47 50 71 112 76 193 2 41 -1 86 -6 100 -7 19 -8 8 -5 -42 11 -133 -40 -234 -155 -312 -55 -37 -95 -53 -227 -90 -426 -121 -838 -196 -1305 -238 -210 -18 -827 -16 -1045 5 -681 65 -1299 230 -1434 383 -72 82 -90 201 -48 324 16 48 26 64 39 62 9 -1 133 -36 277 -77 438 -125 733 -194 1031 -239 270 -41 408 -51 700 -50 409 1 643 31 1070 135 379 92 1019 281 945 278 -5 0 -89 -25 -185 -55z" />
        <path d="M11731 1990 c14 -31 19 -36 19 -24 0 6 -7 19 -16 30 -14 18 -14 18 -3 -6z" />
        <path d="M11101 1984 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M8111 1944 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M2773 1546 c-54 -17 -97 -48 -122 -89 -45 -74 -142 -447 -231 -892 -92 -458 -111 -590 -85 -563 3 3 28 126 55 274 122 668 230 1118 286 1192 27 35 63 57 128 77 23 7 34 13 26 13 -8 1 -34 -5 -57 -12z" />
        <path d="M16328 1553 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
        <path d="M16395 1534 c44 -16 90 -56 111 -96 52 -101 209 -804 305 -1370 7 -47 16 -68 25 -68 10 0 13 7 9 23 -3 12 -25 135 -50 272 -98 537 -219 1037 -278 1151 -26 51 -102 105 -144 103 -10 0 0 -7 22 -15z" />
        <path d="M4971 679 c23 -47 35 -129 25 -181 -3 -19 -67 -138 -141 -263 -118 -199 -151 -265 -115 -229 18 18 246 419 258 454 20 57 15 149 -13 208 -13 28 -27 52 -30 52 -3 0 4 -19 16 -41z" />
        <path d="M14168 654 c-7 -16 -13 -65 -13 -110 l0 -81 129 -224 c135 -236 142 -247 152 -236 4 3 -52 104 -123 224 -72 120 -135 233 -141 252 -16 45 -14 107 3 156 17 46 11 61 -7 19z" />
      </g>
    </svg>
  );
};
