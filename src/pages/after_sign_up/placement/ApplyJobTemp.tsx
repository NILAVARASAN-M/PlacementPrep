// import React, { useState } from 'react';

// const JobApplicationPage = () => {
//   // Sample data for a user and job
//   const jobData = {
//     id: "job123",
//     title: "Software Development Intern",
//     company: "TechInnovate Solutions",
//     location: "Bangalore",
//     leadsToFullTime: true,
//     salary: "65000",
//     deadline: "27 Mar 2025 by 10:30",
//     dateOfVisit: "NOT_YET_DECIDED",
//     hiringStartsOn: "01 Apr 2025",
//     internStartsOn: "15 May 2025",
//     duration: "6 months",
//     internType: "Intern",
//     stipend: 65000,
//     modeOfIntern: "On-site",
//     modeOfVisit: "NOT_YET_DECIDED",
//     status: "Open For Applications",
//     postedOn: "15 Mar 2025",
//     criteria: {
//       tenth: 75,
//       twelfth: 75,
//       cgpa: 7.5,
//       currentSem: 6,
//       maxCurrentArrears: 0,
//       maxHistoryArrears: 2,
//       gender: "Any",
//       passedOutYear: 2026,
//       collegeBranch: ["VIT", "BITS", "IIT"],
//       course: "B.Tech",
//       department: ["Computer Science", "Information Technology"],
//       collegePermission: true
//     }
//   };

//   const userData = {
//     name: "Rahul Sharma",
//     tenth: 85,
//     twelfth: 78,
//     cgpa: 8.2,
//     currentSem: 6,
//     currentArrears: 0,
//     historyArrears: 0,
//     gender: "Male",
//     passedOutYear: 2026,
//     collegeBranch: "VIT",
//     course: "B.Tech",
//     department: "Computer Science",
//     collegePermission: true,
//     resume: null,
//     bonafide: null,
//     photo: null
//   };

//   // State for active tab, uploaded documents, and application status
//   const [activeTab, setActiveTab] = useState('details');
//   const [documents, setDocuments] = useState({
//     resume: userData.resume,
//     bonafide: userData.bonafide,
//     photo: userData.photo
//   });
//   const [applicationStatus, setApplicationStatus] = useState('Not-Applied');
//   const [showAppliedMessage, setShowAppliedMessage] = useState(false);

//   // Check eligibility
//   const checkEligibility = () => {
//     const criteria = jobData.criteria;
//     const eligibilityResults = {
//       tenth: userData.tenth >= criteria.tenth,
//       twelfth: userData.twelfth >= criteria.twelfth,
//       cgpa: userData.cgpa >= criteria.cgpa,
//       currentSem: userData.currentSem >= criteria.currentSem,
//       currentArrears: userData.currentArrears <= criteria.maxCurrentArrears,
//       historyArrears: userData.historyArrears <= criteria.maxHistoryArrears,
//       passedOutYear: userData.passedOutYear === criteria.passedOutYear,
//       collegeBranch: criteria.collegeBranch.includes(userData.collegeBranch),
//       course: userData.course === criteria.course,
//       department: criteria.department.includes(userData.department),
//       collegePermission: userData.collegePermission === criteria.collegePermission
//     };

//     const isEligible = Object.values(eligibilityResults).every(result => result);
//     return { isEligible, eligibilityResults };
//   };

//   const eligibilityCheck = checkEligibility();

//   // Handle file uploads
//   const handleFileUpload = (type, file) => {
//     setDocuments(prev => ({
//       ...prev,
//       [type]: file
//     }));
//   };

//   // Handle job application
//   const handleApply = () => {
//     if (eligibilityCheck.isEligible && 
//         documents.resume && 
//         documents.bonafide && 
//         documents.photo) {
//       setApplicationStatus('Applied');
//       setShowAppliedMessage(true);
//       setTimeout(() => setShowAppliedMessage(false), 3000);
//     }
//   };

