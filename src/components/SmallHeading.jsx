import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const BigHeading = ({children , className}) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0 , 1]);

  return (

    <div className={className}>
      <motion.div
        style={{ opacity }}
        >
      <h2 className='text-[60px] font-bold leading-none'>{children}</h2>
      </motion.div>
    </div>
  )
}

export default BigHeading