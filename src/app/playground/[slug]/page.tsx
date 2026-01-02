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

