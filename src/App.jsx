import './App.css';

function App() {
  return (
    <div className="flex flex-col">
       {/* Navigation Bar - Full width */}
      <nav className="w-full bg-white shadow-sm py-6 px-8 border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">TechIntra</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Home </a>
            <a href="#pages" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Pages </a>
            <a href="#portfolio" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Portfolio </a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact </a>
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

       

      {/* Hero Section */}
<section className="relative bg-gray-50 pt-10 lg:pt-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Content */}
    <div>
      <p className="text-blue-600 font-semibold text-xl mb-4">IT Services Designed</p>
      <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Awesome IT Services For Your Business
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante sed tortor. 
        Eleifend lectus eu gravida facilisis.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-6 items-center">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold text-lg">
          Start a Project
        </a>
        <div className="text-left">
          <p className="text-blue-600 font-bold text-lg">Call us 888-123-4587</p>
          <p className="text-gray-600 text-sm">For any question</p>
        </div>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="relative w-full mt-[-80px]"> {/* pull image up into navbar area */}

      <img
        src="techintra.jpg"
        alt="Hero"
        className="rounded-xl w-full max-w-2xl mx-auto "
      />
    </div>
  </div>
</section>

    </div>
  );
}

export default App;
