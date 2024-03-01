import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

export const Image = ({src}) => {

    const { scrollYProgress } = useScroll();
    // const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -300]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <motion.div
    style={{ scale }}
  > 
    <img src={src} alt="image-1" className='w-[40%] py-4 m-auto rounded-[50px]' />
    </motion.div>
  )
}
