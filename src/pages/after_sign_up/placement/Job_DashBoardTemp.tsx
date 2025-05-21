// import React, { useState } from 'react';
// import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
// import { Search, ChevronLeft, ChevronRight, Brain, FileText, Video, TrendingUp, Filter, Calendar, Briefcase, ChevronDown, BookOpen, Code, Award, Clock } from 'lucide-react';

// const JobDashboard = () => {
//   // Sample data - replace with actual data from backend later
//   const jobStats = {
//     totalJobs: 120,
//     totalEligible: 75,
//     notEligible: 45,
//     totalApplied: 42,
//     notApplied: 33,
//     accepted: 8,
//     notAccepted: 34,
//     inProgress: 15,
//     applicationRate: [
//       { month: 'Jan', applications: 5 },
//       { month: 'Feb', applications: 8 },
//       { month: 'Mar', applications: 12 },
//       { month: 'Apr', applications: 17 },
//     ],
//     interviewRate: [
//       { month: 'Jan', interviews: 2 },
//       { month: 'Feb', interviews: 4 },
//       { month: 'Mar', interviews: 6 },
//       { month: 'Apr', interviews: 7 },
//     ]
//   };

//   const pieChartData = [
//     { name: 'Applied', value: jobStats.totalApplied, color: '#3B82F6' },
//     { name: 'Not Applied', value: jobStats.notApplied, color: '#9CA3AF' },
//   ];

//   const statusChartData = [
//     { name: 'Accepted', value: jobStats.accepted, color: '#10B981' },
//     { name: 'In Progress', value: jobStats.inProgress, color: '#F59E0B' },
//     { name: 'Not Accepted', value: jobStats.notAccepted, color: '#EF4444' },
//   ];

//   const eligibilityChartData = [
//     { name: 'Eligible', value: jobStats.totalEligible, color: '#3B82F6' },
//     { name: 'Not Eligible', value: jobStats.notEligible, color: '#9CA3AF' },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 10;
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchCompany, setSearchCompany] = useState('');
//   const [statusFilter, setStatusFilter] = useState('');
//   const [dateSort, setDateSort] = useState('desc');

//   // Sample job applications data
//   const appliedJobs = [
//     { id: 1, appliedOn: '2025-03-15', resultExpectedDate: '2025-04-10', companyName: 'TechCorp', jobName: 'Junior Developer', status: 'Round-2', salary: '$75,000 - $85,000', location: 'San Francisco, CA', description: 'Software development role focused on backend systems', skills: ['Java', 'Spring', 'MySQL'] },
//     { id: 2, appliedOn: '2025-03-18', resultExpectedDate: '2025-04-12', companyName: 'DataSys', jobName: 'Data Analyst Intern', status: 'HR-Round', salary: '$25/hr', location: 'Remote', description: 'Data analysis internship with focus on business intelligence', skills: ['Python', 'SQL', 'Tableau'] },
//     { id: 3, appliedOn: '2025-03-20', resultExpectedDate: '2025-04-15', companyName: 'WebSolutions', jobName: 'Frontend Intern', status: 'Coding-Round', salary: '$22/hr', location: 'Boston, MA', description: 'Web development internship focusing on React applications', skills: ['JavaScript', 'React', 'HTML/CSS'] },
//     { id: 4, appliedOn: '2025-03-22', resultExpectedDate: '2025-04-18', companyName: 'CloudTech', jobName: 'Cloud Engineer', status: 'Accepted', salary: '$95,000 - $115,000', location: 'Seattle, WA', description: 'Cloud infrastructure engineering role', skills: ['AWS', 'Terraform', 'Kubernetes'] },
//     { id: 5, appliedOn: '2025-03-25', resultExpectedDate: '2025-04-20', companyName: 'SecureNet', jobName: 'Cybersecurity Analyst', status: 'Interview', salary: '$85,000 - $105,000', location: 'Austin, TX', description: 'Security operations and threat analysis role', skills: ['Network Security', 'SIEM', 'Penetration Testing'] },
//     { id: 6, appliedOn: '2025-03-27', resultExpectedDate: '2025-04-22', companyName: 'AppDev', jobName: 'Mobile App Developer', status: 'Round-1', salary: '$80,000 - $100,000', location: 'Chicago, IL', description: 'Mobile application development for iOS and Android', skills: ['Swift', 'Kotlin', 'React Native'] },
//     { id: 7, appliedOn: '2025-03-28', resultExpectedDate: '2025-04-25', companyName: 'AILabs', jobName: 'ML Engineer Intern', status: 'Dis-qualified', salary: '$30/hr', location: 'New York, NY', description: 'Machine learning research and implementation', skills: ['Python', 'TensorFlow', 'Data Science'] },
//     { id: 8, appliedOn: '2025-03-30', resultExpectedDate: '2025-04-27', companyName: 'DevOpsHub', jobName: 'DevOps Intern', status: 'Not Eligible', salary: '$28/hr', location: 'Denver, CO', description: 'CI/CD pipeline and infrastructure automation', skills: ['Docker', 'Jenkins', 'Git'] },
//     { id: 9, appliedOn: '2025-04-01', resultExpectedDate: '2025-04-30', companyName: 'FinTech', jobName: 'Software Engineer', status: 'Eligible', salary: '$90,000 - $110,000', location: 'Charlotte, NC', description: 'Full stack development for financial applications', skills: ['Java', 'Angular', 'PostgreSQL'] },
//     { id: 10, appliedOn: '2025-04-02', resultExpectedDate: '2025-05-02', companyName: 'GameDev', jobName: 'Unity Developer', status: 'Applied', salary: '$70,000 - $90,000', location: 'Los Angeles, CA', description: 'Game development using Unity engine', skills: ['C#', 'Unity3D', '3D Modeling'] },
//     { id: 11, appliedOn: '2025-04-03', resultExpectedDate: '2025-05-05', companyName: 'HealthTech', jobName: 'Backend Developer', status: 'Round-3', salary: '$85,000 - $105,000', location: 'Nashville, TN', description: 'Healthcare software systems development', skills: ['Node.js', 'MongoDB', 'Express'] },
//     { id: 12, appliedOn: '2025-04-05', resultExpectedDate: '2025-05-08', companyName: 'EduTech', jobName: 'Full Stack Developer', status: 'Coding-Round', salary: '$80,000 - $100,000', location: 'Portland, OR', description: 'Educational platform development', skills: ['React', 'Python', 'Django'] },
//   ];

