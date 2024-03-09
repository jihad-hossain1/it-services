// src/components/Banner.js

import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";

const Banner = () => {
    return (
        <section className="my-container h-[calc(100vh-64px)] flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                    <div className="text-2xl md:text-4xl font-bold mb-4">Explore the World of IoT and Robotics</div>
                    <p className="text-gray-700 mb-6">Discover the fascinating realm of Internet of Things (IoT) and robotics. Dive into cutting-edge technologies that are shaping the future. Whether it's automation, smart devices, or AI-driven innovations, explore how IoT and robotics are revolutionizing industries.</p>
                    <button >
                        <ButtonPrimary>Learn More</ButtonPrimary>
                    </button>
                </div>
                <div className="">
                    <img
                        className=""
                        src="https://img.freepik.com/free-vector/internet-things-typographic-header-idea-smart-wireless-electronics-modern-global-technology-connection-devices-house-appliances-isolated-flat-vector-illustration_613284-908.jpg?w=826&t=st=1693055992~exp=1693056592~hmac=40841d24975a4f44b21c1cebb975f91a08d6da5ed727c1a2efd8f86867f0cf37"
                        alt="IoT and Robotics"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
