import React from "react";

import UiFoodList from "../Components/Ui/UiFoodList";

const Page = () => {
  return (
    <div className="container mx-auto font-inter mt-10 md:mt-20">
      <UiFoodList categoryName="Sıcak İçecekler" />
    </div>
  );
};

export default Page;
