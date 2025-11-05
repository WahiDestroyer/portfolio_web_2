// About.jsx - Updated with responsive classes
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
    <section className="bg-[#FAFAFA]">
    <div id="about" className="container flex flex-col items-center justify-center py-20 md:pb-40 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 data-aos="fade-down" data-aos-duration="2500" className="font-mont font-bold text-xl sm:text-2xl md:text-3xl py-3 sm:py-4 px-4 sm:px-6 text-black tracking-widest outline-4 outline-offset-2 hover:bg-black hover:text-white transition-all duration-400 hover:outline-black mb-12 sm:mb-18 text-center">
          ABOUT ME
        </h2>
        <p data-aos="fade-down" className="font-sans text-sm sm:text-base max-w-full sm:max-w-[600px] md:max-w-[760px] text-center text-black pb-12 sm:pb-17 px-4">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <Link
          href={"#"} data-aos="fade-down" data-aos-duration="1500"
          className="font-semibold text-sm sm:text-base font-mont text-black border-x-3 px-4 sm:px-5 py-2 hover:text-white hover:bg-black transition-all duration-300"
        >
          EXPLORE
        </Link>
        <Image src={sep} alt="seperate" data-aos="zoom-in" className="my-16 sm:my-25 w-3/4 sm:w-auto" />
      </div>
      {/* 2nd section */}
<div className="flex flex-col items-center justify-center w-full">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl w-full px-4">
    {/* DESIGN */}
    <div data-aos="fade-right" className="design relative flex flex-col items-center lg:items-start text-center lg:text-left">
      <Image
        src={des}
        alt="design"
        className="absolute bottom-6 -left-4 sm:-left-10 z-10 w-8 h-8 sm:w-auto sm:h-auto"
      />
      <h4 className="font-mont text-xl sm:text-2xl font-bold text-black mt-8 sm:mt-0">
        DESIGN
      </h4>
      <p className="font-light text-xs sm:text-sm font-sans max-w-full sm:max-w-[430px] mt-2">
        I can design the site based on your needs and suggestions. I can
        also design the site from scratch and consult you during the job.
      </p>
    </div>

    {/* DEVELOPMENT */}
    <div data-aos="fade-left" className="dev relative flex flex-col items-center lg:items-start text-center lg:text-left">
      <Image
        src={dev}
        alt="dev"
        className="absolute bottom-6 -left-4 sm:-left-10 z-10 w-8 h-8 sm:w-auto sm:h-auto"
      />
      <h4 className="font-mont text-xl sm:text-2xl font-bold text-black mt-8 sm:mt-0">
        DEVELOPMENT
      </h4>
      <p className="font-light text-xs sm:text-sm font-sans max-w-full sm:max-w-[430px] mt-2">
        I can design the site based on your needs and suggestions. I can
        also design the site from scratch and consult you during the job.
      </p>
    </div>
  </div>

  {/* MAINTENANCE */}
  <div data-aos="fade-up" className="main relative mt-16 flex flex-col items-center w-full max-w-[430px] px-4">
    <Image
      src={main}
      alt="main"
      className="absolute bottom-16 -left-4 z-10 w-8 h-8 sm:w-auto sm:h-auto"
    />
    <h4 className="font-mont text-xl sm:text-2xl font-bold text-black mt-8 sm:mt-0">
      MAINTENANCE
    </h4>
    <p className="font-light text-xs sm:text-sm font-sans mt-2">
      I can design the site based on your needs and suggestions. I can
      also design the site from scratch and consult you during the job.
    </p>
  </div>

  <Image
    src={sep}
    alt="seperate"
    data-aos="zoom-in"
    className="my-16 sm:my-25 w-3/4 sm:w-auto"
  />
</div>
      <div id='skills'>
        <Using />
      <Learning />
      <Other />
      </div>
    </div></section>
  );
};

export default About;