import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LIST = [
  {
    title: '才干释义',
    href: '/talent',
  },
  {
    title: '案例分享',
    href: '/case',
  }
];

const Menu: FC = () => {
  return (
    <nav className="flex items-center justify-between pt-6 px-2">
      <Link href="/" className="flex shadow-sm rounded-full overflow-hidden border">
        <Image src="/avatar.jpg" alt="盖洛普博客" width={34} height={34} />
      </Link>
      <ul className="flex px-3 bg-slate-900 rounded-full">
        {LIST.map((item) => (
          <li
            key={item.title}
            className="px-3 py-2 text-sm text-white transition-colors hover:text-rose-700"
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
