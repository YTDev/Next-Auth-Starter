"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorDetails = (error: string | null) => {
    switch (error) {
      case "OAuthAccountNotLinked":
        return {
          title: "Account Not Linked",
          description:
            "This email is already associated with a different sign-in method. Please use the same provider you originally signed up with, or contact support to link your accounts.",
          action: "Try signing in with your original provider",
        };
      case "AccessDenied":
        return {
          title: "Access Denied",
          description:
            "You denied the authorization request. Please try again and grant the necessary permissions.",
          action: "Try signing in again",
        };
      case "Verification":
        return {
          title: "Verification Required",
          description: "Please verify your email address before signing in.",
          action: "Check your email and verify your account",
        };
      default:
        return {
          title: "Authentication Error",
          description:
            "An unexpected error occurred during sign-in. Please try again.",
          action: "Try signing in again",
        };
    }
  };

  const errorDetails = getErrorDetails(error);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md border-dashed">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle className="text-xl">{errorDetails.title}</CardTitle>
          <CardDescription className="text-sm">
            {errorDetails.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/sign-in">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {errorDetails.action}
            </Link>
          </Button>
          <div className="text-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense>
      <ErrorContent />
    </Suspense>
  );
}
