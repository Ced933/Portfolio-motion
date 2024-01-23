import React, { useRef } from 'react';
import './Portfolio.scss';
import{motion, useScroll, useSpring,useTransform} from 'framer-motion';

export default function Portfolio() {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,

    })

    const items = [
        {
            id:1,
            title:"React commerce",
            img:"https://images.pexels.com/photos/16264302/pexels-photo-16264302/free-photo-of-lumineux-aube-paysage-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo veritatis nesciunt unde aut cum distinctio doloribus tenetur vero atque, possimus, eos fugit accusantium"
        },
        {
            id:2,
            title:"Restaurant App",
            img:"https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo veritatis nesciunt unde aut cum distinctio doloribus tenetur vero atque, possimus, eos fugit accusantium"
        },
        {
            id:3,
            title:"Music App",
            img:"https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo veritatis nesciunt unde aut cum distinctio doloribus tenetur vero atque, possimus, eos fugit accusantium"
        },
        {
            id:4,
            title:"Tv show App",
            img:"https://images.pexels.com/photos/24069/pexels-photo-24069.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo veritatis nesciunt unde aut cum distinctio doloribus tenetur vero atque, possimus, eos fugit accusantium"
        },
    ];

    const Single = ({item}) =>{
        const ref = useRef();

        const {scrollYProgress} = useScroll({
            target:ref,
            offset:["start start", "end start"]
           
        });

        const y = useTransform(scrollYProgress, [0,1], [0, 1500]);

        return(
            <section >
                <div className='container'>
                    <div className='wrapper'>
                        <div className='image-container' ref={ref}>
                            <img src={item.img} alt="" />
                        </div>
                        <motion.div className='text-container' style={{y}}>
                            <h2 >{item.title}</h2>
                            <p>{item.desc}</p>
                            <button>See Demo</button>
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    }
  return (
    <div className='portfolio' ref={ref}>
        <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className='progress-bar'></motion.div>
        </div>
        {
            items.map(item =>{
             return   <Single item={item} key={item.id}/>
            })
        }
    </div>
  )
}
