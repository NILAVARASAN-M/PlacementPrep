import { useState, useEffect } from "react"
import { Book, ChevronDown, LogIn, Menu, X, Search, Sun, Moon } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavbarNew2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Handle screen resize for earlier mobile view trigger
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDropdown = (dropdown, event) => {
    if (event) {
      event.stopPropagation()
    }

    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (activeDropdown) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [activeDropdown])

  const navigate = useNavigate();
    const onClickSignUp = () =>{
      navigate("/signup")
    }
    const onClickSignIn = () =>{
      navigate("/signin")
    }

  return (
    <nav
      className={`${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg sticky top-0 z-50 transition-all duration-300 border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
    >
<div className="mx-auto px-4 max-w-[1450px]">
<div className="flex items-center justify-between h-16">
          {/* Logo and Brand - Moved further left */}
          <div className="flex-shrink-0 flex items-center">
            <div
              className={`bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg shadow-md transition-all duration-300 ${isDarkMode ? "shadow-blue-400/20" : ""}`}
            >
              <Book className="h-5 w-5 text-white" />
            </div>
            <span
              className={`ml-2 text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-800"} tracking-wide transition-colors duration-300`}
            >
              PlacementPrep
            </span>
          </div>

          {/* Desktop Navigation - Improved spacing */}
          {!isMobileView && (
            <div className="flex items-center justify-between flex-1 ml-8 space-x-2">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className={`${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                onClick={()=>{navigate("/")}}
                >
                  Home
                </a>

                {/* About Dropdown */}
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={(e) => toggleDropdown("about", e)}
                    className={`${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200`}
                  >
                    About PlacementPrep
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""}`}
                    />
                  </button>

                  {activeDropdown === "about" && (
                    <div
                      className={`absolute z-50 mt-1 w-64 rounded-md shadow-lg ${isDarkMode ? "bg-gray-700 ring-1 ring-gray-600" : "bg-white ring-1 ring-black ring-opacity-5 border border-gray-200"} divide-y ${isDarkMode ? "divide-gray-600" : "divide-gray-100"}`}
                    >
                      <div className="py-1">
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                        >
                          Our Mission
                        </a>
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                        >
                          Our Team
                        </a>
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                        >
                          Success Stories
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* What We Do Dropdown */}
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={(e) => toggleDropdown("whatwedo", e)}
                    className={`${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200`}
                  >
                    What We Do
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "whatwedo" ? "rotate-180" : ""}`}
                    />
                  </button>

                  {activeDropdown === "whatwedo" && (
                    <div
                      className={`absolute z-50 mt-1 w-64 rounded-md shadow-lg ${isDarkMode ? "bg-gray-700 ring-1 ring-gray-600" : "bg-white ring-1 ring-black ring-opacity-5 border border-gray-200"} divide-y ${isDarkMode ? "divide-gray-600" : "divide-gray-100"}`}
                    >
                      <div className="py-1">
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                        >
                          Interview Preparation
                        </a>
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                        >
                          Resume Building
                        </a>
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                        >
                          Mock Interviews
                        </a>
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                        >
                          Career Counseling
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className={`${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  Contact Us
                </a>
              </div>

              {/* Search Bar - Fixed width to ensure it's fully visible */}
              <div className="relative mx-4 w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-4 w-4 ${isDarkMode ? "text-gray-400" : "text-gray-400"}`} />
                </div>
                <input
                  type="text"
                  placeholder="Search resources..."
                  className={`block w-full pl-10 pr-3 py-2 border ${isDarkMode ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" : "border-gray-300 bg-gray-50 placeholder-gray-500"} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:shadow-sm`}
                />
              </div>

              <div className="flex items-center space-x-5">
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-full ${isDarkMode ? " text-yellow-300 hover:bg-gray-600" : " text-gray-700 hover:bg-gray-200"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
                {/* Login Button */}
                <a
                  href="#"
                  className={`${isDarkMode ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800" : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"} text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200 shadow-md hover:shadow-lg`}
                onClick={onClickSignIn}
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </a>
                {/* Sign Up Button */}
                <a
                  href="#"
                  className={`${isDarkMode ? "bg-white text-gray-800 hover:bg-gray-100" : "bg-white text-gray-800 border border-blue-500 hover:bg-blue-50"} px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200 shadow-md hover:shadow-lg`}
                onClick={onClickSignUp}
                >
                  Sign Up
                </a>

                
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          {isMobileView && (
            <div className="flex items-center space-x-3">
              {/* Dark Mode Toggle (Mobile) */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              {/* Mobile Search */}
              <div className="relative">
                <button
                  className={`p-2 rounded-full ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-500 hover:bg-gray-100"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="block h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileView && isMenuOpen && (
        <div
          className={`border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"} transition-colors duration-300`}
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            {/* Mobile Search (Expanded) */}
            <div className="px-3 py-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-4 w-4 ${isDarkMode ? "text-gray-400" : "text-gray-400"}`} />
                </div>
                <input
                  type="text"
                  placeholder="Search resources..."
                  className={`block w-full pl-10 pr-3 py-2 border ${isDarkMode ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" : "border-gray-300 bg-gray-50 placeholder-gray-500"} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                />
              </div>
            </div>

            <a
              href="#"
              className={`${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            >
              Home
            </a>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={(e) => toggleDropdown("about", e)}
                className={`${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center transition-colors duration-200`}
              >
                About PlacementPrep
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "about" && (
                <div
                  className={`pl-4 space-y-1 mt-1 ${isDarkMode ? "bg-gray-700" : "bg-blue-50"} rounded-md mx-2 transition-colors duration-200`}
                >
                  <a
                    href="#"
                    className={`${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"} block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Our Mission
                  </a>
                  <a
                    href="#"
                    className={`${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"} block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Our Team
                  </a>
                  <a
                    href="#"
                    className={`${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"} block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Success Stories
                  </a>
                </div>
              )}
            </div>

            {/* Mobile What We Do Dropdown */}
            <div>
              <button
                onClick={(e) => toggleDropdown("whatwedo", e)}
                className={`${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center transition-colors duration-200`}
              >
                What We Do
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "whatwedo" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "whatwedo" && (
                <div
                  className={`pl-4 space-y-1 mt-1 ${isDarkMode ? "bg-gray-700" : "bg-blue-50"} rounded-md mx-2 transition-colors duration-200`}
                >
                  <a
                    href="#"
                    className={`${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"} block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Interview Preparation
                  </a>
                  <a
                    href="#"
                    className={`${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"} block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Resume Building
                  </a>
                  <a
                    href="#"
                    className={`${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"} block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Mock Interviews
                  </a>
                  <a
                    href="#"
                    className={`${isDarkMode ? "text-gray-300 hover:bg-gray-600 hover:text-white" : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"} block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Career Counseling
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className={`${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            >
              Contact Us
            </a>

            <a
              href="#"
              className={`${isDarkMode ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800" : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"} text-white flex items-center px-3 py-2 rounded-md text-base font-medium shadow-md mt-4 transition-all duration-200`}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </a>
            <a
              href="#"
              className={`${isDarkMode ? "bg-white text-gray-800 hover:bg-gray-100" : "bg-white text-gray-800 border border-blue-500 hover:bg-blue-50"} flex items-center px-3 py-2 rounded-md text-base font-medium shadow-md mt-2 transition-all duration-200`}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

