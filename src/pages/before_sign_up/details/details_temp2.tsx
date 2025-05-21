// import React, { useState, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Upload, Eye, X, Save, Check } from 'lucide-react';

// export default function UserDetailsForm() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     // Personal Details
//     fullName: '',
//     dateOfBirth: '',
//     gender: '',
//     phoneNumber: '',
//     countryCode: '+91',
//     email: '',
//     address: {
//       country: '',
//       state: '',
//       city: '',
//       street: '',
//       pincode: '',
//     },
//     nationality: '',
//     disability: 'No',
//     disabilityDetails: '',
    
//     // Family Details
//     parentName: '',
//     parentType: 'Father',
//     numberOfParents: '2',
//     maritalStatus: 'Single',
//     spouseName: '',
//     spousePhone: '',
    
//     // Education Details
//     userType: 'college-student',
//     collegeName: '',
//     degree: '',
//     department: '',
//     rollNumber: '',
//     admissionYear: '',
//     graduationYear: '',
//     cgpa: '',
//     backlogs: 'No',
    
//     // Social Profiles
//     linkedinUrl: '',
//     githubUrl: '',
//     codingProfile: '',
//     portfolioUrl: '',
    
//     // Documents
//     schoolMarksheet: null,
//     ugMarksheets: null,
//     idCard: null,
//     resume: null,
//     photos: [],
    
//     // Job Preferences
//     interestedDomains: [],
//     preferredLocations: [],
//     openToInternships: 'Yes',
//     expectedSalary: '',
//   });
  
//   const [errors, setErrors] = useState({});
//   const [previewUrls, setPreviewUrls] = useState({
//     schoolMarksheet: null,
//     ugMarksheets: null,
//     idCard: null,
//     resume: null,
//     photos: []
//   });
  
//   // Refs for file inputs
//   const schoolMarksheetRef = useRef(null);
//   const ugMarksheetsRef = useRef(null);
//   const idCardRef = useRef(null);
//   const resumeRef = useRef(null);
//   const photosRef = useRef(null);
  
//   // List of domains - these would be your pre-existing tags
//   const domainOptions = [
//     'Frontend', 'Backend', 'Full Stack', 'DSA', 'Data Science', 
//     'Machine Learning', 'AI', 'DevOps', 'Cloud', 'Mobile Dev',
//     'UI/UX', 'Cybersecurity', 'Blockchain', 'IoT', 'Game Dev'
//   ];
  
//   // List of locations
//   const locationOptions = [
//     'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Chennai',
//     'Kolkata', 'Remote', 'USA', 'Europe', 'Singapore', 'Canada'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes('.')) {
//       const [parent, child] = name.split('.');
//       setFormData({
//         ...formData,
//         [parent]: {
//           ...formData[parent],
//           [child]: value
//         }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
    
//     // Clear error when field is being edited
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null
//       });
//     }
//   };
  
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
    
//     if (name === 'photos') {
//       // Handle multiple files for photos
//       if (files && files.length > 0) {
//         setFormData({
//           ...formData,
//           [name]: [...(formData[name] || []), ...Array.from(files)]
//         });
        
//         // Create preview URLs for photos
//         const newPhotoUrls = Array.from(files).map(file => URL.createObjectURL(file));
//         setPreviewUrls({
//           ...previewUrls,
//           [name]: [...(previewUrls[name] || []), ...newPhotoUrls]
//         });
//       }
//     } else {
//       // Handle single file for other documents
//       if (files && files.length > 0) {
//         setFormData({
//           ...formData,
//           [name]: files[0]
//         });
        
//         // Create preview URL
//         setPreviewUrls({
//           ...previewUrls,
//           [name]: URL.createObjectURL(files[0])
//         });
//       }
//     }
    
//     // Clear error when field is being edited
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null
//       });
//     }
//   };
  
//   const removeFile = (name, index = null) => {
//     if (name === 'photos' && index !== null) {
//       // Remove specific photo
//       const newPhotos = [...formData.photos];
//       newPhotos.splice(index, 1);
      
