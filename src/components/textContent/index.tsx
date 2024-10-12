import React from "react";

const TextContent = ({
  children,
  title,
  subTitle,
  htmlContent,
  imageSrc,
  prose,
  dark,
}: Readonly<{
  children?: React.ReactNode;
  title: string;
  subTitle: string;
  htmlContent: string;
  imageSrc?: string;
  prose: string;
  dark?: boolean;
}>) => {
  return (
    <div className="grid justify-items-center lg:pt-40 pt-16 grid-cols-1 lg:gap-12 gap-8 relative overflow-x-auto leading-[1.65rem]">
      <h1
        className={`${
          dark
            ? "text-white lg:text-6xl text-3xl"
            : "text-gray-50 lg:text-lg text-base"
        }  font-bold`}
      >
        {title}
      </h1>
      <h2
        className={`${
          dark
            ? "text-yellow-50 lg:text-2xl text-lg "
            : "text-black-default lg:text-5xl text-lg "
        } font-bold`}
      >
        {subTitle}
      </h2>
      <div className="justify-self-center">
        <div
          className={`lg:w-[800px] px-4 lg:text-2xl text-base font-medium ${prose} ${
            dark ? "text-gray-100" : "text-black-default"
          }`}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </div>
      {imageSrc ? (
        <div className="mx-4 mb-8">
          <picture>
            <img
              src={`/assets/${imageSrc}`}
              className="rounded-3xl"
              alt="image"
            />
          </picture>
        </div>
      ) : (
        ""
      )}
      {children}
    </div>
  );
};

export default TextContent;
