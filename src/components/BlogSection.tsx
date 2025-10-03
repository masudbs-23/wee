export default function BlogSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          {/* Left Side - Title */}
          <div className="space-y-6">
            {/* Blog Tag */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-bold tracking-wider uppercase" style={{ backgroundColor: '#3B82F6' }}>
              BLOG
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
              Dive into Our Resources for<br />
              Greater Insights
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex items-start">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Weezard, we believe in empowering our partners with the tools and insights they need to succeed. We offer a range of tools, including expert blog posts and downloadable guides, to help you navigate the world of design, development, and digital marketing. Unlock your next big idea with the magic of Weezard.
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1 - Top 10 Emerging Technologies */}
          <div className="relative">
            {/* Image */}
            <div className="w-full h-[300px] rounded-[15px] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" 
                alt="Woman working on laptop with technology setup"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Card Content - Narrower width and moved up by 40px */}
            <div className="w-5/6 mx-auto h-[161px] -mt-[40px] bg-white rounded-[15px] shadow-lg p-6">
              {/* Meta Information */}
              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Jul 27 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>3 Comments</span>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 leading-tight">
                Top 10 Emerging Technologies in 2025
              </h3>
            </div>
          </div>

          {/* Card 2 - IT Infrastructure Security */}
          <div className="relative">
            {/* Image */}
            <div className="w-full h-[300px] rounded-[15px] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" 
                alt="IT security and infrastructure setup"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Card Content - Narrower width and moved up by 40px */}
            <div className="w-4/5 mx-auto h-[161px] -mt-[40px] bg-white rounded-[15px] shadow-xl border border-gray-100 p-6 relative z-10">
              {/* Meta Information */}
              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Jul 27 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>3 Comments</span>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 leading-tight">
                How to Secure Your IT Infrastructure
              </h3>
            </div>
          </div>

          {/* Card 3 - Future of Cloud Computing */}
          <div className="relative">
            {/* Image */}
            <div className="w-full h-[300px] rounded-[15px] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" 
                alt="Cloud computing and digital technology"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Card Content - Narrower width and moved up by 40px */}
            <div className="w-4/5 mx-auto h-[161px] -mt-[40px] bg-white rounded-[15px] shadow-xl border border-gray-100 p-6 relative z-10">
              {/* Meta Information */}
              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Jul 27 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>3 Comments</span>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 leading-tight">
                The Future of Cloud Computing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
