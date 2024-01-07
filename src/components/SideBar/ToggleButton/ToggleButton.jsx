import React, { useState } from 'react'
import {motion} from 'framer-motion';

export default function ToggleButton({setOpen,currentOpen}) {
//    savoir si le menu est ouvert 
    console.log(currentOpen);
   
  return (
    // Pour créer un bouton toggle 
    <button onClick={()=>setOpen((prev) => !prev)}>
        <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.line y1="0.5" x2="23" y2={currentOpen ? 16.5 : 0.5} strokeWidth="3" transition={{type:"spring",
                stiffness:400,
                damping:40}} stroke="black" />
            <motion.line y1="7.5" x2="23" y2="7.5" opacity={currentOpen ? 0 : 1} strokeWidth="3" stroke="black"/>
            <motion.line y1="14.5" x2="23" y2={currentOpen ? -0.5 : 14.5} strokeWidth="3" stroke="black"/>
        </svg>
    </button>
  )
}
