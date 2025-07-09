import {SiJavascript , SiRedux , SiHtml5 , SiMongodb ,    SiTailwindcss} from 'react-icons/si'
import { FaGithubSquare , FaJava , FaNodeJs , FaReact} from 'react-icons/fa'

import { SiPostman } from "react-icons/si";
import {IoLogoCss3} from 'react-icons/io'
import { nanoid } from "nanoid"
export const section = [
     { id:nanoid(),href:'#home',text:'Home' },
     { id:nanoid(),href:'#about',text:'About' },
     { id:nanoid(),href:'#skill',text:'Skills' },
     { id:nanoid(),href:'#project',text:'Projects' },
     { id:nanoid(),href:'#certificate',text:'Certificates' }
]

export const data =  [
     {
       name:[
          1,2,3
       ]
     }
]
export const skills = [
   {  id:nanoid(),
      name: 'languages',
      languages: [
         { id:nanoid(), name : 'Core Java' , logo:<FaJava  color='white'  className='h-8 w-8 md:h-10 md:w-10 '/>},
         { id:nanoid(), name : 'Javascript', logo : <SiJavascript color='yellow'  className='h-8 w-8 md:h-8 md:w-8 '/> },
         { id:nanoid(), name : 'HTML',logo:<SiHtml5  color='red' className='h-8 w-8 md:h-10 md:w-10 '/> },
         { id:nanoid(), name : 'CSS', logo:<IoLogoCss3  color='blue' className='h-8 w-8 md:h-10 md:w-10 '/>},

      ]
   },
   { id:nanoid(),
    name: 'Tools & Databases',
    languages: [
       { id:nanoid(), name : 'Git' , url:'/git.webp'},
       { id:nanoid(), name : 'Github', logo : <FaGithubSquare  color='black' className='h-8 w-8 md:h-10 md:w-10 '/> },
       { id:nanoid(), name : 'MongoDB',logo:<SiMongodb color='green'  className='h-8 w-8 md:h-10 md:w-10 '/> },
       { id:nanoid(), name : 'postman',logo:<SiPostman color='orange'  className='h-7 w-7 md:h-9 md:w-9 '/> },
      
    ]
 },

{ id:nanoid(),
    name:' Library & Framework',
    languages: [
       { id:nanoid(), name : 'React.Js' , logo:<FaReact color='skyblue'  className='h-8 w-8 md:h-10 md:w-10 animate-spin '/>},
       { id:nanoid(), name : 'Node.Js / Express.js', logo : <FaNodeJs color='green'  className='h-8 w-8 md:h-10 md:w-10 '/> },
       {  id:nanoid(),name : 'Redux Toolkit',logo:<SiRedux color='purple'  className='h-8 w-8 md:h-10 md:w-10  '/> },
       {  id:nanoid(),name : 'Tailwind CSS', logo:<SiTailwindcss color='skyblue' className='h-8 w-8 md:h-10 md:w-10 '/>},

    ]
 }
]

export const projects = [
   {
      id: nanoid(),
      img: '/image.png',
      url:'https://blog-frontend-jet-phi.vercel.app/',
      github:'https://github.com/adarsh12u/blog-market-Application-',
      title:'Blog Application',
      data:'The Application I have developed allows users to create their own blog, where users can publish their own opinions.A blog application is basically a web site which is used for chronological listing of blog posts'
      
      
      ,tech:['React','Node','Mongodb','Material UI']
   },
   {
      id: nanoid(),
      img: '/com.jpg',
      url:'https://comfy-store-mern-sq7p.vercel.app/',
      github:'https://github.com/adarsh12u/Comfy_Store_MERN',
      title:'Comfy Store',
      data:'Comfy Store is an e-commerce platform where users can search products using filters or pagination. Built with React Query and Tailwind CSS, and Redux Toolkit for state management.'
      
      
      ,tech:['React','Node','Mongodb','Material UI']
   },
      {
         id: nanoid(),
         img: '/fotor-ai-202401161904.jpg',
         url:'https://hr-management-system-lac.vercel.app/',
         github:'https://github.com/adarsh12u/HR-MANAGEMENT-SYSTEM',
         title:'HR management system',
         data:'A HR management system website that have auth section to create users and reset password and most important here you can perform crud operation you can add, delete , update the client '
         ,tech:['React','Node','Mongodb','Material UI']
      },
      // {
      //    id: nanoid(),
      //    img: '/fotor-ai-2024011619138.jpg',
      //    url:'https://image-generator-ruby.vercel.app/',
      //    github:'https://github.com/adarsh12u/ImageGenerator',
      //    title:'Image Generator',
      //    data:'In my Image Generator project, I have combined technology and creativity to create a digital art experience using the power of the Unsplash API. here you can search images as per your choice '
      //    ,tech:['React','React Query']
      // },
      // {
      //    id: nanoid(),
      //    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
      //    url:'https://react-todo-cyan-xi.vercel.app/',
      //    github:'https://github.com/adarsh12u/React_todo',
      //    title:'TODO List',
      //    data:'Created a user-friendly TODO List app—just jot down tasks and tick them off. Simple and effective for staying organized. Tech meets practicality for a seamless task management experience '
      //    ,tech:['React','Mterial UI']
      // },
      {
         id: nanoid(),
         img: 'https://res-2.cloudinary.com/under-the-hood-learning/image/upload/q_auto/v1/blog_images/MVC-Vanilla-JS.png',
         url:'https://content-full-cms.vercel.app/',
         github:'https://github.com/adarsh12u/ContentFullCMS',
         title:'Vanilla javascript projects',
         data:'Developed a few projects, including a Password validator, Todo list, Tip calculator, Chrome extension, and Number game using Vanilla Javascript to tackle core JavaScript concepts.'
         ,tech:['HTML','CSS','javascript']
      },
     


]

export const certificate = [

   { id:nanoid(),
      image:'/scree.png',
      url:'https://drive.google.com/file/d/1mbgI3vBMvmFcMUksS3oWZjbP0XsRzWYw/view?usp=sharing'   
   },
 { id:nanoid(),
   image:'/nptel.png',
   url:'https://drive.google.com/file/d/1L_yTGrMlIRq5ExGiE-gLv4w9vACS7-jO/view?usp=drivesdk'   
},
{ id:nanoid(),
   image:'/javascript.png',
   url:'https://drive.google.com/file/d/1yAiJ-YZQIiVcSTcS4kzz6W5aLizkuq6A/view?usp=drivesdk'   
},
{ id:nanoid(),
   image:'/java.png',
   url:'https://drive.google.com/file/d/1hymydEuSFUXA1vSz2qlJ15mYFJBHGAzx/view?usp=drivesdk'   
},



]
