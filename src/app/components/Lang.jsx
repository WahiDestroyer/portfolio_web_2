// Lang.jsx - Updated with responsive classes
import React from 'react'
import Image from 'next/image'

const Lang = ({sobi, title, somoy}) => {
  return (
    <div data-aos="zoom-in" data-aos-duration={somoy} className='flex flex-col justify-center items-center'>
      <Image src={sobi} alt='Language' className=''/>
      <p className='font-mont text-sm sm:text-lg md:text-xl lg:text-2xl text-black pt-2 sm:pt-4 uppercase tracking-widest text-center'>{title}</p>
    </div>
  )
}

export default Lang