//       const newPhotoUrls = [...previewUrls.photos];
//       URL.revokeObjectURL(newPhotoUrls[index]);
//       newPhotoUrls.splice(index, 1);
      
//       setFormData({
//         ...formData,
//         photos: newPhotos
//       });
      
//       setPreviewUrls({
//         ...previewUrls,
//         photos: newPhotoUrls
//       });
//     } else {
//       // Remove single document
//       if (previewUrls[name]) {
//         URL.revokeObjectURL(previewUrls[name]);
//       }
      
//       setFormData({
//         ...formData,
//         [name]: null
//       });
      
//       setPreviewUrls({
//         ...previewUrls,
//         [name]: null
//       });
//     }
//   };
  
//   const toggleDomain = (domain) => {
//     if (formData.interestedDomains.includes(domain)) {
//       setFormData({
//         ...formData,
//         interestedDomains: formData.interestedDomains.filter(d => d !== domain)
//       });
//     } else {
//       setFormData({
//         ...formData,
//         interestedDomains: [...formData.interestedDomains, domain]
//       });
//     }
//   };
  
//   const toggleLocation = (location) => {
//     if (formData.preferredLocations.includes(location)) {
//       setFormData({
//         ...formData,
//         preferredLocations: formData.preferredLocations.filter(l => l !== location)
//       });
//     } else {
//       setFormData({
//         ...formData,
//         preferredLocations: [...formData.preferredLocations, location]
//       });
//     }
//   };
  
//   const validateStep = (step) => {
//     const newErrors = {};
    
//     if (step === 1) {
//       // Validate personal details
//       if (!formData.fullName) newErrors.fullName = 'Full name is required';
//       if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
//       if (!formData.gender) newErrors.gender = 'Gender is required';
//       if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
//       if (!formData.email) newErrors.email = 'Email is required';
//       else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//       if (!formData.address.country) newErrors['address.country'] = 'Country is required';
//       if (!formData.address.state) newErrors['address.state'] = 'State is required';
//       if (!formData.address.city) newErrors['address.city'] = 'City is required';
//       if (!formData.nationality) newErrors.nationality = 'Nationality is required';
      
//       // Education validation
//       if (formData.userType === 'college-student') {
//         if (!formData.collegeName) newErrors.collegeName = 'College name is required';
//         if (!formData.degree) newErrors.degree = 'Degree is required';
//         if (!formData.department) newErrors.department = 'Department is required';
//         if (!formData.rollNumber) newErrors.rollNumber = 'Roll number is required';
//       }
//     }
    
//     if (step === 2) {
//       // Validate required documents
//       if (!formData.ugMarksheets) newErrors.ugMarksheets = 'UG Marksheets are required';
//       if (!formData.idCard) newErrors.idCard = 'ID Card is required';
//       if (!formData.resume) newErrors.resume = 'Resume is required';
//       if (!formData.photos || formData.photos.length < 1) newErrors.photos = 'At least 1 photo is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
  
//   const handleNext = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(currentStep + 1);
//     }
//   };
  
//   const handlePrevious = () => {
//     setCurrentStep(currentStep - 1);
//   };
  
//   const handleSubmit = () => {
//     if (validateStep(currentStep)) {
//       // Convert form data to JSON
//       const dataToSave = { ...formData };
      
//       // Create a folder with user's name and save data
//       alert(`Form submitted! Data would be saved in folder: ${formData.fullName}`);
//       console.log('Form data:', dataToSave);
      
//       // In a real implementation, you would:
//       // 1. Create a folder with the user's name
//       // 2. Save the JSON data to a file
//       // 3. Copy all document files to the folder
      
//       // For demo, we'll just log the data we'd save
//       const jsonData = JSON.stringify(
//         // Remove actual file objects from JSON and just keep file names
//         Object.entries(dataToSave).reduce((acc, [key, value]) => {
//           if (key === 'photos') {
//             acc[key] = Array.from(value || []).map(file => file.name);
//           } else if (value instanceof File) {
//             acc[key] = value.name;
//           } else {
//             acc[key] = value;
//           }
//           return acc;
//         }, {})
//       );
      
//       console.log('JSON data to save:', jsonData);
//     }
//   };

