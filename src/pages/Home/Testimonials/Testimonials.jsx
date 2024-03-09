// src/components/TestimonialsSlider.js
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';
import './Testimonials.css';





const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            position: 'CEO, Tech Company',
            comment: 'RoboSync has transformed the way we approach automation. Their solutions have significantly improved.',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
        },
        {
            name: 'Jane Smith',
            position: 'CTO, Startup',
            comment: 'The IoT services provided by RoboSync helped us gather valuable insights from our devices and enhance our decision-making process.',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        },
        {
            name: 'Michael Johnson',
            position: 'COO, Manufacturing',
            comment: 'We were amazed by the robotic automation capabilities offered by RoboSync. Our production line is now faster and more precise.',
            image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80', // Add image URL
        },
        {
            name: 'Emily Williams',
            position: 'Director, Research Institute',
            comment: 'RoboSync\'s AI integration services have enabled us to optimize complex data analysis tasks and uncover hidden patterns.',
            image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80', // Add image URL
        },
        {
            name: 'David Brown',
            position: 'Founder, Robotics Startup',
            comment: 'The Industrial IoT solutions from RoboSync have allowed us to remotely monitor and control our devices with ease.',
            image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80', // Add image URL
        },
        {
            name: 'Sophia Miller',
            position: 'Product Manager, HealthTech',
            comment: 'The autonomous vehicle technology provided by RoboSync is revolutionizing our approach to medical logistics and services.',
            image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80', // Add image URL
        },
        // Add more testimonials here
    ];

    return (
        <section className="my-container py-20">

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <Swiper
                navigation
                pagination={{ clickable: true }}
                loop
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                breakpoints={{
                    576: {
                      // width: 576,
                      slidesPerView: 1,
                    },
                    768: {
                      // width: 768,
                      slidesPerView: 2,
                    },
                    992: {
                      
                      slidesPerView: 3,
                    }
                  }}

            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="testimonial-swiper flex flex-col items-center justify-center text-center bg-gray-50 px-5 py-10 rounded shadow-md my-20">
                        <div className="mb-4 text-center">
                            <FaQuoteLeft size={40} className="text-blue-500 mx-auto" />
                        </div>
                        <div className="flex items-center justify-center mb-2">
                            <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-20 h-20 object-cover mr-4" />
                            <div>
                                <div className="font-semibold text-lg">{testimonial.name}</div>
                                <div className="text-gray-600 text-sm">{testimonial.position}</div>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-10 leading-relaxed">{testimonial.comment}</p>

                    </SwiperSlide>
                ))}
            </Swiper>

        </section>

    );
};

export default Testimonials;
