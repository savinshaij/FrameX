import { motion, useTransform, useScroll } from "framer-motion";
const Hero = () => {
    return (
        <div className="lg:flex w-full md:p-24 p-4 pt-14 dark:bg-rich-black-dark">
            <motion.div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2"
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
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold  text-gray-800 dark:text-white lg:text-6xl ">Spark Your Potential. Internify Your  <span className="text-primary dark:text-primary">Passion.</span></h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-lg">Bridge the knowledge gap with hands-on experience, forge connections with industry movers and shakers, and sculpt your career story with Internify</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row gap-2">
                        <a href="#" className="block px-10 py-2 text-medium font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-primary rounded-xl hover:bg-space-cadet-dark">Login</a>
                        <a href="#" className="block px-10 py-2 text-medium font-medium tracking-wider text-center border-gray-300 dark:border-space-cadet-dark dark:text-gray-400 text-gray-600 transition-colors duration-300 transform border-2 rounded-xl lg:mx-4 hover:bg-[#ffffff20]">Signup</a>
                    </div>
                </div>
            </motion.div>

            <div className="w-full  lg:w-1/2 ">
                <motion.div className="w-full h-full border-2 bg-[#ffffff0e] backdrop:blur-3xl rounded-xl"
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
               
                
            
                
                </motion.div>
                {/* <h2 className=" text-3xl font-bold text-gray-200 dark:text-space-cadet-dark lg:text-9xl ">Lorem</h2> */}
            </div>
        </div>
    );
};

// Export the MainContent component
export default Hero;
