import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const JobNoticeComponent = () => {
  // State for job data including markdown content
  const [jobData, setJobData] = useState({
    companyName: "TechSolutions Inc.",
    jobRole: "Frontend Developer Intern",
    postedDate: "26 March 2025, 00:24",
    closingDate: "15 April 2025, 23:59",
    markdownContent: "Loading job notice..."
  });

  // State to track loading status
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch markdown content on component mount
  useEffect(() => {
    const loadMarkdownContent = async () => {
      try {
        // Try to load the markdown file
        let response = await fetch('./Notice/notice_1.txt');
        
        // If markdown file doesn't exist, try the txt file
        if (!response.ok) {
          response = await fetch('./Notice/notice_1.txt');
        }
        
        if (!response.ok) {
          throw new Error("Failed to load notice file");
        }
        
        const content = await response.text();
        // Update job data with fetched markdown content
        setJobData(prevData => ({
          ...prevData,
          markdownContent: content
        }));
        
        setLoading(false);
      } catch (err) {
        console.error("Error loading notice file:", err);
        setError("Failed to load job description. Please try again later.");
        setLoading(false);
      }
    };

    loadMarkdownContent();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header section with job title and company name */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{jobData.jobRole}</h1>
              <h2 className="text-xl mt-2">{jobData.companyName}</h2>
            </div>
            <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md">
              Student Opportunity
            </div>
          </div>
        </div>
        
        {/* Posted date info */}
        <div className="bg-gray-100 px-6 py-3 text-gray-700 flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>Posted on: <span className="font-semibold">{jobData.postedDate}</span></span>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
              Active
            </span>
          </div>
        </div>
        
        {/* Markdown content card */}
        <div className="p-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 prose max-w-none">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="p-4 text-red-500 bg-red-50 rounded-lg">
                {error}
              </div>
            ) : (
              <ReactMarkdown>
                {jobData.markdownContent}
              </ReactMarkdown>
            )}
          </div>
        </div>
        
        {/* Application closing info */}
        <div className="bg-orange-50 border-t border-orange-100 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-orange-500 rounded-full p-2 text-white mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-800">Application Deadline</h3>
              <p className="text-orange-700">This job posting will close on <span className="font-bold">{jobData.closingDate}</span></p>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-4 border-t border-gray-200">
          <button className="px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Save for Later
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobNoticeComponent;