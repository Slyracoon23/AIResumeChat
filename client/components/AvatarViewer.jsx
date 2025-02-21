import React, { useState } from 'react';
import placeholderMeeting from '/assets/placeholder-meeting.png';

const AvatarViewer = ({ isSessionActive }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Interview Session</h2>
          <p className="text-sm text-gray-500 mt-1">Connect and discuss your resume live</p>
        </div>
        
        <button 
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md 
                     hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:ring-offset-2"
          aria-label={isSessionActive ? 'Hide Video' : 'Show Video'}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isSessionActive 
                ? "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                : "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              } 
            />
          </svg>
          {isSessionActive ? 'Hide Video' : 'Show Video'}
        </button>
      </div>
      
      {/* Main Video Container */}
      <div className="relative flex-1 rounded-xl overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          {isSessionActive ? (
            <>
              {/* Main video feed */}
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted={isMuted}
                aria-label="Interview video feed"
              />
              
              {/* Status indicators */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>
                  <span className="text-white text-sm font-medium">LIVE</span>
                </div>
              </div>

              {/* Self view */}
              <div className="absolute bottom-4 right-4 w-32 h-24 rounded-lg overflow-hidden border-2 border-white/50 shadow-lg">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted
                  aria-label="Self view video feed"
                />
              </div>

              {/* Floating controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 
                    ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-700'}`}
                  aria-label={isMuted ? 'Unmute microphone' : 'Mute microphone'}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>

                <button
                  onClick={() => setIsCameraOff(!isCameraOff)}
                  className={`p-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50
                    ${isCameraOff ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-700'}`}
                  aria-label={isCameraOff ? 'Turn camera on' : 'Turn camera off'}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>

                <button
                  className="p-2.5 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="End interview"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={placeholderMeeting} 
                alt="Placeholder meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg font-medium">Click 'Show Video' to start</p>
                  <p className="text-sm text-gray-300 mt-2">Make sure your camera and microphone are ready</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvatarViewer; 