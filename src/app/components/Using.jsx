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
    <div className='flex flex-col items-center '>
      <h2 className="font-mont font-bold text-3xl py-4 px-10 text-black tracking-wider outline-4 outline-offset-2 hover:bg-black hover:text-white transition-all duration-400 hover:outline-black">
          SKILLS
        </h2>
        <div>
            <h3 className='font-mont text-3xl font-bold text-black tracking-wider pb-19 uppercase mt-18'>USING NOW:</h3>
        <div className="grid grid-cols-4 gap-28">
          <Lang sobi={html} title="html5"/>
          <Lang sobi={css} title="css"/>
          <Lang sobi={sass} title="sass"/>
          <Lang sobi={js} title="js"/>
          <Lang sobi={react} title="react"/>
          <Lang sobi={boot} title="boot"/>
          <Lang sobi={git} title="git"/>
          <Lang sobi={figma} title="figma"/>
        </div>
        </div>
    </div>
  )
}

export default Using