//   const formatDate = (dateString) => {
//     if (dateString === "NOT_YET_DECIDED") return dateString;
//     return dateString;
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h1 className="text-3xl font-bold text-blue-800">{jobData.title}</h1>
//           <h2 className="text-xl text-gray-700 mb-2">{jobData.company}</h2>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
//           <div className="flex border-b">
//             <button
//               className={`px-6 py-3 text-lg font-medium ${activeTab === 'details' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
//               onClick={() => setActiveTab('details')}
//             >
//               Details
//             </button>
//             <button
//               className={`px-6 py-3 text-lg font-medium ${activeTab === 'poc' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
//               onClick={() => setActiveTab('poc')}
//             >
//               POC
//             </button>
//             <button
//               className={`px-6 py-3 text-lg font-medium ${activeTab === 'notice' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
//               onClick={() => setActiveTab('notice')}
//             >
//               Notice
//             </button>
//           </div>

//           <div className="p-6">
//             {activeTab === 'details' ? (
//               <>
//                 {/* CARD 1 - Job Details */}
//                 <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-200">
//                   <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b pb-2">{jobData.title}</h2>
                  
//                   {/* Capsules */}
//                   <div className="flex flex-wrap gap-3 mb-6">
//                     <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                       </svg>
//                       {jobData.location}
//                     </span>
                    
//                     <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
//                       </svg>
//                       {jobData.leadsToFullTime ? "Leads to Full Time" : "Internship Only"}
//                     </span>
                    
//                     <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                       </svg>
//                       ₹{jobData.stipend}/month
//                     </span>
                    
//                     <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                       </svg>
//                       Deadline: {jobData.deadline}
//                     </span>
                    
//                     <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//                       </svg>
//                       Visit: {formatDate(jobData.dateOfVisit)}
//                     </span>
                    
//                     <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                       </svg>
//                       Hiring: {formatDate(jobData.hiringStartsOn)}
//                     </span>
                    
//                     <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//                       </svg>
//                       Starts: {formatDate(jobData.internStartsOn)}
//                     </span>
                    
//                     <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                       </svg>
//                       Duration: {jobData.duration}
//                     </span>
                    
//                     <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                       </svg>
//                       Mode: {jobData.modeOfIntern}
//                     </span>
//                   </div>
                  
//                   {/* Job Criteria */}
//                   <div className="mb-6">
//                     <h3 className="text-lg font-semibold text-gray-700 mb-3">Eligibility Criteria</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">10th:</span>
//                         <span className="font-medium">{jobData.criteria.tenth}%</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">12th:</span>
//                         <span className="font-medium">{jobData.criteria.twelfth}%</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">CGPA:</span>
//                         <span className="font-medium">{jobData.criteria.cgpa}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">Current Sem:</span>
//                         <span className="font-medium">{jobData.criteria.currentSem}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">Current Arrears:</span>
//                         <span className="font-medium">Max {jobData.criteria.maxCurrentArrears}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">History Arrears:</span>
//                         <span className="font-medium">Max {jobData.criteria.maxHistoryArrears}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">Gender:</span>
//                         <span className="font-medium">{jobData.criteria.gender}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">Passing Year:</span>
//                         <span className="font-medium">{jobData.criteria.passedOutYear}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">College:</span>
//                         <span className="font-medium">{jobData.criteria.collegeBranch.join(", ")}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">Course:</span>
//                         <span className="font-medium">{jobData.criteria.course}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">Department:</span>
//                         <span className="font-medium">{jobData.criteria.department.join(", ")}</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Job Status */}
//                   <div className="flex justify-between items-center mt-6">
//                     <div className={`px-4 py-2 rounded-md text-white font-medium ${jobData.status === "Open For Applications" ? "bg-green-600" : "bg-red-600"}`}>
//                       {jobData.status}
//                     </div>
//                     <div className="text-gray-600">
//                       <span className="font-medium">Posted on:</span> {jobData.postedOn}
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 - Eligibility Check */}
//                 <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-200">
//                   <h3 className="text-xl font-bold text-blue-700 mb-4 border-b pb-2">Your Eligibility Status</h3>
                  
