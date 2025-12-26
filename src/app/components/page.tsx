
export default function ComponentsShowcase() {
  const myComponents = [
    { name: "Glass Card", status: "Stable" },
    { name: "Animated Button", status: "Beta" },
  ];

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">UI Lab</h1>
        <p className="text-muted">A collection of experiments and reusable bits.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myComponents.map((c) => (
          <div key={c.name} className="p-6 rounded-2xl border border-border hover-glow transition-all cursor-pointer">
             <span className="text-xs font-mono text-muted uppercase tracking-widest">{c.status}</span>
             <h3 className="text-lg font-medium mt-1">{c.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}