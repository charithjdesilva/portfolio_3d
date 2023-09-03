import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { MyModelCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4093ff]' />{/* create the little circle */}
          <div className='w-1 sm:5-80 h-40 redLogo-gradient' />{/* create the hr line below circle */}
        </div>

        <div className='flex flex-col md:flex-row'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm&nbsp;
              <span className='text-[#4093ff]'>Charith</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am an udergraduate,
              <br className='sm:block-hidden' />
              Software Engineering enthusiast.<br /> I am also interested in AR/VR,<br className='sm:block-hidden' />AI/ML and Computer Vision.
            </p>
          </div>
          
          {/* Use a media query to set the width to 100% on mobile devices */}
          <div className='w-full' style={{height: '400px'}}>
            <MyModelCanvas />
          </div>
        </div>
      </div>



      <div className='absolute xs:bottom-0 bottom-32 w-full flex justify-end items-center pe-4'>
        <a href='#about' className='flex items-center'>
          Press to slide down&nbsp; | &nbsp;&nbsp;
          <div className='w-[35px] h-[64px] left-5 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0,24,0] // move 24px up and down
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1" 
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero