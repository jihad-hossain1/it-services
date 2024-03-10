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
            name: 'Asif Ahmed',
            position: 'Chief Technology Officer, Tech Innovations Inc',
            comment: "Partnering with RoboSync Ltd has been instrumental in our company's technological advancement.Their expertise and dedication have helped us overcome complex challenges and stay ahead of the curve in a competitive market.",
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Mostafizur Rahman',
            position: 'Director of Operations, Global Solutions Group',
            comment: "I can't speak highly enough of the support we've received from RoboSync Ltd. Their responsive team and tailored solutions have significantly improved our operational efficiency, allowing us to focus on driving business growth.",
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Michael Chen',
            position: 'Chief Financial Officer, Acme Corporation',
            comment: "Choosing RoboSync Ltd for our IT services has proven to be a wise investment. Their cost-effective solutions and strategic guidance have not only optimized our IT infrastructure but also contributed to our bottom line.",
            image: 'https://images.unsplash.com/photo-1559192823-e1d8e87def54?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL
        },
        {
            name: 'Sarah Davis',
            position: 'Marketing Manager, Bright Ideas Agency',
            comment: "Working with RoboSync Ltd has been a game-changer for our marketing efforts. Their innovative solutions and collaborative approach have helped us execute campaigns with precision and achieve remarkable results.",
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL
        },
        {
            name: 'Alex Rodriguez',
            position: 'Human Resources Director, Growth Industries Ltd',
            comment: "At Growth Industries, our employees are our greatest asset. RoboSync Ltd] has played a crucial role in ensuring our team feels supported and empowered through their seamless IT solutions and exceptional customer service.",
            image: 'https://plus.unsplash.com/premium_photo-1667511020337-b399fe63b7fb?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL
        },
        {
            name: 'Karen Thompson',
            position: 'Operations Manager, Swift Logistics Solutions',
            comment: "I've been consistently impressed with the level of professionalism and expertise demonstrated by RoboSync Ltd. Their proactive approach to IT support has minimized disruptions and optimized our operations, allowing us to deliver exceptional service to our clients.",
            image: 'https://images.unsplash.com/photo-1549473448-5d7196c91f48?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL
        },
        {
            name: 'Rebecca Clark',
            position: 'IT Manager, Precision Manufacturing Co',
            comment: "As an IT manager, I rely on reliable partners to support our infrastructure. RoboSync Ltd has consistently exceeded our expectations with their proactive approach and innovative solutions. Their team feels like an extension of ours.",
            image: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL
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
