"use client";

import { useAuth } from "@/lib/auth-hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isRedirecting) {
      setIsRedirecting(true);
      // Add a small delay to prevent rapid redirects
      const timer = setTimeout(() => {
        router.push("/sign-in");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, router, isRedirecting]);

  // Reset redirecting state when auth state changes
  useEffect(() => {
    if (isAuthenticated) {
      setIsRedirecting(false);
    }
  }, [isAuthenticated]);

  if (isLoading || isRedirecting) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
