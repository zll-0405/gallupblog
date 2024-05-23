import { notFound } from 'next/navigation';
import { allCases } from 'contentlayer/generated';
import MDX from '@/components/MDX';

export const generateStaticParams = async () => allCases.map((item) => ({ slug: item.slug }));

export const generateMetadata = async ({ params }) => {
  const blog = allCases.find((item) => item.slug === params.slug);
  return {
    title: `${blog.title} - 盖洛普博客`,
    description: blog.description,
  };
};

export default async function Page({ params }) {
  const blog = allCases.find((item) => item.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col items-center px-2 pt-12 pb-8">
        <h1 className="font-medium text-2xl ">{blog.title}</h1>
        <p className="mt-2 text-sm font-mono  text-slate-100">{blog.date}</p>
      </div>
      <article className="px-2 prose max-w-none text-slate-200/80">
        <MDX code={blog.body.code} />
      </article>
    </>
  );
}
