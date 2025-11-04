import React from 'react'

import Image from 'next/image'

const Lang = ({sobi, title}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src={sobi} alt='Language'/>
      <p className='font-mont text-2xl text-black pt-4 uppercase tracking-widest'>{title}</p>
    </div>
  )
}

export default Lang
