
const Hero = () => {
    return (
        <div className="lg:flex w-full h-full">
            <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-8xl ">Lorem ipsum dolor  <span className="text-primary dark:text-primary">ghhhgj</span></h2>

                    <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row gap-2">
                        <a href="#" className="block px-10 py-2 text-medium font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-primary rounded-xl hover:bg-space-cadet-dark">Login</a>
                        <a href="#" className="block px-10 py-2 text-medium font-medium tracking-wider text-center border-gray-300 dark:border-space-cadet-dark dark:text-gray-400 text-gray-600 transition-colors duration-300 transform border-2 rounded-xl lg:mx-4 hover:bg-[#ffffff20]">Signup</a>
                    </div>
                </div>
            </div>

            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <div className="w-full h-full border-2 rounded-xl" >
                    
                </div>
            </div>
        </div>
    );
};

// Export the MainContent component
export default Hero;
