import DiagonalPattern from "@/components/ui/DiagonalPattern";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="relative">
      <div className="max-w-3xl mx-auto px-6 py-2 border-x border-border/40 min-h-screen bg-background relative">
      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />
        {children}
      </div>
    </div>
  );
}
