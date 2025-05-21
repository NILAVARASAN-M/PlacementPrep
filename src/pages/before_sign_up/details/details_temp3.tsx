// import { useState, useRef } from 'react';
// import { 
//   Check, X, ChevronRight, ChevronLeft, Upload, 
//   User, GraduationCap, Users, Briefcase, Globe, Save
// } from 'lucide-react';

// export default function StudentDetailForm() {
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const [formData, setFormData] = useState({
//     // Personal Details
//     fullName: '',
//     dateOfBirth: '',
//     gender: '',
//     phoneNumber: '',
//     email: '',
//     country: '',
//     state: '',
//     city: '',
//     street: '',
//     pincode: '',
//     nationality: '',
//     disability: '',
    
//     // Family Details
//     parentName: '',
//     parentType: 'father',
//     numberOfParents: '',
//     maritalStatus: 'single',
//     spouseName: '',
//     spousePhone: '',
    
//     // Education Details
//     collegeName: '',
//     degree: '',
//     department: '',
//     rollNumber: '',
//     yearOfAdmission: '',
//     graduationYear: '',
//     cgpa: '',
//     backlogs: 'no',
//     userType: 'student',
    
//     // Social Profiles
//     linkedin: '',
//     github: '',
//     codingProfile: '',
//     portfolio: '',
    
//     // Job Preferences
//     interestedDomains: [],
//     preferredLocations: '',
//     openToInternships: 'yes',
//     expectedSalary: '',
//   });
  
//   const [images, setImages] = useState([]);
//   const [validationErrors, setValidationErrors] = useState({});
//   const fileInputRef = useRef(null);
  
//   // Preset domain tags
//   const domainTags = [
//     'DSA', 'Frontend', 'Backend', 'Full Stack', 'Mobile', 'UI/UX', 
//     'DevOps', 'Data Science', 'Machine Learning', 'AI', 'Blockchain', 
//     'Cloud Computing', 'Cyber Security', 'Game Development'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     if (type === 'checkbox') {
//       // Handle domain tags selection
//       setFormData(prev => {
//         const updatedDomains = checked
//           ? [...prev.interestedDomains, value]
//           : prev.interestedDomains.filter(domain => domain !== value);
          
//         return { ...prev, interestedDomains: updatedDomains };
//       });
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
      
//       // Clear validation error when field is filled
//       if (value && validationErrors[name]) {
//         setValidationErrors(prev => ({ ...prev, [name]: null }));
//       }
//     }
//   };
  
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length > 0) {
//       const newImages = files.map(file => ({
//         file,
//         preview: URL.createObjectURL(file)
//       }));
      
//       setImages(prev => [...prev, ...newImages]);
//     }
//   };
  
//   const removeImage = (index) => {
//     setImages(prev => {
//       const newImages = [...prev];
//       URL.revokeObjectURL(newImages[index].preview);
//       newImages.splice(index, 1);
//       return newImages;
//     });
//   };
  
//   const validateSlide = (slideNum) => {
//     const errors = {};
    
//     // Validation for slide 1
//     if (slideNum === 1) {
//       if (!formData.fullName) errors.fullName = 'Name is required';
//       if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
//       if (!formData.gender) errors.gender = 'Gender is required';
//       if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
//       if (!formData.email) errors.email = 'Email is required';
//       else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
//       if (!formData.country) errors.country = 'Country is required';
//       if (!formData.nationality) errors.nationality = 'Nationality is required';
//     }
    
//     // Validation for slide 2
//     else if (slideNum === 2) {
//       if (!formData.parentName) errors.parentName = 'Parent name is required';
//       if (!formData.numberOfParents) errors.numberOfParents = 'Number of parents is required';
//       if (formData.maritalStatus === 'married') {
//         if (!formData.spouseName) errors.spouseName = 'Spouse name is required';
//       }
      
//       if (!formData.collegeName) errors.collegeName = 'College name is required';
//       if (!formData.degree) errors.degree = 'Degree is required';
//       if (!formData.department) errors.department = 'Department is required';
//       if (!formData.rollNumber) errors.rollNumber = 'Roll number is required';
//       if (!formData.yearOfAdmission) errors.yearOfAdmission = 'Year of admission is required';
//       if (!formData.graduationYear) errors.graduationYear = 'Graduation year is required';
//       if (!formData.cgpa) errors.cgpa = 'CGPA is required';
      
//       if (images.length < 1) errors.images = 'At least one passport photo is required';
//     }
    
//     setValidationErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
  
//   const nextSlide = () => {
//     if (validateSlide(currentSlide)) {
//       setCurrentSlide(prev => prev + 1);
//     }
//   };
  
//   const prevSlide = () => {
//     setCurrentSlide(prev => prev - 1);
//   };
  
//   const saveData = () => {
//     if (!formData.fullName) {
//       alert("Full name is required to create a folder");
//       return;
//     }
    
//     // Prepare data to save
//     const dataToSave = {
//       ...formData,
//       images: images.map(img => img.file.name)
//     };
    
//     // In a real application, we'd use something like localStorage or IndexedDB
//     // But for demo purposes, we'll show a success message
//     console.log("Creating folder with name:", formData.fullName);
//     console.log("Data to save:", dataToSave);
    
//     // Create a downloadable JSON file
//     const jsonBlob = new Blob([JSON.stringify(dataToSave, null, 2)], { type: 'application/json' });
//     const jsonUrl = URL.createObjectURL(jsonBlob);
//     const downloadLink = document.createElement('a');
//     downloadLink.href = jsonUrl;
//     downloadLink.download = `${formData.fullName.replace(/\s+/g, '_')}_details.json`;
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
    
//     alert(`Data saved successfully! A folder named "${formData.fullName}" would be created with the JSON data and images in a real application.`);
//   };
  
//   // Helper function to determine if a field has an error
//   const hasError = (field) => validationErrors[field] ? 'border-red-500' : '';
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
//         <div className="p-8">
//           <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
//             Student Profile Setup
//           </h1>
          
//           {/* Progress indicator */}
//           <div className="flex justify-center mb-10">
//             <div className="flex items-center">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 currentSlide >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'
//               }`}>
//                 <User size={18} />
//               </div>
//               <div className={`h-1 w-12 ${currentSlide >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 currentSlide >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'
//               }`}>
//                 <Users size={18} />
//               </div>
//               <div className={`h-1 w-12 ${currentSlide >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 currentSlide >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'
//               }`}>
//                 <Briefcase size={18} />
//               </div>
//             </div>
//           </div>
          
//           <div className="relative">
//             {/* Slide 1: Personal Details */}
//             <div className={`${currentSlide === 1 ? 'block' : 'hidden'}`}>
//               <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg mb-6">
//                 <h2 className="text-2xl font-bold flex items-center text-blue-800 mb-2">
//                   <User className="mr-2" /> Personal Details
//                 </h2>
//                 <p className="text-gray-600">Basic identity and contact information</p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 mb-1">Full Name*</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300 ${hasError('fullName')}`}
//                     placeholder="John Doe"
//                   />
//                   {validationErrors.fullName && <p className="text-red-500 text-sm mt-1">{validationErrors.fullName}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Date of Birth*</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300 ${hasError('dateOfBirth')}`}
//                   />
//                   {validationErrors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{validationErrors.dateOfBirth}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Gender*</label>
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300 ${hasError('gender')}`}
//                   >
//                     <option value="">Select gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                     <option value="prefer-not-to-say">Prefer not to say</option>
//                   </select>
//                   {validationErrors.gender && <p className="text-red-500 text-sm mt-1">{validationErrors.gender}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Phone Number*</label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300 ${hasError('phoneNumber')}`}
//                     placeholder="+1 234 567 8900"
//                   />
//                   {validationErrors.phoneNumber && <p className="text-red-500 text-sm mt-1">{validationErrors.phoneNumber}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Email ID*</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300 ${hasError('email')}`}
//                     placeholder="johndoe@example.com"
//                   />
//                   {validationErrors.email && <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Nationality*</label>
//                   <input
//                     type="text"
//                     name="nationality"
//                     value={formData.nationality}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300 ${hasError('nationality')}`}
//                     placeholder="Indian"
//                   />
//                   {validationErrors.nationality && <p className="text-red-500 text-sm mt-1">{validationErrors.nationality}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Country*</label>
//                   <input
//                     type="text"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300 ${hasError('country')}`}
//                     placeholder="India"
//                   />
//                   {validationErrors.country && <p className="text-red-500 text-sm mt-1">{validationErrors.country}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">State</label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300"
//                     placeholder="Maharashtra"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">City</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300"
//                     placeholder="Mumbai"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Street Address</label>
//                   <input
//                     type="text"
//                     name="street"
//                     value={formData.street}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300"
//                     placeholder="123 Main Street"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Pincode</label>
//                   <input
//                     type="text"
//                     name="pincode"
//                     value={formData.pincode}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300"
//                     placeholder="400001"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Disability (if applicable)</label>
//                   <input
//                     type="text"
//                     name="disability"
//                     value={formData.disability}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300"
//                     placeholder="None"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             {/* Slide 2: Family & Education Details */}
//             <div className={`${currentSlide === 2 ? 'block' : 'hidden'}`}>
//               {/* Family Details */}
//               <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg mb-6">
//                 <h2 className="text-2xl font-bold flex items-center text-green-800 mb-2">
//                   <Users className="mr-2" /> Family Details
//                 </h2>
//                 <p className="text-gray-600">Information about your family</p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <label className="block text-gray-700 mb-1">Parent Name*</label>
//                   <input
//                     type="text"
//                     name="parentName"
//                     value={formData.parentName}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-teal-300 ${hasError('parentName')}`}
//                     placeholder="Parent's name"
//                   />
//                   {validationErrors.parentName && <p className="text-red-500 text-sm mt-1">{validationErrors.parentName}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Parent Type</label>
//                   <select
//                     name="parentType"
//                     value={formData.parentType}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-teal-300"
//                   >
//                     <option value="father">Father</option>
//                     <option value="mother">Mother</option>
//                     <option value="guardian">Guardian</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Number of Parents*</label>
//                   <input
//                     type="number"
//                     name="numberOfParents"
//                     value={formData.numberOfParents}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-teal-300 ${hasError('numberOfParents')}`}
//                     min="0"
//                     max="2"
//                   />
//                   {validationErrors.numberOfParents && <p className="text-red-500 text-sm mt-1">{validationErrors.numberOfParents}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Marital Status</label>
//                   <select
//                     name="maritalStatus"
//                     value={formData.maritalStatus}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-teal-300"
//                   >
//                     <option value="single">Single</option>
//                     <option value="married">Married</option>
//                   </select>
//                 </div>
                
//                 {formData.maritalStatus === 'married' && (
//                   <>
//                     <div>
//                       <label className="block text-gray-700 mb-1">Spouse Name*</label>
//                       <input
//                         type="text"
//                         name="spouseName"
//                         value={formData.spouseName}
//                         onChange={handleChange}
//                         className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-teal-300 ${hasError('spouseName')}`}
//                         placeholder="Spouse name"
//                       />
//                       {validationErrors.spouseName && <p className="text-red-500 text-sm mt-1">{validationErrors.spouseName}</p>}
//                     </div>
                    
//                     <div>
//                       <label className="block text-gray-700 mb-1">Spouse Phone Number</label>
//                       <input
//                         type="tel"
//                         name="spousePhone"
//                         value={formData.spousePhone}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-teal-300"
//                         placeholder="+1 234 567 8900"
//                       />
//                     </div>
//                   </>
//                 )}
//               </div>
              
//               {/* Education Details */}
//               <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded-lg mb-6">
//                 <h2 className="text-2xl font-bold flex items-center text-orange-800 mb-2">
//                   <GraduationCap className="mr-2" /> Education Details
//                 </h2>
//                 <p className="text-gray-600">Information about your academic background</p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <label className="block text-gray-700 mb-1">User Type</label>
//                   <select
//                     name="userType"
//                     value={formData.userType}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300"
//                   >
//                     <option value="student">College Student</option>
//                     <option value="schoolStudent">School Student</option>
//                     <option value="employee">Employee</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">College Name*</label>
//                   <input
//                     type="text"
//                     name="collegeName"
//                     value={formData.collegeName}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300 ${hasError('collegeName')}`}
//                     placeholder="IIT Delhi"
//                   />
//                   {validationErrors.collegeName && <p className="text-red-500 text-sm mt-1">{validationErrors.collegeName}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Degree*</label>
//                   <input
//                     type="text"
//                     name="degree"
//                     value={formData.degree}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300 ${hasError('degree')}`}
//                     placeholder="B.Tech"
//                   />
//                   {validationErrors.degree && <p className="text-red-500 text-sm mt-1">{validationErrors.degree}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Department / Branch*</label>
//                   <input
//                     type="text"
//                     name="department"
//                     value={formData.department}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300 ${hasError('department')}`}
//                     placeholder="Computer Science"
//                   />
//                   {validationErrors.department && <p className="text-red-500 text-sm mt-1">{validationErrors.department}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Roll Number*</label>
//                   <input
//                     type="text"
//                     name="rollNumber"
//                     value={formData.rollNumber}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300 ${hasError('rollNumber')}`}
//                     placeholder="CS21B035"
//                   />
//                   {validationErrors.rollNumber && <p className="text-red-500 text-sm mt-1">{validationErrors.rollNumber}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Year of Admission*</label>
//                   <input
//                     type="number"
//                     name="yearOfAdmission"
//                     value={formData.yearOfAdmission}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300 ${hasError('yearOfAdmission')}`}
//                     placeholder="2021"
//                   />
//                   {validationErrors.yearOfAdmission && <p className="text-red-500 text-sm mt-1">{validationErrors.yearOfAdmission}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Expected Graduation Year*</label>
//                   <input
//                     type="number"
//                     name="graduationYear"
//                     value={formData.graduationYear}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300 ${hasError('graduationYear')}`}
//                     placeholder="2025"
//                   />
//                   {validationErrors.graduationYear && <p className="text-red-500 text-sm mt-1">{validationErrors.graduationYear}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Current CGPA*</label>
//                   <input
//                     type="number"
//                     name="cgpa"
//                     value={formData.cgpa}
//                     onChange={handleChange}
//                     className={`w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300 ${hasError('cgpa')}`}
//                     placeholder="8.5"
//                     step="0.01"
//                     min="0"
//                     max="10"
//                   />
//                   {validationErrors.cgpa && <p className="text-red-500 text-sm mt-1">{validationErrors.cgpa}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Backlogs</label>
//                   <select
//                     name="backlogs"
//                     value={formData.backlogs}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-yellow-300"
//                   >
//                     <option value="no">No</option>
//                     <option value="yes">Yes</option>
//                   </select>
//                 </div>
//               </div>
              
//               {/* Passport Photos */}
//               <div className="mb-8">
//                 <label className="block text-gray-700 mb-1">Passport Size Photos* (Minimum 1)</label>
//                 <div 
//                   className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
//                     hover:bg-gray-50 transition-colors ${hasError('images')}`}
//                   onClick={() => fileInputRef.current.click()}
//                 >
//                   <Upload className="mx-auto text-gray-400 mb-2" size={32} />
//                   <p className="text-gray-500">Click to upload photos (or drag and drop)</p>
//                   <p className="text-gray-400 text-sm">PNG, JPG, or JPEG (max 5MB each)</p>
//                   <input 
//                     type="file"
//                     ref={fileInputRef}
//                     accept="image/*"
//                     multiple
//                     onChange={handleImageUpload}
//                     className="hidden"
//                   />
//                 </div>
//                 {validationErrors.images && <p className="text-red-500 text-sm mt-1">{validationErrors.images}</p>}
                
//                 {/* Preview images */}
//                 {images.length > 0 && (
//                   <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//                     {images.map((img, index) => (
//                       <div key={index} className="relative">
//                         <img 
//                           src={img.preview} 
//                           alt={`Passport photo ${index + 1}`}
//                           className="w-full h-32 object-cover rounded-lg"
//                         />
//                         <button
//                           onClick={() => removeImage(index)}
//                           className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
//                         >
//                           <X size={16} />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
            
//             {/* Slide 3: Social & Job Preferences */}
//             <div className={`${currentSlide === 3 ? 'block' : 'hidden'}`}>
//               {/* Social Profiles */}
//               <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded-lg mb-6">
//                 <h2 className="text-2xl font-bold flex items-center text-indigo-800 mb-2">
//                   <Globe className="mr-2" /> Social Profiles
//                 </h2>
//                 <p className="text-gray-600">Share your online presence</p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <label className="block text-gray-700 mb-1">LinkedIn URL</label>
//                   <input
//                     type="url"
//                     name="linkedin"
//                     value={formData.linkedin}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-indigo-300"
//                     placeholder="https://linkedin.com/in/johndoe"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">GitHub URL</label>
//                   <input
//                     type="url"
//                     name="github"
//                     value={formData.github}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-indigo-300"
//                     placeholder="https://github.com/johndoe"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">LeetCode / Codeforces / HackerRank</label>
//                   <input
//                     type="url"
//                     name="codingProfile"
//                     value={formData.codingProfile}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-indigo-300"
//                     placeholder="https://leetcode.com/johndoe"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Personal Portfolio</label>
//                   <input
//                     type="url"
//                     name="portfolio"
//                     value={formData.portfolio}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-indigo-300"
//                     placeholder="https://johndoe.dev"
//                   />
//                 </div>
//               </div>
              
//               {/* Job Preferences */}
//               <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg mb-6">
//                 <h2 className="text-2xl font-bold flex items-center text-pink-800 mb-2">
//                   <Briefcase className="mr-2" /> Job Preferences
//                 </h2>
//                 <p className="text-gray-600">Let us know your career interests</p>
//               </div>
              
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Interested Domains</label>
//                 <div className="flex flex-wrap gap-2">
//                   {domainTags.map(domain => (
//                     <div key={domain} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id={`domain-${domain}`}
//                         name="interestedDomains"
//                         value={domain}
//                         checked={formData.interestedDomains.includes(domain)}
//                         onChange={handleChange}
//                         className="hidden"
//                       />
//                       <label
//                         htmlFor={`domain-${domain}`}
//                         className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${
//                           formData.interestedDomains.includes(domain)
//                             ? 'bg-purple-600 text-white'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                       >
//                         #{domain}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <label className="block text-gray-700 mb-1">Preferred Work Locations</label>
//                   <input
//                     type="text"
//                     name="preferredLocations"
//                     value={formData.preferredLocations}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300"
//                     placeholder="Mumbai, Bangalore, Remote"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Open to Internships</label>
//                   <select
//                     name="openToInternships"
//                     value={formData.openToInternships}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300"
//                   >
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 mb-1">Expected Salary (monthly in ₹)</label>
//                   <input
//                     type="number"
//                     name="expectedSalary"
//                     value={formData.expectedSalary}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg border-2 focus:ring focus:ring-purple-300"
//                     placeholder="50000"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Navigation buttons */}
//           <div className="flex justify-between mt-10">
//             {currentSlide > 1 && (
//               <button
//                 onClick={prevSlide}
//                 className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//               >
//                 <ChevronLeft className="mr-2" size={18} />
//                 Back
//               </button>
//             )}
            
//             {currentSlide < 3 ? (
//               <button
//                 onClick={nextSlide}
//                 className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ml-auto"
//               >
//                 Next
//                 <ChevronRight className="ml-2" size={18} />
//               </button>
//             ) : (
//               <button
//                 onClick={saveData}
//                 className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ml-auto"
//               >
//                 <Save className="mr-2" size={18} />
//                 Save Details
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }