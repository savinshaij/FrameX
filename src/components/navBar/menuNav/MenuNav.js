'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './nav/Nav';

const menu = {
    open: {
        width: "100%",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function MenuNav() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="fixed right-[50px] top-[50px]">
            <motion.div 
                className="w-full h-screen bg-[#c9fd74] relative rounded-[25px]"
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <button
                    className='absolute w-[100px] h-10 cursor-pointer bg-slate-50 overflow-hidden rounded-[25px] right-0 top-0' 
                    onClick={() => { setIsActive(!isActive) }}
                >
            {isActive?<p>Close</p>:<p>Menu</p>}
                
                   
                </button>
           
        </div>
    )
}