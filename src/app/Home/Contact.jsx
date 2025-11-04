// Contact.jsx - Updated with responsive classes
import React from "react";
import sep from "../../../public/images/seperate.png";
import Image from "next/image";
import FormPart from "../components/FormPart";

const Contact = () => {
  return (
    <section className="container flex flex-col items-center justify-center py-20 md:py-40 px-4 sm:px-6 lg:px-8">
      <h2 className="font-mont font-bold text-xl sm:text-2xl md:text-3xl py-3 sm:py-4 px-6 sm:px-10 text-black tracking-wider outline-4 outline-offset-2 hover:bg-black hover:text-white transition-all duration-400 hover:outline-black text-center">
        CONTACT
      </h2>
      <p className="font-sans text-sm sm:text-base text-center max-w-full sm:max-w-[600px] md:max-w-[760px] pt-8 sm:pt-12 lg:pt-15 text-black pb-8 sm:pb-10 px-4">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
      </p>
      <Image src={sep} alt="seperator" className="w-3/4 sm:w-auto my-8 sm:my-12"/>
      <FormPart/>
    </section>
  );
};

export default Contact;