import React from 'react'
import { section } from '../data'

const About = () => {
  return (
    <section>


    <div id='about' className=' h-auto  mt-36   color flex flex-col   '>
  
       <div className=' text-center p-3  md:mt-5 '>
            <h1 className='  text-2xl  md:text-3xl font-bold'> About me </h1>
            <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
        </div>
   <div className=' mt-8 md:mt-0 p-8  md:p-20  '>
        <h1 className=' text-white text-pretty text-base md:text-lg '>
        Hello, My name is Adarsh Gurjar Currently in 3rd year, pursuing B.tech in B.Tech in computer science , My skills includes decent foundatoin  in core java and javascript, from development perpective, i have done many project in React and Node (basically MERN ) for  Web Application and as these are nothing but just Javascript, For computer science fundamentals, I have a decent knowledge about Data Structure & Algorithm, Operating system, Database management system and Object Oriented Programing. I have also practiced DSA questions by solving over 120+ problems on Leetcode.
        </h1>
   </div> 
     </div>


     <div  className=' h-auto  mt-36  flex flex-col pb-10  border-b-[1px] border-[#2995b2]    '>
  
  <div className=' text-center p-3  md:mt-5 '>
       <h1 className='  text-2xl text-white  md:text-3xl font-bold'> Education </h1>
       <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
   </div>
<div className=' mt-8 md:mt-0 p-8  md:p-20  '>
   <h1 className=' text-white text-pretty  text-3xl  md:text-5xl text-center '>
      SUSHILA DEVI BANSAL COLLEGE OF TECHNOLOGY 
    
    </h1>
    <h1 className=' text-gray-400 font-semibold text-xl text-center'>
      B.Tech in Computer Science Aug 2021 - Aug 2025
    </h1>
</div> 
</div>
    </section>
  
  )
}

export default About