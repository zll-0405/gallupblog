import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="mt-2 px-2 py-6">
      <div className="flex items-center space-x-2 pt-6 text-xs text-slate-300">
        <p>Copyright &copy; {new Date().getFullYear()} 
          <a className="hover:text-rose-600" href='https://strengthsinfo.com/'> StrengthsInfo</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
