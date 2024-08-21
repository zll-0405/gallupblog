import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Menu from '../components/Menu';
import './globals.css';
import Footer from '../components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '盖洛普博客',
  description: '盖洛普优势测试，才干释义，组合才干案例等',
  metadataBase: new URL('https://strengthsinfo.com/'),
  alternates:{
    canonical: './'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="max-w-3xl mx-auto px-2 bg-slate-900">
        <Menu />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-XXXXXXX" />
    </html>
  );
}
