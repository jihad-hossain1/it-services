// src/components/Banner.js

import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";

const Banner = () => {
    return (
        <section className="my-container h-[calc(100vh-64px)] flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                    <div className="text-2xl md:text-4xl font-bold mb-4">Empowering Digital Futures with Comprehensive IT Solutions</div>
                    <p className="text-gray-700 mb-6">Step into a realm of limitless possibilities with our comprehensive IT services. At our core, we are dedicated to empowering your digital future. Whether you're envisioning a dynamic website or a groundbreaking app, our team of skilled professionals is here to turn your ideas into reality. Join us on a journey where innovation meets execution, and let's forge the path to your digital success together. </p>
                    <button >
                        <ButtonPrimary>Learn More</ButtonPrimary>
                    </button>
                </div>
                <div className="">
                    <img
                        className=""
                        src="https://i.ibb.co/mGMd9tv/428-4281468-free-download-enterprise-solutions-icon-clipart-information-technology.png"
                        alt="IoT and Robotics"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
