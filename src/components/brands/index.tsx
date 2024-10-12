import React from "react";
import { BrandsList } from "@/constants";

const Brands = () => {
  return (
    <div className="container mx-auto mt-20 mb-16">
      <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 m-4">
        {BrandsList.map((brand: any) => (
          <picture key={brand.id}>
            <img
              src={`/assets/brands/${brand.src}`}
              alt={brand.alt}
              className="max-h-10 w-auto"
            />
          </picture>
        ))}
      </div>
    </div>
  );
};

export default Brands;
