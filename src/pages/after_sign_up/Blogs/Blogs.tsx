import React, { useState } from 'react';
import { Search, Clock, BookOpen, Tag, ArrowRight, BookText } from 'lucide-react';
import { blogDataLevel1New} from './Blog_Storage';
import { useNavigate } from 'react-router-dom';

interface DiagonalPatternProps {
  isActive: boolean;
}

// Get blog stats
const totalBlogs: number = blogDataLevel1New.length;
const totalReadingTime: number = blogDataLevel1New.reduce((total, blog) => total + blog.readingTime, 0);
const uniqueTags: number = [...new Set(blogDataLevel1New.flatMap(blog => blog.tags))].length;

// Diagonal pattern component
const DiagonalPattern: React.FC<DiagonalPatternProps> = ({ isActive }) => (
  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
    <div className={`absolute rotate-45 w-32 h-6 -left-4 top-12 ${
      isActive ? 'bg-orange-400' : 'bg-gray-200'
    } transition-colors duration-300`}></div>
  </div>
);

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();
  const blogData = blogDataLevel1New.map((values)=>{
    return {
      id: values.id,
      title: values.title,
      description: values.description,
      readingTime: values.readingTime,
      level: values.level,
      tags: values.tags,
      navigationName: values.navigationName,
      no_of_Blogs: values.subBlogs.length
    }
  });
  
  // Filter blogs based on search query
  const filteredBlogs: {
    id: number;
    title: string;
    description: string;
    readingTime: number;
    level: string;
    tags: string[];
    navigationName: string;
    no_of_Blogs: number
  }[] = blogData.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handle card selection
  const handleCardClick = (id: string): void => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  // Determine level badge styling
  const getLevelStyle = (level: string): string => {
    switch(level) {
      case 'Beginner': 
        return 'bg-green-100 text-green-800';
      case 'Intermediate': 
        return 'bg-blue-100 text-blue-800';
      case 'Advanced': 
        return 'bg-purple-100 text-purple-800';
      default: 
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Read Blog Here</h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">Explore our collection of technical articles and tutorials</p>
        
        {/* Stats Section */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="rounded-full bg-orange-100 p-2 mr-3">
              <BookOpen className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Articles</p>
              <p className="text-xl font-semibold">{totalBlogs}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="rounded-full bg-blue-100 p-2 mr-3">
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Reading Time</p>
              <p className="text-xl font-semibold">{totalReadingTime} mins</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="rounded-full bg-purple-100 p-2 mr-3">
              <Tag className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Topics</p>
              <p className="text-xl font-semibold">{uniqueTags}</p>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Search Topic..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredBlogs.map((blog) => {
          const isSelected = selectedCard === blog.id;
          const isHovered = hoveredCard === blog.id;
          
          return (
            <div
  key={blog.id}
  className={`bg-white rounded-lg overflow-hidden transition-all duration-300 cursor-pointer relative border-2 ${
    isSelected 
      ? 'border-orange-500 shadow-orange-500 shadow-md' // Highlighted state
      : isHovered 
        ? 'border-orange-200 shadow-orange-200 shadow-sm' // Hovered state
        : 'border-gray-200 shadow-sm' // Default state
  }`}
  onClick={()=>{
    navigate(`/blogs/${blog.navigationName}`)
  }}
  onMouseEnter={() => setHoveredCard(blog.id)}
  onMouseLeave={() => setHoveredCard(null)}
>

              {/* Decorative corner pattern */}
              <DiagonalPattern isActive={isSelected || isHovered} />
              
              <div className="p-4 md:p-5">
                <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ${
                  isSelected || isHovered ? 'text-orange-500' : 'text-gray-800'
                }`}>{blog.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-3">{blog.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-2 py-0.5 text-xs rounded-full transition-colors duration-300 ${
                        isSelected || isHovered ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Read time */}
                <div className="flex items-center text-xs md:text-sm text-gray-500 mb-3">
                <BookText className="h-3 w-3 mr-1" />
                <span>{blog.no_of_Blogs} Blogs Available</span>
                </div>
                
                {/* Level badge */}
                <div className="mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getLevelStyle(blog.level)}`}>
                    {blog.level}
                  </span>
                </div>
                
                {/* View all link */}
                <div className={`flex items-center font-medium transition-all duration-300 ${
                  isSelected || isHovered ? 'text-orange-600' : 'text-orange-500'
                }`}>
                  <span className={isSelected || isHovered ? 'underline' : ''}>View all</span>
                  <ArrowRight className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    isSelected || isHovered ? 'transform translate-x-1' : ''
                  }`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Empty state when no blogs match search */}
      {filteredBlogs.length === 0 && (
        <div className="max-w-7xl mx-auto p-8 text-center">
          <p className="text-lg text-gray-600">No blogs found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;