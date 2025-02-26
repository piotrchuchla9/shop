"use client";

import Link from "next/link";
import logo from "../../public/logo.png"
import Image from 'next/image';
import SliderComponent from "./components/slider";

const WelcomePage = () => {
  return (
    <div className="flex items-center">
      <div className="bg-shop-background bg-cover bg-center flex flex-col items-center justify-center align-center w-svw h-svh gap-y-40">
        <div className="flex items-center align-middle justify-center w-fit h-fit bg-gray-400 bg-opacity-20 backdrop-blur-md p-16 rounded-[80px]">
          <Image alt="palatto" className=" w-80 mt-4" src={logo} />
          <div>
            <h1 className="text-[64px] font-bold text-[#4e3515]">𝓟𝓪𝓵𝓪𝓽𝓽𝓸</h1>
            <p className="text-[36px] text-white">Twoje meble ogrodowe</p>
          </div>
        </div>
        <SliderComponent />
        <Link href="#offer" className="mt-4 px-6 py-3 bg-[#4e3515] text-white text-lg rounded-full shadow-md hover:bg-[#3a2711] transition duration-300 ease-in-out">
          Nasza oferta
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;