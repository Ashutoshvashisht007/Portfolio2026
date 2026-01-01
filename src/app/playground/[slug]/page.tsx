import { componentRegistry } from "@/lib/registry";
import { notFound } from "next/navigation";
import PlaygroundClient from "./PlaygroundClient";

export default async function ComponentPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const item = componentRegistry[slug];

    if (!item) {
        console.error(`Slug "${slug}" not found in registry. Available keys:`, Object.keys(componentRegistry));
        notFound();
    }

    return (
        <PlaygroundClient 
      slug={slug} 
      name={item.name} 
      description={item.description} 
      code={item.code} 
    />
    );
}

// <div className="mt-24 space-y-12 pb-20">
        {/* <div className="flex items-center justify-between border-b border-border pb-6">
                <Link
                    href="/playground"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
                >
                    <FiArrowLeft /> BACK_TO_LAB
                </Link>
                <div className="text-right">
                    <h1 className="text-2xl font-bold">{item.name}</h1>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            </div>

            <div className="relative min-h-100 w-full rounded-3xl border border-border bg-card/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-neutral-900"
                />

                <div className="relative z-10">
                    <SelectedComponent />
                </div>
            </div> */}
    {/* <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                        <FiCode /> SOURCE_CODE
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 text-xs font-mono bg-secondary px-3 py-1 rounded-md hover:bg-muted transition-colors"
                    >
                        {copied ? <><FiCheck className="text-green-500" /> COPIED</> : <><FiCopy /> COPY</>}
                    </button>
                </div>
                <pre className="p-6 rounded-2xl bg-secondary/50 border border-border overflow-x-auto text-xs font-mono leading-relaxed">
                    <code>{item.code}</code>
                </pre>
            </div> */}
    // </div>