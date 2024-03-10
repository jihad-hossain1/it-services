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
            src="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1693057305~exp=1693057905~hmac=fa2443925c9b9468fa8d004f1e1673ffde83966e6507f545270f79c32ceb44b3"
            alt="Animated Image"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            About RoboSync
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to RoboSync, your one-stop destination for innovative and
            reliable IT services. We specialize in providing top-notch solutions
            in App Development, Digital Marketing, Graphics Design, and Web
            Development. With a dedicated team of experts and a passion for
            cutting-edge technology, we strive to empower businesses of all
            sizes to thrive in the digital landscape.
          </p>
          <p className="text-gray-700 mb-6">
            At RoboSync, we believe in delivering excellence through a
            combination of creativity, expertise, and customer-centric approach.
            Our journey began with a vision to revolutionize the way businesses
            leverage technology, and today, we stand proud as a trusted partner
            for numerous enterprises worldwide.
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
