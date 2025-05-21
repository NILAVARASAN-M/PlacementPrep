//   import React, { useState } from 'react';
//   import { BookOpen, Briefcase, Award, ChevronRight, LineChart, FileText, User, Calendar, Bell, Clock, Zap, CheckCircle, Target, BookmarkPlus, TrendingUp, Users, Laptop, MessageCircle, Home } from 'lucide-react';

//   const HomePage = () => {
//     // Temporary user data (replace with actual data from backend later)
//     const userData = {
//       name: "Alex Johnson",
//       profileImage: "/api/placeholder/150/150",
//       university: "Stanford University",
//       degree: "Computer Science",
//       year: "Final Year",
//       problemsSolved: 128,
//       competitionScore: 85,
//       resumeScore: 92,
//       overallScore: 89,
//       companiesRegistered: 5,
//       companiesPending: 3,
//       totalCompaniesRequired: 12,
//       streak: 7,
//       rank: 542,
//       totalUsers: 10500,
//       percentile: 94.8,
//       upcomingInterviews: [
//         { company: "Google", date: "March 20, 2025", time: "2:00 PM", role: "Software Engineer" },
//         { company: "Microsoft", date: "March 24, 2025", time: "11:30 AM", role: "Frontend Developer" }
//       ],
//       recentActivities: [
//         { type: "problem", name: "Binary Tree Traversal", difficulty: "Medium", timestamp: "2 hours ago" },
//         { type: "interview", name: "Mock Interview with John", result: "Passed", timestamp: "Yesterday" },
//         { type: "resume", name: "Resume Update", action: "Added project experience", timestamp: "3 days ago" }
//       ]
//     };

//     // Latest job openings data
//     const latestJobs = [
//       { company: "Amazon", role: "Software Development Engineer", location: "Seattle, WA", salary: "$120,000 - $150,000", posted: "1 day ago" },
//       { company: "Meta", role: "Frontend Engineer", location: "Menlo Park, CA", salary: "$125,000 - $145,000", posted: "2 days ago" },
//       { company: "Netflix", role: "Full Stack Developer", location: "Los Gatos, CA", salary: "$130,000 - $160,000", posted: "3 days ago" }
//     ];

//     // Calculate progress percentages
//     const problemsProgress = (userData.problemsSolved / 200) * 100;
//     const companiesProgress = (userData.companiesRegistered / userData.totalCompaniesRequired) * 100;
//     const rankPercentile = userData.percentile;

//     // Learning paths
//     const learningPaths = [
//       { title: "Data Structures & Algorithms", completion: 65, color: "from-purple-500 to-indigo-600" },
//       { title: "System Design", completion: 42, color: "from-blue-500 to-cyan-500" },
//       { title: "Frontend Development", completion: 78, color: "from-emerald-500 to-green-500" },
//       { title: "Behavioral Interview Prep", completion: 50, color: "from-amber-500 to-orange-500" }
//     ];

//     // Get motivational quote (replace with quote service/API later)
//     const quotes = [
//       "The only way to do great work is to love what you do. - Steve Jobs",
//       "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
//       "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
//       "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
//       "Believe you can and you're halfway there. - Theodore Roosevelt",
//       "The best way to predict the future is to create it. - Abraham Lincoln"
//     ];
//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

//     // Tabs for upcoming content
//     const [activeTab, setActiveTab] = useState('upcoming');

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">


//         {/* Main Content */}
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {/* Welcome Section */}
//           <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//             <div className="flex items-start justify-between">
//               <div className="flex items-start">
//                 <img src={userData.profileImage} alt="Profile" className="h-16 w-16 rounded-full object-cover mr-4 border-4 border-blue-100" />
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userData.name}!</h2>
//                   <p className="text-gray-600">{userData.degree}, {userData.university} • {userData.year}</p>
//                   <p className="mt-2 text-gray-600 italic">{randomQuote}</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg text-white shadow-md">
//                 <div className="font-semibold text-sm">Rank</div>
//                 <div className="text-xl font-bold">{userData.rank}/{userData.totalUsers}</div>
//                 <div className="text-xs">Top {userData.percentile}%</div>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-4 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="font-semibold">Overall Score</h3>
//                   <Award size={20} />
//                 </div>
//                 <p className="text-3xl font-bold">{userData.overallScore}%</p>
//                 <p className="text-blue-100 text-sm">Your placement readiness</p>
//                 <div className="mt-2 bg-blue-400/30 h-2 rounded-full overflow-hidden">
//                   <div className="bg-white h-full" style={{ width: `${userData.overallScore}%` }}></div>
//                 </div>
//               </div>
              
