
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, UserCircle, Mail, Lock, Bell, Trash } from 'lucide-react';
import Navbar from '../components/Navbar';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      
      <div className="retro-container">
        <div className="mb-4">
          <Link 
            to="/profile/my-profile" 
            className="text-sm font-mono text-gray-500 hover:text-retro-purple inline-flex items-center"
          >
            <ArrowLeft size={14} className="mr-1" />
            Back to Profile
          </Link>
        </div>
        
        <h1 className="text-2xl font-pixel mb-6 text-retro-purple">Account Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Settings Menu */}
          <div className="md:col-span-1">
            <div className="retro-card">
              <ul className="font-mono text-sm">
                <li>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left p-3 flex items-center ${activeTab === 'profile' ? 'bg-retro-purple/10 text-retro-purple' : 'hover:bg-muted'}`}
                  >
                    <UserCircle size={14} className="mr-2" />
                    Profile Information
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('account')}
                    className={`w-full text-left p-3 flex items-center ${activeTab === 'account' ? 'bg-retro-purple/10 text-retro-purple' : 'hover:bg-muted'}`}
                  >
                    <Mail size={14} className="mr-2" />
                    Account Settings
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('password')}
                    className={`w-full text-left p-3 flex items-center ${activeTab === 'password' ? 'bg-retro-purple/10 text-retro-purple' : 'hover:bg-muted'}`}
                  >
                    <Lock size={14} className="mr-2" />
                    Change Password
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('notifications')}
                    className={`w-full text-left p-3 flex items-center ${activeTab === 'notifications' ? 'bg-retro-purple/10 text-retro-purple' : 'hover:bg-muted'}`}
                  >
                    <Bell size={14} className="mr-2" />
                    Notifications
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('danger')}
                    className={`w-full text-left p-3 flex items-center ${activeTab === 'danger' ? 'bg-red-100 text-red-500' : 'hover:bg-muted'}`}
                  >
                    <Trash size={14} className="mr-2" />
                    Danger Zone
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Settings Content */}
          <div className="md:col-span-3">
            <div className="retro-card p-5">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-lg font-pixel mb-4 text-retro-purple">Profile Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">Username</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                        defaultValue="retroGamer98"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">Bio</label>
                      <textarea 
                        className="w-full border border-gray-300 p-2 font-mono text-sm h-24 focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                        defaultValue="Retro tech enthusiast and pixel art lover. I spend way too much time on old console games and discussing obsolete technology."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">Location</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                        defaultValue="Digital Dreamland"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">Website</label>
                      <input 
                        type="url" 
                        className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                        defaultValue="https://retrowave.example.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-mono text-gray-600 mb-1">Twitter</label>
                        <input 
                          type="text" 
                          className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                          defaultValue="@retroGamer98"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-mono text-gray-600 mb-1">GitHub</label>
                        <input 
                          type="text" 
                          className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                          defaultValue="retroGamer98"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-lg font-pixel mb-4 text-retro-purple">Account Settings</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                        defaultValue="retro@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">Display Name</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                        defaultValue="Retro Gamer"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="show-email" className="border border-gray-300 rounded-sm" />
                      <label htmlFor="show-email" className="text-sm font-mono text-gray-600">Show my email address in my public profile</label>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'password' && (
                <div>
                  <h2 className="text-lg font-pixel mb-4 text-retro-purple">Change Password</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">New Password</label>
                      <input 
                        type="password" 
                        className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-mono text-gray-600 mb-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        className="w-full border border-gray-300 p-2 font-mono text-sm focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-lg font-pixel mb-4 text-retro-purple">Notification Preferences</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-200">
                      <div>
                        <h3 className="font-mono text-sm font-medium">New Replies to Your Threads</h3>
                        <p className="text-xs text-gray-500">Get notified when someone replies to your threads</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="notify-replies" className="border border-gray-300 rounded-sm" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-200">
                      <div>
                        <h3 className="font-mono text-sm font-medium">Thread Mentions</h3>
                        <p className="text-xs text-gray-500">Get notified when you are mentioned in a thread</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="notify-mentions" className="border border-gray-300 rounded-sm" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-200">
                      <div>
                        <h3 className="font-mono text-sm font-medium">Forum Announcements</h3>
                        <p className="text-xs text-gray-500">Receive updates about forum changes and announcements</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="notify-announcements" className="border border-gray-300 rounded-sm" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'danger' && (
                <div>
                  <h2 className="text-lg font-pixel mb-4 text-red-500">Danger Zone</h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 border border-red-300 bg-red-50">
                      <h3 className="font-mono text-sm font-medium text-red-500 mb-2">Delete Account</h3>
                      <p className="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                      <button className="retro-button bg-red-500 text-white hover:bg-red-600">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {(activeTab === 'profile' || activeTab === 'account' || activeTab === 'password') && (
                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                  <button className="retro-button bg-retro-purple text-white hover:bg-retro-purple/90 flex items-center">
                    <Save size={14} className="mr-1" />
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
