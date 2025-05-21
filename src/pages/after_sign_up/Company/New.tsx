import React, { useState, useEffect } from 'react';
import { CompanyDataForCardDisplay, companyDataFull } from './Company_Storage';


const Company: React.FC = () => {
  // Sample company data
  const [mongoData, setMongoData] = useState<any[]>([]); // Ensure data is an array

    useEffect(() => {
        fetch("http://localhost:5000/api/temp")
            .then(response => response.json())
            .then(data => {
                // console.log("Raw MongoDB Data:", data);
                // console.log(companyDataFull);
                // Ensure data is stored as an array
                console.log("hi");
                if (Array.isArray(data)) {
                    setMongoData(data);
                } else if (data && typeof data === "object") {
                    setMongoData([data]); // Wrap single object in an array
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);
  //  const new_data = companyDataFull.map((company)=>{
  //         return {
  //             id: company.id,
  //             name: company.name,
  //             logo: company.logo,
  //             description: company.description,
  //             eligibleDepartments: company.eligibleDepartments,
  //             year: company.year,
  //             hired: company.hired,
  //         }
  //     });
      const similar_new_data = mongoData.map((company)=>{
        return {
            id: company.id,
            name: company.name,
            logo: company.logo,
            description: company.description,
            eligibleDepartments: company.eligibleDepartments,
            year: company.year,
            hired: company.hired,
        }
    });

    
    // console.log("2");
    // console.log(new_data);
    const companyData: CompanyDataForCardDisplay[] = similar_new_data;
    // Sample data for company statistics
    const current_year = new Date().getFullYear();
    const current_year_comp = similar_new_data.filter(company=> company.year===current_year).length;

    const maxHiredCompany = similar_new_data.length > 0 
  ? similar_new_data.reduce((max, company) => (company.hired > max.hired ? company : max), similar_new_data[0])
  : { name: "N/A", logo: "", hired: 0 }; // Fallback when there's no data


    const stats = {
        totalCompanies: similar_new_data.length,
        currentYearCompanies: current_year_comp,
        topRecruiter: {
          name: maxHiredCompany.name,
          logo: maxHiredCompany.logo,
          hired: maxHiredCompany.hired
      }
      };
      
  const [companies, setCompanies] = useState<CompanyDataForCardDisplay[]>(companyData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedDepartment, setSelectedDepartment] = useState<string | "all">("all");
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const companiesPerPage = 12;
  // Get all unique years from the company data
  const years = Array.from(new Set(companyData.map(company => company.year))).sort((a, b) => b - a);
  
  // Get all unique departments from the company data
  const allDepartments = Array.from(
    new Set(
      companyData.flatMap(company => 
        company.eligibleDepartments.includes("All") 
          ? ["All"] 
          : company.eligibleDepartments
      )
    )
  ).sort();
  // Filter companies based on search term, year, and department
  useEffect(() => {
    let filteredCompanies = companyData;

    if (searchTerm) {
      filteredCompanies = filteredCompanies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedYear !== "all") {
      filteredCompanies = filteredCompanies.filter(company => company.year === selectedYear);
    }

    if (selectedDepartment !== "all") {
      filteredCompanies = filteredCompanies.filter(company =>
        company.eligibleDepartments.includes("All") || company.eligibleDepartments.includes(selectedDepartment)
      );
    }

    setCompanies(filteredCompanies);
    setCurrentPage(1);
  }, [searchTerm, selectedYear, selectedDepartment]);

  // Get current companies for pagination
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);

  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(companies.length / companiesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">Company Listings</h1>
        <p className="text-center text-gray-600 mb-8">Find your dream job at top companies</p>
        {/* Stats Row */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-3">
            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {/* Total Companies */}
            <div className="flex-1 px-6 py-4 flex items-center justify-center sm:justify-start">
                <div className="p-3 rounded-full bg-blue-50 mr-4">
                <svg 
                    className="h-6 w-6 text-blue-600" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                    />
                </svg>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">Total Companies</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalCompanies}</p>
                </div>
            </div>
            
            {/* Current Year Companies */}
            <div className="flex-1 px-6 py-4 flex items-center justify-center sm:justify-start">
                <div className="p-3 rounded-full bg-green-50 mr-4">
                <svg 
                    className="h-6 w-6 text-green-600" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                </svg>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">Current Year ({new Date().getFullYear()})</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.currentYearCompanies}</p>
                </div>
            </div>
            
            {/* Top Recruiter */}
            <div className="flex-1 px-6 py-4 flex items-center justify-center sm:justify-start">
                <div className="p-2 rounded-full bg-purple-50 mr-4 flex items-center justify-center">
                <img 
                    src={stats.topRecruiter.logo} 
                    alt={`${stats.topRecruiter.name} logo`} 
                    className="h-8 w-8 object-contain" 
                />
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">Top Recruiter</p>
                <div className="flex items-center">
                    <p className="text-xl font-semibold text-gray-900 mr-2">{stats.topRecruiter.name}</p>
                    <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                    {stats.topRecruiter.hired} hires
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg 
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Year Filter */}
            <div className="w-full md:w-64">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedYear === "all" ? "all" : selectedYear.toString()}
                onChange={(e) => setSelectedYear(e.target.value === "all" ? "all" : parseInt(e.target.value))}
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            {/* Department Filter */}
            <div className="w-full md:w-64">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">All Departments</option>
                {allDepartments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Company Listings */}
        <div className="mb-8">
          {companies.length === 0 ? (
            <div className="text-center p-12 bg-white rounded-lg shadow">
              <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No companies found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCompanies.map(company => (
               <div
               key={company.id}
               className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                 activeCard === company.id ? 'ring-2 ring-green-500 ring-opacity-75' : ''
               }`}
               onMouseEnter={() => setActiveCard(company.id)}
               onMouseLeave={() => setActiveCard(null)}
             >
               <div className="p-6">
                 <div className="flex items-center mb-4">
                   <img
                     src={company.logo}
                     alt={`${company.name} logo`}
                     className="w-12 h-12 object-contain mr-4"
                   />
                   <h2 className={`text-xl font-bold ${activeCard === company.id ? 'text-green-600' : 'text-gray-800'}`}>
                     {company.name}
                   </h2>
                 </div>
                 <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">
                   {company.description}
                 </p>
                 <div className="flex flex-wrap gap-2 mt-4">
                   {company.eligibleDepartments.includes("All") ? (
                     <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                       All Departments
                     </span>
                   ) : (
                     company.eligibleDepartments.map(dept => (
                       <span 
                         key={`${company.id}-${dept}`}
                         className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          dept === "CSE" ? "bg-indigo-100 text-indigo-800" :
                          dept === "AI" ? "bg-purple-100 text-purple-800" :
                          dept === "CYS" ? "bg-blue-100 text-blue-800" :
                          dept === "EC" ? "bg-yellow-100 text-yellow-800" :
                          dept === "EEE" ? "bg-red-100 text-red-800" :
                          dept === "MECH" ? "bg-teal-100 text-teal-800" :
                          dept === "AERO" ? "bg-pink-100 text-pink-800" :
                          dept === "ROBO" ? "bg-orange-100 text-orange-800" :
                          dept === "CHEM" ? "bg-green-100 text-green-800" :
                          "bg-gray-100 text-gray-800"
                        }`}
                       >
                         {dept}
                       </span>
                     ))
                   )}
                 </div>
                 <div className="mt-4 flex justify-end">
                   <span className="text-xs text-gray-500">Year: {company.year}</span>
                 </div>
               </div>
               {activeCard === company.id && (
                 <div className="bg-green-50 p-4 border-t border-green-100">
                   <p className="text-green-600 text-sm font-medium">Click to apply for this position</p>
                 </div>
               )}
             </div>
             
              ))}
            </div>
          )}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md flex items-center ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-50'
            }`}
          >
            <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <div className="text-gray-600">
            Page {currentPage} of {Math.max(1, Math.ceil(companies.length / companiesPerPage))}
            {companies.length > 0 && (
              <span className="ml-2 text-sm text-gray-500">
                ({indexOfFirstCompany + 1}-{Math.min(indexOfLastCompany, companies.length)} of {companies.length} companies)
              </span>
            )}
          </div>
          
          <button
            onClick={nextPage}
            disabled={currentPage >= Math.ceil(companies.length / companiesPerPage)}
            className={`px-4 py-2 rounded-md flex items-center ${
              currentPage >= Math.ceil(companies.length / companiesPerPage)
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-50'
            }`}
          >
            Next
            <svg className="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};




export default Company;