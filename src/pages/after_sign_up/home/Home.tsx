import { BookOpen, Briefcase, Award, ChevronRight, LineChart, FileText, User,BookmarkPlus,CheckCircle, Clock, Target,  Calendar , Users, TrendingUp,  Laptop, MessageCircle} from 'lucide-react';
import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usersDataFull } from './storage';

const HomePage = () => {

  const { user_profile_name } = useParams<{ user_profile_name?: string }>();
  console.log(user_profile_name);
// Temporary user data (replace with actual data from backend later)
const user_details = usersDataFull;

// // Default user data
// const defaultUserData = {
//   name: "Alex Johnson",
//   problemsSolved: 128,
//   competitionScore: 85,
//   resumeScore: 92,
//   overallScore: 89,
//   companiesRegistered: 5,
//   companiesPending: 3,
//   totalCompaniesRequired: 12,
//   upcomingInterviews: [
//     { company: "Google", date: "March 20, 2025", time: "2:00 PM", role: "Software Engineer" },
//     { company: "Microsoft", date: "March 24, 2025", time: "11:30 AM", role: "Frontend Developer" }
//   ],
//   recentActivities: [
//     { type: "problem", name: "Binary Tree Traversal", difficulty: "Medium", timestamp: "2 hours ago" },
//     { type: "interview", name: "Mock Interview with John", result: "Passed", timestamp: "Yesterday" },
//     { type: "resume", name: "Resume Update", action: "Added project experience", timestamp: "3 days ago" }
//   ]
// };

// // Default job openings
// const defaultLatestJobs = [
//   { company: "Amazon", role: "Software Development Engineer", location: "Seattle, WA", salary: "$120,000 - $150,000", posted: "1 day ago" },
//   { company: "Meta", role: "Frontend Engineer", location: "Menlo Park, CA", salary: "$125,000 - $145,000", posted: "2 days ago" },
//   { company: "Netflix", role: "Full Stack Developer", location: "Los Gatos, CA", salary: "$130,000 - $160,000", posted: "3 days ago" }
// ];

// // Default learning paths
// const defaultLearningPaths = [
//   { title: "Data Structures & Algorithms", completion: 65, color: "from-purple-500 to-indigo-600" },
//   { title: "System Design", completion: 42, color: "from-blue-500 to-cyan-500" },
//   { title: "Frontend Development", completion: 78, color: "from-emerald-500 to-green-500" },
//   { title: "Behavioral Interview Prep", completion: 50, color: "from-amber-500 to-orange-500" }
// ];



// Fetch user data, or fallback to defaults if not found


const userData = user_profile_name && user_profile_name in user_details 
  ? user_details[user_profile_name] 
  : user_details["default"];

const latestJobs = user_profile_name && user_profile_name in user_details 
  ? user_details[user_profile_name].latestJobs 
  : user_details["default"].latestJobs;

const learningPaths = user_profile_name && user_profile_name in user_details 
  ? user_details[user_profile_name].learningPaths 
  : user_details["default"].learningPaths;

  // Calculate progress percentages
  const problemsProgress = (userData.problemsSolved / 200) * 100;
  const companiesProgress = (userData.companiesRegistered / userData.totalCompaniesRequired) * 100;

  // Get motivational quote (replace with quote service/API later)
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  // Tabs for upcoming content
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const [activeTabNew, setActiveTabNew] = useState(null);
  
  const toggleTab = (tab) => {
    if (activeTabNew === tab) {
      // If the same tab is clicked again, close it
      setActiveTabNew(null);
    } else {
      // Otherwise, switch to that tab
      setActiveTabNew(tab);
    }
  };
  

//   const eventsData = [
//     {
//         "month": "APR",
//         "day": "05",
//         "title": "Data Structures Webinar",
//         "time": "5:00 PM - 6:30 PM",
//         "status": "Confirmed"
//     },
//     {
//         "month": "MAY",
//         "day": "12",
//         "title": "Competitive Programming Contest",
//         "time": "2:00 PM - 4:00 PM",
//         "status": "Registration pending"
//     },
//     {
//         "month": "JUN",
//         "day": "18",
//         "title": "System Design Masterclass",
//         "time": "6:00 PM - 8:00 PM",
//         "status": "Confirmed"
//     },
//     {
//         "month": "JUL",
//         "day": "25",
//         "title": "Resume Building Workshop",
//         "time": "10:00 AM - 12:00 PM",
//         "status": "Confirmed"
//     },
//     {
//         "month": "AUG",
//         "day": "08",
//         "title": "Machine Learning Bootcamp",
//         "time": "9:00 AM - 11:30 AM",
//         "status": "Registration pending"
//     },
//     {
//         "month": "SEP",
//         "day": "30",
//         "title": "Mock Interview Marathon",
//         "time": "3:00 PM - 7:00 PM",
//         "status": "Confirmed"
//     }
// ]


const eventsData = user_profile_name && user_profile_name in user_details 
  ? user_details[user_profile_name].eventsData 
  : user_details["default"].eventsData;


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Welcome back, {user_profile_name}!</h2>
              <p className="mt-2 text-gray-600 italic">{randomQuote}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <User size={24} className="text-blue-600" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-4 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Overall Score</h3>
                <Award size={20} />
              </div>
              <p className="text-3xl font-bold">{userData.overallScore}%</p>
              <p className="text-blue-100 text-sm">Your placement readiness</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-700">Problems Solved</h3>
                <BookOpen size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-800">{userData.problemsSolved}</p>
              <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full" style={{ width: `${problemsProgress}%` }}></div>
              </div>
              <p className="text-gray-500 text-sm mt-1">Target: 200 problems</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-700">Competition Score</h3>
                <LineChart size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-800">{userData.competitionScore}%</p>
              <p className="text-gray-500 text-sm">Based on mock interviews</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-700">Resume Score</h3>
                <FileText size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-800">{userData.resumeScore}%</p>
              <p className="text-gray-500 text-sm">Industry standard assessment</p>
            </div>
          </div>
        </div>


        {/* Upcoming Events
        <div className="bg-white rounded-xl shadow-md p-6 mt-8  mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Events</h2>
            <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition">
              Add to Calendar
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-800 rounded-lg p-3 text-center min-w-16">
                  <div className="text-sm font-medium">MAR</div>
                  <div className="text-xl font-bold">18</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Mock Interview Session</h3>
                  <p className="text-gray-600 text-sm mt-1">10:00 AM - 11:30 AM</p>
                  <div className="mt-3 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm text-green-600">Confirmed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-lg p-3 text-center min-w-16">
                  <div className="text-sm font-medium">MAR</div>
                  <div className="text-xl font-bold">20</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Tech Talk: System Design</h3>
                  <p className="text-gray-600 text-sm mt-1">6:00 PM - 7:30 PM</p>
                  <div className="mt-3 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                    <span className="text-sm text-amber-600">Registration pending</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-800 rounded-lg p-3 text-center min-w-16">
                  <div className="text-sm font-medium">MAR</div>
                  <div className="text-xl font-bold">22</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Resume Workshop</h3>
                  <p className="text-gray-600 text-sm mt-1">2:00 PM - 4:00 PM</p>
                  <div className="mt-3 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm text-green-600">Confirmed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-800 rounded-lg p-3 text-center min-w-16">
                  <div className="text-sm font-medium">MAR</div>
                  <div className="text-xl font-bold">25</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Algorithm Bootcamp</h3>
                  <p className="text-gray-600 text-sm mt-1">9:00 AM - 12:00 PM</p>
                  <div className="mt-3 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm text-green-600">Confirmed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <UpcomingEvents events={eventsData} />;


        {/* Company Registration Status */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Company Applications</h2>
            <button className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              View all applications <ChevronRight size={16} />
            </button>
          </div>

          <div className="relative pt-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-indigo-600">
                  {userData.companiesRegistered}/{userData.totalCompaniesRequired} Companies
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
              <div style={{ width: `${companiesProgress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <Briefcase size={20} className="text-green-600" />
                </div>
                <h3 className="font-medium text-gray-800">Registered</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">{userData.companiesRegistered}</p>
              <p className="text-green-600 text-sm">Applications submitted</p>
            </div>
            
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="p-2 bg-amber-100 rounded-full mr-3">
                  <Briefcase size={20} className="text-amber-600" />
                </div>
                <h3 className="font-medium text-gray-800">Pending</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">{userData.companiesPending}</p>
              <p className="text-amber-600 text-sm">Applications in progress</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Briefcase size={20} className="text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-800">Target</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">{userData.totalCompaniesRequired - userData.companiesRegistered - userData.companiesPending}</p>
              <p className="text-blue-600 text-sm">More applications needed</p>
            </div>
          </div>
        </div>

        {/* Upcoming Interviews & Latest Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Upcoming Interviews</h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View calendar</button>
            </div>
            
            {userData.upcomingInterviews.length > 0 ? (
              <div className="space-y-4">
                {userData.upcomingInterviews.map((interview, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{interview.company}</h3>
                        <p className="text-gray-600 text-sm">{interview.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-indigo-600 font-medium">{interview.date}</p>
                        <p className="text-gray-500 text-sm">{interview.time}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <button className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md hover:bg-indigo-200 transition">
                        Prepare
                      </button>
                      <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md hover:bg-green-200 transition">
                        Mock Interview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar size={32} className="mx-auto mb-2 text-gray-400" />
                <p>No upcoming interviews scheduled</p>
                <button className="mt-2 text-sm text-indigo-600 font-medium">Schedule a mock interview</button>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Latest Job Openings</h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View all jobs</button>
            </div>
            
            <div className="space-y-4">
              {latestJobs.map((job, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{job.company}</h3>
                      <p className="text-gray-600 text-sm">{job.role}</p>
                      <p className="text-gray-500 text-xs mt-1">{job.location} • {job.posted}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-medium">{job.salary}</p>
                      <button className="mt-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


              {/* Learning Progress Paths */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Learning Progress</h2>
            <button className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              View detailed report <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningPaths.map((path, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{path.title}</h3>
                  <span className="text-sm font-semibold text-gray-700">{path.completion}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-gray-200">
                  <div className={`bg-gradient-to-r ${path.color} h-full`} style={{ width: `${path.completion}%` }}></div>
                </div>
                <div className="mt-2 flex justify-between">
                  <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    <BookmarkPlus size={14} className="mr-1" />
                    Continue learning
                  </button>
                  <span className="text-xs text-gray-500">{10 - Math.floor(path.completion / 10)} modules remaining</span>
                </div>
              </div>
            ))}
          </div>
        </div>



    {/*Your timeline*/}

    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">Your Timeline <i>( Click to view Your timeline)</i></h1>
      </div>
      {/* Horizontal Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`flex items-center py-3 px-4 font-medium text-sm focus:outline-none ${
            activeTabNew === 'activity' 
              ? 'text-indigo-600 border-b-2 border-indigo-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => toggleTab('activity')}
        >
          <Clock className="mr-2" size={18} />
          Recent Activity
        </button>
        
        <button
          className={`flex items-center py-3 px-4 font-medium text-sm focus:outline-none ${
            activeTabNew === 'learning' 
              ? 'text-indigo-600 border-b-2 border-indigo-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => toggleTab('learning')}
        >
          <Target className="mr-2" size={18} />
          Your Learning Path
        </button>
      </div>
      
      {/* Recent Activity Content */}
      {activeTabNew === 'activity' && (
        <div className="space-y-6">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="bg-blue-500 rounded-full w-3 h-3"></div>
              <div className="bg-gray-200 w-0.5 h-full"></div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">Solved Problem #128: Binary Tree Traversal</h3>
                <span className="text-xs text-gray-500">Today</span>
              </div>
              <p className="text-gray-600 mt-1">Successfully passed all test cases with O(n) time complexity</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="bg-green-500 rounded-full w-3 h-3"></div>
              <div className="bg-gray-200 w-0.5 h-full"></div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">Resume Updated</h3>
                <span className="text-xs text-gray-500">Yesterday</span>
              </div>
              <p className="text-gray-600 mt-1">Added new project experience and updated skills section</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="bg-purple-500 rounded-full w-3 h-3"></div>
              <div className="bg-gray-200 w-0.5 h-full"></div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">Completed Mock Interview</h3>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
              <p className="text-gray-600 mt-1">Scored 85/100 in the System Design round</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="bg-amber-500 rounded-full w-3 h-3"></div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">Applied to TechCorp Inc.</h3>
                <span className="text-xs text-gray-500">5 days ago</span>
              </div>
              <p className="text-gray-600 mt-1">Application submitted for Software Developer role</p>
            </div>
          </div>
          
          <button className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center">
            View all activity history <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Learning Path Content */}
      {activeTabNew === 'learning' && (
        <div>
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-8">
              <div className="flex relative">
                <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center relative z-10">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Foundation Skills</h3>
                  <p className="text-gray-600 mt-1">Data Structures & Algorithms Basics</p>
                  <div className="mt-2 bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full inline-block">
                    Completed
                  </div>
                </div>
              </div>
              
              <div className="flex relative">
                <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center relative z-10">
                  <BookmarkPlus className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Advanced Algorithms</h3>
                  <p className="text-gray-600 mt-1">Dynamic Programming & Graph Algorithms</p>
                  <div className="mt-2 flex items-center">
                    <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">65%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex relative">
                <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center relative z-10">
                  <span className="text-white font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">System Design</h3>
                  <p className="text-gray-600 mt-1">Scalability, Database Design, APIs</p>
                  <div className="mt-2 flex items-center">
                    <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                      <div className="bg-gray-400 h-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">25%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex relative">
                <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center relative z-10">
                  <span className="text-white font-medium">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Interview Mastery</h3>
                  <p className="text-gray-600 mt-1">Behavioral Questions & Case Studies</p>
                  <div className="mt-2 text-gray-500 text-sm">
                    Not started yet
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center">
            Continue Learning
          </button>
        </div>
      )}
    </div>

    {/* Skill Radar & Performance Metrics */}
<div className="bg-white rounded-xl shadow-md p-6 mt-8">
  <h2 className="text-xl font-bold text-gray-800 mb-6">Skill Assessment Dashboard</h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-medium text-gray-800 mb-4">Skill Radar</h3>
      <div className="aspect-square relative flex items-center justify-center">
        {/* This would be replaced with actual radar chart */}
        <div className="bg-gradient-to-r from-indigo-300 to-blue-300 opacity-30 w-full h-full rounded-full absolute"></div>
        <div className="bg-gradient-to-r from-indigo-400 to-blue-400 opacity-40 w-4/5 h-4/5 rounded-full absolute"></div>
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50 w-3/5 h-3/5 rounded-full absolute"></div>
        <div className="bg-white w-2/5 h-2/5 rounded-full absolute shadow-inner flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">85%</span>
        </div>
        
        {/* Skill points */}
        <div className="absolute top-[15%] right-[30%]">
          <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
          <p className="text-xs font-medium text-gray-700 absolute -right-20">Algorithms</p>
        </div>
        <div className="absolute top-[30%] right-[10%]">
          <div className="bg-indigo-500 w-3 h-3 rounded-full"></div>
          <p className="text-xs font-medium text-gray-700 absolute -right-16">Data Structures</p>
        </div>
        <div className="absolute bottom-[20%] right-[25%]">
          <div className="bg-purple-500 w-3 h-3 rounded-full"></div>
          <p className="text-xs font-medium text-gray-700 absolute -right-18">Problem Solving</p>
        </div>
        <div className="absolute bottom-[40%] left-[15%]">
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          <p className="text-xs font-medium text-gray-700 absolute -left-16">System Design</p>
        </div>
        <div className="absolute top-[35%] left-[20%]">
          <div className="bg-amber-500 w-3 h-3 rounded-full"></div>
          <p className="text-xs font-medium text-gray-700 absolute -left-22">Communication</p>
        </div>
      </div>
    </div>
    
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-blue-600">Problem Solving Efficiency</p>
              <h4 className="text-2xl font-bold text-gray-800 mt-1">79%</h4>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <LineChart size={20} className="text-blue-600" />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Average time to solve medium difficulty problems</p>
          
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>0 min</span>
              <span>10 min</span>
              <span>20 min</span>
              <span>30+ min</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs text-gray-600 mt-1">Your average: 19.5 minutes</p>
          </div>
        </div>
        
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-purple-600">Technical Interview Score</p>
              <h4 className="text-2xl font-bold text-gray-800 mt-1">83/100</h4>
            </div>
            <div className="bg-purple-100 p-2 rounded-lg">
              <Award size={20} className="text-purple-600" />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Based on 5 mock interviews</p>
          
          <div className="mt-4 grid grid-cols-4 gap-2">
            <div>
              <p className="text-xs text-center text-gray-500 mb-1">Coding</p>
              <div className="h-12 bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-purple-500" style={{ height: '85%' }}></div>
              </div>
              <p className="text-xs text-center font-medium mt-1">85%</p>
            </div>
            <div>
              <p className="text-xs text-center text-gray-500 mb-1">Algo</p>
              <div className="h-12 bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-purple-500" style={{ height: '90%' }}></div>
              </div>
              <p className="text-xs text-center font-medium mt-1">90%</p>
            </div>
            <div>
              <p className="text-xs text-center text-gray-500 mb-1">Design</p>
              <div className="h-12 bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-purple-500" style={{ height: '70%' }}></div>
              </div>
              <p className="text-xs text-center font-medium mt-1">70%</p>
            </div>
            <div>
              <p className="text-xs text-center text-gray-500 mb-1">Comm</p>
              <div className="h-12 bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-purple-500" style={{ height: '88%' }}></div>
              </div>
              <p className="text-xs text-center font-medium mt-1">88%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-emerald-600">Consistent Practice</p>
              <h4 className="text-2xl font-bold text-gray-800 mt-1">16 day streak</h4>
            </div>
            <div className="bg-emerald-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Top 5% among platform users</p>
          
          <div className="mt-4 grid grid-cols-7 gap-1">
            {Array(7).fill(0).map((_, i) => (
              <div key={i} className="space-y-1">
                {Array(4).fill(0).map((_, j) => (
                  <div 
                    key={j} 
                    className={`h-3 w-full rounded-sm ${
                      Math.random() > 0.3 ? 'bg-emerald-500' : 'bg-emerald-200'
                    }`}>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
        </div>
        
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-amber-600">Competitive Ranking</p>
              <h4 className="text-2xl font-bold text-gray-800 mt-1">Top 12%</h4>
            </div>
            <div className="bg-amber-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Based on global student leaderboard</p>
          
          <div className="mt-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-500">
                  <th className="font-medium text-left">Category</th>
                  <th className="font-medium text-right">Your Rank</th>
                  <th className="font-medium text-right">Percentile</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-amber-100">
                  <td className="py-2">Algorithms</td>
                  <td className="text-right py-2">1,246</td>
                  <td className="text-right py-2">Top 8%</td>
                </tr>
                <tr className="border-b border-amber-100">
                  <td className="py-2">Data Structures</td>
                  <td className="text-right py-2">2,103</td>
                  <td className="text-right py-2">Top 15%</td>
                </tr>
                <tr>
                  <td className="py-2">System Design</td>
                  <td className="text-right py-2">3,578</td>
                  <td className="text-right py-2">Top 24%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-md p-6 text-white hover:shadow-lg transition-shadow duration-200 transform hover:translate-y-1 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Practice Problems</h3>
            <p className="mb-4">Solve coding challenges to improve your technical skills.</p>
            <button className="mt-2 px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition">Start Practicing</button>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-md p-6 text-white hover:shadow-lg transition-shadow duration-200 transform hover:translate-y-1 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Mock Interviews</h3>
            <p className="mb-4">Prepare for interviews with realistic mock sessions.</p>
            <button className="mt-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">Schedule Session</button>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl shadow-md p-6 text-white hover:shadow-lg transition-shadow duration-200 transform hover:translate-y-1 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Resume Builder</h3>
            <p className="mb-4">Create and optimize your resume for job applications.</p>
            <button className="mt-2 px-4 py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition">Update Resume</button>
          </div>
        </div>

{/* Community & Resources */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-purple-100 rounded-full mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800">Community</h2>
    </div>
    
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg p-3 hover:bg-purple-50 transition cursor-pointer">
        <h3 className="font-medium text-gray-800">Study Groups</h3>
        <p className="text-gray-600 text-sm mt-1">Join 5 active algorithm study groups</p>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-3 hover:bg-purple-50 transition cursor-pointer">
        <h3 className="font-medium text-gray-800">Discussion Forums</h3>
        <p className="text-gray-600 text-sm mt-1">15 new topics in your subscribed forums</p>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-3 hover:bg-purple-50 transition cursor-pointer">
        <h3 className="font-medium text-gray-800">Peer Reviews</h3>
        <p className="text-gray-600 text-sm mt-1">Request feedback on your solutions</p>
      </div>
    </div>
    
    <button className="mt-4 text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center">
      Explore community <ChevronRight size={16} />
    </button>
  </div>
  
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-emerald-100 rounded-full mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800">Resources</h2>
    </div>
    
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg p-3 hover:bg-emerald-50 transition cursor-pointer">
        <h3 className="font-medium text-gray-800">Interview Prep Guides</h3>
        <p className="text-gray-600 text-sm mt-1">Company-specific interview guides</p>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-3 hover:bg-emerald-50 transition cursor-pointer">
        <h3 className="font-medium text-gray-800">Video Tutorials</h3>
        <p className="text-gray-600 text-sm mt-1">150+ hours of expert guidance</p>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-3 hover:bg-emerald-50 transition cursor-pointer">
        <h3 className="font-medium text-gray-800">Cheat Sheets</h3>
        <p className="text-gray-600 text-sm mt-1">Quick reference for algorithms & patterns</p>
      </div>
    </div>
    
    <button className="mt-4 text-emerald-600 hover:text-emerald-800 font-medium text-sm flex items-center">
      Browse resources <ChevronRight size={16} />
    </button>
  </div>
</div>

{/* Industry Insights & Trends */}
<div className="bg-white rounded-xl shadow-md p-6 mt-8">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-xl font-bold text-gray-800">Industry Insights & Trends</h2>
    <div className="flex space-x-2">
      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Technology</span>
      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">All Industries</span>
    </div>
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="col-span-1 lg:col-span-2 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-blue-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h3 className="text-xl font-bold">2025 Tech Hiring Outlook</h3>
            <p className="mt-2 text-blue-100">Key skills and trends shaping recruitment</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
            TI
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Tech Insights Report</p>
            <p className="text-xs text-gray-500">March 10, 2025</p>
          </div>
        </div>
        <p className="text-gray-600">The latest industry report reveals increasing demand for full-stack developers with AI/ML experience. Companies are prioritizing candidates with project experience in these domains.</p>
        <div className="mt-4 flex items-center text-blue-600">
          <span className="font-medium text-sm">Read the full report</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200">
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">New</span>
        <h3 className="font-medium text-gray-800 mt-2">Top 5 Technical Skills for 2025</h3>
        <p className="text-gray-600 text-sm mt-1">Emerging technologies and frameworks recruiters are seeking</p>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200">
        <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Career</span>
        <h3 className="font-medium text-gray-800 mt-2">Remote Work Opportunities on the Rise</h3>
        <p className="text-gray-600 text-sm mt-1">How to position yourself for distributed team roles</p>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200">
        <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Interviewing</span>
        <h3 className="font-medium text-gray-800 mt-2">System Design Interview Frameworks</h3>
        <p className="text-gray-600 text-sm mt-1">Structured approaches to tackle complex design problems</p>
      </div>
    </div>
  </div>
</div>

{/* Company Application Analytics */}
<div className="bg-white rounded-xl shadow-md p-6 mt-8">
  <h2 className="text-xl font-bold text-gray-800 mb-6">Application Analytics</h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="col-span-1 lg:col-span-2">
      <div className="bg-gray-50 rounded-xl p-5 h-full">
        <h3 className="font-medium text-gray-800 mb-4">Application Status by Company Tier</h3>
        <div className="relative h-64">
          {/* This would be replaced with actual chart component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full">
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Tier 1 Companies</span>
                  <span className="text-sm font-medium text-gray-700">3/5</span>
                </div>
                <div className="bg-gray-200 h-2.5 rounded-full">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Tier 2 Companies</span>
                  <span className="text-sm font-medium text-gray-700">2/4</span>
                </div>
                <div className="bg-gray-200 h-2.5 rounded-full">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Tier 3 Companies</span>
                  <span className="text-sm font-medium text-gray-700">0/3</span>
                </div>
                <div className="bg-gray-200 h-2.5 rounded-full">
                  <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <span className="text-xs text-gray-500">Interview Rate</span>
                  <p className="text-lg font-semibold text-gray-800">40%</p>
                  <div className="flex items-center text-green-600 text-xs">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    +5% from average
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <span className="text-xs text-gray-500">Response Time</span>
                  <p className="text-lg font-semibold text-gray-800">7.2 days</p>
                  <div className="flex items-center text-red-600 text-xs">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    +1.3 days slower
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-medium text-gray-800 mb-4">Application Timeline</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-3 flex-1">
            <div className="flex justify-between">
              <p className="text-sm font-medium">Application Submitted</p>
              <p className="text-xs text-gray-500">100%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
              <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          </div>
          <div className="ml-3 flex-1">
            <div className="flex justify-between">
              <p className="text-sm font-medium">Resume Screened</p>
              <p className="text-xs text-gray-500">85%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
          </div>
          <div className="ml-3 flex-1">
            <div className="flex justify-between">
              <p className="text-sm font-medium">Technical Interview</p>
              <p className="text-xs text-gray-500">60%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
              <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          </div>
          <div className="ml-3 flex-1">
            <div className="flex justify-between">
              <p className="text-sm font-medium">Onsite/Final Round</p>
              <p className="text-xs text-gray-500">25%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
              <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          </div>
          <div className="ml-3 flex-1">
            <div className="flex justify-between">
              <p className="text-sm font-medium">Offer Received</p>
              <p className="text-xs text-gray-500">10%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
              <div className="bg-gray-500 h-1.5 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





        {/* Tabs for Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button 
                className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'upcoming' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Recent Activity
              </button>
              <button 
                className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'recommended' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('recommended')}
              >
                Recommended
              </button>
              <button 
                className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'community' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('community')}
              >
                Community Feed
              </button>
            </nav>
          </div>
          
          <div className="mt-4">
            {activeTab === 'upcoming' && (
              <div className="space-y-4">
                {userData.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start p-3 border-b border-gray-100">
                    <div className={`p-2 rounded-full mr-3 ${
                      activity.type === 'problem' ? 'bg-blue-100' : 
                      activity.type === 'interview' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      {activity.type === 'problem' ? <BookOpen size={16} className="text-blue-600" /> : 
                       activity.type === 'interview' ? <Users size={16} className="text-green-600" /> : 
                       <FileText size={16} className="text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">
                        {activity.type === 'problem' ? 'Solved problem: ' : 
                         activity.type === 'interview' ? 'Completed: ' : 'Updated: '}
                        <span className="font-semibold">{activity.name}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.type === 'problem' ? `Difficulty: ${activity.difficulty}` : 
                         activity.type === 'interview' ? `Result: ${activity.result}` : 
                         `Action: ${activity.action}`}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'recommended' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-amber-100 rounded-full mr-3">
                      <TrendingUp size={16} className="text-amber-600" />
                    </div>
                    <h3 className="font-medium text-gray-800">Advanced Algorithms</h3>
                  </div>
                  <p className="text-sm text-gray-600">Improve your problem-solving skills with these advanced algorithm challenges.</p>
                  <button className="mt-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
                    Start Now
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-200">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <Laptop size={16} className="text-green-600" />
                    </div>
                    <h3 className="font-medium text-gray-800">System Design Workshop</h3>
                  </div>
                  <p className="text-sm text-gray-600">Join our workshop to master system design interviews for top tech companies.</p>
                  <button className="mt-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
                    Register
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'community' && (
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <img src="/api/placeholder/40/40" alt="User" className="h-10 w-10 rounded-full object-cover mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Sarah K.</p>
                      <p className="text-xs text-gray-500">Just landed a Software Engineer role at Amazon! Thanks for all the support!</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <button className="text-xs text-gray-500 flex items-center">
                          <MessageCircle size={14} className="mr-1" /> 12 comments
                        </button>
                        <button className="text-xs text-indigo-600">Congratulate</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <img src="/api/placeholder/40/40" alt="User" className="h-10 w-10 rounded-full object-cover mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Mike T.</p>
                      <p className="text-xs text-gray-500">Anyone have tips for the Microsoft coding interview? Have one scheduled next week!</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <button className="text-xs text-gray-500 flex items-center">
                          <MessageCircle size={14} className="mr-1" /> 8 comments
                        </button>
                        <button className="text-xs text-indigo-600">Share advice</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>

    
  );
};







const UpcomingEvents = ({ events }) => {
  // Function to determine the background and text color based on month
  const getColorScheme = (month) => {
    const colorSchemes = {
      'JAN': { bg: 'bg-blue-100', text: 'text-blue-800' },
      'FEB': { bg: 'bg-purple-100', text: 'text-purple-800' },
      'MAR': { bg: 'bg-red-100', text: 'text-red-800' },
      'APR': { bg: 'bg-green-100', text: 'text-green-800' },
      'MAY': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
      'JUN': { bg: 'bg-orange-100', text: 'text-orange-800' },
      'JUL': { bg: 'bg-pink-100', text: 'text-pink-800' },
      'AUG': { bg: 'bg-indigo-100', text: 'text-indigo-800' },
      'SEP': { bg: 'bg-teal-100', text: 'text-teal-800' },
      'OCT': { bg: 'bg-amber-100', text: 'text-amber-800' },
      'NOV': { bg: 'bg-cyan-100', text: 'text-cyan-800' },
      'DEC': { bg: 'bg-lime-100', text: 'text-lime-800' }
    };
    
    return colorSchemes[month] || { bg: 'bg-gray-100', text: 'text-gray-800' };
  };

  // Function to determine status colors
  const getStatusColors = (status) => {
    const statusColors = {
      'Confirmed': { bg: 'bg-green-500', text: 'text-green-600' },
      'Registration pending': { bg: 'bg-amber-500', text: 'text-amber-600' },
      'Cancelled': { bg: 'bg-red-500', text: 'text-red-600' },
      'Rescheduled': { bg: 'bg-blue-500', text: 'text-blue-600' }
    };
    
    return statusColors[status] || { bg: 'bg-gray-500', text: 'text-gray-600' };
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Upcoming Events</h2>
        <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition flex items-center gap-2">
          <Calendar size={16} />
          Add to Calendar
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => {
          const colorScheme = getColorScheme(event.month);
          const statusColor = getStatusColors(event.status);
          
          return (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-start">
                <div className={`${colorScheme.bg} ${colorScheme.text} rounded-lg p-3 text-center min-w-16`}>
                  <div className="text-sm font-medium">{event.month}</div>
                  <div className="text-xl font-bold">{event.day}</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{event.time}</p>
                  <div className="mt-3 flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full ${statusColor.bg} mr-2`}></span>
                    <span className={`text-sm ${statusColor.text}`}>{event.status}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default HomePage;