import React from 'react'
import {motion} from 'framer-motion';

export default function Links() {
    const variants = {
        open: {
         transition:{
             staggerChildren:0.1,
         },
        },
        closed: {
         transition:{
             staggerChildren:0.05,
             staggerDirection: -1,
         },
        },
     }
     
     const itemVariants = {
         open: {
         y:0,
         opacity:1
         },
         closed: {
         y:50,
         opacity:0
         },
      }

    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About",
    ]
  return (
    <motion.div className='links' variants={variants}>

        {
            items.map((item,index) =>{
                return <motion.a key={index} href={`#${item}`} whileTap={{scale:0.9}} whileHover={{scale:1.2}} variants={itemVariants}>{item}</motion.a>
            })
        }
    </motion.div>
  )
}
