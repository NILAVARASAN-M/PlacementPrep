// import React, { useState } from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
// import { Calendar, ChevronLeft, ChevronRight, Code, FileText, MessageSquare, Star, Sparkles, Briefcase, CheckCircle, XCircle, Clock, TrendingUp, AlertCircle } from 'lucide-react';

// import { Search, Filter, Download, BookOpen, Video, ArrowLeft, ArrowRight } from 'lucide-react';

// const JobDashboard = () => {
//   // Sample data - this would come from your backend
//   const jobStats = {
//     totalJobs: 45,
//     eligible: 32,
//     notEligible: 13,
//     applied: 28,
//     notApplied: 4,
//     accepted: 8,
//     rejected: 12,
//     inProgress: 8,
//     applicationRate: 87.5, // percentage of eligible jobs that were applied to
//     successRate: 28.6 // percentage of applied jobs that were accepted
//   };
  
//   const aiSuggestion = "Based on your application history and the current job market trends, we recommend focusing on enhancing your SQL and data visualization skills. Consider adding projects that demonstrate experience with database management and data analysis to increase your success rate with tech companies.";
  
//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 10;
  
//   const monthlyApplicationData = [
//     { name: 'Jan', applications: 3, interviews: 1, offers: 0 },
//     { name: 'Feb', applications: 5, interviews: 2, offers: 1 },
//     { name: 'Mar', applications: 8, interviews: 4, offers: 2 },
//     { name: 'Apr', applications: 12, interviews: 5, offers: 3 }
//   ];
  
//   const jobApplications = [
//     { id: 1, appliedOn: '2025-03-15', resultExpectedDate: '2025-04-10', companyName: 'TechInnovate', jobTitle: 'Junior Software Developer', location: 'San Francisco, CA', salary: '$75,000-$90,000', status: 'Round-2' },
//     { id: 2, appliedOn: '2025-03-18', resultExpectedDate: '2025-04-12', companyName: 'DataVision Corp', jobTitle: 'Data Analyst Intern', location: 'Remote', salary: '$25/hr', status: 'HR-Round' },
//     { id: 3, appliedOn: '2025-03-20', resultExpectedDate: '2025-04-15', companyName: 'CloudSphere', jobTitle: 'Cloud Engineer Trainee', location: 'Seattle, WA', salary: '$80,000-$95,000', status: 'Coding-Round' },
//     { id: 4, appliedOn: '2025-03-22', resultExpectedDate: '2025-04-20', companyName: 'WebFront Systems', jobTitle: 'Frontend Developer', location: 'Austin, TX', salary: '$70,000-$85,000', status: 'Accepted' },
//     { id: 5, appliedOn: '2025-03-25', resultExpectedDate: '2025-04-22', companyName: 'SecureNet', jobTitle: 'Cybersecurity Analyst', location: 'Boston, MA', salary: '$85,000-$100,000', status: 'Not Eligible' },
//     { id: 6, appliedOn: '2025-03-28', resultExpectedDate: '2025-04-25', companyName: 'MobileFirst', jobTitle: 'Mobile App Developer', location: 'New York, NY', salary: '$90,000-$110,000', status: 'Interview' },
//     { id: 7, appliedOn: '2025-03-30', resultExpectedDate: '2025-04-28', companyName: 'AI Solutions', jobTitle: 'ML Engineer Intern', location: 'Chicago, IL', salary: '$30/hr', status: 'Round-1' },
//     { id: 8, appliedOn: '2025-04-01', resultExpectedDate: '2025-04-30', companyName: 'DevOps Pro', jobTitle: 'DevOps Intern', location: 'Atlanta, GA', salary: '$28/hr', status: 'Eligible' },
//     { id: 9, appliedOn: '2025-04-02', resultExpectedDate: '2025-05-02', companyName: 'FinTech Innovations', jobTitle: 'Software Engineer', location: 'Miami, FL', salary: '$75,000-$95,000', status: 'Disqualified' },
//     { id: 10, appliedOn: '2025-04-03', resultExpectedDate: '2025-05-05', companyName: 'EduTech Systems', jobTitle: 'Full Stack Developer', location: 'Denver, CO', salary: '$80,000-$100,000', status: 'Applied' },
//     { id: 11, appliedOn: '2025-04-05', resultExpectedDate: '2025-05-10', companyName: 'HealthIT', jobTitle: 'Backend Developer', location: 'San Diego, CA', salary: '$85,000-$105,000', status: 'Round-3' },
//     { id: 12, appliedOn: '2025-04-07', resultExpectedDate: '2025-05-12', companyName: 'RetailTech', jobTitle: 'UI/UX Developer Intern', location: 'Portland, OR', salary: '$26/hr', status: 'Not Applied' }
//   ];
  
//   // Skills to enhance based on market trends
//   const skillsToEnhance = [
//     { skill: 'Data Structures & Algorithms', demand: 'High', relevance: 95 },
//     { skill: 'React/Frontend Development', demand: 'High', relevance: 90 },
//     { skill: 'Cloud Services (AWS/Azure)', demand: 'Very High', relevance: 88 },
//     { skill: 'Machine Learning Basics', demand: 'Medium', relevance: 75 }
//   ];
  
//   // Pagination logic
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = jobApplications.slice(indexOfFirstJob, indexOfLastJob);
//   const totalPages = Math.ceil(jobApplications.length / jobsPerPage);
  
//   // Pie chart data for job status
//   const jobStatusData = [
//     { name: 'Accepted', value: jobStats.accepted, color: '#2e7d32' },
//     { name: 'Rejected', value: jobStats.rejected, color: '#c62828' },
//     { name: 'In Progress', value: jobStats.inProgress, color: '#1565c0' }
//   ];
  
//   // Pie chart data for eligibility status
//   const eligibilityStatusData = [
//     { name: 'Eligible', value: jobStats.eligible, color: '#2e7d32' },
//     { name: 'Not Eligible', value: jobStats.notEligible, color: '#c62828' }
//   ];
  
//   // Get status color based on status string
//   const getStatusColor = (status) => {
//     const statusColors = {
//       'Accepted': 'bg-green-700',
//       'Not Eligible': 'bg-red-700',
//       'Eligible': 'bg-blue-700',
//       'Disqualified': 'bg-red-700',
//       'Round-1': 'bg-amber-700',
//       'Round-2': 'bg-amber-700',
//       'Round-3': 'bg-amber-700',
//       'Interview': 'bg-purple-700',
//       'HR-Round': 'bg-indigo-700',
//       'Coding-Round': 'bg-cyan-700',
//       'Applied': 'bg-blue-700',
//       'Not Applied': 'bg-gray-600'
//     };
    
//     return statusColors[status] || 'bg-gray-600';
//   };
  
//   // Function to format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "-";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
//   };
  
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with dashboard title */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Job Dashboard</h1>
//           <p className="text-gray-600">Track your job applications, analyze your performance, and enhance your career prospects</p>
//         </div>
        
//         {/* CARD 1: Job Dashboard Stats */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Application Statistics</h2>
//             <div className="text-sm text-gray-500">Last updated: April 2, 2025</div>
//           </div>
          
