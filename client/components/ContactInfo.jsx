import React from 'react';

const ContactInfo = () => {
  const contactInfo = {
    email: "earl.potters@gmail.com",
    phone: "+1 720 412 0656",
    location: "San Francisco",
    socials: [
      { name: "Missio.ai", url: "https://missio.ai" },
      { name: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
      { name: "GitHub", url: "https://github.com/your-profile" }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-full">
      <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline text-sm">{contactInfo.email}</a>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm">{contactInfo.phone}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{contactInfo.location}</span>
        </div>
        <div className="flex items-center gap-3">
          {contactInfo.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 