import React, { useRef } from 'react';
import './Services.scss';
import {motion, useInView} from 'framer-motion';

export default function Services() {
const ref = useRef();
const isInView = useInView(ref,{margin:"-200px"});
// si on arrive a -200px de l'element en question alors on affiche le contenu 
    const variants = {
        initial:{
            x:-500,
           
            opacity:0
        },
        animate:{
            x:0,
         
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        }
    }
  return (
    <motion.div variants={variants} initial='initial' animate={isInView && "animate"} ref={ref} className='services'>
        <motion.div variants={variants} className='text-container'>
            <p className=''>I focus on helping your brand grow <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div  variants={variants} className='title-container'>
            <div className='title'>
                <img src="/people.webp" alt="" />
                <h2><motion.b whileHover={{ color:"orange"}}>Unique</motion.b> Ideas </h2>
            </div>
            <div className='title'>
              
                <h2><motion.b  whileHover={{ color:"orange"}}>For your</motion.b> Business </h2>
                <button>WHAT WE DO ?</button>
            </div>
        </motion.div>
        <motion.div  variants={variants} className='list-container'>
            <motion.div className='box' whileHover={{background:"lightgray", color:"black"}} >
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ducimus delectus veritatis placeat unde adipisci blanditiis.
                     Ipsum fuga doloribus magni hic numquam! At temporibus tenetur molestiae perspiciatis, ipsum delectus ratione.
                </p>
                <button>go</button>
            </motion.div>
            <motion.div className='box'  whileHover={{background:"lightgray", color:"black"}}>
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ducimus delectus veritatis placeat unde adipisci blanditiis.
                     Ipsum fuga doloribus magni hic numquam! At temporibus tenetur molestiae perspiciatis, ipsum delectus ratione.
                </p>
                <button>go</button>
            </motion.div>
            <motion.div className='box'  whileHover={{background:"lightgray", color:"black"}}>
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ducimus delectus veritatis placeat unde adipisci blanditiis.
                     Ipsum fuga doloribus magni hic numquam! At temporibus tenetur molestiae perspiciatis, ipsum delectus ratione.
                </p>
                <button>go</button>
            </motion.div>
            <motion.div className='box'  whileHover={{background:"lightgray", color:"black"}}>
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ducimus delectus veritatis placeat unde adipisci blanditiis.
                     Ipsum fuga doloribus magni hic numquam! At temporibus tenetur molestiae perspiciatis, ipsum delectus ratione.
                </p>
                <button>go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
