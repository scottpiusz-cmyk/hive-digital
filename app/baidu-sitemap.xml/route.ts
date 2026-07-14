import { getSitemapEntries, renderSitemapXml } from "@/lib/site-sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(getChineseSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

function getChineseSitemapXml(): string {
  return renderSitemapXml(getSitemapEntries({ locale: "zh-CN" }));
}