//                   <div className={`p-4 mb-6 rounded-md ${eligibilityCheck.isEligible ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"}`}>
//                     <div className="flex items-center">
//                       {eligibilityCheck.isEligible ? (
//                         <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                         </svg>
//                       ) : (
//                         <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                         </svg>
//                       )}
//                       <span className={`font-semibold ${eligibilityCheck.isEligible ? "text-green-700" : "text-red-700"}`}>
//                         {eligibilityCheck.isEligible 
//                           ? "You are eligible to apply for this job!" 
//                           : "You are not eligible for this job due to some criteria mismatch."}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="bg-gray-50 p-4 rounded-lg">
//                     <h4 className="text-lg font-semibold text-gray-700 mb-3">Criteria Matching</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className={`p-3 rounded ${eligibilityCheck.eligibilityResults.tenth ? "bg-green-50" : "bg-red-50"}`}>
//                         <div className="flex justify-between">
//                           <span className="text-gray-700">10th Percentage</span>
//                           <span className={`font-medium ${eligibilityCheck.eligibilityResults.tenth ? "text-green-600" : "text-red-600"}`}>
//                             {userData.tenth}% vs {jobData.criteria.tenth}%
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className={`p-3 rounded ${eligibilityCheck.eligibilityResults.twelfth ? "bg-green-50" : "bg-red-50"}`}>
//                         <div className="flex justify-between">
//                           <span className="text-gray-700">12th Percentage</span>
//                           <span className={`font-medium ${eligibilityCheck.eligibilityResults.twelfth ? "text-green-600" : "text-red-600"}`}>
//                             {userData.twelfth}% vs {jobData.criteria.twelfth}%
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className={`p-3 rounded ${eligibilityCheck.eligibilityResults.cgpa ? "bg-green-50" : "bg-red-50"}`}>
//                         <div className="flex justify-between">
//                           <span className="text-gray-700">CGPA</span>
//                           <span className={`font-medium ${eligibilityCheck.eligibilityResults.cgpa ? "text-green-600" : "text-red-600"}`}>
//                             {userData.cgpa} vs {jobData.criteria.cgpa}
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className={`p-3 rounded ${eligibilityCheck.eligibilityResults.currentArrears ? "bg-green-50" : "bg-red-50"}`}>
//                         <div className="flex justify-between">
//                           <span className="text-gray-700">Current Arrears</span>
//                           <span className={`font-medium ${eligibilityCheck.eligibilityResults.currentArrears ? "text-green-600" : "text-red-600"}`}>
//                             {userData.currentArrears} vs Max {jobData.criteria.maxCurrentArrears}
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className={`p-3 rounded ${eligibilityCheck.eligibilityResults.historyArrears ? "bg-green-50" : "bg-red-50"}`}>
//                         <div className="flex justify-between">
//                           <span className="text-gray-700">History Arrears</span>
//                           <span className={`font-medium ${eligibilityCheck.eligibilityResults.historyArrears ? "text-green-600" : "text-red-600"}`}>
//                             {userData.historyArrears} vs Max {jobData.criteria.maxHistoryArrears}
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className={`p-3 rounded ${eligibilityCheck.eligibilityResults.passedOutYear ? "bg-green-50" : "bg-red-50"}`}>
//                         <div className="flex justify-between">
//                           <span className="text-gray-700">Passing Year</span>
//                           <span className={`font-medium ${eligibilityCheck.eligibilityResults.passedOutYear ? "text-green-600" : "text-red-600"}`}>
//                             {userData.passedOutYear} vs {jobData.criteria.passedOutYear}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 3 - Application Status */}
//                 <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-200">
//                   <h3 className="text-xl font-bold text-blue-700 mb-4 border-b pb-2">Your Application Status</h3>
                  
//                   <div className="p-4 flex items-center justify-center">
//                     <div className={`text-center px-6 py-3 rounded-lg text-white font-medium text-lg ${
//                       applicationStatus === 'Applied' ? 'bg-green-600' :
//                       applicationStatus === 'Not-Applied' ? 'bg-yellow-600' :
//                       'bg-red-600'
//                     }`}>
//                       {applicationStatus}
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 4 - Document Upload */}
//                 {eligibilityCheck.isEligible && (
//                   <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-200">
//                     <h3 className="text-xl font-bold text-blue-700 mb-4 border-b pb-2">Upload Documents</h3>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                       {/* Resume Upload */}
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition duration-300">
//                         <div className="mb-3">
//                           {documents.resume ? (
//                             <div className="flex items-center justify-center text-green-600">
//                               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                               </svg>
//                               <span className="ml-2 font-medium">Resume Uploaded</span>
//                             </div>
//                           ) : (
//                             <svg className="mx-auto w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//                             </svg>
//                           )}
//                         </div>
//                         <h4 className="font-medium mb-1">Resume</h4>
//                         <p className="text-sm text-gray-500 mb-3">PDF or DOCX (Max 2MB)</p>
//                         <button 
//                           onClick={() => handleFileUpload('resume', {name: 'resume.pdf', size: '1.2MB'})}
//                           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//                         >
//                           {documents.resume ? 'Change File' : 'Upload Resume'}
//                         </button>
//                       </div>
                      
