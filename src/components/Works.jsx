import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        option={{ 
          max:45,
          scale: 1,
          speed: 450
         }}
         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
         <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        </div>

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
         {/* for live url */}


         {/* github link */}
         <div
          onClick={() => window.open(source_code_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
         >
          <img 
            src={github}
            alt="github"
            className='w-1/2 h-1/2 object-contain'
          />
         </div>
        </div>

         {/* name and the description */}
         <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
         </div>

         {/* for hashtags */}
         <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
         </div>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I have worked on a variety of projects throughout my career, utilizing a range of technologies and tools. 
One project I recently completed was a desktop application built with C#, 
which focused on [describe the application's purpose or main functionality]. 
Another project involved developing a Java Swing application for [describe the application's purpose or main functionality]. 
I have also worked extensively with web development technologies, including React, Bootstrap, and Tailwind. 
For a recent project, I used React to build a [describe the project], 
which [describe the project's main objectives or features]. 
Additionally, I have experience working with .NET, 
which I used to develop [describe a project or feature built with .NET]. 
Finally, I have some experience with three.js, 
which I used to create [describe a project or feature built with three.js]. 
Overall, I enjoy working with a variety of technologies and am always eager to learn more.
        </motion.p>
      </div>

      {/* wrapper for project cards */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
           />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');