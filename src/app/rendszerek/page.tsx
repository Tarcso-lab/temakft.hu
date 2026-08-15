import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPageView } from "@/components/templates/HubPageView";
import { buildMetadata } from "@/lib/seo";
import { getHub } from "@/lib/content";

const hub = getHub("rendszerek");

export const metadata: Metadata = hub
  ? buildMetadata({
      title: hub.metaTitle,
      description: hub.metaDescription,
      path: hub.slug,
      keywords: hub.keywords,
    })
  : {};

export default function Page() {
  if (!hub) notFound();
  return <HubPageView hub={hub} />;
}
