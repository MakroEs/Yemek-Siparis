"use client";
import Image from "next/image";
import { useState } from "react";
import { IoMdBasket } from "react-icons/io";

const Page = () => {
  const [removedItem, setRemovedItem] = useState<string[]>([]);
  const [customerNote, setCustomerNote] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setRemovedItem([...removedItem, e.target.value]);
    } else {
      setRemovedItem(removedItem.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="container mx-auto mt-20 font-inter">
      <div>
        <p className="text-4xl font-bold">Salata</p>
      </div>
      <div className=" bg-sectionBg p-5 rounded-xl mt-10 grid grid-cols-2">
        <div>
          <Image
            src="/images/ui-food-card.png"
            alt=""
            width={400}
            height={450}
          />
        </div>
        <div>
          <div>
            <p className="text-5xl font-bold">Fattoush salad</p>
            <p className="text-gray mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
              minus.
            </p>
          </div>
          <div className="mt-5">
            <p className="font-seminbold">Çıkarmak istediğiniz malzemeler</p>
            <div className="flex gap-x-3 mt-2">
              <div className="flex gap-x-2  items-center">
                <input type="checkbox" value="item1" onChange={handleChange} />
                <span>lorem</span>
              </div>
              <div className="flex gap-x-2  items-center">
                <input type="checkbox" value="item2" onChange={handleChange} />
                <span>lorem</span>
              </div>
              <div className="flex gap-x-2  items-center">
                <input type="checkbox" value="item3" onChange={handleChange} />
                <span>lorem</span>
              </div>
              <div className="flex gap-x-2  items-center">
                <input type="checkbox" value="item4" onChange={handleChange} />
                <span>lorem</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-semibold mb-2">Sipariş Notu</p>
            <textarea
              name=""
              id=""
              className="rounded-lg w-full px-3 py-1"
              rows={5}
              value={customerNote}
              onChange={(e) => setCustomerNote(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between mt-14">
            <div className="flex items-center gap-x-1 ">
              <p className="text-red font-semibold text-2xl">$</p>
              <p className="font-semibold text-3xl">24.00</p>
            </div>
            <div>
              <button className="bg-green py-2 px-3 rounded-lg flex  items-center gap-x-2 ">
                <IoMdBasket size={30} />
                Sepete ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
