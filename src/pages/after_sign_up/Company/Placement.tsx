import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Placement = () => {
    return <div>
        <PlacementDashboard />
        <PlacementStatisticsCharts />
        <DepartmentStatsDashboard />
    </div>
}

const PlacementDashboard = () => {
  // State for year selection
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  
  // Mock data - would come from your API in a real app
  const years = [2023, 2024, 2025];
  
  const companyData = {
    2023: {
      highestPaid: [
        { name: "Google", ctc: 45.2, hired: 12 },
        { name: "Microsoft", ctc: 42.8, hired: 15 },
        { name: "Amazon", ctc: 40.5, hired: 20 },
        { name: "Apple", ctc: 43.1, hired: 8 },
        { name: "Meta", ctc: 44.7, hired: 10 },
        { name: "Goldman Sachs", ctc: 38.5, hired: 5 },
        { name: "JP Morgan", ctc: 36.2, hired: 7 },
        { name: "Bloomberg", ctc: 41.3, hired: 4 },
        { name: "Uber", ctc: 39.8, hired: 6 },
        { name: "Netflix", ctc: 42.5, hired: 3 },
        { name: "LinkedIn", ctc: 37.9, hired: 8 },
        { name: "Oracle", ctc: 35.6, hired: 11 },
        { name: "Adobe", ctc: 36.3, hired: 9 },
        { name: "Salesforce", ctc: 37.1, hired: 14 },
        { name: "Twitter", ctc: 38.7, hired: 5 },
      ],
      topHiring: [
        { name: "Amazon", hired: 20, ctc: 40.5 },
        { name: "Microsoft", hired: 15, ctc: 42.8 },
        { name: "Google", hired: 12, ctc: 45.2 },
        { name: "Oracle", hired: 11, ctc: 35.6 },
        { name: "Meta", hired: 10, ctc: 44.7 }
      ]
    },
    2024: {
      highestPaid: [
        { name: "Meta", ctc: 48.2, hired: 14 },
        { name: "Google", ctc: 47.5, hired: 16 },
        { name: "Netflix", ctc: 46.8, hired: 5 },
        { name: "Apple", ctc: 45.3, hired: 12 },
        { name: "Microsoft", ctc: 44.7, hired: 18 },
        { name: "Amazon", ctc: 43.2, hired: 22 },
        { name: "Bloomberg", ctc: 42.5, hired: 7 },
        { name: "Uber", ctc: 42.1, hired: 10 },
        { name: "Goldman Sachs", ctc: 40.8, hired: 8 },
        { name: "JP Morgan", ctc: 39.5, hired: 9 },
        { name: "Adobe", ctc: 38.7, hired: 11 },
        { name: "Salesforce", ctc: 38.2, hired: 15 },
        { name: "LinkedIn", ctc: 37.8, hired: 9 },
        { name: "Twitter", ctc: 37.2, hired: 6 },
        { name: "Oracle", ctc: 36.9, hired: 13 },
      ],
      topHiring: [
        { name: "Amazon", hired: 22, ctc: 43.2 },
        { name: "Microsoft", hired: 18, ctc: 44.7 },
        { name: "Google", hired: 16, ctc: 47.5 },
        { name: "Salesforce", hired: 15, ctc: 38.2 },
        { name: "Meta", hired: 14, ctc: 48.2 }
      ]
    },
    2025: {
      highestPaid: [
        { name: "OpenAI", ctc: 52.5, hired: 8 },
        { name: "Meta", ctc: 51.8, hired: 17 },
        { name: "Google", ctc: 50.2, hired: 19 },
        { name: "Netflix", ctc: 49.5, hired: 6 },
        { name: "Anthropic", ctc: 48.7, hired: 5 },
        { name: "Apple", ctc: 47.6, hired: 15 },
        { name: "Microsoft", ctc: 46.8, hired: 21 },
        { name: "Bloomberg", ctc: 45.2, hired: 9 },
        { name: "Uber", ctc: 44.7, hired: 12 },
        { name: "Amazon", ctc: 44.1, hired: 25 },
        { name: "Goldman Sachs", ctc: 43.5, hired: 10 },
        { name: "JP Morgan", ctc: 42.8, hired: 11 },
        { name: "Adobe", ctc: 41.9, hired: 14 },
        { name: "Salesforce", ctc: 41.2, hired: 18 },
        { name: "LinkedIn", ctc: 40.5, hired: 12 },
      ],
      topHiring: [
        { name: "Amazon", hired: 25, ctc: 44.1 },
        { name: "Microsoft", hired: 21, ctc: 46.8 },
        { name: "Google", hired: 19, ctc: 50.2 },
        { name: "Salesforce", hired: 18, ctc: 41.2 },
        { name: "Meta", hired: 17, ctc: 51.8 }
      ]
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(companyData[selectedYear as keyof typeof companyData].highestPaid.length / itemsPerPage);
  const currentData = companyData[selectedYear as keyof typeof companyData].highestPaid.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle pagination
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  // Handle year change
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setCurrentPage(1); // Reset to first page on year change
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Student Placement Dashboard</h1>
          <p className="text-gray-600 mt-2">Explore placement statistics and top companies hiring students</p>
        </header>
        
        {/* Year Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-md overflow-hidden">
            {years.map(year => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-6 py-3 font-medium transition-colors duration-200 ${
                  selectedYear === year 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Highest Paid Companies Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Highest Paid Companies ({selectedYear})</h2>
              <p className="text-blue-100 text-sm">Sorted by CTC (Cost to Company) in lakhs per annum</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTC (LPA)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students Hired</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentData.map((company, index) => (
                    <tr key={company.name} className="hover:bg-blue-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹{company.ctc} LPA</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{company.hired}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, companyData[selectedYear as keyof typeof companyData].highestPaid.length)}
                </span> of{' '}
                <span className="font-medium">{companyData[selectedYear as keyof typeof companyData].highestPaid.length}</span> companies
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          
          {/* Top Hiring Companies Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Top Hiring Companies ({selectedYear})</h2>
              <p className="text-indigo-100 text-sm">Companies that hired the most students</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students Hired</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTC (LPA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {companyData[selectedYear as keyof typeof companyData].topHiring.map((company, index) => (
                    <tr key={company.name} className="hover:bg-indigo-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{company.hired}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹{company.ctc} LPA</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Stats Summary */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-100 rounded-lg p-4">
                  <p className="text-sm text-indigo-800 font-medium">Total Students Placed</p>
                  <p className="text-2xl font-bold text-indigo-900">
                    {companyData[selectedYear as keyof typeof companyData].highestPaid.reduce((sum, company) => sum + company.hired, 0)}
                  </p>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <p className="text-sm text-blue-800 font-medium">Average CTC</p>
                  <p className="text-2xl font-bold text-blue-900">
                    ₹{(companyData[selectedYear as keyof typeof companyData].highestPaid.reduce((sum, company) => sum + company.ctc, 0) / 
                    companyData[selectedYear as keyof typeof companyData].highestPaid.length).toFixed(2)} LPA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Stats */}
        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Placement Highlights ({selectedYear})</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-5 text-white shadow-md">
              <h3 className="text-lg font-semibold mb-2">Highest Package</h3>
              <p className="text-3xl font-bold">₹{companyData[selectedYear as keyof typeof companyData].highestPaid[0].ctc} LPA</p>
              <p className="mt-2 text-blue-100">{companyData[selectedYear as keyof typeof companyData].highestPaid[0].name}</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg p-5 text-white shadow-md">
              <h3 className="text-lg font-semibold mb-2">Most Hiring</h3>
              <p className="text-3xl font-bold">{companyData[selectedYear as keyof typeof companyData].topHiring[0].hired} Students</p>
              <p className="mt-2 text-indigo-100">{companyData[selectedYear as keyof typeof companyData].topHiring[0].name}</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-5 text-white shadow-md">
              <h3 className="text-lg font-semibold mb-2">Companies Visited</h3>
              <p className="text-3xl font-bold">{companyData[selectedYear as keyof typeof companyData].highestPaid.length}</p>
              <p className="mt-2 text-purple-100">Across various sectors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlacementStatisticsCharts = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  
  // Mock data for the charts
  const data = {
    2023: {
      monthlyPlacements: [
        { name: 'January', value: 35 },
        { name: 'February', value: 42 },
        { name: 'March', value: 58 },
        { name: 'April', value: 75 },
        { name: 'May', value: 92 },
        { name: 'June', value: 63 },
        { name: 'July', value: 47 },
        { name: 'August', value: 38 },
        { name: 'September', value: 65 },
        { name: 'October', value: 72 },
        { name: 'November', value: 85 },
        { name: 'December', value: 55 },
      ],
      genderDistribution: [
        { name: 'Boys', value: 420 },
        { name: 'Girls', value: 307 },
      ],
      departmentPlacements: [
        { name: 'Computer Science', value: 210 },
        { name: 'Electronics', value: 150 },
        { name: 'Mechanical', value: 120 },
        { name: 'Electrical', value: 95 },
        { name: 'Civil', value: 85 },
        { name: 'Chemical', value: 67 },
      ],
      averageSalary: 18.5,
      highestPackage: 45.2,
      totalCompanies: 125,
      totalPlacements: 727
    },
    2024: {
      monthlyPlacements: [
        { name: 'January', value: 42 },
        { name: 'February', value: 56 },
        { name: 'March', value: 65 },
        { name: 'April', value: 82 },
        { name: 'May', value: 98 },
        { name: 'June', value: 70 },
        { name: 'July', value: 55 },
        { name: 'August', value: 45 },
        { name: 'September', value: 72 },
        { name: 'October', value: 80 },
        { name: 'November', value: 94 },
        { name: 'December', value: 60 },
      ],
      genderDistribution: [
        { name: 'Boys', value: 468 },
        { name: 'Girls', value: 351 },
      ],
      departmentPlacements: [
        { name: 'Computer Science', value: 245 },
        { name: 'Electronics', value: 168 },
        { name: 'Mechanical', value: 135 },
        { name: 'Electrical', value: 110 },
        { name: 'Civil', value: 92 },
        { name: 'Chemical', value: 69 },
      ],
      averageSalary: 22.4,
      highestPackage: 48.2,
      totalCompanies: 142,
      totalPlacements: 819
    },
    2025: {
      monthlyPlacements: [
        { name: 'January', value: 50 },
        { name: 'February', value: 65 },
        { name: 'March', value: 78 },
        { name: 'April', value: 95 },
        { name: 'May', value: 115 },
        { name: 'June', value: 84 },
        { name: 'July', value: 62 },
        { name: 'August', value: 53 },
        { name: 'September', value: 85 },
        { name: 'October', value: 92 },
        { name: 'November', value: 105 },
        { name: 'December', value: 68 },
      ],
      genderDistribution: [
        { name: 'Boys', value: 532 },
        { name: 'Girls', value: 420 },
      ],
      departmentPlacements: [
        { name: 'Computer Science', value: 295 },
        { name: 'Electronics', value: 195 },
        { name: 'Mechanical', value: 145 },
        { name: 'Electrical', value: 125 },
        { name: 'Civil', value: 100 },
        { name: 'Chemical', value: 92 },
      ],
      averageSalary: 26.8,
      highestPackage: 52.5,
      totalCompanies: 158,
      totalPlacements: 952
    }
  };

  // Color palettes for pie charts
  const monthColors = [
    '#FF6B6B', '#FF9E7D', '#FFBF8F', '#FFE0A1', 
    '#E4F1A9', '#C2F0B2', '#A1E9BB', '#81E2C4', 
    '#62DACD', '#43D2D6', '#24C9DF', '#05BFE8'
  ];

  const genderColors = ['#4385F4', '#EA4335'];

  const departmentColors = [
    '#8A2BE2', '#9370DB', '#BA55D3', 
    '#DA70D6', '#EE82EE', '#DDA0DD'
  ];

  // Years for selector
  const years = [2023, 2024, 2025];

  // Current year data
  const currentYearData = data[selectedYear as keyof typeof data];
  
  // Calculate percentage for gender distribution
  const totalStudents = currentYearData.genderDistribution.reduce((sum, item) => sum + item.value, 0);
  const boysPercentage = ((currentYearData.genderDistribution[0].value / totalStudents) * 100).toFixed(1);
  const girlsPercentage = ((currentYearData.genderDistribution[1].value / totalStudents) * 100).toFixed(1);

  // Calculate total for department placements
  const totalDeptPlacements = currentYearData.departmentPlacements.reduce((sum, item) => sum + item.value, 0);

  // Handler for year change
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="font-medium text-gray-800">{payload[0].name}</p>
          <p className="text-blue-600 font-semibold">{payload[0].value} placements</p>
        </div>
      );
    }
    return null;
  };

  // Custom percent tooltip for gender
  const GenderTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const percentage = ((payload[0].value / totalStudents) * 100).toFixed(1);
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="font-medium text-gray-800">{payload[0].name}</p>
          <p className="text-blue-600 font-semibold">{payload[0].value} students</p>
          <p className="text-gray-600">{percentage}% of total</p>
        </div>
      );
    }
    return null;
  };

  // Custom percent tooltip for department
  const DeptTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const percentage = ((payload[0].value / totalDeptPlacements) * 100).toFixed(1);
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="font-medium text-gray-800">{payload[0].name}</p>
          <p className="text-blue-600 font-semibold">{payload[0].value} placements</p>
          <p className="text-gray-600">{percentage}% of total</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-800">Placement Statistics</h1>
          <p className="text-gray-600 mt-2">Useful insights about placements for students</p>
        </header>
        
        {/* Year Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-md overflow-hidden">
            {years.map(year => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-6 py-3 font-medium transition-colors duration-200 ${
                  selectedYear === year 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        
        {/* Key Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Placements</p>
                <h3 className="text-3xl font-bold mt-1">{currentYearData.totalPlacements}</h3>
              </div>
              <div className="bg-blue-400 bg-opacity-30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-blue-100 text-sm">Students placed in {selectedYear}</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Average Package</p>
                <h3 className="text-3xl font-bold mt-1">₹{currentYearData.averageSalary} LPA</h3>
              </div>
              <div className="bg-purple-400 bg-opacity-30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-purple-100 text-sm">Cost to company</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Highest Package</p>
                <h3 className="text-3xl font-bold mt-1">₹{currentYearData.highestPackage} LPA</h3>
              </div>
              <div className="bg-green-400 bg-opacity-30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-100 text-sm">Top offer of {selectedYear}</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Companies Visited</p>
                <h3 className="text-3xl font-bold mt-1">{currentYearData.totalCompanies}</h3>
              </div>
              <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-orange-100 text-sm">Recruiting in {selectedYear}</span>
            </div>
          </div>
        </div>
        
        {/* Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Placements */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Monthly Placements ({selectedYear})</h2>
              <p className="text-blue-100 text-sm">Number of students placed each month</p>
            </div>
            
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentYearData.monthlyPlacements}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {currentYearData.monthlyPlacements.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={monthColors[index % monthColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Summary */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Total Placements</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {currentYearData.monthlyPlacements.reduce((sum, item) => sum + item.value, 0)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Busiest Month</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {currentYearData.monthlyPlacements.reduce((max, item) => 
                      max.value > item.value ? max : item
                    , {name: '', value: 0}).name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gender Distribution */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Gender Distribution ({selectedYear})</h2>
              <p className="text-indigo-100 text-sm">Boys vs Girls placement statistics</p>
            </div>
            
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentYearData.genderDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {currentYearData.genderDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={genderColors[index % genderColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<GenderTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Summary */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                    <p className="text-sm font-medium text-gray-800">Boys</p>
                  </div>
                  <p className="text-xl font-semibold text-gray-900 mt-1">
                    {currentYearData.genderDistribution[0].value} ({boysPercentage}%)
                  </p>
                </div>
                <div className="bg-red-100 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                    <p className="text-sm font-medium text-gray-800">Girls</p>
                  </div>
                  <p className="text-xl font-semibold text-gray-900 mt-1">
                    {currentYearData.genderDistribution[1].value} ({girlsPercentage}%)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Department Placements */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Department Placements ({selectedYear})</h2>
              <p className="text-purple-100 text-sm">Students placed by department</p>
            </div>
            
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentYearData.departmentPlacements}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name.split(' ')[0]} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {currentYearData.departmentPlacements.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={departmentColors[index % departmentColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<DeptTooltip />} />
                  <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Summary */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Top Department</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {currentYearData.departmentPlacements[0].name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Placements</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {currentYearData.departmentPlacements[0].value} students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Statistics */}
        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Placement Insights ({selectedYear})</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Placement Trend */}
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Placement Growth</h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {selectedYear === 2023 ? '+0%' : 
                     selectedYear === 2024 ? '+13%' : '+16%'}
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Compared to Previous Year</p>
                    <p className="text-sm text-gray-500">
                      {selectedYear === 2023 ? 'First year of tracking' : 
                       selectedYear === 2024 ? '819 vs 727 students' : '952 vs 819 students'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Top Skills */}
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Most Demanded Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedYear === 2023 ? 'Machine Learning' : 
                     selectedYear === 2024 ? 'Data Science' : 'AI/ML'}
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedYear === 2023 ? 'Web Development' : 
                     selectedYear === 2024 ? 'Full Stack Dev' : 'Cloud Computing'}
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedYear === 2023 ? 'Cloud Computing' : 
                     selectedYear === 2024 ? 'DevOps' : 'Cybersecurity'}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedYear === 2023 ? 'Python' : 
                     selectedYear === 2024 ? 'Python/R' : 'React/Node.js'}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedYear === 2023 ? 'Data Analysis' : 
                     selectedYear === 2024 ? 'Big Data' : 'Blockchain'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const DepartmentStatsDashboard = () => {
  // Sample data - you would replace this with your actual data
  const departments = [
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Mechanical' },
    { id: 4, name: 'Civil' },
    { id: 5, name: 'Electrical' },
    { id: 6, name: 'Chemical' },
  ];

  const departmentStats = {
    'Computer Science': {
      avgCTC: 12.5,
      highestCTC: 45.0,
      placedCount: 85,
      unplacedCount: 15,
      higherStudiesCount: 20,
      placementCount: 80,
      girlsPlacedCount: 30,
      boysPlacedCount: 55,
      companies: [
        { name: 'Google', placed: 5 },
        { name: 'Microsoft', placed: 8 },
        { name: 'Amazon', placed: 12 },
        { name: 'TCS', placed: 15 },
        { name: 'Infosys', placed: 10 },
        { name: 'Flipkart', placed: 5 },
      ]
    },
    'Electronics': {
      avgCTC: 10.2,
      highestCTC: 35.0,
      placedCount: 75,
      unplacedCount: 25,
      higherStudiesCount: 18,
      placementCount: 82,
      girlsPlacedCount: 28,
      boysPlacedCount: 47,
      companies: [
        { name: 'Intel', placed: 8 },
        { name: 'Samsung', placed: 10 },
        { name: 'TCS', placed: 12 },
        { name: 'Wipro', placed: 7 },
        { name: 'Siemens', placed: 6 },
      ]
    },
    'Mechanical': {
      avgCTC: 8.5,
      highestCTC: 22.0,
      placedCount: 65,
      unplacedCount: 35,
      higherStudiesCount: 15,
      placementCount: 85,
      girlsPlacedCount: 20,
      boysPlacedCount: 45,
      companies: [
        { name: 'Tata Motors', placed: 12 },
        { name: 'Mahindra', placed: 8 },
        { name: 'L&T', placed: 15 },
        { name: 'BHEL', placed: 6 },
        { name: 'Reliance', placed: 4 },
      ]
    },
    'Civil': {
      avgCTC: 7.8,
      highestCTC: 18.0,
      placedCount: 60,
      unplacedCount: 40,
      higherStudiesCount: 22,
      placementCount: 78,
      girlsPlacedCount: 25,
      boysPlacedCount: 35,
      companies: [
        { name: 'L&T', placed: 10 },
        { name: 'DLF', placed: 8 },
        { name: 'Shapoorji Pallonji', placed: 6 },
        { name: 'NHAI', placed: 4 },
        { name: 'Gammon India', placed: 7 },
      ]
    },
    'Electrical': {
      avgCTC: 9.2,
      highestCTC: 24.0,
      placedCount: 70,
      unplacedCount: 30,
      higherStudiesCount: 18,
      placementCount: 82,
      girlsPlacedCount: 24,
      boysPlacedCount: 46,
      companies: [
        { name: 'ABB', placed: 7 },
        { name: 'Siemens', placed: 9 },
        { name: 'NTPC', placed: 12 },
        { name: 'Schneider Electric', placed: 6 },
        { name: 'Tata Power', placed: 8 },
      ]
    },
    'Chemical': {
      avgCTC: 8.8,
      highestCTC: 22.5,
      placedCount: 62,
      unplacedCount: 38,
      higherStudiesCount: 20,
      placementCount: 80,
      girlsPlacedCount: 28,
      boysPlacedCount: 34,
      companies: [
        { name: 'Reliance Industries', placed: 10 },
        { name: 'ONGC', placed: 8 },
        { name: 'HPCL', placed: 6 },
        { name: 'BPCL', placed: 7 },
        { name: 'Shell', placed: 5 },
      ]
    },
    'Whole College': {
      avgCTC: 9.5,
      highestCTC: 45.0,
      placedCount: 417,
      unplacedCount: 183,
      higherStudiesCount: 113,
      placementCount: 487,
      girlsPlacedCount: 155,
      boysPlacedCount: 262,
      companies: [
        { name: 'TCS', placed: 38 },
        { name: 'Infosys', placed: 32 },
        { name: 'Wipro', placed: 28 },
        { name: 'L&T', placed: 25 },
        { name: 'Reliance', placed: 20 },
        { name: 'Microsoft', placed: 15 },
        { name: 'Amazon', placed: 12 },
        { name: 'Google', placed: 5 },
      ]
    }
  };

  const recommendedJobs = [
    {
      id: 1,
      role: 'Software Developer',
      company: 'Microsoft',
      location: 'Bangalore',
      salary: '18-22 LPA',
      skills: ['React', 'TypeScript', 'Node.js'],
      logo: 'microsoft'
    },
    {
      id: 2,
      role: 'Data Scientist',
      company: 'Amazon',
      location: 'Hyderabad',
      salary: '20-25 LPA',
      skills: ['Python', 'Machine Learning', 'SQL'],
      logo: 'amazon'
    },
    {
      id: 3,
      role: 'Frontend Engineer',
      company: 'Google',
      location: 'Gurgaon',
      salary: '24-28 LPA',
      skills: ['JavaScript', 'React', 'CSS'],
      logo: 'google'
    },
    {
      id: 4,
      role: 'Product Manager',
      company: 'Flipkart',
      location: 'Bangalore',
      salary: '18-24 LPA',
      skills: ['Product Strategy', 'Analytics', 'User Research'],
      logo: 'flipkart'
    }
  ];

  const [selectedDepartment, setSelectedDepartment] = useState('Whole College');
  const [activeTab, setActiveTab] = useState('stats');

  const handleDepartmentChange = (dept) => {
    setSelectedDepartment(dept);
  };

  const getLogoClass = (company) => {
    const normalizedName = company.toLowerCase();
    return `bg-${normalizedName}-logo`;
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen p-6">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <h1 className="text-3xl font-bold text-white">Student Placement Portal</h1>
          <p className="text-blue-100 mt-2">Explore department statistics and find recommended jobs</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200">
          <button 
            className={`px-6 py-4 text-lg font-medium ${activeTab === 'stats' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('stats')}
          >
            Department Statistics
          </button>
          <button 
            className={`px-6 py-4 text-lg font-medium ${activeTab === 'jobs' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('jobs')}
          >
            Recommended Jobs
          </button>
        </div>
        
        {activeTab === 'stats' ? (
          <div className="p-6">
            {/* Department Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Department</h2>
              <div className="flex flex-wrap gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedDepartment === dept.name 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => handleDepartmentChange(dept.name)}
                  >
                    {dept.name}
                  </button>
                ))}
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedDepartment === 'Whole College' 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => handleDepartmentChange('Whole College')}
                >
                  Whole College
                </button>
              </div>
            </div>
            
            {/* Department Stats */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-2">{selectedDepartment} Statistics</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {departmentStats[selectedDepartment].placedCount} Placed
                </span>
              </h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* CTC Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Compensation</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600">Average CTC:</span>
                    <span className="text-2xl font-bold text-blue-700">₹{departmentStats[selectedDepartment].avgCTC} LPA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Highest CTC:</span>
                    <span className="text-2xl font-bold text-blue-700">₹{departmentStats[selectedDepartment].highestCTC} LPA</span>
                  </div>
                </div>
                
                {/* Placement Stats */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-sm border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Placement Status</h3>
                  <div className="flex items-center mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-600 h-3 rounded-full" 
                        style={{width: `${(departmentStats[selectedDepartment].placedCount / (departmentStats[selectedDepartment].placedCount + departmentStats[selectedDepartment].unplacedCount)) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-600">Placed: <span className="font-bold text-green-700">{departmentStats[selectedDepartment].placedCount}</span></span>
                    <span className="text-gray-600">Unplaced: <span className="font-bold text-gray-700">{departmentStats[selectedDepartment].unplacedCount}</span></span>
                  </div>
                  <div className="flex items-center mb-3 mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-indigo-600 h-3 rounded-full" 
                        style={{width: `${(departmentStats[selectedDepartment].placementCount / (departmentStats[selectedDepartment].placementCount + departmentStats[selectedDepartment].higherStudiesCount)) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">For Placement: <span className="font-bold text-indigo-700">{departmentStats[selectedDepartment].placementCount}</span></span>
                    <span className="text-gray-600">Higher Studies: <span className="font-bold text-indigo-700">{departmentStats[selectedDepartment].higherStudiesCount}</span></span>
                  </div>
                </div>
                
                {/* Gender Stats */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-sm border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">Gender Distribution</h3>
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-32 h-32 rounded-full bg-gray-200 relative">
                      <div 
                        className="absolute inset-0 bg-purple-600 rounded-full" 
                        style={{
                          clipPath: `polygon(50% 50%, 100% 50%, 100% 0, 0 0, 0 ${(departmentStats[selectedDepartment].girlsPlacedCount / (departmentStats[selectedDepartment].girlsPlacedCount + departmentStats[selectedDepartment].boysPlacedCount)) * 100}%)`
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-sm text-gray-500">Total</div>
                            <div className="font-bold text-xl text-gray-800">{departmentStats[selectedDepartment].girlsPlacedCount + departmentStats[selectedDepartment].boysPlacedCount}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                      <span className="text-gray-600">Girls Placed: <span className="font-bold text-purple-700">{departmentStats[selectedDepartment].girlsPlacedCount}</span></span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                      <span className="text-gray-600">Boys Placed: <span className="font-bold text-gray-700">{departmentStats[selectedDepartment].boysPlacedCount}</span></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company Placements Table */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">Companies & Placement Distribution</h3>
                  <p className="text-gray-600 text-sm mt-1">List of companies that recruited students from {selectedDepartment}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students Placed</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {departmentStats[selectedDepartment].companies.map((company, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-lg font-medium text-gray-500">{company.name.charAt(0)}</span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{company.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{company.placed} students</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                                <div 
                                  className="bg-indigo-600 h-2 rounded-full" 
                                  style={{width: `${(company.placed / departmentStats[selectedDepartment].placedCount) * 100}%`}}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-700">
                                {((company.placed / departmentStats[selectedDepartment].placedCount) * 100).toFixed(1)}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {/* Recommended Jobs Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Jobs For You</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
                          <div className="text-gray-500 mt-1">{job.company}</div>
                        </div>
                        <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-500">{job.company.charAt(0)}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap items-center">
                        <div className="mr-4 flex items-center text-gray-600">
                          <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.salary}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm text-gray-500 mb-2">Required Skills:</div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium">
                          Apply Now
                        </button>
                        <button className="px-3 py-2 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors text-sm font-medium">
                          Save Job
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default Placement;