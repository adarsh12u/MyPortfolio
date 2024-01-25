import React from 'react'
import { skills } from '../data'
import SingleCardSkill from './SingleCardSkill'
const Skills = () => {
  return (
   

    <div id='skill' className=' h-auto pb-[100px]  mt-28  lg:p-6 lg:pl-40 lg:pr-40  border-b-[1px] border-[#2995b2]  '>
     
     <div className=' text-center   lg:mt-5 '>
            <h1 className='  text-2xl  lg:text-3xl font-bold text-white'> Skills </h1>
            <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
        </div>
          
            <div className=' mt-10 p-5 flex flex-col lg:flex-row gap-5 justify-between mb-20 '>
                   {
                     skills.map((item)=>{
                             
    
                        const { name , languages } = item
                           
                           
                             return  <SingleCardSkill key={item.id} name={name} languages={languages}  />
                                 
                           

                     })
                   }
            </div>
          

  </div>


  )
}

export default Skills