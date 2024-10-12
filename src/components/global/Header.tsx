import React from "react";
import Menu from "@/components/menu";

const Header = () => {
  return (
    <header className="bg-black-default relative text-white lg:py-10 py-5 w-full md:border-none border-b border-gray-default border-opacity-10">
      <div className="container mx-auto px-5 ">
        <div className="grid grid-cols-2 justify-center items-center place-items-center">
          <div>
            <picture>
              <img src="/assets/logo.png" className="w-3/4" alt="logo" />
            </picture>
          </div>
          <div className="justify-self-end">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