//   // Data for upcoming deadlines
//   const upcomingDeadlines = [
//     { id: 1, company: 'SecureNet', position: 'Cybersecurity Analyst', date: '2025-04-20', type: 'Result Expected' },
//     { id: 2, company: 'CloudTech', position: 'DevOps Engineer', date: '2025-04-15', type: 'Assignment Deadline' },
//     { id: 3, company: 'TechCorp', position: 'Junior Developer', date: '2025-04-18', type: 'Interview' },
//   ];

//   // Recent activities
//   const recentActivities = [
//     { id: 1, activity: 'Applied to Software Engineer at Google', time: '2 days ago' },
//     { id: 2, activity: 'Received interview invitation from Microsoft', time: '3 days ago' },
//     { id: 3, activity: 'Completed technical assessment for Amazon', time: '5 days ago' },
//     { id: 4, activity: 'Profile viewed by Facebook recruiter', time: '1 week ago' },
//   ];

//   // Filter and sort jobs
//   const filteredJobs = appliedJobs
//     .filter(job => {
//       const jobMatch = job.jobName.toLowerCase().includes(searchTerm.toLowerCase());
//       const companyMatch = job.companyName.toLowerCase().includes(searchCompany.toLowerCase());
//       const statusMatch = statusFilter ? job.status === statusFilter : true;
      
//       return jobMatch && companyMatch && statusMatch;
//     })
//     .sort((a, b) => {
//       if (dateSort === 'desc') {
//         return new Date(b.appliedOn) - new Date(a.appliedOn);
//       } else {
//         return new Date(a.appliedOn) - new Date(b.appliedOn);
//       }
//     });

//   // Calculate pagination
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

//   // AI suggestion text
//   const aiSuggestionText = "Based on your application pattern and industry trends, we recommend enhancing your cloud computing skills with AWS certifications and focusing on system design concepts to improve your technical interview performance. Your application-to-interview conversion rate is 35%, which is 10% below the average for your domain.";

//   // Status color mapping
//   const getStatusColor = (status) => {
//     const statusColors = {
//       'Accepted': 'bg-green-600',
//       'Dis-qualified': 'bg-red-600',
//       'Not Eligible': 'bg-gray-500',
//       'Eligible': 'bg-blue-600',
//       'Round-1': 'bg-indigo-500',
//       'Round-2': 'bg-indigo-600',
//       'Round-3': 'bg-indigo-700',
//       'Interview': 'bg-purple-600',
//       'HR-Round': 'bg-pink-600',
//       'Coding-Round': 'bg-yellow-600',
//       'Applied': 'bg-blue-500',
//     };
//     return statusColors[status] || 'bg-gray-500';
//   };

