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
    <section className="bg-[url(/images/banner/cover.png)]">
      <div className="container flex justify-between items-center pt-18">
        <div className="">
          <div className="pb-56 ">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <h2 className="font-ral font-bold text-4xl text-black pb-14">
              Hi, I am
            </h2>
            <h1 className="font-ral text-7xl text-black font-bold">
              Tomasz Gajda
            </h1>
            <p className="font-extrabold text-sai font-ral text-2xl pb-32">
              Front-end Developer / UI Designer
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="#" className="w-16 h-14">
              <Image src={at} alt="at" className="bg-ds p-2.5" />
            </Link>
            <Link href="#" className="w-16 h-14">
              <Image src={git} alt="git" className="bg-ds p-2.5" />
            </Link>
            <Link href="#" className="w-16 h-14">
              <Image src={linkedin} alt="linkedin" className="bg-ds p-2.5" />
            </Link>
          </div>
        </div>
        <div>
          <Image src={man} alt="man" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
