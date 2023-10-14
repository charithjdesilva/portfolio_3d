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
          I have been actively involved in various projects, both individually and in collaboration with teams. Notable projects include an ongoing Criminal Identification System with AI, achieving a remarkable accuracy of 0.983 in recognizing photos of criminals using computer vision and face-detection libraries. I've also developed a Face Recognition Attendance System, a Number Plate Catcher to identify and capture vehicle number plates, and an innovative Virtual Whiteboard that allows users to draw on air. Additionally, I've created a Spam Classification Model, utilizing Natural Language Processing to classify SMS messages with an accuracy of 0.97. Lastly, my Live Document Scanner project provides real-time video scanning capabilities using connected cameras. These projects showcase my interset in learning Python, OpenCV, NumPy, Dlib, React, FastAPI, MySQL, Pandas, NLTK, and Scikit-learn, reflecting my passion for exploring diverse aspects of AI, ML, and computer vision.
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

export default SectionWrapper(Works, 'projects');