import { FaTwitter, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import useScrollAnimation from "../Animation";

const Contacts = () => {
  useScrollAnimation();
  return (
    <div>
       {/* Contact Section - Optimized */}
<section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="inline-block text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
        Get In Touch
      </span>
      <h2 className="scroll-scale text-4xl md:text-5xl font-bold text-gray-900">
        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Have a project in mind or want to discuss potential collaboration? We'd love to hear from you.
      </p>
    </div>

    {/* Contact Form */}
    <div className="scroll-bottom max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Contact Info */}
        <div className="md:w-2/5 bg-gradient-to-b from-blue-600 to-purple-600 text-white p-10">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-blue-100">+91 99675 90871</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-blue-100">contact.techintra@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-blue-100">Wagle Estate, Thane - 400604</p>
              </div>
            </div>
          </div>

         <div className="mt-10">
            <h4 className="font-medium mb-3 text-white">Follow Us</h4>
            <div className="flex space-x-4 text-white text-3xl">
              <a href="#" className="hover:text-blue-400" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-400" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" className="hover:text-blue-400" aria-label="GitHub"><FaGithub /></a>
              <a href="#" className="hover:text-blue-400" aria-label="Facebook"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* Form */}
        <form className="md:w-3/5 p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Project Inquiry"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Send Message
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</section> 
    </div>
  )
}

export default Contacts