//               <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="font-semibold text-gray-700">Problems Solved</h3>
//                   <BookOpen size={20} className="text-blue-600" />
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{userData.problemsSolved}</p>
//                 <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
//                   <div className="bg-green-500 h-full" style={{ width: `${problemsProgress}%` }}></div>
//                 </div>
//                 <div className="flex justify-between mt-1">
//                   <p className="text-gray-500 text-sm">Target: 200 problems</p>
//                   <p className="text-green-600 text-sm font-medium">{problemsProgress.toFixed(0)}%</p>
//                 </div>
//               </div>
              
//               <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="font-semibold text-gray-700">Competition Score</h3>
//                   <LineChart size={20} className="text-blue-600" />
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{userData.competitionScore}%</p>
//                 <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
//                   <div className="bg-blue-500 h-full" style={{ width: `${userData.competitionScore}%` }}></div>
//                 </div>
//                 <div className="flex justify-between mt-1">
//                   <p className="text-gray-500 text-sm">Based on mock interviews</p>
//                   <p className="text-blue-600 text-sm font-medium">{userData.competitionScore}%</p>
//                 </div>
//               </div>
              
//               <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="font-semibold text-gray-700">Resume Score</h3>
//                   <FileText size={20} className="text-blue-600" />
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{userData.resumeScore}%</p>
//                 <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
//                   <div className="bg-purple-500 h-full" style={{ width: `${userData.resumeScore}%` }}></div>
//                 </div>
//                 <div className="flex justify-between mt-1">
//                   <p className="text-gray-500 text-sm">Industry standard assessment</p>
//                   <p className="text-purple-600 text-sm font-medium">{userData.resumeScore}%</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Learning Progress Paths */}
//           <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-xl font-bold text-gray-800">Learning Progress</h2>
//               <button className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium">
//                 View detailed report <ChevronRight size={16} />
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {learningPaths.map((path, index) => (
//                 <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
//                   <div className="flex justify-between items-center mb-2">
//                     <h3 className="font-medium text-gray-800">{path.title}</h3>
//                     <span className="text-sm font-semibold text-gray-700">{path.completion}%</span>
//                   </div>
//                   <div className="h-2 rounded-full overflow-hidden bg-gray-200">
//                     <div className={`bg-gradient-to-r ${path.color} h-full`} style={{ width: `${path.completion}%` }}></div>
//                   </div>
//                   <div className="mt-2 flex justify-between">
//                     <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
//                       <BookmarkPlus size={14} className="mr-1" />
//                       Continue learning
//                     </button>
//                     <span className="text-xs text-gray-500">{10 - Math.floor(path.completion / 10)} modules remaining</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Company Registration Status */}
//           <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-xl font-bold text-gray-800">Company Applications</h2>
//               <button className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium">
//                 View all applications <ChevronRight size={16} />
//               </button>
//             </div>

//             <div className="relative pt-1">
//               <div className="flex items-center justify-between mb-2">
//                 <div>
//                   <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100">
//                     Progress
//                   </span>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs font-semibold inline-block text-indigo-600">
//                     {userData.companiesRegistered}/{userData.totalCompaniesRequired} Companies
//                   </span>
//                 </div>
//               </div>
//               <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
//                 <div style={{ width: `${companiesProgress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//               <div className="bg-green-50 border border-green-100 rounded-lg p-4">
//                 <div className="flex items-center mb-2">
//                   <div className="p-2 bg-green-100 rounded-full mr-3">
//                     <CheckCircle size={20} className="text-green-600" />
//                   </div>
//                   <h3 className="font-medium text-gray-800">Registered</h3>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{userData.companiesRegistered}</p>
//                 <p className="text-green-600 text-sm">Applications submitted</p>
//               </div>
              
//               <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
//                 <div className="flex items-center mb-2">
//                   <div className="p-2 bg-amber-100 rounded-full mr-3">
//                     <Clock size={20} className="text-amber-600" />
//                   </div>
//                   <h3 className="font-medium text-gray-800">Pending</h3>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{userData.companiesPending}</p>
//                 <p className="text-amber-600 text-sm">Applications in progress</p>
//               </div>
              
//               <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
//                 <div className="flex items-center mb-2">
//                   <div className="p-2 bg-blue-100 rounded-full mr-3">
//                     <Target size={20} className="text-blue-600" />
//                   </div>
//                   <h3 className="font-medium text-gray-800">Target</h3>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{userData.totalCompaniesRequired - userData.companiesRegistered - userData.companiesPending}</p>
//                 <p className="text-blue-600 text-sm">More applications needed</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Upcoming Interviews & Latest Jobs */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-bold text-gray-800">Upcoming Interviews</h2>
//                 <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View calendar</button>
//               </div>
              
//               {userData.upcomingInterviews.length > 0 ? (
//                 <div className="space-y-4">
//                   {userData.upcomingInterviews.map((interview, index) => (
//                     <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
//                       <div className="flex justify-between">
//                         <div>
//                           <h3 className="font-semibold text-gray-800">{interview.company}</h3>
//                           <p className="text-gray-600 text-sm">{interview.role}</p>
//                         </div>
//                         <div className="text-right">
//                           <p className="text-indigo-600 font-medium">{interview.date}</p>
//                           <p className="text-gray-500 text-sm">{interview.time}</p>
//                         </div>
//                       </div>
//                       <div className="mt-2 flex space-x-2">
//                         <button className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md hover:bg-indigo-200 transition">
//                           Prepare
//                         </button>
//                         <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md hover:bg-green-200 transition">
//                           Mock Interview
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-8 text-gray-500">
//                   <Calendar size={32} className="mx-auto mb-2 text-gray-400" />
//                   <p>No upcoming interviews scheduled</p>
//                   <button className="mt-2 text-sm text-indigo-600 font-medium">Schedule a mock interview</button>
//                 </div>
//               )}
//             </div>
            
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-bold text-gray-800">Latest Job Openings</h2>
//                 <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View all jobs</button>
//               </div>
              
//               <div className="space-y-4">
//                 {latestJobs.map((job, index) => (
//                   <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
//                     <div className="flex justify-between">
//                       <div>
//                         <h3 className="font-semibold text-gray-800">{job.company}</h3>
//                         <p className="text-gray-600 text-sm">{job.role}</p>
//                         <p className="text-gray-500 text-xs mt-1">{job.location} • {job.posted}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-green-600 font-medium">{job.salary}</p>
//                         <button className="mt-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
//                           Apply Now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Tabs for Recent Activity */}
//           <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//             <div className="border-b border-gray-200">
//               <nav className="flex space-x-8">
//                 <button 
//                   className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'upcoming' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                   onClick={() => setActiveTab('upcoming')}
//                 >
//                   Recent Activity
//                 </button>
//                 <button 
//                   className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'recommended' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                   onClick={() => setActiveTab('recommended')}
//                 >
//                   Recommended
//                 </button>
//                 <button 
//                   className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'community' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                   onClick={() => setActiveTab('community')}
//                 >
//                   Community Feed
//                 </button>
//               </nav>
//             </div>
            
//             <div className="mt-4">
//               {activeTab === 'upcoming' && (
//                 <div className="space-y-4">
//                   {userData.recentActivities.map((activity, index) => (
//                     <div key={index} className="flex items-start p-3 border-b border-gray-100">
//                       <div className={`p-2 rounded-full mr-3 ${
//                         activity.type === 'problem' ? 'bg-blue-100' : 
//                         activity.type === 'interview' ? 'bg-green-100' : 'bg-purple-100'
//                       }`}>
//                         {activity.type === 'problem' ? <BookOpen size={16} className="text-blue-600" /> : 
//                         activity.type === 'interview' ? <Users size={16} className="text-green-600" /> : 
//                         <FileText size={16} className="text-purple-600" />}
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-sm text-gray-800 font-medium">
//                           {activity.type === 'problem' ? 'Solved problem: ' : 
//                           activity.type === 'interview' ? 'Completed: ' : 'Updated: '}
//                           <span className="font-semibold">{activity.name}</span>
//                         </p>
//                         <p className="text-xs text-gray-500 mt-1">
//                           {activity.type === 'problem' ? `Difficulty: ${activity.difficulty}` : 
//                           activity.type === 'interview' ? `Result: ${activity.result}` : 
//                           `Action: ${activity.action}`}
//                         </p>
//                         <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
              
//               {activeTab === 'recommended' && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
//                     <div className="flex items-center mb-2">
//                       <div className="p-2 bg-amber-100 rounded-full mr-3">
//                         <TrendingUp size={16} className="text-amber-600" />
//                       </div>
//                       <h3 className="font-medium text-gray-800">Advanced Algorithms</h3>
//                     </div>
//                     <p className="text-sm text-gray-600">Improve your problem-solving skills with these advanced algorithm challenges.</p>
//                     <button className="mt-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
//                       Start Now
//                     </button>
//                   </div>
//                   <div className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
//                     <div className="flex items-center mb-2">
//                       <div className="p-2 bg-green-100 rounded-full mr-3">
//                         <Laptop size={16} className="text-green-600" />
//                       </div>
//                       <h3 className="font-medium text-gray-800">System Design Workshop</h3>
//                     </div>
//                     <p className="text-sm text-gray-600">Join our workshop to master system design interviews for top tech companies.</p>
//                     <button className="mt-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
//                       Register
//                     </button>
//                   </div>
//                 </div>
//               )}
              
//               {activeTab === 'community' && (
//                 <div className="space-y-4">
//                   <div className="border border-gray-200 rounded-lg p-4">
//                     <div className="flex items-start">
//                       <img src="/api/placeholder/40/40" alt="User" className="h-10 w-10 rounded-full object-cover mr-3" />
//                       <div>
//                         <p className="text-sm font-medium text-gray-800">Sarah K.</p>
//                         <p className="text-xs text-gray-500">Just landed a Software Engineer role at Amazon! Thanks for all the support!</p>
//                         <div className="flex items-center mt-2 space-x-2">
//                           <button className="text-xs text-gray-500 flex items-center">
//                             <MessageCircle size={14} className="mr-1" /> 12 comments
//                           </button>
//                           <button className="text-xs text-indigo-600">Congratulate</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border border-gray-200 rounded-lg p-4">
//                     <div className="flex items-start">
//                       <img src="/api/placeholder/40/40" alt="User" className="h-10 w-10 rounded-full object-cover mr-3" />
//                       <div>
//                         <p className="text-sm font-medium text-gray-800">Mike T.</p>
//                         <p className="text-xs text-gray-500">Anyone have tips for the Microsoft coding interview? Have one scheduled next week!</p>
//                         <div className="flex items-center mt-2 space-x-2">
//                           <button className="text-xs text-gray-500 flex items-center">
//                             <MessageCircle size={14} className="mr-1" /> 8 comments
//                           </button>
//                           <button className="text-xs text-indigo-600">Share advice</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Action Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-md p-6 text-white hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 transition-transform">
//               <h3 className="text-xl font-bold mb-2">Practice Problems</h3>
//               <p className="mb-4">Solve coding challenges to improve your technical skills.</p>
//               <div className="flex items-center text-xs mb-4">
//                 <div className="bg-white/20 rounded-full px-2 py-1 mr-2">
//                   <span>200+ Problems</span>
//                 </div>
//                 <div className="bg-white/20 rounded-full px-2 py-1">
//                   <span>All Difficulty Levels</span>
//                 </div>
//               </div>
//               <button className="mt-2 px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition">Start Practicing</button>
//             </div>
            
//             <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-md p-6 text-white hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 transition-transform">
//               <h3 className="text-xl font-bold mb-2">Mock Interviews</h3>
//               <p className="mb-4">Prepare for interviews with realistic mock sessions.</p>
//               <div className="flex items-center text-xs mb-4">
//                 <div className="bg-white/20 rounded-full px-2 py-1 mr-2">
//                   <span>Expert Reviewers</span>
//                 </div>
//                 <div className="bg-white/20 rounded-full px-2 py-1">
//                   <span>Detailed Feedback</span>
//                 </div>
//               </div>
//               <button className="mt-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">Schedule Session</button>
//             </div>
            
//             <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl shadow-md p-6 text-white hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 transition-transform">
//               <h3 className="text-xl font-bold mb-2">Resume Builder</h3>
//               <p className="mb-4">Create and optimize your resume for job applications.</p>
//               </div>
//             </div>

//           </main>
//         </div>
//     );
//   }

//   export default HomePage;