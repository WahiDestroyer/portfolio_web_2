import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import face from '../../../public/images/footer/face.png';
import link from '../../../public/images/footer/link.png';
import ins from '../../../public/images/footer/ins.png';
import email from '../../../public/images/footer/email.png';
import Navbar from './Navbar';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className='bg-black py-8 sm:py-12 lg:py-15 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center items-center flex-col pb-8 sm:pb-10 lg:pb-11'>
            <button 
              onClick={scrollToTop}
              className='flex flex-col items-center hover:opacity-80 transition-opacity duration-300'
            >
              <MdKeyboardDoubleArrowUp className='text-white text-2xl sm:text-3xl'/>
              <p className='font-mont text-white px-4 font-bold text-sm sm:text-base mt-2'>BACK TO TOP</p>
            </button>
        </div>
        <div className='w-full flex justify-center'>
            <ul className='grid grid-cols-4 gap-4 sm:gap-6 lg:gap-7 max-w-md'>
                <li className='flex justify-center'>
                    <Link href={"#"} className='font-mont text-white font-bold flex justify-center'>
                        <Image src={face} alt="face image" className='w-8 h-8 sm:w-10 sm:h-10'/>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={"#"} className='font-mont text-white font-bold flex justify-center'>
                        <Image src={link} alt="linkedin" className='w-8 h-8 sm:w-10 sm:h-10'/>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={"#"} className='font-mont text-white font-bold flex justify-center'>
                        <Image src={ins} alt="instragram" className='w-8 h-8 sm:w-10 sm:h-10'/>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={"#"} className='font-mont text-white font-bold flex justify-center'>
                        <Image src={email} alt="email" className='w-8 h-8 sm:w-10 sm:h-10'/>
                    </Link>
                </li>
            </ul>
        </div>
        <div className='pt-8 sm:pt-10 lg:pt-11'>
            <p className='font-sans text-sm sm:text-base lg:text-lg font-bold text-white text-center'>
                @2020 Tomasz Gajda All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer