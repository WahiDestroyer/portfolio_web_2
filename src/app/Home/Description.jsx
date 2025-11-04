
import Link from "next/link";
import React from "react";
import des from "../../../public/images/description.png";
import Image from "next/image";

const Description = () => {
  return (
    <section className="relative flex bg-[rgba(0,0,0,0.9)] justify-between">
      <div className=" py-14 pl-26">
        <h3 className="font-mont text-3xl font-bold text-white">IT BERRIES</h3>
        <p className="max-w-[1150px] font-sans text-base text-white pt-16 pb-6.5">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
        <Link href="#" className="font-mont text-base font-semibold text-white border-l-2 border-r-2 px-4 py-2 hover:text-black hover:bg-white transition-all duration-300 before:border-white">Read more</Link>
      </div>
     <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 h-full -z-10">
  <Image 
    src={des} 
    alt="Description" 
    className="h-auto max-h-full object-contain"
  />
</div>
    </section>
  );
};

export default Description;
