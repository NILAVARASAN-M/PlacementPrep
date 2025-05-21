// import React, { useState, useRef } from 'react';
// import { FaUser, FaUsers, FaGraduationCap, FaGlobe, FaBriefcase, FaArrowLeft, FaArrowRight, FaUpload, FaTrash } from 'react-icons/fa';
// import axios from 'axios';

// const UserDetailsForm = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const fileInputRef = useRef();

//   // Form data state
//   const [formData, setFormData] = useState({
//     // Personal Details
//     fullName: '',
//     dateOfBirth: '',
//     gender: '',
//     phoneNumber: '',
//     countryCode: '+1',
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
//     spousePhoneNumber: '',

//     // Education Details
//     userType: 'collegeStudent',
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
//     personalPortfolio: '',

//     // Job Preferences
//     interestedDomains: [],
//     preferredLocations: '',
//     openToInternships: 'Yes',
//     expectedSalary: '',
//   });

//   // Domain tags
//   const domainTags = [
//     { id: 'dsa', name: 'DSA' },
//     { id: 'frontend', name: 'Frontend Development' },
//     { id: 'backend', name: 'Backend Development' },
//     { id: 'fullstack', name: 'Full Stack Development' },
//     { id: 'ai', name: 'AI/ML' },
//     { id: 'datascience', name: 'Data Science' },
//     { id: 'devops', name: 'DevOps' },
//     { id: 'cloud', name: 'Cloud Computing' },
//     { id: 'cybersecurity', name: 'Cybersecurity' },
//     { id: 'mobile', name: 'Mobile Development' },
//     { id: 'blockchain', name: 'Blockchain' },
//     { id: 'iot', name: 'IoT' },
//   ];

//   // Handler for input changes
//   const handleInputChange = (event) => {
//     const { name, value, type, checked } = event.target;
    
//     if (name.includes('.')) {
//       // Handle nested objects (like address.country)
//       const [parent, child] = name.split('.');
//       setFormData({
//         ...formData,
//         [parent]: {
//           ...formData[parent],
//           [child]: value
//         }
//       });
//     } else if (name === 'interestedDomains') {
//       // Handle domains as a special case
//       const currentDomains = [...formData.interestedDomains];
//       if (checked) {
//         currentDomains.push(value);
//       } else {
//         const index = currentDomains.indexOf(value);
//         if (index > -1) {
//           currentDomains.splice(index, 1);
//         }
//       }
//       setFormData({ ...formData, interestedDomains: currentDomains });
//     } else {
//       // Handle regular inputs
//       setFormData({ ...formData, [name]: value });
//     }
    
//     // Clear error for this field if it exists
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length === 0) return;

//     const newImages = [...images];
//     const newPreviews = [...imagePreview];

//     files.forEach(file => {
//       if (file.type.startsWith('image/')) {
//         newImages.push(file);
        
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           newPreviews.push(event.target.result);
//           setImagePreview([...newPreviews]);
//         };
//         reader.readAsDataURL(file);
//       }
//     });

//     setImages(newImages);
//     // Reset file input
//     fileInputRef.current.value = '';
//   };

//   // Remove image
//   const removeImage = (index) => {
//     const newImages = [...images];
//     const newPreviews = [...imagePreview];
    
//     newImages.splice(index, 1);
//     newPreviews.splice(index, 1);
    
//     setImages(newImages);
//     setImagePreview(newPreviews);
//   };

//   // Validate current slide
//   const validateSlide = (slideIndex) => {
//     const newErrors = {};
    
//     if (slideIndex === 0) {
//       // Validate Personal Details
//       if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
//       if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
//       if (!formData.gender) newErrors.gender = 'Gender is required';
//       if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
//       if (!formData.email) {
//         newErrors.email = 'Email is required';
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newErrors.email = 'Email is invalid';
//       }
//       if (!formData.address.country) newErrors['address.country'] = 'Country is required';
//       if (!formData.address.city) newErrors['address.city'] = 'City is required';
//       if (!formData.nationality) newErrors.nationality = 'Nationality is required';
//     } 
//     else if (slideIndex === 1) {
//       // Validate Education and Social Details
//       if (formData.userType === 'collegeStudent') {
//         if (!formData.collegeName.trim()) newErrors.collegeName = 'College Name is required';
//         if (!formData.degree.trim()) newErrors.degree = 'Degree is required';
//         if (!formData.department.trim()) newErrors.department = 'Department is required';
//         if (!formData.rollNumber.trim()) newErrors.rollNumber = 'Roll Number is required';
//         if (!formData.admissionYear) newErrors.admissionYear = 'Admission Year is required';
//         if (!formData.graduationYear) newErrors.graduationYear = 'Graduation Year is required';
//         if (!formData.cgpa) newErrors.cgpa = 'CGPA is required';
//       }
      
