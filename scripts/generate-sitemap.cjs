const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");
const { finished } = require("node:stream/promises");

const sitemapUrls = [
  "/",
  "/about-us/",
  "/contact-us/",
  "/power-platform-solutions/",
  "/modules/",
  "/cta-section/",
  "/business-central/",
  "/customer-engagement/",
  "/business-consulting/",
  "/finance-operation/",
  "/dynamics-365-business/",
  "/web-development/",
  "/mobile-app-development/",
  "/services/erp/",
  "/industries/it-ites/",
  "/industries/manufacturing/",
  "/industries/retail-wholesale/",
  "/industries/logistics-supply-chain/",
  "/industries/banking-finance/",
  "/industries/healthcare/",
  "/industries/education/",
  "/industries/hospitality/",
  "/industries/professional-services/",
  "/solutions/financial-management-system/",
  "/solutions/human-resource-management-system/",
  "/solutions/supply-chain-management-system/",
  "/solutions/warehouse-management-system/",
  "/solutions/inventory-management-system/",
  "/careers/",
  "/careers/apply/",
  "/case-studies/",
  "/news/",
  "/globe/",
  "/why-choose-us/",
  "/company-stats/",
  "/security-privacy/",
  "/knowledge-and-resources/",
  "/blogs/",
  ...[
    "dynamics-365-finance-operations-vs-business-central",
    "migrate-from-ax-2012-to-dynamics-365",
    "dynamics-365-erp-implementation-cost",
    "common-erp-implementation-challenges-in-manufacturing",
    "how-erp-systems-improve-healthcare-operations",
  ].map((slug) => `/blogs/${slug}/`),
  ...[
    "finance",
    "supply-chain-management",
    "marketing",
    "sales",
    "manufacturing",
    "customer-service",
    "project-operations",
    "human-resources",
    "commerce",
    "field-service",
  ].map((slug) => `/modules/${slug}/`),
  ...[
    "manufacturing",
    "finance",
    "retail",
    "healthcare",
    "logistics",
    "education",
    "professional-services",
    "hospitality",
    "it-ites",
  ].map((slug) => `/case-studies/${slug}/`),
];

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://www.dbsoltechnologies.com",
  });
  const writeStream = createWriteStream("./public/sitemap.xml");
  const writeFinished = finished(writeStream);

  sitemap.pipe(writeStream);
  sitemapUrls.forEach((url) => sitemap.write({ url }));
  sitemap.end();

  await writeFinished;
  console.log(`Generated sitemap.xml with ${sitemapUrls.length} URLs`);
}

generateSitemap().catch((error) => {
  console.error("Failed to generate sitemap.xml:", error);
  process.exitCode = 1;
});