//           {/* Job Stats Section */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <Briefcase size={18} className="text-gray-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Total Jobs</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.totalJobs}</p>
//               <p className="text-xs text-gray-500 mt-1">Available positions</p>
//             </div>
            
//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <CheckCircle size={18} className="text-green-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Eligible</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.eligible}</p>
//               <p className="text-xs text-gray-500 mt-1">{Math.round(jobStats.eligible/jobStats.totalJobs*100)}% of total jobs</p>
//             </div>
            
//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <XCircle size={18} className="text-red-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Not Eligible</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.notEligible}</p>
//               <p className="text-xs text-gray-500 mt-1">{Math.round(jobStats.notEligible/jobStats.totalJobs*100)}% of total jobs</p>
//             </div>
            
//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <CheckCircle size={18} className="text-blue-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Applied</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.applied}</p>
//               <p className="text-xs text-gray-500 mt-1">{jobStats.applicationRate}% application rate</p>
//             </div>
            
//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <AlertCircle size={18} className="text-amber-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Not Applied</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.notApplied}</p>
//               <p className="text-xs text-gray-500 mt-1">Eligible but not applied</p>
//             </div>
            
//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <CheckCircle size={18} className="text-green-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Accepted</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.accepted}</p>
//               <p className="text-xs text-gray-500 mt-1">{jobStats.successRate}% success rate</p>
//             </div>
            
//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <Clock size={18} className="text-blue-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">In Progress</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.inProgress}</p>
//               <p className="text-xs text-gray-500 mt-1">Awaiting results</p>
//             </div>
//           </div>
          
//           {/* Charts & Analysis Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {/* Monthly Application Trends */}
//             <div className="col-span-2 bg-gray-50 rounded-lg p-4">
//               <h3 className="text-sm font-medium text-gray-700 mb-4">Monthly Application Activity</h3>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={monthlyApplicationData} margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//                     <XAxis dataKey="name" stroke="#6b7280" />
//                     <YAxis stroke="#6b7280" />
//                     <Tooltip />
//                     <Bar dataKey="applications" name="Applications" fill="#1565c0" />
//                     <Bar dataKey="interviews" name="Interviews" fill="#7b1fa2" />
//                     <Bar dataKey="offers" name="Offers" fill="#2e7d32" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="flex justify-center space-x-8 mt-2">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-blue-700 mr-1"></div>
//                   <span className="text-xs">Applications</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-purple-700 mr-1"></div>
//                   <span className="text-xs">Interviews</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-green-700 mr-1"></div>
//                   <span className="text-xs">Offers</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Application Status Chart */}
//             <div className="col-span-1 bg-gray-50 rounded-lg p-4">
//               <h3 className="text-sm font-medium text-gray-700 mb-4">Application Status Distribution</h3>
//               <div className="h-48">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={jobStatusData}
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={35}
//                       outerRadius={60}
//                       paddingAngle={3}
//                       dataKey="value"
//                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                       labelLine={false}
//                     >
//                       {jobStatusData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="flex justify-center space-x-4 mt-4">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-green-700 mr-1"></div>
//                   <span className="text-xs">Accepted</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-red-700 mr-1"></div>
//                   <span className="text-xs">Rejected</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-blue-700 mr-1"></div>
//                   <span className="text-xs">In Progress</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* AI Suggestion Section */}
//           <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
//             <div className="flex items-start">
//               <div className="mr-4">
//                 <div className="bg-gray-800 text-white p-2 rounded-full">
//                   <Sparkles size={20} />
//                 </div>
//               </div>
//               <div>
//                 <h2 className="text-lg font-bold text-gray-800 mb-2">AI Suggestion</h2>
//                 <p className="text-gray-700 italic">{aiSuggestion}</p>
                
//                 <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
//                   {skillsToEnhance.map((skill, index) => (
//                     <div key={index} className="bg-white rounded p-3 border border-gray-200 shadow-sm">
//                       <div className="flex justify-between items-center">
//                         <span className="text-sm font-medium">{skill.skill}</span>
//                         <span className={`text-xs px-2 py-1 rounded-full ${skill.demand === 'High' || skill.demand === 'Very High' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
//                           {skill.demand}
//                         </span>
//                       </div>
//                       <div className="mt-2 bg-gray-200 h-1.5 rounded-full overflow-hidden">
//                         <div 
//                           className="bg-blue-700 h-full rounded-full" 
//                           style={{ width: `${skill.relevance}%` }}
//                         ></div>
//                       </div>
//                       <div className="mt-1 text-xs text-gray-500 text-right">{skill.relevance}% relevance</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* CARD 2: Applied Jobs Table */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Application Tracking</h2>
//             <button className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700">Export Data</button>
//           </div>
          
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">S.No.</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Applied On</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Expected Result</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Company</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Job Title</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Location</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Salary</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {currentJobs.map((job, index) => (
//                   <tr key={job.id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4 text-sm text-gray-900 border-b">{indexOfFirstJob + index + 1}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{formatDate(job.appliedOn)}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{formatDate(job.resultExpectedDate)}</td>
//                     <td className="py-3 px-4 text-sm font-medium text-gray-900 border-b">{job.companyName}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.jobTitle}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.location}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.salary}</td>
//                     <td className="py-3 px-4 border-b">
//                       <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getStatusColor(job.status)}`}>
//                         {job.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           {/* Pagination */}
//           <div className="mt-4 flex justify-between items-center">
//             <p className="text-sm text-gray-600">
//               Showing {indexOfFirstJob + 1} to {Math.min(indexOfLastJob, jobApplications.length)} of {jobApplications.length} applications
//             </p>
//             <div className="flex space-x-2">
//               <button 
//                 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded-md border ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed border-gray-200' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
//               >
//                 <ChevronLeft size={16} />
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => setCurrentPage(page)}
//                   className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-50 border border-gray-300'}`}
//                 >
//                   {page}
//                 </button>
//               ))}
//               <button 
//                 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className={`p-2 rounded-md border ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed border-gray-200' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
//               >
//                 <ChevronRight size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* CARD 3: Skill Enhancement */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Career Development Resources</h2>
//             <div className="text-sm text-gray-500">Tailored to your profile and application history</div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//               <div className="flex justify-center mb-4">
//                 <div className="p-3 bg-gray-800 text-white rounded-full">
//                   <Code size={20} />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Problem Solving</h3>
//               <p className="text-sm text-center text-gray-600 mb-4">Practice technical interviews with customized coding challenges based on your target roles</p>
//               <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
//                 <span>Progress</span>
//                 <span>45%</span>
//               </div>
//               <div className="w-full bg-gray-200 h-1.5 rounded-full">
//                 <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "45%" }}></div>
//               </div>
//               <button className="mt-4 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">Continue Practice</button>
//             </div>
            
//             <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//               <div className="flex justify-center mb-4">
//                 <div className="p-3 bg-gray-800 text-white rounded-full">
//                   <FileText size={20} />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Resume Analysis</h3>
//               <p className="text-sm text-center text-gray-600 mb-4">Get professional feedback on your resume with AI-powered optimization for ATS systems</p>
//               <ul className="text-xs text-gray-600 mb-4 space-y-1">
//                 <li className="flex items-center"><CheckCircle size={12} className="text-green-600 mr-1" /> Keyword optimization</li>
//                 <li className="flex items-center"><CheckCircle size={12} className="text-green-600 mr-1" /> Format improvement</li>
//                 <li className="flex items-center"><CheckCircle size={12} className="text-green-600 mr-1" /> Content suggestions</li>
//               </ul>
//               <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">Analyze Resume</button>
//             </div>
            
