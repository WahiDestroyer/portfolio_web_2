import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black '>
        <div className='container flex justify-end items-center'>
            <ul className="grid grid-cols-4 gap-2 py-2.5">
                <li className='font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl'>About me</li><li className='font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl'>Skills</li><li className='font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl'>Portfolio</li><li className='font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl'>CONTACT ME</li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar
