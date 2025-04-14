
import React from 'react';
import { User } from '../types/forum';

interface UserBadgeProps {
  user: User;
  showAvatar?: boolean;
  createdAt?: string;
  compact?: boolean;
}

const UserBadge: React.FC<UserBadgeProps> = ({ 
  user, 
  showAvatar = false, 
  createdAt,
  compact = false 
}) => {
  return (
    <div className={`flex items-center ${compact ? 'text-xs' : 'text-sm'}`}>
      {showAvatar && (
        <div className="mr-2">
          <img 
            src={user.avatar || 'https://i.pravatar.cc/150?img=1'} 
            alt={user.username} 
            className={`rounded-none border border-gray-300 ${compact ? 'w-6 h-6' : 'w-8 h-8'}`}
          />
        </div>
      )}
      <div>
        <div className="font-mono text-retro-purple">{user.username}</div>
        {createdAt && !compact && (
          <div className="text-xs text-gray-500">
            {new Date(createdAt).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBadge;
