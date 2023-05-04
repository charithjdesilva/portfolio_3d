import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ff4057]' />{/* create the little circle */}
          <div className='w-1 sm:5-80 h-40 redLogo-gradient' />{/* create the hr line below circle */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm&nbsp;
            <span className='text-[#ff4057]'>Charith</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a fullstack developer,
            <br className='sm:block-hidden' />
             AI/ML learning enthusiast.<br /> I also have experiences in UIUX,<br className='sm:block-hidden' /> and 3D modelling, networking.
          </p>
        </div>

        
      </div>
    </section>
  )
}

export default Hero