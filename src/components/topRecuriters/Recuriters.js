"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Recuriters = () => {
    return (
        <div className=" w-full  ">
            <h1 className="text-2xl pt-10 font-semibold text-center text-gray-800 capitalize lg:text-6xl dark:text-white">Our <br /> Top  <span className="text-primary">Recuriters</span></h1>
            <HorizontalScrollCarousel />
           
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex h-[90vh] items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative  ml-10 rounded-3xl h-60 w-60 overflow-hidden "
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
               
            </div>
        </div>
    );
};

export default Recuriters;

const cards = [
    {
        url: "/images/logo9.webp",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/images/logo2.svg",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/images/logo3.svg",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/images/logo4.svg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/images/logo6.svg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/images/logo7.svg",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/images/logo8.svg",
        title: "Title 7",
        id: 7,
    },
];