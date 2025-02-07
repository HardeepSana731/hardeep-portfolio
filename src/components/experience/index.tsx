import React from 'react'
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <>
    <div className='flex-flex-col'>
    <div className='p-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'>
      Companies Utilised my Expertise ----------------
    </div>
    <div className='flex flex-col px-20 gap-10 italic'>
    <div className='flex flex-col align-left text-lg text-white'>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
    type: "spring",
    visualDuration: 0.5,
    bounce: 0.25,
    damping: 300
    }}
    >Company Name: Worthit Consultancy Services.<br/>
    Job Role:System Analyst<br/>
    Period:March 2022 to Dec 2024<br/>
    Projects: Integrated Ship Management System, Electronic Bunker Delivery Note, Agri-Tech, Bunker Planner and Pricing.
    </motion.div>
    </div>
    <div className='flex flex-col align-left text-lg text-white'>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
    type: "spring",
    visualDuration: 0.5,
    bounce: 0.25,
    damping: 300
    }}
    >Company Name: Tata Consultancy Services.<br/>
    Job Role:System Engineer<br/>
    Joined:January 2025<br/>
    Projects: Insurance and Banking(Confidential)
    </motion.div>
    </div>
    </div>
    </div>
    </>
  )
}
