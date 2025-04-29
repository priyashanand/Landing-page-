import React, { useState } from 'react';
import checkIcon from '../assets/check.png'; // Default check icon
import blueCheckIcon from '../assets/blueCheck.png'; // Blue check icon

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number | 'Custom';
  yearlyPrice: number | 'Custom';
  features: string[];
}

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans: Plan[] = [
    {
      name: 'Basic Plan',
      description: 'Ideal for small practices with low lien volume.',
      monthlyPrice: 9, // Example monthly price
      yearlyPrice: 99,
      features: [
        'Up to 10 new patients per month',
        'Human review for accuracy',
        'Report tracking dashboard',
      ],
    },
    {
      name: 'Pro Plan',
      description: 'Perfect for growing practices.',
      monthlyPrice: 19, // Example monthly price
      yearlyPrice: 199,
      features: [
        'Up to 50 new patients per month',
        'Human review for accuracy',
        'Report tracking dashboard',
      ],
    },
    {
      name: 'Enterprise Plan',
      description: 'Tailored for large organizations with high lien volume needs.',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      features: [
        'Custom solutions to fit your needs.',
        'High volume report generation.',
        'Dedicated account manager.',
      ],
    },
  ];

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
  };

  return (
    <div className="flex flex-col items-center py-20 px-12 md:px-28 gap-16 relative w-full">
      {/* Pricing Container */}
      <div className="flex flex-col items-center gap-8 w-full md:w-[768px]">
        {/* Title with description */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-montserrat font-semibold text-[30px] md:text-5xl leading-[130%] text-center text-gray-800 w-full">
            Pricing That Works for You
          </h2>
          <p className="font-source-sans-pro text-base leading-6 text-center tracking-wide text-gray-500 w-full">
            Our pricing plans are designed to accommodate your requirements.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex flex-row items-center rounded-full bg-gray-200 p-1 gap-1">
          <button
            className={`font-source-sans-pro font-normal text-sm leading-6 text-center tracking-wide rounded-full px-3 py-1 ${
              !isYearly ? 'bg-indigo-500 text-white shadow-sm' : 'text-gray-500'
            }`}
            onClick={() => handleToggle(false)}
          >
            Monthly
          </button>
          <button
            className={`font-source-sans-pro font-normal text-sm leading-6 text-center tracking-wide rounded-full px-3 py-1 ${
              isYearly ? 'bg-indigo-500 text-white shadow-sm' : 'text-gray-500'
            }`}
            onClick={() => handleToggle(true)}
          >
            Yearly <span className='bg-white text-indigo-500 rounded-md p-1'>-20%</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start gap-8 w-full md:w-[1216px]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col items-start p-6  gap-10 w-full md:w-[384px] rounded-xl shadow-md ${
              plan.name === 'Pro Plan' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-800'
            }`}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center justify-between w-full">
                  <h3
                    className={`font-montserrat font-semibold text-xl leading-9 text-left ${
                      plan.name === 'Pro Plan' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.name === 'Pro Plan' && (
                    <span className="bg-white text-indigo-500 font-source-sans-pro font-normal text-xs py-1 px-2 rounded-full shadow-sm">
                      Most Popular
                    </span>
                  )}
                </div>
                <p
                  className={`font-source-sans-pro text-base leading-6 ${
                    plan.name === 'Pro Plan' ? 'text-white opacity-90' : 'text-gray-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>
              <div className="flex items-center">
                <span className={`font-montserrat font-semibold text-5xl mr-2 flex items-center ${plan.name === 'Pro Plan' ? 'text-white' : 'text-indigo-500'}`}>
                  ${isYearly && typeof plan.yearlyPrice === 'number' ? plan.yearlyPrice : (plan.monthlyPrice === 'Custom' ? <div className="py-2">Custom</div> : plan.monthlyPrice)}
                </span>
              </div>
              {typeof plan.yearlyPrice === 'number' && typeof plan.monthlyPrice === 'number' && (
                <p
                  className={`font-source-sans-pro text-sm leading-5 ${
                    plan.name === 'Pro Plan' ? 'text-white opacity-90' : 'text-gray-500'
                  }`}
                >
                  {isYearly ? 'billed yearly' : 'billed monthly'}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <p
                className={`font-source-sans-pro font-normal text-sm leading-6 ${
                  plan.name === 'Pro Plan' ? 'text-white opacity-90' : 'text-gray-500'
                }`}
              >
                Includes:
              </p>
              <ul className="flex flex-col gap-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <img
                      src={
                        plan.name === 'Basic Plan' || plan.name === 'Enterprise Plan'
                          ? blueCheckIcon
                          : checkIcon
                      }
                      alt="Checkmark"
                      className="h-4 w-4"
                    />
                    <span
                      className={`font-source-sans-pro text-sm leading-6 ${
                        plan.name === 'Pro Plan' ? 'text-white opacity-90' : 'text-gray-500'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`font-montserrat font-medium text-sm py-3 rounded-md w-full ${
                plan.name === 'Pro Plan'
                  ? 'bg-white text-indigo-500 hover:bg-indigo-100'
                  : 'bg-indigo-500 text-white hover:bg-indigo-600'
              }`}
            >
              Get Started with {plan.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;