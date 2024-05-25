import { MetadataRoute } from 'next';
import { compareDesc } from 'date-fns';
import { allTalents, allCases } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const allPost = [...allTalents, ...allCases]
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((item) => ({
      url: `https://gallupblog.com${item.url}`,
      lastModified: new Date(),
    }));

  return [
    {
      url: 'https://gallupblog.com/',
      lastModified: new Date(),
    },
    ...allPost,
  ];
}
