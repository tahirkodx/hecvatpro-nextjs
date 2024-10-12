import { cn } from "@/lib/utils";
import React from "react";

const Banner = ({
  children,
  className,
  showIndicator = true,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  showIndicator?: boolean;
}>) => {
  return (
    <div
      className={cn(
        "bg-black-default w-full flex flex-col pt-2 items-center justify-center text-white",
        showIndicator && "lg:indicator",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Banner;
