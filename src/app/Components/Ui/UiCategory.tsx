import Image from "next/image";
import React from "react";

interface UiCategoryProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}
const UiCategory: React.FC<UiCategoryProps> = ({
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-2xl py-8 px-3 rounded-2xl gap-y-5">
      <div className="bg-lightGreen rounded-full w-28 h-28 flex items-center justify-center">
        <Image src={imageSrc} alt={title} width={100} height={60} />
      </div>
      <div className="text-center">
        <a href="">
          <p className="font-bold text-lg">{title}</p> <p>({subtitle})</p>
        </a>
      </div>
    </div>
  );
};

export default UiCategory;
