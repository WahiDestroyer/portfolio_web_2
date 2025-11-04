import React from "react";
import sep from "../../../public/images/seperate.png";
import Image from "next/image";
import FormPart from "../components/FormPart";


const Contact = () => {
  return (
    <section className="container flex flex-col items-center justify-center">
      <h2 className="font-mont font-bold text-3xl py-4 px-10 text-black tracking-wider outline-4 outline-offset-2 hover:bg-black hover:text-white transition-all duration-400 hover:outline-black">
        CONTACT
      </h2>
      <p className="font-sans text-base text-center max-w-[760px] pt-15 text-black pb-10">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
      <Image src={sep} alt="seperator"/>
      <FormPart/>
    </section>
  );
};

export default Contact;
