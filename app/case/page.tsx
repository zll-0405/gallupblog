import { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { compareDesc } from 'date-fns';
import List from '@/components/List';
import { allCases } from 'contentlayer/generated';

const font = Lato({
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `案例分享 - 盖洛普博客`,
};

export default async function Page() {
  const caseList = allCases.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1
          className={`flex flex-col text-3xl text-white leading-normal tracking-wider ${font.className}`}
        >
          案例分享
        </h1>
        <p className="mt-4 text-white text-sm leading-relaxed">
          分享一些觉察
        </p>
      </div>
      <List data={caseList} />
    </>
  );
}