//   // Calculate skill gaps
//   const skillGaps = [
//     { skill: 'System Design', level: 65 },
//     { skill: 'Algorithm Proficiency', level: 80 },
//     { skill: 'Cloud Computing', level: 50 },
//     { skill: 'Database Management', level: 75 },
//   ];

//   const [expandedRow, setExpandedRow] = useState(null);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Job Application Dashboard</h1>
//           <div className="flex space-x-4">
//             <button className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center text-sm font-medium hover:bg-indigo-700 transition-colors">
//               <Calendar size={16} className="mr-2" />
//               Schedule Interview Prep
//             </button>
//             <button className="px-4 py-2 bg-gray-800 text-white rounded-md flex items-center text-sm font-medium hover:bg-gray-900 transition-colors">
//               <Briefcase size={16} className="mr-2" />
//               Add New Application
//             </button>
//           </div>
//         </div>
        
//         {/* Summary Cards Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Total Applications</p>
//                 <p className="text-2xl font-bold text-gray-800 mt-1">{jobStats.totalApplied}</p>
//               </div>
//               <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
//                 <Briefcase size={24} className="text-blue-600" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="flex items-center">
//                 <span className="text-green-500 text-sm font-medium">+12% </span>
//                 <span className="text-gray-500 text-sm ml-1">from last month</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Interview Rate</p>
//                 <p className="text-2xl font-bold text-gray-800 mt-1">35%</p>
//               </div>
//               <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
//                 <Video size={24} className="text-green-600" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="flex items-center">
//                 <span className="text-red-500 text-sm font-medium">-5% </span>
//                 <span className="text-gray-500 text-sm ml-1">from industry average</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Acceptance Rate</p>
//                 <p className="text-2xl font-bold text-gray-800 mt-1">19%</p>
//               </div>
//               <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
//                 <Award size={24} className="text-purple-600" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="flex items-center">
//                 <span className="text-green-500 text-sm font-medium">+2% </span>
//                 <span className="text-gray-500 text-sm ml-1">from industry average</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Upcoming Deadlines</p>
//                 <p className="text-2xl font-bold text-gray-800 mt-1">3</p>
//               </div>
//               <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
//                 <Clock size={24} className="text-amber-600" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">
//                 View all deadlines
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Main Dashboard Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//           {/* Left Column - Stats and Charts */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow mb-8">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-xl font-semibold text-gray-800">Application Statistics</h2>
//                 <p className="text-sm text-gray-500 mt-1">Overview of your job search progress</p>
//               </div>
//               <div className="p-6">
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                   <div className="p-4 bg-blue-50 rounded-lg">
//                     <p className="text-sm font-medium text-gray-500">Total Jobs</p>
//                     <p className="text-xl font-bold text-gray-800 mt-1">{jobStats.totalJobs}</p>
//                   </div>
//                   <div className="p-4 bg-green-50 rounded-lg">
//                     <p className="text-sm font-medium text-gray-500">Eligible</p>
//                     <p className="text-xl font-bold text-gray-800 mt-1">{jobStats.totalEligible}</p>
//                   </div>
//                   <div className="p-4 bg-red-50 rounded-lg">
//                     <p className="text-sm font-medium text-gray-500">Not Eligible</p>
//                     <p className="text-xl font-bold text-gray-800 mt-1">{jobStats.notEligible}</p>
//                   </div>
//                 </div>
                
//                 <div className="mt-8">
//                   <h3 className="text-base font-medium text-gray-700 mb-4">Application Trends</h3>
//                   <ResponsiveContainer width="100%" height={200}>
//                     <LineChart data={jobStats.applicationRate}>
//                       <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                       <XAxis dataKey="month" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={2} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//                   <div>
//                     <h3 className="text-base font-medium text-gray-700 mb-4">Application Status</h3>
//                     <ResponsiveContainer width="100%" height={200}>
//                       <PieChart>
//                         <Pie 
//                           data={statusChartData} 
//                           cx="50%" 
//                           cy="50%" 
//                           innerRadius={60}
//                           outerRadius={80} 
//                           paddingAngle={2}
//                           dataKey="value"
//                         >
//                           {statusChartData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={entry.color} />
//                           ))}
//                         </Pie>
//                         <Tooltip />
//                         <Legend />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
                  
