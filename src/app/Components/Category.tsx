import React from "react";
import UiCategory from "./Ui/UiCategory";

const Category = () => {
  return (
    <div className="container mx-auto font-inter mt-32 ">
      <div className="text-center">
        <p className="text-red text-2xl mb-5">Müşteri Favorileri</p>
        <p className="text-5xl font-bold">Popüler Kategoriler</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-20">
        <UiCategory
          imageSrc="/images/ui-category.png"
          title="Hamburger"
          subtitle="220 ₺"
        />
        <UiCategory
          imageSrc="/images/ui-pizza-category.png"
          title="Pizza"
          subtitle="300 ₺"
        />
        <UiCategory
          imageSrc="/images/ui-doner-category.png"
          title="Döner"
          subtitle="120 ₺"
        />
        <UiCategory
          imageSrc="/images/ui-tavuk-category.png"
          title="Kızarmış Tavuk"
          subtitle="100 ₺"
        />
      </div>
    </div>
  );
};

export default Category;
