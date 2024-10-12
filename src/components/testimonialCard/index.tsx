import Link from "next/link";
import React from "react";

interface TestimonialCardProps {
  names: string;
  description: string;
  linkText: string;
  linkUrl: string;
  isDark?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  names,
  description,
  linkText,
  linkUrl,
  isDark,
}) => {
  return (
    <div
      className={`${
        isDark ? "bg-black-50" : ""
      } lg:rounded-full rounded-3xl p-9 lg:my-16 my-6 flex lg:flex-row flex-col items-center space-x-4 lg:w-1/2 w-11/12`}
    >
      <div className="flex -space-x-2">
        <picture>
          <img
            src="/assets/customers.png"
            alt="Profile"
            className="lg:w-full w-28"
          />
        </picture>
      </div>
      <div className="grid lg:justify-items-start justify-items-center">
        <p
          className={`lg:text-base text-xs font-bold ${
            isDark ? "text-gray-50" : "text-black-default"
          }`}
        >
          {names}
        </p>
        <p className="lg:text-base text-xs text-gray-50">
          {description}{" "}
          <Link href={linkUrl} className="text-blue-500 underline">
            {linkText}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
