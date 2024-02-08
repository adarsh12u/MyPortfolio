import React from 'react'

const SingleCardSkill = ({ name  , languages }) => {
  // console.log(item.id)
  // console.log(item.name)
  // console.log(typeof( item.languages))
  return (
    

    <section className=' m-auto h-72 w-72 lg:p-5 p-5 color mt-5 rounded-xl lg:pl-10 lg:pr-10 hover:bg-sky-500 transition-all duration-500 hover:scale-90'>
 
            
               <div className=' text-center'>
                   <h1 className=' text-black font-semibold text-base lg:text-xl'>
                       {name}
                     </h1>      
                     <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>

               </div>
               <div className=' mt-4 '>
                 
               {
                 
                 languages.map((item)=>{
                   const {id , name , logo , url} = item;
                   return <div key={ id} className=' mt-2 flex gap-5'>
                             
                             
                              {logo} 
                              {

                              url && <img src={url} className=' h-9 w-9 lg:h-9 ' alt="" />
                              }
                             
                                 <h1 className=' text-pretty font-semibold'>{name}</h1>
                                
                              </div>
                  })
                }

                </div>

    </section>
  )
}

export default SingleCardSkill