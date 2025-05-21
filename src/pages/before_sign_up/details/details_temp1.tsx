// import { useState, useRef } from 'react';
// import { Check, ChevronLeft, ChevronRight, Upload, User, BookOpen, Users, Briefcase, Save } from 'lucide-react';

// export default function StudentOnboardingForm() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     personalDetails: {
//       fullName: '',
//       dateOfBirth: '',
//       gender: '',
//       phoneNumber: '',
//       countryCode: '+91',
//       email: '',
//       address: {
//         country: '',
//         state: '',
//         city: '',
//         street: '',
//         pincode: ''
//       },
//       nationality: '',
//       disability: 'none'
//     },
//     familyDetails: {
//       parentName: '',
//       parentType: 'father',
//       numberOfParents: '2',
//       maritalStatus: 'single',
//       spouseName: '',
//       spousePhone: ''
//     },
//     educationDetails: {
//       college: '',
//       degree: '',
//       department: '',
//       rollNumber: '',
//       admissionYear: '',
//       graduationYear: '',
//       cgpa: '',
//       backlogs: 'no',
//       userType: 'college'
//     },
//     socialProfiles: {
//       linkedin: '',
//       github: '',
//       codingProfile: '',
//       portfolio: ''
//     },
//     documents: {
//       marksheets: null,
//       idCard: null,
//       resume: null,
//       photos: []
//     },
//     jobPreferences: {
//       domains: [],
//       locations: [],
//       openToInternships: 'yes',
//       expectedSalary: ''
//     }
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const fileInputRefs = {
//     marksheets: useRef(null),
//     idCard: useRef(null),
//     resume: useRef(null),
//     photos: useRef(null)
//   };

//   const availableDomains = ['#frontend', '#backend', '#dsa', '#ai', '#ml', '#cloud', '#devops', '#cybersecurity', '#mobile', '#uiux'];
//   const availableLocations = ['Remote', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Chennai'];

//   const handleChange = (section, field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [field]: value
//       }
//     }));
    
//     // Clear validation error when field is filled
//     if (validationErrors[`${section}.${field}`]) {
//       setValidationErrors(prev => {
//         const updated = {...prev};
//         delete updated[`${section}.${field}`];
//         return updated;
//       });
//     }
//   };

//   const handleNestedChange = (section, parent, field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [parent]: {
//           ...prev[section][parent],
//           [field]: value
//         }
//       }
//     }));
    
//     // Clear validation error when field is filled
//     if (validationErrors[`${section}.${parent}.${field}`]) {
//       setValidationErrors(prev => {
//         const updated = {...prev};
//         delete updated[`${section}.${parent}.${field}`];
//         return updated;
//       });
//     }
//   };

//   const handleFileChange = (field, files) => {
//     if (field === 'photos') {
//       // Handle multiple photos
//       setFormData(prev => ({
//         ...prev,
//         documents: {
//           ...prev.documents,
//           [field]: Array.from(files)
//         }
//       }));
//     } else {
//       // Handle single file
//       setFormData(prev => ({
//         ...prev,
//         documents: {
//           ...prev.documents,
//           [field]: files[0]
//         }
//       }));
//     }
    
//     // Clear validation error
//     if (validationErrors[`documents.${field}`]) {
//       setValidationErrors(prev => {
//         const updated = {...prev};
//         delete updated[`documents.${field}`];
//         return updated;
//       });
//     }
//   };

//   const handleArrayToggle = (section, field, value) => {
//     setFormData(prev => {
//       const currentArray = [...prev[section][field]];
//       const index = currentArray.indexOf(value);
      
//       if (index === -1) {
//         return {
//           ...prev,
//           [section]: {
//             ...prev[section],
//             [field]: [...currentArray, value]
//           }
//         };
//       } else {
//         currentArray.splice(index, 1);
//         return {
//           ...prev,
//           [section]: {
//             ...prev[section],
//             [field]: currentArray
//           }
//         };
//       }
//     });
//   };

//   const validateStep = (step) => {
//     const errors = {};
    
//     if (step === 1) {
//       // Personal Details validation
//       if (!formData.personalDetails.fullName.trim()) 
//         errors['personalDetails.fullName'] = 'Full name is required';
      
//       if (!formData.personalDetails.dateOfBirth) 
//         errors['personalDetails.dateOfBirth'] = 'Date of birth is required';
      
//       if (!formData.personalDetails.gender) 
//         errors['personalDetails.gender'] = 'Gender is required';
      
//       if (!formData.personalDetails.phoneNumber.trim()) 
//         errors['personalDetails.phoneNumber'] = 'Phone number is required';
      
//       if (!formData.personalDetails.email.trim() || 
//           !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.personalDetails.email)) 
//         errors['personalDetails.email'] = 'Valid email is required';
      
//       if (!formData.personalDetails.address.country.trim()) 
//         errors['personalDetails.address.country'] = 'Country is required';
      
//       if (!formData.personalDetails.address.state.trim()) 
//         errors['personalDetails.address.state'] = 'State is required';
      
//       if (!formData.personalDetails.address.city.trim()) 
//         errors['personalDetails.address.city'] = 'City is required';
      
//       if (!formData.personalDetails.address.pincode.trim()) 
//         errors['personalDetails.address.pincode'] = 'Pincode is required';
      
//       if (!formData.personalDetails.nationality.trim()) 
//         errors['personalDetails.nationality'] = 'Nationality is required';
      
//       // Education validation
//       if (!formData.educationDetails.college.trim()) 
//         errors['educationDetails.college'] = 'College name is required';
      
//       if (!formData.educationDetails.degree.trim()) 
//         errors['educationDetails.degree'] = 'Degree is required';
      
//       if (!formData.educationDetails.department.trim()) 
//         errors['educationDetails.department'] = 'Department is required';
      
//       if (!formData.educationDetails.rollNumber.trim()) 
//         errors['educationDetails.rollNumber'] = 'Roll number is required';
      
//       if (!formData.educationDetails.admissionYear.trim()) 
//         errors['educationDetails.admissionYear'] = 'Admission year is required';
      
//       if (!formData.educationDetails.graduationYear.trim()) 
//         errors['educationDetails.graduationYear'] = 'Graduation year is required';
      
//       if (!formData.educationDetails.cgpa.trim()) 
//         errors['educationDetails.cgpa'] = 'CGPA is required';
//     }
    
//     else if (step === 2) {
//       // Document validation
//       if (!formData.documents.resume) 
//         errors['documents.resume'] = 'Resume is required';
      
//       if (!formData.documents.idCard) 
//         errors['documents.idCard'] = 'ID Card is required';
      
//       if (!formData.documents.photos || formData.documents.photos.length < 1) 
//         errors['documents.photos'] = 'At least one photo is required';
//     }
    
//     setValidationErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const nextStep = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(prev => Math.min(prev + 1, 3));
//     }
//   };

//   const prevStep = () => {
//     setCurrentStep(prev => Math.max(prev - 1, 1));
//   };

//   const saveData = () => {
//     if (validateStep(currentStep)) {
//       try {
//         // Create folder name based on username (using full name for this example)
//         const folderName = formData.personalDetails.fullName.replace(/\s+/g, '_').toLowerCase();
        
//         // In a real application, you'd use a backend API or proper storage
//         // Here we're simulating the saving process for demonstration
//         const jsonData = JSON.stringify(formData, (key, value) => {
//           // Handle File objects by saving their names
//           if (value instanceof File) {
//             return {
//               name: value.name,
//               type: value.type,
//               size: value.size
//             };
//           } else if (Array.isArray(value) && value[0] instanceof File) {
//             return value.map(file => ({
//               name: file.name,
//               type: file.type,
//               size: file.size
//             }));
//           }
//           return value;
//         }, 2);
        
//         // In a real app, you'd save the files to disk and the JSON data to a database
//         // For this demo, we'll store in localStorage
//         localStorage.setItem(`${folderName}_data`, jsonData);
        
//         alert(`Data saved successfully for ${formData.personalDetails.fullName}!`);
//       } catch (error) {
//         alert('Error saving data: ' + error.message);
//       }
//     }
//   };

//   const renderPersonalDetailsForm = () => (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-purple-700">👤 Personal Details</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Full Name *</label>
//           <input
//             type="text"
//             className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.fullName'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//             value={formData.personalDetails.fullName}
//             onChange={(e) => handleChange('personalDetails', 'fullName', e.target.value)}
//           />
//           {validationErrors['personalDetails.fullName'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.fullName']}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
//           <input
//             type="date"
//             className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.dateOfBirth'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//             value={formData.personalDetails.dateOfBirth}
//             onChange={(e) => handleChange('personalDetails', 'dateOfBirth', e.target.value)}
//           />
//           {validationErrors['personalDetails.dateOfBirth'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.dateOfBirth']}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Gender *</label>
//           <select
//             className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.gender'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//             value={formData.personalDetails.gender}
//             onChange={(e) => handleChange('personalDetails', 'gender', e.target.value)}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//             <option value="prefer-not-to-say">Prefer not to say</option>
//           </select>
//           {validationErrors['personalDetails.gender'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.gender']}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
//           <div className="mt-1 flex rounded-md">
//             <select
//               className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
//               value={formData.personalDetails.countryCode}
//               onChange={(e) => handleChange('personalDetails', 'countryCode', e.target.value)}
//             >
//               <option value="+91">+91 (IN)</option>
//               <option value="+1">+1 (US/CA)</option>
//               <option value="+44">+44 (UK)</option>
//               <option value="+61">+61 (AU)</option>
//               <option value="+65">+65 (SG)</option>
//             </select>
//             <input
//               type="tel"
//               className={`block w-full flex-1 rounded-none rounded-r-md border ${validationErrors['personalDetails.phoneNumber'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//               value={formData.personalDetails.phoneNumber}
//               onChange={(e) => handleChange('personalDetails', 'phoneNumber', e.target.value)}
//             />
//           </div>
//           {validationErrors['personalDetails.phoneNumber'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.phoneNumber']}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email ID *</label>
//           <input
//             type="email"
//             className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.email'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//             value={formData.personalDetails.email}
//             onChange={(e) => handleChange('personalDetails', 'email', e.target.value)}
//           />
//           {validationErrors['personalDetails.email'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.email']}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Nationality *</label>
//           <input
//             type="text"
//             className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.nationality'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//             value={formData.personalDetails.nationality}
//             onChange={(e) => handleChange('personalDetails', 'nationality', e.target.value)}
//           />
//           {validationErrors['personalDetails.nationality'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.nationality']}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Disability</label>
//           <select
//             className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//             value={formData.personalDetails.disability}
//             onChange={(e) => handleChange('personalDetails', 'disability', e.target.value)}
//           >
//             <option value="none">None</option>
//             <option value="physical">Physical</option>
//             <option value="visual">Visual</option>
//             <option value="hearing">Hearing</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h4 className="text-lg font-medium text-gray-700">Address *</h4>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Country *</label>
//             <input
//               type="text"
//               className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.address.country'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//               value={formData.personalDetails.address.country}
//               onChange={(e) => handleNestedChange('personalDetails', 'address', 'country', e.target.value)}
//             />
//             {validationErrors['personalDetails.address.country'] && (
//               <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.address.country']}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">State *</label>
//             <input
//               type="text"
//               className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.address.state'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//               value={formData.personalDetails.address.state}
//               onChange={(e) => handleNestedChange('personalDetails', 'address', 'state', e.target.value)}
//             />
//             {validationErrors['personalDetails.address.state'] && (
//               <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.address.state']}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">City *</label>
//             <input
//               type="text"
//               className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.address.city'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//               value={formData.personalDetails.address.city}
//               onChange={(e) => handleNestedChange('personalDetails', 'address', 'city', e.target.value)}
//             />
//             {validationErrors['personalDetails.address.city'] && (
//               <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.address.city']}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Pincode *</label>
//             <input
//               type="text"
//               className={`mt-1 block w-full rounded-md border ${validationErrors['personalDetails.address.pincode'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//               value={formData.personalDetails.address.pincode}
//               onChange={(e) => handleNestedChange('personalDetails', 'address', 'pincode', e.target.value)}
//             />
//             {validationErrors['personalDetails.address.pincode'] && (
//               <p className="mt-1 text-sm text-red-500">{validationErrors['personalDetails.address.pincode']}</p>
//             )}
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700">Street Address</label>
//             <textarea
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               rows="2"
//               value={formData.personalDetails.address.street}
//               onChange={(e) => handleNestedChange('personalDetails', 'address', 'street', e.target.value)}
//             ></textarea>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-4 mt-8">
//         <h3 className="text-xl font-semibold text-purple-700">👪 Family Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Parent's Name</label>
//             <input
//               type="text"
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               value={formData.familyDetails.parentName}
//               onChange={(e) => handleChange('familyDetails', 'parentName', e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Parent Type</label>
//             <select
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               value={formData.familyDetails.parentType}
//               onChange={(e) => handleChange('familyDetails', 'parentType', e.target.value)}
//             >
//               <option value="father">Father</option>
//               <option value="mother">Mother</option>
//               <option value="guardian">Guardian</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Number of Parents</label>
//             <select
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               value={formData.familyDetails.numberOfParents}
//               onChange={(e) => handleChange('familyDetails', 'numberOfParents', e.target.value)}
//             >
//               <option value="0">0</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Marital Status</label>
//             <select
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               value={formData.familyDetails.maritalStatus}
//               onChange={(e) => handleChange('familyDetails', 'maritalStatus', e.target.value)}
//             >
//               <option value="single">Single</option>
//               <option value="married">Married</option>
//               <option value="divorced">Divorced</option>
//               <option value="widowed">Widowed</option>
//             </select>
//           </div>

//           {formData.familyDetails.maritalStatus === 'married' && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Spouse Name</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//                   value={formData.familyDetails.spouseName}
//                   onChange={(e) => handleChange('familyDetails', 'spouseName', e.target.value)}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Spouse Phone Number</label>
//                 <input
//                   type="tel"
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//                   value={formData.familyDetails.spousePhone}
//                   onChange={(e) => handleChange('familyDetails', 'spousePhone', e.target.value)}
//                 />
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       <div className="space-y-4 mt-8">
//         <h3 className="text-xl font-semibold text-purple-700">🎓 Education Details</h3>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">User Type</label>
//             <div className="mt-2 space-x-4">
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="text-purple-600 focus:ring-purple-500 h-4 w-4"
//                   value="college"
//                   checked={formData.educationDetails.userType === 'college'}
//                   onChange={(e) => handleChange('educationDetails', 'userType', e.target.value)}
//                 />
//                 <span className="ml-2">College Student</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="text-purple-600 focus:ring-purple-500 h-4 w-4"
//                   value="school"
//                   checked={formData.educationDetails.userType === 'school'}
//                   onChange={(e) => handleChange('educationDetails', 'userType', e.target.value)}
//                 />
//                 <span className="ml-2">School Student</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="text-purple-600 focus:ring-purple-500 h-4 w-4"
//                   value="employee"
//                   checked={formData.educationDetails.userType === 'employee'}
//                   onChange={(e) => handleChange('educationDetails', 'userType', e.target.value)}
//                 />
//                 <span className="ml-2">Employee</span>
//               </label>
//             </div>
//           </div>

//           <h4 className="text-lg font-medium text-gray-700">Undergraduate (Ongoing)</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">College Name *</label>
//               <input
//                 type="text"
//                 className={`mt-1 block w-full rounded-md border ${validationErrors['educationDetails.college'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//                 value={formData.educationDetails.college}
//                 onChange={(e) => handleChange('educationDetails', 'college', e.target.value)}
//               />
//               {validationErrors['educationDetails.college'] && (
//                 <p className="mt-1 text-sm text-red-500">{validationErrors['educationDetails.college']}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Degree *</label>
//               <input
//                 type="text"
//                 className={`mt-1 block w-full rounded-md border ${validationErrors['educationDetails.degree'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//                 placeholder="B.Tech, BSc, etc."
//                 value={formData.educationDetails.degree}
//                 onChange={(e) => handleChange('educationDetails', 'degree', e.target.value)}
//               />
//               {validationErrors['educationDetails.degree'] && (
//                 <p className="mt-1 text-sm text-red-500">{validationErrors['educationDetails.degree']}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Department / Branch *</label>
//               <input
//                 type="text"
//                 className={`mt-1 block w-full rounded-md border ${validationErrors['educationDetails.department'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//                 value={formData.educationDetails.department}
//                 onChange={(e) => handleChange('educationDetails', 'department', e.target.value)}
//               />
//               {validationErrors['educationDetails.department'] && (
//                 <p className="mt-1 text-sm text-red-500">{validationErrors['educationDetails.department']}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Roll Number *</label>
//               <input
//                 type="text"
//                 className={`mt-1 block w-full rounded-md border ${validationErrors['educationDetails.rollNumber'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//                 value={formData.educationDetails.rollNumber}
//                 onChange={(e) => handleChange('educationDetails', 'rollNumber', e.target.value)}
//               />
//               {validationErrors['educationDetails.rollNumber'] && (
//                 <p className="mt-1 text-sm text-red-500">{validationErrors['educationDetails.rollNumber']}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Year of Admission *</label>
//               <input
//                 type="text"
//                 className={`mt-1 block w-full rounded-md border ${validationErrors['educationDetails.admissionYear'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//                 placeholder="YYYY"
//                 value={formData.educationDetails.admissionYear}
//                 onChange={(e) => handleChange('educationDetails', 'admissionYear', e.target.value)}
//               />
//               {validationErrors['educationDetails.admissionYear'] && (
//                 <p className="mt-1 text-sm text-red-500">{validationErrors['educationDetails.admissionYear']}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Expected Graduation Year *</label>
//               <input
//                 type="text"
//                 className={`mt-1 block w-full rounded-md border ${validationErrors['educationDetails.graduationYear'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//                 placeholder="YYYY"
//                 value={formData.educationDetails.graduationYear}
//                 onChange={(e) => handleChange('educationDetails', 'graduationYear', e.target.value)}
//               />
//               {validationErrors['educationDetails.graduationYear'] && (
//                 <p className="mt-1 text-sm text-red-500">{validationErrors['educationDetails.graduationYear']}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Current CGPA *</label>
//               <input
//                 type="text"
//                 className={`mt-1 block w-full rounded-md border ${validationErrors['educationDetails.cgpa'] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200`}
//                 value={formData.educationDetails.cgpa}
//                 onChange={(e) => handleChange('educationDetails', 'cgpa', e.target.value)}
//               />
//               {validationErrors['educationDetails.cgpa'] && (
//                 <p className="mt-1 text-sm text-red-500">{validationErrors['educationDetails.cgpa']}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Backlogs</label>
//               <select
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//                 value={formData.educationDetails.backlogs}
//                 onChange={(e) => handleChange('educationDetails', 'backlogs', e.target.value)}
//               >
//                 <option value="no">No</option>
//                 <option value="yes">Yes</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-4 mt-8">
//         <h3 className="text-xl font-semibold text-purple-700">🌐 Social Profiles</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
//             <input
//               type="url"
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               placeholder="https://linkedin.com/in/username"
//               value={formData.socialProfiles.linkedin}
//               onChange={(e) => handleChange('socialProfiles', 'linkedin', e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
//             <input
//               type="url"
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               placeholder="https://github.com/username"
//               value={formData.socialProfiles.github}
//               onChange={(e) => handleChange('socialProfiles', 'github', e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Coding Profile</label>
//             <input
//               type="url"
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               placeholder="LeetCode/Codeforces/HackerRank URL"
//               value={formData.socialProfiles.codingProfile}
//               onChange={(e) => handleChange('socialProfiles', 'codingProfile', e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Portfolio Website</label>
//             <input
//               type="url"
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//               placeholder="https://your-portfolio.com"
//               value={formData.socialProfiles.portfolio}
//               onChange={(e) => handleChange('socialProfiles', 'portfolio', e.target.value)}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderDocumentsForm = () => (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-purple-700">📄 Documents Upload</h3>
//       <p className="text-sm text-gray-500">Upload necessary documents for verification purposes.</p>

//       <div className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">UG Semester-wise Marksheets</label>
//           <p className="text-xs text-gray-500 mb-2">Upload all marksheets in a single PDF file</p>
//           <div className="flex items-center mt-1">
//             <input
//               type="file"
//               ref={fileInputRefs.marksheets}
//               className="hidden"
//               accept=".pdf"
//               onChange={(e) => handleFileChange('marksheets', e.target.files)}
//             />
//             <button
//               type="button"
//               onClick={() => fileInputRefs.marksheets.current.click()}
//               className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//             >
//               <Upload className="h-4 w-4 mr-2" />
//               Choose File
//             </button>
//             <span className="ml-3 text-sm text-gray-500">
//               {formData.documents.marksheets ? formData.documents.marksheets.name : 'No file chosen'}
//             </span>
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Aadhar Card / National ID *</label>
//           <div className="flex items-center mt-1">
//             <input
//               type="file"
//               ref={fileInputRefs.idCard}
//               className="hidden"
//               accept=".pdf,.jpg,.jpeg,.png"
//               onChange={(e) => handleFileChange('idCard', e.target.files)}
//             />
//             <button
//               type="button"
//               onClick={() => fileInputRefs.idCard.current.click()}
//               className={`inline-flex items-center px-4 py-2 border ${validationErrors['documents.idCard'] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
//             >
//               <Upload className="h-4 w-4 mr-2" />
//               Choose File
//             </button>
//             <span className="ml-3 text-sm text-gray-500">
//               {formData.documents.idCard ? formData.documents.idCard.name : 'No file chosen'}
//             </span>
//           </div>
//           {validationErrors['documents.idCard'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['documents.idCard']}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Resume *</label>
//           <p className="text-xs text-gray-500 mb-2">Upload your latest resume in PDF format</p>
//           <div className="flex items-center mt-1">
//             <input
//               type="file"
//               ref={fileInputRefs.resume}
//               className="hidden"
//               accept=".pdf"
//               onChange={(e) => handleFileChange('resume', e.target.files)}
//             />
//             <button
//               type="button"
//               onClick={() => fileInputRefs.resume.current.click()}
//               className={`inline-flex items-center px-4 py-2 border ${validationErrors['documents.resume'] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
//             >
//               <Upload className="h-4 w-4 mr-2" />
//               Choose File
//             </button>
//             <span className="ml-3 text-sm text-gray-500">
//               {formData.documents.resume ? formData.documents.resume.name : 'No file chosen'}
//             </span>
//           </div>
//           {validationErrors['documents.resume'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['documents.resume']}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Passport Size Photos *</label>
//           <p className="text-xs text-gray-500 mb-2">Upload at least 5 recent passport size photographs</p>
//           <div className="flex items-center mt-1">
//             <input
//               type="file"
//               ref={fileInputRefs.photos}
//               className="hidden"
//               accept=".jpg,.jpeg,.png"
//               multiple
//               onChange={(e) => handleFileChange('photos', e.target.files)}
//             />
//             <button
//               type="button"
//               onClick={() => fileInputRefs.photos.current.click()}
//               className={`inline-flex items-center px-4 py-2 border ${validationErrors['documents.photos'] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
//             >
//               <Upload className="h-4 w-4 mr-2" />
//               Choose Files
//             </button>
//             <span className="ml-3 text-sm text-gray-500">
//               {formData.documents.photos && formData.documents.photos.length > 0 
//                 ? `${formData.documents.photos.length} file(s) selected`
//                 : 'No files chosen'}
//             </span>
//           </div>
//           {validationErrors['documents.photos'] && (
//             <p className="mt-1 text-sm text-red-500">{validationErrors['documents.photos']}</p>
//           )}
//         </div>
//       </div>

//       {formData.documents.photos && formData.documents.photos.length > 0 && (
//         <div className="mt-4">
//           <h4 className="text-md font-medium text-gray-700 mb-2">Selected Photos Preview</h4>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//             {Array.from(formData.documents.photos).map((photo, index) => (
//               <div key={index} className="relative">
//                 <div className="h-24 w-20 border border-gray-300 rounded-md bg-gray-100 flex items-center justify-center">
//                   <img 
//                     src="/api/placeholder/80/100" 
//                     alt={`Photo preview ${index + 1}`}
//                     className="max-h-full max-w-full object-cover" 
//                   />
//                 </div>
//                 <span className="block text-xs text-gray-500 mt-1 truncate">{photo.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const renderJobForm = () => (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-purple-700">💼 Job Preferences</h3>
//       <p className="text-sm text-gray-500">Help us understand your career preferences.</p>

//       <div className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Interested Domains</label>
//           <div className="flex flex-wrap gap-2">
//             {availableDomains.map(domain => (
//               <button
//                 key={domain}
//                 type="button"
//                 onClick={() => handleArrayToggle('jobPreferences', 'domains', domain)}
//                 className={`px-3 py-1 text-sm rounded-full ${
//                   formData.jobPreferences.domains.includes(domain)
//                     ? 'bg-purple-600 text-white'
//                     : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                 }`}
//               >
//                 {domain}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Work Locations</label>
//           <div className="flex flex-wrap gap-2">
//             {availableLocations.map(location => (
//               <button
//                 key={location}
//                 type="button"
//                 onClick={() => handleArrayToggle('jobPreferences', 'locations', location)}
//                 className={`px-3 py-1 text-sm rounded-full ${
//                   formData.jobPreferences.locations.includes(location)
//                     ? 'bg-purple-600 text-white'
//                     : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                 }`}
//               >
//                 {location}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Open to Internships</label>
//           <div className="mt-2 space-x-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 className="text-purple-600 focus:ring-purple-500 h-4 w-4"
//                 value="yes"
//                 checked={formData.jobPreferences.openToInternships === 'yes'}
//                 onChange={(e) => handleChange('jobPreferences', 'openToInternships', e.target.value)}
//               />
//               <span className="ml-2">Yes</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 className="text-purple-600 focus:ring-purple-500 h-4 w-4"
//                 value="no"
//                 checked={formData.jobPreferences.openToInternships === 'no'}
//                 onChange={(e) => handleChange('jobPreferences', 'openToInternships', e.target.value)}
//               />
//               <span className="ml-2">No</span>
//             </label>
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Expected Salary Range (Optional)</label>
//           <select
//             className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
//             value={formData.jobPreferences.expectedSalary}
//             onChange={(e) => handleChange('jobPreferences', 'expectedSalary', e.target.value)}
//           >
//             <option value="">Select Range</option>
//             <option value="0-3lpa">0-3 LPA</option>
//             <option value="3-6lpa">3-6 LPA</option>
//             <option value="6-10lpa">6-10 LPA</option>
//             <option value="10-15lpa">10-15 LPA</option>
//             <option value="15-25lpa">15-25 LPA</option>
//             <option value="25lpa+">Above 25 LPA</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );

//   const renderStepIndicator = () => (
//     <div className="mb-8">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//           <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
//             <User className="w-5 h-5" />
//           </div>
//           <div className={`ml-2 text-sm font-medium ${currentStep >= 1 ? 'text-purple-600' : 'text-gray-500'}`}>
//             Personal Info
//           </div>
//         </div>
//         <div className={`flex-grow mx-4 h-0.5 ${currentStep >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
//         <div className="flex items-center">
//           <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
//             <BookOpen className="w-5 h-5" />
//           </div>
//           <div className={`ml-2 text-sm font-medium ${currentStep >= 2 ? 'text-purple-600' : 'text-gray-500'}`}>
//             Documents
//           </div>
//         </div>
//         <div className={`flex-grow mx-4 h-0.5 ${currentStep >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
//         <div className="flex items-center">
//           <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
//             <Briefcase className="w-5 h-5" />
//           </div>
//           <div className={`ml-2 text-sm font-medium ${currentStep >= 3 ? 'text-purple-600' : 'text-gray-500'}`}>
//             Preferences
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-extrabold text-purple-800">Student Onboarding</h2>
//           <p className="mt-2 text-lg text-gray-600">Please complete your profile to continue</p>
//         </div>
        
//         <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 sm:p-8">
//           {renderStepIndicator()}
          
//           <form>
//             {currentStep === 1 && renderPersonalDetailsForm()}
//             {currentStep === 2 && renderDocumentsForm()}
//             {currentStep === 3 && renderJobForm()}
            
//             <div className="mt-8 flex justify-between">
//               {currentStep > 1 ? (
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                 >
//                   <ChevronLeft className="mr-2 h-4 w-4" />
//                   Previous
//                 </button>
//               ) : (
//                 <div></div>
//               )}
              
//               {currentStep < 3 ? (
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                 >
//                   Next
//                   <ChevronRight className="ml-2 h-4 w-4" />
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={saveData}
//                   className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                 >
//                   <Save className="mr-2 h-5 w-5" />
//                   Save & Complete
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
        
//         <div className="mt-4 text-center text-sm text-gray-500">
//           <p>All fields marked with * are required</p>
//         </div>
//       </div>
//     </div>
//   );
// }