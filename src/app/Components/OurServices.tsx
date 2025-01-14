import React from "react";
import UiServicesCard from "./Ui/UiServicesCard";

const OurServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  mt-48 font-inter">
      <div className="mr-5">
        <div>
          <p className="text-red  text-xl font-bold">Hizmetlerimiz</p>{" "}
          <p className="text-5xl font-bol my-10">Özenle Hazırlıyoruz</p>
          <p className="text-gray">
            {" "}
            Kökleri tutkuya dayanan, unutulmaz yemek deneyimleri yaratıyor ve
            mutfak sanatını sıcak misafirperverlikle harmanlayarak olağanüstü
            hizmetler sunuyoruz.
          </p>
        </div>
        <a
          href="#"
          className="block bg-green text-white w-44 h-12 rounded-3xl py-3 px-7 mt-10"
        >
          Ürünleri İncele
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2   gap-5 mt-10 md:mt-0">
        <UiServicesCard
          images="/images/services-1.png"
          title="CATERING"
          desc="Delight your guest with our flavors and presentation"
        />
        <UiServicesCard
          images="/images/services-2.png"
          title="Fast delivery"
          desc="Delight your guest with our flavors and presentation"
        />
        <UiServicesCard
          images="/images/services-3.png"
          title="Online Ordering"
          desc="Delight your guest with our flavors and presentation"
        />
        <UiServicesCard
          images="/images/services-4.png"
          title="Gift Cards"
          desc="Delight your guest with our flavors and presentation"
        />
      </div>
    </div>
  );
};

export default OurServices;
