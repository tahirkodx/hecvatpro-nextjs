import React from "react";
import { Content } from "@/constants";

const Testimonial = () => {
  return (
    <div className="grid justify-items-center mb-8 mx-4">
      <h1 className="text-gray-50 text-lg font-bold my-8 text-center">
        {Content.TESTIMONIALS.TITLE}
      </h1>
      <h2 className="text-black-default text-4xl font-bold mb-8 text-center">
        {Content.TESTIMONIALS.SUB_TITLE}
      </h2>
      {Content.TESTIMONIALS.LIST.map((item, index) => {
        return (
          <div
            key={item.HIGHLIGHT + index}
            className="bg-yellow-100 my-10 shadow-lg grid  justify-items-center py-4 rounded-[30px] "
          >
            <h1 className="lg:text-3xl text-xl font-bold text-yellow-200 my-8 w-4/5 text-center">
              &quot;{item.HIGHLIGHT}&quot;
            </h1>
            <div className="flex items-center mb-4">
              {Array.from(Array(item.RATING).keys()).map((rating) => {
                return (
                  <picture key={rating}>
                    <img
                      src="/assets/svg/star.svg"
                      alt="Rating"
                      className="lg:w-7 lg:h-7 w-4 h-4"
                    />
                  </picture>
                );
              })}
              <span className="text-gray-150 lg:ml-6 ml-4 font-bold">
                {item.USERNAME} - {item.DATE}
              </span>
            </div>
            <div
              className="lg:w-11/12 text-gray-700 lg:text-2xl text-base font-medium pl-2 prose"
              dangerouslySetInnerHTML={{ __html: item.CONTENT }}
            ></div>
            <div className="flex items-center mt-6 justify-start">
              <picture>
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src={`/assets/${item.IMAGE}`}
                  alt="Peter Placek"
                />
              </picture>
              <div className="text-sm">
                <p className="text-gray-900 leading-none font-bold">
                  {item.FULL_NAME}
                </p>
                <p className="text-black-default">
                  {item.ROLE},{" "}
                  <span className="text-gray-50">{item.COMPANY_NAME}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
