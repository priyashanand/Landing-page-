const Description = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 pt-10 pb-20">
      <h1 className="max-w-[1024px] text-[36px] md:text-[64px] leading-[1.3] font-bold text-[#101828] font-montserrat">
        Your New <span className="text-blue-600">Legal</span> Teammates –{" "}
        <span className="text-blue-600">AI</span> Agents Built for Law Firms  
      </h1>
      
      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Case Pilot delivers smart automation tools that eliminate busywork,
        capture every opportunity, and simplify case management for
        plaintiff-side law firms.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center pt-4 gap-4 w-full max-w-[377px] h-auto">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
        <button className="flex justify-center items-center md:w-[181px] h-12 px-7 py-3.5 gap-2 border border-[#D0D5DD] rounded-md drop-shadow-sm text-slate-700">
          <img src="src/assets/play.png" alt="Play" className="w-4 h-4" />
          Book a Demo
        </button>
      </div>
    </section>
  );
};

export default Description;
