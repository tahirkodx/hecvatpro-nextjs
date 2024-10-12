import React from "react";

const Footer = ({
  children,
  className,
}: Readonly<{
  children?: React.ReactNode;
  className?: any;
}>) => {
  const links = [
    {
      name: "Terms",
      link: "#",
    },
    {
      name: "Privacy",
      link: "https://www.hecvatpro.com/privacy",
    },
    {
      name: "Cookies",
      link: "https://www.hecvatpro.com/cookie-policy",
    },
    {
      name: "Accessibility",
      link: "https://www.hecvatpro.com/accessibility-statement/",
    },
  ];

  return (
    <footer className="bg-black-default text-white py-4 w-full">
      <div className="container mx-auto px-4">{children}</div>
      <picture>
        <img
          src="/assets/svg/graph.svg"
          className="w-full lg:-mt-52"
          alt="graph"
        />
      </picture>
      <div className="grid justify-center text-center mb-8">
        <p className="text-gray-30 lg:text-xl text-xs font-medium py-4">
          Copyright © 2023 Launchspeed LLC. All rights reserved.
          <br />
          Have a great day.
        </p>
        <ul className="flex max-sm:flex-col w-full lg:px-6 px-4 max-sm:divide-y sm:divide-x divide-gray-30">
          {links?.map((item: any, idx: any) => {
            return (
              <li
                key={"footer_link_" + idx}
                className="mx-auto w-full max-sm:py-4 px-6"
              >
                <a href={item.link}>
                  <span className="text-gray-30 lg:text-lg text-sm">
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
