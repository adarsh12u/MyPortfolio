import React from 'react'
import { certificate } from '../data'
import {motion} from 'framer-motion'
const Certificates = () => {
  const slider = {
    initial:{
      x:-500,
      opacity:0,
    },
    animate:{
       x:0,
       opacity:1,
       transition:{
        duration : 0.8,
        staggerChildren:0.1,
       }
    }

}
const sliders = {
  initial:{
    x:500,
    opacity:0,
  },
  animate:{
     x:0,
     opacity:1,
     transition:{
      duration : 0.8,
      staggerChildren:0.1,
     }
  }

}
  return (
    <div id='certificate' className=' h-auto mt-32   flex flex-col    border-b-[1px] border-[#2995b2]  '>

<div className=' text-center p-3  lg:mt-5 '>
            <h1 className=' text-white  text-2xl  lg:text-3xl font-bold'> Certifications </h1>
            <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
        </div>
   <motion.div variants={slider} initial="initial" whileInView="animate"  className=' m-auto gap-10 lg:gap-32 flex flex-col flex-wrap lg:flex-row justify-around mt-16 mb-36'>
      
        {
            certificate.map((item)=>{
                return <div variants={slider} key={item.id} className= '  w-72 h-52'>
   
                                                                 <a href={item.url} variants={slider}> <img src={item.image} className=' w-full h-full object-cover' alt="" /></a>      
                          
                      </div>
              }) 
            }

            </motion.div>

    </div>
  )
}

export default Certificates