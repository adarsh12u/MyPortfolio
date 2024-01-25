import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';




const ProjectsCard = ({ url, img, github, title, data , tech }) => {
  return (
    <article className='bg-white rounded-xl pb-5 shadow-lg hover:shadow-xl duration-300 hover:scale-90'>
      <div className=' h-40  '>
                
      <img
        src={img}
        alt={title}
        className=' object-cover rounded-t-lg w-full h-full '
        />
        </div>
      <div className='capitalize p-5'>
        <h2 className=' text-lg lg:text-xl  font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 '>{data}</p>
        
 
        
      </div>
  <div className=' flex justify-around '>
         
          <button className=' border-2  pl-5 pr-5 py-2 pb-2  border-black mt-4 p-2 rounded-xl font-medium hover:bg-slate-900 hover:text-white   transition-all duration-200'><a href={github}>Source  Code </a></button>
          <button className=' border-2  pl-5 pr-5 py-2 pb-2 border-black mt-4 p-2 rounded-xl font-medium hover:bg-slate-900 hover:text-white   transition-all duration-200'><a href={url}> Live </a></button>


  </div>
     </article>
  );
};
export default ProjectsCard;
