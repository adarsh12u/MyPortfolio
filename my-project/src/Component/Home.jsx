import React from 'react'
import Navbar from './Navbar'
import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import {motion} from 'framer-motion'
const Home = () => {

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
  return (
    <div className='  bg-slate-900 '>
  
    <Navbar/>


  
   <div className=' p-2 lg:p-5' >
    
        <motion.div initial={{opacity:0 , scale:0.5}}  whileInView={{opacity:1 , scale:1}} transition={{duration:1}}  style={{
        backgroundColor:'#2995b2'
       }} className=' mt-20 h-auto px-3 py-5 lg:p-0 lg:h-96 rounded-xl flex flex-col lg:flex-row  justify-center items-center' >

    

              <motion.div variants={slider} initial="initial" whileInView="animate" className='  w-full lg:w-[60%] text-center space-y-10 lg:space-y-5' >
                <motion.div variants={slider}  className='  m-auto text-center w-full lg:w-[60%] space-y-5 ' >
<motion.div variants={slider} >

                <motion.h1 variants={slider} className=' text-3xl font-bold'>Hello, It's Me  </motion.h1>
                   <motion.h1 variants={slider} className='text text-5xl font-bold'>Adarsh Gurjar</motion.h1>
</motion.div>
<motion.div variants={slider} >

                   <motion.p variants={slider}  className='  text-sm font-medium'>Brief description with insights into myself, my vocational journey and what I engage in professionally</motion.p>
</motion.div>
                </motion.div>
                <motion.div variants={slider} >

                   <motion.p variants={slider}  className=' text-base font-medium  outline-dashed inline-block p-2 rounded-lg mt-1 mb-2 hover: pl-3 pr-3'>I'm a full stack javascript developer</motion.p>
</motion.div>
               
                    <motion.div variants={slider}  className=' flex mt-5 gap-6 lg:gap-10 justify-center'>
                    <motion.a variants={slider} href="https://github.com/adarsh12u">
                    <IoLogoGithub size={28}/>

                    </motion.a>
                    <motion.a variants={slider} href="https://www.linkedin.com/in/adarsh-gurjar-6170b0249/">
                    <CiLinkedin size={28} color=''/>

                    </motion.a>
                    <motion.a variants={slider} href="https://leetcode.com/Adarshgurjar123/">
                    < SiLeetcode size={25}/>

                    </motion.a>
                    <motion.a variants={slider} href="https://www.hackerrank.com/profile/adarsh7470827890">
                    < LiaHackerrank size={30}/>

                    </motion.a>
                    </motion.div>
              </motion.div>
  <div className=' mt-10 lg:mt-0 w-[40%] lg:w-[50%] flex justify-center '>
     <img src='/picofme (4).png' alt=""  className=' h-full   lg:h-64  duration-1000 delay-100'/>
  </div>

        </motion.div>
   </div>

    </div>
  )
}

export default Home