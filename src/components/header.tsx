import React from 'react';

import { Input } from '@/components/input';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <div className='flex w-full items-center justify-between gap-4 h-20 bg-blue-900 text-white px-8'>
      <h1>Pokemart Northwest</h1>
      <Input type='search' placeholder='Enter search term' endIcon={Search} />
      <div className='flex items-center'>
        <div className='flex items-center'>
          <User />
          <Button className='text-white' variant='link'>
            Log In
          </Button>
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Header;
