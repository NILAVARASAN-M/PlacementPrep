import React from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Check, ChevronRight, Code, FileText, Users, BriefcaseBusiness, Zap, BookOpen, Award, TrendingUp, Star } from 'lucide-react';

const LandingPage = () => {
  // Sample data for charts
  const placementData = [
    { name: '2020', average: 65, withPlatform: 85 },
    { name: '2021', average: 68, withPlatform: 88 },
    { name: '2022', average: 70, withPlatform: 91 },
    { name: '2023', average: 72, withPlatform: 94 },
    { name: '2024', average: 75, withPlatform: 97 },
  ];

  const salaryData = [
    { name: 'Without Prep', value: 700000 },
    { name: 'With Placement-Prep', value: 1200000 },
  ];

  const moduleUsageData = [
    { name: 'Coding Practice', value: 35 },
    { name: 'Resume Builder', value: 25 },
    { name: 'Interview Prep', value: 20 },
    { name: 'Aptitude Tests', value: 15 },
    { name: 'Company Research', value: 5 },
  ];

  const companyVisitsData = [
    { name: 'Tech Giants', count: 15 },
    { name: 'Startups', count: 25 },
    { name: 'Service Companies', count: 35 },
    { name: 'Product Companies', count: 20 },
    { name: 'Others', count: 5 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

  const testimonialsData = [
    {
      id: 1,
      name: "Priya Singh",
      role: "Software Engineer at Google",
      image: "/api/placeholder/50/50",
      quote: "I secured my dream job at Google, thanks to the structured preparation path Placement-Prep provided. The coding challenges were similar to what I faced in actual interviews!"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Data Scientist at Microsoft",
      image: "/api/placeholder/50/50",
      quote: "The AI-powered resume builder helped me optimize my resume perfectly for tech roles. Got calls from 5 top companies within a week of updating!"
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Product Manager at Amazon",
      image: "/api/placeholder/50/50",
      quote: "The interview preparation module was a game-changer. I felt so confident during my Amazon interviews because I had practiced with similar questions."
    }
  ];

  const featuresData = [
    {
      icon: <Code size={24} />,
      title: "Interactive Coding Challenges",
      description: "1000+ company-specific coding problems with real-time feedback and hints when you're stuck."
    },
    {
      icon: <FileText size={24} />,
      title: "AI Resume Evaluation",
      description: "Get detailed feedback on your resume with personalized improvement suggestions tailored to your target role."
    },
    {
      icon: <Users size={24} />,
      title: "HR Interview Preparation",
      description: "Practice with AI-generated HR questions specific to companies you're applying to."
    },
    {
      icon: <BriefcaseBusiness size={24} />,
      title: "Company Insights",
      description: "Detailed analytics on companies visiting your campus, including past hiring patterns and expected packages."
    },
    {
      icon: <Zap size={24} />,
      title: "Personalized Dashboard",
      description: "Track your progress, identify improvement areas, and get AI-recommended practice problems."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Peer Learning",
      description: "Access interview experiences and detailed problem solutions shared by successful candidates."
    }
  ];

  const statsData = [
    { value: "94%", label: "Placement Rate for Active Users" },
    { value: "72%", label: "Higher Package Than Average" },
    { value: "3X", label: "More Interview Calls" },
    { value: "1000+", label: "Coding Problems" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-16 flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1600/900')] bg-cover bg-center" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Launch Your Career with Placement-Prep</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">The AI-powered platform that transforms campus placement preparation with personalized learning paths, real-time feedback, and industry insights.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-indigo-100 text-lg font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center">
              Get Started <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="bg-transparent hover:bg-indigo-700 border-2 border-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300">
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

      {/* The Problem Section */}
      <section className="py-16 px-4 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Campus Placements Are Challenging</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Overwhelming Information</h3>
                <p className="text-gray-600">Students often struggle with the vast amount of material to cover, from DSA to aptitude, resulting in unfocused preparation.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Lack of Personalized Guidance</h3>
                <p className="text-gray-600">Generic preparation doesn't account for individual strengths and weaknesses, leading to inefficient use of limited preparation time.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">No Real-time Feedback</h3>
                <p className="text-gray-600">Without immediate feedback on performance, students can't identify improvement areas quickly enough to adapt their preparation strategy.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Company-specific Preparation</h3>
                <p className="text-gray-600">Each company has unique interview patterns and preferences that students are often unaware of until it's too late.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={moduleUsageData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {moduleUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="bg-gray-50 p-4 text-center text-gray-700">
                <p>Areas Students Need Most Help With</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 px-4 lg:px-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">How Placement-Prep Transforms Your Preparation</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Our comprehensive platform addresses every aspect of campus placement preparation with AI-powered personalization.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Proven Results</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Our data shows a significant improvement in placement rates and package values for students who use Placement-Prep.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center text-indigo-600">Placement Success Rate Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={placementData}>
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
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Annual Package (₹)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Annual Package']} />
                  <Bar dataKey="value" fill="#8884d8">
                    {salaryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-indigo-600">Companies Recruiting Through Our Platform</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={companyVisitsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Number of Companies', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8">
                    {companyVisitsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 lg:px-16 bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Hear from students who transformed their placement journey with Placement-Prep.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                  <Star className="text-yellow-400" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Our platform guides you through every step of your placement journey with personalized assistance.</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Create Your Profile",
                  description: "Set up your academic profile, skills, and career preferences to get personalized recommendations."
                },
                {
                  step: 2,
                  title: "Get Your Custom Preparation Plan",
                  description: "Our AI analyzes your profile and creates a tailored preparation roadmap based on your strengths, weaknesses, and target companies."
                },
                {
                  step: 3,
                  title: "Practice with Precision",
                  description: "Work through company-specific coding challenges, aptitude tests, and interview questions that match your plan."
                },
                {
                  step: 4,
                  title: "Track Your Progress",
                  description: "Monitor your improvement through detailed analytics that highlight your growing strengths and areas needing more attention."
                },
                {
                  step: 5,
                  title: "Optimize Your Resume",
                  description: "Use our AI-powered resume builder to create and refine your resume with real-time feedback aligned with industry expectations."
                },
                {
                  step: 6,
                  title: "Apply to Jobs With Confidence",
                  description: "Get notified about campus placement opportunities you qualify for and apply directly through our platform."
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center md:justify-between">
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:mr-8' : 'md:order-1 md:ml-8'}`}>
                    <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-indigo-500 to-blue-600' : 'from-blue-600 to-indigo-500'} text-white p-6 rounded-lg shadow-lg`}>
                      <h3 className="text-xl font-semibold mb-2">Step {item.step}: {item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg z-10">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="md:w-5/12 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills You'll Develop Section */}
      <section className="py-16 px-4 lg:px-16 bg-gradient-to-r from-indigo-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Skills You'll Develop</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Our platform helps you build the essential skills that top companies look for.</p>
          
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

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Placement Journey?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Join thousands of students who have already secured their dream jobs through our platform.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-indigo-100 text-lg font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center">
              Get Started Now <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="bg-transparent hover:bg-indigo-700 border-2 border-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-indigo-200">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-indigo-200">Partner Colleges</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Hiring Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-indigo-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Get answers to common questions about Placement-Prep.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How does Placement-Prep differ from other preparation platforms?",
                answer: "Placement-Prep is the only platform that combines personalized learning paths, company-specific preparation, AI-powered resume building, and direct application capabilities in one integrated system tailored specifically for campus placements."
              },
              {
                question: "How much time should I dedicate to preparation on the platform?",
                answer: "Our AI analyzes your current skill level and target companies to recommend an optimal preparation schedule. Most students see significant results with 1-2 hours of focused daily practice over 2-3 months."
              },
              {
                question: "Can I access the platform on mobile devices?",
                answer: "Yes, Placement-Prep is fully responsive and works on all devices. We're also developing a dedicated mobile app for an even better on-the-go experience."
              },
              {
                question: "How does the AI assistant help during preparation?",
                answer: "Our AI assistant provides real-time hints when you're stuck on coding problems, suggests next steps in your preparation journey, answers questions about companies, and helps you navigate the platform efficiently."
              },
              {
                question: "Do you guarantee placement?",
                answer: "While we can't guarantee placement (as final hiring decisions rest with companies), our data shows that students who consistently follow our personalized preparation plans achieve a 94% placement rate compared to the average 75%."
              },
              {
                question: "How current is your problem database?",
                answer: "Our problem database is updated weekly based on the latest interview experiences shared by students, ensuring you practice the most relevant questions for current hiring cycles."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 transition duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 lg:px-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Placement Success Story Today</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Join Placement-Prep and gain the competitive edge in your campus placement journey.</p>
          
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300">
            Create Your Free Account
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">About Us</div>
            <div className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Contact</div>
            <div className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Blog</div>
            <div className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Terms of Service</div>
            <div className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Privacy Policy</div>
          </div>
          
          <div className="mt-8 text-gray-400">
            © {new Date().getFullYear()} Placement-Prep. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;