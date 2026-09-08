const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({
  hostname: "https://www.dbsoltechnologies.com",
});

const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

sitemap.write({ url: "/" });
sitemap.write({ url: "/about-us" });
sitemap.write({ url: "/services" });
sitemap.write({ url: "/contact-us" });

sitemap.end();

console.log("✅ sitemap.xml generated");