//             <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//               <div className="flex justify-center mb-4">
//                 <div className="p-3 bg-gray-800 text-white rounded-full">
//                   <MessageSquare size={20} />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Interview Prep</h3>
//               <p className="text-sm text-center text-gray-600 mb-4">Practice with industry-specific mock interviews and receive personalized feedback</p>
//               <div className="bg-gray-50 rounded p-2 mb-3">
//                 <div className="text-xs font-medium mb-1">Recently added:</div>
//                 <div className="text-sm">System Design Interview for Tech Roles</div>
//               </div>
//               <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">Schedule Practice</button>
//             </div>
            
//             <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//               <div className="flex justify-center mb-4">
//                 <div className="p-3 bg-gray-800 text-white rounded-full">
//                   <TrendingUp size={20} />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Skills Assessment</h3>
//               <p className="text-sm text-center text-gray-600 mb-4">Identify skill gaps and receive personalized learning paths based on job market trends</p>
//               <div className="relative pt-1 mb-4">
//                 <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
//                   <span>Top skill match: React Development</span>
//                   <span>78%</span>
//                 </div>
//                 <div className="overflow-hidden h-1.5 text-xs flex rounded-full bg-gray-200">
//                   <div style={{ width: "78%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"></div>
//                 </div>
//               </div>
//               <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">View Full Report</button>
//             </div>
//           </div>
//         </div>

//         {/* CARD 3: Skill Enhancement */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-6">Enhance Your Skills</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
//             <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
//               <BookOpen className="h-6 w-6" />
//             </div>
//             <h3 className="text-lg font-bold mb-2">Problem Solving</h3>
//             <p className="text-sm mb-4">Practice coding challenges to improve your technical skills</p>
//             <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
//               Start Practicing
//             </button>
//           </div>
          
//           <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
//             <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
//               <FileText className="h-6 w-6" />
//             </div>
//             <h3 className="text-lg font-bold mb-2">Enhance Resume</h3>
//             <p className="text-sm mb-4">Get expert feedback to make your resume stand out</p>
//             <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
//               Improve Resume
//             </button>
//           </div>
          
//           <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
//             <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
//               <Video className="h-6 w-6" />
//             </div>
//             <h3 className="text-lg font-bold mb-2">Mock Interviews</h3>
//             <p className="text-sm mb-4">Practice with simulated interviews and get feedback</p>
//             <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
//               Schedule Interview
//             </button>
//           </div>
          
//           <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
//             <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
//               <Star className="h-6 w-6" />
//             </div>
//             <h3 className="text-lg font-bold mb-2">AI Suggestions</h3>
//             <p className="text-sm mb-4">Get personalized career guidance based on your profile</p>
//             <button className="bg-white text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
//               Get Insights
//             </button>
//           </div>
//           </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default JobDashboard;









// import { useState } from "react"
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
// import {
//   ChevronLeft,
//   ChevronRight,
//   Code,
//   FileText,
//   MessageSquare,
//   Star,
//   Sparkles,
//   Briefcase,
//   CheckCircle,
//   XCircle,
//   Clock,
//   TrendingUp,
//   AlertCircle,
// } from "lucide-react"

// import { Search, BookOpen, Video } from "lucide-react"

// const JobDashboard = () => {
//   // Sample data - this would come from your backend
//   const jobStats = {
//     totalJobs: 45,
//     eligible: 32,
//     notEligible: 13,
//     applied: 28,
//     notApplied: 4,
//     accepted: 8,
//     rejected: 12,
//     inProgress: 8,
//     applicationRate: 87.5, // percentage of eligible jobs that were applied to
//     successRate: 28.6, // percentage of applied jobs that were accepted
//   }

//   const aiSuggestion =
//     "Based on your application history and the current job market trends, we recommend focusing on enhancing your SQL and data visualization skills. Consider adding projects that demonstrate experience with database management and data analysis to increase your success rate with tech companies."

//   const [currentPage, setCurrentPage] = useState(1)
//   const [searchQuery, setSearchQuery] = useState("")
//   const jobsPerPage = 10

//   const monthlyApplicationData = [
//     { name: "Jan", applications: 3, interviews: 1, offers: 0 },
//     { name: "Feb", applications: 5, interviews: 2, offers: 1 },
//     { name: "Mar", applications: 8, interviews: 4, offers: 2 },
//     { name: "Apr", applications: 12, interviews: 5, offers: 3 },
//   ]

//   const jobApplications = [
//     {
//       id: 1,
//       appliedOn: "2025-03-15",
//       resultExpectedDate: "2025-04-10",
//       companyName: "TechInnovate",
//       jobTitle: "Junior Software Developer",
//       location: "San Francisco, CA",
//       salary: "$75,000-$90,000",
//       status: "Round-2",
//     },
//     {
//       id: 2,
//       appliedOn: "2025-03-18",
//       resultExpectedDate: "2025-04-12",
//       companyName: "DataVision Corp",
//       jobTitle: "Data Analyst Intern",
//       location: "Remote",
//       salary: "$25/hr",
//       status: "HR-Round",
//     },
//     {
//       id: 3,
//       appliedOn: "2025-03-20",
//       resultExpectedDate: "2025-04-15",
//       companyName: "CloudSphere",
//       jobTitle: "Cloud Engineer Trainee",
//       location: "Seattle, WA",
//       salary: "$80,000-$95,000",
//       status: "Coding-Round",
//     },
//     {
//       id: 4,
//       appliedOn: "2025-03-22",
//       resultExpectedDate: "2025-04-20",
//       companyName: "WebFront Systems",
//       jobTitle: "Frontend Developer",
//       location: "Austin, TX",
//       salary: "$70,000-$85,000",
//       status: "Accepted",
//     },
//     {
//       id: 5,
//       appliedOn: "2025-03-25",
//       resultExpectedDate: "2025-04-22",
//       companyName: "SecureNet",
//       jobTitle: "Cybersecurity Analyst",
//       location: "Boston, MA",
//       salary: "$85,000-$100,000",
//       status: "Not Eligible",
//     },
//     {
//       id: 6,
//       appliedOn: "2025-03-28",
//       resultExpectedDate: "2025-04-25",
//       companyName: "MobileFirst",
//       jobTitle: "Mobile App Developer",
//       location: "New York, NY",
//       salary: "$90,000-$110,000",
//       status: "Interview",
//     },
//     {
//       id: 7,
//       appliedOn: "2025-03-30",
//       resultExpectedDate: "2025-04-28",
//       companyName: "AI Solutions",
//       jobTitle: "ML Engineer Intern",
//       location: "Chicago, IL",
//       salary: "$30/hr",
//       status: "Round-1",
//     },
//     {
//       id: 8,
//       appliedOn: "2025-04-01",
//       resultExpectedDate: "2025-04-30",
//       companyName: "DevOps Pro",
//       jobTitle: "DevOps Intern",
//       location: "Atlanta, GA",
//       salary: "$28/hr",
//       status: "Eligible",
//     },
//     {
//       id: 9,
//       appliedOn: "2025-04-02",
//       resultExpectedDate: "2025-05-02",
//       companyName: "FinTech Innovations",
//       jobTitle: "Software Engineer",
//       location: "Miami, FL",
//       salary: "$75,000-$95,000",
//       status: "Disqualified",
//     },
//     {
//       id: 10,
//       appliedOn: "2025-04-03",
//       resultExpectedDate: "2025-05-05",
//       companyName: "EduTech Systems",
//       jobTitle: "Full Stack Developer",
//       location: "Denver, CO",
//       salary: "$80,000-$100,000",
//       status: "Applied",
//     },
//     {
//       id: 11,
//       appliedOn: "2025-04-05",
//       resultExpectedDate: "2025-05-10",
//       companyName: "HealthIT",
//       jobTitle: "Backend Developer",
//       location: "San Diego, CA",
//       salary: "$85,000-$105,000",
//       status: "Round-3",
//     },
//     {
//       id: 12,
//       appliedOn: "2025-04-07",
//       resultExpectedDate: "2025-05-12",
//       companyName: "RetailTech",
//       jobTitle: "UI/UX Developer Intern",
//       location: "Portland, OR",
//       salary: "$26/hr",
//       status: "Not Applied",
//     },
//   ]

