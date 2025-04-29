import React from 'react';

const ContactUsSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center items-start gap-16 py-20 px-8 w-full max-w-[1440px] mx-auto">
      {/* Contact Info */}
      <div className="flex flex-col items-start gap-8 w-full max-w-[576px]">
        {/* Title and Description */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full">
          <h2 className="font-montserrat font-semibold text-5xl text-[#101828]">
            Contact us
          </h2>
          <p className="font-source-sans-pro text-center md:text-base tracking-[0.01em] text-[#475467]">
            Ready to transform your practice with custom solutions? Contact us today to schedule a consultation and discover how we can help you achieve your goals.
          </p>
        </div>

        {/* Phone and Email */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <img src="/assets/phone.png" alt="Phone" className="w-6 h-6" />
            <span className="font-source-sans-pro text-lg text-[#475467]">(+1) 000 0000 000</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <svg width="24" height="24" fill="none">
              <path
                d="M4 4H20V20H4V4Z"
                stroke="#475467"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 4L12 13L20 4"
                stroke="#475467"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-source-sans-pro text-lg text-[#475467]">mail@injury-sync.com</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col items-start gap-5 w-full max-w-[576px] ">
        {/* Full Name */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="full-name" className="font-montserrat font-medium text-sm text-[#101828]">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            className="p-2 w-full h-11 border border-[#D0D5DD] rounded-lg shadow-sm font-source-sans-pro text-sm text-[#98A2B3]"
            placeholder="Enter Full name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="font-montserrat font-medium text-sm text-[#101828]">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="p-2 w-full h-11 border border-[#D0D5DD] rounded-lg shadow-sm font-source-sans-pro text-sm text-[#98A2B3]"
            placeholder="Enter email address"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="message" className="font-montserrat font-medium text-sm text-[#101828]">
            Message
          </label>
          <textarea
            id="message"
            className="p-3 w-full h-32 border border-[#D0D5DD] rounded-lg shadow-sm font-source-sans-pro text-sm text-[#98A2B3]"
            placeholder="Enter your message"
          />
        </div>

        {/* Send Button (Only Image) */}
        <button className="flex flex-row justify-center items-center p-[14px_16px] gap-2 w-full md:w-[343px] h-12 bg-[#465FFF] border border-[#465FFF] shadow-[0px_4px_16px_1px_rgba(70,95,255,0.32)] rounded-lg">
        <span className="font-montserrat font-medium text-sm p-5 text-white leading-5">
          Send Message
        </span>
        <img src="/assets/send.png" alt="Send" className="w-4 h-4" />
      </button>
      </div>
    </div>
  );
};

export default ContactUsSection;