//                   <div>
//                     <h3 className="text-base font-medium text-gray-700 mb-4">Eligibility Breakdown</h3>
//                     <ResponsiveContainer width="100%" height={200}>
//                       <PieChart>
//                         <Pie 
//                           data={eligibilityChartData} 
//                           cx="50%" 
//                           cy="50%" 
//                           innerRadius={60}
//                           outerRadius={80} 
//                           paddingAngle={2}
//                           dataKey="value"
//                         >
//                           {eligibilityChartData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={entry.color} />
//                           ))}
//                         </Pie>
//                         <Tooltip />
//                         <Legend />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* AI Insights */}
//             <div className="bg-white rounded-lg shadow mb-8">
//               <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-center">
//                   <Brain size={20} className="text-indigo-600 mr-2" />
//                   <h2 className="text-xl font-semibold text-gray-800">AI Career Insights</h2>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="mb-6">
//                   <p className="italic text-gray-700">{aiSuggestionText}</p>
//                 </div>
                
//                 <div className="mt-6">
//                   <h3 className="text-base font-medium text-gray-700 mb-4">Skill Gap Analysis</h3>
//                   <div className="space-y-4">
//                     {skillGaps.map((skill) => (
//                       <div key={skill.skill}>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
//                           <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div 
//                             className="bg-indigo-600 h-2 rounded-full" 
//                             style={{ width: `${skill.level}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="mt-6">
//                   <h3 className="text-base font-medium text-gray-700 mb-3">Recommended Actions</h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-start">
//                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
//                         <span className="h-2 w-2 rounded-full bg-green-600"></span>
//                       </div>
//                       <span className="ml-2 text-sm text-gray-700">Complete the AWS Cloud Practitioner certification</span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
//                         <span className="h-2 w-2 rounded-full bg-green-600"></span>
//                       </div>
//                       <span className="ml-2 text-sm text-gray-700">Practice system design concepts on our interactive platform</span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
//                         <span className="h-2 w-2 rounded-full bg-green-600"></span>
//                       </div>
//                       <span className="ml-2 text-sm text-gray-700">Schedule 2 mock interviews focusing on technical questions</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Column - Upcoming activities */}
//           <div>
//             {/* Upcoming Deadlines */}
//             <div className="bg-white rounded-lg shadow mb-8">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-xl font-semibold text-gray-800">Upcoming Deadlines</h2>
//                 <p className="text-sm text-gray-500 mt-1">Next steps and important dates</p>
//               </div>
//               <div className="p-4">
//                 <ul className="divide-y divide-gray-200">
//                   {upcomingDeadlines.map((deadline) => (
//                     <li key={deadline.id} className="py-4 px-2">
//                       <div className="flex justify-between">
//                         <div>
//                           <p className="text-sm font-medium text-gray-900">{deadline.company}</p>
//                           <p className="text-sm text-gray-500">{deadline.position}</p>
//                         </div>
//                         <div className="text-right">
//                           <p className="text-sm font-semibold text-indigo-600">{deadline.type}</p>
//                           <p className="text-sm text-gray-500">{deadline.date}</p>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="p-4 text-center">
//                   <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800">
//                     View all deadlines
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Recent Activity */}
//             <div className="bg-white rounded-lg shadow mb-8">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
//               </div>
//               <div className="p-4">
//                 <ul className="divide-y divide-gray-200">
//                   {recentActivities.map((activity) => (
//                     <li key={activity.id} className="py-3 px-2">
//                       <div>
//                         <p className="text-sm text-gray-800">{activity.activity}</p>
//                         <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="p-4 text-center">
//                   <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800">
//                     View all activity
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Learning Resources */}
//             <div className="bg-white rounded-lg shadow">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-xl font-semibold text-gray-800">Learning Resources</h2>
//               </div>
//               <div className="p-6">
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <div className="flex-shrink-0 h-10 w-10 rounded bg-blue-100 flex items-center justify-center">
//                       <BookOpen size={20} className="text-blue-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-900">System Design Fundamentals</p>
//                       <p className="text-xs text-gray-500 mt-1">Learn how to approach system design interviews</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="flex-shrink-0 h-10 w-10 rounded bg-green-100 flex items-center justify-center">
//                       <Code size={20} className="text-green-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-900">Data Structures & Algorithms</p>
//                       <p className="text-xs text-gray-500 mt-1">Comprehensive course with 200+ practice problems</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="flex-shrink-0 h-10 w-10 rounded bg-purple-100 flex items-center justify-center">
//                       <Video size={20} className="text-purple-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-900">Behavioral Interview Prep</p>
//                       <p className="text-xs text-gray-500 mt-1">Techniques to answer situational questions</p>
//                     </div>
//                   </li>
//                 </ul>
//                 <div className="mt-6">
//                   <button className="w-full px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium hover:bg-indigo-200 transition-colors">
//                     Explore all resources
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Applications Table */}
//         <div className="bg-white rounded-lg shadow mb-8">
//           <div className="p-6 border-b border-gray-200">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">Job Applications</h2>
//                 <p className="text-sm text-gray-500 mt-1">Track all your job applications</p>
//               </div>
//               <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//                   <input 
//                     type="text" 
//                     placeholder="Search job title..." 
//                     className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//                 <div className="relative">
//                   <Briefcase className="absolute left-3 top-2.5 text-gray-400" size={16} />
//                   <input 
//                     type="text" 
//                     placeholder="Filter by company..." 
//                     className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
//                     value={searchCompany}
//                     onChange={(e) => setSearchCompany(e.target.value)}
//                   />
//                 </div>
//                 <select
//   className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
//   value={statusFilter}
//   onChange={(e) => setStatusFilter(e.target.value)}
// >
//   <option value="">All Statuses</option>
//   <option value="Applied">Applied</option>
//   <option value="Round-1">Round 1</option>
//   <option value="Round-2">Round 2</option>
//   <option value="Round-3">Round 3</option>
//   <option value="Coding-Round">Coding Round</option>
//   <option value="Interview">Interview</option>
//   <option value="HR-Round">HR Round</option>
//   <option value="Accepted">Accepted</option>
//   <option value="Dis-qualified">Disqualified</option>
//   <option value="Not Eligible">Not Eligible</option>
// </select>
// <select
//   className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
//   value={dateSort}
//   onChange={(e) => setDateSort(e.target.value)}
// >
//   <option value="desc">Newest First</option>
//   <option value="asc">Oldest First</option>
// </select>
// </div>
// </div>
// </div>

