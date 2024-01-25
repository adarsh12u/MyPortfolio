import React from 'react'
import { certificate } from '../data'

const Certificates = () => {
  return (
    <div id='certificate' className=' h-auto mt-32   flex flex-col    border-b-[1px] border-[#2995b2]  '>

<div className=' text-center p-3  lg:mt-5 '>
            <h1 className=' text-white  text-2xl  lg:text-3xl font-bold'> Certifications </h1>
            <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
        </div>
   <div className=' m-auto gap-10 lg:gap-32 flex flex-col flex-wrap lg:flex-row justify-around mt-16 mb-36'>
      
        {
            certificate.map((item)=>{
                return <div key={item.id} className= '  w-72 h-52'>
   
                                                                 <a href={item.url}> <img src={item.image} className=' w-full h-full object-cover' alt="" /></a>      
                          
                      </div>
              }) 
            }

            </div>

    </div>
  )
}

export default Certificates