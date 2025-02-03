"use client";
import { useState } from "react";
import Image from "next/image";
import { LuUser } from "react-icons/lu";
import { IoIosArrowForward, IoMdExit } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa6";

export default function ProfilePage() {
  // Hangi içeriğin gösterileceğini tutan state
  const [activeSection, setActiveSection] = useState("account");

  // İçerikleri tanımlayalım
  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Hesap Bilgilerim</h1>
            <p>Ad: John Doe</p>
            <p>Email: john@example.com</p>
          </div>
        );
      case "addresses":
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Adreslerim</h1>
            <p>İş Adresi: ...</p>
            <p>Ev Adresi: ...</p>
          </div>
        );
      case "orders":
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Siparişlerim</h1>
            <p>Son Sipariş: ...</p>
          </div>
        );
      default:
        return <div>Lütfen bir seçim yapın.</div>;
    }
  };

  return (
    <div className="container mx-auto mt-20 font-poppins flex flex-col lg:flex-row px-5 xs:px-0 items-start gap-5">
      {/* Sol Menü (Sabit Kalacak) */}
      <div className="bg-white shadow-xl p-3 rounded-lg w-full sm:w-1/2 lg:max-w-[30%]">
        <div className="flex gap-x-3 items-center border-b pb-5">
          <Image
            src="/images/profilee.png"
            alt="Profile"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div>
            <p className="font-bold">Your Name</p>
            <p className="text-gray">example@mail.com</p>
          </div>
        </div>

        <div className="pt-5 flex flex-col gap-y-3">
          <button
            onClick={() => setActiveSection("account")}
            className={`flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-sectionBg rounded-md w-full ${
              activeSection === "account" ? "bg-sectionBg" : ""
            }`}
          >
            <LuUser size={25} />
            <p>Hesabım</p>
            <IoIosArrowForward size={25} />
          </button>

          <button
            onClick={() => setActiveSection("addresses")}
            className={`flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-sectionBg rounded-md w-full ${
              activeSection === "addresses" ? "bg-sectionBg" : ""
            }`}
          >
            <IoLocationSharp size={25} />
            <p>Adreslerim</p>
            <IoIosArrowForward size={25} />
          </button>

          <button
            onClick={() => setActiveSection("orders")}
            className={`flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-sectionBg rounded-md w-full ${
              activeSection === "orders" ? "bg-sectionBg" : ""
            }`}
          >
            <FaMotorcycle size={25} />
            <p>Siparişlerim</p>
            <IoIosArrowForward size={25} />
          </button>

          <button className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-sectionBg rounded-md w-full">
            <IoMdExit size={25} />
            <p>Çıkış</p>
            <IoIosArrowForward size={25} />
          </button>
        </div>
      </div>

      {/* Sağ İçerik Alanı (Dinamik) */}
      <div className="flex-1 bg-white shadow-xl rounded-lg p-6 w-full">
        {renderContent()}
      </div>
    </div>
  );
}
