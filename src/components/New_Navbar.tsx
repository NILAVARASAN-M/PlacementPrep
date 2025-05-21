import React, { useState, ReactNode } from 'react';
import { Bell, User, Settings, LogOut, Key, ChevronDown, Menu, X, BookOpen, Briefcase, LineChart, Award, FileText, BarChart2, Users, Home } from 'lucide-react';
import { userEmailDatabase } from '../pages/after_sign_up/home/storage';

// Define props interface with children
interface NavbarLayoutProps {
  children: ReactNode;
}

const NavbarWithSidebar: React.FC<NavbarLayoutProps> = ({ children }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  // Toggle profile dropdown menu
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close the profile menu if clicked outside
  const closeProfileMenu = () => {
    setShowProfileMenu(false);
  };

  // Temporary user data (replace with actual data from backend later)
  // const userData = {
  //   name: "Alex Johnson",
  //   email: "alex.johnson@example.com",
  //   avatar: null // If you have user avatars, you can use them here
  // };

  const parts=(window.location.pathname).split("/");
  let nav_name = "default";
  const userNavData = userEmailDatabase;
  if (parts.length > 2 && parts[1] === "home" && parts[2] in userNavData) {
    nav_name=parts[2];
  }
  else nav_name = "default";
  
  console.log(userNavData[nav_name]);
  const userData = userNavData[nav_name];
  // Sidebar navigation items
  const navigationItems = [
    { name: 'Dashboard', icon: Home, href: '/home', current: true },
    { name: 'Practice Problems', icon: BookOpen, href: '/problems', current: false },
    { name: 'Companies', icon: Briefcase, href: '/company', current: false },
    { name: 'Blogs', icon: Users, href: '/blogs', current: false },
    { name: 'Resume Builder', icon: FileText, href: '#resume', current: false },
    { name: 'placement', icon: LineChart, href: '/placement ', current: false },
    { name: 'Jobs Applied', icon: BarChart2, href: '/jobdash', current: false },
    // { name: 'Achievements', icon: Award, href: '#achievements', current: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left side - Menu button and Logo */}
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
                aria-expanded={sidebarOpen}
              >
                <span className="sr-only">Open sidebar</span>
                {sidebarOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
              
              {/* Logo and App Name */}
              <div className="flex-shrink-0 flex items-center ml-4">
                <div className="h-8 w-8 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="font-bold text-xl text-gray-800">PlacementPrep</span>
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <div className="relative">
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="Notifications"
                >
                  <Bell size={20} className="text-gray-600" />
                  {notificationCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                      {notificationCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Profile Dropdown */}
              <div className="relative ml-3">
                <div>
                  <button 
                    onClick={toggleProfileMenu}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full pl-2 pr-3 py-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    id="user-menu-button" 
                    aria-expanded={showProfileMenu}
                    aria-haspopup="true"
                  >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                      {userData.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">{userData.name.split(' ')[0]}</span>
                    <ChevronDown size={16} className="text-gray-500" />
                  </button>
                </div>

                {/* Profile Dropdown Menu */}
                {showProfileMenu && (
                  <div 
                    className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100"
                    role="menu" 
                    aria-orientation="vertical" 
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    {/* User Info Section */}
                    <div className="px-4 py-3">
                      <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                      <p className="text-sm text-gray-500 truncate">{userData.email}</p>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-1">
                      <a
                        href="#profile"
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        <User className="mr-3 h-5 w-5 text-gray-500 group-hover:text-indigo-600" aria-hidden="true" />
                        Your Profile
                      </a>
                      <a
                        href="#settings"
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        <Settings className="mr-3 h-5 w-5 text-gray-500 group-hover:text-indigo-600" aria-hidden="true" />
                        Settings
                      </a>
                      <a
                        href="#changepassword"
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        <Key className="mr-3 h-5 w-5 text-gray-500 group-hover:text-indigo-600" aria-hidden="true" />
                        Change Password
                      </a>
                    </div>
                    
                    {/* Logout Section */}
                    <div className="py-1">
                      <a
                        href="#signout"
                        className="group flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        <LogOut className="mr-3 h-5 w-5 text-red-500" aria-hidden="true" />
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar and Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out pt-16 lg:pt-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:w-64`}
        >
          {/* Sidebar content */}
          <div className="h-full flex flex-col">
            {/* Sidebar header (mobile only) */}
            <div className="lg:hidden px-4 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <span className="font-bold text-xl text-gray-800">PlacementPrep</span>
                </div>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Sidebar navigation */}
            <div className="flex-1 px-4 py-6 overflow-y-auto">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      item.current
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        item.current ? 'text-indigo-500' : 'text-gray-500 group-hover:text-gray-900'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Sidebar footer */}
            <div className="p-4 border-t border-gray-200">
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-indigo-800">Ready for interviews?</h3>
                <p className="mt-1 text-xs text-indigo-600">Take a mock interview today to improve your skills!</p>
                <button className="mt-3 w-full flex justify-center items-center px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
  {children}
</main>
      </div>

      {/* Overlay to close sidebar on mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 lg:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
};

export default NavbarWithSidebar;




























// import { useState } from 'react';
// import { Bell, User, Settings, LogOut, Key, ChevronDown } from 'lucide-react';

// const New_Navbar = () => {
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(3);

//   // Toggle profile dropdown menu
//   const toggleProfileMenu = () => {
//     setShowProfileMenu(!showProfileMenu);
//   };

//   // Close the menu if clicked outside
//   const handleClickOutside = () => {
//     if (showProfileMenu) {
//       setShowProfileMenu(false);
//     }
//   };

//   // Temporary user data (replace with actual data from backend later)
//   const userData = {
//     name: "Alex Johnson",
//     email: "alex.johnson@example.com",
//     avatar: null // If you have user avatars, you can use them here
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo and App Name */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <div className="h-8 w-8 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mr-2">
//                 <span className="text-white font-bold text-lg">P</span>
//               </div>
//               <span className="font-bold text-xl text-gray-800">PlacementPrep</span>
//             </div>
//           </div>

//           {/* Right side icons */}
//           <div className="flex items-center space-x-4">
//             {/* Notification Bell */}
//             <div className="relative">
//               <button 
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 aria-label="Notifications"
//               >
//                 <Bell size={20} className="text-gray-600" />
//                 {notificationCount > 0 && (
//                   <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
//                     {notificationCount}
//                   </span>
//                 )}
//               </button>
//             </div>

//             {/* Profile Dropdown */}
//             <div className="relative ml-3">
//               <div>
//                 <button 
//                   onClick={toggleProfileMenu}
//                   className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full pl-2 pr-3 py-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   id="user-menu-button" 
//                   aria-expanded={showProfileMenu}
//                   aria-haspopup="true"
//                 >
//                   <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
//                     {userData.name.charAt(0)}
//                   </div>
//                   <span className="text-sm font-medium text-gray-700 hidden sm:block">{userData.name.split(' ')[0]}</span>
//                   <ChevronDown size={16} className="text-gray-500" />
//                 </button>
//               </div>

//               {/* Profile Dropdown Menu */}
//               {showProfileMenu && (
//                 <div 
//                   className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100"
//                   role="menu" 
//                   aria-orientation="vertical" 
//                   aria-labelledby="user-menu-button"
//                   tabIndex="-1"
//                 >
//                   {/* User Info Section */}
//                   <div className="px-4 py-3">
//                     <p className="text-sm font-medium text-gray-900">{userData.name}</p>
//                     <p className="text-sm text-gray-500 truncate">{userData.email}</p>
//                   </div>
                  
//                   {/* Menu Items */}
//                   <div className="py-1">
//                     <a
//                       href="#profile"
//                       className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
//                       role="menuitem"
//                       tabIndex="-1"
//                     >
//                       <User className="mr-3 h-5 w-5 text-gray-500 group-hover:text-indigo-600" aria-hidden="true" />
//                       Your Profile
//                     </a>
//                     <a
//                       href="#settings"
//                       className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
//                       role="menuitem"
//                       tabIndex="-1"
//                     >
//                       <Settings className="mr-3 h-5 w-5 text-gray-500 group-hover:text-indigo-600" aria-hidden="true" />
//                       Settings
//                     </a>
//                     <a
//                       href="#changepassword"
//                       className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
//                       role="menuitem"
//                       tabIndex="-1"
//                     >
//                       <Key className="mr-3 h-5 w-5 text-gray-500 group-hover:text-indigo-600" aria-hidden="true" />
//                       Change Password
//                     </a>
//                   </div>
                  
//                   {/* Logout Section */}
//                   <div className="py-1">
//                     <a
//                       href="#signout"
//                       className="group flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50"
//                       role="menuitem"
//                       tabIndex="-1"
//                     >
//                       <LogOut className="mr-3 h-5 w-5 text-red-500" aria-hidden="true" />
//                       Sign out
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default New_Navbar;