//       if (!formData.githubUrl.trim()) newErrors.githubUrl = 'GitHub URL is required';
      
//       // Image validation
//       if (images.length < 3) {
//         newErrors.images = 'Please upload at least 3 images';
//       }
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle navigation between slides
//   const nextSlide = () => {
//     if (validateSlide(currentSlide)) {
//       setCurrentSlide(currentSlide + 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide - 1);
//     window.scrollTo(0, 0);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateSlide(currentSlide)) {
//       return;
//     }
    
//     // Create form data to send to server
//     const submitData = new FormData();
    
//     // Add form data as JSON
//     submitData.append('userData', JSON.stringify(formData));
    
//     // Add images        
//     images.forEach((image, index) => {
//       submitData.append('images', image);
//     });
    
//     try {
//       // Send data to server
//       const response = await axios.post('http://localhost:5000/api/submit-user-details', submitData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
      
//       if (response.status === 200) {
//         setFormSubmitted(true);
//         // Optional: clear form or redirect
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setErrors({ submission: 'Error submitting form. Please try again.' });
//     }
//   };

//   // Render different slides based on currentSlide
//   const renderSlide = () => {
//     switch (currentSlide) {
//       case 0:
//         return renderPersonalDetails();
//       case 1:
//         return renderEducationSocialDetails();
//       case 2:
//         return renderJobPreferences();
//       default:
//         return null;
//     }
//   };

//   // Slides content
//   const renderPersonalDetails = () => (
//     <div className="slide-content">
//       <div className="section-header">
//         <div className="icon-container">
//           <FaUser className="section-icon" />
//         </div>
//         <h2>Personal Details</h2>
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="fullName">Full Name *</label>
//         <input
//           type="text"
//           id="fullName"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleInputChange}
//           className={errors.fullName ? 'error' : ''}
//         />
//         {errors.fullName && <div className="error-text">{errors.fullName}</div>}
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="dateOfBirth">Date of Birth *</label>
//           <input
//             type="date"
//             id="dateOfBirth"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleInputChange}
//             className={errors.dateOfBirth ? 'error' : ''}
//           />
//           {errors.dateOfBirth && <div className="error-text">{errors.dateOfBirth}</div>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="gender">Gender *</label>
//           <select
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             className={errors.gender ? 'error' : ''}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//             <option value="Prefer not to say">Prefer not to say</option>
//           </select>
//           {errors.gender && <div className="error-text">{errors.gender}</div>}
//         </div>
//       </div>
      
//       <div className="form-row">
//         <div className="form-group phone-group">
//           <label htmlFor="phoneNumber">Phone Number *</label>
//           <div className="phone-input-container">
//             <select
//               id="countryCode"
//               name="countryCode"
//               value={formData.countryCode}
//               onChange={handleInputChange}
//             >
//               <option value="+1">+1 (US)</option>
//               <option value="+44">+44 (UK)</option>
//               <option value="+91">+91 (IN)</option>
//               <option value="+61">+61 (AU)</option>
//               <option value="+81">+81 (JP)</option>
//               <option value="+86">+86 (CN)</option>
//               {/* Add more country codes as needed */}
//             </select>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               className={errors.phoneNumber ? 'error' : ''}
//             />
//           </div>
//           {errors.phoneNumber && <div className="error-text">{errors.phoneNumber}</div>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="email">Email ID *</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className={errors.email ? 'error' : ''}
//           />
//           {errors.email && <div className="error-text">{errors.email}</div>}
//         </div>
//       </div>
      
