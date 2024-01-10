import React from 'react';
import './Hero.scss';
import {motion} from 'framer-motion';

export default function Hero() {
   const textVariants = {
        initial:{
            x:-500,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1,
            },
        },
        scrollButton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
            
        }
    };
    const sliderVariants = {
        initial:{
            x:0,
         
        },
        animate:{
            x:"-220%",
         
            transition:{
                repeat:Infinity,
                repeatType:'mirror',
                duration:30,
             
            },
        }
    };
    // repeatType:'mirror' pour que le text revienne une fois qu'il fini de défiler + lui donner une width de 50% en css
      return (
    <div className='hero'>
        <div className='wrapper'>
            {/* On fait la connexion entre le parent et les enfants avec initial='initial' animate='animate' les enfants comprendront qu'ils doivent prendre les mêmes attributs */}
            <motion.div className="text-container" variants={textVariants} initial='initial' animate='animate'>

                <motion.h2 variants={textVariants}>Cedric.G</motion.h2>
                <motion.h1 variants={textVariants}>Developpeur Front-End</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>Projets récents</motion.button>
                    <motion.button variants={textVariants}>Me contacter</motion.button>
                </motion.div>

                <motion.img  variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className='sliding-texte-container'>
            Writer Content Creator Influencer
        </motion.div>
        <div className='image-container'>
            <img src="/P1011647_1-removebg.png" alt="photo cedric" />
        </div>
    </div>
  )
}
