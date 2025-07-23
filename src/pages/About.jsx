import React from 'react'

const About = () => {
  return (
   <div>
  {/* About Section - Optimized */}
<section id="about" className="bg-white py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      {/* Image Section - Optimized */}
      <div className="relative group">
        <img 
          src="about.jpg" 
          alt="TechIntra team collaborating on digital solutions" 
          className="rounded-xl w-full  transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          width={600}
          height={400}
        />
        <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 group-hover:opacity-30 transition-all duration-300 -z-10"></div>
      </div>

      {/* Content Section - Enhanced */}
      <div className="space-y-6">
        <span className="inline-block text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
          Get to Know Us
        </span>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Innovation</span> Through Smart IT Solutions
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed">
          At TechIntra, we design and develop tailored digital solutions that solve real-world problems. 
          From smart AI tools to powerful web applications, we help startups and students turn their ideas into reality.
        </p>
        
        <div className="space-y-6 pt-2">
          {/* Feature 1 */}
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Innovative Tech Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We build responsive websites, smart AI tools, and scalable backend systems. 
                Our goal is to simplify your workflow with tailored digital products.
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Student Project Support</h3>
              <p className="text-gray-600 leading-relaxed">
                From ideation to final delivery, we assist in every step of your project. 
                This includes code, documentation, hosting, and personal guidance.
              </p>
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
  </div>
</section>
   </div>
  )
}

export default About