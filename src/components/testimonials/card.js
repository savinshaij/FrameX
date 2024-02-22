'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className=" h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{backgroundColor: color,scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className="flex flex-col justify-center items-center border-[0.5] border-white  backdrop:blur-3xl shadow-2xl relative h-[500px] w-[1000px] origin-top p-[50px] rounded-[25px] -top-1/4"
      >
        <div className='  h-32 w-32 bg-black rounded-full'></div>
        <h2 className=' mt-4 text-center font-bold text-3xl'>{title}</h2>
       
            <p className=' text-center my-8 text-2xl'>{description}</p>
           
          

          

       
      </motion.div>
    </div>
  )
}

export default Card