//   // Render the form based on current step
//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <div className="space-y-6">
//             {/* Personal Details Section */}
//             <div className="bg-white rounded-lg p-6 shadow-md">
//               <h2 className="text-2xl font-bold text-indigo-700 mb-4">👤 Personal Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.fullName ? 'border-red-500' : ''}`}
//                     placeholder="John Doe"
//                   />
//                   {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.dateOfBirth ? 'border-red-500' : ''}`}
//                   />
//                   {errors.dateOfBirth && <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Gender *</label>
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.gender ? 'border-red-500' : ''}`}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                     <option value="Prefer not to say">Prefer not to say</option>
//                   </select>
//                   {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
//                   <div className="mt-1 flex rounded-md shadow-sm">
//                     <select
//                       name="countryCode"
//                       value={formData.countryCode}
//                       onChange={handleChange}
//                       className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
//                     >
//                       <option value="+91">+91 (IN)</option>
//                       <option value="+1">+1 (US/CA)</option>
//                       <option value="+44">+44 (UK)</option>
//                       <option value="+61">+61 (AU)</option>
//                       <option value="+65">+65 (SG)</option>
//                     </select>
//                     <input
//                       type="tel"
//                       name="phoneNumber"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                       className={`block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 ${errors.phoneNumber ? 'border-red-500' : ''}`}
//                       placeholder="9876543210"
//                     />
//                   </div>
//                   {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Email ID *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : ''}`}
//                     placeholder="john.doe@example.com"
//                   />
//                   {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Nationality *</label>
//                   <input
//                     type="text"
//                     name="nationality"
//                     value={formData.nationality}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.nationality ? 'border-red-500' : ''}`}
//                     placeholder="Indian"
//                   />
//                   {errors.nationality && <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>}
//                 </div>
//               </div>
              
//               <div className="mt-4">
//                 <label className="block text-sm font-medium text-gray-700">Address</label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//                   <div>
//                     <input
//                       type="text"
//                       name="address.country"
//                       value={formData.address.country}
//                       onChange={handleChange}
//                       className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors['address.country'] ? 'border-red-500' : ''}`}
//                       placeholder="Country *"
//                     />
//                     {errors['address.country'] && <p className="mt-1 text-sm text-red-500">{errors['address.country']}</p>}
//                   </div>
                  
//                   <div>
//                     <input
//                       type="text"
//                       name="address.state"
//                       value={formData.address.state}
//                       onChange={handleChange}
//                       className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors['address.state'] ? 'border-red-500' : ''}`}
//                       placeholder="State *"
//                     />
//                     {errors['address.state'] && <p className="mt-1 text-sm text-red-500">{errors['address.state']}</p>}
//                   </div>
                  
//                   <div>
//                     <input
//                       type="text"
//                       name="address.city"
//                       value={formData.address.city}
//                       onChange={handleChange}
//                       className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors['address.city'] ? 'border-red-500' : ''}`}
//                       placeholder="City *"
//                     />
//                     {errors['address.city'] && <p className="mt-1 text-sm text-red-500">{errors['address.city']}</p>}
//                   </div>
                  
//                   <div>
//                     <input
//                       type="text"
//                       name="address.street"
//                       value={formData.address.street}
//                       onChange={handleChange}
//                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="Street Address"
//                     />
//                   </div>
                  
//                   <div>
//                     <input
//                       type="text"
//                       name="address.pincode"
//                       value={formData.address.pincode}
//                       onChange={handleChange}
//                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="Pincode"
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-4">
//                 <label className="block text-sm font-medium text-gray-700">Disability</label>
//                 <div className="mt-2 flex items-center space-x-4">
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       name="disability"
//                       value="No"
//                       checked={formData.disability === 'No'}
//                       onChange={handleChange}
//                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                     />
//                     <span className="ml-2">No</span>
//                   </label>
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       name="disability"
//                       value="Yes"
//                       checked={formData.disability === 'Yes'}
//                       onChange={handleChange}
//                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                     />
//                     <span className="ml-2">Yes</span>
//                   </label>
//                 </div>
                
