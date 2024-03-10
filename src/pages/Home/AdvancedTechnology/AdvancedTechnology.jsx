// src/components/AdvancedTechnology.js
import { motion } from 'framer-motion';
import React from 'react';
import { BsClipboard2Data } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

import { LiaRobotSolid } from 'react-icons/lia';
import { PiGradientBold } from 'react-icons/pi';
import { SiSololearn } from 'react-icons/si';
import aiImage from "../../../../public/icons/icons2/ai.png";
import machineImage from "../../../../public/icons/icons2/maching.png";
import tech from "../../../../public/icons/icons2/tech.png";
import fullImage from "../../../../public/icons/icons2/tech.png";

const AdvancedTechnology = () => {
  const technologyItems = [
    {
      title: "Machine learning algorithms",
      icon: machineImage,
      description:
        "Explore the world of robotics and automation for improved efficiency and precision.",
    },
    {
      title: "ADI Technology",
      icon: tech,
      description:
        "Advanced Digital Intelligence (ADI) is one of the niche leader for smartphone apps",
    },
    {
      title: "Full Stack Development",
      icon: fullImage,
      description:
        "Mastering Full Stack Development: A Comprehensive Guide to Building Dynamic Web Applications with Frontend, Backend, and Database",
    },
    {
      title: "Ai Technology",
      icon: aiImage,
      description:
        "Experience advanced automation techniques that streamline your processes.",
    },
  ];

  return (
    <section className="bg-[#F4F8FF] py-20">
      <div className="my-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Advanced Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologyItems.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white shadow-md p-6 hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex gap-5 items-center">
                <div className="mb-4">
                  <img src={item?.icon} className="w-[70px]" alt="" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <motion.button
                className="text-blue-500 flex gap-2 items-center font-medium"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                Discover More <FaArrowRight />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedTechnology;
