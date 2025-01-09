const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const generateSitemap = async () => {
  try {
    const hostname = 'https://www.hassanboudraa.me';
    const routes = [
      '/',
      '/projects',
      '/about',
      '/contact',
      '/alxafrica',
      '/upwork',
      '/umi',
      '/tfm',
      '/alxventurs',
      '/algorithmics',
      '/react',
      '/mongodb',
      '/express',
      '/nodejs',
      '/holberton',
      '/frontenddevelopment',
    ];

    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream('./public/sitemap.xml');

    sitemap.pipe(writeStream);

    for (const route of routes) {
      sitemap.write({
        url: route,
        changefreq: 'daily',
        priority: route === '/' ? 1.0 : 0.8,
      });
    }

    sitemap.end();

    await streamToPromise(sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
