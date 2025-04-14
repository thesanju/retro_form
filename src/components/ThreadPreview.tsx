
import React from 'react';
import { Link } from 'react-router-dom';
import { Thread } from '../types/forum';
import { MessageSquare, Eye, ArrowUp, Pin } from 'lucide-react';
import UserBadge from './UserBadge';

interface ThreadPreviewProps {
  thread: Thread;
}

const ThreadPreview: React.FC<ThreadPreviewProps> = ({ thread }) => {
  return (
    <Link to={`/thread/${thread.id}`}>
      <div className="retro-card hover:border-retro-purple transition-all duration-200 p-4 mb-3 pixel-shadow">
        <div className="flex items-start">
          <div className="mr-3 flex flex-col items-center bg-muted p-2 rounded-sm space-y-1">
            <ArrowUp size={16} className="text-gray-500" />
            <span className="text-sm font-mono">{thread.upvotes}</span>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {thread.isSticky && <Pin size={14} className="text-retro-yellow" />}
              <h3 className="font-pixel text-lg">{thread.title}</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{thread.content}</p>
            
            <div className="flex justify-between items-center">
              <UserBadge user={thread.author} showAvatar createdAt={thread.createdAt} />
              
              <div className="flex items-center space-x-4 text-xs text-gray-500 font-mono">
                <div className="flex items-center">
                  <MessageSquare size={14} className="mr-1" />
                  <span>{thread.commentCount}</span>
                </div>
                <div className="flex items-center">
                  <Eye size={14} className="mr-1" />
                  <span>{thread.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ThreadPreview;
