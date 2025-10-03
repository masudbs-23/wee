export default function PortfolioSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative h-auto sm:h-[1122px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>

      <div className="max-w-11/12 sm:max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          {/* Left Section - Text and Filters */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Case Study Label */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wider">
              CASE STUDY
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
              Our Portfolio
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Every project we touch on is built with purpose, precision, and achievable goals. These portfolios highlight the kind of work we stand behind. These reflect our craft, our care, and our commitment to helping brands grow. Take a scroll through the transformations we've crafted, and find out what MediCare can do for you.
            </p>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)' }}>
                All
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-slate-700 text-sm font-medium transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-blue-100 hover:border-blue-200 -translate-y-1">
                Website Design
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-slate-700 text-sm font-medium transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-purple-100 hover:border-purple-200 translate-y-2">
                Web Development
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 text-slate-700 text-sm font-medium transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-green-100 hover:border-green-200 -translate-y-2">
                Digital Marketing
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 text-slate-700 text-sm font-medium transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-orange-100 hover:border-orange-200 translate-y-1">
                SEO
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-red-50 to-rose-50 text-slate-700 text-sm font-medium transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-red-100 hover:border-red-200 -translate-y-1">
                Design Branding
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 text-slate-700 text-sm font-medium transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-cyan-100 hover:border-cyan-200 translate-y-2">
                Social Media
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 text-slate-700 text-sm font-medium transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-violet-100 hover:border-violet-200 -translate-y-2">
                Marketing
              </div>
            </div>
          </div>

          {/* Right Section - Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1 - Nike Air Max SC */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow">
              <div className="p-4 sm:p-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-6">
                  DESIGN BRANDING
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-slate-900 text-lg">Nike Air Max SC</h3>
                      <span className="text-sm text-slate-600 font-medium">$100 - $150</span>
                    </div>
                    <div className="w-full h-40 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl">👟</span>
                      </div>
                      <div className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl text-sm font-semibold transition-colors">
                      Add To Bag
                    </button>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-slate-900 mb-2">You Use Quality And Simple</h4>
                    <p className="text-xs text-slate-600">Premium quality materials with simple design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Web Development Security */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow">
              <div className="p-4 sm:p-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-6">
                  WEB DEVELOPMENT
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">🌐</span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-6 leading-tight">Secure Your Cyberspace, Secure Your Digital Life.</h3>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl text-sm font-semibold mb-8 transition-colors">
                    Read More
                  </button>
                  <div className="grid grid-cols-3 gap-4 text-xs text-white">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        🛡️
                      </div>
                      <p className="text-xs">Protect your privacy</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        📶
                      </div>
                      <p className="text-xs">Real-time give protection</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        👤
                      </div>
                      <p className="text-xs">Secure your identity</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-6">We Create A Safer Virtual</p>
                </div>
              </div>
            </div>

            {/* Card 3 - GetTrip */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow">
              <div className="p-4 sm:p-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-6">
                  DESIGN BRANDING
                </div>
                <div className="relative h-56 bg-gradient-to-br from-orange-200 via-yellow-200 to-orange-300 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-white text-3xl font-bold">G</span>
                      </div>
                      <h3 className="text-white font-bold text-2xl drop-shadow-lg">GetTrip</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - UI/UX Smart Home */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow">
              <div className="p-4 sm:p-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-6">
                  UI/UX
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {/* Left Screen */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white text-xs">
                        <span>Brown AC</span>
                        <div className="w-10 h-5 bg-green-500 rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-white text-xs">
                        <span>Smart Lamp</span>
                        <div className="w-10 h-5 bg-slate-600 rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-white text-xs">
                        <span>Speaker</span>
                        <div className="w-10 h-5 bg-green-500 rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-white text-xs">
                        <span>Television</span>
                        <div className="w-10 h-5 bg-slate-600 rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Screen */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-sm font-bold">20° C</span>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-slate-600 rounded-full">
                          <div className="w-3/4 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                        <p className="text-white text-xs">Fan Speed</p>
                        <div className="flex justify-center space-x-2">
                          <button className="w-6 h-6 bg-slate-600 rounded-full text-white text-xs">-</button>
                          <button className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
