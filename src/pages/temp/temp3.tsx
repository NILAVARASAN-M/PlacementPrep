import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Award, BookOpen, Code, Users, Star, TrendingUp, CheckCircle, Clock, PieChart as PieChartIcon, Briefcase, CheckSquare, Target, Monitor, User, Zap } from 'lucide-react';

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

const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

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

// Custom FileCheck icon since it's not available in lucide-react
const FileCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <path d="M9 15l2 2 4-4"></path>
    </svg>
  );

const features = [
  {
    title: "AI-Powered Problem Solving",
    description: "Practice with curated coding challenges and get real-time feedback on your approach and solutions.",
    icon: <Code className="h-8 w-8 text-blue-500" />
  },
  {
    title: "Smart Resume Builder",
    description: "Build and optimize your resume with AI-powered feedback tailored to your target roles and companies.",
    icon: <FileCheck className="h-8 w-8 text-green-500" />
  },
  {
    title: "Personalized Dashboard",
    description: "Track your progress, identify improvement areas, and get customized learning recommendations.",
    icon: <PieChartIcon className="h-8 w-8 text-purple-500" />
  },
  {
    title: "Company-Specific Prep",
    description: "Access insights about visiting companies, their hiring patterns, and customize your preparation accordingly.",
    icon: <Briefcase className="h-8 w-8 text-yellow-500" />
  },
  {
    title: "Mock Interviews",
    description: "Practice with simulated interviews for technical, HR, and role-specific questions with detailed feedback.",
    icon: <Users className="h-8 w-8 text-pink-500" />
  },
  {
    title: "Performance Analytics",
    description: "Visualize your improvement over time with detailed analytics on problem-solving efficiency and consistency.",
    icon: <TrendingUp className="h-8 w-8 text-cyan-500" />
  }
];

const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple", "Adobe", 
  "Goldman Sachs", "Morgan Stanley", "Deloitte", "JP Morgan",
  "Uber", "Flipkart", "IBM", "Infosys", "TCS", "Wipro"
];



// Counter animation hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
};

export default function PlacementPrepLanding2() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const studentsPlaced = useCounter(5000);
//   const companies = useCounter(200);
  const avgSalary = useCounter(12);
  const problemsSolved = useCounter(500000);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90" />
          <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-no-repeat bg-center bg-cover mix-blend-multiply opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              <span className="block">Level Up Your</span>
              <span className="block text-cyan-300">Placement Preparation</span>
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              An AI-powered platform that brings coding challenges, aptitude tests, HR interview prep, resume building, and company insights - all under one roof.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 shadow-lg transition duration-300 transform hover:-translate-y-1">
                Get Started Free
              </button>
              <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 shadow-lg transition duration-300 transform hover:-translate-y-1">
                How It Works
              </button>
            </div>
          </div>
          
          
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img className="relative rounded-lg shadow-2xl" src="/logo.jpg" alt="Dashboard preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-indigo-600">{studentsPlaced}+</div>
              <div className="mt-2 text-gray-600">Students Placed</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600">{companies}+</div>
              <div className="mt-2 text-gray-600">Hiring Companies</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-amber-600">{avgSalary} LPA</div>
              <div className="mt-2 text-gray-600">Avg. Starting Salary</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-purple-600">{problemsSolved}+</div>
              <div className="mt-2 text-gray-600">Problems Solved</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
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
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Department-wise Placement Rate</h3>
              <div className="h-64">
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
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Salary Package Distribution</h3>
              <div className="h-64">
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
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Problem Solving Progress</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={problemSolvingProgress}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-indigo-100">
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
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Top Recruiters</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Companies that hire through our platform</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-gray-500 font-medium">{company}</div>
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
      
      {/* FAQs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Questions & Answers</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</p>
          </div>
          
          <div className="mt-8 max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-bold text-gray-900">Is Placement-Prep free for students?</h3>
              <p className="mt-2 text-gray-600">
                We offer a free basic tier with limited features and a premium subscription with full access to all modules. Many colleges partner with us to provide premium access to their students at no cost.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-bold text-gray-900">How is Placement-Prep different from other coding platforms?</h3>
              <p className="mt-2 text-gray-600">
                Unlike most platforms that focus solely on coding problems, Placement-Prep offers a comprehensive ecosystem covering technical preparation, aptitude tests, resume building, and company-specific insights - all powered by AI to give you personalized guidance.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-bold text-gray-900">Can I track my progress over time?</h3>
              <p className="mt-2 text-gray-600">
                Yes, your personalized dashboard shows detailed analytics of your performance, strengths, weaknesses, and improvement over time with visual representations to track your progress.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-bold text-gray-900">Does Placement-Prep connect directly with companies?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we partner with companies to post job opportunities directly on our platform. Companies can also access anonymous performance data to identify potential candidates who match their requirements.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-bold text-gray-900">How accurate is the AI-based resume feedback?</h3>
              <p className="mt-2 text-gray-600">
                Our resume evaluation algorithm is trained on thousands of successful resumes and continuously updated with the latest hiring trends. It provides detailed feedback on content, formatting, and alignment with specific job roles with over 90% accuracy compared to human recruiters.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:py-20 md:px-12 lg:px-16 lg:py-24 relative">
              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Stay updated with placement trends
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Subscribe to our newsletter for the latest industry insights, interview tips, and exclusive resources.
                </p>
                <div className="mt-8 sm:flex justify-center">
                  <div className="w-full sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-5 py-3 border-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:w-auto"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-indigo-100">
                  We care about your data. Read our <span className="underline cursor-pointer">Privacy Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Student Success Stories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">From Preparation to Placement</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Real stories from students who transformed their careers with Placement-Prep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src="/api/placeholder/400/200" alt="Student Success Story" />
              <div className="p-6">
                <p className="text-indigo-600 font-semibold">From Struggling to Stellar</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">Ravi's Journey to Google</h3>
                <p className="mt-3 text-gray-600">
                  "After failing 5 interviews, I discovered Placement-Prep. The structured approach and AI feedback helped me identify and fix critical gaps in my preparation."
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Placed at Google
                  </span>
                  <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    18 LPA
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src="/api/placeholder/400/200" alt="Student Success Story" />
              <div className="p-6">
                <p className="text-indigo-600 font-semibold">Non-CS Background</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">Priya's Tech Transition</h3>
                <p className="mt-3 text-gray-600">
                  "As a Mechanical Engineering student, breaking into tech seemed impossible. Placement-Prep's targeted preparation helped me bridge the knowledge gap."
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Placed at Microsoft
                  </span>
                  <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    24 LPA
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src="/api/placeholder/400/200" alt="Student Success Story" />
              <div className="p-6">
                <p className="text-indigo-600 font-semibold">Tier-3 College to Tier-1 Company</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">Amit's Breakthrough</h3>
                <p className="mt-3 text-gray-600">
                  "Coming from a lesser-known college, I needed something extra on my resume. The platform's projects and certifications made all the difference."
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Placed at Amazon
                  </span>
                  <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    21 LPA
                  </span>
                </div>
              </div>
            </div>
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
      
      {/* Final CTA */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Launch Your Career Journey Today
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Join thousands of students who have transformed their placement journey with our platform.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50">
                  Create Free Account
                </button>
              </div>
              <div className="ml-3 inline-flex">
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-white">Placement-Prep</div>
              <p className="mt-2 text-gray-300">
                Your AI-powered companion for campus placement success.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Platform</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Coding Problems</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Mock Interviews</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Company Insights</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Partners</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Licensing</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Placement-Prep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}





