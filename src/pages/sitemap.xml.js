import fs from "fs";

const Sitemap = () => { };

export const getServerSideProps = ({ res }) => {
  const baseUrl = "https://korkfurniture.uz";
  const languagePaths = ["/uz", "/ru", "en"];
  console.log(process.cwd())
  const staticRoutes = fs
    .readdirSync(`${process.cwd()}/src/pages`)
    .filter(
      (staticPage) =>
        !["_app.js", "sitemap.xml.js", "404.js", "500.js", "index.js"].includes(
          staticPage
        )
    )
    .map((staticPagePath) => `/${staticPagePath?.replace(".js", "")}`);
  const staticPagesWithLanguagePath = languagePaths.map((path) =>
    staticRoutes?.map((route) => `${baseUrl}${path}${route}`)
  );
  const staticPages = staticPagesWithLanguagePath.flat();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
      .map(
        (url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
      )
      .join("")}
          ${staticPages
      .map(
        (url) => `
              <url>
                <loc>${url}/uz</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `
      )
      .join("")}
              ${staticPages
      .map(
        (url) => `
                <url>
                  <loc>${url}/en</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `
      )
      .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
