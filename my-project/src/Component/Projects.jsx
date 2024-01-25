import React from 'react'
import { projects } from '../data';
import ProjectsCard from './ProjectsCard';
const Projects = () => {
  return (
    <div id='project' className=' h-auto p-5  mt-28  lg:p-6 lg:pl-40 lg:pr-40  border-b-[1px] border-[#2995b2]  '>
     
    <div className=' text-center   lg:mt-5 '>
           <h1 className='  text-2xl  lg:text-3xl font-bold text-white'> Projects </h1>
           <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
       </div>
         
       
       <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
         {projects.map((project) => {
           return <ProjectsCard key={project.id} {...project} />;
         })}
       </div>


         

 </div>
  )
}





// import ProjectsCard from './ProjectsCard';
// import { projects } from '../data';
// import SectionTitle from './SectionTitle';

// const Projects = () => {
//   return (
//     <section className='py-20 align-element' id='projects'>
//       <SectionTitle text='web creations' />
//       <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
//         {projects.map((project) => {
//           return <ProjectsCard key={project.id} {...project} />;
//         })}
//       </div>
//     </section>
//   );
// };
// export default Projects;




export default Projects