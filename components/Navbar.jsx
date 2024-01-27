'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { navLinks } from '@/constants';


export const Navbar = () => {

    const [navBackground, setNavBackground] = useState('w-0');
    const [logo, setlogo] = useState('opacity-0');
    const [links, setLinks] = useState('opacity-0');
    const [buttonSvg, setButtonSvg] = useState('menu');
    const [selectedLink, setSelectedLink] = useState(null);

    const handleClick = () => {

        setNavBackground((preValue) => (preValue === 'w-0' ? 'w-[50%]' : 'w-0'));
        setlogo((preLogo) => (preLogo === 'opacity-0' ? 'opacity-100' : 'opacity-0'));
        setLinks((preLinks) => (preLinks === 'opacity-0' ? 
        'opacity-100' : 'opacity-0')); 
        setButtonSvg((preBtnSvg) => (preBtnSvg === 'menu' ? 'x' : 'menu'));
    }

    const handleClickLinks = (index) => {
        setSelectedLink(index)
    }
    


    return (
        <>
            <div className=''>
                <div className={`bg-grayNav h-screen absolute sm:static sm:w-[98%] duration-300 
                ${navBackground} ease-in-out`}>
                    <nav className="py-5 grid h-screen grid-rows-[100px,1fr] pl-2
                    w-[80%] mx-auto">

                        {/* Logo */}
                        <p className={`text-darkOrange z-20 font-bold duration-300 ease ${logo} sm:opacity-100
                            mt-6 sm:py-0`}>
                            Dev
                            <span className='text-darkBlue'>
                                challenges.io
                            </span>
                        </p>    


                        {/* Links */}
                        <ul className={` ${links} duration-200 ease sm:opacity-100
                        grid gap-7 self-start mt-14`}>
                            {navLinks.map((item, index) => (
                                <li key={item} onClick={() => handleClickLinks(index)}
                                className='text-grayText hover:text-gray-700'>
                                    <a href={item.href} className=
                                    {index === selectedLink ? 'font-bold text-black duration-300 ease' : ''}>
                                        {item.label}            
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                </div>

                <div className=''>
                    <button className="sm:hidden absolute left-5 top-3 z-20 cursor-pointer" onClick={handleClick}>
                        {buttonSvg === 'menu' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
                            </svg> 
                        ): (
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}
