"use client";
import { useState } from 'react';
import Link from 'next/link';


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='lg:flex fixed hidden md:hidden  w-full z-50'>

            <nav className="relative    w-full">
                <div className=" md:px-16 md:py-6 md:flex md:justify-between md:items-center">
                    <div className="flex items-center md:px-8 ">
                        <Link href="/" passHref>
                            <h3 className=' text-2xl  text-primary  font-pm font-bold'>logo</h3>
                        </Link>  
                    </div>


                    <div className="flex flex-col md:flex-row md:mx-6 font-semibold text-lg md:gap-14  sm:gap-2 ">
                            <Link href="/"  className='group text-gray-600  transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary   from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                    Home
                                </span>
                            </Link>
                            <Link href="/shop" className='group text-gray-600  transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary  from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                    Internship
                                </span>
                            </Link>
                           
                           
                            <Link href="/contact" className='group text-gray-600  transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary   from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                    Placements
                                </span>
                            </Link>
                            <Link href="/about" className='group text-gray-600  transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary  from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                    Apply
                                </span>
                            </Link>
                            <Link href="/about" className='group text-gray-600  transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary   from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                    Employer
                                </span>
                            </Link>
                        </div>

                   
                   
                       
                        <div className="flex justify-center  ">
                            <div className='  flex gap-4'>
                                <Link href={"/register"}>
        
                                    <button className="  md:text-base sm:text-sm  transition-colors duration-300 transform rounded-xl  dark:text-white text-gray-200 bg-primary  dark:bg-primary font-medium py-2 px-8 dark:hover:bg-space-cadet-dark   hover:bg-[#8f57ff] active:scale-95">
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
