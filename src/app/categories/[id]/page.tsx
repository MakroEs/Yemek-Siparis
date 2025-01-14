import UiFoodCard from "@/app/Components/Ui/UiFoodCard";
import React from "react";

const Page = () => {
  return (
    <div className="mx-auto container font-inter mt-20">
      <div>
        <p className="text-4xl font-bold">Sıcak İçecekler</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 mt-10">
        <UiFoodCard
          id={"Salata"}
          foodName={"Salata"}
          desc={"loremlorem"}
          price={22}
          images="ui-food-card.png"
        />
        <UiFoodCard
          id={"Salata"}
          foodName={"Salata"}
          desc={"loremlorem"}
          price={22}
          images="ui-food-card.png"
        />
        <UiFoodCard
          id={"Salata"}
          foodName={"Salata"}
          desc={"loremlorem"}
          price={22}
          images="ui-food-card.png"
        />
        <UiFoodCard
          id={"Salata"}
          foodName={"Salata"}
          desc={"loremlorem"}
          price={22}
          images="ui-food-card.png"
        />
        <UiFoodCard
          id={"Salata"}
          foodName={"Salata"}
          desc={"loremlorem"}
          price={22}
          images="ui-food-card.png"
        />
        <UiFoodCard
          id={"Salata"}
          foodName={"Salata"}
          desc={"loremlorem"}
          price={22}
          images="ui-food-card.png"
        />
        <UiFoodCard
          id={"Salata"}
          foodName={"Salata"}
          desc={"loremlorem"}
          price={22}
          images="ui-food-card.png"
        />
        <UiFoodCard
          id={"Salata"}
          foodName={"Salata"}
          desc={"loremlorem"}
          price={22}
          images="ui-food-card.png"
        />
      </div>
    </div>
  );
};

export default Page;