//       <div className="section-header address-header">
//         <h3>Address</h3>
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="address.country">Country *</label>
//           <input
//             type="text"
//             id="address.country"
//             name="address.country"
//             value={formData.address.country}
//             onChange={handleInputChange}
//             className={errors['address.country'] ? 'error' : ''}
//           />
//           {errors['address.country'] && <div className="error-text">{errors['address.country']}</div>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="address.state">State</label>
//           <input
//             type="text"
//             id="address.state"
//             name="address.state"
//             value={formData.address.state}
//             onChange={handleInputChange}
//           />
//         </div>
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="address.city">City *</label>
//           <input
//             type="text"
//             id="address.city"
//             name="address.city"
//             value={formData.address.city}
//             onChange={handleInputChange}
//             className={errors['address.city'] ? 'error' : ''}
//           />
//           {errors['address.city'] && <div className="error-text">{errors['address.city']}</div>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="address.pincode">Pincode</label>
//           <input
//             type="text"
//             id="address.pincode"
//             name="address.pincode"
//             value={formData.address.pincode}
//             onChange={handleInputChange}
//           />
//         </div>
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="address.street">Street Address</label>
//         <input
//           type="text"
//           id="address.street"
//           name="address.street"
//           value={formData.address.street}
//           onChange={handleInputChange}
//         />
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="nationality">Nationality *</label>
//           <input
//             type="text"
//             id="nationality"
//             name="nationality"
//             value={formData.nationality}
//             onChange={handleInputChange}
//             className={errors.nationality ? 'error' : ''}
//           />
//           {errors.nationality && <div className="error-text">{errors.nationality}</div>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="disability">Disability</label>
//           <select
//             id="disability"
//             name="disability"
//             value={formData.disability}
//             onChange={handleInputChange}
//           >
//             <option value="No">No</option>
//             <option value="Yes">Yes</option>
//           </select>
//         </div>
//       </div>
      
//       {formData.disability === 'Yes' && (
//         <div className="form-group">
//           <label htmlFor="disabilityDetails">Disability Details</label>
//           <textarea
//             id="disabilityDetails"
//             name="disabilityDetails"
//             value={formData.disabilityDetails}
//             onChange={handleInputChange}
//             rows="3"
//           />
//         </div>
//       )}
      
//       <div className="section-header">
//         <div className="icon-container">
//           <FaUsers className="section-icon" />
//         </div>
//         <h2>Family Details</h2>
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="parentType">Parent Type</label>
//           <select
//             id="parentType"
//             name="parentType"
//             value={formData.parentType}
//             onChange={handleInputChange}
//           >
//             <option value="Father">Father</option>
//             <option value="Mother">Mother</option>
//             <option value="Guardian">Guardian</option>
//           </select>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="parentName">Parent's Name</label>
//           <input
//             type="text"
//             id="parentName"
//             name="parentName"
//             value={formData.parentName}
//             onChange={handleInputChange}
//           />
//         </div>
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="numberOfParents">Number of Parents</label>
//           <select
//             id="numberOfParents"
//             name="numberOfParents"
//             value={formData.numberOfParents}
//             onChange={handleInputChange}
//           >
//             <option value="2">2</option>
//             <option value="1">1</option>
//             <option value="0">0</option>
//           </select>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="maritalStatus">Marital Status</label>
//           <select
//             id="maritalStatus"
//             name="maritalStatus"
//             value={formData.maritalStatus}
//             onChange={handleInputChange}
//           >
//             <option value="Single">Single</option>
//             <option value="Married">Married</option>
//             <option value="Divorced">Divorced</option>
//             <option value="Widowed">Widowed</option>
//           </select>
//         </div>
//       </div>
      
//       {formData.maritalStatus === 'Married' && (
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="spouseName">Spouse Name</label>
//             <input
//               type="text"
//               id="spouseName"
//               name="spouseName"
//               value={formData.spouseName}
//               onChange={handleInputChange}
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="spousePhoneNumber">Spouse Phone Number</label>
//             <input
//               type="tel"
//               id="spousePhoneNumber"
//               name="spousePhoneNumber"
//               value={formData.spousePhoneNumber}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const renderEducationSocialDetails = () => (
//     <div className="slide-content">
//       <div className="section-header">
//         <div className="icon-container">
//           <FaGraduationCap className="section-icon" />
//         </div>
//         <h2>Education Details</h2>
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="userType">I am using this website as:</label>
//         <select
//           id="userType"
//           name="userType"
//           value={formData.userType}
//           onChange={handleInputChange}
//         >
//           <option value="collegeStudent">College Student</option>
//           <option value="schoolStudent">School Student</option>
//           <option value="employee">Employee</option>
//         </select>
//       </div>
      
