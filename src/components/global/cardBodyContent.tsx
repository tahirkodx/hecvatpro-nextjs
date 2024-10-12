import React from 'react'
import Button from '@/components/inputs/button';
import { Content } from '@/constants/content';

const cardBodyContent = ({
  title,
  list,
  buttonText,
  note,
  dark
}: Readonly<{
  title?: string;
  list: string[];
  buttonText: string;
  note?: string;
  dark?: boolean;
}>) => {
  return (
    <>
        <h1 className={`lg:text-6xl text-3xl font-bold ${dark ? 'text-white' : 'text-black-default'} justify-self-center lg:pt-16 pt-8`}>
          {title}
        </h1>
        <div className="lg:w-[120%] w-11/12 lg:h-[3px] h-[2px] bg-gray-100 justify-self-center mt-8 lg:mb-16"></div>
        <ul className="justify-self-center lg:leading-10  mb-2 lg:mt-0 mt-8 ml-5">
          {list.map((item: string, index: number) => {
            return (
              <li key={index}>
                {
                  <p
                    className={`${dark ? 'prose-dark text-white' : 'prose'}  bg-green-arrow bg-no-repeat lg:bg-30 bg-25x20 bg-left lg:mb-10 mb-4 lg:pl-16 pl-7 lg:leading-10 leading-6 lg:text-4xl text-base`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></p>
                }
              </li>
            );
          })}
        </ul>
        {note ? <p className={`${ dark ? 'text-white' : 'text-black-default'} lg:text-2xl text-base font-normal text-center`}>{note}</p> : ""}
        <Button className="font-bold lg:text-3xl text-xs m-5 mb-10 justify-self-center">
          {buttonText}
        </Button>
    </>
  )
}

export default cardBodyContent