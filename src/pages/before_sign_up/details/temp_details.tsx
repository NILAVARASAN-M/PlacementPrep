import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const UserDetailsForm = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    countryCode: "+1",
    email: "",
    address: "",
    nationality: "",
    
    // Family Details
    parentName: "",
    parentType: "father", // father or mother
    parentPhoneNumber: "",
    
    // Education Details
    educationType: "college", // college or school or employee
    collegeName: "",
    degree: "",
    department: "",
    rollNumber: "",
    admissionYear: "",
    graduationYear: "",
    cgpa: "",
    hasBacklogs: "no",
    
    // Social Profiles
    linkedinUrl: "",
    githubUrl: "",
    codingProfile: "",
    personalPortfolio: "",
    
    // Job Preferences
    interestedDomains: [],
    preferredLocations: "",
    openToInternships: "yes",
    expectedSalary: "",
  });
  
  // Refs for scrolling to errors
  const inputRefs = {
    fullName: useRef(),
    dateOfBirth: useRef(),
    gender: useRef(),
    phoneNumber: useRef(),
    email: useRef(),
    address: useRef(),
    nationality: useRef(),
    parentName: useRef(),
    parentPhoneNumber: useRef(),
    collegeName: useRef(),
    degree: useRef(),
    department: useRef(),
    rollNumber: useRef(),
    admissionYear: useRef(),
    graduationYear: useRef(),
    cgpa: useRef(),
  };
  
  // Pre-defined domains
  const availableDomains = [
    "Frontend", "Backend", "Full Stack", "UI/UX", "DevOps", 
    "Data Science", "Machine Learning", "Cloud Computing", 
    "Mobile Development", "DSA", "Cybersecurity",
    "Blockchain", "IoT", "Game Development"
  ];
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  // Handle checkbox changes for domains
  const handleDomainChange = (domain) => {
    setFormData(prev => {
      const currentDomains = [...prev.interestedDomains];
      
      if (currentDomains.includes(domain)) {
        return {
          ...prev,
          interestedDomains: currentDomains.filter(d => d !== domain)
        };
      } else {
        return {
          ...prev,
          interestedDomains: [...currentDomains, domain]
        };
      }
    });
  };
  
  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Validate file count
    if (files.length + images.length > 5) {
      alert("You can upload maximum 5 images");
      return;
    }
    
    setImages(prev => [...prev, ...files]);
    
    // Create image previews
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);
  };
  
  // Remove image
  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    
    // Revoke object URL to prevent memory leaks
    URL.revokeObjectURL(imagePreviews[index]);
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };
  
  // Validate form for current slide
  const validateSlide = (slideIndex) => {
    const errors = {};
    
    if (slideIndex === 0) {
      // Validate Personal Details
      if (!formData.fullName.trim()) errors.fullName = "Full name is required";
      if (!formData.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
      if (!formData.gender) errors.gender = "Gender is required";
      if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
      if (!formData.email) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
      if (!formData.address.trim()) errors.address = "Address is required";
      if (!formData.nationality.trim()) errors.nationality = "Nationality is required";
      
      // Validate Family Details
      if (!formData.parentName.trim()) errors.parentName = "Parent name is required";
      if (!formData.parentPhoneNumber) errors.parentPhoneNumber = "Parent phone number is required";
    }
    
    if (slideIndex === 1) {
      // Validate Education Details
      if (formData.educationType === "college") {
        if (!formData.collegeName.trim()) errors.collegeName = "College name is required";
        if (!formData.degree.trim()) errors.degree = "Degree is required";
        if (!formData.department.trim()) errors.department = "Department is required";
        if (!formData.rollNumber.trim()) errors.rollNumber = "Roll number is required";
        if (!formData.admissionYear) errors.admissionYear = "Admission year is required";
        if (!formData.graduationYear) errors.graduationYear = "Graduation year is required";
        if (!formData.cgpa) errors.cgpa = "CGPA is required";
      }
    }
    
    if (slideIndex === 2) {
      // Validate Images
      if (images.length < 3) {
        errors.images = "Please upload at least 3 images";
      }
    }
    
    return errors;
  };
  
  // Navigate to next slide
  const nextSlide = () => {
    const errors = validateSlide(currentSlide);
    
    if (Object.keys(errors).length === 0) {
      setCurrentSlide(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setFormErrors(errors);
      
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (inputRefs[firstErrorField] && inputRefs[firstErrorField].current) {
        inputRefs[firstErrorField].current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }
  };
  
  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateSlide(2);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // First, upload images and get their IDs
      const imageIds = [];
      
      for (const image of images) {
        const imageFormData = new FormData();
        imageFormData.append("image", image);
        imageFormData.append("name", `${formData.fullName}_photo`);
        
        const response = await axios.post("http://localhost:5000/upload", imageFormData);
        imageIds.push(response.data.id);
      }
      
      // Then, submit form data with image IDs
      const userFormData = {
        ...formData,
        imageIds,
        createdAt: new Date()
      };
      
      await axios.post("http://localhost:5000/submit-user-details", userFormData);
      
      setFormSubmitted(true);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Clean up image previews on unmount
  useEffect(() => {
    return () => {
      imagePreviews.forEach(url => URL.revokeObjectURL(url));
    };
  }, []);
  
  // Success message after form submission
  if (formSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg mb-6">
            Your details have been successfully submitted. We'll get back to you soon!
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-100 p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-gray-800">User Details Form</h2>
              <span className="text-sm font-medium text-gray-500">
                Step {currentSlide + 1} of 3
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {/* Slide 1: Personal & Family Details */}
            {currentSlide === 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Personal Details Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">👤</span>
                    Personal Details
                  </h3>
                  <p className="text-gray-600 mb-4">Basic identity and contact information.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="fullName">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        ref={inputRefs.fullName}
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.fullName ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="dateOfBirth">
                        Date of Birth*
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        ref={inputRefs.dateOfBirth}
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.dateOfBirth ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                      />
                      {formErrors.dateOfBirth && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.dateOfBirth}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Gender*
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>Male</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>Female</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === "other"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>Other</span>
                        </label>
                      </div>
                      {formErrors.gender && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="phoneNumber">
                        Phone Number*
                      </label>
                      <div className="flex">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                        >
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+91">+91 (IN)</option>
                          <option value="+61">+61 (AU)</option>
                          <option value="+86">+86 (CN)</option>
                          <option value="+49">+49 (DE)</option>
                        </select>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          ref={inputRefs.phoneNumber}
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-r-lg border-y border-r ${
                            formErrors.phoneNumber ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="Phone number"
                        />
                      </div>
                      {formErrors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                        Email ID*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        ref={inputRefs.email}
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.email ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                        placeholder="your@email.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="address">
                        Address*
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        ref={inputRefs.address}
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.address ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                        placeholder="Enter your address"
                      />
                      {formErrors.address && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="nationality">
                        Nationality*
                      </label>
                      <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        ref={inputRefs.nationality}
                        value={formData.nationality}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.nationality ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                        placeholder="Your nationality"
                      />
                      {formErrors.nationality && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.nationality}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Family Details Section */}
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">👪</span>
                    Family Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="parentName">
                        Parent's Name*
                      </label>
                      <div className="flex flex-col space-y-2">
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          ref={inputRefs.parentName}
                          value={formData.parentName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            formErrors.parentName ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="Enter parent's name"
                        />
                        <div className="flex space-x-4 mt-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="parentType"
                              value="father"
                              checked={formData.parentType === "father"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span>Father</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="parentType"
                              value="mother"
                              checked={formData.parentType === "mother"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span>Mother</span>
                          </label>
                        </div>
                      </div>
                      {formErrors.parentName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.parentName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="parentPhoneNumber">
                        Parent's Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="parentPhoneNumber"
                        name="parentPhoneNumber"
                        ref={inputRefs.parentPhoneNumber}
                        value={formData.parentPhoneNumber}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.parentPhoneNumber ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                        placeholder="Enter parent's phone number"
                      />
                      {formErrors.parentPhoneNumber && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.parentPhoneNumber}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center"
                  >
                    Next <span className="ml-2">→</span>
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Slide 2: Education & Social Details */}
            {currentSlide === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* User Type Selection */}
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    I am a...
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.educationType === "college" 
                          ? "border-blue-500 bg-blue-50 shadow-md" 
                          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, educationType: "college" }))}
                    >
                      <div className="flex flex-col items-center text-center">
                        <span className="text-4xl mb-2">🎓</span>
                        <h4 className="font-semibold">College Student</h4>
                      </div>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.educationType === "school" 
                          ? "border-blue-500 bg-blue-50 shadow-md" 
                          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, educationType: "school" }))}
                    >
                      <div className="flex flex-col items-center text-center">
                        <span className="text-4xl mb-2">📚</span>
                        <h4 className="font-semibold">School Student</h4>
                      </div>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.educationType === "employee" 
                          ? "border-blue-500 bg-blue-50 shadow-md" 
                          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, educationType: "employee" }))}
                    >
                      <div className="flex flex-col items-center text-center">
                        <span className="text-4xl mb-2">💼</span>
                        <h4 className="font-semibold">Employee</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Education Details */}
                {formData.educationType === "college" && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">🎓</span>
                      Education Details
                    </h3>
                    <p className="text-gray-600 mb-4">Undergraduate (Ongoing)</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="collegeName">
                          College Name*
                        </label>
                        <input
                          type="text"
                          id="collegeName"
                          name="collegeName"
                          ref={inputRefs.collegeName}
                          value={formData.collegeName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            formErrors.collegeName ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="Enter college name"
                        />
                        {formErrors.collegeName && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.collegeName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="degree">
                          Degree*
                        </label>
                        <input
                          type="text"
                          id="degree"
                          name="degree"
                          ref={inputRefs.degree}
                          value={formData.degree}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            formErrors.degree ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="B.Tech, BSc, etc."
                        />
                        {formErrors.degree && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.degree}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="department">
                          Department / Branch*
                        </label>
                        <input
                          type="text"
                          id="department"
                          name="department"
                          ref={inputRefs.department}
                          value={formData.department}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            formErrors.department ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="CS, Mechanical, etc."
                        />
                        {formErrors.department && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.department}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="rollNumber">
                          Roll Number*
                        </label>
                        <input
                          type="text"
                          id="rollNumber"
                          name="rollNumber"
                          ref={inputRefs.rollNumber}
                          value={formData.rollNumber}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            formErrors.rollNumber ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="Enter roll number"
                        />
                        {formErrors.rollNumber && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.rollNumber}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="admissionYear">
                          Year of Admission*
                        </label>
                        <input
                          type="number"
                          id="admissionYear"
                          name="admissionYear"
                          ref={inputRefs.admissionYear}
                          value={formData.admissionYear}
                          onChange={handleChange}
                          min="2000"
                          max="2025"
                          className={`w-full px-4 py-2 rounded-lg border ${
                            formErrors.admissionYear ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="YYYY"
                        />
                        {formErrors.admissionYear && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.admissionYear}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="graduationYear">
                          Expected Graduation Year*
                        </label>
                        <input
                          type="number"
                          id="graduationYear"
                          name="graduationYear"
                          ref={inputRefs.graduationYear}
                          value={formData.graduationYear}
                          onChange={handleChange}
                          min="2000"
                          max="2030"
                          className={`w-full px-4 py-2 rounded-lg border ${
                            formErrors.graduationYear ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="YYYY"
                        />
                        {formErrors.graduationYear && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.graduationYear}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="cgpa">
                          Current CGPA*
                        </label>
                        <input
                          type="number"
                          id="cgpa"
                          name="cgpa"
                          ref={inputRefs.cgpa}
                          value={formData.cgpa}
                          onChange={handleChange}
                          step="0.01" 
                          min="0" 
                          max="10"
                          className={`w-full px-4 py-2 rounded-lg border ${
                            formErrors.cgpa ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors`}
                          placeholder="Enter CGPA"
                        />
                        {formErrors.cgpa && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.cgpa}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-1">
                          Backlogs
                        </label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="hasBacklogs"
                              value="yes"
                              checked={formData.hasBacklogs === "yes"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="hasBacklogs"
                              value="no"
                              checked={formData.hasBacklogs === "no"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Social Profiles */}
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">🌐</span>
                    Social Profiles
                  </h3>
                  <p className="text-gray-600 mb-4">Share your online presence.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="linkedinUrl">
                        LinkedIn URL
                      </label>
                      <input
                        type="url"
                        id="linkedinUrl"
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="githubUrl">
                        GitHub URL
                      </label>
                      <input
                        type="url"
                        id="githubUrl"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
                        placeholder="https://github.com/username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="codingProfile">
                        LeetCode / Codeforces / HackerRank
                      </label>
                      <input
                        type="url"
                        id="codingProfile"
                        name="codingProfile"
                        value={formData.codingProfile}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
                        placeholder="https://leetcode.com/username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="personalPortfolio">
                        Personal Portfolio
                      </label>
                      <input
                        type="url"
                        id="personalPortfolio"
                        name="personalPortfolio"
                        value={formData.personalPortfolio}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold shadow-md hover:bg-gray-300 transition-all flex items-center"
                  >
                    <span className="mr-2">←</span> Back
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center"
                  >
                    Next <span className="ml-2">→</span>
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Slide 3: Job Preferences & Image Upload */}
            {currentSlide === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Job Preferences */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">💼</span>
                    Job Preferences
                  </h3>
                  <p className="text-gray-600 mb-4">Tell us about your career interests.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Interested Domains
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {availableDomains.map((domain) => (
                          <div key={domain} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`domain-${domain}`}
                              checked={formData.interestedDomains.includes(domain)}
                              onChange={() => handleDomainChange(domain)}
                              className="mr-2"
                            />
                            <label htmlFor={`domain-${domain}`} className="cursor-pointer">
                              #{domain}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="preferredLocations">
                        Preferred Work Locations
                      </label>
                      <input
                        type="text"
                        id="preferredLocations"
                        name="preferredLocations"
                        value={formData.preferredLocations}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Remote, New York, San Francisco, etc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Open to Internships
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="openToInternships"
                            value="yes"
                            checked={formData.openToInternships === "yes"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="openToInternships"
                            value="no"
                            checked={formData.openToInternships === "no"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="expectedSalary">
                        Expected Salary (optional)
                      </label>
                      <input
                        type="text"
                        id="expectedSalary"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Enter expected salary"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Image Upload */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">📷</span>
                    Upload Profile Photos
                  </h3>
                  <p className="text-gray-600 mb-4">Please upload at least 3 passport-size photos.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="image-upload"
                        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ${
                          formErrors.images ? "border-red-500 bg-red-50" : "border-gray-300"
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <p className="mb-1 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5 images)</p>
                        </div>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    
                    {formErrors.images && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.images}</p>
                    )}
                    
                    {imagePreviews.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Selected Images ({imagePreviews.length}/5):</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                          {imagePreviews.map((preview, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={preview}
                                alt={`preview-${index}`}
                                className="h-24 w-24 object-cover rounded-lg border border-gray-300"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold shadow-md hover:bg-gray-300 transition-all flex items-center"
                  >
                    <span className="mr-2">←</span> Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                    {!isSubmitting && <span className="ml-2">✓</span>}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsForm;