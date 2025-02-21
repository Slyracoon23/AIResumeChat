import React from 'react';

const AvatarViewer = ({ isSessionActive }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Interview Session</h2>
        <button className="px-3 py-1 bg-gray-100 rounded-md">
          {isSessionActive ? 'Hide Video' : 'Show Video'}
        </button>
      </div>
      <div className="aspect-video bg-gray-100 rounded-lg mb-4">
        {/* Video feed will go here */}
        <div className="w-full h-full flex items-center justify-center">
          {isSessionActive ? (
            <video className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="text-gray-400">Video feed not active</div>
          )}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="p-2 rounded-full bg-gray-100">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
        <button className="p-2 rounded-full bg-gray-100">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AvatarViewer; 