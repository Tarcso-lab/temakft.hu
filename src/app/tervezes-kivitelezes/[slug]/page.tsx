import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { buildMetadata } from "@/lib/seo";
import { getPagesForHub, getServicePage } from "@/lib/content";

const HUB = "tervezes-kivitelezes" as const;

export function generateStaticParams() {
  return getPagesForHub(HUB).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(HUB, slug);
  if (!page) return {};

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${HUB}/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(HUB, slug);
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
