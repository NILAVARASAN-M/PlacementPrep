import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ThumbsUp, ThumbsDown, Clock, Award, Calendar, User, ArrowLeft, ArrowRight, Heart } from 'lucide-react';

const BlogDetail = () => {
  // Sample blog data - you would fetch this from your database
  const blog = {
    id: 1,
    title: "Understanding JavaScript Promises",
    shortDescription: "Learn how to handle asynchronous operations in JavaScript using Promises and async/await syntax.",
    tags: ["JavaScript", "Frontend", "Web Development"],
    readTime: "5 min",
    level: "Beginner",
    postedOn: "March 29, 2025",
    postedBy: "Jane Smith",
    likes: 128,
    dislikes: 7,
    content: `
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

    `  };

  // Recommended blogs data
  const recommendedBlogs = [
    {
      id: 2,
      title: "Mastering Array Methods in JavaScript",
      shortDescription: "A deep dive into map, filter, reduce and other powerful array methods",
      tags: ["JavaScript", "Arrays", "Functional Programming"],
      readTime: "7 min"
    },
    {
      id: 3,
      title: "React Hooks Explained",
      shortDescription: "Everything you need to know about useState, useEffect and more",
      tags: ["React", "Hooks", "Frontend"],
      readTime: "8 min"
    }
  ];

  // State for likes/dislikes
  const [likes, setLikes] = useState(blog.likes);
  const [dislikes, setDislikes] = useState(blog.dislikes);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

  // Handle like/dislike functionality
  const handleLike = () => {
    if (userLiked) {
      setLikes(likes - 1);
      setUserLiked(false);
    } else {
      setLikes(likes + 1);
      setUserLiked(true);
      if (userDisliked) {
        setDislikes(dislikes - 1);
        setUserDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (userDisliked) {
      setDislikes(dislikes - 1);
      setUserDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setUserDisliked(true);
      if (userLiked) {
        setLikes(likes - 1);
        setUserLiked(false);
      }
    }
  };

  return (
<div className="max-w-7xl mx-auto px-4 py-8">
{/* Main blog header - CARD 1 */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-xl p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-3/4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{blog.title}</h1>
            <p className="text-indigo-100 text-lg mb-6">{blog.shortDescription}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <span key={tag} className="bg-indigo-800 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-6 text-indigo-100">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{blog.readTime} read</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} />
                <span>{blog.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Posted on {blog.postedOn}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>By {blog.postedBy}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 md:mt-0 flex md:flex-col justify-start gap-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <ThumbsUp size={20} className="text-green-300" />
              <span className="text-white font-bold">{likes}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <ThumbsDown size={20} className="text-red-300" />
              <span className="text-white font-bold">{dislikes}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog content and recommendations - CARD 2 */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="lg:w-3/4 bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none prose-headings:text-indigo-700 prose-a:text-purple-600">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
          
          {/* Like/dislike buttons */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${userLiked ? 'bg-green-100 text-green-600' : 'bg-gray-100 hover:bg-green-50'} transition-colors`}
                >
                  <ThumbsUp size={20} />
                  <span>Like</span>
                </button>
                <button 
                  onClick={handleDislike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${userDisliked ? 'bg-red-100 text-red-600' : 'bg-gray-100 hover:bg-red-50'} transition-colors`}
                >
                  <ThumbsDown size={20} />
                  <span>Dislike</span>
                </button>
              </div>
              
              {/* Navigation buttons */}
              <div className="flex items-center gap-3">
                <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 flex items-center gap-2 px-4 py-2 rounded-full transition-colors">
                  <ArrowLeft size={18} />
                  <span>Previous</span>
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2 px-4 py-2 rounded-full transition-colors">
                  <span>Next</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommended blogs */}
        <div className="lg:w-1/4">
          <div className="bg-gradient-to-b from-indigo-50 to-purple-50 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
              <Heart size={20} className="text-purple-500" />
              Recommended Blogs
            </h2>
            
            <div className="space-y-6">
              {recommendedBlogs.map((rec) => (
                <div key={rec.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-indigo-700 mb-2">{rec.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{rec.shortDescription}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {rec.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {rec.tags.length > 2 && <span className="text-purple-700 text-xs">+{rec.tags.length - 2}</span>}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {rec.readTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
              View All Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;