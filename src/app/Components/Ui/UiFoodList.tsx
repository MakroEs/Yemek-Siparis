import React from "react";
import UiFoodCard from "./UiFoodCard";

type propsType = {
  categoryName: string;
};

const UiFoodList = ({ categoryName }: propsType) => {
  return (
    <div className="m-20">
      <div>
        <p className="text-4xl font-bold">{categoryName}</p>
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

export default UiFoodList;
