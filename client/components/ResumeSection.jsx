import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// PDF.js options for cMaps and standard fonts
const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const ResumeSection = () => {
  const resumeData = {
    name: "John Smith",
    title: "Senior Software Engineer",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Corp",
        period: "2020 - Present",
        description: "Led development of cloud-based solutions and microservices architecture"
      },
      {
        title: "Software Engineer",
        company: "Innovation Labs",
        period: "2018 - 2020",
        description: "Developed and maintained full-stack web applications"
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"]
  };

  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(URL.createObjectURL(file));
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Resume</h2>
        {pdfFile && (
          <button 
            onClick={() => setPdfFile(null)}
            className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200"
          >
            Remove PDF
          </button>
        )}
      </div>

      {!pdfFile ? (
        <div className="flex-1 border-2 border-dashed rounded-lg flex items-center justify-center p-6">
          <div className="text-center">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400" 
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 48 48"
            >
              <path 
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-1 text-sm text-gray-600">
              <label className="cursor-pointer">
                <span className="text-blue-500">Click to upload</span> or drag and drop
                <input
                  type="file"
                  className="hidden"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  onClick={(e) => e.target.value = null}
                />
              </label>
            </p>
            <p className="text-xs text-gray-500">PDF files only</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex-1 overflow-y-auto"
            options={options}
          >
            <Page 
              pageNumber={pageNumber} 
              className="mx-auto"
              width={350}
            />
          </Document>
          {numPages > 1 && (
            <div className="flex justify-between items-center mt-4 px-4">
              <button
                onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                disabled={pageNumber <= 1}
                className="px-3 py-1 bg-gray-100 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <p className="text-sm text-gray-600">
                Page {pageNumber} of {numPages}
              </p>
              <button
                onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                disabled={pageNumber >= numPages}
                className="px-3 py-1 bg-gray-100 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeSection; 