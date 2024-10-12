"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setIsActive] = useState("Home");

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goToNext = (pageName: string) => {
    setIsActive(pageName);
  };

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Articles",
      link: "/articles",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav className="hidden md:flex space-x-4">
        {navLinks?.map((link: any, idx: any) => {
          return (
            <Link href={link?.link} key={"link_" + idx}>
              <p
                className={
                  "hover:text-yellow-default font-medium text-xl mr-[30px]" +
                  (pathname === link?.link ? " text-yellow-default" : "")
                }
              >
                {link?.name}
              </p>
            </Link>
          );
        })}
        {/* <Link href="/">
          <p
            className={
              "hover:text-yellow-default font-medium text-xl mr-[30px] " +
              (active === "Home" ? " text-yellow-default" : "")
            }
            onClick={() => goToNext("Home")}
          >
            Home
          </p>
        </Link>
        <Link href="/articles">
          <p
            className={
              "hover:text-yellow-default font-medium text-xl mr-[30px] " +
              (active === "Articles" ? " text-yellow-default" : "")
            }
            onClick={() => goToNext("Articles")}
          >
            Articles
          </p>
        </Link>
        <Link href="/about">
          <p
            className={
              "hover:text-yellow-default font-medium text-xl mr-[30px] " +
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
              "hover:text-yellow-default font-medium text-xl mr-[30px] " +
              (active === "Contact" ? " text-yellow-default" : "")
            }
            onClick={() => goToNext("Contact")}
          >
            Contact
          </p>
        </Link> */}
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <picture>
            <img src="/assets/svg/menu.svg" className="w-6 h-6" alt="menu" />
          </picture>
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleMenu}
      ></div>
      <nav
        className={`fixed inset-y-0 left-0 w-64 bg-gray-default text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <div className="flex flex-col p-4 ">
          <button onClick={toggleMenu} className="focus:outline-none self-end">
            <picture>
              <img
                src="/assets/svg/close.svg"
                className="w-6 h-6"
                alt="close icon"
              />
            </picture>
          </button>
          <Link href="/">
            <p
              onClick={toggleMenu}
              className={
                "hover:text-yellow-default p-2 rounded " +
                (active === "Home"
                  ? "text-yellow-default"
                  : "text-black-default")
              }
            >
              Home
            </p>
          </Link>
          <Link href="/articles">
            <p
              onClick={toggleMenu}
              className={
                "hover:text-yellow-default p-2 rounded " +
                (active === "Articles"
                  ? "text-yellow-default"
                  : "text-black-default")
              }
            >
              Articles
            </p>
          </Link>
          <Link href="/about">
            <p
              onClick={toggleMenu}
              className={
                "hover:text-yellow-default p-2 rounded " +
                (active === "About"
                  ? "text-yellow-default"
                  : "text-black-default")
              }
            >
              About
            </p>
          </Link>
          <Link href="/contact">
            <p
              onClick={toggleMenu}
              className={
                "hover:text-yellow-default p-2 rounded " +
                (active === "Contact"
                  ? "text-yellow-default"
                  : "text-black-default")
              }
            >
              Contact
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default FooterMenu;
