"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Link as LinkIcon } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { LinkedAccounts } from "@/components/linked-accounts";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-4rem)] px-4 py-8">
      <div className="w-full max-w-4xl space-y-6">
        {/* Main Dashboard Card */}
        <Card className="shadow-lg border-muted/20 bg-card/50 backdrop-blur-sm rounded-none border-dashed">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                aria-hidden="true"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">
              Protected Dashboard
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              This is a protected route accessible only to authenticated users.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="rounded-lg border border-dashed border-muted-foreground/20 bg-muted/50 p-8 text-center">
              <h3 className="font-medium text-muted-foreground mb-1">
                Your Dashboard Awaits
              </h3>
              <p className="text-sm text-muted-foreground/70 mb-6">
                Start building your ideal dashboard by adding components and
                data visualizations.
              </p>
              <div className="flex items-center justify-center gap-2">
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
                <Button
                  variant="outline"
                  asChild
                  className="relative border-dashed"
                >
                  <a
                    href={siteConfig.socials.x}
                    target="_blank"
                    className="gap-2 group"
                  >
                    <div className="w-full h-[1px] bg-linear-to-r from-primary/0 via-primary to-primary/0 absolute top-0 -left-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <svg
                      viewBox="0 0 1200 1227"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="var(--foreground)"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                    </svg>
                    <span>X</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-muted/20 pt-4 text-xs text-muted-foreground/70">
            <p>Signed in as: user@example.com</p>
            <p>
              Built by{" "}
              <Link
                href="https://ytdev.pt/"
                className="font-bold hover:underline"
              >
                YTDev
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* Account Linking Feature Card */}
        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <LinkIcon className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Account Linking Feature</CardTitle>
            </div>
            <CardDescription>
              Your template now supports automatic linking of multiple OAuth
              providers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">✅ What&apos;s Working</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automatic account linking when using same email</li>
                  <li>• Error handling for OAuthAccountNotLinked</li>
                  <li>• Support for Google, GitHub, and Discord</li>
                  <li>• Seamless provider switching</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">🔧 How It Works</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sign up with any provider (e.g., Google)</li>
                  <li>• Try signing in with another provider (e.g., GitHub)</li>
                  <li>• If same email, accounts are automatically linked</li>
                  <li>• You can now use either provider to sign in</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Linked Accounts Component */}
        <LinkedAccounts />
      </div>
    </div>
  );
}
