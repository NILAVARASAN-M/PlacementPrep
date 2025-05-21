import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  Briefcase, BookOpen, Code, Award, TrendingUp, Users, 
  Clock, Zap, CheckCircle, ArrowRight, ThumbsUp, FilePlus,
  MessageCircle, Cpu, BarChart2, ChevronDown, ChevronUp
} from 'lucide-react';

const PlacementPrepLanding = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id;
        
        if (sectionTop < window.innerHeight * 0.75) {
          setIsVisible(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpanded = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  // Sample data for charts
  const placementData = [
    { name: 'Computer Sci.', placed: 92, total: 100 },
    { name: 'Electronics', placed: 85, total: 100 },
    { name: 'Mechanical', placed: 78, total: 100 },
    { name: 'Electrical', placed: 82, total: 100 },
    { name: 'Civil', placed: 70, total: 100 },
  ];

  const salaryData = [
    { name: '2020', avgSalary: 6, topSalary: 12 },
    { name: '2021', avgSalary: 6.5, topSalary: 14 },
    { name: '2022', avgSalary: 7, topSalary: 16 },
    { name: '2023', avgSalary: 8, topSalary: 18 },
    { name: '2024', avgSalary: 9, topSalary: 22 },
  ];

  const companyDistributionData = [
    { name: 'Tech', value: 45, color: '#8884d8' },
    { name: 'Finance', value: 20, color: '#82ca9d' },
    { name: 'Consulting', value: 15, color: '#ffc658' },
    { name: 'Manufacturing', value: 10, color: '#ff8042' },
    { name: 'Others', value: 10, color: '#0088fe' },
  ];

  const skillsImportanceData = [
    { name: 'DSA', value: 85 },
    { name: 'Aptitude', value: 65 },
    { name: 'Communication', value: 75 },
    { name: 'Projects', value: 70 },
    { name: 'Technical Knowledge', value: 80 },
  ];

  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      company: "Google",
      package: "₹42 LPA",
      avatar: "/api/placeholder/80/80",
      quote: "Placement-Prep's problem-solving approach and personalized feedback on my resume were game-changers. I solved over 200 problems and improved my approach to technical interviews dramatically.",
    },
    {
      id: 2,
      name: "Rahul Patel",
      company: "Microsoft",
      package: "₹39 LPA",
      avatar: "/api/placeholder/80/80",
      quote: "The company-specific preparation insights gave me exactly what I needed to focus on. The mock HR interviews built my confidence and helped me answer even the toughest questions with ease.",
    },
    {
      id: 3,
      name: "Ananya Desai",
      company: "Amazon",
      package: "₹38 LPA",
      avatar: "/api/placeholder/80/80",
      quote: "The AI assistant was like having a personal mentor. Whenever I got stuck on a problem, it would guide me toward the solution without giving it away completely. This approach helped me learn much faster.",
    },
  ];

  const features = [
    {
      id: "interactive-coding",
      icon: <Code size={24} className="text-blue-500" />,
      title: "Interactive Coding Challenges",
      description: "Practice with 1000+ curated coding problems specifically designed for campus placements. Get real-time feedback and learn optimal approaches."
    },
    {
      id: "aptitude-practice",
      icon: <Cpu size={24} className="text-purple-500" />,
      title: "Aptitude Practice",
      description: "Comprehensive aptitude preparation with questions modeled after actual placement tests from top companies."
    },
    {
      id: "hr-interview",
      icon: <Users size={24} className="text-green-500" />,
      title: "HR Interview Preparation",
      description: "Practice common and company-specific HR questions with AI-powered feedback on your responses."
    },
    {
      id: "resume-evaluation",
      icon: <FilePlus size={24} className="text-orange-500" />,
      title: "AI Resume Evaluation",
      description: "Get detailed feedback on your resume with role-specific suggestions and an overall score based on industry standards."
    },
    {
      id: "company-insights",
      icon: <Briefcase size={24} className="text-red-500" />,
      title: "Company-Specific Insights",
      description: "Access detailed information about companies visiting your campus, including hiring patterns, expected test formats, and interview questions."
    },
    {
      id: "ai-assistant",
      icon: <MessageCircle size={24} className="text-teal-500" />,
      title: "AI Assistant",
      description: "Get help whenever you're stuck with our intelligent AI assistant that provides hints, clarifications, and navigation support."
    }
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "How will Placement-Prep help me get placed?",
      answer: "Placement-Prep combines structured preparation with real-time analytics and AI assistance. You'll practice coding with problems similar to those asked in actual interviews, prepare for aptitude tests, refine your resume with AI feedback, and access company-specific insights—all in one platform. The personalized dashboard tracks your progress and suggests areas for improvement, giving you a competitive edge."
    },
    {
      id: "faq-2",
      question: "How is Placement-Prep different from other coding platforms?",
      answer: "Unlike general coding platforms, Placement-Prep is specifically designed for campus placements. It combines coding practice with aptitude preparation, HR interview training, resume building, and company-specific insights. The platform analyzes your performance patterns and recommends personalized learning paths targeted at the companies visiting your college."
    },
    {
      id: "faq-3",
      question: "Can I track my progress and improvements?",
      answer: "Yes! The personalized student dashboard provides comprehensive progress tracking, showing your problem-solving efficiency, consistency, strengths, and areas needing improvement. You can monitor your performance over time through visual analytics and see how you compare to the requirements of different companies."
    },
    {
      id: "faq-4",
      question: "Does Placement-Prep provide real company information?",
      answer: "Absolutely. The platform provides detailed information about companies visiting your college, including past hiring patterns, expected compensation, test formats, and frequently asked interview questions. This data is updated regularly to ensure you have the most relevant information for your preparation."
    },
    {
      id: "faq-5",
      question: "Can I apply for jobs directly through the platform?",
      answer: "Yes, you can view job notices from companies visiting your college, check your eligibility in real-time, and apply directly through the platform. The system will track your applications and notify you of status updates, keeping everything organized in one place."
    }
  ];
  
  const stats = [
    { id: "placed-students", label: "Students Placed", value: "2,500+", icon: <Users size={24} className="text-blue-500" /> },
    { id: "coding-problems", label: "Coding Problems", value: "1,000+", icon: <Code size={24} className="text-purple-500" /> },
    { id: "partner-companies", label: "Partner Companies", value: "150+", icon: <Briefcase size={24} className="text-green-500" /> },
    { id: "avg-salary", label: "Avg. Package Increase", value: "35%", icon: <TrendingUp size={24} className="text-orange-500" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center md:text-left md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Accelerate Your <span className="text-yellow-300">Placement Journey</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              The all-in-one AI-powered platform designed to transform your campus placement preparation with personalized learning paths, real-time analytics, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Free
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block absolute right-0 bottom-0 w-2/5 h-full">
          <div className="relative h-full w-full">
            <div className="absolute right-0 bottom-0 w-full h-full bg-[url('/api/placeholder/600/800')] bg-contain bg-no-repeat bg-bottom"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className={`py-16 bg-white animate-on-scroll ${isVisible['stats-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Proven Track Record</h2>
            <p className="mt-4 text-lg text-gray-600">Join thousands of students who have transformed their placement journey</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-blue-50 rounded-xl p-6 text-center transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-blue-700">{stat.value}</h3>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Preview Section */}
      <div id="platform-preview" className={`py-16 bg-gradient-to-b from-gray-50 to-white animate-on-scroll ${isVisible['platform-preview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Experience The Platform</h2>
            <p className="mt-4 text-lg text-gray-600">Take a look at what Placement-Prep offers to accelerate your career</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gray-800 p-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-gray-700 rounded-md px-4 py-1 text-sm text-gray-300">placement-prep.io</div>
              <div className="w-16"></div>
            </div>
            
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'dashboard' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Student Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('problems')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'problems' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Problems
                </button>
                <button 
                  onClick={() => setActiveTab('companies')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'companies' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Companies
                </button>
                <button 
                  onClick={() => setActiveTab('resume')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'resume' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Resume Builder
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {activeTab === 'dashboard' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Your Progress</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <div className="text-sm text-gray-500">Problems Solved</div>
                          <div className="text-2xl font-bold text-blue-600">152 / 1000</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <div className="text-sm text-gray-500">Current Streak</div>
                          <div className="text-2xl font-bold text-green-600">7 days</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <div className="text-sm text-gray-500">Mock Interviews</div>
                          <div className="text-2xl font-bold text-purple-600">5</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <div className="text-sm text-gray-500">Mastery Score</div>
                          <div className="text-2xl font-bold text-orange-600">72%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Skill Assessment</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={skillsImportanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#3b82f6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Job Notices</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <div className="text-sm text-gray-500">Tomorrow</div>
                          <div className="text-base font-medium">Google - Software Engineer</div>
                          <div className="text-sm text-green-600">Eligible</div>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <div className="text-sm text-gray-500">May 12, 2025</div>
                          <div className="text-base font-medium">Microsoft - SDET</div>
                          <div className="text-sm text-green-600">Eligible</div>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-4">
                          <div className="text-sm text-gray-500">May 15, 2025</div>
                          <div className="text-base font-medium">Amazon - SDE Intern</div>
                          <div className="text-sm text-yellow-600">Eligibility Pending</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Recommended Focus</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="bg-red-100 p-2 rounded-lg mr-3">
                            <Code size={16} className="text-red-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Dynamic Programming</div>
                            <div className="text-xs text-gray-500">Low mastery area</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                            <Cpu size={16} className="text-yellow-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Quantitative Aptitude</div>
                            <div className="text-xs text-gray-500">Needs improvement</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <Users size={16} className="text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">HR Interview Skills</div>
                            <div className="text-xs text-gray-500">Practice needed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'problems' && (
                <div>
                  <div className="flex justify-between mb-6">
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">All Problems</button>
                      <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm">Easy</button>
                      <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm">Medium</button>
                      <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm">Hard</button>
                    </div>
                    <div className="relative">
                      <input type="text" placeholder="Search problems" className="border border-gray-300 rounded-md px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  
                  <div className="bg-white shadow overflow-hidden rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Companies</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-600">Two Sum</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Easy</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Amazon, Google, Microsoft
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-green-600 flex items-center"><CheckCircle size={16} className="mr-1" /> Solved</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-600">LRU Cache</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Medium</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Facebook, Microsoft
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-yellow-600 flex items-center"><Clock size={16} className="mr-1" /> Attempted</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-600">Trapping Rain Water</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Hard</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Google, Amazon
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-gray-600 flex items-center">Not Started</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {activeTab === 'companies' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-lg shadow">
                      <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Upcoming Campus Drives</h3>
                      </div>
                      <div className="divide-y divide-gray-200">
                        <div className="px-6 py-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">G</div>
                            <div>
                              <div className="font-medium">Google</div>
                              <div className="text-sm text-gray-500">May 10, 2025</div>
                            </div>
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">View Details</button>
                        </div>
                        <div className="px-6 py-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">M</div>
                            <div>
                              <div className="font-medium">Microsoft</div>
                              <div className="text-sm text-gray-500">May 12, 2025</div>
                            </div>
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">View Details</button>
                        </div>
                        <div className="px-6 py-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">A</div>
                            <div>
                              <div className="font-medium">Amazon</div>
                              <div className="text-sm text-gray-500">May 15, 2025</div>
                            </div>
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">View Details</button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow">
                      <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Company Distribution</h3>
                      </div>
                      <div className="p-6">
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={companyDistributionData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              >
                                {companyDistributionData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900">Top Paying Companies</h3>
                    </div>
                    <div className="px-6 py-4 space-y-4">
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">G</div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                          <div className="font-medium">Google</div>
                            <div className="text-lg font-bold text-green-600">₹42 LPA</div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">M</div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div className="font-medium">Microsoft</div>
                            <div className="text-lg font-bold text-green-600">₹39 LPA</div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">A</div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div className="font-medium">Amazon</div>
                            <div className="text-lg font-bold text-green-600">₹38 LPA</div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">F</div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div className="font-medium">Facebook</div>
                            <div className="text-lg font-bold text-green-600">₹36 LPA</div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">N</div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div className="font-medium">Netflix</div>
                            <div className="text-lg font-bold text-green-600">₹34 LPA</div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'resume' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900">Resume Builder</h3>
                    </div>
                    <div className="p-6">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <div className="text-center mb-8">
                          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                          <h3 className="text-xl font-bold">Rahul Sharma</h3>
                          <p className="text-gray-500">Software Engineering Student</p>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Education</h4>
                            <div className="border-l-2 border-gray-200 pl-4">
                              <div className="font-medium">Bachelor of Technology in Computer Science</div>
                              <div className="text-sm text-gray-500">Indian Institute of Technology, Delhi • 2022 - 2026</div>
                              <div className="text-sm text-gray-600 mt-1">CGPA: 9.2/10</div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Java</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">C++</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MongoDB</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">SQL</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">DSA</span>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Projects</h4>
                            <div className="space-y-3">
                              <div>
                                <div className="font-medium">Smart Home Automation System</div>
                                <div className="text-sm text-gray-600">IoT-based system using Raspberry Pi and Python</div>
                              </div>
                              <div>
                                <div className="font-medium">E-commerce Platform</div>
                                <div className="text-sm text-gray-600">MERN stack application with payment integration</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow">
                      <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">AI Resume Feedback</h3>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-2xl font-bold">82/100</div>
                          <div className="text-green-600 text-sm font-medium">Good</div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm font-medium">Content Quality</div>
                              <div className="text-sm text-gray-500">85%</div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm font-medium">ATS Compatibility</div>
                              <div className="text-sm text-gray-500">90%</div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm font-medium">Impact Statements</div>
                              <div className="text-sm text-gray-500">70%</div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm font-medium">Technical Skills Match</div>
                              <div className="text-sm text-gray-500">85%</div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow">
                      <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Improvement Suggestions</h3>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                              <ArrowRight size={16} className="text-blue-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-gray-700">Add quantifiable achievements to project descriptions (e.g., "Reduced loading time by 40%")</p>
                            </div>
                          </div>
                          
                          <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                              <ArrowRight size={16} className="text-blue-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-gray-700">Include relevant coursework section to highlight academic strengths</p>
                            </div>
                          </div>
                          
                          <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                              <ArrowRight size={16} className="text-blue-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-gray-700">Add a brief professional summary to highlight your career objectives</p>
                            </div>
                          </div>
                          
                          <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                              <ArrowRight size={16} className="text-blue-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-gray-700">Consider adding certification section to showcase additional credentials</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div id="features-section" className={`py-16 bg-gradient-to-b from-blue-50 to-white animate-on-scroll ${isVisible['features-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need To Succeed</h2>
            <p className="mt-4 text-lg text-gray-600">Our comprehensive suite of tools to help you ace your placements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Placement Stats Section */}
      <div id="placement-stats" className={`py-16 bg-white animate-on-scroll ${isVisible['placement-stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Placement Statistics</h2>
            <p className="mt-4 text-lg text-gray-600">Real results from students who used our platform</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                <h3 className="text-lg font-medium text-gray-900">Placement Rate by Department</h3>
              </div>
              <div className="p-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={placementData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="placed" name="Students Placed" fill="#3b82f6" />
                      <Bar dataKey="total" name="Total Students" fill="#93c5fd" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                <h3 className="text-lg font-medium text-gray-900">Average & Top Salary Trends (LPA)</h3>
              </div>
              <div className="p-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={salaryData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="avgSalary" name="Average Salary (LPA)" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="topSalary" name="Top Salary (LPA)" stroke="#ec4899" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Stories Section */}
      <div id="success-stories" className={`py-16 bg-gradient-to-b from-blue-50 to-white animate-on-scroll ${isVisible['success-stories'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600">Hear from students who achieved their dream placements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={story.avatar} alt={story.name} className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{story.name}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Briefcase size={14} className="mr-1" />
                        <span>{story.company}</span>
                        <span className="mx-2">•</span>
                        <span className="text-green-600 font-medium">{story.package}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div id="faq-section" className={`py-16 bg-white animate-on-scroll ${isVisible['faq-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Get answers to common questions about Placement-Prep</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleExpanded(faq.id)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  {expanded[faq.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {expanded[faq.id] && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Placement Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Join thousands of students who have secured their dream jobs through our platform. Start your preparation today!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Sign Up Now - It's Free
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Schedule a Demo
            </button>
          </div>
          <p className="mt-6 text-blue-100">No credit card required. Start preparing for your dream job today.</p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Placement-Prep</h3>
              <p className="text-gray-400">Your all-in-one AI-powered platform for campus placement preparation.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Student Dashboard</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Coding Problems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Company Listings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">AI Assistant</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Interview Experiences</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Placement Statistics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Placement-Prep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PlacementPrepLanding;