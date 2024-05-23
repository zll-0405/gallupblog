import { notFound } from 'next/navigation';
import { allTalents } from 'contentlayer/generated';
import MDX from '@/components/MDX';

export const generateStaticParams = async () => allTalents.map((item) => ({ slug: item.slug }));

export const generateMetadata = async ({ params }) => {
  const talent = allTalents.find((item) => item.slug === params.slug);
  return {
    title: `${talent.title} - 盖洛普博客`,
    description: talent.description,
  };
};

export default async function Page({ params }) {
  const talent = allTalents.find((item) => item.slug === params.slug);

  if (!talent) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col items-center px-2 pt-12 pb-8">
        <h1 className="font-medium text-2xl">{talent.title}</h1>
        <p className="mt-2 text-sm font-mono text-slate-100">{talent.date}</p>
      </div>
      <article className="px-2 prose max-w-none text-slate-200/80">
        <MDX code={talent.body.code} />
      </article>
    </>
  );
}
