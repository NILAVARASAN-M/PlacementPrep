import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Youtube, Globe, BookOpen, MessageSquare, PlusCircle, Star, StarOff, Edit, Check, X } from 'lucide-react';

const GoogleProblems = () => {
  // Sample data
  const [problems, setProblems] = useState([
    {
      id: 1,
      name: "Two Sum",
      difficulty: "Easy",
      tags: ["Arrays", "Hash Table"],
      status: false,
      favorite: false,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/two-sum/" },
        { name: "HackerRank", url: "https://www.hackerrank.com/challenges/two-sum/" }
      ],
      youtubeLinks: [
        { title: "Two Sum - Optimal Solution", url: "https://www.youtube.com/watch?v=KLlXCFG5TnA" },
        { title: "Two Sum for Beginners", url: "https://www.youtube.com/watch?v=U8B984M1VcU" }
      ]
    },
    {
      id: 2,
      name: "LRU Cache",
      difficulty: "Medium",
      tags: ["Hash Table", "Linked List", "Design"],
      status: true,
      favorite: true,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/lru-cache/" }
      ],
      youtubeLinks: [
        { title: "LRU Cache Implementation", url: "https://www.youtube.com/watch?v=7ABFKPK2hD4" }
      ]
    },
    {
      id: 3,
      name: "Merge K Sorted Lists",
      difficulty: "Hard",
      tags: ["Linked List", "Heap", "Divide and Conquer"],
      status: false,
      favorite: false,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/merge-k-sorted-lists/" }
      ],
      youtubeLinks: [
        { title: "Merge K Sorted Lists - Heap Solution", url: "https://www.youtube.com/watch?v=kpCesr9VXDA" }
      ]
    },
    {
      id: 4,
      name: "Word Break",
      difficulty: "Medium",
      tags: ["Dynamic Programming", "Trie"],
      status: false,
      favorite: true,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/word-break/" }
      ],
      youtubeLinks: [
        { title: "Word Break - DP Approach", url: "https://www.youtube.com/watch?v=Sx9NNgInc3A" }
      ]
    },
    {
      id: 5,
      name: "Trapping Rain Water",
      difficulty: "Hard",
      tags: ["Arrays", "Two Pointers", "Stack"],
      status: true,
      favorite: false,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/" }
      ],
      youtubeLinks: [
        { title: "Trapping Rain Water Explained", url: "https://www.youtube.com/watch?v=ZI2z5pq0TqA" }
      ]
    },
    {
      id: 6,
      name: "Maximum Subarray",
      difficulty: "Easy",
      tags: ["Arrays", "Dynamic Programming"],
      status: true,
      favorite: true,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/" }
      ],
      youtubeLinks: [
        { title: "Maximum Subarray - Kadane's Algorithm", url: "https://www.youtube.com/watch?v=5WZl3MMT0Eg" }
      ]
    },
    {
      id: 7,
      name: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      tags: ["Arrays", "Binary Search", "Divide and Conquer"],
      status: false,
      favorite: false,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
      ],
      youtubeLinks: [
        { title: "Median of Two Sorted Arrays - Optimal Solution", url: "https://www.youtube.com/watch?v=LPFhl65R7ww" }
      ]
    },
    {
      id: 8,
      name: "Course Schedule",
      difficulty: "Medium",
      tags: ["Graph", "DFS", "BFS", "Topological Sort"],
      status: false,
      favorite: true,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/" }
      ],
      youtubeLinks: [
        { title: "Course Schedule - Graph Solution", url: "https://www.youtube.com/watch?v=rKQaZuoUR4M" }
      ]
    },
    {
        id: 9,
        name: "Course Schedule",
        difficulty: "Medium",
        tags: ["Graph", "DFS", "BFS", "Topological Sort"],
        status: false,
        favorite: true,
        platforms: [
          { name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/" }
        ],
        youtubeLinks: [
          { title: "Course Schedule - Graph Solution", url: "https://www.youtube.com/watch?v=rKQaZuoUR4M" }
        ]
      }
  ]);

  // State management
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    difficulty: [],
    tags: [],
    status: null,
    favorites: false
  });
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 8;

  // Toggle expanded row
  const toggleRow = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  // Toggle problem status
  const toggleStatus = (id, event) => {
    event.stopPropagation();
    setProblems(
      problems.map(problem => 
        problem.id === id ? { ...problem, status: !problem.status } : problem
      )
    );
  };

  // Toggle favorite
  const toggleFavorite = (id, event) => {
    event.stopPropagation();
    setProblems(
      problems.map(problem => 
        problem.id === id ? { ...problem, favorite: !problem.favorite } : problem
      )
    );
  };

  // Filter problems based on search and filters
  const filteredProblems = problems.filter(problem => {
    // Search by name
    if (searchQuery && !problem.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by difficulty
    if (activeFilters.difficulty.length > 0 && !activeFilters.difficulty.includes(problem.difficulty)) {
      return false;
    }
    
    // Filter by tags (show if problem has ANY of the selected tags)
    if (activeFilters.tags.length > 0 && !problem.tags.some(tag => activeFilters.tags.includes(tag))) {
      return false;
    }
    
    // Filter by status
    if (activeFilters.status !== null && problem.status !== activeFilters.status) {
      return false;
    }
    
    // Filter by favorites
    if (activeFilters.favorites && !problem.favorite) {
      return false;
    }
    
    return true;
  });

  // Calculate stats for dashboard
  const stats = {
    total: problems.length,
    solved: problems.filter(problem => problem.status).length,
    unsolved: problems.filter(problem => !problem.status).length,
    byDifficulty: {
      Easy: problems.filter(problem => problem.difficulty === "Easy" && problem.status).length,
      Medium: problems.filter(problem => problem.difficulty === "Medium" && problem.status).length,
      Hard: problems.filter(problem => problem.difficulty === "Hard" && problem.status).length,
    },
    byTags: {}
  };

  // Calculate problems solved by tag
  const allTags = [...new Set(problems.flatMap(problem => problem.tags))];
  allTags.forEach(tag => {
    stats.byTags[tag] = problems.filter(
      problem => problem.tags.includes(tag) && problem.status
    ).length;
  });

  // Pagination
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle filter change
  const toggleDifficultyFilter = (difficulty) => {
    setActiveFilters(prev => {
      const newDifficulties = prev.difficulty.includes(difficulty)
        ? prev.difficulty.filter(d => d !== difficulty)
        : [...prev.difficulty, difficulty];
      
      return { ...prev, difficulty: newDifficulties };
    });
    setCurrentPage(1);
  };

  const toggleTagFilter = (tag) => {
    setActiveFilters(prev => {
      const newTags = prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag];
      
      return { ...prev, tags: newTags };
    });
    setCurrentPage(1);
  };

  const toggleStatusFilter = (status) => {
    setActiveFilters(prev => ({
      ...prev,
      status: prev.status === status ? null : status
    }));
    setCurrentPage(1);
  };

  const toggleFavoritesFilter = () => {
    setActiveFilters(prev => ({
      ...prev,
      favorites: !prev.favorites
    }));
    setCurrentPage(1);
  };

  // Determine difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setActiveFilters({
      difficulty: [],
      tags: [],
      status: null,
      favorites: false
    });
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Famous Problems To Crack Google</h1>
        <p className="text-gray-600">
          Discover the most frequently asked coding problems at Google interviews and practice them to increase your chances of success.
        </p>
      </div>

      {/* Dashboard */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Progress Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Total Problems</h3>
            <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Solved</h3>
            <p className="text-2xl font-bold text-green-600">{stats.solved}</p>
            <p className="text-sm text-gray-500">{Math.round((stats.solved / stats.total) * 100)}% completed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Remaining</h3>
            <p className="text-2xl font-bold text-blue-600">{stats.unsolved}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">By Difficulty</h3>
            <div className="flex items-center mt-2">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span className="text-xs text-gray-600 mr-1">Easy:</span>
              <span className="text-xs font-medium">{stats.byDifficulty.Easy}</span>
            </div>
            <div className="flex items-center mt-1">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-xs text-gray-600 mr-1">Medium:</span>
              <span className="text-xs font-medium">{stats.byDifficulty.Medium}</span>
            </div>
            <div className="flex items-center mt-1">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <span className="text-xs text-gray-600 mr-1">Hard:</span>
              <span className="text-xs font-medium">{stats.byDifficulty.Hard}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-4">
        <div className="w-full lg:w-1/3 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search problems..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="w-full lg:w-2/3 flex flex-wrap gap-2">
          {/* Difficulty filters */}
          <div className="dropdown inline-block relative">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Difficulty</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <ul className="dropdown-menu absolute hidden bg-white shadow-lg rounded-md mt-1 py-1 z-10">
              {["Easy", "Medium", "Hard"].map(difficulty => (
                <li key={difficulty} className="cursor-pointer">
                  <label className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={activeFilters.difficulty.includes(difficulty)}
                      onChange={() => toggleDifficultyFilter(difficulty)}
                    />
                    <span className={`text-sm ${
                      difficulty === "Easy" ? "text-green-600" : 
                      difficulty === "Medium" ? "text-yellow-600" : 
                      "text-red-600"
                    }`}>{difficulty}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags filter dropdown */}
          <div className="dropdown inline-block relative">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Tags</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <ul className="dropdown-menu absolute hidden bg-white shadow-lg rounded-md mt-1 py-1 z-10 max-h-64 overflow-y-auto">
              {allTags.map(tag => (
                <li key={tag} className="cursor-pointer">
                  <label className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={activeFilters.tags.includes(tag)}
                      onChange={() => toggleTagFilter(tag)}
                    />
                    <span className="text-sm">{tag}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Status filter */}
          <div className="dropdown inline-block relative">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Status</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <ul className="dropdown-menu absolute hidden bg-white shadow-lg rounded-md mt-1 py-1 z-10">
              <li className="cursor-pointer">
                <label className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={activeFilters.status === true}
                    onChange={() => toggleStatusFilter(true)}
                  />
                  <span className="text-sm text-green-600">Solved</span>
                </label>
              </li>
              <li className="cursor-pointer">
                <label className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={activeFilters.status === false}
                    onChange={() => toggleStatusFilter(false)}
                  />
                  <span className="text-sm text-red-600">Unsolved</span>
                </label>
              </li>
            </ul>
          </div>

          {/* Favorites filter */}
          <button 
            className={`py-2 px-4 rounded inline-flex items-center ${
              activeFilters.favorites ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
            onClick={toggleFavoritesFilter}
          >
            <Star className={`h-4 w-4 mr-1 ${activeFilters.favorites ? 'text-yellow-500 fill-yellow-500' : ''}`} />
            <span>Favorites</span>
          </button>

          {/* Reset filters */}
          {(activeFilters.difficulty.length > 0 || activeFilters.tags.length > 0 || 
            activeFilters.status !== null || activeFilters.favorites || searchQuery) && (
            <button 
              className="py-2 px-4 rounded bg-red-50 text-red-600 hover:bg-red-100 inline-flex items-center"
              onClick={resetFilters}
            >
              <X className="h-4 w-4 mr-1" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Problem Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                Status
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                #
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Problem
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                Difficulty
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentProblems.map((problem) => (
              <React.Fragment key={problem.id}>
                <tr 
                  className={`hover:bg-gray-50 cursor-pointer ${problem.status ? 'bg-green-50' : ''}`}
                  onClick={() => toggleRow(problem.id)}
                >
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <div 
                        className={`w-5 h-5 rounded border flex items-center justify-center
                          ${problem.status 
                            ? 'bg-green-100 border-green-500 text-green-600' 
                            : 'border-gray-300'
                          }`}
                        onClick={(e) => toggleStatus(problem.id, e)}
                      >
                        {problem.status && <Check className="w-4 h-4" />}
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    {problem.id}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{problem.name}</div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {problem.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button 
                        className="p-1 rounded-full hover:bg-gray-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add note functionality would be implemented here
                        }}
                        title="Add note"
                      >
                        <PlusCircle className="w-5 h-5 text-gray-500" />
                      </button>
                      <button 
                        className="p-1 rounded-full hover:bg-gray-200" 
                        onClick={(e) => toggleFavorite(problem.id, e)}
                        title={problem.favorite ? "Remove from favorites" : "Add to favorites"}
                      >
                        {problem.favorite ? (
                          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ) : (
                          <StarOff className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-200" title="View details">
                        {expandedRow === problem.id ? (
                          <ChevronUp className="w-5 h-5 text-blue-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedRow === problem.id && (
                  <tr className="bg-gray-50">
                    <td colSpan="6" className="px-8 py-4">
                      <div className="flex flex-col space-y-4">
                        {/* Platforms */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <Globe className="w-4 h-4 mr-2 text-blue-500" />
                            Solve on:
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {problem.platforms.map((platform, idx) => (
                              <a 
                                key={idx}
                                href={platform.url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                              >
                                {platform.name === "LeetCode" ? (
                                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.102 17.93l-2.697 2.697c-.622.622-1.694.622-2.316 0l-2.697-2.697c-.622-.622-.622-1.694 0-2.316l2.697-2.697c.622-.622 1.694-.622 2.316 0l2.697 2.697c.622.622.622 1.694 0 2.316z" fill="#FFA116"/>
                                    <path d="M5.82 9.205l6.698-6.698c.622-.622 1.694-.622 2.316 0l6.698 6.698c.622.622.622 1.694 0 2.316l-6.698 6.698c-.622.622-1.694.622-2.316 0l-6.698-6.698c-.622-.622-.622-1.694 0-2.316z" fill="#B3B3B3"/>
                                  </svg>
                                ) : (
                                  <span className="w-5 h-5 mr-2 flex items-center justify-center bg-gray-200 rounded-full text-xs font-bold">
                                    {platform.name.charAt(0)}
                                  </span>
                                )}
                                {platform.name}
                              </a>
                            ))}
                          </div>
                        </div>
                        
                        {/* YouTube Videos */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <Youtube className="w-4 h-4 mr-2 text-red-500" />
                            Video Explanations:
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {problem.youtubeLinks.map((video, idx) => (
                              <a 
                                key={idx}
                                href={video.url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                              >
                                <Youtube className="w-5 h-5 mr-2 text-red-500" />
                                {video.title}
                              </a>
                            ))}
                          </div>
                        </div>
                        
                        {/* Other resources */}
                        <div className="flex flex-wrap gap-4">
                          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-purple-500" />
                            Solutions
                          </button>
                          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                            <Edit className="w-5 h-5 mr-2 text-green-500" />
                            Blogs
                          </button>
                          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                            <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                            AI Help
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            {currentProblems.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                  No problems match your filters. Try adjusting your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* Pagination */}
{filteredProblems.length > problemsPerPage && (
  <div className="flex items-center justify-between mt-4">
    <div className="text-sm text-gray-500">
      Showing {indexOfFirstProblem + 1}-{Math.min(indexOfLastProblem, filteredProblems.length)} of {filteredProblems.length} problems
    </div>
    <div className="flex space-x-2">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Previous
      </button>
      
      {[...Array(totalPages).keys()].map(number => {
        // Only show a window of 5 pages around current page
        if (
          number + 1 === 1 ||
          number + 1 === totalPages ||
          (number + 1 >= currentPage - 2 && number + 1 <= currentPage + 2)
        ) {
          return (
            <button
              key={number + 1}
              onClick={() => setCurrentPage(number + 1)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                currentPage === number + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {number + 1}
            </button>
          );
        } else if (
          (number + 1 === currentPage - 3 && currentPage > 4) ||
          (number + 1 === currentPage + 3 && currentPage < totalPages - 3)
        ) {
          return (
            <span key={number + 1} className="px-2 py-1 text-gray-500">
              ...
            </span>
          );
        }
        return null;
      })}
      
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Next
      </button>
    </div>
  </div>
)}

    </div>
  );
};

// Add styles for dropdown menus (since we're using Tailwind without JS)
const style = document.createElement('style');
style.textContent = `
  .dropdown:hover .dropdown-menu {
    display: block;
  }
`;
document.head.appendChild(style);

export default GoogleProblems;