//   // Skills to enhance based on market trends
//   const skillsToEnhance = [
//     { skill: "Data Structures & Algorithms", demand: "High", relevance: 95 },
//     { skill: "React/Frontend Development", demand: "High", relevance: 90 },
//     { skill: "Cloud Services (AWS/Azure)", demand: "Very High", relevance: 88 },
//     { skill: "Machine Learning Basics", demand: "Medium", relevance: 75 },
//   ]

//   // Search filter function
//   const filteredJobs = jobApplications.filter((job) => {
//     const jobTitleMatch = job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
//     const companyMatch = job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
//     return jobTitleMatch || companyMatch
//   })

//   // Pagination logic
//   const indexOfLastJob = currentPage * jobsPerPage
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

//   // Pie chart data for job status
//   const jobStatusData = [
//     { name: "Accepted", value: jobStats.accepted, color: "#2e7d32" },
//     { name: "Rejected", value: jobStats.rejected, color: "#c62828" },
//     { name: "In Progress", value: jobStats.inProgress, color: "#1565c0" },
//   ]

//   // Pie chart data for eligibility status
//   const eligibilityStatusData = [
//     { name: "Eligible", value: jobStats.eligible, color: "#2e7d32" },
//     { name: "Not Eligible", value: jobStats.notEligible, color: "#c62828" },
//   ]

//   // Get status color based on status string
//   const getStatusColor = (status) => {
//     const statusColors = {
//       Accepted: "bg-green-700",
//       "Not Eligible": "bg-red-700",
//       Eligible: "bg-blue-700",
//       Disqualified: "bg-red-700",
//       "Round-1": "bg-amber-700",
//       "Round-2": "bg-amber-700",
//       "Round-3": "bg-amber-700",
//       Interview: "bg-purple-700",
//       "HR-Round": "bg-indigo-700",
//       "Coding-Round": "bg-cyan-700",
//       Applied: "bg-blue-700",
//       "Not Applied": "bg-gray-600",
//     }

//     return statusColors[status] || "bg-gray-600"
//   }

//   // Function to format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "-"
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with dashboard title */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Job Dashboard</h1>
//           <p className="text-gray-600">
//             Track your job applications, analyze your performance, and enhance your career prospects
//           </p>
//         </div>

//         {/* CARD 1: Job Dashboard Stats */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Application Statistics</h2>
//             <div className="text-sm text-gray-500">Last updated: April 2, 2025</div>
//           </div>

//           {/* Job Stats Section */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <Briefcase size={18} className="text-gray-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Total Jobs</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.totalJobs}</p>
//               <p className="text-xs text-gray-500 mt-1">Available positions</p>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <CheckCircle size={18} className="text-green-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Eligible</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.eligible}</p>
//               <p className="text-xs text-gray-500 mt-1">
//                 {Math.round((jobStats.eligible / jobStats.totalJobs) * 100)}% of total jobs
//               </p>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <XCircle size={18} className="text-red-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Not Eligible</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.notEligible}</p>
//               <p className="text-xs text-gray-500 mt-1">
//                 {Math.round((jobStats.notEligible / jobStats.totalJobs) * 100)}% of total jobs
//               </p>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <CheckCircle size={18} className="text-blue-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Applied</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.applied}</p>
//               <p className="text-xs text-gray-500 mt-1">{jobStats.applicationRate}% application rate</p>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <AlertCircle size={18} className="text-amber-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Not Applied</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.notApplied}</p>
//               <p className="text-xs text-gray-500 mt-1">Eligible but not applied</p>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <CheckCircle size={18} className="text-green-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">Accepted</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.accepted}</p>
//               <p className="text-xs text-gray-500 mt-1">{jobStats.successRate}% success rate</p>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-4 col-span-1">
//               <div className="flex items-center mb-2">
//                 <Clock size={18} className="text-blue-700 mr-2" />
//                 <h3 className="text-sm font-medium text-gray-700">In Progress</h3>
//               </div>
//               <p className="text-2xl font-bold text-gray-800">{jobStats.inProgress}</p>
//               <p className="text-xs text-gray-500 mt-1">Awaiting results</p>
//             </div>
//           </div>

//           {/* Charts & Analysis Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {/* Monthly Application Trends */}
//             <div className="col-span-2 bg-gray-50 rounded-lg p-4">
//               <h3 className="text-sm font-medium text-gray-700 mb-4">Monthly Application Activity</h3>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={monthlyApplicationData} margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//                     <XAxis dataKey="name" stroke="#6b7280" />
//                     <YAxis stroke="#6b7280" />
//                     <Tooltip />
//                     <Bar dataKey="applications" name="Applications" fill="#1565c0" />
//                     <Bar dataKey="interviews" name="Interviews" fill="#7b1fa2" />
//                     <Bar dataKey="offers" name="Offers" fill="#2e7d32" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="flex justify-center space-x-8 mt-2">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-blue-700 mr-1"></div>
//                   <span className="text-xs">Applications</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-purple-700 mr-1"></div>
//                   <span className="text-xs">Interviews</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-green-700 mr-1"></div>
//                   <span className="text-xs">Offers</span>
//                 </div>
//               </div>
//             </div>

