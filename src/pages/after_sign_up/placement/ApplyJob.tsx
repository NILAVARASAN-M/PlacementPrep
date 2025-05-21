import React, { useState, useEffect } from 'react';
import { Upload, Check, X, Clock, MapPin, Calendar, DollarSign, Award, Briefcase, FileText, UserCheck } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import {useRef } from 'react';
import { CheckCircle2, ArrowDown } from 'lucide-react';
import { useParams } from 'react-router-dom';
// Sample data for the job and user
const jobData = {
  id: "job123",
  title: "Frontend Developer Intern",
  company: "TechSolutions Inc.",
  location: "Bangalore, India",
  leadsToFullTime: true,
  salary: "₹65,000/month",
  deadline: "27 Mar 2025 10:30 AM",
  visitDate: "Not Decided Yet",
  hiringStartDate: "10 Apr 2025",
  internStartDate: "15 May 2025",
  duration: "6 months",
  internType: "Intern",
  stipend: 65000,
  modeOfIntern: "On-site",
  modeOfVisit: "NOT_YET_DECIDED",
  criteria: {
    tenth: 80,
    twelfth: 80,
    cgpa: 7.5,
    sem: "All semesters passed",
    maxCurrentArrears: 0,
    maxHistoryArrears: 2,
    gender: "Any",
    passedOutYear: 2026,
    collegeBranch: ["Computer Science", "Information Technology"],
    course: "B.Tech",
    department: "Engineering",
    collegePermission: true
  },
  status: "Open For Applications",
  postedOn: "15 Feb 2025"
};

const userData = {
  name: "Rahul Sharma",
  email: "rahul.s@student.edu",
  tenth: 85,
  twelfth: 82,
  cgpa: 8.2,
  sem: "All semesters passed",
  currentArrears: 0,
  historyArrears: 1,
  gender: "Male",
  passedOutYear: 2026,
  collegeBranch: "Computer Science",
  course: "B.Tech",
  department: "Engineering",
  collegePermission: true,
  applicationStatus: "Not Applied"
};

// const company= {
//   name: 'Apple',
//   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
//   description: 'Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Five technology companies along with Amazon, Google, Microsoft, and Meta.',
//   highlights: {
//     'jobsAvailable': 12,
//     'hired': 35,
//     'highestCTC': '₹48.2 LPA',
//   },
//   eligibleDepartments: ['CSE', 'AI', 'EC', 'EEE', 'MECH'],
// }

const JobDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [bonafideUploaded, setBonafideUploaded] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [applied, setApplied] = useState(false);
  const {company_name, job_id}= useParams();

  const [companyDataFull, setData] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/api/company/${company_name}/${job_id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        }
      );
    }, [company_name, job_id]);
    const companyFind = companyDataFull.find((company) => company.name.toLowerCase() === company_name?.toLowerCase()
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
  const company = {
  name: companyFind.name,
  logo: companyFind.logo,
  description: companyFind.description,
  highlights: companyFind.highlights,
  eligibleDepartments: companyFind.eligibleDepartments,
  }
  console.log(company);

  const criteriaGroups = [
    {
      title: "Academic Requirements",
      items: [
        { label: "10th Percentage", value: `${jobData.criteria.tenth}% or above` },
        { label: "12th Percentage", value: `${jobData.criteria.twelfth}% or above` },
        { label: "CGPA Required", value: `${jobData.criteria.cgpa} or above` },
        { label: "Semester Status", value: jobData.criteria.sem },
      ]
    },
    {
      title: "Course & Department",
      items: [
        { label: "Course", value: jobData.criteria.course },
        { label: "Department", value: jobData.criteria.department },
        { label: "College Branch", value: jobData.criteria.collegeBranch.join(", ") },
        { label: "Passed Out Year", value: jobData.criteria.passedOutYear },
      ]
    },
    {
      title: "Additional Requirements",
      items: [
        { label: "Max Current Arrears", value: jobData.criteria.maxCurrentArrears },
        { label: "Max History Arrears", value: jobData.criteria.maxHistoryArrears },
        { label: "Gender", value: jobData.criteria.gender },
      ]
    }
  ];

  // Check if user is eligible for the job
  const checkEligibility = () => {
    const criteriaChecks = [
      { name: "10th Percentage", required: jobData.criteria.tenth, user: userData.tenth, match: userData.tenth >= jobData.criteria.tenth },
      { name: "12th Percentage", required: jobData.criteria.twelfth, user: userData.twelfth, match: userData.twelfth >= jobData.criteria.twelfth },
      { name: "CGPA", required: jobData.criteria.cgpa, user: userData.cgpa, match: userData.cgpa >= jobData.criteria.cgpa },
      { name: "Current Arrears", required: `≤ ${jobData.criteria.maxCurrentArrears}`, user: userData.currentArrears, match: userData.currentArrears <= jobData.criteria.maxCurrentArrears },
      { name: "History Arrears", required: `≤ ${jobData.criteria.maxHistoryArrears}`, user: userData.historyArrears, match: userData.historyArrears <= jobData.criteria.maxHistoryArrears },
      { name: "Course", required: jobData.criteria.course, user: userData.course, match: userData.course === jobData.criteria.course },
      { name: "Department", required: jobData.criteria.department, user: userData.department, match: userData.department === jobData.criteria.department },
      { name: "College Branch", required: jobData.criteria.collegeBranch.join(", "), user: userData.collegeBranch, match: jobData.criteria.collegeBranch.includes(userData.collegeBranch) },
      { name: "Passed Out Year", required: jobData.criteria.passedOutYear, user: userData.passedOutYear, match: userData.passedOutYear === jobData.criteria.passedOutYear },
      { name: "College Permission", required: "Yes", user: userData.collegePermission ? "Yes" : "No", match: userData.collegePermission === jobData.criteria.collegePermission }
    ];

    const isEligible = criteriaChecks.every(check => check.match);
    return { isEligible, criteriaChecks };
  };

  const eligibilityResult = checkEligibility();

  const handleFileUpload = (type, e) => {
    e.preventDefault();
    switch(type) {
      case 'resume':
        setResumeUploaded(true);
        break;
      case 'bonafide':
        setBonafideUploaded(true);
        break;
      case 'photo':
        setPhotoUploaded(true);
        break;
      default:
        break;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleApply = () => {
    if (resumeUploaded && bonafideUploaded && photoUploaded) {
      setApplied(true);
      userData.applicationStatus = "Applied";
    } else {
      alert("Please upload all required documents before applying.");
    }
  };

  // State to track loading status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [markdownContent, setJobData] = useState('');
    const [showMarkdown, setShowMarkdown] = useState(false);
    const toggleMarkdown = () => {
      setShowMarkdown(!showMarkdown);
      setJobData(`
### **Company: QuantumTech Solutions**

#### **Job Title:**

**QuantumTech Solutions | Internship Opportunity | B. Tech 2026**

#### **Job Details:**

- **Job Type:** INTERN_LEADS_TO_FULL_TIME
- **Pay Type:** Per Annum
- **Stipend Type:** Fixed
- **Work Type:** REGULAR
- **Job Location:** Bangalore, India
- **Expected CTC:** ₹5,00,000 - ₹12,00,000

#### **Eligibility Criteria:**

- **10th Percentage Required:** 75%
- **12th Percentage Required:** 75%
- **Eligible Genders:** Male, Female

#### **College-Wise Job Specifications:**

- **Colleges:** IITs, NITs, IIITs, and top private universities
- **Courses:** B.Tech
- **Branches Eligible:**
  - Computer Science and Engineering
  - Information Technology
  - Artificial Intelligence and Data Science
  - Electronics and Communication Engineering
  - Electrical and Electronics Engineering
- **Eligible Batch for Passed Year:** 2026
- **Current Academic CGPA Required:** 7.5+
- **Acceptable Arrears:** 0

---

### **Job Description:**

🚀 **"AI & Cloud Computing Mastery with QuantumTech: Bootcamp + Hackathon for Internship Opportunity at QuantumTech."**

This is an exciting opportunity that offers **hands-on experience in AI, Cloud Computing, and cutting-edge technologies.** Participants will undergo a **comprehensive training bootcamp** and work on real-world problems with industry experts.

💡 **Eligibility:**  
Open to **6th-semester students from any eligible branch** with a CGPA of **7.5 and above**.

📢 **Upcoming Webinar:**  
We are hosting a webinar for all interested students to provide more details about this incredible opportunity. Stay tuned!

---

### **Selection Process:**

✅ **Step 1:** Submit your application  
✅ **Step 2:** Shortlisted candidates will take an **aptitude test**  
✅ **Step 3:** Qualified students will receive **mentorship and exclusive training materials**  
✅ **Step 4:** Perform well in the **final challenge** to secure an internship at QuantumTech!

---

### **Additional Information:**

- **Job Tag:** Engineering, AI, Cloud Computing
- **Job Post Date:** Tue, Mar 25, 2025
- **Last Date to Apply:** **March 26, 2025, 16:00 IST**

📌 **[Click here to Apply](#)**
        `)
      // Scroll to the expanded content when showing
      if (!showMarkdown) {
        setTimeout(() => {
          const markdownSection = document.getElementById('markdown-section');
          if (markdownSection) {
            markdownSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    
    // Fetch markdown content on component mount
//     useEffect(() => {
//       const loadMarkdownContent = async () => {
//         try {
//           // Try to load the markdown file
//           const response = await fetch('./Notice/notice_1.txt');
          
//           if (!response.ok) {
//             throw new Error("Failed to load notice file");
//           }
          
//           const content = `
// ### **Company: QuantumTech Solutions**

// #### **Job Title:**

// **QuantumTech Solutions | Internship Opportunity | B. Tech 2026**

// #### **Job Details:**

// - **Job Type:** INTERN_LEADS_TO_FULL_TIME
// - **Pay Type:** Per Annum
// - **Stipend Type:** Fixed
// - **Work Type:** REGULAR
// - **Job Location:** Bangalore, India
// - **Expected CTC:** ₹5,00,000 - ₹12,00,000

// #### **Eligibility Criteria:**

// - **10th Percentage Required:** 75%
// - **12th Percentage Required:** 75%
// - **Eligible Genders:** Male, Female

// #### **College-Wise Job Specifications:**

// - **Colleges:** IITs, NITs, IIITs, and top private universities
// - **Courses:** B.Tech
// - **Branches Eligible:**
//   - Computer Science and Engineering
//   - Information Technology
//   - Artificial Intelligence and Data Science
//   - Electronics and Communication Engineering
//   - Electrical and Electronics Engineering
// - **Eligible Batch for Passed Year:** 2026
// - **Current Academic CGPA Required:** 7.5+
// - **Acceptable Arrears:** 0

// ---

// ### **Job Description:**

// 🚀 **"AI & Cloud Computing Mastery with QuantumTech: Bootcamp + Hackathon for Internship Opportunity at QuantumTech."**

// This is an exciting opportunity that offers **hands-on experience in AI, Cloud Computing, and cutting-edge technologies.** Participants will undergo a **comprehensive training bootcamp** and work on real-world problems with industry experts.

// 💡 **Eligibility:**  
// Open to **6th-semester students from any eligible branch** with a CGPA of **7.5 and above**.

// 📢 **Upcoming Webinar:**  
// We are hosting a webinar for all interested students to provide more details about this incredible opportunity. Stay tuned!

// ---

// ### **Selection Process:**

// ✅ **Step 1:** Submit your application  
// ✅ **Step 2:** Shortlisted candidates will take an **aptitude test**  
// ✅ **Step 3:** Qualified students will receive **mentorship and exclusive training materials**  
// ✅ **Step 4:** Perform well in the **final challenge** to secure an internship at QuantumTech!

// ---

// ### **Additional Information:**

// - **Job Tag:** Engineering, AI, Cloud Computing
// - **Job Post Date:** Tue, Mar 25, 2025
// - **Last Date to Apply:** **March 26, 2025, 16:00 IST**

// 📌 **[Click here to Apply](#)**
//           `;
//           // Update job data with fetched markdown content
//           setJobData(content);
//           setLoading(false);
//           console.log(content);
//         } catch (err) {
//           console.error("Error loading notice file:", err);
//           setLoading(false);
//         }
//       };
  
//       loadMarkdownContent();
//     }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* max-w-full w-full mx-auto p-8 font-sans */}

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <h1 className="text-3xl font-bold">{jobData.title}</h1>
          <p className="text-xl">{jobData.company}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-100 px-6 py-4 border-b flex space-x-4">
          <button 
            className={`px-4 py-2 rounded-md transition-all ${activeTab === 'details' ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-all ${activeTab === 'poc' ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('poc')}
          >
            POC
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-all ${activeTab === 'notice' ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('notice')}
          >
            Notice
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'details' ? (
            <div className="space-y-6">
              {/* CARD 1: Job Details */}
              <div className="bg-white border rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{jobData.title} at {jobData.company}</h2>
                
                {/* Capsule details */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    <MapPin size={16} className="mr-1" />
                    {jobData.location}
                  </div>
                  {jobData.leadsToFullTime && (
                    <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Briefcase size={16} className="mr-1" />
                      Leads to Full Time
                    </div>
                  )}
                  <div className="flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    <DollarSign size={16} className="mr-1" />
                    Stipend: ₹{jobData.stipend}
                  </div>
                  <div className="flex items-center bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Clock size={16} className="mr-1" />
                    Deadline: {jobData.deadline}
                  </div>
                  <div className="flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar size={16} className="mr-1" />
                    Visit: {jobData.visitDate}
                  </div>
                  <div className="flex items-center bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar size={16} className="mr-1" />
                    Hiring: {jobData.hiringStartDate}
                  </div>
                  <div className="flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar size={16} className="mr-1" />
                    Start Date: {jobData.internStartDate}
                  </div>
                  <div className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Clock size={16} className="mr-1" />
                    Duration: {jobData.duration}
                  </div>
                  <div className="flex items-center bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Award size={16} className="mr-1" />
                    {jobData.internType}
                  </div>
                  <div className="flex items-center bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Briefcase size={16} className="mr-1" />
                    Mode: {jobData.modeOfIntern}
                  </div>
                  <div className="flex items-center bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    <MapPin size={16} className="mr-1" />
                    Visit Mode: {jobData.modeOfVisit}
                  </div>
                </div>

                {/* Job Criteria */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">Eligibility Criteria</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <span className="font-medium w-40">10th Percentage:</span>
                      <span>{jobData.criteria.tenth}% or above</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">12th Percentage:</span>
                      <span>{jobData.criteria.twelfth}% or above</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">CGPA Required:</span>
                      <span>{jobData.criteria.cgpa} or above</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Semester Status:</span>
                      <span>{jobData.criteria.sem}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Max Current Arrears:</span>
                      <span>{jobData.criteria.maxCurrentArrears}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Max History Arrears:</span>
                      <span>{jobData.criteria.maxHistoryArrears}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Gender:</span>
                      <span>{jobData.criteria.gender}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Passed Out Year:</span>
                      <span>{jobData.criteria.passedOutYear}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Course:</span>
                      <span>{jobData.criteria.course}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">Department:</span>
                      <span>{jobData.criteria.department}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-40">College Branch:</span>
                      <span>{jobData.criteria.collegeBranch.join(", ")}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm text-blue-700">All criteria must be met to be eligible for this position</span>
              </div>
            </div>
  


                {/* Job Status */}
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${jobData.status === "Open For Applications" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {jobData.status === "Open For Applications" ? <Check size={16} className="mr-1" /> : <X size={16} className="mr-1" />}
                      {jobData.status}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>Posted on: {jobData.postedOn}</span>
                    <br />
                    <span>Apply by: {jobData.deadline}</span>
                  </div>
                </div>
              </div>

                    
              {/* CARD 2: Eligibility Check */}
              <div className="bg-white border rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Your Eligibility Status</h2>
                
                <div className={`p-4 mb-4 rounded-lg ${eligibilityResult.isEligible ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                  <div className="flex items-center">
                    {eligibilityResult.isEligible ? (
                      <>
                        <Check className="w-6 h-6 text-green-500 mr-2" />
                        <span className="font-semibold text-green-700">Congratulations! You are eligible for this job.</span>
                      </>
                    ) : (
                      <>
                        <X className="w-6 h-6 text-red-500 mr-2" />
                        <span className="font-semibold text-red-700">Sorry, you do not meet all the eligibility criteria for this job.</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Your Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligibility</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {eligibilityResult.criteriaChecks.map((check, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{check.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{check.required}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{check.user}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {check.match ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                <Check size={16} />
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                <X size={16} />
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* SECTION 1: Company Header */}
      <div className="bg-white border rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">About Company</h2>
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
        
        {/* Toggle Button */}
        <div className="mt-6 md:mt-0 ml-0 md:ml-6 w-full md:w-auto">
        <button 
  className={`px-6 py-3 rounded-lg text-white font-medium text-sm italic transition-all w-full md:w-auto ${showMarkdown ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'}`}
  onClick={toggleMarkdown}
>
            {showMarkdown ? 'Hide Details' : 'About Job'}
          </button>
        </div>
      </div>
      
      {/* Markdown Content Section */}
      <div 
        id="markdown-section"
        className={`transition-all duration-500 ease-in-out ${showMarkdown ? 'mt-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="border-t pt-4">
          {showMarkdown && (
            <div className="prose max-w-none max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-lg">
              {/* max-h-[600px] */}
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>



      {/* Hiring Workflow Rounds, THe timestrap of the workflow*/}
    <div className="bg-white border rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Hiring Workflow Rounds</h2>
      <HiringWorkflow />
    </div>


              {/* CARD 3: Application Status */}
              <div className="bg-white border rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Your Application Status</h2>
                
                <div className="flex items-center justify-center p-6">
                  <div className={`text-center p-4 rounded-lg ${
                    applied || userData.applicationStatus === "Applied" 
                      ? "bg-green-50 border border-green-200 text-green-700" 
                      : !eligibilityResult.isEligible 
                        ? "bg-red-50 border border-red-200 text-red-700"
                        : "bg-yellow-50 border border-yellow-200 text-yellow-700"
                  }`}>
                    <div className="text-3xl mb-2">
                      {applied || userData.applicationStatus === "Applied" ? (
                        <Check className="w-12 h-12 mx-auto text-green-500" />
                      ) : !eligibilityResult.isEligible ? (
                        <X className="w-12 h-12 mx-auto text-red-500" />
                      ) : (
                        <Clock className="w-12 h-12 mx-auto text-yellow-500" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">
                      {applied || userData.applicationStatus === "Applied" 
                        ? "Applied" 
                        : !eligibilityResult.isEligible 
                          ? "Not Eligible" 
                          : "Not Applied"}
                    </h3>
                    <p className="text-sm">
                      {applied || userData.applicationStatus === "Applied"
                        ? "Your application has been submitted successfully!"
                        : !eligibilityResult.isEligible
                          ? "You do not meet all eligibility criteria for this job."
                          : "Complete your application by uploading the required documents below."}
                    </p>
                  </div>
                </div>
              </div>

              
              {/* CARD 4: Document Upload (only shown if eligible) */}
              {eligibilityResult.isEligible && !(applied || userData.applicationStatus === "Applied") && (
                <div className="bg-white border rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Upload Required Documents</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {/* Resume Upload */}
                    <div 
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${resumeUploaded ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleFileUpload('resume', e)}
                      onClick={(e) => handleFileUpload('resume', e)}
                    >
                      {resumeUploaded ? (
                        <>
                          <Check className="w-12 h-12 text-green-500 mb-2" />
                          <span className="text-green-700 font-medium">Resume Uploaded</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-12 h-12 text-gray-400 mb-2" />
                          <span className="text-gray-600 font-medium">Upload Resume</span>
                          <p className="text-xs text-gray-400 mt-1 text-center">Drag & drop or click to upload</p>
                          <p className="text-xs text-gray-400 mt-1 text-center">PDF, DOCX (Max: 5MB)</p>
                        </>
                      )}
                    </div>
                    
                    {/* Bonafide Upload */}
                    <div 
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${bonafideUploaded ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleFileUpload('bonafide', e)}
                      onClick={(e) => handleFileUpload('bonafide', e)}
                    >
                      {bonafideUploaded ? (
                        <>
                          <Check className="w-12 h-12 text-green-500 mb-2" />
                          <span className="text-green-700 font-medium">Bonafide Uploaded</span>
                        </>
                      ) : (
                        <>
                          <FileText className="w-12 h-12 text-gray-400 mb-2" />
                          <span className="text-gray-600 font-medium">Upload Bonafide</span>
                          <p className="text-xs text-gray-400 mt-1 text-center">Drag & drop or click to upload</p>
                          <p className="text-xs text-gray-400 mt-1 text-center">PDF, JPG (Max: 2MB)</p>
                        </>
                      )}
                    </div>
                    
                    {/* Photo Upload */}
                    <div 
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${photoUploaded ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleFileUpload('photo', e)}
                      onClick={(e) => handleFileUpload('photo', e)}
                    >
                      {photoUploaded ? (
                        <>
                          <Check className="w-12 h-12 text-green-500 mb-2" />
                          <span className="text-green-700 font-medium">Photo Uploaded</span>
                        </>
                      ) : (
                        <>
                          <UserCheck className="w-12 h-12 text-gray-400 mb-2" />
                          <span className="text-gray-600 font-medium">Upload Photo</span>
                          <p className="text-xs text-gray-400 mt-1 text-center">Drag & drop or click to upload</p>
                          <p className="text-xs text-gray-400 mt-1 text-center">JPG, PNG (Max: 1MB)</p>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500 italic">
                    Note: Documents can be updated from your profile page as well.
                  </div>
                </div>
              )}
              
              {/* CARD 5: Apply Button (only shown if eligible and not applied) */}
              {eligibilityResult.isEligible && !(applied || userData.applicationStatus === "Applied") && (
                <div className="bg-white border rounded-lg shadow-sm p-6">
                  <div className="flex justify-center">
                    <button
                      className={`px-8 py-4 rounded-md text-white font-semibold text-lg transition-all ${
                        resumeUploaded && bonafideUploaded && photoUploaded
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                      onClick={handleApply}
                      disabled={!(resumeUploaded && bonafideUploaded && photoUploaded)}
                    >
                      Apply Now
                    </button>
                  </div>
                  {!(resumeUploaded && bonafideUploaded && photoUploaded) && (
                    <p className="text-center text-sm text-red-500 mt-2">
                      Please upload all required documents before applying
                    </p>
                  )}
                </div>
              )}
              
              {/* Applied Successfully Message */}
              {(applied || userData.applicationStatus === "Applied") && (
                <div className="bg-green-50 border border-green-200 rounded-lg shadow-sm p-6 text-center">
                  <Check className="w-16 h-16 mx-auto text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Application Submitted Successfully!</h2>
                  <p className="text-green-600">
                    Your application for "{jobData.title}" at {jobData.company} has been received.
                    We will notify you about the next steps.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <Clock className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <h2 className="text-xl font-bold text-yellow-700 mb-2">Coming Soon!</h2>
              <p className="text-yellow-600">
                This section is currently being developed. Please check back later for updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const HiringWorkflow = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Sample workflow data - this would come from your API/state in a real app
  const workflowRounds = [
    {
      id: 1,
      title: "Application Screening",
      type: "APPLICATION_SCREENING",
      description: "Applicants are screened for this round"
    },
    {
      id: 2,
      title: "Resume Shortlisting",
      type: "RESUME_SHORTLISTING",
      description: "Reviewing candidate resumes to identify best matches"
    },
    {
      id: 3,
      title: "Technical Interview",
      type: "TECHNICAL_INTERVIEW",
      description: "Evaluating technical skills through structured interview"
    },
    {
      id: 4,
      title: "Offer Rollout",
      type: null,
      description: "Extending job offers to selected candidates"
    }
  ];

  return (
    <div className="max-w-md mx-auto py-3 px-2">      
      <div className="flex flex-col items-center">
        {workflowRounds.map((round, index) => (
          <React.Fragment key={round.id}>
            <div 
              className="w-full transition-all duration-300 transform relative"
              onMouseEnter={() => setHoveredId(round.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-start">
                <div 
                  className={`bg-white border rounded-md p-2 relative flex items-center gap-2 transition-all duration-200 ${
                    hoveredId === round.id 
                      ? 'shadow-md border-blue-300 bg-blue-50' 
                      : 'shadow-sm border-gray-200'
                  }`}
                  style={{ width: '100%' }}
                >
                  <div 
                    className={`flex items-center justify-center rounded-full h-6 w-6 flex-shrink-0 transition-colors duration-200 ${
                      hoveredId === round.id ? 'bg-blue-100 text-blue-800' : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    <span className="font-semibold text-xs">{round.id}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm font-semibold truncate transition-colors duration-200 ${
                      hoveredId === round.id ? 'text-blue-800' : 'text-gray-800'
                    }`}>
                      {round.title}
                    </h4>
                    
                    {round.type && (
                      <div className={`inline-block px-1.5 py-0.5 rounded text-xs transition-colors duration-200 ${
                        hoveredId === round.id 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {round.type.replace(/_/g, ' ')}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Description tooltip that appears on the right side with animation */}
                {hoveredId === round.id && round.description && (
                  <div 
                    className="ml-3 bg-blue-700 text-white p-2 rounded-md shadow-lg z-10 relative"
                    style={{
                      maxWidth: '200px',
                      opacity: 1,
                      transform: 'translateX(0)',
                      animation: 'slideIn 0.3s ease-out'
                    }}
                  >
                    {/* Triangle pointer */}
                    <div className="absolute top-3 -left-2 w-0 h-0 border-t-6 border-r-6 border-b-6 border-transparent border-r-blue-700"></div>
                    <p className="text-sm">{round.description}</p>
                  </div>
                )}
              </div>
            </div>
            
            {index < workflowRounds.length - 1 && (
              <div className={`my-1 transition-colors duration-200 ${
                hoveredId === round.id || hoveredId === workflowRounds[index + 1].id 
                  ? 'text-blue-500' 
                  : 'text-amber-500'
              }`}>
                <ArrowDown size={12} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};


export default JobDetailsPage;  



// const JobDetailsPage = () => {
//   const [activeTab, setActiveTab] = useState("details");
//   const [resumeUploaded, setResumeUploaded] = useState(false);
//   const [bonafideUploaded, setBonafideUploaded] = useState(false);
//   const [photoUploaded, setPhotoUploaded] = useState(false);
//   const [applied, setApplied] = useState(false);
//   const {company_name, job_id}= useParams();
//     console.log(company_name, "-------", job_id);
//   const criteriaGroups = [
//     {
//       title: "Academic Requirements",
//       items: [
//         { label: "10th Percentage", value: `${jobData.criteria.tenth}% or above` },
//         { label: "12th Percentage", value: `${jobData.criteria.twelfth}% or above` },
//         { label: "CGPA Required", value: `${jobData.criteria.cgpa} or above` },
//         { label: "Semester Status", value: jobData.criteria.sem },
//       ]
//     },
//     {
//       title: "Course & Department",
//       items: [
//         { label: "Course", value: jobData.criteria.course },
//         { label: "Department", value: jobData.criteria.department },
//         { label: "College Branch", value: jobData.criteria.collegeBranch.join(", ") },
//         { label: "Passed Out Year", value: jobData.criteria.passedOutYear },
//       ]
//     },
//     {
//       title: "Additional Requirements",
//       items: [
//         { label: "Max Current Arrears", value: jobData.criteria.maxCurrentArrears },
//         { label: "Max History Arrears", value: jobData.criteria.maxHistoryArrears },
//         { label: "Gender", value: jobData.criteria.gender },
//       ]
//     }
//   ];

//   // Check if user is eligible for the job
//   const checkEligibility = () => {
//     const criteriaChecks = [
//       { name: "10th Percentage", required: jobData.criteria.tenth, user: userData.tenth, match: userData.tenth >= jobData.criteria.tenth },
//       { name: "12th Percentage", required: jobData.criteria.twelfth, user: userData.twelfth, match: userData.twelfth >= jobData.criteria.twelfth },
//       { name: "CGPA", required: jobData.criteria.cgpa, user: userData.cgpa, match: userData.cgpa >= jobData.criteria.cgpa },
//       { name: "Current Arrears", required: `≤ ${jobData.criteria.maxCurrentArrears}`, user: userData.currentArrears, match: userData.currentArrears <= jobData.criteria.maxCurrentArrears },
//       { name: "History Arrears", required: `≤ ${jobData.criteria.maxHistoryArrears}`, user: userData.historyArrears, match: userData.historyArrears <= jobData.criteria.maxHistoryArrears },
//       { name: "Course", required: jobData.criteria.course, user: userData.course, match: userData.course === jobData.criteria.course },
//       { name: "Department", required: jobData.criteria.department, user: userData.department, match: userData.department === jobData.criteria.department },
//       { name: "College Branch", required: jobData.criteria.collegeBranch.join(", "), user: userData.collegeBranch, match: jobData.criteria.collegeBranch.includes(userData.collegeBranch) },
//       { name: "Passed Out Year", required: jobData.criteria.passedOutYear, user: userData.passedOutYear, match: userData.passedOutYear === jobData.criteria.passedOutYear },
//       { name: "College Permission", required: "Yes", user: userData.collegePermission ? "Yes" : "No", match: userData.collegePermission === jobData.criteria.collegePermission }
//     ];

//     const isEligible = criteriaChecks.every(check => check.match);
//     return { isEligible, criteriaChecks };
//   };

//   const eligibilityResult = checkEligibility();

//   const handleFileUpload = (type, e) => {
//     e.preventDefault();
//     switch(type) {
//       case 'resume':
//         setResumeUploaded(true);
//         break;
//       case 'bonafide':
//         setBonafideUploaded(true);
//         break;
//       case 'photo':
//         setPhotoUploaded(true);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleApply = () => {
//     if (resumeUploaded && bonafideUploaded && photoUploaded) {
//       setApplied(true);
//       userData.applicationStatus = "Applied";
//     } else {
//       alert("Please upload all required documents before applying.");
//     }
//   };

//   // State to track loading status
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [markdownContent, setJobData] = useState('');
//     const [showMarkdown, setShowMarkdown] = useState(false);
//     const toggleMarkdown = () => {
//       setShowMarkdown(!showMarkdown);
//       setJobData(`
// ### **Company: QuantumTech Solutions**

// #### **Job Title:**

// **QuantumTech Solutions | Internship Opportunity | B. Tech 2026**

// #### **Job Details:**

// - **Job Type:** INTERN_LEADS_TO_FULL_TIME
// - **Pay Type:** Per Annum
// - **Stipend Type:** Fixed
// - **Work Type:** REGULAR
// - **Job Location:** Bangalore, India
// - **Expected CTC:** ₹5,00,000 - ₹12,00,000

// #### **Eligibility Criteria:**

// - **10th Percentage Required:** 75%
// - **12th Percentage Required:** 75%
// - **Eligible Genders:** Male, Female

// #### **College-Wise Job Specifications:**

// - **Colleges:** IITs, NITs, IIITs, and top private universities
// - **Courses:** B.Tech
// - **Branches Eligible:**
//   - Computer Science and Engineering
//   - Information Technology
//   - Artificial Intelligence and Data Science
//   - Electronics and Communication Engineering
//   - Electrical and Electronics Engineering
// - **Eligible Batch for Passed Year:** 2026
// - **Current Academic CGPA Required:** 7.5+
// - **Acceptable Arrears:** 0

// ---

// ### **Job Description:**

// 🚀 **"AI & Cloud Computing Mastery with QuantumTech: Bootcamp + Hackathon for Internship Opportunity at QuantumTech."**

// This is an exciting opportunity that offers **hands-on experience in AI, Cloud Computing, and cutting-edge technologies.** Participants will undergo a **comprehensive training bootcamp** and work on real-world problems with industry experts.

// 💡 **Eligibility:**  
// Open to **6th-semester students from any eligible branch** with a CGPA of **7.5 and above**.

// 📢 **Upcoming Webinar:**  
// We are hosting a webinar for all interested students to provide more details about this incredible opportunity. Stay tuned!

// ---

// ### **Selection Process:**

// ✅ **Step 1:** Submit your application  
// ✅ **Step 2:** Shortlisted candidates will take an **aptitude test**  
// ✅ **Step 3:** Qualified students will receive **mentorship and exclusive training materials**  
// ✅ **Step 4:** Perform well in the **final challenge** to secure an internship at QuantumTech!

// ---

// ### **Additional Information:**

// - **Job Tag:** Engineering, AI, Cloud Computing
// - **Job Post Date:** Tue, Mar 25, 2025
// - **Last Date to Apply:** **March 26, 2025, 16:00 IST**

// 📌 **[Click here to Apply](#)**
//         `)
//       // Scroll to the expanded content when showing
//       if (!showMarkdown) {
//         setTimeout(() => {
//           const markdownSection = document.getElementById('markdown-section');
//           if (markdownSection) {
//             markdownSection.scrollIntoView({ behavior: 'smooth' });
//           }
//         }, 100);
//       }
//     };
    
//     // Fetch markdown content on component mount
// //     useEffect(() => {
// //       const loadMarkdownContent = async () => {
// //         try {
// //           // Try to load the markdown file
// //           const response = await fetch('./Notice/notice_1.txt');
          
// //           if (!response.ok) {
// //             throw new Error("Failed to load notice file");
// //           }
          
// //           const content = `
// // ### **Company: QuantumTech Solutions**

// // #### **Job Title:**

// // **QuantumTech Solutions | Internship Opportunity | B. Tech 2026**

// // #### **Job Details:**

// // - **Job Type:** INTERN_LEADS_TO_FULL_TIME
// // - **Pay Type:** Per Annum
// // - **Stipend Type:** Fixed
// // - **Work Type:** REGULAR
// // - **Job Location:** Bangalore, India
// // - **Expected CTC:** ₹5,00,000 - ₹12,00,000

// // #### **Eligibility Criteria:**

// // - **10th Percentage Required:** 75%
// // - **12th Percentage Required:** 75%
// // - **Eligible Genders:** Male, Female

// // #### **College-Wise Job Specifications:**

// // - **Colleges:** IITs, NITs, IIITs, and top private universities
// // - **Courses:** B.Tech
// // - **Branches Eligible:**
// //   - Computer Science and Engineering
// //   - Information Technology
// //   - Artificial Intelligence and Data Science
// //   - Electronics and Communication Engineering
// //   - Electrical and Electronics Engineering
// // - **Eligible Batch for Passed Year:** 2026
// // - **Current Academic CGPA Required:** 7.5+
// // - **Acceptable Arrears:** 0

// // ---

// // ### **Job Description:**

// // 🚀 **"AI & Cloud Computing Mastery with QuantumTech: Bootcamp + Hackathon for Internship Opportunity at QuantumTech."**

// // This is an exciting opportunity that offers **hands-on experience in AI, Cloud Computing, and cutting-edge technologies.** Participants will undergo a **comprehensive training bootcamp** and work on real-world problems with industry experts.

// // 💡 **Eligibility:**  
// // Open to **6th-semester students from any eligible branch** with a CGPA of **7.5 and above**.

// // 📢 **Upcoming Webinar:**  
// // We are hosting a webinar for all interested students to provide more details about this incredible opportunity. Stay tuned!

// // ---

// // ### **Selection Process:**

// // ✅ **Step 1:** Submit your application  
// // ✅ **Step 2:** Shortlisted candidates will take an **aptitude test**  
// // ✅ **Step 3:** Qualified students will receive **mentorship and exclusive training materials**  
// // ✅ **Step 4:** Perform well in the **final challenge** to secure an internship at QuantumTech!

// // ---

// // ### **Additional Information:**

// // - **Job Tag:** Engineering, AI, Cloud Computing
// // - **Job Post Date:** Tue, Mar 25, 2025
// // - **Last Date to Apply:** **March 26, 2025, 16:00 IST**

// // 📌 **[Click here to Apply](#)**
// //           `;
// //           // Update job data with fetched markdown content
// //           setJobData(content);
// //           setLoading(false);
// //           console.log(content);
// //         } catch (err) {
// //           console.error("Error loading notice file:", err);
// //           setLoading(false);
// //         }
// //       };
  
// //       loadMarkdownContent();
// //     }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         {/* max-w-full w-full mx-auto p-8 font-sans */}

//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
//           <h1 className="text-3xl font-bold">{jobData.title}</h1>
//           <p className="text-xl">{jobData.company}</p>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="bg-gray-100 px-6 py-4 border-b flex space-x-4">
//           <button 
//             className={`px-4 py-2 rounded-md transition-all ${activeTab === 'details' ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-200'}`}
//             onClick={() => setActiveTab('details')}
//           >
//             Details
//           </button>
//           <button 
//             className={`px-4 py-2 rounded-md transition-all ${activeTab === 'poc' ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-200'}`}
//             onClick={() => setActiveTab('poc')}
//           >
//             POC
//           </button>
//           <button 
//             className={`px-4 py-2 rounded-md transition-all ${activeTab === 'notice' ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-200'}`}
//             onClick={() => setActiveTab('notice')}
//           >
//             Notice
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           {activeTab === 'details' ? (
//             <div className="space-y-6">
//               {/* CARD 1: Job Details */}
//               <div className="bg-white border rounded-lg shadow-sm p-6">
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{jobData.title} at {jobData.company}</h2>
                
//                 {/* Capsule details */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <MapPin size={16} className="mr-1" />
//                     {jobData.location}
//                   </div>
//                   {jobData.leadsToFullTime && (
//                     <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
//                       <Briefcase size={16} className="mr-1" />
//                       Leads to Full Time
//                     </div>
//                   )}
//                   <div className="flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <DollarSign size={16} className="mr-1" />
//                     Stipend: ₹{jobData.stipend}
//                   </div>
//                   <div className="flex items-center bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <Clock size={16} className="mr-1" />
//                     Deadline: {jobData.deadline}
//                   </div>
//                   <div className="flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <Calendar size={16} className="mr-1" />
//                     Visit: {jobData.visitDate}
//                   </div>
//                   <div className="flex items-center bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <Calendar size={16} className="mr-1" />
//                     Hiring: {jobData.hiringStartDate}
//                   </div>
//                   <div className="flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <Calendar size={16} className="mr-1" />
//                     Start Date: {jobData.internStartDate}
//                   </div>
//                   <div className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <Clock size={16} className="mr-1" />
//                     Duration: {jobData.duration}
//                   </div>
//                   <div className="flex items-center bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <Award size={16} className="mr-1" />
//                     {jobData.internType}
//                   </div>
//                   <div className="flex items-center bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <Briefcase size={16} className="mr-1" />
//                     Mode: {jobData.modeOfIntern}
//                   </div>
//                   <div className="flex items-center bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
//                     <MapPin size={16} className="mr-1" />
//                     Visit Mode: {jobData.modeOfVisit}
//                   </div>
//                 </div>

//                 {/* Job Criteria */}
//                 <div className="mb-4">
//                   <h3 className="text-lg font-semibold mb-2 text-gray-700">Eligibility Criteria</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">10th Percentage:</span>
//                       <span>{jobData.criteria.tenth}% or above</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">12th Percentage:</span>
//                       <span>{jobData.criteria.twelfth}% or above</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">CGPA Required:</span>
//                       <span>{jobData.criteria.cgpa} or above</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">Semester Status:</span>
//                       <span>{jobData.criteria.sem}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">Max Current Arrears:</span>
//                       <span>{jobData.criteria.maxCurrentArrears}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">Max History Arrears:</span>
//                       <span>{jobData.criteria.maxHistoryArrears}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">Gender:</span>
//                       <span>{jobData.criteria.gender}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">Passed Out Year:</span>
//                       <span>{jobData.criteria.passedOutYear}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">Course:</span>
//                       <span>{jobData.criteria.course}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">Department:</span>
//                       <span>{jobData.criteria.department}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="font-medium w-40">College Branch:</span>
//                       <span>{jobData.criteria.collegeBranch.join(", ")}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
//               <div className="flex items-center">
//                 <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
//                 </svg>
//                 <span className="text-sm text-blue-700">All criteria must be met to be eligible for this position</span>
//               </div>
//             </div>
  


//                 {/* Job Status */}
//                 <div className="mt-4 flex justify-between items-center">
//                   <div>
//                     <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${jobData.status === "Open For Applications" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
//                       {jobData.status === "Open For Applications" ? <Check size={16} className="mr-1" /> : <X size={16} className="mr-1" />}
//                       {jobData.status}
//                     </div>
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     <span>Posted on: {jobData.postedOn}</span>
//                     <br />
//                     <span>Apply by: {jobData.deadline}</span>
//                   </div>
//                 </div>
//               </div>

                    
//               {/* CARD 2: Eligibility Check */}
//               <div className="bg-white border rounded-lg shadow-sm p-6">
//                 <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Your Eligibility Status</h2>
                
//                 <div className={`p-4 mb-4 rounded-lg ${eligibilityResult.isEligible ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
//                   <div className="flex items-center">
//                     {eligibilityResult.isEligible ? (
//                       <>
//                         <Check className="w-6 h-6 text-green-500 mr-2" />
//                         <span className="font-semibold text-green-700">Congratulations! You are eligible for this job.</span>
//                       </>
//                     ) : (
//                       <>
//                         <X className="w-6 h-6 text-red-500 mr-2" />
//                         <span className="font-semibold text-red-700">Sorry, you do not meet all the eligibility criteria for this job.</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
                
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Your Status</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligibility</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {eligibilityResult.criteriaChecks.map((check, index) => (
//                         <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{check.name}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{check.required}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{check.user}</td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             {check.match ? (
//                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                                 <Check size={16} />
//                               </span>
//                             ) : (
//                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
//                                 <X size={16} />
//                               </span>
//                             )}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
              
//               {/* SECTION 1: Company Header */}
//       <div className="bg-white border rounded-lg shadow-sm p-6">
//       <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">About Company</h2>
//       <div className="flex flex-col md:flex-row items-start md:items-center">
//         <img 
//           src={apple.logo} 
//           alt={`${apple.name} logo`} 
//           className="w-16 h-16 md:w-24 md:h-24 object-contain mr-6 mb-4 md:mb-0"
//         />
//         <div className="flex-grow">
//           <h1 className="text-3xl font-bold text-gray-800">{apple.name}</h1>
//           <p className="text-gray-600 my-3 max-w-3xl">{apple.description}</p>
          
//           {/* Company Highlights */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
//             <div className="bg-blue-50 p-4 rounded-lg text-center">
//               <p className="text-sm text-blue-600 font-medium">Jobs Available</p>
//               <p className="text-2xl font-bold text-blue-800">{apple.highlights.jobsAvailable}</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg text-center">
//               <p className="text-sm text-green-600 font-medium">Students Hired</p>
//               <p className="text-2xl font-bold text-green-800">{apple.highlights.hired}</p>
//             </div>
//             <div className="bg-purple-50 p-4 rounded-lg text-center">
//               <p className="text-sm text-purple-600 font-medium">Highest CTC</p>
//               <p className="text-2xl font-bold text-purple-800">{apple.highlights.highestCTC}</p>
//             </div>
//           </div>
          
//           {/* Eligible Departments */}
//           <div className="mt-4">
//             <p className="text-sm text-gray-600 mb-2">Eligible Departments:</p>
//             <div className="flex flex-wrap gap-2">
//               {apple.eligibleDepartments.map((dept, index) => (
//                 <span 
//                   key={index} 
//                   className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
//                 >
//                   {dept}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
        
//         {/* Toggle Button */}
//         <div className="mt-6 md:mt-0 ml-0 md:ml-6 w-full md:w-auto">
//         <button 
//   className={`px-6 py-3 rounded-lg text-white font-medium text-sm italic transition-all w-full md:w-auto ${showMarkdown ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'}`}
//   onClick={toggleMarkdown}
// >
//             {showMarkdown ? 'Hide Details' : 'About Job'}
//           </button>
//         </div>
//       </div>
      
//       {/* Markdown Content Section */}
//       <div 
//         id="markdown-section"
//         className={`transition-all duration-500 ease-in-out ${showMarkdown ? 'mt-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
//       >
//         <div className="border-t pt-4">
//           {showMarkdown && (
//             <div className="prose max-w-none max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-lg">
//               {/* max-h-[600px] */}
//               <ReactMarkdown>{markdownContent}</ReactMarkdown>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>



//       {/* Hiring Workflow Rounds, THe timestrap of the workflow*/}
//     <div className="bg-white border rounded-lg shadow-sm p-6">
//       <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Hiring Workflow Rounds</h2>
//       <HiringWorkflow />
//     </div>


//               {/* CARD 3: Application Status */}
//               <div className="bg-white border rounded-lg shadow-sm p-6">
//                 <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Your Application Status</h2>
                
//                 <div className="flex items-center justify-center p-6">
//                   <div className={`text-center p-4 rounded-lg ${
//                     applied || userData.applicationStatus === "Applied" 
//                       ? "bg-green-50 border border-green-200 text-green-700" 
//                       : !eligibilityResult.isEligible 
//                         ? "bg-red-50 border border-red-200 text-red-700"
//                         : "bg-yellow-50 border border-yellow-200 text-yellow-700"
//                   }`}>
//                     <div className="text-3xl mb-2">
//                       {applied || userData.applicationStatus === "Applied" ? (
//                         <Check className="w-12 h-12 mx-auto text-green-500" />
//                       ) : !eligibilityResult.isEligible ? (
//                         <X className="w-12 h-12 mx-auto text-red-500" />
//                       ) : (
//                         <Clock className="w-12 h-12 mx-auto text-yellow-500" />
//                       )}
//                     </div>
//                     <h3 className="text-xl font-bold mb-1">
//                       {applied || userData.applicationStatus === "Applied" 
//                         ? "Applied" 
//                         : !eligibilityResult.isEligible 
//                           ? "Not Eligible" 
//                           : "Not Applied"}
//                     </h3>
//                     <p className="text-sm">
//                       {applied || userData.applicationStatus === "Applied"
//                         ? "Your application has been submitted successfully!"
//                         : !eligibilityResult.isEligible
//                           ? "You do not meet all eligibility criteria for this job."
//                           : "Complete your application by uploading the required documents below."}
//                     </p>
//                   </div>
//                 </div>
//               </div>

              
//               {/* CARD 4: Document Upload (only shown if eligible) */}
//               {eligibilityResult.isEligible && !(applied || userData.applicationStatus === "Applied") && (
//                 <div className="bg-white border rounded-lg shadow-sm p-6">
//                   <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Upload Required Documents</h2>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
//                     {/* Resume Upload */}
//                     <div 
//                       className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${resumeUploaded ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}
//                       onDragOver={handleDragOver}
//                       onDrop={(e) => handleFileUpload('resume', e)}
//                       onClick={(e) => handleFileUpload('resume', e)}
//                     >
//                       {resumeUploaded ? (
//                         <>
//                           <Check className="w-12 h-12 text-green-500 mb-2" />
//                           <span className="text-green-700 font-medium">Resume Uploaded</span>
//                         </>
//                       ) : (
//                         <>
//                           <Upload className="w-12 h-12 text-gray-400 mb-2" />
//                           <span className="text-gray-600 font-medium">Upload Resume</span>
//                           <p className="text-xs text-gray-400 mt-1 text-center">Drag & drop or click to upload</p>
//                           <p className="text-xs text-gray-400 mt-1 text-center">PDF, DOCX (Max: 5MB)</p>
//                         </>
//                       )}
//                     </div>
                    
//                     {/* Bonafide Upload */}
//                     <div 
//                       className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${bonafideUploaded ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}
//                       onDragOver={handleDragOver}
//                       onDrop={(e) => handleFileUpload('bonafide', e)}
//                       onClick={(e) => handleFileUpload('bonafide', e)}
//                     >
//                       {bonafideUploaded ? (
//                         <>
//                           <Check className="w-12 h-12 text-green-500 mb-2" />
//                           <span className="text-green-700 font-medium">Bonafide Uploaded</span>
//                         </>
//                       ) : (
//                         <>
//                           <FileText className="w-12 h-12 text-gray-400 mb-2" />
//                           <span className="text-gray-600 font-medium">Upload Bonafide</span>
//                           <p className="text-xs text-gray-400 mt-1 text-center">Drag & drop or click to upload</p>
//                           <p className="text-xs text-gray-400 mt-1 text-center">PDF, JPG (Max: 2MB)</p>
//                         </>
//                       )}
//                     </div>
                    
//                     {/* Photo Upload */}
//                     <div 
//                       className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${photoUploaded ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}
//                       onDragOver={handleDragOver}
//                       onDrop={(e) => handleFileUpload('photo', e)}
//                       onClick={(e) => handleFileUpload('photo', e)}
//                     >
//                       {photoUploaded ? (
//                         <>
//                           <Check className="w-12 h-12 text-green-500 mb-2" />
//                           <span className="text-green-700 font-medium">Photo Uploaded</span>
//                         </>
//                       ) : (
//                         <>
//                           <UserCheck className="w-12 h-12 text-gray-400 mb-2" />
//                           <span className="text-gray-600 font-medium">Upload Photo</span>
//                           <p className="text-xs text-gray-400 mt-1 text-center">Drag & drop or click to upload</p>
//                           <p className="text-xs text-gray-400 mt-1 text-center">JPG, PNG (Max: 1MB)</p>
//                         </>
//                       )}
//                     </div>
//                   </div>
                  
//                   <div className="mt-4 text-xs text-gray-500 italic">
//                     Note: Documents can be updated from your profile page as well.
//                   </div>
//                 </div>
//               )}
              
//               {/* CARD 5: Apply Button (only shown if eligible and not applied) */}
//               {eligibilityResult.isEligible && !(applied || userData.applicationStatus === "Applied") && (
//                 <div className="bg-white border rounded-lg shadow-sm p-6">
//                   <div className="flex justify-center">
//                     <button
//                       className={`px-8 py-4 rounded-md text-white font-semibold text-lg transition-all ${
//                         resumeUploaded && bonafideUploaded && photoUploaded
//                           ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl'
//                           : 'bg-gray-400 cursor-not-allowed'
//                       }`}
//                       onClick={handleApply}
//                       disabled={!(resumeUploaded && bonafideUploaded && photoUploaded)}
//                     >
//                       Apply Now
//                     </button>
//                   </div>
//                   {!(resumeUploaded && bonafideUploaded && photoUploaded) && (
//                     <p className="text-center text-sm text-red-500 mt-2">
//                       Please upload all required documents before applying
//                     </p>
//                   )}
//                 </div>
//               )}
              
//               {/* Applied Successfully Message */}
//               {(applied || userData.applicationStatus === "Applied") && (
//                 <div className="bg-green-50 border border-green-200 rounded-lg shadow-sm p-6 text-center">
//                   <Check className="w-16 h-16 mx-auto text-green-500 mb-4" />
//                   <h2 className="text-2xl font-bold text-green-700 mb-2">Application Submitted Successfully!</h2>
//                   <p className="text-green-600">
//                     Your application for "{jobData.title}" at {jobData.company} has been received.
//                     We will notify you about the next steps.
//                   </p>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
//               <Clock className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
//               <h2 className="text-xl font-bold text-yellow-700 mb-2">Coming Soon!</h2>
//               <p className="text-yellow-600">
//                 This section is currently being developed. Please check back later for updates.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };