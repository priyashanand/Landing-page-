import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'How does this software improve client intake for law firms?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', 
    },
    {
      question: 'Is the client intake process secure and compliant with legal regulations?',
      answer: 'Yes, our platform uses bank-grade encryption and complies with data privacy laws such as GDPR and HIPAA. We prioritize security to ensure sensitive client information remains protected at all times.',
    },
    {
      question: 'Can this software integrate with our existing case management system?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', 
    },
    {
      question: 'How easy is it for clients to complete the intake process?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', 
    },
    {
      question: 'Do you offer a free trial or demo?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', 
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    // FAQ Section
    <div className="flex flex-col items-center py-20 px-8 gap-16 w-full min-w-[375px] bg-[#F9FAFB]">
      {/* Title */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[768px]">
        <h2 className="font-montserrat font-semibold text-3xl md:text-5xl text-center text-[#101828]">
          Frequently Asked Questions
        </h2>
        <p className="font-source-sans-pro text-lg text-center text-[#475467]">
          Get answers to commonly asked questions.
        </p>
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-10 w-full max-w-[768px]">
        {faqData.map((item, index) => (
          <div key={index} className="flex flex-col w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <div
              onClick={() => toggleExpand(index)}
              className="flex justify-between items-center p-4 cursor-pointer border-b border-gray-100"
            >
              <p className="font-outfit text-lg font-medium text-[#101828]">{item.question}</p>
              <div className="flex items-center justify-center md:w-7 md:h-7 p-[2px] rounded-full bg-[#101828] transition-all">
                <svg
                  className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-45' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 4V16M4 10H16"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {expandedIndex === index && (
              <div className="p-6">
                <p className="text-[#475467] text-base">{item.answer || 'Answer coming soon!'}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still have questions */}
      {/* (Add your "Contact Us" section here similarly) */}
      <div className="flex flex-col items-center p-10 gap-8 w-full md:w-[1216px] rounded-xl bg-white">
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full border-2 border-white bg-[#D9D9D9]" style={{ marginLeft: '0px' }}></div>
          <div className="relative w-12 h-12 rounded-full border-2 border-white bg-[#D9D9D9]" style={{ marginLeft: '-8px' }}></div>
          <div className="relative w-12 h-12 rounded-full border-2 border-white bg-[#D9D9D9]" style={{ marginLeft: '-8px' }}></div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-2 w-full">
            <h3 className="font-montserrat font-semibold text-xl leading-[140%] text-center text-[#101828]">
              Still have questions?
            </h3>
            <p className="font-source-sans-pro font-normal text-lg leading-[140%] text-center text-[#475467]">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
          </div>
          <div className="flex items-start gap-4 w-full justify-center">
            <button className="flex flex-row justify-center items-center py-3 px-8 gap-2 bg-[#465FFF] shadow-[0px_4px_16px_1px_rgba(70,95,255,0.32)] rounded-lg">
              <span className="font-outfit font-medium text-sm leading-5 text-white">Contact us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
