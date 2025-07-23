import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const Projects = () => {
     const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

     const projects = [
  {
  title: "QuickMock - AI Mock Interview",
  desc: "AI-powered mock interview platform using Next.js and Gemini API.",
  image: "quickmock.png",
  points: [
    "Built using Next.js and Drizzle ORM to streamline backend data handling.",
    "Increased user engagement by 25% with real-time feedback.",
    "Used Gemini API to generate 5 personalized interview questions with instant review."
  ]
  },
   {
    title: "TravelSphere - AI Trip Planner",
    desc: "A smart travel assistant that generates trip itineraries using AI.",
    image: "travelsphere.png",
    points: [
      "Accepts location, days, and budget from user.",
      "Generates AI-powered trip plans with hotel and weather details.",
      "Includes static packages & Razorpay payment gateway."
    ]
  },
  {
    title: "TechNestAI - AI-Driven Service Hub",
    desc: "An AI-powered service platform built using Spring Boot and React.",
    image: "technestai.png",
    points: [
      "Integrated Gemini API to automate services like code generation and job analysis.",
      "Enhanced response accuracy by 90%, reducing manual workload.",
      "Full-stack app: 60% backend (Spring Boot) & 40% frontend (React)."
    ]
  },
  {
  title: "GatherChat - Group Chat Application",
  desc: "Group chat app enabling real-time messaging with Spring Boot and MongoDB.",
  image: "gatherchat.png", 
  points: [
    "Built using Spring Boot, React, and WebSocket for real-time, low-latency chat.",
    "Integrated MongoDB for efficient message storage and retrieval.",
    "Improved message throughput by 90% with concurrent WebSocket and scalable room-based chat."
  ]
 },
 {
  title: "EventEase - Event management",
  desc: "Event management platform where organizers and users manage and attend events.",
  image: "eventease.png", 
  points: [
    "Built with JSP, Servlet, MySQL, and Tailwind CSS for seamless backend and frontend integration.",
    "Organizers can add/manage events; users can explore and book, boosting participation by 35%.",
    "Dynamic UI with event categories improved discovery and increased retention by 30%."
  ]
 }

  
];

  return (
    <div>
        
   {/* Projects Section - Redesigned */}
<section id="projects" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="inline-block text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
        Our Work
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Explore our innovative solutions that deliver real business value
      </p>
    </div>

    {/* Projects Carousel */}
    <div className="relative">
      {/* Navigation Arrows - Outside */}
      <button
        onClick={scrollLeft}
        className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Projects Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 scrollbar-hide scroll-smooth py-4 px-2"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85vw] sm:w-[420px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
              
              <ul className="space-y-2 mb-4">
                {project.points?.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <div className={`flex-shrink-0 mt-1 mr-2 w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Indicator */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['Next.js', 'Spring Boot', 'AI', 'React'].slice(0, 3).map((tech, i) => (
                  <span 
                    key={i} 
                    className={`px-2 py-1 text-xs rounded-full ${i % 2 === 0 ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

    </div>
  )
}

export default Projects