//                       {/* Bonafide Upload */}
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition duration-300">
//                         <div className="mb-3">
//                           {documents.bonafide ? (
//                             <div className="flex items-center justify-center text-green-600">
//                               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                               </svg>
//                               <span className="ml-2 font-medium">Bonafide Uploaded</span>
//                             </div>
//                           ) : (
//                             <svg className="mx-auto w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//                             </svg>
//                           )}
//                         </div>
//                         <h4 className="font-medium mb-1">Bonafide Certificate</h4>
//                         <p className="text-sm text-gray-500 mb-3">PDF (Max 2MB)</p>
//                         <button 
//   onClick={() => handleFileUpload('bonafide', {name: 'bonafide.pdf', size: '0.8MB'})}
//   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
// >
//   {documents.bonafide ? 'Change File' : 'Upload Bonafide'}
// </button>
// </div>

// {/* Photo Upload */}
// <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition duration-300">
//   <div className="mb-3">
//     {documents.photo ? (
//       <div className="flex items-center justify-center text-green-600">
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//         </svg>
//         <span className="ml-2 font-medium">Photo Uploaded</span>
//       </div>
//     ) : (
//       <svg className="mx-auto w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//       </svg>
//     )}
//   </div>
//   <h4 className="font-medium mb-1">Passport Photo</h4>
//   <p className="text-sm text-gray-500 mb-3">JPG or PNG (Max 1MB)</p>
//   <button 
//     onClick={() => handleFileUpload('photo', {name: 'photo.jpg', size: '0.5MB'})}
//     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//   >
//     {documents.photo ? 'Change File' : 'Upload Photo'}
//   </button>
// </div>
// </div>

// {/* Drag and drop message */}
// <div className="mt-4 text-center text-gray-600">
//   <p>You can also drag and drop files directly onto each upload box.</p>
// </div>
// </div>
// )}

// {/* CARD 5 - Apply Button */}
// {eligibilityCheck.isEligible && (
//   <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-200">
//     <div className="text-center">
//       <button 
//         onClick={handleApply}
//         disabled={applicationStatus === 'Applied' || !documents.resume || !documents.bonafide || !documents.photo}
//         className={`px-8 py-3 text-lg font-semibold rounded-lg ${
//           applicationStatus === 'Applied' ? 
//           'bg-green-600 text-white cursor-not-allowed' : 
//           documents.resume && documents.bonafide && documents.photo ?
//           'bg-blue-600 text-white hover:bg-blue-700' :
//           'bg-gray-400 text-white cursor-not-allowed'
//         } transition duration-300`}
//       >
//         {applicationStatus === 'Applied' ? 'Applied Successfully' : 'Apply Now'}
//       </button>
      
//       {showAppliedMessage && (
//         <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
//           <div className="flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//             </svg>
//             <span>Congratulations! Your application has been submitted successfully.</span>
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// )}
// </>
// ) : activeTab === 'poc' ? (
//   <div className="p-6 border-2 border-blue-200 rounded-lg flex items-center justify-center">
//     <div className="text-center p-8">
//       <svg className="mx-auto w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//       </svg>
//       <h3 className="text-xl font-semibold text-gray-700 mb-2">Point of Contact</h3>
//       <p className="text-gray-600">This page is getting cooked. Please wait for it to be launched.</p>
//     </div>
//   </div>
// ) : (
//   <div className="p-6 border-2 border-blue-200 rounded-lg flex items-center justify-center">
//     <div className="text-center p-8">
//       <svg className="mx-auto w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//       </svg>
//       <h3 className="text-xl font-semibold text-gray-700 mb-2">Notice Board</h3>
//       <p className="text-gray-600">This page is getting cooked. Please wait for it to be launched.</p>
//     </div>
//   </div>
// )}
// </div>
// </div>
// </div>
// </div>
// );
// };

// export default JobApplicationPage;

// ----------------------------------> 

/**Below is another code */


import React, { useState } from 'react';
import { Upload, Check, X, Clock, MapPin, Calendar, DollarSign, Briefcase, AlertCircle } from 'lucide-react';

