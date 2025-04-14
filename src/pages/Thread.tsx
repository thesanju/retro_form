
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getThreadById, getCommentsByThread, getCategoryById } from '../data/mockData';
import Navbar from '../components/Navbar';
import Comment from '../components/Comment';
import UserBadge from '../components/UserBadge';
import VoteButton from '../components/VoteButton';
import { ArrowLeft, MessageSquare } from 'lucide-react';

const Thread: React.FC = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const thread = getThreadById(threadId || '');
  const comments = getCommentsByThread(threadId || '');
  const category = thread ? getCategoryById(thread.categoryId) : undefined;
  
  const [replyContent, setReplyContent] = useState('');
  
  if (!thread || !category) {
    return (
      <div className="min-h-screen bg-retro-background">
        <Navbar />
        <div className="retro-container text-center">
          <h2 className="text-2xl font-pixel mb-4 text-retro-purple">Thread not found</h2>
          <Link to="/" className="retro-button inline-flex items-center bg-retro-purple text-white hover:bg-retro-purple/90">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      
      <div className="retro-container">
        <div className="mb-6">
          <Link 
            to={`/category/${category.id}`} 
            className="text-sm font-mono text-gray-500 hover:text-retro-purple inline-flex items-center mb-2"
          >
            <ArrowLeft size={14} className="mr-1" />
            Back to {category.name}
          </Link>
          
          <div className="retro-card p-5 border-t-4 border-t-retro-purple">
            <div className="flex">
              <div className="mr-4">
                <VoteButton 
                  upvotes={thread.upvotes} 
                  onVote={(direction) => console.log(`Vote ${direction} on thread`, thread.id)} 
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-2xl font-pixel mb-3 text-retro-dark">{thread.title}</h1>
                
                <div className="mb-6 whitespace-pre-line text-gray-800">
                  {thread.content}
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                  <UserBadge user={thread.author} showAvatar createdAt={thread.createdAt} />
                  
                  <div className="text-xs text-gray-500 font-mono flex items-center bg-retro-purple/10 px-3 py-1 rounded-sm">
                    <MessageSquare size={14} className="mr-1 text-retro-purple" />
                    {thread.commentCount} comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-pixel mb-4 text-retro-purple">{comments.length} Comments</h2>
          
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
        
        <div className="retro-card p-5 border-l-4 border-l-retro-cyan">
          <h3 className="text-lg font-pixel mb-3 text-retro-cyan">Leave a Reply</h3>
          
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-none mb-3 font-mono text-sm h-32 focus:border-retro-purple focus:ring-1 focus:ring-retro-purple outline-none"
            placeholder="Write your reply here..."
          />
          
          <div className="flex justify-end">
            <button className="retro-button bg-retro-cyan text-white hover:bg-retro-cyan/90">
              Post Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
