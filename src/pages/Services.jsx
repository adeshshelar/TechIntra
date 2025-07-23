import React from 'react'

const Services = () => {
  return (
    <div>
  {/* Services Section - With Working Colors */}
<section className="py-20 bg-gray-50" id="services">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="inline-block text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
        Our Services
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
        Solutions We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Provide</span>
      </h2>
      <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        We deliver smart, efficient, and scalable IT solutions for startups, students, and growing businesses.
      </p>
    </div>

    {/* Services Grid - Now with working colors */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Custom Web Development',
          desc: 'Tailor-made websites and dashboards designed for your specific business needs and workflows.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          colorClass: 'blue' // This is just for reference now
        },
        {
          title: 'AI-Powered Tools',
          desc: 'Smart solutions including resume analyzers, interview bots, and custom AI applications.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ),
          colorClass: 'purple'
        },
        {
          title: 'E-commerce Setup',
          desc: 'Complete online store solutions with payment gateways, inventory management, and analytics.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          ),
          colorClass: 'green'
        },
        {
          title: 'Backend API Systems',
          desc: 'Secure, scalable RESTful APIs to power your mobile and web applications.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          colorClass: 'red'
        },
        {
          title: 'Website Maintenance',
          desc: 'Ongoing support, performance optimization, and reliable cloud hosting solutions.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          colorClass: 'yellow'
        },
        {
          title: 'Academic Project Assistance',
          desc: 'End-to-end support for student projects including coding, documentation, and deployment.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
          colorClass: 'indigo'
        },
      ].map((service, idx) => {
        // Define all color classes explicitly
        const colorClasses = {
          blue: {
            accent: 'from-blue-500 to-blue-300',
            iconBg: 'bg-blue-50',
            iconText: 'text-blue-600',
            iconBgHover: 'hover:bg-blue-100',
            textHover: 'hover:text-blue-700',
            borderHover: 'hover:border-blue-100',
            text: 'text-blue-600'
          },
          purple: {
            accent: 'from-purple-500 to-purple-300',
            iconBg: 'bg-purple-50',
            iconText: 'text-purple-600',
            iconBgHover: 'hover:bg-purple-100',
            textHover: 'hover:text-purple-700',
            borderHover: 'hover:border-purple-100',
            text: 'text-purple-600'
          },
          green: {
            accent: 'from-green-500 to-green-300',
            iconBg: 'bg-green-50',
            iconText: 'text-green-600',
            iconBgHover: 'hover:bg-green-100',
            textHover: 'hover:text-green-700',
            borderHover: 'hover:border-green-100',
            text: 'text-green-600'
          },
          red: {
            accent: 'from-red-500 to-red-300',
            iconBg: 'bg-red-50',
            iconText: 'text-red-600',
            iconBgHover: 'hover:bg-red-100',
            textHover: 'hover:text-red-700',
            borderHover: 'hover:border-red-100',
            text: 'text-red-600'
          },
          yellow: {
            accent: 'from-yellow-500 to-yellow-300',
            iconBg: 'bg-yellow-50',
            iconText: 'text-yellow-600',
            iconBgHover: 'hover:bg-yellow-100',
            textHover: 'hover:text-yellow-700',
            borderHover: 'hover:border-yellow-100',
            text: 'text-yellow-600'
          },
          indigo: {
            accent: 'from-indigo-500 to-indigo-300',
            iconBg: 'bg-indigo-50',
            iconText: 'text-indigo-600',
            iconBgHover: 'hover:bg-indigo-100',
            textHover: 'hover:text-indigo-700',
            borderHover: 'hover:border-indigo-100',
            text: 'text-indigo-600'
          }
        };
        
        const colors = colorClasses[service.colorClass] || colorClasses.blue;
        
        return (
          <div 
            key={idx} 
            className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${colors.borderHover} relative overflow-hidden group`}
          >
            {/* Decorative accent */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.accent}`}></div>
            
            {/* Icon with colored background */}
            <div className={`mb-6 w-14 h-14 rounded-lg ${colors.iconBg} ${colors.iconText} ${colors.iconBgHover} flex items-center justify-center transition-colors duration-300`}>
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            
           
          </div>
        )
      })}
    </div>

   
  </div>
</section>
  </div>
  )
}

export default Services