//       {formData.userType === 'collegeStudent' && (
//         <>
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="collegeName">College Name *</label>
//               <input
//                 type="text"
//                 id="collegeName"
//                 name="collegeName"
//                 value={formData.collegeName}
//                 onChange={handleInputChange}
//                 className={errors.collegeName ? 'error' : ''}
//               />
//               {errors.collegeName && <div className="error-text">{errors.collegeName}</div>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="degree">Degree *</label>
//               <input
//                 type="text"
//                 id="degree"
//                 name="degree"
//                 placeholder="B.Tech, BSc, etc."
//                 value={formData.degree}
//                 onChange={handleInputChange}
//                 className={errors.degree ? 'error' : ''}
//               />
//               {errors.degree && <div className="error-text">{errors.degree}</div>}
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="department">Department / Branch *</label>
//               <input
//                 type="text"
//                 id="department"
//                 name="department"
//                 value={formData.department}
//                 onChange={handleInputChange}
//                 className={errors.department ? 'error' : ''}
//               />
//               {errors.department && <div className="error-text">{errors.department}</div>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="rollNumber">Roll Number *</label>
//               <input
//                 type="text"
//                 id="rollNumber"
//                 name="rollNumber"
//                 value={formData.rollNumber}
//                 onChange={handleInputChange}
//                 className={errors.rollNumber ? 'error' : ''}
//               />
//               {errors.rollNumber && <div className="error-text">{errors.rollNumber}</div>}
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="admissionYear">Year of Admission *</label>
//               <input
//                 type="number"
//                 id="admissionYear"
//                 name="admissionYear"
//                 min="2000"
//                 max="2030"
//                 value={formData.admissionYear}
//                 onChange={handleInputChange}
//                 className={errors.admissionYear ? 'error' : ''}
//               />
//               {errors.admissionYear && <div className="error-text">{errors.admissionYear}</div>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="graduationYear">Expected Graduation Year *</label>
//               <input
//                 type="number"
//                 id="graduationYear"
//                 name="graduationYear"
//                 min="2000"
//                 max="2035"
//                 value={formData.graduationYear}
//                 onChange={handleInputChange}
//                 className={errors.graduationYear ? 'error' : ''}
//               />
//               {errors.graduationYear && <div className="error-text">{errors.graduationYear}</div>}
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="cgpa">Current CGPA *</label>
//               <input
//                 type="number"
//                 id="cgpa"
//                 name="cgpa"
//                 step="0.01"
//                 min="0"
//                 max="10"
//                 value={formData.cgpa}
//                 onChange={handleInputChange}
//                 className={errors.cgpa ? 'error' : ''}
//               />
//               {errors.cgpa && <div className="error-text">{errors.cgpa}</div>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="backlogs">Backlogs</label>
//               <select
//                 id="backlogs"
//                 name="backlogs"
//                 value={formData.backlogs}
//                 onChange={handleInputChange}
//               >
//                 <option value="No">No</option>
//                 <option value="Yes">Yes</option>
//               </select>
//             </div>
//           </div>
//         </>
//       )}
      
//       {/* Similar sections for schoolStudent and employee can be added here */}
      
//       <div className="section-header">
//         <div className="icon-container">
//           <FaGlobe className="section-icon" />
//         </div>
//         <h2>Social Profiles</h2>
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="linkedinUrl">LinkedIn URL</label>
//           <input
//             type="url"
//             id="linkedinUrl"
//             name="linkedinUrl"
//             placeholder="https://linkedin.com/in/username"
//             value={formData.linkedinUrl}
//             onChange={handleInputChange}
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="githubUrl">GitHub URL *</label>
//           <input
//             type="url"
//             id="githubUrl"
//             name="githubUrl"
//             placeholder="https://github.com/username"
//             value={formData.githubUrl}
//             onChange={handleInputChange}
//             className={errors.githubUrl ? 'error' : ''}
//           />
//           {errors.githubUrl && <div className="error-text">{errors.githubUrl}</div>}
//         </div>
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="codingProfile">LeetCode / Codeforces / HackerRank (Optional)</label>
//           <input
//             type="url"
//             id="codingProfile"
//             name="codingProfile"
//             placeholder="https://leetcode.com/username"
//             value={formData.codingProfile}
//             onChange={handleInputChange}
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="personalPortfolio">Personal Portfolio (if any)</label>
//           <input
//             type="url"
//             id="personalPortfolio"
//             name="personalPortfolio"
//             placeholder="https://yourportfolio.com"
//             value={formData.personalPortfolio}
//             onChange={handleInputChange}
//           />
//         </div>
//       </div>
      
