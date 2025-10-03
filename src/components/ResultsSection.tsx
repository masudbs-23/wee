export default function ResultsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 h-auto sm:h-[772px]" style={{ backgroundColor: '#092856' }}>
      <div className="max-w-11/12 sm:max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Section - Text and Image */}
          <div className="space-y-6 sm:space-y-8">
            {/* Results Tag */}
            <div className="inline-flex items-center px-5 py-2 rounded-full text-white text-sm font-semibold tracking-wide" style={{ backgroundColor: '#092856', border: '1px solid #254B94' }}>
              RESULTS THAT SPEAK
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our Results in Number
            </h2>

            {/* Paragraph Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg">
              At MediCare, every project leaves a trail of measurable impact. Whether it's the quantity of our happy clients, or the data of our impacts, each number tells a story of consistent delivery and real growth.
            </p>

            {/* Image */}
            <div className="relative">
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(to bottom right, #092856, #254B94, #092856)' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/90 font-medium">Team Collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Top Left Card */}
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 text-center relative shadow-2xl border border-slate-600/50" style={{ background: 'linear-gradient(to bottom, #092856, rgba(37, 75, 148, 0.1))' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2 sm:mb-3 tracking-tight">250%</div>
              <div className="text-white text-sm sm:text-base font-medium">Avg Client Growth</div>
            </div>

            {/* Top Right Card */}
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-2xl border border-slate-600/50" style={{ background: 'linear-gradient(to top right, #254B94, #092856)' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2 sm:mb-3 tracking-tight">2 Weeks</div>
              <div className="text-white text-sm sm:text-base font-medium">Avg Turnaround</div>
            </div>

            {/* Bottom Left Card */}
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-2xl border border-slate-600/50" style={{ background: 'linear-gradient(to top right, #092856, #407BFF)' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2 sm:mb-3 tracking-tight">10+</div>
              <div className="text-white text-sm sm:text-base font-medium">Countries Served</div>
            </div>

            {/* Bottom Right Card */}
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-2xl border border-slate-600/50" style={{ background: 'linear-gradient(to bottom right, #092856, #254B94)' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2 sm:mb-3 tracking-tight">300+</div>
              <div className="text-white text-sm sm:text-base font-medium">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
