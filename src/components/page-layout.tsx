import { ReactNode } from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
