import React from 'react'
import Navbar from './Navbar'
import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { SiHackerrank } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
const Home = () => {
  return (
    <div className='  bg-slate-900 '>
  
    <Navbar/>


  
   <div className=' p-2 lg:p-5' >
        <div style={{
        backgroundColor:'#2995b2'
       }} className=' mt-20 h-[550px] lg:h-96 rounded-xl flex flex-col lg:flex-row  justify-center items-center' >
            
              <div className=' w-[50%] text-center space-x-0 lg:space-y-5'>
                <h1 className=' text-3xl font-bold'>Hello, It's Me</h1>
                   <h1 className='text text-5xl font-bold'>Adarsh Gurjar </h1>
                   <button className=' border-2 border-black mt-4 p-2 rounded-xl font-medium hover:bg-slate-900 hover:text-[#2995b2]   transition-all duration-200'> 
                     <h1> I'm a Full-Stack javascript Developer</h1>
                    </button>
                    <div className=' flex mt-5 gap-6 lg:gap-10 justify-center'>
                    <a href="https://github.com/adarsh12u">
                    <IoLogoGithub size={28}/>

                    </a>
                    <a href="https://www.linkedin.com/in/adarsh-gurjar-6170b0249/">
                    <CiLinkedin size={28} color=''/>

                    </a>
                    <a href="https://leetcode.com/Adarshgurjar123/">
                    < SiLeetcode size={25}/>

                    </a>
                    <a href="https://www.hackerrank.com/profile/adarsh7470827890">
                    < LiaHackerrank size={30}/>

                    </a>
                    </div>
              </div>
  <div className=' mt-10 lg:mt-0 w-[40%] lg:w-[50%] flex justify-center '>
     <img src='/picofme (4).png' alt=""  className=' h-full  md:h-486 lg:h-64  duration-1000 delay-100'/>
  </div>

        </div>
   </div>

    </div>
  )
}

export default Home