// Using.jsx - Updated with responsive classes
import React from 'react'
import Lang from './Lang'
import html from "../../../public/images/about/using/html.png"
import css from "../../../public/images/about/using/css.png"
import sass from "../../../public/images/about/using/sass.png"
import js from "../../../public/images/about/using/js.png"
import react from "../../../public/images/about/using/react.png"
import boot from "../../../public/images/about/using/boot.png"
import git from "../../../public/images/about/using/git.png"
import figma from "../../../public/images/about/using/figma.png"

const Using = () => {
  return (
    <div id='#skills' className='flex flex-col items-center w-full px-4 sm:px-6 lg:px-8'>
      <h2 data-aos="fade-down" className="font-mont font-bold text-xl sm:text-2xl md:text-3xl py-3 sm:py-4 px-6 sm:px-10 text-black tracking-wider outline-4 outline-offset-2 hover:bg-black hover:text-white transition-all duration-400 hover:outline-black text-center">
          SKILLS
        </h2>
        <div  className='w-full'>
            <h3 data-aos="fade-in" className='font-mont text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-wider pb-12 sm:pb-19 uppercase mt-12 sm:mt-18 text-center'>USING NOW:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-16 lg:gap-28">
          <Lang somoy={1000} sobi={html} title="html5"/>
          <Lang somoy={2000} sobi={css} title="css"/>
          <Lang somoy={2500} sobi={sass} title="sass"/>
          <Lang somoy={3000} sobi={js} title="js"/>
          <Lang somoy={1000} sobi={react} title="react"/>
          <Lang somoy={2000} sobi={boot} title="boot"/>
          <Lang somoy={2500} sobi={git} title="git"/>
          <Lang somoy={3000}  sobi={figma} title="figma"/>
        </div>
        </div>
    </div>
  )
}

export default Using