//                 {formData.disability === 'Yes' && (
//                   <div className="mt-2">
//                     <input
//                       type="text"
//                       name="disabilityDetails"
//                       value={formData.disabilityDetails}
//                       onChange={handleChange}
//                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="Please specify"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
            
//             {/* Family Details Section */}
//             <div className="bg-white rounded-lg p-6 shadow-md">
//               <h2 className="text-2xl font-bold text-pink-600 mb-4">👪 Family Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Parent Name</label>
//                   <input
//                     type="text"
//                     name="parentName"
//                     value={formData.parentName}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     placeholder="Parent's Name"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Parent Type</label>
//                   <select
//                     name="parentType"
//                     value={formData.parentType}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   >
//                     <option value="Father">Father</option>
//                     <option value="Mother">Mother</option>
//                     <option value="Guardian">Guardian</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Number of Parents</label>
//                   <select
//                     name="numberOfParents"
//                     value={formData.numberOfParents}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   >
//                     <option value="2">2</option>
//                     <option value="1">1</option>
//                     <option value="0">0</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Marital Status</label>
//                   <select
//                     name="maritalStatus"
//                     value={formData.maritalStatus}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   >
//                     <option value="Single">Single</option>
//                     <option value="Married">Married</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//               </div>
              
//               {formData.maritalStatus === 'Married' && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Spouse Name</label>
//                     <input
//                       type="text"
//                       name="spouseName"
//                       value={formData.spouseName}
//                       onChange={handleChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="Spouse's Name"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Spouse Phone Number</label>
//                     <input
//                       type="tel"
//                       name="spousePhone"
//                       value={formData.spousePhone}
//                       onChange={handleChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="Spouse's Phone Number"
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             {/* Education Details Section */}
//             <div className="bg-white rounded-lg p-6 shadow-md">
//               <h2 className="text-2xl font-bold text-green-600 mb-4">🎓 Education Details</h2>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">I am a</label>
//                 <div className="mt-2 flex flex-wrap gap-4">
//                   <label className="inline-flex items-center p-3 border rounded-md bg-green-50 hover:bg-green-100 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="userType"
//                       value="college-student"
//                       checked={formData.userType === 'college-student'}
//                       onChange={handleChange}
//                       className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
//                     />
//                     <span className="ml-2">College Student</span>
//                   </label>
//                   <label className="inline-flex items-center p-3 border rounded-md bg-blue-50 hover:bg-blue-100 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="userType"
//                       value="school-student"
//                       checked={formData.userType === 'school-student'}
//                       onChange={handleChange}
//                       className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
//                     />
//                     <span className="ml-2">School Student</span>
//                   </label>
//                   <label className="inline-flex items-center p-3 border rounded-md bg-purple-50 hover:bg-purple-100 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="userType"
//                       value="employee"
//                       checked={formData.userType === 'employee'}
//                       onChange={handleChange}
//                       className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
//                     />
//                     <span className="ml-2">Employee</span>
//                   </label>
//                 </div>
//               </div>
              
