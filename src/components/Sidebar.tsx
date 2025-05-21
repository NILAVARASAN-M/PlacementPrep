import React, { useState, ReactNode } from 'react';
import { Menu, ChevronDown, ShoppingBag, Inbox, User, Settings, LogOut } from 'lucide-react';

// Define props interface with children
interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  type ExpandedItemsType = {
    dashboard: boolean;
    ecommerce: boolean;
  };
  
  const [expandedItems, setExpandedItems] = useState<ExpandedItemsType>({
    dashboard: false,
    ecommerce: false
  });

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleItem = (item: keyof ExpandedItemsType) => {
    setExpandedItems({
      ...expandedItems,
      [item]: !expandedItems[item]
    });
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Fixed Sidebar */}
      <div className={`h-full bg-white shadow-lg transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex-shrink-0`}>
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && <h1 className="font-semibold text-gray-700">Sidebar</h1>}
          <button 
            onClick={toggleSidebar} 
            className={`p-1 rounded hover:bg-gray-200 ${collapsed ? 'mx-auto' : ''}`}
          >
            <Menu size={20} />
          </button>
        </div>
        
        {/* Sidebar menu */}
        <div className="py-4 h-full overflow-y-auto">
          <ul>
            {/* Dashboard Item */}
            <li>
              <button 
                className="flex items-center w-full px-4 py-3 hover:bg-gray-100 text-gray-700"
                onClick={() => toggleItem('dashboard')}
              >
                <span className="text-gray-600 flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center bg-gray-700 text-white text-xs rounded">
                    <span>M</span>
                  </div>
                </span>
                {!collapsed && (
                  <>
                    <span className="flex-grow text-left ml-3">Dashboard</span>
                    <ChevronDown size={16} className={`transition-transform ${expandedItems.dashboard ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </li>
            
            {/* E-Commerce Item */}
            <li>
              <button 
                className="flex items-center w-full px-4 py-3 hover:bg-gray-100 text-gray-700"
                onClick={() => toggleItem('ecommerce')}
              >
                <span className="text-gray-600 flex-shrink-0">
                  <ShoppingBag size={20} />
                </span>
                {!collapsed && (
                  <>
                    <span className="flex-grow text-left ml-3">E-Commerce</span>
                    <ChevronDown size={16} className={`transition-transform ${expandedItems.ecommerce ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </li>
            
            {/* Separator */}
            <li className="my-2 border-b border-gray-200"></li>
            
            {/* Inbox Item */}
            <li>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 text-gray-700">
                <span className="text-gray-600 flex-shrink-0">
                  <Inbox size={20} />
                </span>
                {!collapsed && (
                  <>
                    <span className="flex-grow ml-3">Inbox</span>
                    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                      14
                    </span>
                  </>
                )}
              </a>
            </li>
            
            {/* Profile Item */}
            <li>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 text-gray-700">
                <span className="text-gray-600 flex-shrink-0">
                  <User size={20} />
                </span>
                {!collapsed && <span className="ml-3">Profile</span>}
              </a>
            </li>
            
            {/* Settings Item */}
            <li>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 text-gray-700">
                <span className="text-gray-600 flex-shrink-0">
                  <Settings size={20} />
                </span>
                {!collapsed && <span className="ml-3">Settings</span>}
              </a>
            </li>
            
            {/* Log Out Item */}
            <li>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 text-gray-700">
                <span className="text-gray-600 flex-shrink-0">
                  <LogOut size={20} />
                </span>
                {!collapsed && <span className="ml-3">Log Out</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        {children}  
      </div>
    </div>
  );
};

export default SidebarLayout;