//             {/* Application Status Chart */}
//             <div className="col-span-1 bg-gray-50 rounded-lg p-4">
//               <h3 className="text-sm font-medium text-gray-700 mb-4">Application Status Distribution</h3>
//               <div className="h-48">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={jobStatusData}
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={35}
//                       outerRadius={60}
//                       paddingAngle={3}
//                       dataKey="value"
//                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                       labelLine={false}
//                     >
//                       {jobStatusData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="flex justify-center space-x-4 mt-4">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-green-700 mr-1"></div>
//                   <span className="text-xs">Accepted</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-red-700 mr-1"></div>
//                   <span className="text-xs">Rejected</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-blue-700 mr-1"></div>
//                   <span className="text-xs">In Progress</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* AI Suggestion Section */}
//           <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
//             <div className="flex items-start">
//               <div className="mr-4">
//                 <div className="bg-gray-800 text-white p-2 rounded-full">
//                   <Sparkles size={20} />
//                 </div>
//               </div>
//               <div>
//                 <h2 className="text-lg font-bold text-gray-800 mb-2">AI Suggestion</h2>
//                 <p className="text-gray-700 italic">{aiSuggestion}</p>

//                 <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
//                   {skillsToEnhance.map((skill, index) => (
//                     <div key={index} className="bg-white rounded p-3 border border-gray-200 shadow-sm">
//                       <div className="flex justify-between items-center">
//                         <span className="text-sm font-medium">{skill.skill}</span>
//                         <span
//                           className={`text-xs px-2 py-1 rounded-full ${skill.demand === "High" || skill.demand === "Very High" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
//                         >
//                           {skill.demand}
//                         </span>
//                       </div>
//                       <div className="mt-2 bg-gray-200 h-1.5 rounded-full overflow-hidden">
//                         <div className="bg-blue-700 h-full rounded-full" style={{ width: `${skill.relevance}%` }}></div>
//                       </div>
//                       <div className="mt-1 text-xs text-gray-500 text-right">{skill.relevance}% relevance</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CARD 2: Applied Jobs Table */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Application Tracking</h2>
//             <button className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700">
//               Export Data
//             </button>
//           </div>

//           {/* Search Bar */}
//           <div className="mb-4 relative">
//             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//               <div className="px-3 py-2 bg-gray-50">
//                 <Search size={18} className="text-gray-500" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search by job title or company name..."
//                 className="w-full px-4 py-2 focus:outline-none"
//                 value={searchQuery}
//                 onChange={(e) => {
//                   setSearchQuery(e.target.value)
//                   setCurrentPage(1) // Reset to first page when searching
//                 }}
//               />
//               {searchQuery && (
//                 <button onClick={() => setSearchQuery("")} className="px-3 py-2 text-gray-500 hover:text-gray-700">
//                   ×
//                 </button>
//               )}
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                     S.No.
//                   </th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                     Applied On
//                   </th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                     Expected Result
//                   </th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                     Company
//                   </th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                     Job Title
//                   </th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                     Location
//                   </th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                     Salary
//                   </th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {currentJobs.map((job, index) => (
//                   <tr key={job.id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4 text-sm text-gray-900 border-b">{indexOfFirstJob + index + 1}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{formatDate(job.appliedOn)}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{formatDate(job.resultExpectedDate)}</td>
//                     <td className="py-3 px-4 text-sm font-medium text-gray-900 border-b">{job.companyName}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.jobTitle}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.location}</td>
//                     <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.salary}</td>
//                     <td className="py-3 px-4 border-b">
//                       <span
//                         className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getStatusColor(job.status)}`}
//                       >
//                         {job.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="mt-4 flex justify-between items-center">
//             <p className="text-sm text-gray-600">
//               Showing {filteredJobs.length > 0 ? indexOfFirstJob + 1 : 0} to{" "}
//               {Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} applications
//               {searchQuery && ` (filtered from ${jobApplications.length})`}
//             </p>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded-md border ${currentPage === 1 ? "text-gray-400 cursor-not-allowed border-gray-200" : "text-gray-700 border-gray-300 hover:bg-gray-50"}`}
//               >
//                 <ChevronLeft size={16} />
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => setCurrentPage(page)}
//                   className={`px-3 py-1 rounded-md ${currentPage === page ? "bg-gray-800 text-white" : "text-gray-700 hover:bg-gray-50 border border-gray-300"}`}
//                 >
//                   {page}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className={`p-2 rounded-md border ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed border-gray-200" : "text-gray-700 border-gray-300 hover:bg-gray-50"}`}
//               >
//                 <ChevronRight size={16} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* CARD 3: Skill Enhancement */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Career Development Resources</h2>
//             <div className="text-sm text-gray-500">Tailored to your profile and application history</div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//               <div className="flex justify-center mb-4">
//                 <div className="p-3 bg-gray-800 text-white rounded-full">
//                   <Code size={20} />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Problem Solving</h3>
//               <p className="text-sm text-center text-gray-600 mb-4">
//                 Practice technical interviews with customized coding challenges based on your target roles
//               </p>
//               <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
//                 <span>Progress</span>
//                 <span>45%</span>
//               </div>
//               <div className="w-full bg-gray-200 h-1.5 rounded-full">
//                 <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "45%" }}></div>
//               </div>
//               <button className="mt-4 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">
//                 Continue Practice
//               </button>
//             </div>

//             <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//               <div className="flex justify-center mb-4">
//                 <div className="p-3 bg-gray-800 text-white rounded-full">
//                   <FileText size={20} />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Resume Analysis</h3>
//               <p className="text-sm text-center text-gray-600 mb-4">
//                 Get professional feedback on your resume with AI-powered optimization for ATS systems
//               </p>
//               <ul className="text-xs text-gray-600 mb-4 space-y-1">
//                 <li className="flex items-center">
//                   <CheckCircle size={12} className="text-green-600 mr-1" /> Keyword optimization
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle size={12} className="text-green-600 mr-1" /> Format improvement
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle size={12} className="text-green-600 mr-1" /> Content suggestions
//                 </li>
//               </ul>
//               <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">
//                 Analyze Resume
//               </button>
//             </div>

//             <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//               <div className="flex justify-center mb-4">
//                 <div className="p-3 bg-gray-800 text-white rounded-full">
//                   <MessageSquare size={20} />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Interview Prep</h3>
//               <p className="text-sm text-center text-gray-600 mb-4">
//                 Practice with industry-specific mock interviews and receive personalized feedback
//               </p>
//               <div className="bg-gray-50 rounded p-2 mb-3">
//                 <div className="text-xs font-medium mb-1">Recently added:</div>
//                 <div className="text-sm">System Design Interview for Tech Roles</div>
//               </div>
//               <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">
//                 Schedule Practice
//               </button>
//             </div>

//             <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//               <div className="flex justify-center mb-4">
//                 <div className="p-3 bg-gray-800 text-white rounded-full">
//                   <TrendingUp size={20} />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Skills Assessment</h3>
//               <p className="text-sm text-center text-gray-600 mb-4">
//                 Identify skill gaps and receive personalized learning paths based on job market trends
//               </p>
//               <div className="relative pt-1 mb-4">
//                 <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
//                   <span>Top skill match: React Development</span>
//                   <span>78%</span>
//                 </div>
//                 <div className="overflow-hidden h-1.5 text-xs flex rounded-full bg-gray-200">
//                   <div
//                     style={{ width: "78%" }}
//                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
//                   ></div>
//                 </div>
//               </div>
//               <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">
//                 View Full Report
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* CARD 3: Skill Enhancement */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">Enhance Your Skills</h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
//               <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
//                 <BookOpen className="h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-bold mb-2">Problem Solving</h3>
//               <p className="text-sm mb-4">Practice coding challenges to improve your technical skills</p>
//               <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
//                 Start Practicing
//               </button>
//             </div>