//               {formData.userType === 'college-student' && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">College Name *</label>
//                     <input
//                       type="text"
//                       name="collegeName"
//                       value={formData.collegeName}
//                       onChange={handleChange}
//                       className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.collegeName ? 'border-red-500' : ''}`}
//                       placeholder="College Name"
//                     />
//                     {errors.collegeName && <p className="mt-1 text-sm text-red-500">{errors.collegeName}</p>}
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Degree *</label>
//                     <input
//                       type="text"
//                       name="degree"
//                       value={formData.degree}
//                       onChange={handleChange}
//                       className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.degree ? 'border-red-500' : ''}`}
//                       placeholder="B.Tech, BSc, etc."
//                     />
//                     {errors.degree && <p className="mt-1 text-sm text-red-500">{errors.degree}</p>}
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Department / Branch *</label>
//                     <input
//                       type="text"
//                       name="department"
//                       value={formData.department}
//                       onChange={handleChange}
//                       className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.department ? 'border-red-500' : ''}`}
//                       placeholder="Computer Science, Electronics, etc."
//                     />
//                     {errors.department && <p className="mt-1 text-sm text-red-500">{errors.department}</p>}
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Roll Number *</label>
//                     <input
//                       type="text"
//                       name="rollNumber"
//                       value={formData.rollNumber}
//                       onChange={handleChange}
//                       className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.rollNumber ? 'border-red-500' : ''}`}
//                       placeholder="Roll Number"
//                     />
//                     {errors.rollNumber && <p className="mt-1 text-sm text-red-500">{errors.rollNumber}</p>}
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Year of Admission</label>
//                     <input
//                       type="number"
//                       name="admissionYear"
//                       value={formData.admissionYear}
//                       onChange={handleChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="2020"
//                       min="2000"
//                       max="2025"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Expected Graduation Year</label>
//                     <input
//                       type="number"
//                       name="graduationYear"
//                       value={formData.graduationYear}
//                       onChange={handleChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="2024"
//                       min="2020"
//                       max="2030"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Current CGPA</label>
//                     <input
//                       type="number"
//                       name="cgpa"
//                       value={formData.cgpa}
//                       onChange={handleChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="8.5"
//                       min="0"
//                       max="10"
//                       step="0.01"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Backlogs</label>
//                     <select
//                       name="backlogs"
//                       value={formData.backlogs}
//                       onChange={handleChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     >
//                       <option value="No">No</option>
//                       <option value="Yes">Yes</option>
//                     </select>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             {/* Social Profiles Section */}
//             <div className="bg-white rounded-lg p-6 shadow-md">
//               <h2 className="text-2xl font-bold text-blue-600 mb-4">🌐 Social Profiles</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
//                   <input
//                     type="url"
//                     name="linkedinUrl"
//                     value={formData.linkedinUrl}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     placeholder="https://linkedin.com/in/yourusername"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
//                   <input
//                     type="url"
//                     name="githubUrl"
//                     value={formData.githubUrl}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     placeholder="https://github.com/yourusername"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Coding Profile (LeetCode/Codeforces/HackerRank)</label>
//                   <input
//                     type="url"
//                     name="codingProfile"
//                     value={formData.codingProfile}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     placeholder="https://leetcode.com/yourusername"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Personal Portfolio</label>
//                   <input
//                     type="url"
//                     name="portfolioUrl"
//                     value={formData.portfolioUrl}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     placeholder="https://yourportfolio.com"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
        
