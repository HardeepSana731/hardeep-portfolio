import React from 'react'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row gap-0'>
      <div className='flex flex-row px-20 pr-0 py-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-purple-600 to-blue-400'>
      Hey There,
      </div>
      <div className='flex flex-row px-0 py-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'>
      This is Sana Hardeep
      </div>
      </div>
      <motion.div
      className='flex text-lg px-60 font-bold text-transparent bg-clip-text bg-slate-400 italic'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
    type: "spring",
    visualDuration: 0.5,
    bounce: 0.25,
    damping: 300
    }}
    >
        {'"I am a passionate Frontend Developer with expertise in React.js, dedicated to crafting dynamic, user-friendly, and high-performance web applications. With a strong foundation in JavaScript, TypeScript, HTML, and CSS, I specialize in building scalable and reusable UI components that enhance user experience."'}
    </motion.div>
    </div>
  )
}
