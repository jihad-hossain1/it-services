// src/components/AdvancedTechnology.js
import { motion } from 'framer-motion';
import React from 'react';
import { BsClipboard2Data } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

import { LiaRobotSolid } from 'react-icons/lia';
import { PiGradientBold } from 'react-icons/pi';
import { SiSololearn } from 'react-icons/si';

const AdvancedTechnology = () => {
  const technologyItems = [
    {
      title: 'ML Technology',
      icon: <SiSololearn className="bg-blue-100 text-blue-500 text-xl w-16 h-16 p-3 rounded"/>,
      description: 'Explore the world of robotics and automation for improved efficiency and precision.',
    },
    {
      title: 'ADI Technology',
      icon: <PiGradientBold className="bg-yellow-100 text-yellow-500 text-xl w-16 h-16 p-3 rounded"/>,
      description: 'Unlock insights from connected devices and harness the power of the Internet of Things.',
    },
    {
      title: 'Data Tech',
      icon: <BsClipboard2Data className="bg-purple-100 text-purple-500 text-xl w-16 h-16 p-3 rounded"/>,
      description: 'Leverage artificial intelligence and machine learning to make intelligent decisions.',
    },
    {
      title: 'Ai Technology',
      icon: <LiaRobotSolid className="bg-green-100 text-green-500 text-xl w-16 h-16 p-3 rounded"/>,
      description: 'Experience advanced automation techniques that streamline your processes.',
    },
  ];

  return (
    <section className="bg-[#F4F8FF] py-20">
      <div className="my-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Advanced Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologyItems.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white shadow-md p-6 hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
            <div className='flex gap-5 items-center'>
            <div className='mb-4'>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            </div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <motion.button
                className="text-blue-500 flex gap-2 items-center font-medium"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                Discover More <FaArrowRight/>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedTechnology;
