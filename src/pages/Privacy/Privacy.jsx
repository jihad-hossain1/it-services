import React from "react";

const Privacy = () => {
  return (
    <section className="my-container md:py-24 py-12">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="w-full h-full">
          <img
            className="w-full h-full bg-contain"
            src="https://img.freepik.com/free-vector/ecological-strategy-development-natural-resources-access-ecologists-cartoon-characters-eco-shield-environmental-protection-world-rescue_335657-763.jpg?w=740&t=st=1710147341~exp=1710147941~hmac=92ad4540d84387fd81e14a4d3cb48c91e958cf0bd1b2996b1ecc24e29013e186"
            alt="Animated Image"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="mb-4">
            At ItTechSolutions, we are committed to protecting your privacy. Our
            Privacy Policy outlines how we collect, use, and disclose
            information when you use our website or services. By accessing our
            website or using our services, you consent to the terms of this
            Privacy Policy.
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Information We Collect...</li>
            <li>How We Use Your Information...</li>
            <li>Information Sharing...</li>
            <li>Data Security...</li>
            <li>Updates to Privacy Policy...</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
