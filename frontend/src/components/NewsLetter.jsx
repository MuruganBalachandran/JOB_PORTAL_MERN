import React from 'react';
import { FaEnvelopeOpenText } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      
      {/* Email me for jobs section */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800">
          <FaEnvelopeOpenText className="text-primary" />
          Email me for jobs
        </h3>
        <p className="text-primary/75 text-sm">
          Receive updates on new job postings and opportunities.
        </p>
        
        {/* Email input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        
        {/* Subscribe button */}
        <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition duration-200 ease-in-out">
          Subscribe
        </button>
      </div>
      
      {/* Get noticed here section */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800">
          <FaEnvelopeOpenText className="text-primary" />
          Get noticed here
        </h3>
        <p className="text-primary/75 text-sm">
          Upload your resume to stand out to potential employers.
        </p>
        
        {/* Upload Resume button */}
        <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition duration-200 ease-in-out">
          Upload your resume
        </button>
      </div>
      
    </div>
  );
};

export default NewsLetter;
