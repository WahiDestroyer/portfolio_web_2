import Image from "next/image";
import Link from "next/link";
import React from "react";
import sep from "../../../public/images/seperate.png";
import des from "../../../public/images/about/des.png";
import dev from "../../../public/images/about/dev.png";
import main from "../../../public/images/about/main.png";
import Using from "../components/Using";
import Learning from "../components/Learning";
import Other from "../components/Other";

const About = () => {
  return (
    <section className="container flex flex-col items-center justify-center bg-[#FAFAFA] py-40">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-mont font-bold text-3xl py-4 px-6 text-black tracking-widest outline-4 outline-offset-2 hover:bg-black hover:text-white transition-all duration-400 hover:outline-black mb-18">
          ABOUT ME
        </h2>
        <p className="font-sans text-base max-w-[760px] text-center text-black pb-17">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <Link
          href={"#"}
          className="font-semibold text-base font-mont text-black border-x-3 px-5 py-2 hover:text-white hover:bg-black transition-all duration-300"
        >
          EXPLORE
        </Link>
        <Image src={sep} alt="seperate" className="my-25" />
      </div>
      {/* 2nd section */}
      <div className="flex flex-col items-center justify-center ">
        <div className=" 2da flex items-center justify-between gap-50">
          <div className="design relative">
            <Image src={des} alt="design" className="absolute bottom-6 -left-10 z-10" />
            <h4 className="font-mont text-2xl font-bold text-black">DESIGN</h4>
            <p className="font-light text-sm font-sans max-w-[430px]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="dev relative">
            <Image
              src={dev}
              alt="dev"
              className="absolute bottom-6 -left-10 z-10"
            />
            <h4 className="font-mont text-2xl font-bold text-black">
              DEVELOPMENT
            </h4>
            <p className="font-light text-sm font-sans max-w-[430px]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
        <div className="main relative mt-25">
          <Image
            src={main}
            alt="main"
            className="absolute bottom-6 -left-10 z-10"
          />
          <h4 className="font-mont text-2xl font-bold text-black">
            MAINTENANCE
          </h4>
          <p className="font-light text-sm font-sans max-w-[430px]">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
        <Image src={sep} alt="seperate" className="my-25" />
      </div>
      <Using/>
      <Learning/>
      <Other/>
    </section>
  );
};

export default About;
