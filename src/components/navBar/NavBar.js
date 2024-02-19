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

            <nav className="relative bg-white shadow  w-full">
                <div className=" md:px-16 md:py-3 md:flex md:justify-between md:items-center">
                    <div className="flex items-center ">
                        <Link href="/" passHref>
                            <h3 className=' text-2xl text-purple-600  font-pm font-bold'>logo</h3>
                        </Link>  
                    </div>


                    <div className="flex flex-col md:flex-row md:mx-6 font-medium">
                            <Link href="/" >
                                <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                    Home
                                </span>
                            </Link>
                            <Link href="/shop" passHref>
                                <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                    Menu
                                </span>
                            </Link>
                            <Link href="/contact" passHref>
                                <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                    Contact
                                </span>
                            </Link>
                            <Link href="/about" passHref>
                                <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                    About
                                </span>
                            </Link>
                        </div>

                   
                   
                       
                        <div className="flex justify-center  ">
                            <div className='  flex gap-4'>
                                <Link href={"/register"}>
                                    <button className="  rounded-3xl  border-2 text-gray-500 font-medium py-2 px-6  transition-all hover:bg-gray-100 active:scale-95">
                                        Register
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
