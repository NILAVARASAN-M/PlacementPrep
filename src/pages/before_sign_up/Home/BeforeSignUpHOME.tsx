import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  Briefcase, BookOpen, Code, Award, TrendingUp, Users, 
  Clock, Zap, CheckCircle, ArrowRight, ThumbsUp, FilePlus,
  MessageCircle, Cpu, BarChart2, ChevronDown, ChevronUp, ChevronRight, Star, Monitor, User, Target, FileText, BriefcaseBusiness, Check, HelpCircle, Bot, Shield,
  UserCircle, UserCheck 
} from 'lucide-react';
import {useRef } from 'react';
import FooterNew from '../../../components/NewFooter';


const HomeBefore = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expanded, setExpanded] = useState({});
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

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
  // Sample data for charts
  const placementData = [
    { name: 'Computer Sci.', placed: 92, total: 100 },
    { name: 'Electronics', placed: 85, total: 100 },
    { name: 'Mechanical', placed: 78, total: 100 },
    { name: 'Electrical', placed: 82, total: 100 },
    { name: 'Civil', placed: 70, total: 100 },
  ];

  const placementData2 = [
    { name: '2020', average: 65, withPlatform: 85 },
    { name: '2021', average: 68, withPlatform: 88 },
    { name: '2022', average: 70, withPlatform: 91 },
    { name: '2023', average: 72, withPlatform: 94 },
    { name: '2024', average: 75, withPlatform: 97 },
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

  const statsData = [
    { value: "94%", label: "Placement Rate for Active Users" },
    { value: "72%", label: "Higher Package Than Average" },
    { value: "3X", label: "More Interview Calls" },
    { value: "1000+", label: "Coding Problems" }
  ];

// Sample data for charts
const placementStats = [
    { name: 'Computer Science', value: 92, fill: '#0ea5e9' },
    { name: 'Electronics', value: 85, fill: '#10b981' },
    { name: 'Mechanical', value: 78, fill: '#f59e0b' },
    { name: 'Civil', value: 70, fill: '#8b5cf6' },
    { name: 'Electrical', value: 82, fill: '#ec4899' },
  ];

  const salaryRangeData = [
    { name: '0-5 LPA', students: 45 },
    { name: '5-10 LPA', students: 76 },
    { name: '10-15 LPA', students: 35 },
    { name: '15-20 LPA', students: 20 },
    { name: '20+ LPA', students: 10 },
  ];
  
  const problemSolvingProgress = [
    { month: 'Jan', users: 40 },
    { month: 'Feb', users: 60 },
    { month: 'Mar', users: 45 },
    { month: 'Apr', users: 70 },
    { month: 'May', users: 85 },
    { month: 'Jun', users: 80 },
  ];

  const companies = [
    {
      name: "Google",
      // Simplified color blocks representing Google logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="5" height="12" fill="#4285F4" />
        <rect x="7" y="6" width="5" height="12" fill="#DB4437" />
        <rect x="12" y="6" width="5" height="12" fill="#F4B400" />
        <rect x="17" y="6" width="5" height="12" fill="#0F9D58" />
      </svg>
    },
    {
      name: "Microsoft",
      // Simplified Microsoft logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="9" height="9" fill="#F25022" />
        <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
        <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
        <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
      </svg>
    },
    {
      name: "Amazon",
      // Simplified Amazon smile logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12 H22 M12 6 Q17 12 12 18" stroke="#FF9900" strokeWidth="2" fill="none" />
      </svg>
    },
    {
      name: "Meta",
      // Simplified Meta logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z" fill="#0866FF" />
        <path d="M15,9 C15,7.3 13.7,6 12,6 C10.3,6 9,7.3 9,9 L9,11 L7,11 L7,13 L9,13 L9,18 L11,18 L11,13 L13,13 L13,11 L11,11 L11,9 C11,8.4 11.4,8 12,8 C12.6,8 13,8.4 13,9 L15,9 Z" fill="white" />
      </svg>
    },
    {
      name: "Apple",
      // Simplified Apple logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18,8 C17.4,8.4 16.2,8.7 15.2,8.5 C14.5,7.4 13.7,6 11.9,6 C10,6 9.3,7 8,7 C6.5,7 5.5,6 4,6 C2.5,6 2,9 2,11.5 C2,17 6.5,22 8.5,22 C10,22 10.5,21 12,21 C13.5,21 14,22 15.5,22 C17.5,22 22,17 22,11.5 C22,9 19.5,7.5 18,8 Z M15,3 C14,5 12,5 11,4 C12,2 14,2 15,3 Z" fill="#555" />
      </svg>
    },
    {
      name: "Adobe",
      // Simplified Adobe logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 22,22 14,22 12,17 10,22 2,22" fill="#FF0000" />
      </svg>
    },
    {
      name: "Goldman Sachs",
      // Simplified GS logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#0033A0" />
        <path d="M7,12 C7,9.5 9,8 12,8 C15,8 17,9.5 17,12 C17,14.5 15,16 12,16 C9,16 7,14.5 7,12 Z" fill="white" />
      </svg>
    },
    {
      name: "Morgan Stanley",
      // Simplified MS logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" fill="#0070AF" />
        <path d="M6,12 H18 M12,6 V18" stroke="white" strokeWidth="2" />
      </svg>
    },
    {
      name: "Deloitte",
      // Simplified Deloitte logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#86BC25" />
        <path d="M8,12 H16" stroke="white" strokeWidth="3" />
      </svg>
    },
    {
      name: "JP Morgan",
      // Simplified JPM logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="12" fill="#2E77BC" />
        <path d="M7,12 L10,16 L14,8 L17,12" stroke="white" strokeWidth="1" fill="none" />
      </svg>
    },
    {
      name: "Uber",
      // Simplified Uber logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="black" />
        <path d="M12,7 L12,17 M7,12 L17,12" stroke="white" strokeWidth="2" />
      </svg>
    },
    {
      name: "Flipkart",
      // Simplified Flipkart logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="12" fill="#2874F0" />
        <path d="M7,12 H17 M12,9 V15" stroke="#FFC200" strokeWidth="1.5" />
      </svg>
    },
    {
      name: "IBM",
      // Simplified IBM logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="2" fill="#1F70C1" />
        <rect x="3" y="9" width="18" height="2" fill="#1F70C1" />
        <rect x="3" y="12" width="18" height="2" fill="#1F70C1" />
        <rect x="3" y="15" width="18" height="2" fill="#1F70C1" />
      </svg>
    },
    {
      name: "Infosys",
      // Simplified Infosys logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" fill="#007CC3" />
        <text x="12" y="14" fontSize="6" textAnchor="middle" fill="white">IN</text>
      </svg>
    },
    {
      name: "TCS",
      // Simplified TCS logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" fill="#ffffff" stroke="#0066cc" strokeWidth="1" />
        <text x="12" y="14" fontSize="6" textAnchor="middle" fill="#0066cc">TCS</text>
      </svg>
    },
    {
      name: "Wipro",
      // Simplified Wipro logo
      svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#8CC63F" />
        <path d="M8,12 L10,16 L16,8" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      company: "Google",
      position: "Software Engineer",
      testimonial: "Placement-Prep was instrumental in my preparation for Google interviews. The curated problems and AI-powered feedback helped me understand my weak areas and improve rapidly.",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 2,
      name: "Rahul Verma",
      company: "Microsoft",
      position: "Software Development Engineer",
      testimonial: "The resume evaluation tool was a game-changer. It gave me specific feedback that helped me tailor my resume perfectly for tech roles. Landed my dream job at Microsoft!",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 3,
      name: "Priya Patel",
      company: "Amazon",
      position: "Product Manager",
      testimonial: "The company insights and interview preparation modules gave me a competitive edge. I was well-prepared for every stage of the interview process.",
      avatar: "/api/placeholder/50/50"
    }
  ];

  const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
  
  const companyVisitsData = [
    { name: 'Tech Giants', count: 15 },
    { name: 'Startups', count: 25 },
    { name: 'Service Companies', count: 35 },
    { name: 'Product Companies', count: 20 },
    { name: 'Others', count: 5 },
  ];

  const salaryData2 = [
    { name: 'Without Prep', value: 700000 },
    { name: 'With Placement-Prep', value: 1200000 },
  ];

  // Function to get a unique avatar for each person
  const getAvatar = (id) => {
    switch (id) {
      case 1:
        return <UserCircle size={48} className="text-indigo-600" />;
      case 2:
        return <UserCheck size={48} className="text-green-600" />;
      case 3:
        return <User size={48} className="text-blue-600" />;
      default:
        return <UserCircle size={48} className="text-gray-600" />;
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">

      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-16 flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1600/900')] bg-cover bg-center" />
                <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Level Up Your <span className="text-yellow-300">Placement Preparation</span>
            </h1>
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              An AI-powered platform that brings coding challenges, aptitude tests, HR interview prep, resume building, and company insights - all under one roof.
            </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   
                    
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-10 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
  <span className="flex items-center">
    Get Started <ChevronRight className="ml-2" size={20} />
  </span>
</button>

              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Watch Demo
              </button>
                </div>
                
                </div>
                
                {/* Floating Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16 relative z-10">
                {statsData.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
                    <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-gray-600 mt-2">{stat.label}</div>
                    </div>
                ))}
                </div>
        </section>
      {/* Stats Section */}
      <div id="stats-section" className={`py-16 bg-white animate-on-scroll ${isVisible['stats-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Proven Track Record</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Students Trust Placement-Prep
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Join thousands of students who have transformed their placement journey.
            </p>
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

      {/* Results Section */}
      <section className="py-16 px-4 lg:px-16 bg-gradient-to-b from-lime-100 to-white">
      <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Proven Results</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">  Impact Backed by Data
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                  Our data shows a significant improvement in placement rates and package values for students who use Placement-Prep.                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center text-indigo-600">Placement Success Rate Comparison</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={placementData2}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="average" stroke="#8884d8" name="College Average" />
                        <Line type="monotone" dataKey="withPlatform" stroke="#82ca9d" name="With Placement-Prep" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center text-indigo-600">Average Package Comparison</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={salaryData2}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label={{ value: 'Annual Package (₹)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Annual Package']} />
                        <Bar dataKey="value" fill="#8884d8">
                          {salaryData2.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </section>

      {/* Platform Preview Section */}
      <div id="platform-preview" className={`py-16 bg-gradient-to-b from-white to-gray-800 animate-on-scroll ${isVisible['platform-preview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                  <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Experience The Platform</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Explore Our Features</p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                  Take a look at what Placement-Prep offers to accelerate your career</p>
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
          <div className="py-16 bg-gradient-to-b from-sky-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Comprehensive Preparation</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Everything you need to ace your placements</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our platform covers all aspects of placement preparation, from coding practice to HR interview simulations.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative p-6 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute -top-5 -left-5 p-3 rounded-full bg-white shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 pt-4">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Preview Section */}
            <div className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <div className="mb-10 lg:mb-0">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                      Personalized Student Dashboard
                    </h2>
                    <p className="mt-4 text-lg text-indigo-100">
                      Track your progress, visualize your improvement, and get personalized recommendations to strengthen your weaknesses.
                    </p>
                    
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-cyan-300 mr-2" />
                        <span className="text-white">Real-time performance tracking</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-cyan-300 mr-2" />
                        <span className="text-white">Topic-wise mastery analytics</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-cyan-300 mr-2" />
                        <span className="text-white">Personalized study plan generation</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-cyan-300 mr-2" />
                        <span className="text-white">Company-specific preparation insights</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-cyan-300 mr-2" />
                        <span className="text-white">Application status tracking</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="relative rounded-2xl shadow-xl overflow-hidden">
                      <img className="w-full" src="/image.png" alt="Dashboard Interface" />
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-700/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
       {/* Analytics Section */}
            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Data-Driven Insights</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Analytics that guide your preparation</p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Leverage powerful analytics to understand placement trends and optimize your preparation strategy.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  

                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                <h3 className="text-lg font-medium text-gray-900">Department-wise Placement Rate
                </h3>
              </div>
              <div className="p-6">
                <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={placementStats}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {placementStats.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                <h3 className="text-lg font-medium text-gray-900">Average & Top Salary Trends (LPA)
                </h3>
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

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                <h3 className="text-lg font-medium text-gray-900">Salary Package Distribution

                </h3>
              </div>
              <div className="p-6">
                <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={salaryRangeData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="students" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>

      
      {/* Success Stories Section */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Hear from our placed students</p>
          </div>
          
          <div className="relative">
            <div className="flex justify-center">
              <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <img 
                    src={testimonials[activeTestimonialIndex].avatar} 
                    alt={testimonials[activeTestimonialIndex].name} 
                    className="w-16 h-16 rounded-full border-4 border-white object-cover"
                  />
                </div>
                <div className="mt-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-600 italic">"{testimonials[activeTestimonialIndex].testimonial}"</p>
                  <div className="mt-6">
                    <p className="text-lg font-bold text-gray-900">{testimonials[activeTestimonialIndex].name}</p>
                    <p className="text-indigo-600">
                      {testimonials[activeTestimonialIndex].position} at {testimonials[activeTestimonialIndex].company}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonialIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === activeTestimonialIndex ? 'bg-indigo-600' : 'bg-gray-300'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Hiring Companies */}
<div className="py-16 bg-gradient-to-b from-pink-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-base font-semibold text-pink-600 tracking-wide uppercase">Top Recruiters</h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-800 sm:text-4xl">
        Companies that hire through our platform
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
      {companies.map((company, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md">
            <div className="w-10 h-10">
              {company.svg}
            </div>
          </div>
          <div className="text-purple-700 font-medium text-center">{company.name}</div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* AI Features */}
<div className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-purple-200 tracking-wide uppercase">AI-Powered</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Intelligent Assistance at Every Step</p>
            <p className="mt-4 max-w-2xl text-xl text-purple-100 mx-auto">
              Our AI assistants help you navigate your preparation journey with personalized guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-purple-400 border-opacity-20">
              <div className="text-purple-200 mb-4">
                <Monitor className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-white">Smart Problem Suggestions</h3>
              <p className="mt-4 text-purple-100">
                AI analyzes your performance patterns and suggests problems that target your weak areas, ensuring balanced skill development.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-purple-400 border-opacity-20">
              <div className="text-purple-200 mb-4">
                <User className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-white">Resume Analysis</h3>
              <p className="mt-4 text-purple-100">
                Our AI reviews your resume against industry standards and job requirements, providing actionable feedback to improve your chances.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-purple-400 border-opacity-20">
              <div className="text-purple-200 mb-4">
                <Zap className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-white">Interview Assistant</h3>
              <p className="mt-4 text-purple-100">
                Practice with our AI interviewer that simulates real interview scenarios and provides feedback on your responses and body language.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Getting Started</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">How Placement-Prep Works</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Follow these simple steps to kickstart your placement preparation journey.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-white"></div>
            <div className="relative max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                    <User className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">Create Your Profile</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Sign up and complete your profile with academic details and career preferences.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">Set Your Goals</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Define your target companies, roles, and timeline for preparation.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">Practice & Learn</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Follow your personalized preparation plan and track your progress.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">Get Placed</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Apply to companies through our platform and land your dream job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to launch your career?
              </h2>
              <p className="mt-4 text-xl text-cyan-100">
                Join thousands of students who have successfully prepared and landed their dream jobs through Placement-Prep.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg">
                  Sign Up Free
                </button>
                <button className="px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 shadow-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-5 aspect-h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Student preparing for interviews" 
                  className="object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 text-center">
                    <p className="text-3xl font-bold text-white">Start your journey today</p>
                    <p className="mt-2 text-xl text-cyan-100">Your dream job is just a preparation away</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills You'll Develop Section */}
      <section className="py-16 px-4 lg:px-16 bg-gradient-to-b from-white via-indigo-100 to-zinc-300">
              
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Skills You'll Develop</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">    Built for Real-World Success</p>
                  <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
                  Our platform helps you build the essential skills that top companies look for.   </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Code size={28} />,
                      title: "Technical Problem Solving",
                      points: ["Data structures & algorithms mastery", "Optimization techniques", "Language proficiency", "System design principles"]
                    },
                    {
                      icon: <TrendingUp size={28} />,
                      title: "Quantitative Aptitude",
                      points: ["Logical reasoning", "Mathematical foundations", "Data interpretation", "Puzzle solving"]
                    },
                    {
                      icon: <Users size={28} />,
                      title: "Communication Skills",
                      points: ["Clear technical explanations", "Interview question handling", "Behavioral question strategies", "Professional communication"]
                    },
                    {
                      icon: <FileText size={28} />,
                      title: "Resume Building",
                      points: ["Project presentation", "Achievement highlighting", "Technical skill showcasing", "ATS optimization"]
                    },
                    {
                      icon: <BriefcaseBusiness size={28} />,
                      title: "Industry Knowledge",
                      points: ["Company research skills", "Interview pattern recognition", "Industry trend awareness", "Role-specific preparation"]
                    },
                    {
                      icon: <Award size={28} />,
                      title: "Career Planning",
                      points: ["Self-assessment", "Goal setting", "Strengths identification", "Development planning"]
                    }
                  ].map((skill, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{skill.title}</h3>
                      <ul className="space-y-2">
                        {skill.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

      {/* FAQ Section */}
      
      <FAQ />

      
      {/* Success Stories Section */}
            <div id="success-stories" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Success Stories</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">From Preparation to Placement</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Real stories from students who transformed their careers with Placement-Prep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                    {getAvatar(story.id)}
                  </div>
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

      {/* College Partnerships */}
      <div className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Institutional Partners</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Trusted by Top Colleges</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We partner with educational institutions to enhance their placement processes and outcomes.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((college) => (
              <div key={college} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src="/api/placeholder/120/40"
                  alt={`College partner ${college}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6">
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
      
    </div>
  );
}




const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Placement-Prep?",
      answer: "Placement-Prep is an AI-powered full-stack platform designed to help students prepare for campus placements. It offers coding challenges, aptitude practice, HR interview preparation, resume evaluation, and company-specific insights all in one place.",
      icon: <BookOpen className="text-blue-600" size={22} />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      question: "How can I track my progress?",
      answer: "Your personalized dashboard displays learning progress, upcoming job notices, applied companies, and skill assessment metrics including problem-solving efficiency and consistency. Visual charts help you identify strengths and improvement areas.",
      icon: <TrendingUp className="text-green-600" size={22} />,
      color: "bg-green-50 border-green-200"
    },
    {
      question: "What kind of AI assistance is available?",
      answer: "Our platform includes an AI assistant chatbot powered by Gemini and LLaMa 3 that helps when you're stuck on coding problems or need navigation assistance. The platform also offers AI-powered resume evaluation with detailed feedback based on job trends.",
      icon: <Bot className="text-purple-600" size={22} />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      question: "How do I apply for jobs through the platform?",
      answer: "Navigate to Company Listings to view companies visiting your college. On the Job Notice pages, you can check eligibility in real-time, upload required documents, and apply directly through our platform. The Application page tracks your application status.",
      icon: <Briefcase className="text-amber-600" size={22} />,
      color: "bg-amber-50 border-amber-200"
    },
    {
      question: "Can I practice coding problems?",
      answer: "Yes! Our Problems page is inspired by platforms like LeetCode and offers curated problems with real-time tracking and visual feedback. You can filter problems by difficulty, category, and company requirements.",
      icon: <Code className="text-indigo-600" size={22} />,
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      question: "Is my data secure on the platform?",
      answer: "Absolutely. We use Firebase for secure authentication and document storage, while MongoDB safely stores your user data and performance history. All personal information is encrypted and handled according to best privacy practices.",
      icon: <Shield className="text-red-600" size={22} />,
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
<div className="min-h-screen w-full bg-gradient-to-b from-zinc-300 to-neutral-800 py-12 px-4">
<div className="max-w-[90rem] mx-auto">
{/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
            <HelpCircle className="text-blue-600" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the Placement-Prep platform and how it can help with your campus recruitment preparation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-xl border shadow-sm transition-all duration-200 ${faq.color} overflow-hidden`}
            >
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {faq.icon}
                  </div>
                  <h3 className="ml-3 font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                
                <div className="text-gray-600 text-sm">
                  <p>{faq.answer}</p>
                </div>
                
                <button
                  onClick={() => toggleQuestion(index)}
                  className={`mt-4 flex items-center text-sm font-medium ${
                    openIndex === index ? 'text-blue-600' : 'text-gray-500'
                  } hover:text-blue-700 transition-colors`}
                >
                  {openIndex === index ? (
                    <>
                      <span>Show less</span>
                      <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Learn more</span>
                      <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </button>
              </div>
              
              {openIndex === index && (
                <div className="px-5 py-4 bg-white border-t text-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Additional Information:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {index === 0 && (
                      <>
                        <li>Access comprehensive study materials and real-world practice scenarios</li>
                        <li>Get personalized preparation paths based on your skills and target companies</li>
                        <li>Connect with peers preparing for similar roles and companies</li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li>View detailed analytics on your performance across different skill areas</li>
                        <li>Track your daily/weekly consistency with interactive heatmaps</li>
                        <li>Compare your progress with benchmarks for different company requirements</li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li>Get instant debugging help with our AI code assistant</li>
                        <li>Receive tailored interview preparation tips based on your resume</li>
                        <li>Ask navigation questions to quickly find what you need on the platform</li>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <li>Receive real-time eligibility checks based on your profile and achievements</li>
                        <li>Track application deadlines and requirements in one place</li>
                        <li>Get notification updates on your application status changes</li>
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <li>Practice with problems commonly asked by top tech companies</li>
                        <li>Get difficulty-based challenges that match your skill level</li>
                        <li>Access detailed solution approaches and complexity analyses</li>
                      </>
                    )}
                    {index === 5 && (
                      <>
                        <li>All communications are encrypted end-to-end for your privacy</li>
                        <li>Regular security audits ensure your data remains protected</li>
                        <li>Your personal information is never shared with third parties without consent</li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

// const ChatbotUI = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [message, setMessage] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);
//   const messagesEndRef = useRef(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
//   const dragRef = useRef(null);
//   const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
//   const predefinedPrompts = [
//     "How do I get started?",
//     "What features are available?",
//     "Can you help with troubleshooting?",
//     "Tell me about pricing options"
//   ];

//   useEffect(() => {
//     // Set initial position to bottom right
//     setPosition({
//       x: window.innerWidth - 240,
//       y: window.innerHeight - 120
//     });
//   }, []);

//   useEffect(() => {
//     if (isDragging) {
//       const handleMouseMove = (e) => {
//         setPosition({
//           x: e.clientX - dragOffset.x,
//           y: e.clientY - dragOffset.y
//         });
//       };
      
//       const handleMouseUp = (e) => {
//         setIsDragging(false);
        
//         // Check if this was a click (minimal movement) or a drag
//         const moveDistance = Math.sqrt(
//           Math.pow(e.clientX - dragStartPos.x, 2) + 
//           Math.pow(e.clientY - dragStartPos.y, 2)
//         );
        
//         // If movement was minimal (less than 5px), treat as a click
//         if (moveDistance < 5) {
//           toggleChat();
//         }
//       };
      
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleMouseUp);
      
//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//         document.removeEventListener('mouseup', handleMouseUp);
//       };
//     }
//   }, [isDragging, dragOffset, dragStartPos]);

//   const handleMouseDown = (e) => {
//     if (dragRef.current && dragRef.current.contains(e.target)) {
//       // Don't start dragging if the click was on the collapse button
//       if (e.target.closest('button[data-action="collapse"]')) {
//         return;
//       }
      
//       setIsDragging(true);
//       // Store the starting position for later comparison
//       setDragStartPos({
//         x: e.clientX,
//         y: e.clientY
//       });
      
//       const rect = dragRef.current.getBoundingClientRect();
//       setDragOffset({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//       });
//       e.preventDefault();
//     }
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [chatMessages]);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleCollapse = (e) => {
//     e.stopPropagation();
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendMessage(message);
//   };

//   const sendMessage = (text) => {
//     if (text.trim() === '') return;
    
//     // Add user message to chat
//     setChatMessages([...chatMessages, { text, isUser: true }]);
    
//     // Echo back the same message (as requested, backend will be implemented later)
//     setTimeout(() => {
//       setChatMessages(prev => [...prev, { text, isUser: false }]);
//     }, 500);
    
//     // Clear input
//     setMessage('');
//   };

//   const handlePromptClick = (prompt) => {
//     sendMessage(prompt);
//   };

//   const refreshChat = () => {
//     setChatMessages([]);
//   };

//   // Styling constants
//   const primaryColor = '#4F46E5'; // Indigo
//   const secondaryColor = '#818CF8'; // Lighter indigo
//   const lightGray = '#F3F4F6';
//   const darkGray = '#4B5563';
//   const white = '#FFFFFF';
//   const boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
//   const transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

//   return (
//     <div 
//       className="chatbot-container" 
//       style={{ 
//         position: 'fixed', 
//         left: `${position.x}px`, 
//         top: `${position.y}px`, 
//         zIndex: 1000,
//         transition: isDragging ? 'none' : transition
//       }}
//     >
//       {/* Chat window - now appears above the toggle bar */}
//       {isOpen && (
//         <div 
//           className="chat-window"
//           style={{
//             position: 'absolute',
//             bottom: '50px', // Position above the toggle bar instead of below
//             right: '0',
//             width: '350px',
//             height: '500px',
//             backgroundColor: white,
//             borderRadius: '12px',
//             boxShadow,
//             display: 'flex',
//             flexDirection: 'column',
//             overflow: 'hidden',
//             border: `1px solid ${lightGray}`,
//             transition
//           }}
//         >
//           {/* Chat header */}
//           <div 
//             className="chat-header"
//             style={{
//               backgroundColor: primaryColor,
//               color: white,
//               padding: '16px',
//               fontWeight: 'bold',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               fontSize: '16px'
//             }}
//           >
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
//                 <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
//               </svg>
//               Chat Assistant
//             </div>
//             <div style={{ display: 'flex', gap: '12px' }}>
//               {/* Refresh button */}
//               <button 
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   refreshChat();
//                 }}
//                 title="Refresh chat"
//                 style={{
//                   backgroundColor: 'transparent',
//                   border: 'none',
//                   color: white,
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M23 20V14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M20.49 9C19.9828 7.56678 19.1209 6.2854 17.9845 5.27542C16.8482 4.26543 15.4745 3.55976 13.9917 3.22426C12.5089 2.88875 10.9652 2.93434 9.50481 3.35677C8.04437 3.77921 6.71475 4.56471 5.64 5.64L1 10M23 14L18.36 18.36C17.2853 19.4353 15.9556 20.2208 14.4952 20.6432C13.0348 21.0657 11.4911 21.1112 10.0083 20.7757C8.52547 20.4402 7.1518 19.7346 6.01547 18.7246C4.87913 17.7146 4.01717 16.4332 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//               {/* Close button */}
//               <button 
//                 onClick={toggleChat}
//                 style={{
//                   backgroundColor: 'transparent',
//                   border: 'none',
//                   color: white,
//                   cursor: 'pointer'
//                 }}
//               >
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//           {/* Chat messages */}
//           <div 
//             className="chat-messages"
//             style={{
//               flex: 1,
//               overflowY: 'auto',
//               padding: '16px',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '12px',
//               backgroundColor: '#F9FAFB'
//             }}
//           >
//             {/* Welcome message and predefined prompts */}
//             {chatMessages.length === 0 && (
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//                 <div 
//                   style={{
//                     backgroundColor: lightGray,
//                     color: darkGray,
//                     padding: '12px 16px',
//                     borderRadius: '12px 12px 12px 0',
//                     maxWidth: '85%',
//                     alignSelf: 'flex-start',
//                     fontSize: '14px',
//                     boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
//                   }}
//                 >
//                   👋 Hi there! How can I assist you today? You can type your question or select one of the options below.
//                 </div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                   {predefinedPrompts.map((prompt, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handlePromptClick(prompt)}
//                       style={{
//                         backgroundColor: white,
//                         border: `1px solid ${lightGray}`,
//                         borderRadius: '8px',
//                         padding: '10px 12px',
//                         textAlign: 'left',
//                         cursor: 'pointer',
//                         color: darkGray,
//                         fontWeight: '500',
//                         fontSize: '13px',
//                         transition,
//                         maxWidth: '85%',
//                         boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
//                       }}
//                     >
//                       {prompt}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {/* Chat conversation */}
//             {chatMessages.map((msg, index) => (
//               <div 
//                 key={index} 
//                 className={`chat-message ${msg.isUser ? 'user-message' : 'bot-message'}`}
//                 style={{
//                   alignSelf: msg.isUser ? 'flex-end' : 'flex-start',
//                   backgroundColor: msg.isUser ? primaryColor : lightGray,
//                   color: msg.isUser ? white : darkGray,
//                   padding: '12px 16px',
//                   borderRadius: msg.isUser ? '12px 12px 0 12px' : '12px 12px 12px 0',
//                   maxWidth: '85%',
//                   wordBreak: 'break-word',
//                   fontSize: '14px',
//                   boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
//                   animation: 'fadeIn 0.3s'
//                 }}
//               >
//                 {msg.text}
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>
//           {/* Chat input */}
//           <form 
//             onSubmit={handleSubmit}
//             style={{
//               display: 'flex',
//               padding: '12px 16px',
//               borderTop: `1px solid ${lightGray}`,
//               backgroundColor: white
//             }}
//           >
//             <input
//               type="text"
//               value={message}
//               onChange={handleMessageChange}
//               placeholder="Type your message..."
//               style={{
//                 flex: 1,
//                 padding: '12px 16px',
//                 borderRadius: '50px',
//                 border: `1px solid ${lightGray}`,
//                 marginRight: '10px',
//                 outline: 'none',
//                 fontSize: '14px'
//               }}
//             />
//             <button
//               type="submit"
//               style={{
//                 backgroundColor: primaryColor,
//                 color: white,
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '40px',
//                 height: '40px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 transition,
//                 boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
//               }}
//             >
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//           </form>
//         </div>
//       )}
      
//       {/* Chat toggle bar */}
//       <div 
//         ref={dragRef}
//         className="chat-toggle-bar"
//         onMouseDown={handleMouseDown}
//         style={{
//           backgroundColor: primaryColor,
//           color: white,
//           padding: isCollapsed ? '12px' : '12px 20px',
//           borderRadius: '50px',
//           cursor: isDragging ? 'grabbing' : 'grab',
//           boxShadow,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           fontWeight: '600',
//           transition: isDragging ? 'none' : transition,
//           width: isCollapsed ? 'auto' : '220px',
//           fontSize: '14px'
//         }}
//       >
//         {!isCollapsed && (
//           <span style={{ marginRight: '10px', userSelect: 'none' }}>Click This to Assist You</span>
//         )}
//         <button 
//           data-action="collapse"
//           onClick={toggleCollapse} 
//           style={{
//             backgroundColor: 'transparent',
//             border: 'none',
//             color: white,
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '4px',
//             borderRadius: '50%',
//             width: '24px',
//             height: '24px',
//             transition
//           }}
//         >
//           {isCollapsed ? (
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           ) : (
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           )}
//         </button>
//       </div>
      
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export {ChatbotUI};

export default HomeBefore;