//             <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
//               <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
//                 <FileText className="h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-bold mb-2">Enhance Resume</h3>
//               <p className="text-sm mb-4">Get expert feedback to make your resume stand out</p>
//               <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
//                 Improve Resume
//               </button>
//             </div>

//             <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
//               <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
//                 <Video className="h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-bold mb-2">Mock Interviews</h3>
//               <p className="text-sm mb-4">Practice with simulated interviews and get feedback</p>
//               <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
//                 Schedule Interview
//               </button>
//             </div>

//             <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
//               <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
//                 <Star className="h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-bold mb-2">AI Suggestions</h3>
//               <p className="text-sm mb-4">Get personalized career guidance based on your profile</p>
//               <button className="bg-white text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
//                 Get Insights
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default JobDashboard

/**
 * 
 * sddd
 */

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import {
  ChevronLeft,
  ChevronRight,
  Code,
  FileText,
  MessageSquare,
  Star,
  Sparkles,
  Briefcase,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  AlertCircle,
} from "lucide-react"

import { Search, Download, BookOpen, Video, X, Sliders, Building, Tag } from "lucide-react"

const JobDashboard = () => {
  // Sample data - this would come from your backend
  const jobStats = {
    totalJobs: 45,
    eligible: 32,
    notEligible: 13,
    applied: 28,
    notApplied: 4,
    accepted: 8,
    rejected: 12,
    inProgress: 8,
    applicationRate: 87.5, // percentage of eligible jobs that were applied to
    successRate: 28.6, // percentage of applied jobs that were accepted
  }

  const aiSuggestion =
    "Based on your application history and the current job market trends, we recommend focusing on enhancing your SQL and data visualization skills. Consider adding projects that demonstrate experience with database management and data analysis to increase your success rate with tech companies."

  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [jobTitleFilter, setJobTitleFilter] = useState("")
  const [companyFilter, setCompanyFilter] = useState("")
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const searchInputRef = useRef<HTMLInputElement>(null)
  const jobsPerPage = 10

  const monthlyApplicationData = [
    { name: "Jan", applications: 3, interviews: 1, offers: 0 },
    { name: "Feb", applications: 5, interviews: 2, offers: 1 },
    { name: "Mar", applications: 8, interviews: 4, offers: 2 },
    { name: "Apr", applications: 12, interviews: 5, offers: 3 },
  ]

  const jobApplications = [
    {
      id: 1,
      appliedOn: "2025-03-15",
      resultExpectedDate: "2025-04-10",
      companyName: "TechInnovate",
      jobTitle: "Junior Software Developer",
      location: "San Francisco, CA",
      salary: "$75,000-$90,000",
      status: "Round-2",
    },
    {
      id: 2,
      appliedOn: "2025-03-18",
      resultExpectedDate: "2025-04-12",
      companyName: "DataVision Corp",
      jobTitle: "Data Analyst Intern",
      location: "Remote",
      salary: "$25/hr",
      status: "HR-Round",
    },
    {
      id: 3,
      appliedOn: "2025-03-20",
      resultExpectedDate: "2025-04-15",
      companyName: "CloudSphere",
      jobTitle: "Cloud Engineer Trainee",
      location: "Seattle, WA",
      salary: "$80,000-$95,000",
      status: "Coding-Round",
    },
    {
      id: 4,
      appliedOn: "2025-03-22",
      resultExpectedDate: "2025-04-20",
      companyName: "WebFront Systems",
      jobTitle: "Frontend Developer",
      location: "Austin, TX",
      salary: "$70,000-$85,000",
      status: "Accepted",
    },
    {
      id: 5,
      appliedOn: "2025-03-25",
      resultExpectedDate: "2025-04-22",
      companyName: "SecureNet",
      jobTitle: "Cybersecurity Analyst",
      location: "Boston, MA",
      salary: "$85,000-$100,000",
      status: "Not Eligible",
    },
    {
      id: 6,
      appliedOn: "2025-03-28",
      resultExpectedDate: "2025-04-25",
      companyName: "MobileFirst",
      jobTitle: "Mobile App Developer",
      location: "New York, NY",
      salary: "$90,000-$110,000",
      status: "Interview",
    },
    {
      id: 7,
      appliedOn: "2025-03-30",
      resultExpectedDate: "2025-04-28",
      companyName: "AI Solutions",
      jobTitle: "ML Engineer Intern",
      location: "Chicago, IL",
      salary: "$30/hr",
      status: "Round-1",
    },
    {
      id: 8,
      appliedOn: "2025-04-01",
      resultExpectedDate: "2025-04-30",
      companyName: "DevOps Pro",
      jobTitle: "DevOps Intern",
      location: "Atlanta, GA",
      salary: "$28/hr",
      status: "Eligible",
    },
    {
      id: 9,
      appliedOn: "2025-04-02",
      resultExpectedDate: "2025-05-02",
      companyName: "FinTech Innovations",
      jobTitle: "Software Engineer",
      location: "Miami, FL",
      salary: "$75,000-$95,000",
      status: "Disqualified",
    },
    {
      id: 10,
      appliedOn: "2025-04-03",
      resultExpectedDate: "2025-05-05",
      companyName: "EduTech Systems",
      jobTitle: "Full Stack Developer",
      location: "Denver, CO",
      salary: "$80,000-$100,000",
      status: "Applied",
    },
    {
      id: 11,
      appliedOn: "2025-04-05",
      resultExpectedDate: "2025-05-10",
      companyName: "HealthIT",
      jobTitle: "Backend Developer",
      location: "San Diego, CA",
      salary: "$85,000-$105,000",
      status: "Round-3",
    },
    {
      id: 12,
      appliedOn: "2025-04-07",
      resultExpectedDate: "2025-05-12",
      companyName: "RetailTech",
      jobTitle: "UI/UX Developer Intern",
      location: "Portland, OR",
      salary: "$26/hr",
      status: "Not Applied",
    },
  ]

  // Skills to enhance based on market trends
  const skillsToEnhance = [
    { skill: "Data Structures & Algorithms", demand: "High", relevance: 95 },
    { skill: "React/Frontend Development", demand: "High", relevance: 90 },
    { skill: "Cloud Services (AWS/Azure)", demand: "Very High", relevance: 88 },
    { skill: "Machine Learning Basics", demand: "Medium", relevance: 75 },
  ]

  // Debounce search function
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }

  // Handle search input changes with debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    setIsSearching(true)
    debouncedSearch(value)
  }

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setIsSearching(false)
      if (value.trim() && !recentSearches.includes(value.trim())) {
        setRecentSearches((prev) => [value.trim(), ...prev.slice(0, 4)])
      }
    }, 500),
    [recentSearches],
  )

  // Handle advanced search
  const handleAdvancedSearch = () => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
    }, 300)
    setCurrentPage(1)
  }

  // Clear all search filters
  const clearAllFilters = () => {
    setSearchQuery("")
    setJobTitleFilter("")
    setCompanyFilter("")
    setCurrentPage(1)
  }

  // Apply a recent search
  const applyRecentSearch = (search: string) => {
    setSearchQuery(search)
    setCurrentPage(1)
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Search filter function
  const filteredJobs = jobApplications.filter((job) => {
    if (isAdvancedSearch) {
      const jobTitleMatch = jobTitleFilter ? job.jobTitle.toLowerCase().includes(jobTitleFilter.toLowerCase()) : true
      const companyMatch = companyFilter ? job.companyName.toLowerCase().includes(companyFilter.toLowerCase()) : true
      return jobTitleMatch && companyMatch
    } else {
      if (!searchQuery) return true
      const jobTitleMatch = job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
      const companyMatch = job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
      return jobTitleMatch || companyMatch
    }
  })

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

  // Pie chart data for job status
  const jobStatusData = [
    { name: "Accepted", value: jobStats.accepted, color: "#2e7d32" },
    { name: "Rejected", value: jobStats.rejected, color: "#c62828" },
    { name: "In Progress", value: jobStats.inProgress, color: "#1565c0" },
  ]

  // Pie chart data for eligibility status
  const eligibilityStatusData = [
    { name: "Eligible", value: jobStats.eligible, color: "#2e7d32" },
    { name: "Not Eligible", value: jobStats.notEligible, color: "#c62828" },
  ]

  // Get status color based on status string
  const getStatusColor = (status: string) => {
    const statusColors = {
      Accepted: "bg-green-700",
      "Not Eligible": "bg-red-700",
      Eligible: "bg-blue-700",
      Disqualified: "bg-red-700",
      "Round-1": "bg-amber-700",
      "Round-2": "bg-amber-700",
      "Round-3": "bg-amber-700",
      Interview: "bg-purple-700",
      "HR-Round": "bg-indigo-700",
      "Coding-Round": "bg-cyan-700",
      Applied: "bg-blue-700",
      "Not Applied": "bg-gray-600",
    }

    return statusColors[status] || "bg-gray-600"
  }

  // Function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "-"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  // Handle keyboard navigation for search
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (searchInputRef.current) {
        searchInputRef.current.blur()
      }
    } else if (e.key === "Escape") {
      setSearchQuery("")
      if (searchInputRef.current) {
        searchInputRef.current.blur()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with dashboard title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Job Dashboard</h1>
          <p className="text-gray-600">
            Track your job applications, analyze your performance, and enhance your career prospects
          </p>
        </div>

        {/* CARD 1: Job Dashboard Stats */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Application Statistics</h2>
            <div className="text-sm text-gray-500">Last updated: April 2, 2025</div>
          </div>

          {/* Job Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 col-span-1">
              <div className="flex items-center mb-2">
                <Briefcase size={18} className="text-gray-700 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Total Jobs</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{jobStats.totalJobs}</p>
              <p className="text-xs text-gray-500 mt-1">Available positions</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 col-span-1">
              <div className="flex items-center mb-2">
                <CheckCircle size={18} className="text-green-700 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Eligible</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{jobStats.eligible}</p>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((jobStats.eligible / jobStats.totalJobs) * 100)}% of total jobs
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 col-span-1">
              <div className="flex items-center mb-2">
                <XCircle size={18} className="text-red-700 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Not Eligible</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{jobStats.notEligible}</p>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((jobStats.notEligible / jobStats.totalJobs) * 100)}% of total jobs
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 col-span-1">
              <div className="flex items-center mb-2">
                <CheckCircle size={18} className="text-blue-700 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Applied</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{jobStats.applied}</p>
              <p className="text-xs text-gray-500 mt-1">{jobStats.applicationRate}% application rate</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 col-span-1">
              <div className="flex items-center mb-2">
                <AlertCircle size={18} className="text-amber-700 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Not Applied</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{jobStats.notApplied}</p>
              <p className="text-xs text-gray-500 mt-1">Eligible but not applied</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 col-span-1">
              <div className="flex items-center mb-2">
                <CheckCircle size={18} className="text-green-700 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Accepted</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{jobStats.accepted}</p>
              <p className="text-xs text-gray-500 mt-1">{jobStats.successRate}% success rate</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 col-span-1">
              <div className="flex items-center mb-2">
                <Clock size={18} className="text-blue-700 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">In Progress</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{jobStats.inProgress}</p>
              <p className="text-xs text-gray-500 mt-1">Awaiting results</p>
            </div>
          </div>

          {/* Charts & Analysis Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Monthly Application Trends */}
            <div className="col-span-2 bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Monthly Application Activity</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyApplicationData} margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="applications" name="Applications" fill="#1565c0" />
                    <Bar dataKey="interviews" name="Interviews" fill="#7b1fa2" />
                    <Bar dataKey="offers" name="Offers" fill="#2e7d32" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-8 mt-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-700 mr-1"></div>
                  <span className="text-xs">Applications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-700 mr-1"></div>
                  <span className="text-xs">Interviews</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-700 mr-1"></div>
                  <span className="text-xs">Offers</span>
                </div>
              </div>
            </div>

            {/* Application Status Chart */}
            <div className="col-span-1 bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Application Status Distribution</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={jobStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={60}
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {jobStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-700 mr-1"></div>
                  <span className="text-xs">Accepted</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-700 mr-1"></div>
                  <span className="text-xs">Rejected</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-700 mr-1"></div>
                  <span className="text-xs">In Progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Suggestion Section */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="bg-gray-800 text-white p-2 rounded-full">
                  <Sparkles size={20} />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">AI Suggestion</h2>
                <p className="text-gray-700 italic">{aiSuggestion}</p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                  {skillsToEnhance.map((skill, index) => (
                    <div key={index} className="bg-white rounded p-3 border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.skill}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${skill.demand === "High" || skill.demand === "Very High" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
                        >
                          {skill.demand}
                        </span>
                      </div>
                      <div className="mt-2 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-700 h-full rounded-full" style={{ width: `${skill.relevance}%` }}></div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500 text-right">{skill.relevance}% relevance</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: Applied Jobs Table */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Application Tracking</h2>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors flex items-center gap-2">
              <Download size={16} />
              <span>Export Data</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            {!isAdvancedSearch ? (
              <div className="relative">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-gray-400 focus-within:border-gray-400 transition-all">
                  <div className="px-3 py-2.5 bg-gray-50 border-r border-gray-300">
                    <Search size={18} className="text-gray-500" />
                  </div>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search by job title or company name..."
                    className="w-full px-4 py-2.5 focus:outline-none text-gray-700"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                    aria-label="Search applications"
                  />
                  <div className="flex items-center">
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="px-3 py-2.5 text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Clear search"
                      >
                        <X size={18} />
                      </button>
                    )}
                    <button
                      onClick={() => setIsAdvancedSearch(true)}
                      className="px-3 py-2.5 text-gray-500 hover:text-gray-700 transition-colors border-l border-gray-300"
                      aria-label="Advanced search"
                    >
                      <Sliders size={18} />
                    </button>
                  </div>
                </div>

                {/* Recent searches */}
                {recentSearches.length > 0 && searchInputRef.current === document.activeElement && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className="p-2 border-b border-gray-100">
                      <p className="text-xs font-medium text-gray-500">Recent searches</p>
                    </div>
                    <ul>
                      {recentSearches.map((search, index) => (
                        <li key={index}>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 flex items-center"
                            onClick={() => applyRecentSearch(search)}
                          >
                            <Clock size={14} className="mr-2 text-gray-400" />
                            {search}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Search status indicator */}
                {isSearching && (
                  <div className="mt-2 text-xs text-gray-500 flex items-center">
                    <div className="animate-pulse mr-2 h-2 w-2 rounded-full bg-gray-400"></div>
                    Searching...
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Advanced Search</h3>
                  <button
                    onClick={() => setIsAdvancedSearch(false)}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="jobTitleFilter" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Tag size={16} className="text-gray-400" />
                      </div>
                      <input
                        id="jobTitleFilter"
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
                        placeholder="Filter by job title..."
                        value={jobTitleFilter}
                        onChange={(e) => setJobTitleFilter(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="companyFilter" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={16} className="text-gray-400" />
                      </div>
                      <input
                        id="companyFilter"
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
                        placeholder="Filter by company name..."
                        value={companyFilter}
                        onChange={(e) => setCompanyFilter(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={clearAllFilters}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50 transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={handleAdvancedSearch}
                    className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}

            {/* Search results summary */}
            {(searchQuery || jobTitleFilter || companyFilter) && !isSearching && (
              <div className="mt-3 text-sm text-gray-600 flex items-center justify-between">
                <div>
                  <span className="font-medium">{filteredJobs.length}</span> results found
                  {searchQuery && (
                    <span>
                      {" "}
                      for "<span className="font-medium">{searchQuery}</span>"
                    </span>
                  )}
                  {jobTitleFilter && (
                    <span>
                      {" "}
                      with job title containing "<span className="font-medium">{jobTitleFilter}</span>"
                    </span>
                  )}
                  {companyFilter && (
                    <span>
                      {" "}
                      at companies containing "<span className="font-medium">{companyFilter}</span>"
                    </span>
                  )}
                </div>
                {(searchQuery || jobTitleFilter || companyFilter) && (
                  <button
                    onClick={clearAllFilters}
                    className="text-gray-500 hover:text-gray-700 text-xs flex items-center gap-1"
                  >
                    <X size={14} />
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    S.No.
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Applied On
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Expected Result
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Company
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Job Title
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Location
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Salary
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentJobs.length > 0 ? (
                  currentJobs.map((job, index) => (
                    <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm text-gray-900 border-b">{indexOfFirstJob + index + 1}</td>
                      <td className="py-3 px-4 text-sm text-gray-500 border-b">{formatDate(job.appliedOn)}</td>
                      <td className="py-3 px-4 text-sm text-gray-500 border-b">{formatDate(job.resultExpectedDate)}</td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900 border-b">{job.companyName}</td>
                      <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.jobTitle}</td>
                      <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.location}</td>
                      <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.salary}</td>
                      <td className="py-3 px-4 border-b">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getStatusColor(job.status)}`}
                        >
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <Search size={24} className="text-gray-400 mb-2" />
                        <p className="text-gray-600 font-medium">No matching applications found</p>
                        <p className="text-sm text-gray-500 mt-1">Try adjusting your search criteria</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredJobs.length > 0 && (
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Showing {filteredJobs.length > 0 ? indexOfFirstJob + 1 : 0} to{" "}
                {Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} applications
                {(searchQuery || jobTitleFilter || companyFilter) && ` (filtered from ${jobApplications.length})`}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md border ${currentPage === 1 ? "text-gray-400 cursor-not-allowed border-gray-200" : "text-gray-700 border-gray-300 hover:bg-gray-50"} transition-colors`}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-md transition-colors ${currentPage === page ? "bg-gray-800 text-white" : "text-gray-700 hover:bg-gray-50 border border-gray-300"}`}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={`p-2 rounded-md border ${currentPage === totalPages || totalPages === 0 ? "text-gray-400 cursor-not-allowed border-gray-200" : "text-gray-700 border-gray-300 hover:bg-gray-50"} transition-colors`}
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CARD 3: Skill Enhancement */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Career Development Resources</h2>
            <div className="text-sm text-gray-500">Tailored to your profile and application history</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {/* <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 text-white rounded-full">
                  <Code size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Problem Solving</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Practice technical interviews with customized coding challenges based on your target roles
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>Progress</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full">
                <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <button className="mt-4 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm transition-colors">
                Continue Practice
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 text-white rounded-full">
                  <FileText size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Resume Analysis</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Get professional feedback on your resume with AI-powered optimization for ATS systems
              </p>
              <ul className="text-xs text-gray-600 mb-4 space-y-1">
                <li className="flex items-center">
                  <CheckCircle size={12} className="text-green-600 mr-1" /> Keyword optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle size={12} className="text-green-600 mr-1" /> Format improvement
                </li>
                <li className="flex items-center">
                  <CheckCircle size={12} className="text-green-600 mr-1" /> Content suggestions
                </li>
              </ul>
              <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm transition-colors">
                Analyze Resume
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 text-white rounded-full">
                  <MessageSquare size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Interview Prep</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Practice with industry-specific mock interviews and receive personalized feedback
              </p>
              <div className="bg-gray-50 rounded p-2 mb-3">
                <div className="text-xs font-medium mb-1">Recently added:</div>
                <div className="text-sm">System Design Interview for Tech Roles</div>
              </div>
              <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm transition-colors">
                Schedule Practice
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 text-white rounded-full">
                  <TrendingUp size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Skills Assessment</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Identify skill gaps and receive personalized learning paths based on job market trends
              </p>
              <div className="relative pt-1 mb-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Top skill match: React Development</span>
                  <span>78%</span>
                </div>
                <div className="overflow-hidden h-1.5 text-xs flex rounded-full bg-gray-200">
                  <div
                    style={{ width: "78%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                  ></div>
                </div>
              </div>
              <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm transition-colors">
                View Full Report
              </button>
            </div> */}

            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Problem Solving</h3>
              <p className="text-sm mb-4">Practice coding challenges to improve your technical skills</p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Start Practicing
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Enhance Resume</h3>
              <p className="text-sm mb-4">Get expert feedback to make your resume stand out</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Improve Resume
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Mock Interviews</h3>
              <p className="text-sm mb-4">Practice with simulated interviews and get feedback</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Schedule Interview
              </button>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI Suggestions</h3>
              <p className="text-sm mb-4">Get personalized career guidance based on your profile</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Get Insights
              </button>
            </div>
          </div>
        </div>

        {/* CARD 3: Skill Enhancement */}
        {/* <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Enhance Your Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Problem Solving</h3>
              <p className="text-sm mb-4">Practice coding challenges to improve your technical skills</p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Start Practicing
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Enhance Resume</h3>
              <p className="text-sm mb-4">Get expert feedback to make your resume stand out</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Improve Resume
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Mock Interviews</h3>
              <p className="text-sm mb-4">Practice with simulated interviews and get feedback</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Schedule Interview
              </button>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI Suggestions</h3>
              <p className="text-sm mb-4">Get personalized career guidance based on your profile</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Get Insights
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default JobDashboard

