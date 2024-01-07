import React, { useState } from 'react';
import './SideBar.scss';
import ToggleButton from './ToggleButton/ToggleButton';
import Links from './Links/Links';
import {motion} from 'framer-motion';


export default function SideBar() {
    const [open, setOpen] = useState(false)

    const variants = {
        open:{ clipPath:"circle(1200px at 50px 50px)",},
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
               
                type:"spring",
                stiffness:400,
                damping:40,
            },
        },
    };

  return (
    <motion.div animate={open ? "open" : "closed"} className='sidebar'>
        <motion.div className='bg' variants={variants}>
    <Links/>
        </motion.div>
    <ToggleButton currentOpen={open} setOpen={setOpen}/>
    </motion.div>
  )
}
