import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import face from '../../../public/images/footer/face.png';
import link from '../../../public/images/footer/link.png';
import ins from '../../../public/images/footer/ins.png';
import email from '../../../public/images/footer/email.png';

const Footer = () => {
  return (
    <footer className='bg-black py-15 flex flex-col items-center justify-center'>
        <div className='flex justify-center items-center flex-col pb-11'>
            <MdKeyboardDoubleArrowUp className='text-white'/>
            <p className='font-mont text-white px-4 font-bold text-base'>BACK TO TOP</p>
        </div>
        <div>
            <ul className='grid grid-cols-4 gap-7'>
                <li>
                    <Link href={"#"} className='font-mont text-white px-4 font-bold text-base'>
                        <Image src={face} alt="face image"/>
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className='font-mont text-white px-4 font-bold text-base'>
                        <Image src={link} alt="linkedin"/>
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className='font-mont text-white px-4 font-bold text-base'>
                        <Image src={ins} alt="instragram"/>
                    </Link>
                </li><li>
                    <Link href={"#"} className='font-mont text-white px-4 font-bold text-base'>
                        <Image src={email} alt="email"/>
                    </Link>
                </li>
            </ul>
        </div>
        <div className='pt-11'>
            <p className='font-sans text-lg font-bold text-white'>@2020 Tomasz Gajda All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
