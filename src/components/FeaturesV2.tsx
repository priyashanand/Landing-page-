import React, { useState } from 'react';

const FeaturesV2: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: 'Doctor Portal',
      description:
        'Say goodbye to endless email threads. Automatically notify providers when liens are sent, approved, and paid. Negotiate and sign directly through our intuitive platform.',
    },
    {
      title: 'Tasks Done, Not Listed',
      description:
        'Forget manual task management. InjurySync intelligently creates actionable tasks from client intake, automatically follows up to gather critical case details, and seamlessly collects bills, medical records, and essential documentation.',
    },
    {
      title: 'Automated Treatment & Lien Negotiation',
      description:
        'Instantly connect your clients to LOP doctors through the CasePilot portal, or add your existing provider contacts. Streamline bills, medical records, and lien negotiations, making the process nearly automatic and entirely hassle-free.',
    },
    {
      title: 'Seamless CRM Integration',
      description:
        'Easily integrate InjurySync with Filevine, Clio, or your preferred case management software, keeping all your critical data synchronized and up-to-date.',
    },
  ];

  return (
    <div className="flex flex-col items-center py-20 px-4 md:px-28 gap-20 relative w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col items-center gap-12 w-[1216px]">
        <div className="flex flex-row items-center gap-16 w-full h-[514px]">
          {/* Column 1 */}
          <div className="flex flex-col items-center gap-16 w-[303px] h-[394px]">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-6 w-full">
                <h3 className="font-montserrat font-semibold text-2xl leading-[120%] text-center text-gray-800">
                  {feature.title}
                </h3>
                <p className="font-source-sans-pro text-base leading-6 text-center text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Placeholder / Image */}
          <div className="relative w-[480px] h-[514px]">
            <div className="absolute w-[514px] h-[540px] bg-gray-100 rounded-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[259px] border border-gray-300 rounded-md flex items-center justify-center bg-gray-200">
                <div
                  className="w-[430px] h-[248px] bg-cover bg-center rounded-sm border border-gray-300"
                  style={{ backgroundImage: 'url(src/assets/featuresv2.png)' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center gap-16 w-[303px] h-[452px]">
            {features.slice(2).map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-6 w-full">
                <h3 className="font-montserrat font-semibold text-2xl leading-[120%] text-center text-gray-800">
                  {feature.title}
                </h3>
                <p className="font-source-sans-pro text-base leading-6 text-center text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden items-center gap-6 w-full">
        {/* Mobile Image */}
        

        {/* Active Feature Text */}
        <div className="flex flex-col items-center text-center px-4">
          <h3 className="text-2xl font-semibold text-gray-800 font-montserrat mb-2">
            {features[activeIndex].title}
          </h3>
          <p className="text-base text-gray-500 font-source-sans-pro">
            {features[activeIndex].description}
          </p>
        </div>

        {/* Dots Pagination */}
        <div className="flex gap-2 mt-4">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-indigo-500 scale-110' : 'bg-gray-300'
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
        <div className="w-full pt-10 flex justify-center">
          <div className="w-[90%] h-[200px] bg-gray-200 rounded-md overflow-hidden border border-gray-300 flex items-center justify-center">
            <img
              src="src/assets/featuresv2.png"
              alt="Features Preview"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesV2;
