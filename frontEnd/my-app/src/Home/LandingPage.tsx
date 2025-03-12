function LandingPage() {
    return (
      <>
        <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-white overflow-hidden">
          
          {/* Text Section */}
          <div className="relative z-10 max-w-lg text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              AI-Powered <span className="text-purple-400">Supply Chain</span> & Fraud Detection
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Detect fraud, optimize logistics, and secure your supply chain with cutting-edge AI solutions.
            </p>
  
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white rounded-lg text-lg font-semibold transition duration-300">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-300 hover:border-purple-400 hover:scale-105 text-gray-300 hover:text-white rounded-lg text-lg font-semibold transition duration-300">
                Request a Demo
              </button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="mt-8 md:mt-0 w-full md:w-[80%] flex justify-center">
            <img
              src="https://api.deepai.org/job-view-file/383cfd97-57a6-41dd-9bf6-7cbe457ec59e/outputs/output.jpg"
              alt="Supply Chain & Fraud Detection"
              className="w-[80%] md:w-full max-w-lg md:max-w-2xl lg:max-w-3xl rounded-lg shadow-lg"
            />
          </div>
  
          {/* Smaller Animated Circular Background */}
          <div className="absolute inset-0 animate-gradient"></div>
        </section>
  
        {/* Styles */}
        <style>
          {`
            @keyframes radialShift {
              0% { background-position: 0% 0%; }
              50% { background-position: 80% 80%; }
              100% { background-position: 0% 0%; }
            }
            .animate-gradient {
              background: radial-gradient(circle, #7a1faa, #9b30c8, #b033ff, #6d28d9, #3a1d6e);
              background-size: 200% 200%;
              animation: radialShift 8s infinite ease-in-out;
              filter: blur(60px);
              width: 150%;
              height: 150%;
              position: absolute;
              top: -25%;
              left: -25%;
              z-index: -1;
            }
          `}
        </style>
      </>
    );
  }
  
  export default LandingPage;