const JobApplicationPage = () => {
  // Sample job data
  const jobDetails = {
    title: "Software Development Intern",
    company: "TechVision Inc.",
    location: "Bangalore",
    internLeadsToFullTime: true,
    salary: "₹65,000/month",
    deadline: "27 Mar 2025, 10:30 AM",
    visitDate: "Not Decided Yet",
    hiringStartDate: "01 Apr 2025",
    internStartDate: "15 Apr 2025",
    duration: "6 months",
    jobType: "Intern",
    stipend: "₹65,000/month",
    modeOfIntern: "On-site",
    modeOfVisit: "NOT_YET_DECIDED",
    postedOn: "15 Mar 2025",
    status: "Open For Applications",
    criteria: {
      tenthPercentage: 75,
      twelfthPercentage: 75,
      cgpa: 7.5,
      currentSemester: 6,
      maxCurrentArrears: 0,
      maxHistoryArrears: 2,
      gender: "Any",
      passedOutYear: "2026",
      collegeBranch: ["IIT", "NIT", "IIIT"],
      course: "B.Tech",
      department: ["Computer Science", "Information Technology", "Electronics"],
      collegePermission: true
    }
  };

  // Sample user data
  const userData = {
    name: "Rahul Sharma",
    email: "rahul.sharma@college.edu",
    tenthPercentage: 85,
    twelfthPercentage: 82,
    cgpa: 8.2,
    currentSemester: 6,
    currentArrears: 0,
    historyArrears: 0,
    gender: "Male",
    passedOutYear: "2026",
    collegeBranch: "NIT",
    course: "B.Tech",
    department: "Computer Science",
    collegePermission: true,
    hasResume: true,
    hasBonafide: false,
    hasPhoto: true
  };


  // Check eligibility
  const checkEligibility = () => {
    const criteria = [
        { name: "10th Percentage", status: userData.tenthPercentage >= jobDetails.criteria.tenthPercentage, jobCheck: jobDetails.criteria.tenthPercentage, UserCheck: userData.tenthPercentage },
        { name: "12th Percentage", status: userData.twelfthPercentage >= jobDetails.criteria.twelfthPercentage, jobCheck: jobDetails.criteria.twelfthPercentage, UserCheck: userData.twelfthPercentage },
        { name: "CGPA", status: userData.cgpa >= jobDetails.criteria.cgpa, jobCheck: jobDetails.criteria.cgpa, UserCheck: userData.cgpa },
        { name: "Current Semester", status: userData.currentSemester >= jobDetails.criteria.currentSemester, jobCheck: jobDetails.criteria.currentSemester, UserCheck: userData.currentSemester },
        { name: "Current Arrears", status: userData.currentArrears <= jobDetails.criteria.maxCurrentArrears, jobCheck: jobDetails.criteria.maxCurrentArrears, UserCheck: userData.currentArrears },
        { name: "History Arrears", status: userData.historyArrears <= jobDetails.criteria.maxHistoryArrears, jobCheck: jobDetails.criteria.maxHistoryArrears, UserCheck: userData.historyArrears },
        { name: "Passed Out Year", status: userData.passedOutYear === jobDetails.criteria.passedOutYear, jobCheck: jobDetails.criteria.passedOutYear, UserCheck: userData.passedOutYear },
        { name: "College", status: jobDetails.criteria.collegeBranch.includes(userData.collegeBranch), jobCheck: jobDetails.criteria.collegeBranch.join(", "), UserCheck: userData.collegeBranch },
        { name: "Course", status: userData.course === jobDetails.criteria.course, jobCheck: jobDetails.criteria.course, UserCheck: userData.course },
        { name: "Department", status: jobDetails.criteria.department.includes(userData.department), jobCheck: jobDetails.criteria.department.join(", "), UserCheck: userData.department },
        { name: "College Permission", status: userData.collegePermission === jobDetails.criteria.collegePermission, jobCheck: jobDetails.criteria.collegePermission, UserCheck: userData.collegePermission }
      ];
      
    
    return criteria;
  };

  const eligibilityCriteria = checkEligibility();
  const isEligible = eligibilityCriteria.every(criterion => criterion.status);
  
  // State for managing applications
  const [applicationStatus, setApplicationStatus] = useState("Not Applied");
  const [documents, setDocuments] = useState({
    resume: userData.hasResume,
    bonafide: userData.hasBonafide,
    photo: userData.hasPhoto
  });
  const [dragActive, setDragActive] = useState(null);

  // Handle document upload
  const handleDocUpload = (docType) => {
    setDocuments(prev => ({
      ...prev,
      [docType]: true
    }));
  };

  // Handle job application
  const handleApply = () => {
    if (isEligible && Object.values(documents).every(Boolean)) {
      setApplicationStatus("Applied");
    }
  };

  // Handle drag events
  const handleDrag = (e, docType, active) => {
    e.preventDefault();
    e.stopPropagation();
    if (active !== undefined) setDragActive(active ? docType : null);
  };

  // Handle drop event
  const handleDrop = (e, docType) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(null);
    handleDocUpload(docType);
  };

  return (
<div className="max-w-full w-full mx-auto p-8 font-sans">

<div className="flex space-x-4 mb-6">
        <div className="w-1/3">
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg">Details</button>
        </div>
        <div className="w-1/3">
          <button className="w-full py-3 bg-gray-200 text-gray-600 font-semibold rounded-lg">POC</button>
        </div>
        <div className="w-1/3">
          <button className="w-full py-3 bg-gray-200 text-gray-600 font-semibold rounded-lg">Notice</button>
        </div>
      </div>
      
      {/* Message for empty sections */}
      <div className="hidden">
        <div className="bg-yellow-100 p-4 rounded-lg text-yellow-800">
          <p className="text-center font-medium">This page is still being cooked. Content coming soon!</p>
        </div>
      </div>
      
      {/* CARD 1: Job Details */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-200">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <h1 className="text-2xl font-bold">{jobDetails.title}</h1>
          <p className="text-lg">{jobDetails.company}</p>
        </div>
        
        <div className="p-6">
          {/* Capsule Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Job Overview</h3>
            <div className="flex flex-wrap gap-2">
              <span className="py-1 px-3 bg-blue-100 text-blue-800 rounded-full flex items-center text-sm">
                <MapPin size={14} className="mr-1" /> {jobDetails.location}
              </span>
              <span className="py-1 px-3 bg-green-100 text-green-800 rounded-full flex items-center text-sm">
                <Briefcase size={14} className="mr-1" /> {jobDetails.jobType}
              </span>
              {jobDetails.internLeadsToFullTime && (
                <span className="py-1 px-3 bg-purple-100 text-purple-800 rounded-full flex items-center text-sm">
                  <Check size={14} className="mr-1" /> Leads to Full-Time
                </span>
              )}
              <span className="py-1 px-3 bg-yellow-100 text-yellow-800 rounded-full flex items-center text-sm">
                <DollarSign size={14} className="mr-1" /> {jobDetails.stipend}
              </span>
              <span className="py-1 px-3 bg-red-100 text-red-800 rounded-full flex items-center text-sm">
                <Clock size={14} className="mr-1" /> Deadline: {jobDetails.deadline}
              </span>
              <span className="py-1 px-3 bg-indigo-100 text-indigo-800 rounded-full flex items-center text-sm">
                <Calendar size={14} className="mr-1" /> Visit: {jobDetails.visitDate}
              </span>
              <span className="py-1 px-3 bg-teal-100 text-teal-800 rounded-full flex items-center text-sm">
                <Calendar size={14} className="mr-1" /> Hiring: {jobDetails.hiringStartDate}
              </span>
              <span className="py-1 px-3 bg-cyan-100 text-cyan-800 rounded-full flex items-center text-sm">
                <Calendar size={14} className="mr-1" /> Start: {jobDetails.internStartDate}
              </span>
              <span className="py-1 px-3 bg-rose-100 text-rose-800 rounded-full flex items-center text-sm">
                <Clock size={14} className="mr-1" /> Duration: {jobDetails.duration}
              </span>
              <span className="py-1 px-3 bg-amber-100 text-amber-800 rounded-full flex items-center text-sm">
                <MapPin size={14} className="mr-1" /> Mode: {jobDetails.modeOfIntern}
              </span>
              <span className="py-1 px-3 bg-lime-100 text-lime-800 rounded-full flex items-center text-sm">
                <Briefcase size={14} className="mr-1" /> Visit Mode: {jobDetails.modeOfVisit}
              </span>
            </div>
          </div>
          
          {/* Eligibility Criteria */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Eligibility Criteria</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">10th Percentage</p>
                <p className="font-medium">{jobDetails.criteria.tenthPercentage}% or above</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">12th Percentage</p>
                <p className="font-medium">{jobDetails.criteria.twelfthPercentage}% or above</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">CGPA</p>
                <p className="font-medium">{jobDetails.criteria.cgpa} or above</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Current Semester</p>
                <p className="font-medium">Semester {jobDetails.criteria.currentSemester} or above</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Max Current Arrears</p>
                <p className="font-medium">{jobDetails.criteria.maxCurrentArrears}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Max History Arrears</p>
                <p className="font-medium">{jobDetails.criteria.maxHistoryArrears}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-medium">{jobDetails.criteria.gender}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Passed Out Year</p>
                <p className="font-medium">{jobDetails.criteria.passedOutYear}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">College Branch</p>
                <p className="font-medium">{jobDetails.criteria.collegeBranch.join(", ")}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Course</p>
                <p className="font-medium">{jobDetails.criteria.course}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium">{jobDetails.criteria.department.join(", ")}</p>
              </div>
            </div>
          </div>
          
          {/* Job Status & Timeline */}
          <div className="flex justify-between items-center border-t pt-4">
            <div>
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium ${
                jobDetails.status === "Open For Applications" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {jobDetails.status}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              <div>Application Deadline: {jobDetails.deadline}</div>
              <div>Posted on: {jobDetails.postedOn}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CARD 2: Eligibility Check */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-200">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 text-white">
          <h2 className="text-xl font-semibold">Eligibility Check</h2>
        </div>
        
        <div className="p-6">
          {isEligible ? (
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 flex items-start mb-4">
              <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                <Check size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">You are eligible for this job!</h3>
                <p className="text-green-700 text-sm">Congratulations! Your profile meets all the requirements for this position.</p>
              </div>
            </div>
          ) : (
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 flex items-start mb-4">
              <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                <X size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-red-800">You are not eligible for this job</h3>
                <p className="text-red-700 text-sm">Your profile does not meet some of the requirements for this position.</p>
              </div>
            </div>
          )}
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Criteria Matching</h3>
            <div className="space-y-2">
              {eligibilityCriteria.map((criterion, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm font-medium">{criterion.name}</span>
                  <span className={`flex items-center ${criterion.status ? "text-green-600" : "text-red-600"}`}>
                    {criterion.status ? <Check size={18} /> : <X size={18} />}
                    {criterion.UserCheck } / {criterion.jobCheck}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CARD 3: Application Status */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-200">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 p-4 text-white">
          <h2 className="text-xl font-semibold">Your Application Status</h2>
        </div>
        
        <div className="p-6 flex items-center justify-center">
          <div className={`text-center p-4 rounded-lg w-full ${
            applicationStatus === "Applied" ? "bg-green-100 text-green-800" : 
            applicationStatus === "Not Applied" ? "bg-yellow-100 text-yellow-800" : 
            "bg-red-100 text-red-800"
          }`}>
            <h3 className="text-xl font-bold mb-1">
              {applicationStatus}
            </h3>
            <p className="text-sm">
              {applicationStatus === "Applied" ? "Your application has been submitted successfully!" : 
               applicationStatus === "Not Applied" && isEligible ? "You are eligible but haven't applied yet." : 
               "You cannot apply for this position."}
            </p>
          </div>
        </div>
      </div>
      
      {/* CARD 4: Document Upload */}
      {isEligible && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-200">
          <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-4 text-white">
            <h2 className="text-xl font-semibold">Document Upload</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              {/* Resume Upload */}
              <div 
                className={`border-2 rounded-lg p-4 text-center ${documents.resume ? "border-green-500 bg-green-50" : dragActive === 'resume' ? "border-blue-500 bg-blue-50" : "border-dashed border-gray-300"}`}
                onDragOver={(e) => handleDrag(e, 'resume', true)}
                onDragLeave={(e) => handleDrag(e, 'resume', false)}
                onDrop={(e) => handleDrop(e, 'resume')}
              >
                {documents.resume ? (
                  <div className="text-green-600 flex flex-col items-center">
                    <Check size={32} className="mb-2" />
                    <span className="font-medium">Resume Uploaded</span>
                  </div>
                ) : (
                  <div className="text-gray-500 flex flex-col items-center">
                    <Upload size={32} className="mb-2" />
                    <span className="font-medium">Upload Resume</span>
                    <span className="text-xs mt-1">Drag & drop or click to upload</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={() => handleDocUpload('resume')}
                      id="resume-upload"
                    />
                    <label 
                      htmlFor="resume-upload" 
                      className="mt-2 py-1 px-3 bg-blue-600 text-white text-xs rounded-lg cursor-pointer"
                    >
                      Select File
                    </label>
                  </div>
                )}
              </div>
              
              {/* Bonafide Upload */}
              <div 
                className={`border-2 rounded-lg p-4 text-center ${documents.bonafide ? "border-green-500 bg-green-50" : dragActive === 'bonafide' ? "border-blue-500 bg-blue-50" : "border-dashed border-gray-300"}`}
                onDragOver={(e) => handleDrag(e, 'bonafide', true)}
                onDragLeave={(e) => handleDrag(e, 'bonafide', false)}
                onDrop={(e) => handleDrop(e, 'bonafide')}
              >
                {documents.bonafide ? (
                  <div className="text-green-600 flex flex-col items-center">
                    <Check size={32} className="mb-2" />
                    <span className="font-medium">Bonafide Uploaded</span>
                  </div>
                ) : (
                  <div className="text-gray-500 flex flex-col items-center">
                    <Upload size={32} className="mb-2" />
                    <span className="font-medium">Upload Bonafide</span>
                    <span className="text-xs mt-1">Drag & drop or click to upload</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={() => handleDocUpload('bonafide')}
                      id="bonafide-upload"
                    />
                    <label 
                      htmlFor="bonafide-upload" 
                      className="mt-2 py-1 px-3 bg-blue-600 text-white text-xs rounded-lg cursor-pointer"
                    >
                      Select File
                    </label>
                  </div>
                )}
              </div>
              
              {/* Photo Upload */}
              <div 
                className={`border-2 rounded-lg p-4 text-center ${documents.photo ? "border-green-500 bg-green-50" : dragActive === 'photo' ? "border-blue-500 bg-blue-50" : "border-dashed border-gray-300"}`}
                onDragOver={(e) => handleDrag(e, 'photo', true)}
                onDragLeave={(e) => handleDrag(e, 'photo', false)}
                onDrop={(e) => handleDrop(e, 'photo')}
              >
                {documents.photo ? (
                  <div className="text-green-600 flex flex-col items-center">
                    <Check size={32} className="mb-2" />
                    <span className="font-medium">Photo Uploaded</span>
                  </div>
                ) : (
                  <div className="text-gray-500 flex flex-col items-center">
                    <Upload size={32} className="mb-2" />
                    <span className="font-medium">Upload Photo</span>
                    <span className="text-xs mt-1">Drag & drop or click to upload</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={() => handleDocUpload('photo')}
                      id="photo-upload"
                    />
                    <label 
                      htmlFor="photo-upload" 
                      className="mt-2 py-1 px-3 bg-blue-600 text-white text-xs rounded-lg cursor-pointer"
                    >
                      Select File
                    </label>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              <div className="flex items-center">
                <AlertCircle size={14} className="mr-1" />
                <span>All documents must be in PDF format and less than 2MB in size.</span>
              </div>
              <div className="mt-2 italic">
                Note: You can also use the default documents from your profile.
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* CARD 5: Apply Button */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-200">
        <div className="p-6">
          <button 
            className={`w-full py-3 rounded-lg font-bold text-white text-lg transition-colors ${
              isEligible && applicationStatus !== "Applied" ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleApply}
            disabled={!isEligible || applicationStatus === "Applied"}
          >
            {applicationStatus === "Applied" ? "Already Applied" : isEligible ? "Apply Now" : "Not Eligible"}
          </button>
          
          {applicationStatus === "Applied" && (
            <div className="mt-4 bg-green-100 p-3 rounded-lg text-green-800 text-center">
              <p className="font-medium">Your application has been submitted successfully!</p>
              <p className="text-sm mt-1">We will notify you about the next steps via email.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage;

// Below is a way for doing Job-Criteria ------------------------------->

{/* <div className="bg-white border rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">Eligibility Criteria</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {criteriaGroups.map((group, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-700 mb-3 text-lg">{group.title}</h4>
            <div className="space-y-3">
              {group.items.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="font-medium text-gray-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
          <span className="text-sm text-blue-700">All criteria must be met to be eligible for this position</span>
        </div>
      </div>
    </div> */}