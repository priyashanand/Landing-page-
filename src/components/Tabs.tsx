import React, { useState } from 'react';

interface TabContent {
  heading: string;
  text: string;
}

const Tab: React.FC<{
  heading: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ heading, text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`hidden md:flex flex-col justify-end items-center p-6 gap-2 w-[402.67px] h-[181px] transition-colors duration-300 ${
        isActive ? ' border-indigo-500' : ''
      }`}
    >
      <h3 className="font-montserrat font-semibold text-2xl text-center text-gray-800">
        {heading}
      </h3>
      <p className="font-source-sans-pro text-base text-center text-gray-500">
        {text}
      </p>
    </button>
  );
};

const Tabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabsData: TabContent[] = [
    {
      heading: 'AI-Powered Call Handling',
      text: 'Transform your intake process. Let AI handle calls with unmatched professionalism—gathering crucial case details, screening potential leads, and directing them seamlessly to your team.',
    },
    {
      heading: 'Smart Follow up',
      text: 'Automate the collection of client information effortlessly. InjurySync uses dynamic, adaptive forms that update in real-time based on intake responses, ensuring you never miss critical details.',
    },
    {
      heading: 'Lead Scoring',
      text: 'Automatically identify and prioritize high-value leads. InjurySync evaluates case type, eligibility, and urgency, empowering your team to focus exclusively on the most promising opportunities.',
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-16">
      {/* Desktop Tabs */}
      <div className="hidden md:flex flex-col gap-2 w-full max-w-[1216px]">
        {/* Underline Background */}
        <div className="relative h-1 bg-white rounded-full">
          <div
            className=" h-1 bg-indigo-500 rounded-full transition-all duration-300"
            style={{
              width: `${100 / tabsData.length}%`,
              left: `${(100 / tabsData.length) * activeIndex}%`,
            }}
          ></div>
        </div>
        {/* Tab Buttons */}
        <div className="flex gap-1">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              heading={tab.heading}
              text={tab.text}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex lg:hidden flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-montserrat">
          {tabsData[activeIndex].heading}
        </h3>
        <p className="text-base text-gray-500 font-source-sans-pro mb-6 px-4">
          {tabsData[activeIndex].text}
        </p>
        <div className="flex gap-2">
          {tabsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-indigo-500 scale-110' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
