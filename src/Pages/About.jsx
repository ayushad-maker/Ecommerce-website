import React from 'react'
import { delay, motion } from 'framer-motion'

const About = () => {
  return (
   <div 
   className="bg-cover bg-center bg-no-repeat py-12 px-4 bg-gray-400"
   style={{backgroundImage:`url("")`}}
   >
    <motion.section
    className='backdrop-blur-xl  max-w-4xl mx-auto text-center bg-white py-12 px-6 rounded-xl shadow-2xl border border-white/20'
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.3,ease:'easeOut'}}
    >
      <h2 className='italic text-4xl font-bold text-gray-700 mb-4 underline'>About Adidas</h2>

      <motion.p 
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.8,ease:'easeOut'}}
      className='text-black text-lg leading-relaxed mb-4 font-bold'>
         We are a passionate team dedicated to building high-quality products and experiences. Our goal is to provide
          value to our users through innovation and simplicity.
      </motion.p>

      <motion.p 
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      transition={{delay:1.2,ease:'easeOut'}}
      className="text-black text-lg leading-relaxed mb-4 font-bold">
          Adidas is not just a brand — it's a movement. With roots in sport and eyes on the future, we empower everyone
          to be their best.
        </motion.p>
     <motion.div
     className=''
     initial={{scale:1,opacity:0}}
     animate={{scale:1,opacity:1}}
     transition={{delay:1.8,ease:'easeOut'}}
     >
      <img 
      src="https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"
      alt="Adidas image"
      className='mx-auto w-32 mt-4'
      />
      
      <motion.p
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:2.2,ease:'easeOut'}} 
      className='italic font-medium text-black'>Nothing Is Impossible</motion.p>

     </motion.div>
    </motion.section>
   </div>
  )
}

export default About