"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export function LinkedAccounts() {
  // This would typically come from an API call to get user's linked accounts
  // For now, we'll show a placeholder since we need to implement the API
  const linkedAccounts = [
    { provider: "google", name: "Google", connected: true },
    { provider: "github", name: "GitHub", connected: false },
    { provider: "discord", name: "Discord", connected: false },
  ];

  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case "google":
        return <Icons.Google className="h-4 w-4" />;
      case "github":
        return <Icons.Github className="h-4 w-4" />;
      case "discord":
        return <Icons.Discord className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle className="text-lg">Linked Accounts</CardTitle>
        <CardDescription>Manage your connected OAuth providers</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {linkedAccounts.map((account) => (
          <div
            key={account.provider}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {getProviderIcon(account.provider)}
              <span className="font-medium">{account.name}</span>
            </div>
            <Badge
              variant={account.connected ? "default" : "secondary"}
              className={cn(
                account.connected
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              )}
            >
              {account.connected ? "Connected" : "Not Connected"}
            </Badge>
          </div>
        ))}
        <p className="text-sm text-muted-foreground mt-4">
          💡 <strong>Tip:</strong> You can link multiple providers to your
          account. When you sign in with a new provider using the same email,
          your accounts will be automatically linked.
        </p>
      </CardContent>
    </Card>
  );
}
