import React from "react";

import { Input } from "@/components/input";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/svg/logo.svg";

const linkBtns = [
  {
    id: "btn-sealed",
    name: "Sealed",
  },
  {
    id: "btn-singles",
    name: "Singles",
  },
  {
    id: "btn-lorcana",
    name: "Lorcana",
  },
  {
    id: "btn-one-piece",
    name: "One Piece",
  },
];

const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-between gap-4 h-20 bg-blue-900 text-white px-8">
        <img src={logo} alt="logo" width={50} height={50} />
        <Input type="search" placeholder="Enter search term" endIcon={Search} />
        <div className="flex items-center">
          <div className="flex items-center">
            <User />
            <Button className="text-white font-sans" variant="link">
              Log In
            </Button>
          </div>
          <ShoppingCart />
        </div>
      </header>
      <section>
        <nav className="w-full h-12 bg-teal-100 flex items-center justify-center">
          {linkBtns.map(({ id, name }) => (
            <Button
              key={id}
              className="text-lg font-semibold font-sans"
              variant="link"
            >
              {name}
            </Button>
          ))}
        </nav>
      </section>
    </>
  );
};

export default Header;
