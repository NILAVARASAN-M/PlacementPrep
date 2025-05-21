/* THIS BELOW CODE LOOKS VERY VERY GOOD, related to problem section */

// import { useState } from 'react';
// import { Search, ChevronLeft, ChevronRight, Filter, Trophy, CheckCircle, XCircle, Clock, 
//   Calendar, BookOpen, BarChart, Target, ArrowUpRight, Star, Bookmark, ExternalLink, Code, Zap,
//   TrendingUp, Users, AlertCircle, HelpCircle, BarChart2, Cpu, Database, Activity } from 'lucide-react';

// // Mock data
// const mockProblems = [
//   { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved", popularity: "High", submitCount: 842, acceptRate: "91%", tags: ["Array", "Hash Table", "Google", "Amazon"], lastAttempted: "2 days ago" },
//   { id: 2, title: "Add Two Numbers", difficulty: "Medium", status: "Attempted", popularity: "High", submitCount: 712, acceptRate: "76%", tags: ["Linked List", "Math", "Microsoft"], lastAttempted: "1 week ago" },
//   { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Unsolved", popularity: "Medium", submitCount: 532, acceptRate: "68%", tags: ["String", "Sliding Window", "Facebook"], lastAttempted: null },
//   { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", status: "Unsolved", popularity: "Low", submitCount: 321, acceptRate: "43%", tags: ["Array", "Binary Search", "Google"], lastAttempted: null },
//   { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", status: "Solved", popularity: "Medium", submitCount: 498, acceptRate: "72%", tags: ["String", "Dynamic Programming", "Amazon"], lastAttempted: "3 days ago" },
//   { id: 6, title: "ZigZag Conversion", difficulty: "Medium", status: "Unsolved", popularity: "Low", submitCount: 289, acceptRate: "65%", tags: ["String", "Apple"], lastAttempted: null },
//   { id: 7, title: "Reverse Integer", difficulty: "Medium", status: "Solved", popularity: "Medium", submitCount: 456, acceptRate: "84%", tags: ["Math", "Microsoft"], lastAttempted: "5 days ago" },
//   { id: 8, title: "String to Integer (atoi)", difficulty: "Medium", status: "Attempted", popularity: "Medium", submitCount: 387, acceptRate: "59%", tags: ["String", "Facebook"], lastAttempted: "2 weeks ago" },
//   { id: 9, title: "Palindrome Number", difficulty: "Easy", status: "Solved", popularity: "High", submitCount: 632, acceptRate: "89%", tags: ["Math", "Google"], lastAttempted: "1 day ago" },
//   { id: 10, title: "Regular Expression Matching", difficulty: "Hard", status: "Unsolved", popularity: "Low", submitCount: 267, acceptRate: "39%", tags: ["String", "Dynamic Programming", "Recursion", "Amazon"], lastAttempted: null },
//   { id: 11, title: "Container With Most Water", difficulty: "Medium", status: "Solved", popularity: "Medium", submitCount: 421, acceptRate: "77%", tags: ["Array", "Two Pointers", "Google"], lastAttempted: "1 week ago" },
//   { id: 12, title: "Integer to Roman", difficulty: "Medium", status: "Attempted", popularity: "Medium", submitCount: 345, acceptRate: "81%", tags: ["Math", "String", "Amazon"], lastAttempted: "3 weeks ago" },
// ];

// // Recent activity
// const recentActivity = [
//   { id: 1, type: "problem", status: "Solved", title: "Palindrome Number", time: "1 day ago" },
//   { id: 2, type: "contest", status: "Participated", title: "Weekly Contest 287", time: "2 days ago" },
//   { id: 3, type: "problem", status: "Attempted", title: "Add Two Numbers", time: "1 week ago" },
// ];

// // Upcoming contests
// const upcomingContests = [
//   { id: 1, title: "Weekly Coding Challenge", date: "Mar 25, 2025", time: "8:00 PM - 10:00 PM", registered: true },
//   { id: 2, title: "Google CodeJam Round 1", date: "Apr 02, 2025", time: "10:00 AM - 1:00 PM", registered: false },
// ];

// // Recommended problems
// const recommendedProblems = [
//   { id: 13, title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Tree", "BFS"] },
//   { id: 14, title: "Merge Intervals", difficulty: "Medium", tags: ["Array", "Sorting"] },
//   { id: 15, title: "LRU Cache", difficulty: "Medium", tags: ["Hash Table", "Linked List", "Design"] },
// ];

// // Companies actively recruiting
// const activeRecruiters = [
//   { name: "Google", openings: 12, problemCount: 78 },
//   { name: "Amazon", openings: 23, problemCount: 92 },
//   { name: "Microsoft", openings: 15, problemCount: 65 },
//   { name: "Meta", openings: 8, problemCount: 43 },
// ];

// // User stats
// const userStats = {
//   totalSolved: 5,
//   totalProblems: mockProblems.length,
//   streak: 16,
//   rank: 1522,
//   totalParticipants: 15240,
//   percentile: 10,
//   scoreBreakdown: {
//     easy: { solved: 2, total: 2, percentage: 100 },
//     medium: { solved: 3, total: 7, percentage: 43 },
//     hard: { solved: 0, total: 3, percentage: 0 },
//   },
//   skillScores: [
//     { name: "Arrays", score: 85 },
//     { name: "Strings", score: 72 },
//     { name: "Dynamic Programming", score: 45 },
//     { name: "Trees", score: 68 },
//     { name: "Graphs", score: 32 },
//   ],
//   upcomingInterviews: [
//     { company: "Google", date: "Mar 20, 2025", position: "Software Engineer" },
//     { company: "Microsoft", date: "Mar 24, 2025", position: "Frontend Developer" },
//   ]
// };

// export default function ProblemSolvingPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterDifficulty, setFilterDifficulty] = useState('');
//   const [filterStatus, setFilterStatus] = useState('');
//   const [filterTag, setFilterTag] = useState('');
//   const [viewMode, setViewMode] = useState('all'); // 'all', 'company', 'topic'
//   const [activeTab, setActiveTab] = useState('problems'); // 'problems', 'activity', 'contests', 'study-plan'
  
//   // Problems per page
//   const problemsPerPage = 5;
  
//   // Filter problems based on search and filters
//   const filteredProblems = mockProblems.filter(problem => {
//     const matchesSearch = searchTerm === '' || 
//       problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
//     const matchesDifficulty = filterDifficulty === '' || problem.difficulty === filterDifficulty;
//     const matchesStatus = filterStatus === '' || problem.status === filterStatus;
//     const matchesTag = filterTag === '' || problem.tags.includes(filterTag);
    
//     return matchesSearch && matchesDifficulty && matchesStatus && matchesTag;
//   });
  
//   // Get current problems
//   const indexOfLastProblem = currentPage * problemsPerPage;
//   const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
//   const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  
//   // Calculate progress percentage
//   const progressPercentage = (userStats.totalSolved / userStats.totalProblems) * 100;
  
//   // Page change handlers
//   const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);
//   const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
//   const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  
//   // Get popular tags from all problems
//   const allTags = mockProblems.flatMap(problem => problem.tags);
//   const tagCounts = allTags.reduce((acc, tag) => {
//     acc[tag] = (acc[tag] || 0) + 1;
//     return acc;
//   }, {});
  
//   const popularTags = Object.entries(tagCounts)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 8)
//     .map(([tag]) => tag);
  
//   return (
//     <div className="bg-gray-50 min-h-screen py-6 px-4 md:px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with navigation */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800">Problem Solving Hub</h1>
//             <p className="text-gray-600">Sharpen your skills with coding problems</p>
//           </div>
//           <div className="flex items-center space-x-2 mt-4 md:mt-0">
//             <button className="text-blue-600 hover:text-blue-800 px-3 py-1 text-sm font-medium">Dashboard</button>
//             <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-700">
//               Start Daily Challenge
//             </button>
//           </div>
//         </div>
        
//         {/* Welcome back card */}
//         <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-800">Welcome back, Alex!</h2>
//               <p className="text-gray-600 text-sm mt-1">Success is not final, failure is not fatal: It is the courage to continue that counts.</p>
//             </div>
//             <div className="bg-blue-100 text-blue-800 font-medium py-1 px-3 rounded-full text-sm flex items-center">
//               <Zap size={16} className="mr-1" /> Day {userStats.streak} Streak
//             </div>
//           </div>
          