//       case 2:
//         return (
//           <div className="bg-white rounded-lg p-6 shadow-md">
//             <h2 className="text-2xl font-bold text-orange-600 mb-4">📄 Documents Upload</h2>
//             <p className="text-sm text-gray-500 mb-6">Please upload clear scans or images of your documents in PDF or image formats.</p>
            
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">School Marksheets (Optional)</label>
//                 <div className="mt-1 flex items-center">
//                   <input
//                     type="file"
//                     ref={schoolMarksheetRef}
//                     onChange={handleFileChange}
//                     name="schoolMarksheet"
//                     className="hidden"
//                     accept=".pdf,.jpg,.jpeg,.png"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => schoolMarksheetRef.current.click()}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     <Upload className="h-5 w-5 mr-2" />
//                     Upload
//                   </button>
//                   {formData.schoolMarksheet && (
//                     <span className="ml-3 text-sm text-gray-500">
//                       {formData.schoolMarksheet.name}
//                       <button
//                         type="button"
//                         onClick={() => removeFile('schoolMarksheet')}
//                         className="ml-2 text-red-500 hover:text-red-700"
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => window.open(previewUrls.schoolMarksheet, '_blank')}
//                         className="ml-2 text-blue-500 hover:text-blue-700"
//                       >
//                         <Eye className="h-4 w-4" />
//                       </button>
//                     </span>
//                   )}
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">UG Semester-wise Marksheets *</label>
//                 <div className="mt-1 flex items-center">
//                   <input
//                     type="file"
//                     ref={ugMarksheetsRef}
//                     onChange={handleFileChange}
//                     name="ugMarksheets"
//                     className="hidden"
//                     accept=".pdf,.jpg,.jpeg,.png"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => ugMarksheetsRef.current.click()}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     <Upload className="h-5 w-5 mr-2" />
//                     Upload
//                   </button>
//                   {formData.ugMarksheets && (
//                     <span className="ml-3 text-sm text-gray-500">
//                       {formData.ugMarksheets.name}
//                       <button
//                         type="button"
//                         onClick={() => removeFile('ugMarksheets')}
//                         className="ml-2 text-red-500 hover:text-red-700"
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => window.open(previewUrls.ugMarksheets, '_blank')}
//                         className="ml-2 text-blue-500 hover:text-blue-700"
//                       >
//                         <Eye className="h-4 w-4" />
//                       </button>
//                     </span>
//                   )}
//                 </div>
//                 {errors.ugMarksheets && <p className="mt-1 text-sm text-red-500">{errors.ugMarksheets}</p>}
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Aadhar Card / National ID *</label>
//                 <div className="mt-1 flex items-center">
//                   <input
//                     type="file"
//                     ref={idCardRef}
//                     onChange={handleFileChange}
//                     name="idCard"
//                     className="hidden"
//                     accept=".pdf,.jpg,.jpeg,.png"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => idCardRef.current.click()}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     <Upload className="h-5 w-5 mr-2" />
//                     Upload
//                   </button>
//                   {formData.idCard && (
//                     <span className="ml-3 text-sm text-gray-500">
//                       {formData.idCard.name}
//                       <button
//                         type="button"
//                         onClick={() => removeFile('idCard')}
//                         className="ml-2 text-red-500 hover:text-red-700"
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => window.open(previewUrls.idCard, '_blank')}
//                         className="ml-2 text-blue-500 hover:text-blue-700"
//                       >
//                         <Eye className="h-4 w-4" />
//                       </button>
//                     </span>
//                   )}
//                 </div>
//                 {errors.idCard && <p className="mt-1 text-sm text-red-500">{errors.idCard}</p>}
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Resume (PDF) *</label>
//                 <div className="mt-1 flex items-center">
//                   <input
//                     type="file"
//                     ref={resumeRef}
//                     onChange={handleFileChange}
//                     name="resume"
//                     className="hidden"
//                     accept=".pdf"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => resumeRef.current.click()}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     <Upload className="h-5 w-5 mr-2" />
//                     Upload
//                   </button>
//                   {formData.resume && (
//                     <span className="ml-3 text-sm text-gray-500">
//                       {formData.resume.name}
//                       <button
//                         type="button"
//                         onClick={() => removeFile('resume')}
//                         className="ml-2 text-red-500 hover:text-red-700"
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => window.open(previewUrls.resume, '_blank')}
//                         className="ml-2 text-blue-500 hover:text-blue-700"
//                       >
//                         <Eye className="h-4 w-4" />
//                       </button>
//                     </span>
//                   )}
//                 </div>
//                 {errors.resume && <p className="mt-1 text-sm text-red-500">{errors.resume}</p>}
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Passport Size Photos *</label>
//                 <p className="text-xs text-gray-500 mt-1">Upload at least 1 passport size photo</p>
//                 <div className="mt-1 flex items-center">
//                   <input
//                     type="file"
//                     ref={photosRef}
//                     onChange={handleFileChange}
//                     name="photos"
//                     className="hidden"
//                     accept=".jpg,.jpeg,.png"
//                     multiple
//                   />
//                   <button
//                     type="button"
//                     onClick={() => photosRef.current.click()}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     <Upload className="h-5 w-5 mr-2" />
//                     Upload
//                   </button>
//                   <span className="ml-3 text-sm text-gray-500">
//                     {formData.photos && formData.photos.length > 0 ? `${formData.photos.length} photo(s) selected` : ''}
//                   </span>
//                 </div>
//                 {errors.photos && <p className="mt-1 text-sm text-red-500">{errors.photos}</p>}
                
