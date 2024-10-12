"use client";
import React, { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [active, setIsActive] = useState("Home");

  const goToNext = (pageName: string) => {
    setIsActive(pageName);
  };

  return (
    <>
      <nav className="grid grid-cols-4 justify-items-center">
        <Link href="/">
          <p
            className={
              "hover:text-yellow-default font-medium lg:text-xl text-xs lg:mr-7 mr-4 " +
              (active === "Home" ? " text-yellow-default" : "")
            }
            onClick={() => goToNext("Home")}
          >
            Home
          </p>
        </Link>
        <Link href="/about">
          <p
            className={
              "hover:text-yellow-default font-medium lg:text-xl text-xs lg:mr-7 mr-4 " +
              (active === "Articles" ? " text-yellow-default" : "")
            }
            onClick={() => goToNext("About")}
          >
            Articles
          </p>
        </Link>
        <Link href="/about">
          <p
            className={
              "hover:text-yellow-default font-medium lg:text-xl text-xs lg:mr-7 mr-4 " +
              (active === "About" ? " text-yellow-default" : "")
            }
            onClick={() => goToNext("Services")}
          >
            About
          </p>
        </Link>
        <Link href="/contact">
          <p
            className={
              "hover:text-yellow-default font-medium lg:text-xl text-xs  " +
              (active === "Contact" ? " text-yellow-default" : "")
            }
            onClick={() => goToNext("Contact")}
          >
            Contact
          </p>
        </Link>
      </nav>
    </>
  );
};

export default Menu;
