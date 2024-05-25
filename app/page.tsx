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

      <div className="pt-10 pb-6 px-3">
          <h2 className="flex flex-col text-3xl text-white leading-normal tracking-wider">
            FAQ
          </h2>
          
          <div className="mt-6 space-y-1">
            <h3 className="flex flex-col text-3xl text-slate-100 leading-normal tracking-wider">
                主要分享
            </h3>
            <p className="text-slate-200">💡 这是一个关于盖洛普的博客，分享盖洛普中 34 个才干的意思，实际案例等</p>
            <p className="text-slate-200">🐒 但我并不是专业的，分享出来的内容是通过 学习/搜索/觉察/和我教练交流 得到的</p>
            <p className="text-slate-200">🤔 它不一定专业，但它一定会很有趣</p>
            <p className="text-slate-200">😆 希望它能给你一些启发， enjoy it</p>
            <p className="text-slate-200">🤩 如果你想进行盖洛普优势测试，可以先读读这篇文章：
                <a href="https://mp.weixin.qq.com/s/yyZ-WKi1JS-koi9yVy32NQ" target="_blank" 
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    盖洛普测评&解读流程及注意事项详解
                </a>
            </p>
            <p className="text-slate-200">🥰 文章作者是我的优势教练，也是官方认证盖洛普教练</p>
            <p className="text-slate-200">🍃 在我眼里，她超专业，介绍给你</p>
          </div>

          <div className="mt-6 space-y-1">
            <h3 className="flex flex-col text-3xl text-slate-100 leading-normal tracking-wider">
                其他问题
            </h3>

            <h4 className="flex flex-col text-2xl text-slate-100 leading-normal tracking-wider">
                为什么从教练那里购买比官网便宜
            </h4>
            <p className="text-slate-200">
                如果是官方认证的盖洛普教练，都会有优惠码，所以从教练那里购买的话，要比在官网购买便宜
            </p>
            
            <h4 className="flex flex-col text-2xl text-slate-100 leading-normal tracking-wider">
                盖洛普优势测评是什么
            </h4>
            <p className="text-slate-200">
                盖洛普优势识别器（也叫克利夫顿优势评估），通过探寻个人本能的思考方式、感受方式和行为模式，来识别个人潜能，并通过提供行动建议、留意盲点等，让你对自己有更深的了解。
            </p>
            <p className="text-slate-200">一句话介绍的话：它可以帮助⼀个⼈科学认识⾃⼰。</p>

            <h4 className="flex flex-col text-2xl text-slate-100 leading-normal tracking-wider">
                盖洛普准吗
            </h4>
            <p className="text-slate-200">准不准这个问题很难回答，怎么看它准不准呢？标准是什么呢？</p>
            <p className="text-slate-200">就我个人的感受来讲，市面上那么多测试的产品，盖洛普粒度是最细的</p>
            <p className="text-slate-200">一些数据供你参考：盖洛普测评的重测信度可以达到 73%（两次测评前后的一致性）；官网有 3000 多万样本数据</p>

            <h4 className="flex flex-col text-2xl text-slate-100 leading-normal tracking-wider">
                盖洛普的应用场景有什么
            </h4>
            <p className="text-slate-200">2022 年开始接触盖洛普之后，到现在也有挺长一段时间</p>
            <p className="text-slate-200">我的亲身体会是，它在 职场/关系/个人成长 上都有应用场景</p>
          </div>

        </div>
    </>
  );
}
