"use client";

import { Suspense } from "react";
import AuthCard from "@/components/auth-card";

function SignInContent() {
  return (
    <AuthCard
      title="Sign in"
      description="Sign in to your account using your preferred provider"
      mode="sign-in"
    />
  );
}

export default function SignInPage() {
  return (
    <Suspense>
      <SignInContent />
    </Suspense>
  );
}
