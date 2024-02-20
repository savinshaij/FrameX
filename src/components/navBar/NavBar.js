"use client";
import { useState } from 'react';
import Link from 'next/link';


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fixed w-full z-50'>

            <nav className="relative    w-full">
                <div className=" md:px-16 md:py-6 md:flex md:justify-between md:items-center">
                    <div className="flex items-center md:px-8 ">
                        <Link href="/" passHref>
                            <h3 className=' text-2xl  text-primary  font-pm font-bold'>logo</h3>
                        </Link>  
                    </div>


                    <div className="flex flex-col md:flex-row md:mx-6 font-semibold md:gap-6  ">
                            <Link href="/" >
                                <span className="my-2 text-gray-600 transition-colors duration-300 transform  hover:text-primary hover:border-b-2 border-primary dark:hover:text-primary md:mx-4 md:my-0">
                                    Home
                                </span>
                            </Link>
                            <Link href="/shop" passHref>
                                <span className="my-2 text-gray-600 transition-colors duration-300 transform  hover:text-primary dark:hover:text-primary md:mx-4 md:my-0">
                                    Menu
                                </span>
                            </Link>
                           
                           
                            <Link href="/contact" passHref>
                                <span className="my-2 text-gray-600 transition-colors duration-300 transform  hover:text-primary dark:hover:text-primary md:mx-4 md:my-0">
                                    Contact
                                </span>
                            </Link>
                            <Link href="/about" passHref>
                                <span className="my-2 text-gray-600 transition-colors duration-300 transform  hover:text-primary dark:hover:text-primary md:mx-4 md:my-0">
                                    About
                                </span>
                            </Link>
                        </div>

                   
                   
                       
                        <div className="flex justify-center  ">
                            <div className='  flex gap-4'>
                                <Link href={"/register"}>
        
                                    <button className="  text-base transition-colors duration-300 transform rounded-xl  dark:text-gray-400 text-gray-200 bg-primary  dark:bg-space-cadet-dark font-normal py-2 px-8 dark:hover:bg-primary   hover:bg-[#8f57ff] active:scale-95">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>


                </div>
            </nav>
        </div>

    );
};

export default NavBar;
