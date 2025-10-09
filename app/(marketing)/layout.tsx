export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex-1 w-full max-w-7xl mx-auto p-0 sm:p-8">
        {children}
      </div>
    </div>
  );
}
