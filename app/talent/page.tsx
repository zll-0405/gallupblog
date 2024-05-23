import { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import List from '@/components/List';
import { allTalents } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: `才干释义 - 盖洛普博客`,
};

export default async function Page() {
  const talentList = allTalents.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1 className="flex flex-col text-3xl text-white">
          才干释义
        </h1>
        <p className="mt-4 text-white text-sm leading-relaxed">
          盖洛普单个才干释义
        </p>
      </div>
      <List data={talentList} />
    </>
  );
}
