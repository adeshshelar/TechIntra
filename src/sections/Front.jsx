

const Front = () => {
  return (
    <div>
        {/* Front Page - Optimized */}
<div className="relative overflow-hidden">
  {/* Navigation */}
  <nav className="w-full bg-white/80 backdrop-blur-md py-4 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 z-50 border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#home" className="flex items-center">
        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          TechIntra
        </span>
      </a>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <button className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all">
          Get Started
        </button>
      </div>

      {/* Mobile menu button would go here */}
    </div>
  </nav>

  {/* Hero Section */}
  <section id="home" className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-20 lg:pb-28 z-10">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative z-10">
        <span className="inline-block text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
          Innovative Tech Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          <span className="block">Reliable Tech Services</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">to Power Your Growth</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          Simplifying technology for startups, students, and small businesses.
          We create websites, e-commerce systems, APIs, and AI tools – all under one roof.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Get Started Today
          </button>
          <button className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors duration-300">
            View Our Work
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+20}.jpg`}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="ml-3 text-sm text-gray-600">Trusted by 100+ clients</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="ml-3 text-sm text-gray-600">50+ projects delivered</span>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="techintra.jpg" 
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            loading="eager"
          />
        </div>
        
        {/* Floating elements */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full opacity-30 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-30 mix-blend-multiply filter blur-xl"></div>
      </div>
    </div>
  </section>
</div>
    </div>
  )
}

export default Front