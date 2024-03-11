// src/components/AboutUs.js
import React from "react";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="my-container ">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="w-full h-full">
          <img
            className="w-full h-full bg-contain"
            src="https://img.freepik.com/premium-photo/flat-planning-schedule-with-tasks-calendar-with-people-work-by-ai-generative_199064-1934.jpg?w=900"
            alt="Animated Image"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            About ItTechSolutions
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to ItTechSolutions, your premier destination for
            cutting-edge IT services designed to elevate your business to new
            heights. We specialize in providing a wide array of solutions
            spanning App Development, Digital Marketing, Graphics Design, and
            Web Development, tailored to meet the diverse needs of our clients.
          </p>
          <p className="text-gray-700 mb-6">
            Our inception was rooted in a vision to redefine the IT service
            landscape, and today, we proudly stand as a beacon of innovation and
            reliability in the industry. At ItTechSolutions, we believe in the
            power of technology to drive meaningful change and create lasting
            impact for businesses of all sizes.
          </p>
          <p className="text-gray-700 mb-6">
            What sets us apart is our unwavering commitment to excellence and
            our relentless pursuit of customer satisfaction. We understand that
            each project is unique, and that's why we approach every endeavor
            with a fresh perspective and a dedication to understanding your
            specific goals and challenges.
          </p>
          <Link to="/contact">
            <button className="w-fit">
              <ButtonPrimary>Contact Us</ButtonPrimary>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
