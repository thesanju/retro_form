
import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface VoteButtonProps {
  upvotes: number;
  onVote: (direction: 'up' | 'down') => void;
}

const VoteButton: React.FC<VoteButtonProps> = ({ upvotes, onVote }) => {
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  
  const handleVote = (direction: 'up' | 'down') => {
    // Toggle vote if clicking the same direction
    if (userVote === direction) {
      setUserVote(null);
    } else {
      setUserVote(direction);
    }
    onVote(direction);
  };
  
  return (
    <div className="flex flex-col items-center space-y-1 bg-muted px-2 py-1 rounded-sm">
      <button 
        onClick={() => handleVote('up')}
        className={`transition-colors ${userVote === 'up' ? 'text-retro-purple' : 'text-gray-500 hover:text-gray-800'}`}
      >
        <ArrowUp size={16} />
      </button>
      
      <span className="text-sm font-mono">{upvotes}</span>
      
      <button 
        onClick={() => handleVote('down')}
        className={`transition-colors ${userVote === 'down' ? 'text-retro-pink' : 'text-gray-500 hover:text-gray-800'}`}
      >
        <ArrowDown size={16} />
      </button>
    </div>
  );
};

export default VoteButton;
