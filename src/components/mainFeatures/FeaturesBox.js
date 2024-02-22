import { motion, useTransform, useScroll } from "framer-motion";
const FeaturesSection = () => {
    return (
        <section className=" w-full dark:bg-[#ffffff09]">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">What we <br /> bring on <span className="text-blue-500">table</span></h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">


                    <motion.div className="flex flex-col items-center p-6 space-y-3 text-center bg-[#0000000c] rounded-xl dark:bg-[#ffffff09]"
                      initial={{
                        opacity: [0, 0, 0, 0.5, 1],
        
                        x: -50
                    }}
        
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1
                        }
                    }}
                    viewport={{ once: false }}
                    >
                        <span className="inline-block p-3 text-primary bg-blue-100 rounded-full dark:text-white dark:bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Our Internship</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">read more</span>
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </motion.div>


                    <motion.div className="flex flex-col items-center p-6 space-y-3 text-center bg-[#0000000c] rounded-xl dark:bg-[#ffffff09]"
                      initial={{
                        opacity: [0, 0, 0, 0.5, 1],
        
                        y: 50
                    }}
        
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }}
                    viewport={{ once: false }}
                    >
                        <span className="inline-block p-3 text-primary bg-blue-100 rounded-full dark:text-white dark:bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Our Placements</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <a href="#" className="flex items-center -mx-1 text-sm text-primary capitalize transition-colors duration-300 transform dark:text-primary hover:underline hover:text-blue-600 dark:hover:text-primary">
                            <span className="mx-1">read more</span>
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </motion.div>

                    <motion.div className="flex flex-col items-center p-6 space-y-3 text-center bg-[#0000000c] rounded-xl dark:bg-[#ffffff09]"
                      initial={{
                        opacity: [0, 0, 0, 0.5, 1],
        
                        x: 50
                    }}
        
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1
                        }
                    }}
                    viewport={{ once: false }}
                    >
                        <span className="inline-block p-3 text-primary bg-blue-100 rounded-full dark:text-white dark:bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Our workshops</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <a href="#" className="flex items-center -mx-1 text-sm text-primary capitalize transition-colors duration-300 transform dark:text-primary hover:underline hover:text-blue-600 dark:hover:text-primary">
                            <span className="mx-1">read more</span>
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </motion.div>

                    {/* Repeat similar divs for other features */}

                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
