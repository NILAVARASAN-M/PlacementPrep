import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
// import { companyDataFull } from './Company_Storage';
import { jobPostings } from './Company_Storage';
import { problem_based_on_company_new } from "./Company_Storage";

import {
  Search,
  ChevronDown,
  ChevronUp,
  Youtube,
  Globe,
  BookOpen,
  MessageSquare,
  PlusCircle,
  Star,
  StarOff,
  Edit,
  Check,
  X,
  Code,
  Award,
  Clock,
} from "lucide-react";

import { SolutionPanel } from './solution-panel';
import { BlogPanel } from './Blog-Panel';
import { useNavigate } from 'react-router-dom';

const CompanyPage = () => {
  // Chart colors
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A44AD8', '#FF5733', '#33FF57', '#5733FF', '#FFC0CB']; // color for the departments
  const GENDER_COLORS = ['#3366CC', '#FF9999'];
  const CONVERSION_COLORS = ['#4CAF50', '#F44336'];
  const years = ['2024', '2023', '2022', '2021'];

  const [activeTab, setActiveTab] = useState('insights');
  const [selectedYear, setSelectedYear] = useState('2024');
  const { company_name } = useParams<{ company_name?: string }>(); 
  const jobsSectionRef = useRef<HTMLDivElement | null>(null); // Create a ref

  const companyKey = company_name?.toLowerCase() || '';
  // Get current company data
  const [companyDataFull, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/company/${company_name}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          }
        );
      }, [company_name]);

  const new_data = companyDataFull.map((company)=>{
    return {
        name: company.name,
        logo: company.logo,
        description: company.description,
        eligibleDepartments: company.eligibleDepartments,
        highlights: company.highlights,
        isHiring: company.isHiring,
        yearlyStats: company.yearlyStats,
    }
});
  const company = new_data.find((company) => company.name.toLowerCase() === companyKey // Exact name match
  ) ||
  {
      name: "Unknown Company",
      logo: "/api/placeholder/150/100",
      description: "Information about this company is not available yet.",
      highlights: {
          jobsAvailable: 0,
          hired: 0,
          highestCTC: "N/A",
      },
      eligibleDepartments: ["ALL"],
      isHiring: false,
      yearlyStats: {},
  };
  
  const selectedYearData = company.yearlyStats[selectedYear] || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* SECTION 1: Company Header */}
      <div className="bg-white shadow-md rounded-lg mx-4 my-4 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`} 
            className="w-16 h-16 md:w-24 md:h-24 object-contain mr-6 mb-4 md:mb-0"
          />
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-800">{company.name}</h1>
            <p className="text-gray-600 my-3 max-w-3xl">{company.description}</p>
            
            {/* Company Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-blue-600 font-medium">Jobs Available</p>
                <p className="text-2xl font-bold text-blue-800">{company.highlights.jobsAvailable}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-sm text-green-600 font-medium">Students Hired</p>
                <p className="text-2xl font-bold text-green-800">{company.highlights.hired}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-sm text-purple-600 font-medium">Highest CTC</p>
                <p className="text-2xl font-bold text-purple-800">{company.highlights.highestCTC}</p>
              </div>
            </div>
            
            {/* Eligible Departments */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Eligible Departments:</p>
              <div className="flex flex-wrap gap-2">
                {company.eligibleDepartments.map((dept, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Apply Button */}
          <div className="mt-6 md:mt-0 ml-0 md:ml-6 w-full md:w-auto">
            <button 
              className={`px-6 py-3 rounded-lg text-white font-medium transition-all w-full md:w-auto
                ${company.isHiring 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-400 cursor-not-allowed'}`}
              onClick={() => {
                if (!company.isHiring) {
                  alert('This company is not currently hiring.');
                } else {
                  // alert('Redirecting to application process...');
                  setActiveTab('jobs');
                  // Scroll to the JobsSection after a short delay
                  setTimeout(() => {
                    if (jobsSectionRef.current) {
                      const yOffset = jobsSectionRef.current.getBoundingClientRect().top + window.scrollY - 140; // Adjust `-20` if needed
                      window.scrollTo({ top: yOffset, behavior: "smooth" });
                    }
                  }, 100);
                  
                }
              }}
            >
              {company.isHiring ? 'Apply Now' : 'Not Hiring'}
            </button>
          </div>
        </div>
      </div>
      
      {/* SECTION 2: Tabs and Content */}
      <div className="bg-white shadow-md rounded-lg mx-4 my-6 p-6">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200 mb-6">
          <button 
            className={`px-4 py-2 font-medium text-sm mr-4 border-b-2 transition-all ${
              activeTab === 'insights' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('insights')}
          >
            Insights
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm mr-4 border-b-2 transition-all ${
              activeTab === 'problems' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('problems')}
          >
            Problems
          </button>

          <button 
            className={`px-4 py-2 font-medium text-sm mr-4 border-b-2 transition-all ${
              activeTab === 'jobs' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('jobs')}
          >
            Jobs Posted
          </button>

          <button 
            className={`px-4 py-2 font-medium text-sm mr-4 border-b-2 transition-all ${
              activeTab === 'tips' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('tips')}
          >
            Tips & Tricks
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-all ${
              activeTab === 'resume' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('resume')}
          >
            Resume
          </button>
        </div>
        
        {/* Tab Content */}
        <div>
          {/* Insights Tab */}
          {activeTab === 'insights' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Company Insights</h2>
              
              {/* Overview Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">4-Year Overview</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                        {years.map(year => (
                          <th key={year} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {year}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Job Types</td>
                        {years.map(year => (
                          <td key={year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {company.yearlyStats[year]?.jobTypeCount || 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Students Hired</td>
                        {years.map(year => (
                          <td key={year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {company.yearlyStats[year]?.hired || 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Highest CTC (LPA)</td>
                        {years.map(year => (
                          <td key={year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {company.yearlyStats[year]?.highestCTC ? `₹${company.yearlyStats[year].highestCTC}` : 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Avg CTC (LPA)</td>
                        {years.map(year => (
                          <td key={year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {company.yearlyStats[year]?.avgCTC ? `₹${company.yearlyStats[year].avgCTC}` : 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Median CTC (LPA)</td>
                        {years.map(year => (
                          <td key={year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {company.yearlyStats[year]?.medianCTC ? `₹${company.yearlyStats[year].medianCTC}` : 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lowest CTC (LPA)</td>
                        {years.map(year => (
                          <td key={year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {company.yearlyStats[year]?.lowestCTC ? `₹${company.yearlyStats[year].lowestCTC}` : 'N/A'}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Year Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Placement Statistics</h3>
                <div className="flex gap-2 mb-6">
                  {years.map(year => (
                    <button
                      key={year}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedYear === year
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Charts */}
              {Object.keys(selectedYearData).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Gender Distribution */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-md font-semibold text-gray-700 mb-4">Gender Distribution ({selectedYear})</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={selectedYearData.genderPlacement}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {selectedYearData.genderPlacement.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Department-wise Placement */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-md font-semibold text-gray-700 mb-4">Department-wise Placement ({selectedYear})</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={selectedYearData.departmentPlacement}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {selectedYearData.departmentPlacement.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Intern Conversion */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-md font-semibold text-gray-700 mb-4">Intern to Full-time Conversion ({selectedYear})</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                        <Pie
                            data={selectedYearData.internConversion}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {selectedYearData.internConversion.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={CONVERSION_COLORS[index % CONVERSION_COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Month-wise Placement */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-md font-semibold text-gray-700 mb-4">Month-wise Placement ({selectedYear})</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={selectedYearData.yearWisePlacement}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#4F46E5" name="Students Placed" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-yellow-800">
                  No data available for the selected year.
                </div>
              )}
            </div>
          )}
          
          {/* Problems Tab */}
          {activeTab === 'problems' && (
            // <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              // {/* <div className="text-center">
              //   <div className="text-gray-400 text-6xl mb-4">👨‍💻</div>
              //   <h3 className="text-xl font-medium text-gray-700 mb-2">Coming Soon</h3>
              //   <p className="text-gray-500">We're cooking up some challenging problems for you!</p>
              // </div> */}
              <ProblemSection />
              // <ProblemSectionNew />
            // </div>
          )}
          
          {/* Jobs Posted Tab */}
          {activeTab === 'jobs' && (
            <div ref={jobsSectionRef}>
            <JobsSection />
            </div>
          )}
          
          {/* Tips & Tricks Tab */}
          {activeTab === 'tips' && (
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-gray-400 text-6xl mb-4">💡</div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Coming Soon</h3>
                <p className="text-gray-500">We're collecting insider tips to help you succeed!</p>
              </div>
            </div>
          )}
          
          {/* Resume Tab */}
          {activeTab === 'resume' && (
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-gray-400 text-6xl mb-4">📄</div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Coming Soon</h3>
                <p className="text-gray-500">We're preparing resume templates tailored for this company!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const JobsSection = () => {
  const { company_name } = useParams();
  const [selectedJob, setSelectedJob] = useState(null);
  const [hoveredJob, setHoveredJob] = useState(null);
  const navigate = useNavigate();
  const getJobsByCompany = (companyName) => {
    const company = jobPostings.find(company => company.name.toLowerCase() === companyName.toLowerCase());
    return company ? company.jobs : [];
  };

  const companyJobs = getJobsByCompany(company_name);
  // Handle card click
  const handleCardClick = (jobId) => {
    setSelectedJob(jobId === selectedJob ? null : jobId);
  };

  // Handle apply button click
  const handleApply = (e, jobId) => {
    e.stopPropagation(); // Prevent card click event
    // Here you would integrate with your application submission logic
    navigate(`/company/${company_name}/${jobId}`)
    scrollTo(0, 0);
  };

  return (
    <div className="w-full py-8 px-4">

      <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Current Openings at {company_name}
        </span>
      </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover exciting career opportunities and take the next step in your professional journey with {company_name}.
          </p>
          {/* <TypingText text={`Discover exciting career opportunities and take the next step in your professional journey with ${company_name}.`} /> */}
      </div>
      
      {companyJobs.length === 0 ? (
        <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md">
          <div className="text-center p-8">
            <div className="text-gray-400 text-6xl mb-4">💼</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No Open Positions</h3>
            <p className="text-gray-500">There are currently no job postings from {company_name}.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {companyJobs.map((job) => (
            <div 
              key={job.id}
              className={`cursor-pointer rounded-2xl transition-all duration-300 transform ${
                selectedJob === job.id 
                  ? 'border-2 border-blue-500 bg-blue-50 shadow-xl ring-4 ring-blue-200 scale-105' 
                  : hoveredJob === job.id
                    ? 'border border-blue-300 bg-blue-50 shadow-lg scale-102'
                    : 'border border-gray-200 bg-white shadow-md hover:shadow-xl'
              }`}
              onClick={() => handleCardClick(job.id)}
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <div className="p-8">
                {/* Header with Role and Job Type */}
                <div className="flex justify-between items-start mb-5">
                  <h3 className={`text-xl font-bold ${
                    selectedJob === job.id || hoveredJob === job.id 
                      ? 'text-blue-600' 
                      : 'text-gray-800'
                  }`}>
                    {job.jobRole}
                  </h3>
                  <span className={`px-4 py-1.5 text-xs font-semibold rounded-full ${
                    job.job_type === "Full Time" 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {job.job_type}
                  </span>
                </div>
                
                {/* Dates Section - FIXED ALIGNMENT */}
                <div className="mb-5 space-y-2 border-b border-dashed pb-4 border-gray-200">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                      selectedJob === job.id || hoveredJob === job.id 
                        ? 'bg-blue-100' 
                        : 'bg-gray-100'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 ${
                        selectedJob === job.id || hoveredJob === job.id 
                          ? 'text-blue-600' 
                          : 'text-gray-500'
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex">
                        <span className="font-medium text-sm w-16 mr-1">Posted:</span>
                        <span className={`text-sm ${
                          selectedJob === job.id || hoveredJob === job.id 
                            ? 'text-blue-600' 
                            : 'text-gray-600'
                        }`}>
                          {job.postedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                      selectedJob === job.id || hoveredJob === job.id 
                        ? 'bg-blue-100' 
                        : 'bg-gray-100'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 ${
                        selectedJob === job.id || hoveredJob === job.id 
                          ? 'text-blue-600' 
                          : 'text-gray-500'
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex">
                        <span className="font-medium text-sm w-16 mr-1">Closing:</span>
                        <span className={`text-sm ${
                          selectedJob === job.id || hoveredJob === job.id 
                            ? 'text-blue-600' 
                            : 'text-gray-600'
                        }`}>
                          {job.closingDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Eligibility Section */}
                <div className="mb-5">
                  <p className={`text-sm font-bold mb-3 ${
                    selectedJob === job.id || hoveredJob === job.id 
                      ? 'text-blue-700' 
                      : 'text-gray-700'
                  }`}>
                    Eligibility Requirements
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.eligible_departments.map((dept, index) => (
                      <span 
                        key={index}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          selectedJob === job.id || hoveredJob === job.id 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-lg ${
                    selectedJob === job.id || hoveredJob === job.id 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">
                      Min. CGPA: {job.minimum_cgpa.toFixed(1)}
                    </span>
                  </div>
                </div>
                
                {/* Description Section */}
                <div className="mb-6">
                  <h4 className={`text-sm font-bold mb-2 ${
                    selectedJob === job.id || hoveredJob === job.id 
                      ? 'text-blue-700' 
                      : 'text-gray-700'
                  }`}>
                    Job Description
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    selectedJob === job.id || hoveredJob === job.id 
                      ? 'text-blue-600' 
                      : 'text-gray-600'
                  }`}>
                    {job.description}
                  </p>
                </div>
                
                {/* Apply Button */}
                <button
                  onClick={(e) => handleApply(e, job.id)}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedJob === job.id || hoveredJob === job.id
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-md'
                  }`}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export const ProblemSection = () => {
  const { company_name } = useParams<{ company_name?: string }>(); 
  // const getProblemsByCompany = (companyName: string) => {
  //   const company = problem_based_on_company.find((c) => c.name.toLowerCase() === companyName.toLowerCase());
  //   return company ? company.problem_set : [];
  // };
   const [selectedSolution, setSelectedSolution] = useState<{
      name: string
      solution: string
    } | null>(null)
    const [isSolutionPanelOpen, setIsSolutionPanelOpen] = useState(false)

    // const [selectedBlog, setSelectedBlog] = useState<{
    //   name: string
    //   solution: string
    // } | null>(null)
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [isBlogPanelOpen, setIsBlogPanelOpen] = useState(false)

    const handleOpenBlog = (problem, e) => {
      e.stopPropagation() // Prevent row expansion
      setSelectedBlog(null)
      setIsBlogPanelOpen(true)
    }
  
    // Close solution panel
    const handleCloseBlog = () => {
      setIsBlogPanelOpen(false)
    }

  const problems_set = problem_based_on_company_new.filter((problem) =>
      problem.companys?.find(
        (company) => company.toLowerCase() === company_name.toLowerCase()
      )
    );
    const problem_set_new = problems_set.map((problems)=>({...problems, status: false, favorite: false}));
    console.log(problem_set_new);
  // Sample data
  const [problems, setProblems] = useState(problem_set_new);
  console.log(problems);
  // State management
  const [expandedRow, setExpandedRow] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState({
    difficulty: [],
    tags: [],
    status: null,
    favorites: false,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const problemsPerPage = 8


  const handleOpenSolution = (problem, e) => {
    e.stopPropagation() // Prevent row expansion
    setSelectedSolution({
      name: problem.name,
      solution: problem.solution,
    })
    setIsSolutionPanelOpen(true)
  }

  // Close solution panel
  const handleCloseSolution = () => {
    setIsSolutionPanelOpen(false)
  }

  // Toggle expanded row
  const toggleRow = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null)
    } else {
      setExpandedRow(id)
    }
  }

  // Toggle problem status
  const toggleStatus = (id, event) => {
    event.stopPropagation()
    setProblems(problems.map((problem) => (problem.id === id ? { ...problem, status: !problem.status } : problem)))
  }

  // Toggle favorite
  const toggleFavorite = (id, event) => {
    event.stopPropagation()
    setProblems(problems.map((problem) => (problem.id === id ? { ...problem, favorite: !problem.favorite } : problem)))
  }

  // Filter problems based on search and filters
  const filteredProblems = problems.filter((problem) => {
    // Search by name
    if (searchQuery && !problem.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Filter by difficulty
    if (activeFilters.difficulty.length > 0 && !activeFilters.difficulty.includes(problem.difficulty)) {
      return false
    }

    // Filter by tags (show if problem has ANY of the selected tags)
    if (activeFilters.tags.length > 0 && !problem.tags.some((tag) => activeFilters.tags.includes(tag))) {
      return false
    }

    // Filter by status
    if (activeFilters.status !== null && problem.status !== activeFilters.status) {
      return false
    }

    // Filter by favorites
    if (activeFilters.favorites && !problem.favorite) {
      return false
    }

    return true
  })

  // Calculate stats for dashboard
  const stats = {
    total: problems.length,
    solved: problems.filter((problem) => problem.status).length,
    unsolved: problems.filter((problem) => !problem.status).length,
    byDifficulty: {
      Easy: problems.filter((problem) => problem.difficulty === "Easy" && problem.status).length,
      Medium: problems.filter((problem) => problem.difficulty === "Medium" && problem.status).length,
      Hard: problems.filter((problem) => problem.difficulty === "Hard" && problem.status).length,
    },
    byTags: {},
  }

  // Calculate problems solved by tag
  const allTags = [...new Set(problems.flatMap((problem) => problem.tags))]
  allTags.forEach((tag) => {
    stats.byTags[tag] = problems.filter((problem) => problem.tags.includes(tag) && problem.status).length
  })

  // Pagination
  const indexOfLastProblem = currentPage * problemsPerPage
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem)
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Handle filter change
  const toggleDifficultyFilter = (difficulty) => {
    setActiveFilters((prev) => {
      const newDifficulties = prev.difficulty.includes(difficulty)
        ? prev.difficulty.filter((d) => d !== difficulty)
        : [...prev.difficulty, difficulty]

      return { ...prev, difficulty: newDifficulties }
    })
    setCurrentPage(1)
  }

  const toggleTagFilter = (tag) => {
    setActiveFilters((prev) => {
      const newTags = prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag]

      return { ...prev, tags: newTags }
    })
    setCurrentPage(1)
  }

  const toggleStatusFilter = (status) => {
    setActiveFilters((prev) => ({
      ...prev,
      status: prev.status === status ? null : status,
    }))
    setCurrentPage(1)
  }

  const toggleFavoritesFilter = () => {
    setActiveFilters((prev) => ({
      ...prev,
      favorites: !prev.favorites,
    }))
    setCurrentPage(1)
  }

  // Determine difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return ""
    }
  }

  // Reset all filters
  const resetFilters = () => {
    setActiveFilters({
      difficulty: [],
      tags: [],
      status: null,
      favorites: false,
    })
    setSearchQuery("")
    setCurrentPage(1)
  }

  // Calculate completion percentage
  const completionPercentage = Math.round((stats.solved / stats.total) * 100)

  return (
<div className="w-full py-8 px-4">      {/* Header with Google branding */}
      <div className="mb-8 relative">
        <div className="absolute -top-6 -right-6 pointer-events-none">
        <svg width="300" height="100" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M176.019 75.9219C164.449 84.45 147.679 89 133.24 89C112.995 89 94.7684 81.5119 80.9797 69.0578C79.8963 68.0785 80.867 66.7438 82.167 67.5065C97.0478 76.1646 115.447 81.3733 134.453 81.3733C147.271 81.3733 161.372 78.7212 174.338 73.2179C176.296 72.3858 177.934 74.5005 176.019 75.9219Z" fill="#FF9900"/>
<path d="M180.829 70.4182C179.356 68.5289 171.053 69.5256 167.326 69.9676C166.191 70.1062 166.018 69.1182 167.04 68.4075C173.653 63.7535 184.504 65.0969 185.769 66.6569C187.034 68.2255 185.44 79.1023 179.226 84.2937C178.272 85.091 177.362 84.6664 177.787 83.609C179.182 80.125 182.311 72.3162 180.829 70.4182Z" fill="#FF9900"/>
<path d="M167.586 35.552V31.0279C167.586 30.3433 168.106 29.8839 168.73 29.8839H188.984C189.634 29.8839 190.154 30.3519 190.154 31.0279V34.902C190.146 35.552 189.6 36.4013 188.629 37.7446L178.133 52.7295C182.033 52.6341 186.15 53.2148 189.686 55.2081C190.484 55.6588 190.7 56.3175 190.761 56.9675V61.7949C190.761 62.4535 190.033 63.2249 189.27 62.8262C183.039 59.5589 174.762 59.2035 167.872 62.8609C167.17 63.2422 166.433 62.4795 166.433 61.8209V57.2362C166.433 56.4995 166.442 55.2428 167.179 54.1248L179.338 36.6873H168.756C168.106 36.6873 167.586 36.228 167.586 35.552Z" fill="#221F1F"/>
<path d="M93.7013 63.7798H87.5392C86.9499 63.7365 86.4819 63.2944 86.4385 62.7311V31.1062C86.4385 30.4735 86.9672 29.9708 87.6259 29.9708H93.3719C93.9699 29.9968 94.4466 30.4561 94.4899 31.0281V35.1622H94.6026C96.1019 31.1668 98.9186 29.3035 102.715 29.3035C106.571 29.3035 108.981 31.1668 110.714 35.1622C112.205 31.1668 115.593 29.3035 119.225 29.3035C121.807 29.3035 124.633 30.3695 126.357 32.7615C128.307 35.4222 127.909 39.2876 127.909 42.6763L127.9 62.6358C127.9 63.2684 127.371 63.7798 126.713 63.7798H120.559C119.944 63.7365 119.45 63.2424 119.45 62.6358V45.8743C119.45 44.5396 119.571 41.2116 119.277 39.9462C118.817 37.8229 117.439 37.2249 115.654 37.2249C114.163 37.2249 112.603 38.2215 111.971 39.8162C111.338 41.4109 111.399 44.0803 111.399 45.8743V62.6358C111.399 63.2684 110.87 63.7798 110.211 63.7798H104.058C103.434 63.7365 102.949 63.2424 102.949 62.6358L102.94 45.8743C102.94 42.3469 103.521 37.1555 99.144 37.1555C94.7153 37.1555 94.8886 42.2169 94.8886 45.8743V62.6358C94.8886 63.2684 94.3599 63.7798 93.7013 63.7798Z" fill="#221F1F"/>
<path d="M207.591 29.3035C216.734 29.3035 221.683 37.1555 221.683 47.1396C221.683 56.7857 216.214 64.4384 207.591 64.4384C198.612 64.4384 193.724 56.5864 193.724 46.8016C193.724 36.9562 198.673 29.3035 207.591 29.3035ZM207.643 35.7602C203.102 35.7602 202.816 41.9482 202.816 45.805C202.816 49.6703 202.755 57.9211 207.591 57.9211C212.366 57.9211 212.592 51.265 212.592 47.209C212.592 44.5396 212.479 41.3502 211.673 38.8195C210.98 36.6182 209.602 35.7602 207.643 35.7602Z" fill="#221F1F"/>
<path d="M233.539 63.7798H227.403C226.788 63.7365 226.294 63.2424 226.294 62.6358L226.285 31.0021C226.337 30.4215 226.848 29.9708 227.472 29.9708H233.184C233.721 29.9968 234.163 30.3608 234.284 30.8548V35.6909H234.397C236.122 31.3661 238.54 29.3035 242.795 29.3035C245.56 29.3035 248.255 30.3001 249.988 33.0302C251.6 35.5609 251.6 39.8162 251.6 42.8756V62.7831C251.531 63.3378 251.02 63.7798 250.413 63.7798H244.234C243.67 63.7365 243.202 63.3204 243.142 62.7831V45.6056C243.142 42.1476 243.54 37.0862 239.285 37.0862C237.786 37.0862 236.408 38.0915 235.723 39.6169C234.856 41.5496 234.744 43.4736 234.744 45.6056V62.6358C234.735 63.2684 234.198 63.7798 233.539 63.7798Z" fill="#221F1F"/>
<path d="M151.439 48.6735V47.3388C146.985 47.3388 142.279 48.2922 142.279 53.5442C142.279 56.2049 143.657 58.0076 146.023 58.0076C147.756 58.0076 149.307 56.9416 150.287 55.2082C151.5 53.0762 151.439 51.0742 151.439 48.6735ZM157.653 63.693C157.246 64.057 156.657 64.083 156.197 63.8403C154.152 62.1416 153.788 61.353 152.661 59.7323C149.281 63.1817 146.889 64.213 142.504 64.213C137.321 64.213 133.283 61.015 133.283 54.6102C133.283 49.6095 135.995 46.2035 139.852 44.5395C143.197 43.0661 147.869 42.8061 151.439 42.3988V41.6015C151.439 40.1368 151.552 38.4034 150.694 37.1381C149.94 36.0027 148.501 35.5347 147.236 35.5347C144.887 35.5347 142.79 36.7394 142.279 39.2354C142.175 39.7901 141.767 40.3361 141.213 40.3621L135.233 39.7208C134.73 39.6081 134.175 39.2008 134.314 38.4294C135.692 31.184 142.235 29 148.094 29C151.093 29 155.01 29.7973 157.376 32.068C160.375 34.8674 160.089 38.6028 160.089 42.6675V52.2702C160.089 55.1562 161.285 56.4216 162.411 57.9816C162.81 58.5363 162.897 59.2036 162.394 59.6196C161.137 60.6683 158.901 62.6183 157.671 63.7103L157.653 63.693Z" fill="#221F1F"/>
<path d="M70.6568 48.6735V47.3388C66.2021 47.3388 61.4961 48.2922 61.4961 53.5442C61.4961 56.2049 62.8741 58.0076 65.2401 58.0076C66.9734 58.0076 68.5248 56.9416 69.5041 55.2082C70.7175 53.0762 70.6568 51.0742 70.6568 48.6735ZM76.8708 63.693C76.4635 64.057 75.8742 64.083 75.4148 63.8403C73.3695 62.1416 73.0055 61.353 71.8788 59.7323C68.4988 63.1817 66.1068 64.213 61.7214 64.213C56.5387 64.213 52.5 61.015 52.5 54.6102C52.5 49.6095 55.2127 46.2035 59.0694 44.5395C62.4147 43.0661 67.0861 42.8061 70.6568 42.3988V41.6015C70.6568 40.1368 70.7695 38.4034 69.9115 37.1381C69.1574 36.0027 67.7188 35.5347 66.4534 35.5347C64.1047 35.5347 62.0074 36.7394 61.4961 39.2354C61.3921 39.7901 60.9847 40.3361 60.4301 40.3621L54.45 39.7208C53.9473 39.6081 53.3927 39.2008 53.5313 38.4294C54.9093 31.184 61.4527 29 67.3114 29C70.3101 29 74.2275 29.7973 76.5935 32.068C79.5922 34.8674 79.3062 38.6028 79.3062 42.6675V52.2702C79.3062 55.1562 80.5022 56.4216 81.6289 57.9816C82.0275 58.5363 82.1142 59.2036 81.6115 59.6196C80.3549 60.6683 78.1188 62.6183 76.8882 63.7103L76.8708 63.693Z" fill="#221F1F"/>
</svg>



          
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg shadow-md">
            <Code className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{company_name? company_name.charAt(0).toUpperCase() + company_name.slice(1): ""} Interview Problems</h1>
        </div>
        <p className="text-gray-600 max-w-3xl">
          Master the most frequently asked coding problems at {company_name? company_name.charAt(0).toUpperCase() + company_name.slice(1): ""} interviews and increase your chances of success.
          Track your progress and practice systematically to ace your next interview.
        </p>
      </div>

      {/* Progress Dashboard */}
      <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-800">Your Progress Dashboard</h2>
          </div>
        </div>

        <div className="p-6">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Completion</span>
              <span className="text-sm font-medium text-gray-700">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-400 h-2.5 rounded-full"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Problems */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 transition-all hover:shadow-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Problems</p>
                  <h3 className="text-3xl font-bold text-gray-800 mt-1">{stats.total}</h3>
                </div>
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-gray-600" />
                </div>
              </div>
            </div>

            {/* Solved */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 transition-all hover:shadow-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Solved</p>
                  <h3 className="text-3xl font-bold text-green-600 mt-1">{stats.solved}</h3>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>

            {/* Remaining */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 transition-all hover:shadow-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Remaining</p>
                  <h3 className="text-3xl font-bold text-blue-600 mt-1">{stats.unsolved}</h3>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            {/* By Difficulty */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 transition-all hover:shadow-md">
              <div className="flex justify-between mb-3">
                <p className="text-sm font-medium text-gray-500">By Difficulty</p>
                <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 text-purple-600" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-xs text-gray-600">Easy</span>
                    <span className="text-xs font-medium">
                      {stats.byDifficulty.Easy}/{problems.filter((p) => p.difficulty === "Easy").length}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-xs text-gray-600">Medium</span>
                    <span className="text-xs font-medium">
                      {stats.byDifficulty.Medium}/{problems.filter((p) => p.difficulty === "Medium").length}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-xs text-gray-600">Hard</span>
                    <span className="text-xs font-medium">
                      {stats.byDifficulty.Hard}/{problems.filter((p) => p.difficulty === "Hard").length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>

          <div className="w-full lg:w-2/3 flex flex-wrap gap-2">
            {/* Difficulty filters */}
            <div className="dropdown inline-block relative">
              <button className="bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-lg inline-flex items-center border border-gray-300 shadow-sm transition-colors">
                <span className="mr-1">Difficulty</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <ul className="dropdown-menu absolute hidden bg-white shadow-lg rounded-lg mt-1 py-1 z-10 border border-gray-100 min-w-[150px]">
                {["Easy", "Medium", "Hard"].map((difficulty) => (
                  <li key={difficulty} className="cursor-pointer">
                    <label className="px-4 py-2 hover:bg-gray-50 flex items-center w-full">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={activeFilters.difficulty.includes(difficulty)}
                        onChange={() => toggleDifficultyFilter(difficulty)}
                      />
                      <span
                        className={`text-sm ${
                          difficulty === "Easy"
                            ? "text-green-600"
                            : difficulty === "Medium"
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {difficulty}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags filter dropdown */}
            <div className="dropdown inline-block relative">
              <button className="bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-lg inline-flex items-center border border-gray-300 shadow-sm transition-colors">
                <span className="mr-1">Tags</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <ul className="dropdown-menu absolute hidden bg-white shadow-lg rounded-lg mt-1 py-1 z-10 max-h-64 overflow-y-auto border border-gray-100 min-w-[180px]">
                {allTags.map((tag) => (
                  <li key={tag} className="cursor-pointer">
                    <label className="px-4 py-2 hover:bg-gray-50 flex items-center w-full">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={activeFilters.tags.includes(tag)}
                        onChange={() => toggleTagFilter(tag)}
                      />
                      <span className="text-sm">{tag}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status filter */}
            <div className="dropdown inline-block relative">
              <button className="bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-lg inline-flex items-center border border-gray-300 shadow-sm transition-colors">
                <span className="mr-1">Status</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <ul className="dropdown-menu absolute hidden bg-white shadow-lg rounded-lg mt-1 py-1 z-10 border border-gray-100 min-w-[150px]">
                <li className="cursor-pointer">
                  <label className="px-4 py-2 hover:bg-gray-50 flex items-center w-full">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={activeFilters.status === true}
                      onChange={() => toggleStatusFilter(true)}
                    />
                    <span className="text-sm text-green-600">Solved</span>
                  </label>
                </li>
                <li className="cursor-pointer">
                  <label className="px-4 py-2 hover:bg-gray-50 flex items-center w-full">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={activeFilters.status === false}
                      onChange={() => toggleStatusFilter(false)}
                    />
                    <span className="text-sm text-red-600">Unsolved</span>
                  </label>
                </li>
              </ul>
            </div>

            {/* Favorites filter */}
            <button
              className={`py-2.5 px-4 rounded-lg inline-flex items-center border shadow-sm transition-colors ${
                activeFilters.favorites
                  ? "bg-yellow-50 text-yellow-700 border-yellow-300 hover:bg-yellow-100"
                  : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
              }`}
              onClick={toggleFavoritesFilter}
            >
              <Star className={`h-4 w-4 mr-1.5 ${activeFilters.favorites ? "text-yellow-500 fill-yellow-500" : ""}`} />
              <span>Favorites</span>
            </button>

            {/* Reset filters */}
            {(activeFilters.difficulty.length > 0 ||
              activeFilters.tags.length > 0 ||
              activeFilters.status !== null ||
              activeFilters.favorites ||
              searchQuery) && (
              <button
                className="py-2.5 px-4 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 inline-flex items-center border border-red-200 shadow-sm transition-colors"
                onClick={resetFilters}
              >
                <X className="h-4 w-4 mr-1.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Problem Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Problem
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24"
                >
                  Difficulty
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tags
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-32"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentProblems.map((problem, index) => (
                <React.Fragment key={problem.id}>
                  <tr
                    className={`hover:bg-gray-50 cursor-pointer transition-colors ${problem.status ? "bg-green-50/50" : ""}`}
                    onClick={() => toggleRow(problem.id)}
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <button
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors
                            ${
                              problem.status
                                ? "bg-green-100 border-2 border-green-500 text-green-600"
                                : "border-2 border-gray-300 hover:border-gray-400"
                            }`}
                          onClick={(e) => toggleStatus(problem.id, e)}
                        >
                          {problem.status && <Check className="w-4 h-4" />}
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{indexOfFirstProblem+index+1  }</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{problem.name}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getDifficultyColor(problem.difficulty)}`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {problem.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                          >
                            {tag}
                          </span>
                        ))}
                        {problem.tags.length > 2 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                            +{problem.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation()
                            // Add note functionality would be implemented here
                          }}
                          title="Add note"
                        >
                          <PlusCircle className="w-5 h-5 text-gray-500" />
                        </button>
                        <button
                          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                          onClick={(e) => toggleFavorite(problem.id, e)}
                          title={problem.favorite ? "Remove from favorites" : "Add to favorites"}
                        >
                          {problem.favorite ? (
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          ) : (
                            <StarOff className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors" title="View details">
                          {expandedRow === problem.id ? (
                            <ChevronUp className="w-5 h-5 text-blue-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedRow === problem.id && (
                    <tr className="bg-gray-50">
                      <td colSpan="6" className="px-8 py-6">
                        <div className="flex flex-col space-y-6">
                          {/* Platforms */}
                          <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                              <Globe className="w-4 h-4 mr-2 text-blue-500" />
                              Solve on:
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {problem.platforms.map((platform, idx) => (
                                <a
                                  key={idx}
                                  href={platform.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center transition-colors"
                                >
                                  {platform.name === "LeetCode" ? (
                                    <div className="w-5 h-5 mr-2 flex items-center justify-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                      >
                                        <path
                                          d="M16.102 17.93l-2.697 2.697c-.622.622-1.694.622-2.316 0l-2.697-2.697c-.622-.622-.622-1.694 0-2.316l2.697-2.697c.622-.622 1.694-.622 2.316 0l2.697 2.697c.622.622.622 1.694 0 2.316z"
                                          fill="#FFA116"
                                        />
                                        <path
                                          d="M5.82 9.205l6.698-6.698c.622-.622 1.694-.622 2.316 0l6.698 6.698c.622.622.622 1.694 0 2.316l-6.698 6.698c-.622.622-1.694.622-2.316 0l-6.698-6.698c-.622-.622-.622-1.694 0-2.316z"
                                          fill="#B3B3B3"
                                        />
                                      </svg>
                                    </div>
                                  ) : (
                                    <span className="w-5 h-5 mr-2 flex items-center justify-center bg-gray-200 rounded-full text-xs font-bold">
                                      {platform.name.charAt(0)}
                                    </span>
                                  )}
                                  {platform.name}
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* YouTube Videos */}
                          <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                              <Youtube className="w-4 h-4 mr-2 text-red-500" />
                              Video Explanations:
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {problem.youtubeLinks.map((video, idx) => (
                                <a
                                  key={idx}
                                  href={video.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center transition-colors"
                                >
                                  <Youtube className="w-5 h-5 mr-2 text-red-500" />
                                  {video.title}
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Other resources */}
                          <div className="flex flex-wrap gap-4">
                            <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center transition-colors"
                            onClick={(e) => handleOpenSolution(problem, e)}
                            >
                              <BookOpen className="w-5 h-5 mr-2 text-purple-500" />
                              Solutions
                            </button>
                            <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center transition-colors"
                            onClick={(e) => handleOpenBlog(problem, e)}
                            >
                              <Edit className="w-5 h-5 mr-2 text-green-500" />
                              Blogs
                            </button>
                            <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center transition-colors">
                              <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                              AI Help
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
              {currentProblems.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-gray-100 rounded-full p-3 mb-3">
                        <Search className="h-6 w-6 text-gray-400" />
                      </div>
                      <p className="text-gray-500 font-medium">No problems match your filters</p>
                      <p className="text-gray-400 text-sm mt-1">Try adjusting your search criteria</p>
                      <button
                        onClick={resetFilters}
                        className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {filteredProblems.length > problemsPerPage && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium">
              {indexOfFirstProblem + 1}-{Math.min(indexOfLastProblem, filteredProblems.length)}
            </span>{" "}
            of <span className="font-medium">{filteredProblems.length}</span> problems
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>

            {[...Array(totalPages).keys()].map((number) => {
              // Only show a window of 5 pages around current page
              if (
                number + 1 === 1 ||
                number + 1 === totalPages ||
                (number + 1 >= currentPage - 2 && number + 1 <= currentPage + 2)
              ) {
                return (
                  <button
                    key={number + 1}
                    onClick={() => setCurrentPage(number + 1)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentPage === number + 1
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {number + 1}
                  </button>
                )
              } else if (
                (number + 1 === currentPage - 3 && currentPage > 4) ||
                (number + 1 === currentPage + 3 && currentPage < totalPages - 3)
              ) {
                return (
                  <span key={number + 1} className="px-2 py-2 text-gray-500">
                    ...
                  </span>
                )
              }
              return null
            })}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Add CSS for dropdown menus */}
      <style jsx>{`
        .dropdown:hover .dropdown-menu {
          display: block;
        }
      `}</style>
       {/* Solution Panel */}
        <SolutionPanel isOpen={isSolutionPanelOpen} onClose={handleCloseSolution} problem={selectedSolution} />
        <BlogPanel  isOpen={isBlogPanelOpen} onClose={handleCloseBlog}/>
    </div>
  )
}

export default CompanyPage;