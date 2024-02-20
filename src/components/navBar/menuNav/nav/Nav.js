
import { motion } from 'framer-motion';
import { links, footerLinks } from './NavData';
import { perspective, slideIn } from "./Anim";

export default function index() {
    return (
        <div className="flex flex-col justify-between h-full box-border pt-[100px] pb-[50px] px-10">
            <div className="flex gap-2.5 flex-col">
                {
                    links.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className="no-underline text-[black] text-[46px]">
                                <motion.div
                                    href={href}
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <a className=' hover:bg-primary hover:text-white w-full rounded-xl px-3 py-2'>
                                        {title}
                                    </a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
            <motion.div className="flex flex-wrap">
                {
                    footerLinks.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <motion.a
                                className='w-6/12 mt-[5px]'
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                            >
                                {title}
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}