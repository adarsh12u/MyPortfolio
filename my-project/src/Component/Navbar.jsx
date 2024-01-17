import { section } from '../data'
import { RiMenu3Line } from "react-icons/ri";
import React, { useState } from 'react'

const Navbar = () => {
    const[open,setOpen] = useState(false);
  return (
      <header className=' bg-slate-900  h-28 md:p-5  ' >
           <nav style={{
        backgroundColor:'#2995b2'
       }}  className=' md:p-5 p-4  md:rounded-xl flex  flex-col md:flex-row md:gap-32 md:items-center'>
               <div className=' flex justify-between'>
                   <h1 className=' text-2xl md:text-3xl font-bold'> Portfolio </h1>
                    <RiMenu3Line size={30} className='block md:hidden' onClick={()=>setOpen(!open)} />
               </div>
               <div className={`${open?` block ` : `hidden`} bg-[#2995b2] z-50 md:hidden   pt-5 md:pt-0 flex flex-col md:flex-row  gap-5  md:gap-10`} >
                   {
                      section.map((item)=>{
                            return <div key={item.id} className=' text-center  cursor-pointer'onClick={()=>setOpen(!open)}>
                                  
                                     <a href={item.href} > 
                                     <h1 className=' hover:text-slate-100 transition-all delay-100 ease-in text-lg font-medium'>{item.text}</h1>
                                     </a>
                             </div>
                      })
                   }
               </div>
               <div className={` hidden   pt-5 md:pt-0  md:flex  gap-5  md:gap-10`} >
                   {
                      section.map((item)=>{
                            return <div key={item.id} className=' text-center  cursor-pointer' >
                                  
                                     <a href={item.href} > 
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