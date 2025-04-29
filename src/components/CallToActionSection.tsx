import React from 'react';
import burstImage from '../assets/burst1.png'; // make sure it's really there

const CallToActionSection: React.FC = () => {
  return (
    <div className='pb-20 px-8 '>

      <div className="relative flex flex-col items-center py-5 px-10 md:py-20 md:px-28 gap-20 w-full max-w-[1216px] mx-auto bg-[#465FFF] rounded-xl overflow-hidden">
        {/* Section Title */}
        <div className="flex flex-col items-center gap-6 z-10">
          {/* Heading */}
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl leading-[120%] text-center text-white">
            Ready to Automate Your Practice?
            <br />
            Book your demo today and meet
            <br />
            the AI agents built to power the
            <br />
            modern law firm.
          </h2>

          {/* Text */}
          <p className="font-source-sans-pro font-normal text-lg leading-[150%] text-center text-white opacity-90 max-w-[670px]">
            Experience the future of client intake with Caseflow. Schedule a demo and see it in action!
          </p>

          {/* Button */}
          <button className="flex flex-row justify-center items-center py-3.5 px-7 gap-2 w-[184px] h-[48px] bg-white rounded-lg mt-6">
            <span className="font-outfit font-medium text-sm leading-5 text-[#465FFF]">Book a Demo</span>
          </button>
        </div>

        {/* Burst-pucker-2 (Left) */}
        <div
          className="hidden md:block absolute w-16 h-16 left-10 top-1/2 transform -translate-y-1/2 bg-center bg-no-repeat bg-contain z-0"
          style={{ backgroundImage: `url(${burstImage})` }}
        />

        {/* Burst-pucker-2 (Right) */}
        <div
          className="hidden md:block absolute w-16 h-16 right-10 top-10 bg-center bg-no-repeat bg-contain z-0"
          style={{ backgroundImage: `url(${burstImage})` }}
        />

      </div>
    </div>
  );
};

export default CallToActionSection;

