const TermsOfUse = () => {
  return (
    <section className="my-container md:py-24 py-12">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="w-full h-full">
          <img
            className="w-full h-full bg-contain"
            src="https://img.freepik.com/premium-vector/hands-holding-clipboard-cloud-computing-blockchain_24908-18550.jpg?w=740"
            alt="Animated Image"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="mb-4">
            Welcome to ItTechSolutions. By accessing our website, you agree to
            comply with and be bound by the following terms and conditions of
            use. Please read these terms carefully before using our website. If
            you disagree with any part of these terms, please do not use our
            website.
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness, or
              suitability of the information and materials found or offered on
              this website for any particular purpose.
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable.
            </li>
            <li>
              Unauthorized use of this website may give rise to a claim for
              damages and/or be a criminal offense.
            </li>
            <li>
              From time to time, this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s).
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
