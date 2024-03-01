import React from 'react'
import BigHeading from '../BigHeading'
import { motion, useScroll, useTransform } from "framer-motion";


const HeroSection = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 300]);


    return (
        <motion.div
            style={{ scale, opacity, translateY }}
        >
            <div className='h-[80vh] w-[70%] m-auto flex flex-col items-center justify-center'>
                <BigHeading text={`SENIOR
EXPERIENCE
DESIGNER©`} />
                <div className='flex justify-between w-1/2 items-center'>
                    <h4 className='text-base font-medium'>CURRENTLY CRAFTING <br /> EXPERIENCES AT CROSBY</h4>
                    <h4 className='text-base font-medium'>(2021 – PRESENT)</h4>
                </div>
            </div>
        </motion.div>
    )
}

export default HeroSection