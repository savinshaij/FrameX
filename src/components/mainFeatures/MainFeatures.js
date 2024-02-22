import Link from 'next/link';
import { motion, useTransform, useScroll } from "framer-motion";

const Features = () => {
    return (



        <div className=" px-14  py-32 mx-auto bg-[#ffffff09] w-full ">
            <div className="items-center lg:flex rounded-3xl pl-14">
                <div className="w-full lg:w-1/2">
                    <motion.div className="lg:max-w-lg"
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
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Company <span className="text-primary ">Insights</span>  &  Culture<span className="text-primary "> Preview</span> </h1>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Uncover the essence of your potential workplace before taking the leap with InternX's Company Insights & Culture Preview feature. We believe that a successful career is not just about the role; it's about the environment, values, and culture that surround it.

                            <br /><br />
                            Delve into employee testimonials and firsthand experiences to gain invaluable insights. Take virtual office tours and explore snapshots of company culture. InternX empowers you with transparent information about diversity and inclusion initiatives, ensuring that your career aligns not only with your professional goals but also with your values.
                        </p>

                    </motion.div>
                </div>
                <motion.div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
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
                    <img className=" w-80  h-80" src="/images/features3.png" alt="Catalogue-pana.svg" />
                </motion.div>
            </div>

            <div className="items-center lg:flex justify-between  rounded-3xl pl-14 my-56">

                <motion.div className="flex  w-full mt-6 lg:mt-0 lg:w-1/2 "
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
                    <img className=" w-80  h-80" src="/images/features4.png" alt="Catalogue-pana.svg" />
                </motion.div>

                <div className="w-full lg:w-1/2 justify-end flex"
                
                >
                    <motion.div className="lg:max-w-lg "
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
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Live Networking Events &  <br /> <span className="text-primary ">Webinars</span></h1>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Immerse yourself in a vibrant community of professionals, industry leaders, and like-minded peers through InternX's Live Networking Events & Webinars. Beyond being a platform for job opportunities, InternX strives to create an ecosystem that thrives on shared knowledge and experiences.

                            <br /><br />Engage in live virtual events featuring prominent speakers from various industries. Participate in interactive Q&A sessions that provide direct access to insights. Build meaningful connections with recruiters and fellow candidates, fostering a network that extends beyond job placements.
                        </p>

                    </motion.div>
                </div>

            </div>
            <div className="items-center lg:flex  rounded-3xl pl-14">
                <div className="w-full lg:w-1/2">
                    <motion.div className="lg:max-w-lg "
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
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Real-time Application<span className="text-primary "> Status</span> Tracker  </h1>
                        <p className="mt-3 text-gray-600 dark:text-gray-400"> Stay empowered and informed at every step of your application journey with InternX's Real-time Application Status Tracker. We believe that transparency is key to a positive candidate experience.

                            <br /><br />Receive instant notifications for application milestones, from submission to interview invitations and job offers. Visualize your application pipeline with clarity, and gain insights into the average time taken for each hiring stage. InternX ensures that you are not left in the dark, allowing you to navigate your career path with confidence.</p>

                    </motion.div>
                </div>
                <motion.div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
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
                    <img className=" w-80  h-80" src="/images/features1.png" alt="Catalogue-pana.svg" />
                </motion.div>
            </div>
        </div>

    );
}

export default Features;
