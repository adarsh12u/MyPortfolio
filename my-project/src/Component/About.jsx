import React from 'react'
import { section } from '../data'
import {motion} from 'framer-motion'
const About = () => {
  const slider = {
    initial:{
      
      opacity:0,
    },
    animate:{
      
       opacity:1,
       transition:{
        duration : 2,
        
        staggerChildren:0.1,
       }
    }

}
const sliders = {
  initial:{
    
    opacity:0,
  },
  animate:{
    
     opacity:1,
     transition:{
      
      duration : 2,
      staggerChildren:0.1,
     }
  }

}
  return (
    <section>


    <div id='about' className=' h-auto  mt-36   color flex flex-col   '>
  
       <div className=' text-center p-3  lg:mt-5 '>
            <h1 className='  text-2xl  lg:text-3xl font-bold'> About me </h1>
            <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
        </div>
   <div className=' mt-8 lg:mt-0 p-8  lg:p-20  '>
        <h1 className=' text-white text-pretty text-base lg:text-lg '>
        Hello, My name is Adarsh Gurjar Currently in 3rd year, pursuing B.tech in Computer science engineering from Sushila devi bansal college of technology, My skills includes a  foundation in core java and javascript, from development perpective, i have done many project in React and Node (basically MERN ) for  Web application and as these are nothing but just Javascript. So, I am well Good in JavaScript Ecosystem. For computer science fundamentals, I have a decent knowledge about Data Structure & Algorithm, Operating system, Database management system and Object Oriented Technique. I have also practiced coding by solving over 250+ problems on various coding platforms like Leetcode, and Hackerrank </h1>
   </div> 
     </div>


     <div  className=' h-auto  mt-36  flex flex-col pb-10  border-b-[1px] border-[#2995b2]    '>
  
  <div className=' text-center p-3  lg:mt-5 '>
       <h1 className='  text-2xl text-white  lg:text-3xl font-bold'> Education </h1>
       <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
   </div>
<div className=' mt-8 lg:mt-0 p-8  lg:p-20  '>
   <h1 className=' text-white text-pretty  text-3xl  lg:text-5xl text-center '>
      SUSHILA DEVI BANSAL COLLEGE OF TECHNOLOGY 
    
    </h1>
    <h1 className=' text-gray-400 font-semibold text-xl text-center'>
      B.Tech in Computer Science Aug 2021 - Aug 2025
    </h1>
    <div className=' mt-1   '>
       <h1 className='  text-white font-semibold text-2xl text-center'>Course Work.</h1>
      <div className=' flex justify-center flex-wrap gap-3'>

       <motion.button variants={slider} whileInView="animate" initial="initial"  className=' border-2 text-white border-white mt-4 p-2 rounded-xl font-normal hover:bg-[#2995b2] hover:text-white   transition-all duration-200'> 
                      Object Oriented Progamming
                    </motion.button>
                    <motion.button variants={slider} whileInView="animate" initial="initial" className=' text-white border-2 border-white mt-4 p-2 rounded-xl font-normal hover:bg-[#2995b2] hover:text-white   transition-all duration-200'> 
                   Data Structure & Algorithm
                    </motion.button>
                    <motion.button  variants={sliders} whileInView="animate" initial="initial" className=' text-white border-2 border-white mt-4 p-2 rounded-xl font-normal hover:bg-[#2995b2] hover:text-white   transition-all duration-200'> 
                      Operating System
                    </motion.button>
                    <motion.button  variants={sliders} whileInView="animate" initial="initial" className=' text-white border-2 border-white mt-4 p-2 rounded-xl font-normal hover:bg-[#2995b2] hover:text-white   transition-all duration-200'> 
                   Database Management System
                    </motion.button>
      </div>
    </div>
</div> 
</div>
    </section>
  
  )
}

export default About