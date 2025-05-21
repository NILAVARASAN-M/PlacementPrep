import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Trophy, CheckCircle, Clock, 
  Calendar, BookOpen, BarChart, Bookmark , Code, Zap
  , HelpCircle, Cpu, Database, Activity, Hash } from 'lucide-react';

  import {ArrowUp, Star } from 'lucide-react';

// import {Filter, XCircle,Target, ArrowUpRight, Star, ExternalLink, TrendingUp, Users, AlertCircle, BarChart2} from 'lucide-react'
  
// Mock data
const mockProblems = [
  { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved", popularity: "High", submitCount: 842, acceptRate: "91%", tags: ["Array", "Hash Table", "Google", "Amazon"], lastAttempted: "2 days ago" },
  { id: 2, title: "Add Two Numbers", difficulty: "Medium", status: "Attempted", popularity: "High", submitCount: 712, acceptRate: "76%", tags: ["Linked List", "Math", "Microsoft"], lastAttempted: "1 week ago" },
  { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Unsolved", popularity: "Medium", submitCount: 532, acceptRate: "68%", tags: ["String", "Sliding Window", "Facebook"], lastAttempted: null },
  { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", status: "Unsolved", popularity: "Low", submitCount: 321, acceptRate: "43%", tags: ["Array", "Binary Search", "Google"], lastAttempted: null },
  { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", status: "Solved", popularity: "Medium", submitCount: 498, acceptRate: "72%", tags: ["String", "Dynamic Programming", "Amazon"], lastAttempted: "3 days ago" },
  { id: 6, title: "ZigZag Conversion", difficulty: "Medium", status: "Unsolved", popularity: "Low", submitCount: 289, acceptRate: "65%", tags: ["String", "Apple"], lastAttempted: null },
  { id: 7, title: "Reverse Integer", difficulty: "Medium", status: "Solved", popularity: "Medium", submitCount: 456, acceptRate: "84%", tags: ["Math", "Microsoft"], lastAttempted: "5 days ago" },
  { id: 8, title: "String to Integer (atoi)", difficulty: "Medium", status: "Attempted", popularity: "Medium", submitCount: 387, acceptRate: "59%", tags: ["String", "Facebook"], lastAttempted: "2 weeks ago" },
  { id: 9, title: "Palindrome Number", difficulty: "Easy", status: "Solved", popularity: "High", submitCount: 632, acceptRate: "89%", tags: ["Math", "Google"], lastAttempted: "1 day ago" },
  { id: 10, title: "Regular Expression Matching", difficulty: "Hard", status: "Unsolved", popularity: "Low", submitCount: 267, acceptRate: "39%", tags: ["String", "Dynamic Programming", "Recursion", "Amazon"], lastAttempted: null },
  { id: 11, title: "Container With Most Water", difficulty: "Medium", status: "Solved", popularity: "Medium", submitCount: 421, acceptRate: "77%", tags: ["Array", "Two Pointers", "Google"], lastAttempted: "1 week ago" },
  { id: 12, title: "Integer to Roman", difficulty: "Medium", status: "Attempted", popularity: "Medium", submitCount: 345, acceptRate: "81%", tags: ["Math", "String", "Amazon"], lastAttempted: "3 weeks ago" },
];

// Recent activity
const recentActivity = [
  { id: 1, type: "problem", status: "Solved", title: "Palindrome Number", time: "1 day ago" },
  { id: 2, type: "contest", status: "Participated", title: "Weekly Contest 287", time: "2 days ago" },
  { id: 3, type: "problem", status: "Attempted", title: "Add Two Numbers", time: "1 week ago" },
];

// Upcoming contests
const upcomingContests = [
  { id: 1, title: "Weekly Coding Challenge", date: "Mar 25, 2025", time: "8:00 PM - 10:00 PM", registered: true },
  { id: 2, title: "Google CodeJam Round 1", date: "Apr 02, 2025", time: "10:00 AM - 1:00 PM", registered: false },
];

// Recommended problems
const recommendedProblems = [
  { id: 13, title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Tree", "BFS"] },
  { id: 14, title: "Merge Intervals", difficulty: "Medium", tags: ["Array", "Sorting"] },
  { id: 15, title: "LRU Cache", difficulty: "Medium", tags: ["Hash Table", "Linked List", "Design"] },
];

// Companies actively recruiting
const activeRecruiters = [
  { name: "Google", openings: 12, problemCount: 78 },
  { name: "Amazon", openings: 23, problemCount: 92 },
  { name: "Microsoft", openings: 15, problemCount: 65 },
  { name: "Meta", openings: 8, problemCount: 43 },
];

// User stats
const userStats = {
  totalSolved: 5,
  totalProblems: mockProblems.length,
  streak: 16,
  rank: 1522,
  totalParticipants: 15240,
  percentile: 10,
  scoreBreakdown: {
    easy: { solved: 2, total: 2, percentage: 100 },
    medium: { solved: 3, total: 7, percentage: 43 },
    hard: { solved: 0, total: 3, percentage: 0 },
  },
  skillScores: [
    { name: "Arrays", score: 85 },
    { name: "Strings", score: 72 },
    { name: "Dynamic Programming", score: 45 },
    { name: "Trees", score: 68 },
    { name: "Graphs", score: 32 },
  ],
  upcomingInterviews: [
    { company: "Google", date: "Mar 20, 2025", position: "Software Engineer" },
    { company: "Microsoft", date: "Mar 24, 2025", position: "Frontend Developer" },
  ]
};

// Sample data - replace with actual data in your application
const userData = {
  name: "Alex",
  streak: 12,
  solved: 418,
  total: 3495,
  rank: 1243,
  totalParticipants: 12500,
  percentile: 10,
  recentProgress: 8, // % increase from last week
  categories: {
    easy: { solved: 215, total: 868 },
    medium: { solved: 188, total: 815 },
    hard: { solved: 15, total: 812 }
  },
  tags: [
    { name: "Array", solved: 126, total: 450 },
    { name: "Linked List", solved: 64, total: 120 },
    { name: "Tree", solved: 52, total: 210 },
    { name: "Graph", solved: 22, total: 180 },
    { name: "String", solved: 78, total: 230 },
    { name: "Dynamic Programming", solved: 35, total: 175 },
    { name: "Sorting", solved: 42, total: 95 },
    { name: "Google", solved: 45, total: 75 },
    { name: "Amazon", solved: 32, total: 80 },
    { name: "Microsoft", solved: 28, total: 65 }
  ]
};

export default function ProblemSolvingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [viewMode, setViewMode] = useState('all'); // 'all', 'company', 'topic'
  const [activeTab, setActiveTab] = useState('problems'); // 'problems', 'activity', 'contests', 'study-plan'
  
  // Problems per page
  const problemsPerPage = 8;
  // Calculate percentages
  const totalPercentage = Math.round((userData.solved / userData.total) * 100);
  // Get tag color based on completion percentage
  const getTagBackground = (solved, total) => {
    const percentage = (solved / total) * 100;
    if (percentage >= 80) return "from-green-400 to-green-500";
    if (percentage >= 50) return "from-blue-400 to-blue-500";
    if (percentage >= 30) return "from-yellow-400 to-yellow-500";
    return "from-gray-400 to-gray-500";
  };
  
  // Filter problems based on search and filters
  const filteredProblems = mockProblems.filter(problem => {
    const matchesSearch = searchTerm === '' || 
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = filterDifficulty === '' || problem.difficulty === filterDifficulty;
    const matchesStatus = filterStatus === '' || problem.status === filterStatus;
    const matchesTag = filterTag === '' || problem.tags.includes(filterTag);
    
    return matchesSearch && matchesDifficulty && matchesStatus && matchesTag;
  });
  
  // Get current problems
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  
  // Calculate progress percentage
  const progressPercentage = (userStats.totalSolved / userStats.totalProblems) * 100;
  
  // Page change handlers
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  
  // Get popular tags from all problems
  const allTags = mockProblems.flatMap(problem => problem.tags);
  const tagCounts = allTags.reduce<Record<string, number>>((acc, tag) => {
  acc[tag] = (acc[tag] || 0) + 1;
  return acc;
}, {});

  
  const popularTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([tag]) => tag);
  
  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Problem Solving Hub</h1>
            <p className="text-gray-600">Sharpen your skills with coding problems</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button className="text-blue-600 hover:text-blue-800 px-3 py-1 text-sm font-medium">Dashboard</button>
            <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-700">
              Start Daily Challenge
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-xl shadow-xl p-6 border border-blue-100">
      {/* Header section with greeting and streak */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome back, {userData.name}!
          </h2>
          <p className="text-gray-600 mt-1 italic">
            "Success is not final, failure is not fatal: It is the courage to continue that counts."
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg text-sm flex items-center shadow-md">
            <Clock size={16} className="mr-2" /> Last Session: 2 days ago
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm flex items-center shadow-md">
            <Zap size={16} className="mr-2" /> {userData.streak} Day Streak
          </div>
        </div>
      </div>
      
      {/* Main stats area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Overall progress */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md col-span-1 lg:col-span-2 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-blue-50 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute right-8 bottom-6 text-blue-100 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            <Code size={80} />
          </div>
          
          <div className="flex items-center mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-sm mr-3">
              <Code size={22} className="text-white" />
            </div>
            <h3 className="font-bold text-gray-800 text-xl">Problems Solved</h3>
            <div className="ml-auto flex items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
              <ArrowUp size={14} className="mr-1" />
              {userData.recentProgress}% from last week
            </div>
          </div>
          
          <div className="flex items-baseline mb-5">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{userData.solved}</span>
            <span className="text-lg text-gray-500 ml-2">/ {userData.total}</span>
            <span className="ml-3 text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <CheckCircle size={14} className="mr-1" />
              Solved
            </span>
          </div>
          
          <div className="w-full h-3 bg-gray-100 rounded-full mb-3 overflow-hidden relative">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-700 ease-out absolute" 
              style={{ width: `${totalPercentage}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-gray-500 flex justify-between">
            <span>Overall Progress</span>
            <span className="font-semibold">{totalPercentage}% Complete</span>
          </div>
        </div>
        
        {/* Competition Rank */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-yellow-50 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute right-6 bottom-6 text-yellow-100 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            <Trophy size={60} />
          </div>
          
          <div className="flex items-center mb-4">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-sm mr-3">
              <Trophy size={22} className="text-white" />
            </div>
            <h3 className="font-bold text-gray-800 text-xl">Competition Rank</h3>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-baseline mb-1">
              <span className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Top {userData.percentile}%
              </span>
            </div>
            <span className="text-gray-500 mb-4">Rank #{userData.rank} of {userData.totalParticipants.toLocaleString()}</span>
            
            <div className="mt-2 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full">
                <Star size={16} className="text-white" />
              </div>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" 
                  style={{ width: `${100 - userData.percentile}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Difficulty breakdown */}
      <div className="mb-8">
        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
          <Hash size={20} className="mr-2 text-gray-500" />
          Difficulty Breakdown
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Easy problems */}
          <div className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-5 shadow-md group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <CheckCircle size={60} className="text-green-800" />
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-semibold text-green-800">Easy</span>
              </div>
              <span className="text-xs bg-white text-green-700 px-3 py-1 rounded-full shadow-sm border border-green-200 font-medium">
                {Math.round((userData.categories.easy.solved / userData.categories.easy.total) * 100)}%
              </span>
            </div>
            <div className="flex items-baseline mb-3">
              <span className="text-3xl font-bold text-green-700">{userData.categories.easy.solved}</span>
              <span className="text-sm text-gray-500 ml-2">/{userData.categories.easy.total}</span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" 
                style={{ width: `${(userData.categories.easy.solved / userData.categories.easy.total) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Medium problems */}
          <div className="bg-gradient-to-br from-white to-yellow-50 border border-yellow-200 rounded-xl p-5 shadow-md group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <CheckCircle size={60} className="text-yellow-800" />
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm font-semibold text-yellow-800">Medium</span>
              </div>
              <span className="text-xs bg-white text-yellow-700 px-3 py-1 rounded-full shadow-sm border border-yellow-200 font-medium">
                {Math.round((userData.categories.medium.solved / userData.categories.medium.total) * 100)}%
              </span>
            </div>
            <div className="flex items-baseline mb-3">
              <span className="text-3xl font-bold text-yellow-700">{userData.categories.medium.solved}</span>
              <span className="text-sm text-gray-500 ml-2">/{userData.categories.medium.total}</span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" 
                style={{ width: `${(userData.categories.medium.solved / userData.categories.medium.total) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Hard problems */}
          <div className="bg-gradient-to-br from-white to-red-50 border border-red-200 rounded-xl p-5 shadow-md group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <CheckCircle size={60} className="text-red-800" />
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm font-semibold text-red-800">Hard</span>
              </div>
              <span className="text-xs bg-white text-red-700 px-3 py-1 rounded-full shadow-sm border border-red-200 font-medium">
                {Math.round((userData.categories.hard.solved / userData.categories.hard.total) * 100)}%
              </span>
            </div>
            <div className="flex items-baseline mb-3">
              <span className="text-3xl font-bold text-red-700">{userData.categories.hard.solved}</span>
              <span className="text-sm text-gray-500 ml-2">/{userData.categories.hard.total}</span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full" 
                style={{ width: `${(userData.categories.hard.solved / userData.categories.hard.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tag breakdown - LeetCode style */}
      <div>
        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
          <Hash size={20} className="mr-2 text-gray-500" />
          Problem Tags
        </h3>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md">
          <div className="flex flex-wrap gap-3">
            {userData.tags.map((tag, index) => {
              const percentage = Math.round((tag.solved / tag.total) * 100);
              return (
                <div key={index} className="group">
                  <div className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${getTagBackground(tag.solved, tag.total)} text-white shadow-sm hover:shadow transform hover:-translate-y-1 transition-all duration-300`}>
                    <span className="font-medium text-sm">{tag.name}</span>
                    <span className="ml-2 px-2 py-0.5 bg-white bg-opacity-30 rounded-full text-xs font-bold">
                      {tag.solved}
                    </span>
                    <div className="ml-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 flex items-center whitespace-nowrap">
                      <span className="text-xs">/{tag.total}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

        

        
        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 border border-gray-100 mt-4">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button 
                className={`py-4 px-6 font-medium text-sm inline-flex items-center ${activeTab === 'problems' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('problems')}
              >
                <Code size={16} className="mr-2" />
                Problems
              </button>
              <button 
                className={`py-4 px-6 font-medium text-sm inline-flex items-center ${activeTab === 'activity' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('activity')}
              >
                <Activity size={16} className="mr-2" />
                Recent Activity
              </button>
              <button 
                className={`py-4 px-6 font-medium text-sm inline-flex items-center ${activeTab === 'contests' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('contests')}
              >
                <Trophy size={16} className="mr-2" />
                Contests
              </button>
              {<button 
                className={`py-4 px-6 font-medium text-sm inline-flex items-center ${activeTab === 'study-plan' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('study-plan')}
              >
                <BookOpen size={16} className="mr-2" />
                Study Plan
              </button>}
            </nav>
          </div>
          
          {activeTab === 'problems' && (
            <div className="p-6">
              {/* Problem View Tabs */}
              <div className="flex mb-6 space-x-2">
                <button 
                  className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'all' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setViewMode('all')}
                >
                  All Problems
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'company' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setViewMode('company')}
                >
                  By Company
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'topic' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setViewMode('topic')}
                >
                  By Topic
                </button>
              </div>
              
              {/* Main content layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sidebar with stats and filters */}
                <div className="lg:col-span-1">
                  {/* Problem Solving Progress */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">Total Solved: {userStats.totalSolved}/{userStats.totalProblems}</span>
                        <span className="text-sm font-medium text-blue-600">{progressPercentage.toFixed(1)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full" 
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Difficulty breakdown */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Easy</span>
                          <span className="text-sm text-gray-600">{userStats.scoreBreakdown.easy.solved}/{userStats.scoreBreakdown.easy.total}</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500" 
                            style={{ width: `${userStats.scoreBreakdown.easy.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Medium</span>
                          <span className="text-sm text-gray-600">{userStats.scoreBreakdown.medium.solved}/{userStats.scoreBreakdown.medium.total}</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-yellow-500" 
                            style={{ width: `${userStats.scoreBreakdown.medium.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Hard</span>
                          <span className="text-sm text-gray-600">{userStats.scoreBreakdown.hard.solved}/{userStats.scoreBreakdown.hard.total}</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-500" 
                            style={{ width: `${userStats.scoreBreakdown.hard.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ranking Card */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-6">
                    <h3 className="text-lg font-semibold mb-3">Your Ranking</h3>
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg mr-4">
                        <Trophy size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">#{userStats.rank}</div>
                        <div className="text-sm text-gray-600">Top {userStats.percentile}% globally</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {userStats.skillScores.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">{skill.name}</span>
                            <span className="font-medium">{skill.score}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                skill.score > 80 ? 'bg-green-500' : 
                                skill.score > 50 ? 'bg-blue-500' : 
                                'bg-purple-500'
                              }`}
                              style={{ width: `${skill.score}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Upcoming interviews */}
                  {userStats.upcomingInterviews.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Upcoming Interviews</h3>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">View all</a>
                      </div>
                      <div className="space-y-3">
                        {userStats.upcomingInterviews.map((interview, index) => (
                          <div key={index} className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                            <div className="mr-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                {interview.company.charAt(0)}
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">{interview.company}</div>
                              <div className="text-sm text-gray-500">{interview.position} • {interview.date}</div>
                            </div>
                            <div className="ml-auto">
                              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">Prepare</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Popular Tags */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                    <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <button 
                          key={index}
                          onClick={() => setFilterTag(tag === filterTag ? '' : tag)}
                          className={`px-3 py-1.5 rounded-full text-sm ${
                            tag === filterTag 
                              ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Main problem list section */}
                <div className="lg:col-span-2">
                  {/* Filters and Search */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-4">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Search size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                          placeholder="Search problems or tags..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2 w-full md:w-auto">
                        <select
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                          value={filterDifficulty}
                          onChange={(e) => setFilterDifficulty(e.target.value)}
                        >
                          <option value="">All Difficulties</option>
                          <option value="Easy">Easy</option>
                          <option value="Medium">Medium</option>
                          <option value="Hard">Hard</option>
                        </select>
                        <select
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                          value={filterStatus}
                          onChange={(e) => setFilterStatus(e.target.value)}
                        >
                          <option value="">All Status</option>
                          <option value="Solved">Solved</option>
                          <option value="Attempted">Attempted</option>
                          <option value="Unsolved">Unsolved</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Problems Table */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                              Status
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                              #
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Title
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                              Acceptance
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Tags
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {currentProblems.map((problem) => (
                            <tr key={problem.id} className="hover:bg-blue-50 cursor-pointer transition-colors">
                              <td className="px-4 py-4 whitespace-nowrap">
                                {problem.status === "Solved" && (
                                  <div className="flex justify-center">
                                    <CheckCircle size={18} className="text-green-500" />
                                  </div>
                                )}
                                {problem.status === "Attempted" && (
                                  <div className="flex justify-center">
                                    <Clock size={18} className="text-yellow-500" />
                                  </div>
                                )}
                                {problem.status === "Unsolved" && (
                                  <div className="flex justify-center">
                                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                                  </div>
                                )}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {problem.id}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-900">
                                <div className="flex flex-col">
                                  <div className="font-medium hover:text-blue-600">{problem.title}</div>
                                  <div className="flex items-center mt-1">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium
                                      ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                                        problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
{problem.difficulty}
</span>
{problem.lastAttempted && (
  <span className="text-xs text-gray-500 ml-2">
    Last attempted {problem.lastAttempted}
  </span>
)}
</div>
</div>
</td>
<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
  <div className="flex items-center">
    <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
      <div 
        className={`h-1.5 rounded-full ${
          parseInt(problem.acceptRate) > 70 ? 'bg-green-500' : 
          parseInt(problem.acceptRate) > 50 ? 'bg-yellow-500' : 'bg-red-500'
        }`}
        style={{ width: problem.acceptRate }}
      ></div>
    </div>
    <span>{problem.acceptRate}</span>
  </div>
</td>
<td className="px-4 py-4 text-sm text-gray-500">
  <div className="flex flex-wrap gap-1">
    {problem.tags.slice(0, 2).map((tag, idx) => (
      <span key={idx} className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
        {tag}
      </span>
    ))}
    {problem.tags.length > 2 && (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
        +{problem.tags.length - 2}
      </span>
    )}
  </div>
</td>
</tr>
))}
</tbody>
</table>
</div>

{filteredProblems.length === 0 && (
  <div className="py-8 px-4 text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
      <HelpCircle size={24} className="text-gray-400" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-1">No problems found</h3>
    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
  </div>
)}
</div>

{/* Pagination */}
<div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-3">
  <div className="text-sm text-gray-700">
    Showing <span className="font-medium">{indexOfFirstProblem + 1}</span> to{" "}
    <span className="font-medium">{Math.min(indexOfLastProblem, filteredProblems.length)}</span> of{" "}
    <span className="font-medium">{filteredProblems.length}</span> problems
  </div>
  <div className="flex items-center space-x-2">
    <button
      onClick={handlePrevPage}
      disabled={currentPage === 1}
      className={`inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium
        ${currentPage === 1 
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
          : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
    >
      <ChevronLeft size={16} className="mr-1" />
      Prev
    </button>
    <button
      onClick={handleNextPage}
      disabled={currentPage === totalPages || totalPages === 0}
      className={`inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium
        ${currentPage === totalPages || totalPages === 0
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
          : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
    >
      Next
      <ChevronRight size={16} className="ml-1" />
    </button>
  </div>
</div>

{/* Recommended Problems */}
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mt-6">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-semibold">Recommended Problems</h3>
    <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    {recommendedProblems.map((problem) => (
      <div key={problem.id} className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:bg-blue-50 transition-colors">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-medium text-gray-900">{problem.title}</div>
            <div className="mt-1 flex items-center">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium
                ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                  problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'}`}>
                {problem.difficulty}
              </span>
            </div>
          </div>
          <button className="p-1 rounded-full hover:bg-blue-100">
            <Bookmark size={16} className="text-gray-400 hover:text-blue-600" />
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {problem.tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

</div>
</div>
</div>

)}

{activeTab === 'activity' && (
  <div className="p-6">
    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
    <div className="space-y-3">
      {recentActivity.map((activity, index) => (
        <div key={index} className="flex items-start p-3 border border-gray-200 rounded-lg">
          <div className={`p-2 rounded-full mr-3 ${
            activity.status === "Solved" ? "bg-green-100" : 
            activity.status === "Participated" ? "bg-blue-100" : "bg-yellow-100"
          }`}>
            {activity.type === "problem" ? 
              activity.status === "Solved" ? <CheckCircle size={18} className="text-green-600" /> : 
                <Clock size={18} className="text-yellow-600" />
              : <Trophy size={18} className="text-blue-600" />
            }
          </div>
          <div>
            <div className="font-medium">{activity.title}</div>
            <div className="text-sm text-gray-500 mt-1">
              {activity.status} • {activity.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

{activeTab === 'contests' && (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Upcoming Contests</h3>
        <div className="space-y-3">
          {upcomingContests.map((contest, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between">
                <h4 className="font-medium">{contest.title}</h4>
                {contest.registered ? (
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Registered</span>
                ) : (
                  <button className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200">Register</button>
                )}
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <Calendar size={16} className="mr-1" />
                {contest.date} • {contest.time}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Companies Actively Recruiting</h3>
        <div className="space-y-3">
          {activeRecruiters.map((company, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{company.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{company.openings} open positions</p>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                  View Problems
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                {company.problemCount} interview problems
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

{activeTab === 'study-plan' && (
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold">Your Study Plan</h3>
      <button className="text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Customize Plan
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-gray-200 rounded-xl p-4">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <Database size={20} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium">Data Structures & Algorithms</h4>
            <div className="text-sm text-gray-500">Foundation for technical interviews</div>
          </div>
        </div>
        <div className="mb-2 flex justify-between text-sm">
          <span>Progress: 40%</span>
          <span>12/30 lessons completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
          <div className="bg-blue-600 h-2.5 rounded-full w-2/5"></div>
        </div>
        <button className="w-full py-2 text-blue-600 text-sm font-medium border border-blue-200 rounded-lg hover:bg-blue-50">
          Continue Learning
        </button>
      </div>
      
      <div className="border border-gray-200 rounded-xl p-4">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-purple-100 rounded-lg mr-3">
            <Cpu size={20} className="text-purple-600" />
          </div>
          <div>
            <h4 className="font-medium">System Design</h4>
            <div className="text-sm text-gray-500">For senior engineer positions</div>
          </div>
        </div>
        <div className="mb-2 flex justify-between text-sm">
          <span>Progress: 20%</span>
          <span>4/20 lessons completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
          <div className="bg-purple-600 h-2.5 rounded-full w-1/5"></div>
        </div>
        <button className="w-full py-2 text-purple-600 text-sm font-medium border border-purple-200 rounded-lg hover:bg-purple-50">
          Continue Learning
        </button>
      </div>
    </div>
  </div>
)}

    </div>
</div>
</div>
);
}