export default function PricingSection() {
  return (
    <section className="py-20 h-[1570px]" style={{ backgroundColor: '#092856' }}>
      <div className="max-w-9/12 mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Title */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-xs font-bold tracking-wider uppercase" style={{ backgroundColor: '#1e293b' }}>
              PRICING & PACKAGES
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Explore Our Transparent and Affordable Pricing Tailored to Your Need
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex items-start">
            <div className="w-1 h-20 bg-blue-400 mr-6 flex-shrink-0"></div>
            <p className="text-slate-300 text-base leading-relaxed">
              We target small businesses, startups, and SMEs, offering our IT services in packages.
              Our pricing starts from $99, making professional web development accessible to everyone.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Starter Card */}
          <div className="rounded-2xl p-6 shadow-xl border border-slate-700/50 h-[788px] flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, #305CD8, #092856)' }}>
            <div>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">Starter</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Perfect for small businesses or those seeking to build their online presence
                </p>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-full h-24 px-3 rounded-lg text-slate-300 text-sm mb-2 flex items-center justify-start" style={{ backgroundColor: '#092856' }}>
                <span className="text-sm">Starts at/</span>
                <span className="text-4xl font-bold ml-2">$99</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Professional Redesign (up to 5 pages)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Mobile-Ready Responsiveness</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Basic SEO Fix</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Visitor Analysis</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">One Full Revision</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Full Month of Support</span>
              </div>
            </div>
            </div>

            <button className="w-full py-3 px-4 rounded-full text-white font-semibold transition-colors" style={{ backgroundColor: '#0F409799' }}>
              <div className="flex items-center justify-center space-x-2">
                <span>Talk to us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Growth Card */}
          <div className="rounded-2xl p-6 shadow-xl border border-slate-700/50 h-[788px] flex flex-col justify-between" style={{ backgroundColor: '#305CD8' }}>
            <div>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-14 h-14 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {/* Four dots around the plus */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">Growth</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ideal for growing businesses looking to get recognized as a brand and gain unique presence
                </p>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-full h-24 px-3 rounded-lg text-slate-800 text-sm mb-2 flex items-center justify-start" style={{ backgroundColor: '#EAD53F' }}>
                <span className="text-sm">Starts at/</span>
                <span className="text-4xl font-bold ml-2">$150</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Everything That Starter Pack Has</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Custom Website (Up to 5 pages) + Basic eCommerce Setup</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Mobile-Ready Responsiveness</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Advanced SEO setup</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Blog/News/Article Guidance for SEO</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Social Media integration</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Up to 3 revision rounds</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Full month of priority support</span>
              </div>
            </div>
            </div>

            <button className="w-full py-3 px-4 rounded-full text-slate-800 font-semibold transition-colors bg-yellow-400 hover:bg-yellow-300">
              <div className="flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Scale Card */}
          <div className="rounded-2xl p-6 shadow-xl border border-slate-700/50 h-[788px] flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, #305CD8, #092856)' }}>
            <div>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                {/* Four dots around the star */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">Scale</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Designed for businesses that need a complete digital presence and ongoing IT support
                </p>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-full h-24 px-3 rounded-lg text-slate-300 text-sm mb-2 flex items-center justify-start" style={{ backgroundColor: '#092856' }}>
                <span className="text-sm">Starts at/</span>
                <span className="text-4xl font-bold ml-2">$300</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Everything That Growth Pack Has</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Custom website (Up to 8 pages) + Advanced eCommerce Setup</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Advanced SEO Setup & strategy</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Ongoing digital marketing support (ads, email content, campaign)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Monthly performance reports</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Unlimited revision rounds</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">Get 1 month of 24/7 premium support</span>
              </div>
            </div>
            </div>

            <button className="w-full py-3 px-4 rounded-full text-white font-semibold transition-colors" style={{ backgroundColor: '#0F409799' }}>
              <div className="flex items-center justify-center space-x-2">
                <span>Claim This Package</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Custom Quote Section */}
        <div className="rounded-2xl p-6 shadow-xl h-[223px] flex items-center justify-center" style={{ backgroundColor: '#3b82f6' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-2xl">
                Create a custom price quote
              </h3>
              <h3 className="text-white font-bold text-3xl">
                with <span style={{ color: '#EAD53F' }}>Weezard</span>
              </h3>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-800 font-semibold py-3 px-6 rounded-full transition-colors">
              <div className="flex items-center space-x-2">
                <span>Get Your Custom Quote</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}