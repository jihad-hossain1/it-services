// src/components/Services.js
import React from 'react';
import { FaBrain, FaCarAlt, FaCogs, FaIndustry, FaNetworkWired, FaRobot } from 'react-icons/fa';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const Services = () => {
    const servicesData = [
        {
            title: 'Robotic Automation',
            description: 'Streamline your operations with our advanced robotic automation solutions.',
            icon: <FaRobot size={64} />,
        },
        {
            title: 'IoT Solutions',
            description: 'Unlock new insights and possibilities with our comprehensive IoT solutions.',
            icon: <FaNetworkWired size={64} />,
        },
        {
            title: 'AI Integration',
            description: 'Harness the power of artificial intelligence to enhance your processes.',
            icon: <FaBrain size={64} />,
        },
        {
            title: 'Smart Manufacturing',
            description: 'Transform your production line with our smart manufacturing solutions.',
            icon: <FaIndustry size={64} />,
        },
        {
            title: 'Autonomous Vehicles',
            description: 'Explore the world of autonomous vehicles with our cutting-edge technology.',
            icon: <FaCarAlt size={64} />,
        },
        {
            title: 'Industrial IoT',
            description: 'Elevate your industrial processes with our Industrial IoT solutions.',
            icon: <FaCogs size={64} className='text-blue-500' />,
        },
        // Add more services here
    ];

    return (
        <section className="bg-[#F4F8FF] py-20">
            <div className="my-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                            <div className="text-blue-500 mb-4 bg-slate-50 w-fit p-5 rounded">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                            <button className='mt-5'>
                                <ButtonPrimary>View Details</ButtonPrimary>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Services;
