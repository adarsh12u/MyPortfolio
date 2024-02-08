import { section } from '../data'
import { RiMenu3Line } from "react-icons/ri";
import { motion } from 'framer-motion';
import React, { useState } from 'react'

const Navbar = () => {
    const[open,setOpen] = useState(false);
    const variants = {
         open:{
            clipPath : "circle(1200px at 50px 50px) ",
            transition:{
              type:"spring",
              stiffness:20              
         }},
         closed:{
             transition :{
                delay : 0.5,
                type:"spring",
                stiffness:400,
                damping:40,

             }
         }
    }
  return (
      <header className=' bg-slate-900  h-28 lg:p-5  ' >
           <nav style={{
        backgroundColor:'#2995b2'
       }}  className=' lg:p-5 p-4  lg:rounded-xl flex  flex-col lg:flex-row lg:gap-32 lg:items-center'>
               <div className=' flex justify-between'>
                   <h1 className=' text-2xl lg:text-3xl font-bold'> Portfolio. </h1>
                    <RiMenu3Line size={30} className='block lg:hidden' onClick={()=>setOpen(!open)} />
               </div>
               <motion.div  animate={open ? "open": "closed"}  className={`${open?` block ` : `hidden`} bg-[#2995b2] z-50 lg:hidden   pt-5 lg:pt-0 flex flex-col lg:flex-row  gap-5  lg:gap-10`} >
                   {
                      section.map((item)=>{
                            return <motion.div key={item.id}   variants={variants}   className=' text-center  cursor-pointer border-slate-900  border-b-2'onClick={()=>setOpen(!open)}>
                                  
                                     <a href={item.href} > 
                                     <motion.h1  className=' hover:text-slate-100 transition-all delay-100 ease-in text-lg font-medium'>{item.text}</motion.h1>
                                     </a>
                             </motion.div>
                      })
                   }
               </motion.div>
               <div className={` hidden   pt-5 lg:pt-0  lg:flex  gap-5  lg:gap-10`} >
                   {
                      section.map((item)=>{
                            return <div key={item.id} className=' text-center  cursor-pointer' >
                                  
                                     <a href={item.href} className='nav' > 
                                     <h1 className=' hover:text-slate-100 transition-all delay-100 ease-in text-lg font-medium'>{item.text}</h1>
                                     </a>
                             </div>
                      })
                   }
               </div>
           </nav>
      </header>
    
  )
}

export default Navbar