import Link from 'next/link';
import { Anton } from 'next/font/google';
import { ArrowUpRightIcon } from 'lucide-react';
import { compareDesc } from 'date-fns';
import List from '@/components/List';
import { allCases, allTalents } from 'contentlayer/generated';

const font = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default async function Page() {
  const caseList = allCases
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 5);

  const talentList = allTalents
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 5);

  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1
          className={`flex flex-col text-3xl text-white leading-normal tracking-wider ${font.className}`}
        >
          <span>盖洛普博客</span>
        </h1>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between px-3">
          <h2 className="font-medium text-xl text-slate-200">案例分享</h2>
          <Link
            className="text-blue-200 transition-colors hover:text-blue-600"
            href="/case"
            title="查看全部"
          >
            <ArrowUpRightIcon size={20} />
          </Link>
        </div>
        <List data={caseList} className="mt-4" />
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between px-3">
          <h2 className="font-medium text-xl text-slate-200">才干释义</h2>
          <Link
            className="text-blue-200 transition-colors hover:text-blue-600"
            href="/talent"
            title="才干释义"
          >
            <ArrowUpRightIcon size={20} />
          </Link>
        </div>
        <List data={talentList} className="mt-4" />
      </div>
    </>
  );
}
