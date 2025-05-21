import { useState, useEffect } from "react"
import { X } from "lucide-react"
// import ReactMarkdown from "react-markdown"
import { Clock } from 'lucide-react';
import BlogSubPage from "../Blogs/Blogs_sub";

interface BlogPanelProps {
  isOpen: boolean
  onClose: () => void
//   problem: {
//     name: string
//     solution: string
//   } | null
}

// export const BlogPanel = ({ isOpen, onClose, problem }: BlogPanelProps) => {

export const BlogPanel = ({ isOpen, onClose}: BlogPanelProps) => {
  const [mounted, setMounted] = useState(false)

  // Handle escape key press to close panel
  useEffect(() => {
    setMounted(true)

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => window.removeEventListener("keydown", handleEscKey)
  }, [isOpen, onClose])

  if (!mounted) return null

  
  return (
     <>
          {/* Overlay */}
          {isOpen && <div className="fixed inset-0 bg-black/20 z-40 transition-opacity" onClick={onClose} />}
    
          {/* Solution Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[600px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
           <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close solution panel"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
              <h2 className="text-xl font-bold text-gray-800"> Welcome To BLOG-Section</h2>
              {/* <BlogsAsCard /> */}
              <BlogSubPage />
          </div>
        </>
  )
}

const BlogsAsCard = () =>{
    const blogData = [
        {
          id: 1,
          title: "Convert an Array to a Linked List",
          description: "Given an array arr[] of size N. The task is to create a linked list from the given array and return the head of the linked list. This tutorial covers multiple approaches including iterative and recursive methods.",
          readingTime: "5 min",
          level: "Intermediate",
          tags: ["Data Structures", "Arrays", "Linked Lists"],
          date: "March 15, 2025",
          author: "Alex Johnson"
        },
        {
          id: 2,
          title: "Convert an Array to a Doubly Linked List",
          description: "Given an array of integers convert it to a doubly linked list. Learn multiple approaches to solve this problem efficiently with time and space complexity analysis and practical examples.",
          readingTime: "8 min",
          level: "Advanced",
          tags: ["Data Structures", "Arrays", "Doubly Linked Lists"],
          date: "March 10, 2025",
          author: "Mia Thompson"
        },
        {
          id: 3,
          title: "Search in a Row and Column-wise Sorted Matrix",
          description: "You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns. The elements are sorted efficiently. Learn optimal search strategies.",
          readingTime: "6 min",
          level: "Intermediate",
          tags: ["Algorithms", "Matrices", "Searching"],
          date: "March 5, 2025",
          author: "David Chen"
        },
        {
          id: 4,
          title: "Binary Search Implementation",
          description: "Learn how to implement binary search algorithm on sorted arrays with examples and time complexity analysis. Includes common pitfalls and optimization techniques for real-world applications.",
          readingTime: "4 min",
          level: "Beginner",
          tags: ["Algorithms", "Searching", "Arrays"],
          date: "February 28, 2025",
          author: "Sophia Williams"
        },
        {
          id: 5,
          title: "Introduction to Graph Algorithms",
          description: "A comprehensive guide to understanding and implementing basic graph algorithms including BFS and DFS. Visualize graph traversals and understand their applications in solving real-world problems.",
          readingTime: "10 min",
          level: "Advanced",
          tags: ["Algorithms", "Graphs", "Data Structures"],
          date: "February 20, 2025",
          author: "James Rodriguez"
        },
        {
          id: 6,
          title: "Dynamic Programming Basics",
          description: "Understanding the fundamentals of dynamic programming with easy to follow examples and implementations. Master the art of breaking down complex problems into overlapping subproblems.",
          readingTime: "12 min",
          level: "Advanced",
          tags: ["Algorithms", "Dynamic Programming"],
          date: "February 15, 2025",
          author: "Emma Davis"
        }
      ];


    const [activeCard, setActiveCard] = useState(null);
    // Handle card click
    const handleCardClick = (id) => {
        setActiveCard(id);
    };
    // Get tag color
  const getTagColor = (index) => {
    const colors = [
      'bg-emerald-50 text-emerald-700',
      'bg-amber-50 text-amber-700',
      'bg-rose-50 text-rose-700'
    ];
    return colors[index % colors.length];
  };
  // Get level color
  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-blue-100 text-blue-700';
      case 'Advanced': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };
    return (
<>
<div className="max-w-7xl px-4 md:px-12 mx-auto space-y-6">
{blogData.map(blog => (
            <div 
            key={blog.id}
            className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${
              activeCard === blog.id 
                ? 'border-4 border-indigo-500 shadow-lg transform scale-[1.02]' 
                : 'border-4 border-transparent hover:border-indigo-300 shadow hover:shadow-md'
            }`}
            onClick={() => handleCardClick(blog.id)}
            onMouseEnter={() => setActiveCard(blog.id)}
            onMouseLeave={() => setActiveCard(null)}
          >          
              {/* Top border gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div className="flex items-center flex-wrap gap-2 mb-2 md:mb-0">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getLevelColor(blog.level)}`}>
                      {blog.level}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1 text-indigo-500" />
                      {blog.readingTime}
                    </div>
                  </div>
                  <div className="text-sm text-indigo-600">
                    By {blog.author} • {blog.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {blog.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className={`px-3 py-1 text-xs font-medium rounded-full ${getTagColor(index)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end mt-4 pt-3 border-t border-gray-100">
  <span 
    className={`inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors ${
      activeCard === blog.id ? 'underline' : ''
    }`}
  >
    Read more
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</div>
              </div>
              
              {/* Subtle decorative corner */}
              <div 
  className={`absolute right-0 bottom-0 w-16 h-16 bg-indigo-50 rounded-tl-full transition-opacity duration-300 ${
    activeCard === blog.id ? 'opacity-70' : 'opacity-30'
  }`}
></div>
            </div>
          ))}
</div>
{blogData.length === 0 && (
          <div className="max-w-5xl mx-auto text-center py-16 bg-white rounded-lg shadow">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No blogs found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any blogs matching your search. Try adjusting your search terms or browse all articles.
            </p>
          </div>
        )}
</>
    );
}