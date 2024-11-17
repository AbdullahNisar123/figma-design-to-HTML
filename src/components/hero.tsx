import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });
const Hero = () => {
  return (
    <div className="my-[66px] p-6 mx-auto w-[92%] md:w-[1030px] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="md:w-[521px] h-[305px] flex flex-col md:justify-between items-start justify-evenly">
        <h1
          className={`${heebo.className} mt-8 md:mt-0 text-[27px] md:text-[48px] font-black text-myBlack`}
        >
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p
          className={`${heebo.className} text-myBlack text-[16px] font-normal`}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={`${heebo.className} text-[18px] font-medium w-[205px] h-[50px] bg-myPink text-white rounded-sm shadow-md shadow-black/60`}
        >
          Download Resume
        </button>
      </div>
      <div className="w-[292px] h-[299px] relative">
        <Image
          className="z-50"
          src={"/assets/hero-image.png"}
          alt="hero-image"
          width={292}
          height={299}
        />
        <div className="bg-heroElipse w-[292px] h-[299px] -z-10 rounded-full absolute top-2 right-2" />
      </div>
    </div>
  );
};

export default Hero;
