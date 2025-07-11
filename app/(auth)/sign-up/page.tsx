"use client";

import { Suspense } from "react";
import AuthCard from "@/components/auth-card";

function SignUpContent() {
  return (
    <AuthCard
      title="Sign up"
      description="Create your account using your preferred provider"
      mode="sign-up"
    />
  );
}

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUpContent />
    </Suspense>
  );
}