// <div className="p-6">
// {filteredJobs.length === 0 ? (
//   <div className="text-center py-10">
//     <p className="text-gray-500 text-lg">No applications found matching your criteria</p>
//     <button 
//       className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
//       onClick={() => {
//         setSearchTerm('');
//         setSearchCompany('');
//         setStatusFilter('');
//       }}
//     >
//       Clear filters
//     </button>
//   </div>
// ) : (
//   <div className="overflow-x-auto">
//     <table className="min-w-full divide-y divide-gray-200">
//       <thead className="bg-gray-50">
//         <tr>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             S.No.
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Applied On
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Company
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Position
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Status
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Result Expected
//           </th>
//           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Actions
//           </th>
//         </tr>
//       </thead>
//       <tbody className="bg-white divide-y divide-gray-200">
//         {currentJobs.map((job, index) => (
//           <React.Fragment key={job.id}>
//             <tr 
//               className={`hover:bg-gray-50 ${expandedRow === job.id ? 'bg-blue-50' : ''}`}
//               onClick={() => setExpandedRow(expandedRow === job.id ? null : job.id)}
//             >
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                 {indexOfFirstJob + index + 1}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 {job.appliedOn}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm font-medium text-gray-900">{job.companyName}</div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900">{job.jobName}</div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full text-white ${getStatusColor(job.status)}`}>
//                   {job.status}
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 {job.resultExpectedDate}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 <button className="text-indigo-600 hover:text-indigo-900 mr-3">
//                   Edit
//                 </button>
//                 <button className="text-indigo-600 hover:text-indigo-900">
//                   {expandedRow === job.id ? 'Hide' : 'View'}
//                 </button>
//               </td>
//             </tr>
//             {expandedRow === job.id && (
//               <tr>
//                 <td colSpan="7" className="px-6 py-4 bg-blue-50">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-500">Location</h4>
//                       <p className="text-sm text-gray-900">{job.location}</p>
//                     </div>
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-500">Salary Range</h4>
//                       <p className="text-sm text-gray-900">{job.salary}</p>
//                     </div>
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-500">Job Description</h4>
//                       <p className="text-sm text-gray-900">{job.description}</p>
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500 mb-2">Required Skills</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {job.skills.map((skill, i) => (
//                         <span 
//                           key={i} 
//                           className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mt-4 flex space-x-3">
//                     <button className="px-3 py-1 bg-indigo-600 text-white text-xs rounded">
//                       View Full Application
//                     </button>
//                     <button className="px-3 py-1 bg-green-600 text-white text-xs rounded">
//                       Track Progress
//                     </button>
//                     <button className="px-3 py-1 bg-purple-600 text-white text-xs rounded">
//                       Add Notes
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   </div>
// )}

// {/* Pagination */}
// {filteredJobs.length > 0 && (
//   <div className="flex justify-between items-center mt-6">
//     <p className="text-sm text-gray-700">
//       Showing {indexOfFirstJob + 1} to {Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} results
//     </p>
//     <div className="flex space-x-2">
//       <button
//         onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//         disabled={currentPage === 1}
//         className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//       >
//         <ChevronLeft size={16} />
//       </button>
//       {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
//         let pageNumber;
//         if (totalPages <= 5) {
//           pageNumber = i + 1;
//         } else if (currentPage <= 3) {
//           pageNumber = i + 1;
//         } else if (currentPage >= totalPages - 2) {
//           pageNumber = totalPages - 4 + i;
//         } else {
//           pageNumber = currentPage - 2 + i;
//         }
//         return (
//           <button
//             key={pageNumber}
//             onClick={() => setCurrentPage(pageNumber)}
//             className={`px-3 py-1 border rounded-md text-sm ${
//               currentPage === pageNumber 
//                 ? 'bg-indigo-600 text-white border-indigo-600' 
//                 : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//             }`}
//           >
//             {pageNumber}
//           </button>
//         );
//       })}
//       <button
//         onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//         disabled={currentPage === totalPages}
//         className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//       >
//         <ChevronRight size={16} />
//       </button>
//     </div>
//   </div>
// )}
// </div>
// </div>

// {/* Skills Enhancement */}
// <div className="bg-white rounded-lg shadow mb-8">
// <div className="p-6 border-b border-gray-200">
//   <h2 className="text-xl font-semibold text-gray-800">Skills Enhancement</h2>
//   <p className="text-sm text-gray-500 mt-1">Tools to improve your job search and interview performance</p>
// </div>
// <div className="p-6">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//     <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
//       <div className="bg-blue-600 h-2"></div>
//       <div className="p-5">
//         <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
//           <FileText size={20} className="text-blue-600" />
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Problem Solving</h3>
//         <p className="text-sm text-gray-600 mb-4">Practice with 200+ coding challenges tailored to your target companies</p>
//         <div className="mt-2">
//           <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mr-2">Algorithms</span>
//           <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Data Structures</span>
//         </div>
//         <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
//           Start Practicing
//         </button>
//       </div>
//     </div>
    
//     <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
//       <div className="bg-purple-600 h-2"></div>
//       <div className="p-5">
//         <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
//           <TrendingUp size={20} className="text-purple-600" />
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Resume Enhancement</h3>
//         <p className="text-sm text-gray-600 mb-4">Get personalized feedback and optimization tips from industry experts</p>
//         <div className="mt-2">
//           <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mr-2">ATS Optimization</span>
//           <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Keyword Analysis</span>
//         </div>
//         <button className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
//           Improve Resume
//         </button>
//       </div>
//     </div>
    
//     <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
//       <div className="bg-amber-600 h-2"></div>
//       <div className="p-5">
//         <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
//           <Video size={20} className="text-amber-600" />
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Mock Interviews</h3>
//         <p className="text-sm text-gray-600 mb-4">Practice with realistic interview simulations and receive expert feedback</p>
//         <div className="mt-2">
//           <span className="inline-block px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full mr-2">Technical</span>
//           <span className="inline-block px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">Behavioral</span>
//         </div>
//         <button className="mt-4 w-full px-4 py-2 bg-amber-600 text-white rounded-md text-sm font-medium hover:bg-amber-700 transition-colors">
//           Schedule Session
//         </button>
//       </div>
//     </div>
    
//     <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
//       <div className="bg-green-600 h-2"></div>
//       <div className="p-5">
//         <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
//           <Brain size={20} className="text-green-600" />
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Suggestions</h3>
//         <p className="text-sm text-gray-600 mb-4">Get customized career advice and skill improvement recommendations</p>
//         <div className="mt-2">
//           <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mr-2">Career Path</span>
//           <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Skill Building</span>
//         </div>
//         <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
//           View Insights
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </div>
// );
// };

// export default JobDashboard;


// BELOW is another proffesional-WAY:

import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Calendar, ChevronLeft, ChevronRight, Code, FileText, MessageSquare, Star, Sparkles, Briefcase, CheckCircle, XCircle, Clock, TrendingUp, AlertCircle } from 'lucide-react';

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
    successRate: 28.6 // percentage of applied jobs that were accepted
  };
  
  const aiSuggestion = "Based on your application history and the current job market trends, we recommend focusing on enhancing your SQL and data visualization skills. Consider adding projects that demonstrate experience with database management and data analysis to increase your success rate with tech companies.";
  
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  
  const monthlyApplicationData = [
    { name: 'Jan', applications: 3, interviews: 1, offers: 0 },
    { name: 'Feb', applications: 5, interviews: 2, offers: 1 },
    { name: 'Mar', applications: 8, interviews: 4, offers: 2 },
    { name: 'Apr', applications: 12, interviews: 5, offers: 3 }
  ];
  
  const jobApplications = [
    { id: 1, appliedOn: '2025-03-15', resultExpectedDate: '2025-04-10', companyName: 'TechInnovate', jobTitle: 'Junior Software Developer', location: 'San Francisco, CA', salary: '$75,000-$90,000', status: 'Round-2' },
    { id: 2, appliedOn: '2025-03-18', resultExpectedDate: '2025-04-12', companyName: 'DataVision Corp', jobTitle: 'Data Analyst Intern', location: 'Remote', salary: '$25/hr', status: 'HR-Round' },
    { id: 3, appliedOn: '2025-03-20', resultExpectedDate: '2025-04-15', companyName: 'CloudSphere', jobTitle: 'Cloud Engineer Trainee', location: 'Seattle, WA', salary: '$80,000-$95,000', status: 'Coding-Round' },
    { id: 4, appliedOn: '2025-03-22', resultExpectedDate: '2025-04-20', companyName: 'WebFront Systems', jobTitle: 'Frontend Developer', location: 'Austin, TX', salary: '$70,000-$85,000', status: 'Accepted' },
    { id: 5, appliedOn: '2025-03-25', resultExpectedDate: '2025-04-22', companyName: 'SecureNet', jobTitle: 'Cybersecurity Analyst', location: 'Boston, MA', salary: '$85,000-$100,000', status: 'Not Eligible' },
    { id: 6, appliedOn: '2025-03-28', resultExpectedDate: '2025-04-25', companyName: 'MobileFirst', jobTitle: 'Mobile App Developer', location: 'New York, NY', salary: '$90,000-$110,000', status: 'Interview' },
    { id: 7, appliedOn: '2025-03-30', resultExpectedDate: '2025-04-28', companyName: 'AI Solutions', jobTitle: 'ML Engineer Intern', location: 'Chicago, IL', salary: '$30/hr', status: 'Round-1' },
    { id: 8, appliedOn: '2025-04-01', resultExpectedDate: '2025-04-30', companyName: 'DevOps Pro', jobTitle: 'DevOps Intern', location: 'Atlanta, GA', salary: '$28/hr', status: 'Eligible' },
    { id: 9, appliedOn: '2025-04-02', resultExpectedDate: '2025-05-02', companyName: 'FinTech Innovations', jobTitle: 'Software Engineer', location: 'Miami, FL', salary: '$75,000-$95,000', status: 'Disqualified' },
    { id: 10, appliedOn: '2025-04-03', resultExpectedDate: '2025-05-05', companyName: 'EduTech Systems', jobTitle: 'Full Stack Developer', location: 'Denver, CO', salary: '$80,000-$100,000', status: 'Applied' },
    { id: 11, appliedOn: '2025-04-05', resultExpectedDate: '2025-05-10', companyName: 'HealthIT', jobTitle: 'Backend Developer', location: 'San Diego, CA', salary: '$85,000-$105,000', status: 'Round-3' },
    { id: 12, appliedOn: '2025-04-07', resultExpectedDate: '2025-05-12', companyName: 'RetailTech', jobTitle: 'UI/UX Developer Intern', location: 'Portland, OR', salary: '$26/hr', status: 'Not Applied' }
  ];
  
  // Skills to enhance based on market trends
  const skillsToEnhance = [
    { skill: 'Data Structures & Algorithms', demand: 'High', relevance: 95 },
    { skill: 'React/Frontend Development', demand: 'High', relevance: 90 },
    { skill: 'Cloud Services (AWS/Azure)', demand: 'Very High', relevance: 88 },
    { skill: 'Machine Learning Basics', demand: 'Medium', relevance: 75 }
  ];
  
  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobApplications.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobApplications.length / jobsPerPage);
  
  // Pie chart data for job status
  const jobStatusData = [
    { name: 'Accepted', value: jobStats.accepted, color: '#2e7d32' },
    { name: 'Rejected', value: jobStats.rejected, color: '#c62828' },
    { name: 'In Progress', value: jobStats.inProgress, color: '#1565c0' }
  ];
  
  // Pie chart data for eligibility status
  const eligibilityStatusData = [
    { name: 'Eligible', value: jobStats.eligible, color: '#2e7d32' },
    { name: 'Not Eligible', value: jobStats.notEligible, color: '#c62828' }
  ];
  
  // Get status color based on status string
  const getStatusColor = (status) => {
    const statusColors = {
      'Accepted': 'bg-green-700',
      'Not Eligible': 'bg-red-700',
      'Eligible': 'bg-blue-700',
      'Disqualified': 'bg-red-700',
      'Round-1': 'bg-amber-700',
      'Round-2': 'bg-amber-700',
      'Round-3': 'bg-amber-700',
      'Interview': 'bg-purple-700',
      'HR-Round': 'bg-indigo-700',
      'Coding-Round': 'bg-cyan-700',
      'Applied': 'bg-blue-700',
      'Not Applied': 'bg-gray-600'
    };
    
    return statusColors[status] || 'bg-gray-600';
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with dashboard title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Job Dashboard</h1>
          <p className="text-gray-600">Track your job applications, analyze your performance, and enhance your career prospects</p>
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
              <p className="text-xs text-gray-500 mt-1">{Math.round(jobStats.eligible/jobStats.totalJobs*100)}% of total jobs</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 col-span-1">
              <div className="flex items-center mb-2">
                <XCircle size={18} className="text-red-700 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Not Eligible</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{jobStats.notEligible}</p>
              <p className="text-xs text-gray-500 mt-1">{Math.round(jobStats.notEligible/jobStats.totalJobs*100)}% of total jobs</p>
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
                        <span className={`text-xs px-2 py-1 rounded-full ${skill.demand === 'High' || skill.demand === 'Very High' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {skill.demand}
                        </span>
                      </div>
                      <div className="mt-2 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-blue-700 h-full rounded-full" 
                          style={{ width: `${skill.relevance}%` }}
                        ></div>
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
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700">Export Data</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">S.No.</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Applied On</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Expected Result</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Company</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Job Title</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Location</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Salary</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentJobs.map((job, index) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900 border-b">{indexOfFirstJob + index + 1}</td>
                    <td className="py-3 px-4 text-sm text-gray-500 border-b">{formatDate(job.appliedOn)}</td>
                    <td className="py-3 px-4 text-sm text-gray-500 border-b">{formatDate(job.resultExpectedDate)}</td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 border-b">{job.companyName}</td>
                    <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.jobTitle}</td>
                    <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.location}</td>
                    <td className="py-3 px-4 text-sm text-gray-500 border-b">{job.salary}</td>
                    <td className="py-3 px-4 border-b">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {indexOfFirstJob + 1} to {Math.min(indexOfLastJob, jobApplications.length)} of {jobApplications.length} applications
            </p>
            <div className="flex space-x-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-md border ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed border-gray-200' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-50 border border-gray-300'}`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-md border ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed border-gray-200' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* CARD 3: Skill Enhancement */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Career Development Resources</h2>
            <div className="text-sm text-gray-500">Tailored to your profile and application history</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 text-white rounded-full">
                  <Code size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Problem Solving</h3>
              <p className="text-sm text-center text-gray-600 mb-4">Practice technical interviews with customized coding challenges based on your target roles</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>Progress</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full">
                <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <button className="mt-4 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">Continue Practice</button>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 text-white rounded-full">
                  <FileText size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Resume Analysis</h3>
              <p className="text-sm text-center text-gray-600 mb-4">Get professional feedback on your resume with AI-powered optimization for ATS systems</p>
              <ul className="text-xs text-gray-600 mb-4 space-y-1">
                <li className="flex items-center"><CheckCircle size={12} className="text-green-600 mr-1" /> Keyword optimization</li>
                <li className="flex items-center"><CheckCircle size={12} className="text-green-600 mr-1" /> Format improvement</li>
                <li className="flex items-center"><CheckCircle size={12} className="text-green-600 mr-1" /> Content suggestions</li>
              </ul>
              <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">Analyze Resume</button>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 text-white rounded-full">
                  <MessageSquare size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Interview Prep</h3>
              <p className="text-sm text-center text-gray-600 mb-4">Practice with industry-specific mock interviews and receive personalized feedback</p>
              <div className="bg-gray-50 rounded p-2 mb-3">
                <div className="text-xs font-medium mb-1">Recently added:</div>
                <div className="text-sm">System Design Interview for Tech Roles</div>
              </div>
              <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">Schedule Practice</button>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 text-white rounded-full">
                  <TrendingUp size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Skills Assessment</h3>
              <p className="text-sm text-center text-gray-600 mb-4">Identify skill gaps and receive personalized learning paths based on job market trends</p>
              <div className="relative pt-1 mb-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Top skill match: React Development</span>
                  <span>78%</span>
                </div>
                <div className="overflow-hidden h-1.5 text-xs flex rounded-full bg-gray-200">
                  <div style={{ width: "78%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"></div>
                </div>
              </div>
              <button className="mt-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm">View Full Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDashboard;