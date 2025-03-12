function LandingPage() {
  return (
    <>
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-gray-900 text-white">
        
        <div className="relative z-10 max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            AI-Powered <span className="text-blue-500">Supply Chain</span> &
            Fraud Detection
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Detect fraud, optimize logistics, and secure your supply chain with
            cutting-edge AI solutions.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition duration-300"
            >
              Get Started
            </button>
            <button
              className="px-6 py-3 border border-gray-300 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg text-lg font-semibold transition duration-300"
            >
              Request a Demo
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
          <img
            src="https://www.optiproerp.com/wp-content/uploads/erp-for-supply-chain-management.jpg"
            alt="Supply Chain & Fraud Detection"
            className="w-full h-auto max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      </section>
      <div>

      </div>
    </>
  );
}

export default LandingPage;
