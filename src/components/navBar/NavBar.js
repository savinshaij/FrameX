"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [userTheme, setUserTheme] = useState(null);
    const systemTheme = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;

    useEffect(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem("theme");
            setUserTheme(storedTheme);
            themeCheck(storedTheme);
        }
    }, []);

    const themeCheck = (useTheme) => {
        if (useTheme === 'dark' || (!useTheme && systemTheme)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('theme', 'light');
            setUserTheme('light');
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark');
            setUserTheme('dark');
        }
    }
    return (
        <div className='lg:flex fixed hidden md:hidden  w-full z-50'>

            <nav className="relative    w-full">
                <div className=" md:px-16 md:py-6 md:flex md:justify-between md:items-center">
                    <div className="flex items-center md:px-8 ">
                        <Link href="/" passHref>
                            <h3 className=' text-2xl  text-primary  font-pm font-bold'>InternX</h3>
                        </Link>
                    </div>


                    <div className="flex flex-col md:flex-row md:mx-6 font-semibold text-lg md:gap-14  sm:gap-2 ">
                        <Link href="/" className='group text-gray-500  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary   from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Home
                            </span>
                        </Link>
                        <Link href="/shop" className='group text-gray-500  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary  from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Internship
                            </span>
                        </Link>


                        <Link href="/contact" className='group text-gray-500  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary   from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Placements
                            </span>
                        </Link>
                        <Link href="/about" className='group text-gray-500  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary  from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Apply
                            </span>
                        </Link>
                        <Link href="/about" className='group text-gray-500  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r dark:hover:text-primary hover:text-primary   from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Employer
                            </span>
                        </Link>
                    </div>




                    <div className="flex justify-center  items-center  gap-7 ">


                        <div className='text-sm cursor-pointer h-10 w-10 ' onClick={() => themeSwitch()}>
                            {userTheme === 'light' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6320EE" className="w-9 h-9">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                            </svg> : <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                viewBox="0 0 20 20"
                                fill="#6320EE"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clipRule="evenodd"
                                />
                            </svg>}

                        </div>







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
