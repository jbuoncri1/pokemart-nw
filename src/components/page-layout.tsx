import { ReactNode } from 'react';

import { Input } from '@/components/input';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className='flex w-full items-center justify-center gap-4 h-20 bg-emerald-600 text-white'>
        <h1>Pokemart Northwest</h1>
        <Input type='search' placeholder='Enter search term' endIcon={Search} />
        <div className='flex items-center'>
          <User />
          <Button className='text-white' variant='link'>
            Log In
          </Button>
        </div>
        <ShoppingCart />
      </div>
      <div>{children}</div>
      <div className=''>Footer</div>
    </>
  );
};

export default PageLayout;