//       <div className="form-group image-upload-section">
//         <label>Passport Size Photos (Minimum 3) *</label>
//         <div className="upload-container">
//           <div className="upload-button" onClick={() => fileInputRef.current.click()}>
//             <FaUpload /> Upload Images
//           </div>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handleImageUpload}
//             ref={fileInputRef}
//             style={{ display: 'none' }}
//           />
//         </div>
//         {errors.images && <div className="error-text">{errors.images}</div>}
        
//         <div className="image-preview-container">
//           {imagePreview.map((src, index) => (
//             <div className="image-preview" key={index}>
//               <img src={src} alt={`Preview ${index + 1}`} />
//               <button type="button" className="remove-image" onClick={() => removeImage(index)}>
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderJobPreferences = () => (
//     <div className="slide-content">
//       <div className="section-header">
//         <div className="icon-container">
//           <FaBriefcase className="section-icon" />
//         </div>
//         <h2>Job Preferences</h2>
//       </div>
      
//       <div className="form-group domain-selection">
//         <label>Interested Domains</label>
//         <div className="tag-container">
//           {domainTags.map(tag => (
//             <div className="tag-item" key={tag.id}>
//               <input
//                 type="checkbox"
//                 id={`domain-${tag.id}`}
//                 name="interestedDomains"
//                 value={tag.id}
//                 checked={formData.interestedDomains.includes(tag.id)}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor={`domain-${tag.id}`}>#{tag.name}</label>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="preferredLocations">Preferred Work Locations</label>
//           <input
//             type="text"
//             id="preferredLocations"
//             name="preferredLocations"
//             placeholder="e.g., Remote, Bangalore, New York"
//             value={formData.preferredLocations}
//             onChange={handleInputChange}
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="openToInternships">Open to Internships</label>
//           <select
//             id="openToInternships"
//             name="openToInternships"
//             value={formData.openToInternships}
//             onChange={handleInputChange}
//           >
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </div>
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="expectedSalary">Expected Salary (Optional)</label>
//         <input
//           type="text"
//           id="expectedSalary"
//           name="expectedSalary"
//           placeholder="e.g., $50,000 - $70,000 per year"
//           value={formData.expectedSalary}
//           onChange={handleInputChange}
//         />
//       </div>
      
//       {errors.submission && <div className="error-text submission-error">{errors.submission}</div>}
//     </div>
//   );

//   // Show success message if form submitted successfully
//   if (formSubmitted) {
//     return (
//       <div className="user-details-form success-container">
//         <div className="success-message">
//           <h2>Profile Created Successfully!</h2>
//           <p>Your details have been saved. You will be redirected to the dashboard shortly.</p>
//           {/* You could add a loading spinner or redirect logic here */}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="user-details-form">
//       <div className="form-container">
//         <h1 className="form-title">Complete Your Profile</h1>
        
//         <div className="progress-bar">
//           <div className="progress-steps">
//             {[0, 1, 2].map((step) => (
//               <div 
//                 key={step} 
//                 className={`progress-step ${currentSlide === step ? 'active' : ''} ${currentSlide > step ? 'completed' : ''}`}
//               >
//                 {step + 1}
//               </div>
//             ))}
//           </div>
//           <div className="progress-line">
//             <div 
//               className="progress-line-fill" 
//               style={{ width: `${(currentSlide / 2) * 100}%` }}
//             ></div>
//           </div>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           {renderSlide()}
          
//           <div className="form-navigation">
//             {currentSlide > 0 && (
//               <button 
//                 type="button" 
//                 className="nav-button prev-button" 
//                 onClick={prevSlide}
//               >
//                 <FaArrowLeft /> Previous
//               </button>
//             )}
            
//             {currentSlide < 2 ? (
//               <button 
//                 type="button" 
//                 className="nav-button next-button" 
//                 onClick={nextSlide}
//               >
//                 Next <FaArrowRight />
//               </button>
//             ) : (
//               <button 
//                 type="submit" 
//                 className="nav-button submit-button"
//               >
//                 Submit Profile
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
      
//       <style jsx>{`
//         .user-details-form {
//           font-family: 'Poppins', sans-serif;
//           max-width: 900px;
//           margin: 40px auto;
//           padding: 20px;
//         }
        
//         .form-container {
//           background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//           border-radius: 20px;
//           padding: 30px;
//           box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .form-container::before {
//           content: '';
//           position: absolute;
//           top: -50px;
//           left: -50px;
//           width: 200px;
//           height: 200px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
//           opacity: 0.1;
//           z-index: 0;
//         }
        
//         .form-container::after {
//           content: '';
//           position: absolute;
//           bottom: -50px;
//           right: -50px;
//           width: 200px;
//           height: 200px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
//           opacity: 0.1;
//           z-index: 0;
//         }
        
//         .form-title {
//           text-align: center;
//           color: #3a3f51;
//           font-size: 32px;
//           margin-bottom: 30px;
//           font-weight: 700;
//           text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
//           position: relative;
//           z-index: 1;
//         }
        
//         .progress-bar {
//           margin-bottom: 40px;
//           position: relative;
//           z-index: 1;
//         }
        
//         .progress-steps {
//           display: flex;
//           justify-content: space-between;
//           position: relative;
//           margin-bottom: 10px;
//         }
        
//         .progress-step {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background-color: #ffffff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: bold;
//           color: #8d9aaf;
//           border: 2px solid #e6e9ef;
//           box-shadow: 0 3px 6px rgba(0,0,0,0.1);
//           transition: all 0.3s ease;
//           z-index: 2;
//         }
        
//         .progress-step.active {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           border-color: transparent;
//           transform: scale(1.1);
//           box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
//         }
        
//         .progress-step.completed {
//           background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
//           color: white;
//           border-color: transparent;
//         }
        
//         .progress-line {
//           position: absolute;
//           top: 20px;
//           left: 40px;
//           right: 40px;
//           height: 4px;
//           background-color: #e6e9ef;
//           border-radius: 10px;
//         }
        
//         .progress-line-fill {
//           height: 100%;
//           background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
//           border-radius: 10px;
//           transition: width 0.3s ease;
//         }
        
//         .slide-content {
//           position: relative;
//           z-index: 1;
//         }
        
//         .section-header {
//           display: flex;
//           align-items: center;
//           margin-bottom: 25px;
//           padding-bottom: 10px;
//           border-bottom: 2px solid rgba(102, 126, 234, 0.2);
//           position: relative;
//         }
        
//         .section-header h2 {
//           margin: 0;
//           font-size: 24px;
//           color: #3a3f51;
//           font-weight: 600;
//         }
        
//         .address-header {
//           margin-top: 30px;
//           margin-bottom: 15px;
//         }
        
//         .address-header h3 {
//           font-size: 20px;
//           color: #3a3f51;
//           margin: 0;
//         }
        
//         .icon-container {
//           width: 40px;
//           height: 40px;
//           border-radius: 10px;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-right: 15px;
//           box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
//         }
        
//         .section-icon {
//           color: white;
//           font-size: 18px;
//         }
        
//         .form-group {
//           margin-bottom: 20px;
//           position: relative;
//         }
        
//         label {
//           display: block;
//           margin-bottom: 8px;
//           font-weight: 500;
//           color: #3a3f51;
//           font-size: 14px;
//         }
        
//         input, select, textarea {
//           width: 100%;
//           padding: 12px 15px;
//           border: 2px solid #e6e9ef;
//           border-radius: 10px;
//           font-size: 14px;
//           transition: all 0.3s ease;
//           background-color: white;
//           color: #3a3f51;
//           box-shadow: 0 2px 5px rgba(0,0,0,0.05);
//         }
        
//         input:focus, select:focus, textarea:focus {
//           outline: none;
//           border-color: #667eea;
//           box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
//         }
        
//         input.error, select.error, textarea.error {
//           border-color: #ff6b6b;
//           background-color: rgba(255, 107, 107, 0.05);
//         }
        
//         .error-text {
//           color: #ff6b6b;
//           font-size: 12px;
//           margin-top: 5px;
//           display: block;
//         }
        
//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//         }
        
//         .phone-group {
//           position: relative;
//         }
        
//         .phone-input-container {
//           display: flex;
//         }
        
//         .phone-input-container select {
//           width: 30%;
//           border-top-right-radius: 0;
//           border-bottom-right-radius: 0;
//           border-right: none;
//         }
        
//         .phone-input-container input {
//           width: 70%;
//           border-top-left-radius: 0;
//           border-bottom-left-radius: 0;
//         }
        
//         .tag-container {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 10px;
//           margin-top: 10px;
//         }
        
//         .tag-item {
//           position: relative;
//         }
        
//         .tag-item input[type="checkbox"] {
//           position: absolute;
//           opacity: 0;
//           width: 0;
//           height: 0;
//         }
        
//         .tag-item label {
//           display: inline-block;
//           padding: 8px 15px;
//           border-radius: 20px;
//           background-color: #e6e9ef;
//           color: #3a3f51;
//           font-size: 14px;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s ease;
//         }
        
//         .tag-item input[type="checkbox"]:checked + label {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           box-shadow: 0 3px 8px rgba(102, 126, 234, 0.3);
//         }
        
//         .image-upload-section {
//           margin-top: 30px;
//         }
        
//         .upload-container {
//           margin-bottom: 15px;
//         }
        
//         .upload-button {
//           display: inline-flex;
//           align-items: center;
//           padding: 10px 20px;
//           background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
//           color: white;
//           border-radius: 8px;
//           cursor: pointer;
//           font-weight: 500;
//           box-shadow: 0 4px 10px rgba(94, 231, 223, 0.3);
//           transition: all 0.2s ease;
//         }
        
//         .upload-button svg {
//           margin-right: 8px;
//         }
        
//         .upload-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 15px rgba(94, 231, 223, 0.4);
//         }
        
//         .image-preview-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
//           gap: 15px;
//           margin-top: 20px;
//         }
        
//         .image-preview {
//           position: relative;
//           border-radius: 8px;
//           overflow: hidden;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//           height: 150px;
//         }
        
//         .image-preview img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
        
//         .remove-image {
//           position: absolute;
//           top: 5px;
//           right: 5px;
//           background-color: rgba(255,255,255,0.8);
//           border: none;
//           width: 25px;
//           height: 25px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           color: #ff6b6b;
//           font-size: 12px;
//           transition: all 0.2s ease;
//         }
        
//         .remove-image:hover {
//           background-color: #ff6b6b;
//           color: white;
//         }
        
//         .form-navigation {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 40px;
//           position: relative;
//           z-index: 1;
//         }
        
//         .nav-button {
//           display: flex;
//           align-items: center;
//           padding: 12px 25px;
//           border: none;
//           border-radius: 30px;
//           font-weight: 600;
//           font-size: 16px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
        
//         .prev-button {
//           background-color: white;
//           color: #3a3f51;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//         }
        
//         .prev-button svg {
//           margin-right: 8px;
//         }
        
//         .next-button, .submit-button {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
//         }
        
//         .next-button svg {
//           margin-left: 8px;
//         }
        
//         .nav-button:hover {
//           transform: translateY(-3px);
//         }
        
//         .prev-button:hover {
//           box-shadow: 0 6px 15px rgba(0,0,0,0.15);
//         }
        
//         .next-button:hover, .submit-button:hover {
//           box-shadow: 0 6px 15px rgba(102, 126, 234, 0.5);
//         }
        
//         .success-container {
//           height: 400px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//         }
        
//         .success-message {
//           background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//           padding: 40px;
//           border-radius: 20px;
//           box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
//           max-width: 500px;
//         }
        
//         .success-message h2 {
//           color: #3a3f51;
//           margin-bottom: 20px;
//         }
        
//         @media (max-width: 768px) {
//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 15px;
//           }
          
//           .progress-step {
//             width: 35px;
//             height: 35px;
//             font-size: 14px;
//           }
          
//           .form-container {
//             padding: 20px;
//           }
          
//           .form-title {
//             font-size: 24px;
//           }
          
//           .section-header h2 {
//             font-size: 20px;
//           }
          
//           .icon-container {
//             width: 35px;
//             height: 35px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default UserDetailsForm;