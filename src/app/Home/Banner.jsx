import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import at from "../../../public/images/banner/at.png";
import git from "../../../public/images/banner/git.png";
import linkedin from "../../../public/images/banner/link.png";
import man from "../../../public/images/banner/banner.png";

const Banner = () => {
  return (
    <section className="bg-[url(/images/banner/cover.png)] bg-cover bg-center pb-8 sm:pb-12 lg:pb-18">
      <div className="container flex flex-col lg:flex-row justify-between items-center pt-8 sm:pt-12 lg:pt-18 px-4 sm:px-6 lg:px-8">
        <div className="order-2 lg:order-1 w-full lg:w-auto">
          <div className="pb-8 sm:pb-12 lg:pb-56">
            <Link href="/">
              <Image 
                src={logo} 
                alt="logo" 
                className="w-32 h-auto sm:w-40 lg:w-auto"
                width={160}
                height={60}
              />
            </Link>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-ral font-bold text-2xl sm:text-3xl lg:text-4xl text-black pb-6 sm:pb-10 lg:pb-14">
              Hi, I am
            </h2>
            <h1 className="font-ral text-4xl sm:text-5xl lg:text-7xl text-black font-bold leading-tight">
              Tomasz Gajda
            </h1>
            <p className="font-extrabold text-sai font-ral text-lg sm:text-xl lg:text-2xl pb-8 sm:pb-16 lg:pb-32 mt-4">
              Front-end Developer / UI Designer
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6 items-center justify-center lg:justify-start">
            <Link href="#" className="flex items-center justify-center">
              <Image 
                src={at} 
                alt="at" 
                className="bg-ds p-2 sm:p-2.5 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-14 object-contain"
                width={64}
                height={56}
              />
            </Link>
            <Link href="#" className="flex items-center justify-center">
              <Image 
                src={git} 
                alt="git" 
                className="bg-ds p-2 sm:p-2.5 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-14 object-contain"
                width={64}
                height={56}
              />
            </Link>
            <Link href="#" className="flex items-center justify-center">
              <Image 
                src={linkedin} 
                alt="linkedin" 
                className="bg-ds p-2 sm:p-2.5 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-14 object-contain"
                width={64}
                height={56}
              />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 mb-8 lg:mb-0">
          <Image 
            src={man} 
            alt="man" 
            className="w-64 h-auto sm:w-80 lg:w-full max-w-md lg:max-w-none"
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;