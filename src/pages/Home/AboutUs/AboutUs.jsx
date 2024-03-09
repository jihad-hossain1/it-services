// src/components/AboutUs.js
import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const AboutUs = () => {
    return (
        <section className="my-container ">
            <div className="grid md:grid-cols-2 gap-5">
                <div className='w-full h-full'>
                    <img
                        className='w-full h-full bg-contain'
                        src="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1693057305~exp=1693057905~hmac=fa2443925c9b9468fa8d004f1e1673ffde83966e6507f545270f79c32ceb44b3"
                        alt="Animated Image"
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">About RoboSync</h2>
                    <p className="text-gray-700 mb-6">
                        At RoboSync, we are passionate about merging the worlds of robotics and technology to create innovative solutions. Our mission is to empower businesses and individuals with cutting-edge automation technologies that simplify complex tasks and enhance efficiency.
                    </p>
                    <p className="text-gray-700 mb-6">
                        With a vision to drive advancements in the field of robotics, we aim to be a leader in delivering intelligent and intuitive robotic systems that can adapt to various industries. Our team of experts is dedicated to shaping the future with innovation and creativity.
                    </p>
                    <button className="w-fit">
                        <ButtonPrimary>Contact Us</ButtonPrimary>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