//                 {formData.photos && formData.photos.length > 0 && (
//                   <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {previewUrls.photos.map((url, index) => (
//                       <div key={index} className="relative h-32 w-full border rounded-md overflow-hidden">
//                         <img 
//                           src={url} 
//                           alt={`Photo ${index + 1}`}
//                           className="h-full w-full object-cover"
//                         />
//                         <div className="absolute top-0 right-0 p-1">
//                           <button
//                             type="button"
//                             onClick={() => removeFile('photos', index)}
//                             className="bg-red-500 hover:bg-red-700 text-white rounded-full p-1"
//                           >
//                             <X className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         );
        
//       case 3:
//         return (
//           <div className="bg-white rounded-lg p-6 shadow-md">
//             <h2 className="text-2xl font-bold text-purple-600 mb-4">💼 Job Preferences</h2>
            
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Interested Domains</label>
//                 <div className="flex flex-wrap gap-2">
//                   {domainOptions.map(domain => (
//                     <button
//                       key={domain}
//                       type="button"
//                       onClick={() => toggleDomain(domain)}
//                       className={`px-4 py-2 rounded-full text-sm ${
//                         formData.interestedDomains.includes(domain)
//                           ? 'bg-purple-600 text-white'
//                           : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                       }`}
//                     >
//                       {domain}
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Work Locations</label>
//                 <div className="flex flex-wrap gap-2">
//                   {locationOptions.map(location => (
//                     <button
//                       key={location}
//                       type="button"
//                       onClick={() => toggleLocation(location)}
//                       className={`px-4 py-2 rounded-full text-sm ${
//                         formData.preferredLocations.includes(location)
//                           ? 'bg-teal-600 text-white'
//                           : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                       }`}
//                     >
//                       {location}
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Open to Internships</label>
//                   <select
//                     name="openToInternships"
//                     value={formData.openToInternships}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   >
//                     <option value="Yes">Yes</option>
//                     <option value="No">No</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Expected Salary (Optional)</label>
//                   <input
//                     type="text"
//                     name="expectedSalary"
//                     value={formData.expectedSalary}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     placeholder="e.g., ₹6-8 LPA"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
      
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//           <h1 className="text-3xl font-bold text-center text-indigo-800 mb-2">Easy Job Apply for Students</h1>
//           <p className="text-center text-gray-600 mb-4">Complete your profile to get started with job applications</p>
          
//           {/* Progress bar */}
//           <div className="mb-8">
//             <div className="flex justify-between mb-2">
//               {[1, 2, 3].map((step) => (
//                 <div 
//                   key={step} 
//                   className={`flex flex-col items-center ${
//                     step < currentStep ? 'text-green-600' : 
//                     step === currentStep ? 'text-blue-600' : 'text-gray-400'
//                   }`}
//                 >
//                   <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
//                     step < currentStep ? 'bg-green-100 border-2 border-green-600' : 
//                     step === currentStep ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-100 border-2 border-gray-400'
//                   }`}>
//                     {step < currentStep ? (
//                       <Check className="h-5 w-5" />
//                     ) : (
//                       <span>{step}</span>
//                     )}
//                   </div>
//                   <span className="text-xs mt-1">
//                     {step === 1 ? 'Personal Info' : 
//                      step === 2 ? 'Documents' : 'Preferences'}
//                   </span>
//                 </div>
//               ))}
//             </div>
//             <div className="h-2 bg-gray-200 rounded-full">
//               <div 
//                 className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-in-out"
//                 style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
//               ></div>
//             </div>
//           </div>
          
//           {/* Form content */}
//           {renderStep()}
          
//           {/* Navigation buttons */}
//           <div className="mt-8 flex justify-between">
//             {currentStep > 1 && (
//               <button
//                 type="button"
//                 onClick={handlePrevious}
//                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 <ChevronLeft className="h-5 w-5 mr-2" />
//                 Previous
//               </button>
//             )}
            
//             {currentStep < 3 ? (
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto"
//               >
//                 Next
//                 <ChevronRight className="h-5 w-5 ml-2" />
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto"
//               >
//                 <Save className="h-5 w-5 mr-2" />
//                 Save & Complete Profile
//               </button>
//             )}
//           </div>
//         </div>
        
//         <div className="text-center text-gray-500 text-sm">
//           All your data will be saved locally. Make sure to complete all required fields marked with *.
//         </div>
//       </div>
//     </div>
//   );
// }