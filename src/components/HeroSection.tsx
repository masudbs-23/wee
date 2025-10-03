const HeroSection = () => {
  return (
    <section className="w-full bg-black text-white h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Weezard
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Transform your business with our innovative solutions and expert guidance. 
            We help you achieve your goals with cutting-edge technology and strategic insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-200 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
