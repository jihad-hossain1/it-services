// src/components/Services.js
import React from 'react';

import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';
// import { servicesData } from './data';
import { FaBrain,FaIndustry, FaNetworkWired, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

 export const servicesData = [
    {
        title: 'Web Development',
        id: 12,
        description: 'Streamline your operations with our advanced robotic automation solutions.',
        icon: <FaRobot size={64} />,
        sub_category: [
            {
                title: "Custom website development",
                description: "",
                image: "",
            },
            {
                title: "Ecommerce",
                description: "",
                image: "",
            },
            {
                title: "Website development",
                description: "",
                image: "",
            },
            {
                title: "Website maintenance",
                description: "",
                image: "",
            },
            {
                title: "Content management system",
                description: "",
                image: "",
            },
            {
                title: "Web design",
                description: "",
                image: "",
            },
            {
                title: "Full stack development",
                description: "",
                image: "",
            },
            {
                title: "Blog customization or management",
                description: "",
                image: "",
            },
            {
                title: "Back-end web development",
                description: "",
                image: "",
            }

        ]
    },
    {
        title: 'App Development',
        id: 13,
        description: 'Unlock new insights and possibilities with our comprehensive IoT solutions.',
        icon: <FaNetworkWired size={64} />,
        sub_category: [
            {
                title: "iOS App",
                description: "",
                image: "",
            },
            {
                title: "Android App",
                description: "",
                image: "",
            },
            {
                title: "Hybrid App",
                description: "",
                image: "",
            },
            {
                title: "Native app",
                description: "",
                image: "",
            },
            {
                title: "UX/UI Design",
                description: "",
                image: "",
            },
            {
                title: "Cross platform Applications",
                description: "",
                image: "",
            },
            {
                title: "Flutter App",
                description: "",
                image: "",
            },
        ]
    },
    {
        title: 'Digital Marketing',
        id: 14,
        description: 'Harness the power of artificial intelligence to enhance your processes.',
        icon: <FaBrain size={64} />,
        sub_category: [
            {
                title: "Search engine optimization",
                description: "",
                image: "",
            },
            {
                title: "Social media marketing",
                description: "",
                image: "",
            },
            {
                title: "Email marketing",
                description: "",
                image: "",
            },
            {
                title: "Digital advertising services",
                description: "",
                image: "",
            },
            {
                title: "Content marketing",
                description: "",
                image: "",
            },
            {
                title: "Keyword research",
                description: "",
                image: "",
            },
            {
                title: "Link building",
                description: "",
                image: "",
            },
            {
                title: "PPC",
                description: "",
                image: "",
            },
        ]
    },
    {
        title: 'Graphics Design',
        id: 15,
        description: 'Transform your production line with our smart manufacturing solutions.',
        icon: <FaIndustry size={64} />,
        sub_category: [
            {
                title: "Presentation design",
                description: "",
                image: "",
            },
            {
                title: "Banner design",
                description: "",
                image: "",
            },
            {
                title: "Logo design",
                description: "",
                image: "",
            },
            {
                title: "Infographics",
                description: "",
                image: "",
            },
            {
                title: "Photoshop design",
                description: "",
                image: "",
            },
            {
                title: "Business card",
                description: "",
                image: "",
            },
            {
                title: "Figma File Design",
                description: "",
                image: "",
            },
            {
                title: "Email design",
                description: "",
                image: "",
            },
            {
                title: "3D design",
                description: "",
                image: "",
            },
            {
                title: "Packaging",
                description: "",
                image: "",
            },
            {
                title: "Menus Design",
                description: "",
                image: "",
            },
        ]
    }
   
   
];

const Services = () => {

    console.log(servicesData)
    return (
        <section className="bg-[#F4F8FF] py-20">
            <div className="my-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {servicesData?.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                            <div className="text-blue-500 mb-4 bg-slate-50 w-fit p-5 rounded">
                                {service?.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service?.title}</h3>
                            <p className="text-gray-700">{service?.description}</p>
                          <Link to={`/services-details/${service?.id}`}>
                          <button className='mt-5'>
                                <ButtonPrimary>View Details</ButtonPrimary>
                            </button>
                          </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Services;
