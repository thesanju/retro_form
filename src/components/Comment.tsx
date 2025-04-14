
import React from 'react';
import { Comment as CommentType } from '../types/forum';
import UserBadge from './UserBadge';
import VoteButton from './VoteButton';

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="retro-card p-4 mb-4">
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <VoteButton 
            upvotes={comment.upvotes} 
            onVote={() => console.log('Vote on comment:', comment.id)} 
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <UserBadge user={comment.author} showAvatar createdAt={comment.createdAt} />
            {comment.isEdited && (
              <span className="text-xs text-gray-500 font-mono">edited</span>
            )}
          </div>
          
          <div className="text-gray-800 mb-3 whitespace-pre-line">
            {comment.content}
          </div>
          
          <div className="flex justify-end gap-2 text-xs font-mono">
            <button className="retro-button py-1 px-2 text-xs">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
