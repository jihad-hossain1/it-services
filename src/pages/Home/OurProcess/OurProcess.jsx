// src/components/OurProcess.js
import React from 'react';
import { FaClipboardCheck, FaCode, FaTools } from 'react-icons/fa';

const OurProcess = () => {
    const processSteps = [
        {
            title: 'Planning',
            icon: <FaTools size={45} />,
            description: 'We carefully plan and analyze your requirements to create a tailored solution.',
        },
        {
            title: 'Design and Execution',
            icon: <FaCode size={48} />,
            description: 'Our team of experts design and execute the solution with precision and creativity.',
        },
        {
            title: 'Reporting and Signoff',
            icon: <FaClipboardCheck size={48} />,
            description: 'We provide comprehensive reports and collaborate with you for final signoff.',
        },
    ];

    return (
        <section className="my-container mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 group">
              <div className="bg-blue-100 inline-flex items-center justify-center p-3 rounded-full mb-4">
                <span className='group-hover:scale-110 duration-300 group-hover:text-blue-500'>{step.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>

        </section>
    );
};

export default OurProcess;
