import React from "react";

const Cookies = () => {
  return (
    <section className="my-container md:py-24 py-12">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="w-full h-full">
          <img
            className="w-full h-full bg-contain"
            src="https://img.freepik.com/free-psd/cookie-character-element_23-2150493590.jpg?w=740&t=st=1710147475~exp=1710148075~hmac=db90c84ace54dd0a06df3435c39b284ecf8a22160739ee73663ab9f0ee0bada9"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="mb-4">
            Our website uses cookies to enhance your browsing experience and
            provide personalized content. By continuing to use our website, you
            consent to the use of cookies in accordance with this Cookie Policy.
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>What Are Cookies...</li>
            <li>How We Use Cookies...</li>
            <li>Managing Cookies...</li>
            <li>Types of Cookies We Use...</li>
            <li>Changes to Cookie Policy...</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Cookies;