//           {/* Stats cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
//             <div className="bg-blue-600 text-white rounded-xl p-4 flex flex-col">
//               <div className="text-xs text-blue-200 uppercase tracking-wide mb-1">Overall Score</div>
//               <div className="text-3xl font-bold mb-2">89%</div>
//               <div className="text-xs text-blue-200">Your placement readiness</div>
//             </div>
            
//             <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col">
//               <div className="flex justify-between items-start">
//                 <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Problems Solved</div>
//                 <Code size={16} className="text-gray-400" />
//               </div>
//               <div className="text-3xl font-bold mb-2">{userStats.totalSolved}</div>
//               <div className="text-xs text-gray-500 flex items-center">
//                 Target: {userStats.totalProblems} problems
//                 <div className="ml-2 flex-grow h-1 bg-gray-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-green-500 rounded-full" 
//                     style={{ width: `${progressPercentage}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col">
//               <div className="flex justify-between items-start">
//                 <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Competition Rank</div>
//                 <Trophy size={16} className="text-yellow-500" />
//               </div>
//               <div className="text-3xl font-bold mb-2">Top {userStats.percentile}%</div>
//               <div className="text-xs text-gray-500">Rank #{userStats.rank} of {userStats.totalParticipants}</div>
//             </div>
            
//             <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col">
//               <div className="flex justify-between items-start">
//                 <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Resume Score</div>
//                 <BarChart size={16} className="text-purple-500" />
//               </div>
//               <div className="text-3xl font-bold mb-2">92%</div>
//               <div className="text-xs text-gray-500">Industry standard assessment</div>
//             </div>
//           </div>
//         </div>
        
//         {/* Content Tabs */}
//         <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 border border-gray-100">
//           <div className="border-b border-gray-200">
//             <nav className="flex -mb-px">
//               <button 
//                 className={`py-4 px-6 font-medium text-sm inline-flex items-center ${activeTab === 'problems' 
//                   ? 'border-b-2 border-blue-500 text-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                 onClick={() => setActiveTab('problems')}
//               >
//                 <Code size={16} className="mr-2" />
//                 Problems
//               </button>
//               <button 
//                 className={`py-4 px-6 font-medium text-sm inline-flex items-center ${activeTab === 'activity' 
//                   ? 'border-b-2 border-blue-500 text-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                 onClick={() => setActiveTab('activity')}
//               >
//                 <Activity size={16} className="mr-2" />
//                 Recent Activity
//               </button>
//               <button 
//                 className={`py-4 px-6 font-medium text-sm inline-flex items-center ${activeTab === 'contests' 
//                   ? 'border-b-2 border-blue-500 text-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                 onClick={() => setActiveTab('contests')}
//               >
//                 <Trophy size={16} className="mr-2" />
//                 Contests
//               </button>
//               {/* <button 
//                 className={`py-4 px-6 font-medium text-sm inline-flex items-center ${activeTab === 'study-plan' 
//                   ? 'border-b-2 border-blue-500 text-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                 onClick={() => setActiveTab('study-plan')}
//               >
//                 <BookOpen size={16} className="mr-2" />
//                 Study Plan
//               </button> */}
//             </nav>
//           </div>
          
//           {activeTab === 'problems' && (
//             <div className="p-6">
//               {/* Problem View Tabs */}
//               <div className="flex mb-6 space-x-2">
//                 <button 
//                   className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'all' 
//                     ? 'bg-blue-50 text-blue-700' 
//                     : 'text-gray-700 hover:bg-gray-100'}`}
//                   onClick={() => setViewMode('all')}
//                 >
//                   All Problems
//                 </button>
//                 <button 
//                   className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'company' 
//                     ? 'bg-blue-50 text-blue-700' 
//                     : 'text-gray-700 hover:bg-gray-100'}`}
//                   onClick={() => setViewMode('company')}
//                 >
//                   By Company
//                 </button>
//                 <button 
//                   className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'topic' 
//                     ? 'bg-blue-50 text-blue-700' 
//                     : 'text-gray-700 hover:bg-gray-100'}`}
//                   onClick={() => setViewMode('topic')}
//                 >
//                   By Topic
//                 </button>
//               </div>
              
//               {/* Main content layout */}
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {/* Sidebar with stats and filters */}
//                 <div className="lg:col-span-1">
//                   {/* Problem Solving Progress */}
//                   <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-6">
//                     <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
//                     <div className="mb-4">
//                       <div className="flex justify-between mb-1">
//                         <span className="text-sm text-gray-700">Total Solved: {userStats.totalSolved}/{userStats.totalProblems}</span>
//                         <span className="text-sm font-medium text-blue-600">{progressPercentage.toFixed(1)}%</span>
//                       </div>
//                       <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                         <div 
//                           className="h-full bg-blue-600 rounded-full" 
//                           style={{ width: `${progressPercentage}%` }}
//                         ></div>
//                       </div>
//                     </div>
                    
