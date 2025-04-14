
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, User, Settings, LogOut, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  
  return (
    <nav className="bg-white border-b border-gray-300 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-pixel text-retro-purple tracking-wide">RETRO<span className="text-retro-pink">FORUM</span></h1>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/new-thread" className="retro-button flex items-center gap-1 bg-retro-purple text-white hover:bg-retro-purple/90">
            <MessageSquare size={16} />
            <span className="hidden sm:inline">New Thread</span>
          </Link>
          
          <div className="relative px-3 py-1.5 bg-muted rounded flex items-center border border-gray-300 w-36 sm:w-64">
            <Search size={16} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none text-sm focus:outline-none ml-2 w-full"
            />
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center space-x-1 p-1.5 hover:bg-muted rounded-sm"
              onClick={toggleUserMenu}
            >
              <div className="w-7 h-7 bg-retro-purple/20 rounded-sm flex items-center justify-center text-retro-purple">
                <User size={16} />
              </div>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 shadow-md pixel-shadow">
                <div className="p-3 border-b border-gray-200">
                  <div className="font-pixel text-sm text-retro-purple">retroGamer98</div>
                  <div className="text-xs text-gray-500 font-mono">retro@example.com</div>
                </div>
                <ul className="py-1">
                  <li>
                    <Link to="/profile/my-profile" className="block px-4 py-2 text-sm font-mono hover:bg-muted flex items-center">
                      <User size={14} className="mr-2" />
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="block px-4 py-2 text-sm font-mono hover:bg-muted flex items-center">
                      <Settings size={14} className="mr-2" />
                      Settings
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 mt-1">
                    <button className="w-full text-left block px-4 py-2 text-sm font-mono hover:bg-muted flex items-center text-red-500">
                      <LogOut size={14} className="mr-2" />
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
