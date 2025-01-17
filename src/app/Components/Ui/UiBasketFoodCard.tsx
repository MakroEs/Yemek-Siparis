"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

type propsType = {
  image: string;
  title: string;
  desc: string;
  price: string;
  quantity: number;
};

const UiBasketFoodCard = ({
  image,
  title,
  desc,
  price,
  quantity,
}: propsType) => {
  const [quantityValue, setQuantityValue] = useState<number>(quantity);

  const decreaseQuantity = () => {
    setQuantityValue((prev) => Math.max(0, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantityValue((prev) => prev + 1);
  };

  return (
    <div className="flex gap-x-3 bg-white rounded-2xl p-3 relative my-3">
      <div>
        <Image src={image} alt="" width={90} height={95} />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-gray my-3 text-sm lg:text-base">{desc}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">{price}</p>
          <div className="flex items-center gap-x-2">
            <button
              className="bg-green rounded-full text-white w-6 h-6 flex items-center justify-center"
              onClick={decreaseQuantity}
            >
              <CiCircleMinus size={20} />
            </button>
            <p className="w-4">{quantityValue}</p>
            <button
              className="bg-green rounded-full text-white w-6 h-6 flex items-center justify-center"
              onClick={increaseQuantity}
            >
              <CiCirclePlus size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-2">
        <button>
          <FaRegTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default UiBasketFoodCard;