//                     {/* Difficulty breakdown */}
//                     <div className="space-y-3">
//                       <div>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm text-gray-600">Easy</span>
//                           <span className="text-sm text-gray-600">{userStats.scoreBreakdown.easy.solved}/{userStats.scoreBreakdown.easy.total}</span>
//                         </div>
//                         <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                           <div 
//                             className="h-full bg-green-500" 
//                             style={{ width: `${userStats.scoreBreakdown.easy.percentage}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm text-gray-600">Medium</span>
//                           <span className="text-sm text-gray-600">{userStats.scoreBreakdown.medium.solved}/{userStats.scoreBreakdown.medium.total}</span>
//                         </div>
//                         <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                           <div 
//                             className="h-full bg-yellow-500" 
//                             style={{ width: `${userStats.scoreBreakdown.medium.percentage}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm text-gray-600">Hard</span>
//                           <span className="text-sm text-gray-600">{userStats.scoreBreakdown.hard.solved}/{userStats.scoreBreakdown.hard.total}</span>
//                         </div>
//                         <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                           <div 
//                             className="h-full bg-red-500" 
//                             style={{ width: `${userStats.scoreBreakdown.hard.percentage}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Ranking Card */}
//                   <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-6">
//                     <h3 className="text-lg font-semibold mb-3">Your Ranking</h3>
//                     <div className="flex items-center mb-4">
//                       <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg mr-4">
//                         <Trophy size={24} />
//                       </div>
//                       <div>
//                         <div className="text-2xl font-bold">#{userStats.rank}</div>
//                         <div className="text-sm text-gray-600">Top {userStats.percentile}% globally</div>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       {userStats.skillScores.map((skill, index) => (
//                         <div key={index}>
//                           <div className="flex justify-between text-sm mb-1">
//                             <span className="text-gray-600">{skill.name}</span>
//                             <span className="font-medium">{skill.score}%</span>
//                           </div>
//                           <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                             <div 
//                               className={`h-full ${
//                                 skill.score > 80 ? 'bg-green-500' : 
//                                 skill.score > 50 ? 'bg-blue-500' : 
//                                 'bg-purple-500'
//                               }`}
//                               style={{ width: `${skill.score}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Upcoming interviews */}
//                   {userStats.upcomingInterviews.length > 0 && (
//                     <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-6">
//                       <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-lg font-semibold">Upcoming Interviews</h3>
//                         <a href="#" className="text-sm text-blue-600 hover:text-blue-800">View all</a>
//                       </div>
//                       <div className="space-y-3">
//                         {userStats.upcomingInterviews.map((interview, index) => (
//                           <div key={index} className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
//                             <div className="mr-3">
//                               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
//                                 {interview.company.charAt(0)}
//                               </div>
//                             </div>
//                             <div>
//                               <div className="font-medium">{interview.company}</div>
//                               <div className="text-sm text-gray-500">{interview.position} • {interview.date}</div>
//                             </div>
//                             <div className="ml-auto">
//                               <button className="text-blue-600 text-sm font-medium hover:text-blue-800">Prepare</button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Popular Tags */}
//                   <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
//                     <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {popularTags.map((tag, index) => (
//                         <button 
//                           key={index}
//                           onClick={() => setFilterTag(tag === filterTag ? '' : tag)}
//                           className={`px-3 py-1.5 rounded-full text-sm ${
//                             tag === filterTag 
//                               ? 'bg-blue-100 text-blue-800 border border-blue-200' 
//                               : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
//                           }`}
//                         >
//                           {tag}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Main problem list section */}
//                 <div className="lg:col-span-2">
//                   {/* Filters and Search */}
//                   <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-4">
//                     <div className="flex flex-col md:flex-row items-center gap-3">
//                       <div className="relative flex-grow">
//                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                           <Search size={16} className="text-gray-400" />
//                         </div>
//                         <input
//                           type="text"
//                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
//                           placeholder="Search problems or tags..."
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                       </div>
//                       <div className="flex gap-2 w-full md:w-auto">
//                         <select
//                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
//                           value={filterDifficulty}
//                           onChange={(e) => setFilterDifficulty(e.target.value)}
//                         >
//                           <option value="">All Difficulties</option>
//                           <option value="Easy">Easy</option>
//                           <option value="Medium">Medium</option>
//                           <option value="Hard">Hard</option>
//                         </select>
//                         <select
//                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
//                           value={filterStatus}
//                           onChange={(e) => setFilterStatus(e.target.value)}
//                         >
//                           <option value="">All Status</option>
//                           <option value="Solved">Solved</option>
//                           <option value="Attempted">Attempted</option>
//                           <option value="Unsolved">Unsolved</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Problems Table */}
//                   <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-4">
//                     <div className="overflow-x-auto">
//                       <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                           <tr>
//                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
//                               Status
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
//                               #
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Title
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
//                               Acceptance
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Tags
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {currentProblems.map((problem) => (
//                             <tr key={problem.id} className="hover:bg-blue-50 cursor-pointer transition-colors">
//                               <td className="px-4 py-4 whitespace-nowrap">
//                                 {problem.status === "Solved" && (
//                                   <div className="flex justify-center">
//                                     <CheckCircle size={18} className="text-green-500" />
//                                   </div>
//                                 )}
//                                 {problem.status === "Attempted" && (
//                                   <div className="flex justify-center">
//                                     <Clock size={18} className="text-yellow-500" />
//                                   </div>
//                                 )}
//                                 {problem.status === "Unsolved" && (
//                                   <div className="flex justify-center">
//                                     <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
//                                   </div>
//                                 )}
//                               </td>
//                               <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                 {problem.id}
//                               </td>
//                               <td className="px-4 py-4 text-sm text-gray-900">
//                                 <div className="flex flex-col">
//                                   <div className="font-medium hover:text-blue-600">{problem.title}</div>
//                                   <div className="flex items-center mt-1">
//                                     <span className={`px-2 py-0.5 rounded-full text-xs font-medium
//                                       ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
//                                         problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
// {problem.difficulty}
// </span>
// {problem.lastAttempted && (
//   <span className="text-xs text-gray-500 ml-2">
//     Last attempted {problem.lastAttempted}
//   </span>
// )}
// </div>
// </div>
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
//   <div className="flex items-center">
//     <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
//       <div 
//         className={`h-1.5 rounded-full ${
//           parseInt(problem.acceptRate) > 70 ? 'bg-green-500' : 
//           parseInt(problem.acceptRate) > 50 ? 'bg-yellow-500' : 'bg-red-500'
//         }`}
//         style={{ width: problem.acceptRate }}
//       ></div>
//     </div>
//     <span>{problem.acceptRate}</span>
//   </div>
// </td>
// <td className="px-4 py-4 text-sm text-gray-500">
//   <div className="flex flex-wrap gap-1">
//     {problem.tags.slice(0, 2).map((tag, idx) => (
//       <span key={idx} className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
//         {tag}
//       </span>
//     ))}
//     {problem.tags.length > 2 && (
//       <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
//         +{problem.tags.length - 2}
//       </span>
//     )}
//   </div>
// </td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>

// {filteredProblems.length === 0 && (
//   <div className="py-8 px-4 text-center">
//     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
//       <HelpCircle size={24} className="text-gray-400" />
//     </div>
//     <h3 className="text-lg font-medium text-gray-900 mb-1">No problems found</h3>
//     <p className="text-gray-500">Try adjusting your search or filter criteria</p>
//   </div>
// )}
// </div>

// {/* Pagination */}
// <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-3">
//   <div className="text-sm text-gray-700">
//     Showing <span className="font-medium">{indexOfFirstProblem + 1}</span> to{" "}
//     <span className="font-medium">{Math.min(indexOfLastProblem, filteredProblems.length)}</span> of{" "}
//     <span className="font-medium">{filteredProblems.length}</span> problems
//   </div>
//   <div className="flex items-center space-x-2">
//     <button
//       onClick={handlePrevPage}
//       disabled={currentPage === 1}
//       className={`inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium
//         ${currentPage === 1 
//           ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
//           : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
//     >
//       <ChevronLeft size={16} className="mr-1" />
//       Prev
//     </button>
//     <button
//       onClick={handleNextPage}
//       disabled={currentPage === totalPages || totalPages === 0}
//       className={`inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium
//         ${currentPage === totalPages || totalPages === 0
//           ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
//           : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
//     >
//       Next
//       <ChevronRight size={16} className="ml-1" />
//     </button>
//   </div>
// </div>

// {/* Recommended Problems */}
// <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mt-6">
//   <div className="flex justify-between items-center mb-4">
//     <h3 className="text-lg font-semibold">Recommended Problems</h3>
//     <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
//   </div>
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//     {recommendedProblems.map((problem) => (
//       <div key={problem.id} className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:bg-blue-50 transition-colors">
//         <div className="flex items-start justify-between">
//           <div>
//             <div className="font-medium text-gray-900">{problem.title}</div>
//             <div className="mt-1 flex items-center">
//               <span className={`px-2 py-0.5 rounded-full text-xs font-medium
//                 ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
//                   problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
//                   'bg-red-100 text-red-800'}`}>
//                 {problem.difficulty}
//               </span>
//             </div>
//           </div>
//           <button className="p-1 rounded-full hover:bg-blue-100">
//             <Bookmark size={16} className="text-gray-400 hover:text-blue-600" />
//           </button>
//         </div>
//         <div className="mt-2 flex flex-wrap gap-1">
//           {problem.tags.map((tag, idx) => (
//             <span key={idx} className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-700">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

// </div>
// </div>
// </div>

// )}

// {activeTab === 'activity' && (
//   <div className="p-6">
//     <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
//     <div className="space-y-3">
//       {recentActivity.map((activity, index) => (
//         <div key={index} className="flex items-start p-3 border border-gray-200 rounded-lg">
//           <div className={`p-2 rounded-full mr-3 ${
//             activity.status === "Solved" ? "bg-green-100" : 
//             activity.status === "Participated" ? "bg-blue-100" : "bg-yellow-100"
//           }`}>
//             {activity.type === "problem" ? 
//               activity.status === "Solved" ? <CheckCircle size={18} className="text-green-600" /> : 
//                 <Clock size={18} className="text-yellow-600" />
//               : <Trophy size={18} className="text-blue-600" />
//             }
//           </div>
//           <div>
//             <div className="font-medium">{activity.title}</div>
//             <div className="text-sm text-gray-500 mt-1">
//               {activity.status} • {activity.time}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}

// {activeTab === 'contests' && (
//   <div className="p-6">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Upcoming Contests</h3>
//         <div className="space-y-3">
//           {upcomingContests.map((contest, index) => (
//             <div key={index} className="p-4 border border-gray-200 rounded-lg">
//               <div className="flex justify-between">
//                 <h4 className="font-medium">{contest.title}</h4>
//                 {contest.registered ? (
//                   <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Registered</span>
//                 ) : (
//                   <button className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200">Register</button>
//                 )}
//               </div>
//               <div className="flex items-center mt-2 text-sm text-gray-600">
//                 <Calendar size={16} className="mr-1" />
//                 {contest.date} • {contest.time}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Companies Actively Recruiting</h3>
//         <div className="space-y-3">
//           {activeRecruiters.map((company, index) => (
//             <div key={index} className="p-4 border border-gray-200 rounded-lg">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="font-medium">{company.name}</h4>
//                   <p className="text-sm text-gray-600 mt-1">{company.openings} open positions</p>
//                 </div>
//                 <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
//                   View Problems
//                 </button>
//               </div>
//               <div className="mt-2 text-xs text-gray-500">
//                 {company.problemCount} interview problems
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// )}

// {/* {activeTab === 'study-plan' && (
//   <div className="p-6">
//     <div className="flex justify-between items-center mb-6">
//       <h3 className="text-lg font-semibold">Your Study Plan</h3>
//       <button className="text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//         Customize Plan
//       </button>
//     </div>
    
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div className="border border-gray-200 rounded-xl p-4">
//         <div className="flex items-center mb-3">
//           <div className="p-2 bg-blue-100 rounded-lg mr-3">
//             <Database size={20} className="text-blue-600" />
//           </div>
//           <div>
//             <h4 className="font-medium">Data Structures & Algorithms</h4>
//             <div className="text-sm text-gray-500">Foundation for technical interviews</div>
//           </div>
//         </div>
//         <div className="mb-2 flex justify-between text-sm">
//           <span>Progress: 40%</span>
//           <span>12/30 lessons completed</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
//           <div className="bg-blue-600 h-2.5 rounded-full w-2/5"></div>
//         </div>
//         <button className="w-full py-2 text-blue-600 text-sm font-medium border border-blue-200 rounded-lg hover:bg-blue-50">
//           Continue Learning
//         </button>
//       </div>
      
//       <div className="border border-gray-200 rounded-xl p-4">
//         <div className="flex items-center mb-3">
//           <div className="p-2 bg-purple-100 rounded-lg mr-3">
//             <Cpu size={20} className="text-purple-600" />
//           </div>
//           <div>
//             <h4 className="font-medium">System Design</h4>
//             <div className="text-sm text-gray-500">For senior engineer positions</div>
//           </div>
//         </div>
//         <div className="mb-2 flex justify-between text-sm">
//           <span>Progress: 20%</span>
//           <span>4/20 lessons completed</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
//           <div className="bg-purple-600 h-2.5 rounded-full w-1/5"></div>
//         </div>
//         <button className="w-full py-2 text-purple-600 text-sm font-medium border border-purple-200 rounded-lg hover:bg-purple-50">
//           Continue Learning
//         </button>
//       </div>
//     </div>
//   </div>
// )} */}


// </div>
// </div>
// </div>
// );
// }


/* THIS BELOW CODE LOOKS VERY VERY GOOD, related to problem section */

// import { useState } from 'react';
// import { Search, ChevronLeft, ChevronRight, Filter, ArrowUp, Trophy, CheckCircle, XCircle, Clock } from 'lucide-react';

// // Mock data
// const mockProblems = [
//   { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved", tags: ["Array", "Hash Table", "Google", "Amazon"] },
//   { id: 2, title: "Add Two Numbers", difficulty: "Medium", status: "Attempted", tags: ["Linked List", "Math", "Microsoft"] },
//   { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Unsolved", tags: ["String", "Sliding Window", "Facebook"] },
//   { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", status: "Unsolved", tags: ["Array", "Binary Search", "Google"] },
//   { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", status: "Solved", tags: ["String", "Dynamic Programming", "Amazon"] },
//   { id: 6, title: "ZigZag Conversion", difficulty: "Medium", status: "Unsolved", tags: ["String", "Apple"] },
//   { id: 7, title: "Reverse Integer", difficulty: "Medium", status: "Solved", tags: ["Math", "Microsoft"] },
//   { id: 8, title: "String to Integer (atoi)", difficulty: "Medium", status: "Attempted", tags: ["String", "Facebook"] },
//   { id: 9, title: "Palindrome Number", difficulty: "Easy", status: "Solved", tags: ["Math", "Google"] },
//   { id: 10, title: "Regular Expression Matching", difficulty: "Hard", status: "Unsolved", tags: ["String", "Dynamic Programming", "Recursion", "Amazon"] },
// ];

// // User stats
// const userStats = {
//   totalSolved: 4,
//   totalProblems: mockProblems.length,
//   rank: 15,
//   totalParticipants: 150
// };

// export default function ProblemSolvingPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterDifficulty, setFilterDifficulty] = useState('');
//   const [filterStatus, setFilterStatus] = useState('');
  
//   // Problems per page
//   const problemsPerPage = 5;
  
//   // Filter problems based on search and filters
//   const filteredProblems = mockProblems.filter(problem => {
//     const matchesSearch = searchTerm === '' || 
//       problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
//     const matchesDifficulty = filterDifficulty === '' || problem.difficulty === filterDifficulty;
//     const matchesStatus = filterStatus === '' || problem.status === filterStatus;
    
//     return matchesSearch && matchesDifficulty && matchesStatus;
//   });
  
//   // Get current problems
//   const indexOfLastProblem = currentPage * problemsPerPage;
//   const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
//   const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  
//   // Calculate progress percentage
//   const progressPercentage = (userStats.totalSolved / userStats.totalProblems) * 100;
  
//   // Page change handlers
//   const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);
//   const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
//   const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  
//   return (
//     <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Problem Solving Hub</h1>
        
//         {/* Stats Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* Progress */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
//             <div className="mb-2 flex justify-between">
//               <span className="text-sm text-gray-600">Solved: {userStats.totalSolved}/{userStats.totalProblems}</span>
//               <span className="text-sm font-medium">{progressPercentage.toFixed(1)}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5">
//               <div 
//                 className="bg-green-600 h-2.5 rounded-full" 
//                 style={{ width: `${progressPercentage}%` }}
//               ></div>
//             </div>
//             <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
//               <div>
//                 <div className="flex items-center justify-center bg-green-100 p-2 rounded-full w-8 h-8 mx-auto mb-1">
//                   <CheckCircle size={16} className="text-green-600" />
//                 </div>
//                 <p>{mockProblems.filter(p => p.status === "Solved").length} Solved</p>
//               </div>
//               <div>
//                 <div className="flex items-center justify-center bg-yellow-100 p-2 rounded-full w-8 h-8 mx-auto mb-1">
//                   <Clock size={16} className="text-yellow-600" />
//                 </div>
//                 <p>{mockProblems.filter(p => p.status === "Attempted").length} Attempted</p>
//               </div>
//               <div>
//                 <div className="flex items-center justify-center bg-gray-100 p-2 rounded-full w-8 h-8 mx-auto mb-1">
//                   <XCircle size={16} className="text-gray-600" />
//                 </div>
//                 <p>{mockProblems.filter(p => p.status === "Unsolved").length} Unsolved</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Rank */}
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
//             <h2 className="text-lg font-semibold mb-4">Your Ranking</h2>
//             <div className="flex items-center justify-center bg-yellow-100 p-3 rounded-full w-16 h-16 mb-2">
//               <Trophy size={32} className="text-yellow-600" />
//             </div>
//             <div className="text-center">
//               <p className="text-3xl font-bold text-gray-800">#{userStats.rank}</p>
//               <p className="text-sm text-gray-600">out of {userStats.totalParticipants} participants</p>
//             </div>
//           </div>
          
//           {/* LeetCode-like Widget */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">Problem Stats</h2>
//             <div className="grid grid-cols-3 gap-4">
//               <div className="bg-green-50 p-3 rounded-lg text-center">
//                 <p className="text-xs text-gray-500">Easy</p>
//                 <p className="text-lg font-semibold text-green-600">
//                   {mockProblems.filter(p => p.difficulty === "Easy" && p.status === "Solved").length}/
//                   {mockProblems.filter(p => p.difficulty === "Easy").length}
//                 </p>
//               </div>
//               <div className="bg-yellow-50 p-3 rounded-lg text-center">
//                 <p className="text-xs text-gray-500">Medium</p>
//                 <p className="text-lg font-semibold text-yellow-600">
//                   {mockProblems.filter(p => p.difficulty === "Medium" && p.status === "Solved").length}/
//                   {mockProblems.filter(p => p.difficulty === "Medium").length}
//                 </p>
//               </div>
//               <div className="bg-red-50 p-3 rounded-lg text-center">
//                 <p className="text-xs text-gray-500">Hard</p>
//                 <p className="text-lg font-semibold text-red-600">
//                   {mockProblems.filter(p => p.difficulty === "Hard" && p.status === "Solved").length}/
//                   {mockProblems.filter(p => p.difficulty === "Hard").length}
//                 </p>
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
//                 <div className="flex h-1.5">
//                   <div 
//                     className="bg-green-500 h-1.5 rounded-l-full" 
//                     style={{ width: `${(mockProblems.filter(p => p.difficulty === "Easy").length / mockProblems.length) * 100}%` }}
//                   ></div>
//                   <div 
//                     className="bg-yellow-500 h-1.5" 
//                     style={{ width: `${(mockProblems.filter(p => p.difficulty === "Medium").length / mockProblems.length) * 100}%` }}
//                   ></div>
//                   <div 
//                     className="bg-red-500 h-1.5 rounded-r-full" 
//                     style={{ width: `${(mockProblems.filter(p => p.difficulty === "Hard").length / mockProblems.length) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Filters and Search */}
//         <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="relative flex-grow">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <Search size={16} className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
//                 placeholder="Search problems or tags..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex flex-col md:flex-row gap-2">
//               <select
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
//                 value={filterDifficulty}
//                 onChange={(e) => setFilterDifficulty(e.target.value)}
//               >
//                 <option value="">All Difficulties</option>
//                 <option value="Easy">Easy</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Hard">Hard</option>
//               </select>
//               <select
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//               >
//                 <option value="">All Status</option>
//                 <option value="Solved">Solved</option>
//                 <option value="Attempted">Attempted</option>
//                 <option value="Unsolved">Unsolved</option>
//               </select>
//               <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
//                 <Filter size={16} />
//                 <span>More Filters</span>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Problems Table */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
//                   #
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Title
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Tags
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {currentProblems.map((problem) => (
//                 <tr key={problem.id} className="hover:bg-gray-50 cursor-pointer">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {problem.status === "Solved" && (
//                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                         <CheckCircle size={16} className="mr-1" /> Solved
//                       </span>
//                     )}
//                     {problem.status === "Attempted" && (
//                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                         <Clock size={16} className="mr-1" /> Attempted
//                       </span>
//                     )}
//                     {problem.status === "Unsolved" && (
//                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
//                         <XCircle size={16} className="mr-1" /> Unsolved
//                       </span>
//                     )}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {problem.id}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     <div className="flex items-center">
//                       <span className="font-medium">{problem.title}</span>
//                       <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium
//                         ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
//                           problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
//                           'bg-red-100 text-red-800'}`}>
//                         {problem.difficulty}
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex flex-wrap gap-1">
//                       {problem.tags.map((tag, idx) => (
//                         <span key={idx} className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         {/* Pagination */}
//         <div className="flex items-center justify-between">
//           <div className="text-sm text-gray-700">
//             Showing <span className="font-medium">{indexOfFirstProblem + 1}</span> to{" "}
//             <span className="font-medium">{Math.min(indexOfLastProblem, filteredProblems.length)}</span> of{" "}
//             <span className="font-medium">{filteredProblems.length}</span> problems
//           </div>
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium
//                 ${currentPage === 1 
//                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
//                   : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
//             >
//               <ChevronLeft size={16} className="mr-1" />
//               Previous
//             </button>
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages || totalPages === 0}
//               className={`inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium
//                 ${currentPage === totalPages || totalPages === 0
//                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
//                   : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
//             >
//               Next
//               <ChevronRight size={16} className="ml-1" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


/* Below is very simple clean, really good the below one*/


// import React, { useState } from 'react';
// import { Search, Filter, ChevronLeft, ChevronRight, Award, CheckCircle, Clock, BarChart2, Star, Tag, Bookmark, Code, Briefcase, ArrowUp, ArrowDown, XCircle } from 'lucide-react';

// const ProblemSolvingPage = () => {
//   // Mock data
//   const userData = {
//     username: "Alex Johnson",
//     rank: 35,
//     totalParticipants: 547,
//     problemsSolved: 72,
//     totalProblems: 150,
//   };
  
//   const tags = [    
//     { id: 1, name: "Arrays", count: 45 },
//     { id: 2, name: "Strings", count: 38 },
//     { id: 3, name: "Dynamic Programming", count: 32 },
//     { id: 4, name: "Trees", count: 28 },
//     { id: 5, name: "Graphs", count: 25 },
//     { id: 6, name: "Sorting", count: 22 },
//     { id: 7, name: "Binary Search", count: 20 },
//     { id: 8, name: "Greedy", count: 18 },
//   ];
  
//   const companies = [
//     { id: 1, name: "Google", count: 42 },
//     { id: 2, name: "Microsoft", count: 37 },
//     { id: 3, name: "Amazon", count: 35 },
//     { id: 4, name: "Meta", count: 30 },
//     { id: 5, name: "Apple", count: 28 },
//     { id: 6, name: "Netflix", count: 25 },
//   ];
  
//   const difficulties = [
//     { id: 1, name: "Easy", count: 50, color: "text-green-600" },
//     { id: 2, name: "Medium", count: 70, color: "text-yellow-600" },
//     { id: 3, name: "Hard", count: 30, color: "text-red-600" },
//   ];
  
//   const problemsList = [
//     { id: 1, number: "001", title: "Two Sum", difficulty: "Easy", tags: ["Arrays", "Hash Table"], companies: ["Google", "Amazon"], status: "Solved" },
//     { id: 2, number: "002", title: "Reverse Linked List", difficulty: "Easy", tags: ["Linked List"], companies: ["Microsoft", "Meta"], status: "Solved" },
//     { id: 3, number: "003", title: "Valid Parentheses", difficulty: "Easy", tags: ["Stack", "Strings"], companies: ["Google", "Apple"], status: "Attempted" },
//     { id: 4, number: "004", title: "Merge Two Sorted Lists", difficulty: "Easy", tags: ["Linked List"], companies: ["Amazon"], status: "Solved" },
//     { id: 5, number: "005", title: "Maximum Subarray", difficulty: "Medium", tags: ["Arrays", "Dynamic Programming"], companies: ["Meta", "Microsoft"], status: "Unsolved" },
//     { id: 6, number: "006", title: "LRU Cache", difficulty: "Medium", tags: ["Hash Table", "Linked List"], companies: ["Google", "Amazon"], status: "Unsolved" },
//     { id: 7, number: "007", title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Trees", "BFS"], companies: ["Apple", "Netflix"], status: "Solved" },
//     { id: 8, number: "008", title: "Word Search", difficulty: "Medium", tags: ["Arrays", "Backtracking"], companies: ["Microsoft", "Google"], status: "Attempted" },
//     { id: 9, number: "009", title: "Trapping Rain Water", difficulty: "Hard", tags: ["Arrays", "Two Pointers"], companies: ["Amazon", "Google"], status: "Unsolved" },
//     { id: 10, number: "010", title: "Median of Two Sorted Arrays", difficulty: "Hard", tags: ["Arrays", "Binary Search"], companies: ["Google", "Apple"], status: "Unsolved" },
//     { id: 11, number: "011", title: "Container With Most Water", difficulty: "Medium", tags: ["Two Pointers", "Arrays"], companies: ["Amazon", "Meta"], status: "Unsolved" },
//     { id: 12, number: "012", title: "Search in Rotated Sorted Array", difficulty: "Medium", tags: ["Binary Search"], companies: ["Google", "Microsoft"], status: "Attempted" },
//     { id: 13, number: "013", title: "Climbing Stairs", difficulty: "Easy", tags: ["Dynamic Programming"], companies: ["Google", "Amazon"], status: "Solved" },
//     { id: 14, number: "014", title: "Longest Palindromic Substring", difficulty: "Medium", tags: ["Strings", "Dynamic Programming"], companies: ["Apple", "Netflix"], status: "Unsolved" },
//     { id: 15, number: "015", title: "3Sum", difficulty: "Medium", tags: ["Arrays", "Two Pointers"], companies: ["Microsoft", "Meta"], status: "Solved" },
//     { id: 16, number: "016", title: "Remove Nth Node From End of List", difficulty: "Medium", tags: ["Linked List", "Two Pointers"], companies: ["Amazon", "Apple"], status: "Attempted" },
//     { id: 17, number: "017", title: "Valid Anagram", difficulty: "Easy", tags: ["Hash Table", "Strings"], companies: ["Google", "Meta"], status: "Solved" },
//     { id: 18, number: "018", title: "Merge Intervals", difficulty: "Medium", tags: ["Sorting", "Greedy"], companies: ["Microsoft", "Netflix"], status: "Unsolved" },
//     { id: 19, number: "019", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", tags: ["Binary Search"], companies: ["Google", "Amazon"], status: "Unsolved" },
//     { id: 20, number: "020", title: "Course Schedule", difficulty: "Medium", tags: ["Graph", "Topological Sort"], companies: ["Apple", "Meta"], status: "Attempted" }
// ];

  
//   const recentActivity = [
//     { id: 1, problem: "Two Sum", timestamp: "2 hours ago", action: "Solved" },
//     { id: 2, problem: "Valid Parentheses", timestamp: "5 hours ago", action: "Attempted" },
//     { id: 3, problem: "Binary Tree Level Order Traversal", timestamp: "Yesterday", action: "Solved" },
//   ];
  
//   const recommendedProblems = [
//     { id: 1, number: "023", title: "Merge k Sorted Lists", difficulty: "Hard", companies: ["Google", "Amazon"] },
//     { id: 2, number: "042", title: "First Missing Positive", difficulty: "Hard", companies: ["Microsoft"] },
//     { id: 3, number: "056", title: "Merge Intervals", difficulty: "Medium", companies: ["Meta", "Apple"] },
//   ];
  
//   // State variables for filtering and pagination
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDifficulty, setSelectedDifficulty] = useState('All');
//   const [selectedStatus, setSelectedStatus] = useState('All');
//   const [selectedCompany, setSelectedCompany] = useState('All');
//   const [selectedTag, setSelectedTag] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState('number');
//   const [sortOrder, setSortOrder] = useState('asc');
  
//   const problemsPerPage = 10;
  
//   // Filter and sort problems
//   const filteredProblems = problemsList.filter(problem => {
//     return (
//       (searchTerm === '' || problem.title.toLowerCase().includes(searchTerm.toLowerCase()) || problem.number.includes(searchTerm)) &&
//       (selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty) &&
//       (selectedStatus === 'All' || problem.status === selectedStatus) &&
//       (selectedCompany === 'All' || problem.companies.includes(selectedCompany)) &&
//       (selectedTag === 'All' || problem.tags.includes(selectedTag))
//     );
//   }).sort((a, b) => {
//     if (sortBy === 'number') {
//       return sortOrder === 'asc' ? a.number.localeCompare(b.number) : b.number.localeCompare(a.number);
//     } else if (sortBy === 'title') {
//       return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
//     } else if (sortBy === 'difficulty') {
//       const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
//       return sortOrder === 'asc' 
//         ? difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
//         : difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
//     }
//     return 0;
//   });
  
//   // Pagination
//   const indexOfLastProblem = currentPage * problemsPerPage;
//   const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
//   const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
//   const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);
  
//   // Function to handle random problem selection
//   const pickRandomProblem = () => {
//     const randomIndex = Math.floor(Math.random() * problemsList.length);
//     alert(`Try this problem: ${problemsList[randomIndex].title} (${problemsList[randomIndex].number})`);
//   };
  
//   // Function to get status icon
//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'Solved':
//         return <CheckCircle className="h-5 w-5 text-green-500" />;
//       case 'Attempted':
//         return <Clock className="h-5 w-5 text-yellow-500" />;
//       default:
//         return <XCircle className="h-5 w-5 text-gray-400" />;
//     }
//   };
  
//   // Function to get difficulty color
//   const getDifficultyColor = (difficulty) => {
//     switch(difficulty) {
//       case 'Easy':
//         return 'text-green-600';
//       case 'Medium':
//         return 'text-yellow-600';
//       case 'Hard':
//         return 'text-red-600';
//       default:
//         return 'text-gray-600';
//     }
//   };
  
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="bg-blue-800 text-white py-6">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-bold">Problem Solving Platform</h1>
//           <p className="text-blue-100">Enhance your coding skills and prepare for technical interviews</p>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* Main content area */}
//           <div className="lg:col-span-2">
//             {/* Progress Bar */}
//             <div className="bg-white shadow rounded-lg p-6 mb-6">
//               <div className="flex justify-between items-center mb-2">
//                 <h2 className="text-lg font-semibold">Your Progress</h2>
//                 <span className="text-blue-600 font-semibold">{userData.problemsSolved} / {userData.totalProblems}</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-4">
//                 <div 
//                   className="bg-blue-600 h-4 rounded-full" 
//                   style={{width: `${(userData.problemsSolved/userData.totalProblems)*100}%`}}
//                 ></div>
//               </div>
//               <div className="flex justify-between mt-2 text-sm text-gray-600">
//                 <span>{Math.round((userData.problemsSolved/userData.totalProblems)*100)}% Complete</span>
//                 <span>{userData.totalProblems - userData.problemsSolved} problems remaining</span>
//               </div>
//             </div>
            
//             {/* Leetcode-like Filter Widget */}
//             <div className="bg-white shadow rounded-lg p-6 mb-6">
//               <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//                 <h2 className="text-lg font-semibold mb-2 md:mb-0">Problem Set</h2>
//                 <div className="flex w-full md:w-auto space-x-2">
//                   <div className="relative flex-grow">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Search className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input 
//                       type="text" 
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Search problems..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                   </div>
//                   <button 
//                     onClick={pickRandomProblem}
//                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Pick One
//                   </button>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
//                   <select
//                     className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
//                     value={selectedDifficulty}
//                     onChange={(e) => setSelectedDifficulty(e.target.value)}
//                   >
//                     <option value="All">All Difficulties</option>
//                     {difficulties.map(difficulty => (
//                       <option key={difficulty.id} value={difficulty.name}>
//                         {difficulty.name} ({difficulty.count})
//                       </option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                   <select
//                     className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
//                     value={selectedStatus}
//                     onChange={(e) => setSelectedStatus(e.target.value)}
//                   >
//                     <option value="All">All Status</option>
//                     <option value="Solved">Solved</option>
//                     <option value="Attempted">Attempted</option>
//                     <option value="Unsolved">Unsolved</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
//                   <select
//                     className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
//                     value={selectedCompany}
//                     onChange={(e) => setSelectedCompany(e.target.value)}
//                   >
//                     <option value="All">All Companies</option>
//                     {companies.map(company => (
//                       <option key={company.id} value={company.name}>
//                         {company.name} ({company.count})
//                       </option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
//                   <select
//                     className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
//                     value={selectedTag}
//                     onChange={(e) => setSelectedTag(e.target.value)}
//                   >
//                     <option value="All">All Topics</option>
//                     {tags.map(tag => (
//                       <option key={tag.id} value={tag.name}>
//                         {tag.name} ({tag.count})
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
              
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
//                         Status
//                       </th>
//                       <th 
//                         scope="col" 
//                         className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                         onClick={() => {
//                           if (sortBy === 'number') {
//                             setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//                           } else {
//                             setSortBy('number');
//                             setSortOrder('asc');
//                           }
//                         }}
//                       >
//                         <div className="flex items-center">
//                           #
//                           {sortBy === 'number' && (
//                             sortOrder === 'asc' ? <ArrowUp className="w-4 h-4 ml-1" /> : <ArrowDown className="w-4 h-4 ml-1" />
//                           )}
//                         </div>
//                       </th>
//                       <th 
//                         scope="col" 
//                         className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                         onClick={() => {
//                           if (sortBy === 'title') {
//                             setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//                           } else {
//                             setSortBy('title');
//                             setSortOrder('asc');
//                           }
//                         }}
//                       >
//                         <div className="flex items-center">
//                           Title
//                           {sortBy === 'title' && (
//                             sortOrder === 'asc' ? <ArrowUp className="w-4 h-4 ml-1" /> : <ArrowDown className="w-4 h-4 ml-1" />
//                           )}
//                         </div>
//                       </th>
//                       <th 
//                         scope="col" 
//                         className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                         onClick={() => {
//                           if (sortBy === 'difficulty') {
//                             setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//                           } else {
//                             setSortBy('difficulty');
//                             setSortOrder('asc');
//                           }
//                         }}
//                       >
//                         <div className="flex items-center">
//                           Difficulty
//                           {sortBy === 'difficulty' && (
//                             sortOrder === 'asc' ? <ArrowUp className="w-4 h-4 ml-1" /> : <ArrowDown className="w-4 h-4 ml-1" />
//                           )}
//                         </div>
//                       </th>
//                       <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Tags
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {currentProblems.map((problem) => (
//                       <tr key={problem.id} className="hover:bg-gray-50 transition-colors duration-150">
//                         <td className="px-4 py-4 whitespace-nowrap">
//                           {getStatusIcon(problem.status)}
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {problem.number}
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
//                           <a href="#" className="font-medium text-blue-600 hover:text-blue-800">
//                             {problem.title}
//                           </a>
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap text-sm">
//                           <span className={`${getDifficultyColor(problem.difficulty)} font-medium`}>
//                             {problem.difficulty}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
//                           <div className="flex flex-wrap gap-1">
//                             {problem.tags.map((tag, index) => (
//                               <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                                 {tag}
//                               </span>
//                             ))}
//                             {problem.companies.map((company, index) => (
//                               <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center">
//                                 <Briefcase className="w-3 h-3 mr-1" />
//                                 {company}
//                               </span>
//                             ))}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {currentProblems.length === 0 && (
//                       <tr>
//                         <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
//                           No problems match your current filters. Try adjusting your search criteria.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
              
//               {/* Pagination */}
//               {filteredProblems.length > 0 && (
//                 <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-4">
//                   <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//                     <div>
//                       <p className="text-sm text-gray-700">
//                         Showing <span className="font-medium">{indexOfFirstProblem + 1}</span> to{" "}
//                         <span className="font-medium">
//                           {Math.min(indexOfLastProblem, filteredProblems.length)}
//                         </span>{" "}
//                         of <span className="font-medium">{filteredProblems.length}</span> results
//                       </p>
//                     </div>
//                     <div>
//                       <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
//                         <button
//                           onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                           disabled={currentPage === 1}
//                           className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
//                             currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
//                           }`}
//                         >
//                           <span className="sr-only">Previous</span>
//                           <ChevronLeft className="h-5 w-5" />
//                         </button>
                        
//                         {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                           // Show pages around current page
//                           let pageNum;
//                           if (totalPages <= 5) {
//                             pageNum = i + 1;
//                           } else if (currentPage <= 3) {
//                             pageNum = i + 1;
//                           } else if (currentPage >= totalPages - 2) {
//                             pageNum = totalPages - 4 + i;
//                           } else {
//                             pageNum = currentPage - 2 + i;
//                           }
                          
//                           return (
//                             <button
//                               key={pageNum}
//                               onClick={() => setCurrentPage(pageNum)}
//                               className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
//                                 currentPage === pageNum
//                                   ? "z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//                                   : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                               }`}
//                             >
//                               {pageNum}
//                             </button>
//                           );
//                         })}
                        
//                         <button
//                           onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//                           disabled={currentPage === totalPages}
//                           className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
//                             currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
//                           }`}
//                         >
//                           <span className="sr-only">Next</span>
//                           <ChevronRight className="h-5 w-5" />
//                         </button>
//                       </nav>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Rank card */}
//             <div className="bg-white shadow rounded-lg p-6">
//               <h2 className="text-lg font-semibold mb-4 flex items-center">
//                 <Award className="h-5 w-5 text-yellow-500 mr-2" />
//                 Your Rank
//               </h2>
//               <div className="flex flex-col items-center">
//                 <div className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-3">
//                   <span className="text-3xl font-bold text-blue-600">#{userData.rank}</span>
//                 </div>
//                 <p className="text-gray-600 mb-1">Out of {userData.totalParticipants} participants</p>
//                 <p className="text-sm text-gray-500">
//                   Top {Math.round((userData.rank / userData.totalParticipants) * 100)}%
//                 </p>
//               </div>
//             </div>
            
//             {/* Recent activity */}
//             <div className="bg-white shadow rounded-lg p-6">
//               <h2 className="text-lg font-semibold mb-4 flex items-center">
//                 <Clock className="h-5 w-5 text-blue-500 mr-2" />
//                 Recent Activity
//               </h2>
//               <div className="space-y-4">
//                 {recentActivity.map(activity => (
//                   <div key={activity.id} className="flex items-start">
//                     {activity.action === 'Solved' ? (
//                       <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
//                     ) : (
//                       <Clock className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
//                     )}
//                     <div>
//                       <p className="text-sm font-medium">{activity.problem}</p>
//                       <p className="text-xs text-gray-500">{activity.timestamp}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <a href="#" className="mt-4 text-sm text-blue-600 hover:text-blue-800 inline-block">
//                 View all activity
//               </a>
//             </div>
            
//             {/* Recommended problems */}
//             <div className="bg-white shadow rounded-lg p-6">
//               <h2 className="text-lg font-semibold mb-4 flex items-center">
//                 <Star className="h-5 w-5 text-yellow-500 mr-2" />
//                 Recommended Problems
//               </h2>
//               <div className="space-y-3">
//                 {recommendedProblems.map(problem => (
//                   <div key={problem.id} className="border border-gray-200 rounded-md p-3 hover:bg-gray-50">
//                     <div className="flex justify-between items-start">
//                       <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
//                         {problem.number}. {problem.title}
//                       </a>
//                       <span className={`text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
//                         {problem.difficulty}
//                       </span>
//                     </div>
//                     <div className="mt-2 flex flex-wrap gap-1">
//                       {problem.companies.map((company, index) => (
//                         <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full inline-flex items-center">
//                           <Briefcase className="w-3 h-3 mr-1" />
//                           {company}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <a href="#" className="mt-4 text-sm text-blue-600 hover:text-blue-800 inline-block">
//                 See more recommendations
//               </a>
//             </div>
            
//             {/* Topic tags cloud */}
//             <div className="bg-white shadow rounded-lg p-6">
//               <h2 className="text-lg font-semibold mb-4 flex items-center">
//                 <Tag className="h-5 w-5 text-blue-500 mr-2" />
//                 Popular Topics
//               </h2>
//               <div className="flex flex-wrap gap-2">
//                 {tags.map(tag => (
//                   <a 
//                     key={tag.id} 
//                     href="#" 
//                     className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
//                   >
//                     {tag.name} ({tag.count})
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProblemSolvingPage;



/* An example for the studnet-problem-profile-card*/


       {/* Welcome back card */}
    //    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
    //    <div className="flex justify-between items-start">
    //      <div>
    //        <h2 className="text-lg font-semibold text-gray-800">Welcome back, Alex!</h2>
    //        <p className="text-gray-600 text-sm mt-1">Success is not final, failure is not fatal: It is the courage to continue that counts.</p>
    //      </div>
    //      <div className="bg-blue-100 text-blue-800 font-medium py-1 px-3 rounded-full text-sm flex items-center">
    //        <Zap size={16} className="mr-1" /> Day {userStats.streak} Streak
    //      </div>
    //    </div>
       
    //    {/* Stats cards */}
    //    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
    //      <div className="bg-blue-600 text-white rounded-xl p-4 flex flex-col">
    //        <div className="text-xs text-blue-200 uppercase tracking-wide mb-1">Overall Score</div>
    //        <div className="text-3xl font-bold mb-2">89%</div>
    //        <div className="text-xs text-blue-200">Your placement readiness</div>
    //      </div>
         
    //      <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col">
    //        <div className="flex justify-between items-start">
    //          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Problems Solved</div>
    //          <Code size={16} className="text-gray-400" />
    //        </div>
    //        <div className="text-3xl font-bold mb-2">{userStats.totalSolved}</div>
    //        <div className="text-xs text-gray-500 flex items-center">
    //          Target: {userStats.totalProblems} problems
    //          <div className="ml-2 flex-grow h-1 bg-gray-200 rounded-full overflow-hidden">
    //            <div 
    //              className="h-full bg-green-500 rounded-full" 
    //              style={{ width: `${progressPercentage}%` }}
    //            ></div>
    //          </div>
    //        </div>
    //      </div>
         
    //      <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col">
    //        <div className="flex justify-between items-start">
    //          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Competition Rank</div>
    //          <Trophy size={16} className="text-yellow-500" />
    //        </div>
    //        <div className="text-3xl font-bold mb-2">Top {userStats.percentile}%</div>
    //        <div className="text-xs text-gray-500">Rank #{userStats.rank} of {userStats.totalParticipants}</div>
    //      </div>
         
    //      <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col">
    //        <div className="flex justify-between items-start">
    //          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Resume Score</div>
    //          <BarChart size={16} className="text-purple-500" />
    //        </div>
    //        <div className="text-3xl font-bold mb-2">92%</div>
    //        <div className="text-xs text-gray-500">Industry standard assessment</div>
    //      </div>
    //    </div>
    //  </div>

/* Anthoer student-card*/
   //  import React from 'react';
   //  import { Zap, Code, CheckCircle, Trophy, Hash, ChevronRight } from 'lucide-react';
    
   //  const WelcomeBackCard = () => {
   //    // Sample data - replace with actual data in your application
   //    const userData = {
   //      name: "Alex",
   //      streak: 12,
   //      solved: 418,
   //      total: 3495,
   //      rank: 1243,
   //      totalParticipants: 12500,
   //      percentile: 10,
   //      categories: {
   //        easy: { solved: 215, total: 868 },
   //        medium: { solved: 188, total: 815 },
   //        hard: { solved: 15, total: 812 }
   //      },
   //      tags: [
   //        { name: "Array", solved: 126, total: 450 },
   //        { name: "Linked List", solved: 64, total: 120 },
   //        { name: "Tree", solved: 52, total: 210 },
   //        { name: "Graph", solved: 22, total: 180 },
   //        { name: "Google", solved: 45, total: 75 }
   //      ]
   //    };
    
   //    // Calculate percentages
   //    const totalPercentage = Math.round((userData.solved / userData.total) * 100);
      
   //    // Get tag color based on completion percentage
   //    const getTagColor = (solved, total) => {
   //      const percentage = (solved / total) * 100;
   //      if (percentage >= 80) return "bg-green-100 text-green-800 border-green-200";
   //      if (percentage >= 50) return "bg-blue-100 text-blue-800 border-blue-200";
   //      if (percentage >= 30) return "bg-yellow-100 text-yellow-800 border-yellow-200";
   //      return "bg-gray-100 text-gray-800 border-gray-200";
   //    };
      
   //    return (
   //      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
   //        {/* Header section with greeting and streak */}
   //        <div className="flex items-center justify-between mb-4">
   //          <div>
   //            <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userData.name}!</h2>
   //            <p className="text-gray-600 mt-1">
   //              "Success is not final, failure is not fatal: It is the courage to continue that counts."
   //            </p>
   //          </div>
   //          <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg text-sm flex items-center shadow-sm">
   //            <Zap size={16} className="mr-2" /> Day {userData.streak} Streak
   //          </div>
   //        </div>
          
   //        {/* Main stats area */}
   //        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
   //          {/* Overall progress */}
   //          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm col-span-1 lg:col-span-2 relative overflow-hidden">
   //            <div className="flex items-center mb-3">
   //              <Code size={20} className="text-blue-600 mr-2" />
   //              <h3 className="font-semibold text-gray-800 text-lg">Problems Solved</h3>
   //            </div>
              
   //            <div className="flex items-baseline mb-4">
   //              <span className="text-3xl font-bold text-blue-600">{userData.solved}</span>
   //              <span className="text-lg text-gray-500 ml-2">/ {userData.total}</span>
   //              <span className="ml-3 text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-medium">
   //                <CheckCircle size={14} className="inline mr-1" />
   //                Solved
   //              </span>
   //            </div>
              
   //            <div className="w-full h-3 bg-gray-100 rounded-full mb-3">
   //              <div 
   //                className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out" 
   //                style={{ width: `${totalPercentage}%` }}
   //              ></div>
   //            </div>
              
   //            <div className="text-sm text-gray-500 flex justify-between">
   //              <span>Progress</span>
   //              <span className="font-medium">{totalPercentage}% Complete</span>
   //            </div>
              
   //            {/* Decorative element */}
   //            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-blue-50 opacity-50"></div>
   //          </div>
            
   //          {/* Competition Rank */}
   //          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative overflow-hidden">
   //            <div className="flex items-center mb-3">
   //              <Trophy size={20} className="text-yellow-500 mr-2" />
   //              <h3 className="font-semibold text-gray-800 text-lg">Competition Rank</h3>
   //            </div>
              
   //            <div className="flex flex-col">
   //              <div className="flex items-baseline mb-2">
   //                <span className="text-3xl font-bold text-gray-800">Top {userData.percentile}%</span>
   //              </div>
   //              <span className="text-gray-500">Rank #{userData.rank} of {userData.totalParticipants.toLocaleString()}</span>
                
   //              <div className="mt-4 flex items-center">
   //                <div className="p-2 bg-yellow-500 rounded-full mr-2">
   //                  <Trophy size={16} className="text-white" />
   //                </div>
   //                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
   //                  <div 
   //                    className="h-full bg-yellow-500 rounded-full" 
   //                    style={{ width: `${100 - userData.percentile}%` }}
   //                  ></div>
   //                </div>
   //              </div>
   //            </div>
              
   //            {/* Decorative element */}
   //            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-yellow-50 opacity-50"></div>
   //          </div>
   //        </div>
          
   //        {/* Difficulty breakdown */}
   //        <div className="mb-6">
   //          <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
   //            <Hash size={18} className="mr-2 text-gray-500" />
   //            Difficulty Breakdown
   //          </h3>
   //          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
   //            {/* Easy problems */}
   //            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 shadow-sm">
   //              <div className="flex justify-between items-center mb-2">
   //                <span className="text-sm font-medium text-green-800">Easy</span>
   //                <span className="text-xs bg-white text-green-700 px-2 py-1 rounded-full border border-green-200">
   //                  {Math.round((userData.categories.easy.solved / userData.categories.easy.total) * 100)}%
   //                </span>
   //              </div>
   //              <div className="flex items-baseline mb-2">
   //                <span className="text-2xl font-bold text-green-700">{userData.categories.easy.solved}</span>
   //                <span className="text-sm text-gray-500 ml-1">/{userData.categories.easy.total}</span>
   //              </div>
   //              <div className="w-full h-2 bg-white rounded-full">
   //                <div 
   //                  className="h-full bg-green-500 rounded-full" 
   //                  style={{ width: `${(userData.categories.easy.solved / userData.categories.easy.total) * 100}%` }}
   //                ></div>
   //              </div>
   //            </div>
              
   //            {/* Medium problems */}
   //            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4 shadow-sm">
   //              <div className="flex justify-between items-center mb-2">
   //                <span className="text-sm font-medium text-yellow-800">Medium</span>
   //                <span className="text-xs bg-white text-yellow-700 px-2 py-1 rounded-full border border-yellow-200">
   //                  {Math.round((userData.categories.medium.solved / userData.categories.medium.total) * 100)}%
   //                </span>
   //              </div>
   //              <div className="flex items-baseline mb-2">
   //                <span className="text-2xl font-bold text-yellow-700">{userData.categories.medium.solved}</span>
   //                <span className="text-sm text-gray-500 ml-1">/{userData.categories.medium.total}</span>
   //              </div>
   //              <div className="w-full h-2 bg-white rounded-full">
   //                <div 
   //                  className="h-full bg-yellow-500 rounded-full" 
   //                  style={{ width: `${(userData.categories.medium.solved / userData.categories.medium.total) * 100}%` }}
   //                ></div>
   //              </div>
   //            </div>
              
   //            {/* Hard problems */}
   //            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-4 shadow-sm">
   //              <div className="flex justify-between items-center mb-2">
   //                <span className="text-sm font-medium text-red-800">Hard</span>
   //                <span className="text-xs bg-white text-red-700 px-2 py-1 rounded-full border border-red-200">
   //                  {Math.round((userData.categories.hard.solved / userData.categories.hard.total) * 100)}%
   //                </span>
   //              </div>
   //              <div className="flex items-baseline mb-2">
   //                <span className="text-2xl font-bold text-red-700">{userData.categories.hard.solved}</span>
   //                <span className="text-sm text-gray-500 ml-1">/{userData.categories.hard.total}</span>
   //              </div>
   //              <div className="w-full h-2 bg-white rounded-full">
   //                <div 
   //                  className="h-full bg-red-500 rounded-full" 
   //                  style={{ width: `${(userData.categories.hard.solved / userData.categories.hard.total) * 100}%` }}
   //                ></div>
   //              </div>
   //            </div>
   //          </div>
   //        </div>
          
   //        {/* Tag breakdown */}
   //        <div>
   //          <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
   //            <Hash size={18} className="mr-2 text-gray-500" />
   //            Problem Tags
   //          </h3>
   //          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
   //            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
   //              {userData.tags.map((tag, index) => {
   //                const percentage = Math.round((tag.solved / tag.total) * 100);
   //                return (
   //                  <div key={index} className="flex items-center">
   //                    <div className={`flex-1 flex items-center justify-between p-3 rounded-lg border ${getTagColor(tag.solved, tag.total)}`}>
   //                      <div className="flex items-center">
   //                        <span className="font-medium text-sm">{tag.name}</span>
   //                      </div>
   //                      <div className="flex items-center">
   //                        <span className="text-sm font-bold mr-2">{tag.solved}/{tag.total}</span>
   //                        <ChevronRight size={16} className="text-gray-400" />
   //                      </div>
   //                    </div>
   //                  </div>
   //                );
   //              })}
   //            </div>
   //          </div>
   //        </div>
   //      </div>
   //    );
   //  };
    
   //  export default WelcomeBackCard;