import { FC } from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

export interface MDXProps {
  code: string;
}

const MDX: FC<MDXProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return <Component components={{ 
      img: (props: any) => <Image {...props} />,
      h2: (props: any) => <h2 className="text-slate-200" {...props} />,
      h3: (props: any) => <h2 className="text-slate-200/90" {...props} />,
      h4: (props: any) => <h2 className="text-slate-200/90" {...props} />,
      a: (props: any) => <a className='text-sky-300' {...props} />,  
    }} />;
};

export default MDX;
