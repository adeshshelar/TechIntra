import Services from './Sections/Services';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Front from './Sections/Front';

function App() {

 
 
  return (
    <div>

      <Front/>

      <About/>

      <Services/>

      <Projects/>

      {/* Contact page */}

       <section id="contact" className="py-16 bg-white">
      {/* Title */}
      <div className="text-center my-12">
        <h2 className="text-[35px] font-bold text-gray-900">
          Contact <span className="text-blue-600">Us</span>
        </h2>
      </div>

      <form className="max-w-[60rem] mx-auto text-center mb-12 px-4">
        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-[49%] p-6 text-base text-gray-800 bg-gray-200 rounded-xl focus:outline-dotted"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-[49%] p-6 text-base text-gray-700 bg-gray-200 rounded-xl focus:outline-dotted"
          />
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-4">
          <input
            type="number"
            placeholder="Mobile Number"
            className="w-[49%] p-6 text-base text-gray-700 bg-gray-200 rounded-xl focus:outline-dotted"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="w-[49%] p-6 text-base text-gray-700 bg-gray-200 rounded-xl focus:outline-dotted"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-full p-6 text-base text-gray-700 bg-gray-200 rounded-xl mt-4 resize-none focus:outline-dotted"
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-medium cursor-pointer"
        />
      </form>
    </section>

    </div>
  );
}

export default App;
