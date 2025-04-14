
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Calendar, MessageSquare, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import { User } from '../types/forum';

// Mock data for demo purposes
const mockUser: User = {
  id: "user-1",
  username: "retroGamer98",
  avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=retroGamer98",
  joinedDate: "2023-01-15T08:30:00Z",
  postCount: 127,
  bio: "Retro tech enthusiast and pixel art lover. I spend way too much time on old console games and discussing obsolete technology.",
  location: "Digital Dreamland",
  website: "https://retrowave.example.com",
  socialLinks: {
    twitter: "@retroGamer98",
    github: "retroGamer98"
  }
};

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  // In a real app, we would fetch user data based on userId
  const user = mockUser;
  
  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      
      <div className="retro-container">
        <div className="mb-4">
          <Link 
            to="/" 
            className="text-sm font-mono text-gray-500 hover:text-retro-purple inline-flex items-center"
          >
            <ArrowLeft size={14} className="mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Info Card */}
          <div className="md:col-span-1">
            <div className="retro-card p-5 border-t-4 border-t-retro-purple">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-24 h-24 bg-muted rounded-sm mb-3 overflow-hidden pixel-shadow">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-retro-purple/20 flex items-center justify-center">
                      <span className="text-2xl font-pixel text-retro-purple">{user.username.charAt(0).toUpperCase()}</span>
                    </div>
                  )}
                </div>
                <h1 className="text-xl font-pixel text-retro-purple mb-1">{user.username}</h1>
                <div className="text-sm text-gray-500 font-mono mb-4">Member since {new Date(user.joinedDate).toLocaleDateString()}</div>
                
                {userId === "my-profile" && (
                  <Link 
                    to="/settings" 
                    className="retro-button bg-retro-purple text-white hover:bg-retro-purple/90 w-full flex justify-center items-center mb-3"
                  >
                    <Settings size={14} className="mr-1" />
                    Edit Profile
                  </Link>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="text-left space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar size={14} className="mr-2 text-retro-cyan" />
                    <span className="font-mono text-gray-600">Joined {new Date(user.joinedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MessageSquare size={14} className="mr-2 text-retro-pink" />
                    <span className="font-mono text-gray-600">{user.postCount} posts</span>
                  </div>
                  {user.location && (
                    <div className="flex items-center text-sm">
                      <span className="font-mono text-gray-600 ml-6">{user.location}</span>
                    </div>
                  )}
                  {user.website && (
                    <div className="flex items-center text-sm">
                      <span className="font-mono text-retro-purple hover:underline ml-6">
                        <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* User Activity and Bio */}
          <div className="md:col-span-2">
            <div className="retro-card p-5 mb-6 border-l-4 border-l-retro-cyan">
              <h2 className="text-lg font-pixel mb-3 text-retro-cyan">About</h2>
              <p className="text-gray-700 font-sans mb-4">{user.bio || "This user hasn't written a bio yet."}</p>
              
              {user.socialLinks && (
                <div className="flex gap-2 pt-2 border-t border-gray-200">
                  {user.socialLinks.twitter && (
                    <a 
                      href={`https://twitter.com/${user.socialLinks.twitter.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="retro-button py-1 px-2"
                    >
                      Twitter
                    </a>
                  )}
                  {user.socialLinks.github && (
                    <a 
                      href={`https://github.com/${user.socialLinks.github}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="retro-button py-1 px-2"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
            
            <div className="retro-card p-5 border-l-4 border-l-retro-pink">
              <h2 className="text-lg font-pixel mb-3 text-retro-pink">Recent Activity</h2>
              <div className="space-y-4">
                {/* This would be populated with actual recent activity data */}
                <div className="p-3 bg-retro-pink/10 font-mono text-sm">
                  <div className="text-gray-500 mb-1">Posted in <span className="text-retro-purple">Retrocomputing</span> • 2 days ago</div>
                  <div className="text-gray-700">I just restored my Commodore 64 and it's working perfectly! Here are some photos...</div>
                </div>
                <div className="p-3 bg-retro-cyan/10 font-mono text-sm">
                  <div className="text-gray-500 mb-1">Replied in <span className="text-retro-purple">Web Nostalgia</span> • 5 days ago</div>
                  <div className="text-gray-700">GeoCities was definitely ahead of its time. I miss those flashy animated GIFs...</div>
                </div>
                <div className="p-3 bg-retro-yellow/10 font-mono text-sm">
                  <div className="text-gray-500 mb-1">Started thread in <span className="text-retro-purple">Digital Minimalism</span> • 1 week ago</div>
                  <div className="text-gray-700">Let's discuss text-based browsers and how they can improve focus...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
