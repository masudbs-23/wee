export default function ServicesSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 h-auto sm:h-[1116px]">
      <div className="max-w-11/12 sm:max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
              WHAT WE DO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Core Services</h2>
          </div>
          <div className="flex items-start">
            <div className="w-1 h-24 bg-purple-300 mr-6 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              MediCare provides comprehensive healthcare services including doctor consultations,
              medicine delivery, nursing care, ambulance services, and blood bank facilities.
              Our mission is to make healthcare accessible and convenient for everyone,
              connecting patients with the right medical professionals and services they need.
            </p>
          </div>
        </div>

        {/* Service Header Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Web Design Header Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-400 p-6 flex items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">Web Design</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Creative, responsive, and user-focused designs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Header Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-purple-500 to-purple-700 p-6 flex items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="16,18 22,12 16,6" />
                    <polyline points="8,6 2,12 8,18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">Web Development</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Custom-coded, fast, and scalable websites</p>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Marketing Header Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-700 to-blue-500 p-6 flex items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">Digital Marketing</h3>
                  <p className="text-white/80 text-xs sm:text-sm">SEO, Keyword Research, and Social Media Marketing that deliver ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Content Cards */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Web Design Content Card */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Custom-made UI/UX to reflect your brand's identity.</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Responsive layouts that work on every screen.</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Conversion-driven design principles to increase engagement.</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Figma to live prototype support.</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Fast delivery with pixel-perfect precision</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">White-label delivery under your brand</span>
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-800 font-semibold text-sm underline">Design Your Website</a>
              <button className="w-8 h-8 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>

          {/* Web Development Content Card */}
          <div className="bg-purple-50 rounded-2xl p-4 sm:p-6 lg:p-8">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Built for speed, scalability, and security</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Expert in WordPress, Shopify, Webflow, and custom stacks</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Frontend & backend dev with clean, maintainable code</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">E-commerce, landing pages, and full-site builds</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Ongoing support and maintenance options</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Delivered fully managed and on-brand</span>
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-800 font-semibold text-sm underline">Build Your Website</a>
              <button className="w-8 h-8 rounded-full border-2 border-purple-500 bg-white flex items-center justify-center hover:bg-purple-50 transition-colors">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>

          {/* Digital Marketing Content Card */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Targeted SEO to rank higher and reach the right audience</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Keyword research and crawling strategies for organic visibility</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Social media management & content strategy</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Monthly reporting with real results</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Email marketing & automation setup</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 text-sm">Google Search Console & Analytics setup + optimization</span>
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-800 font-semibold text-sm underline">Grow with Marketing</a>
              <button className="w-8 h-8 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
