
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoryById, getThreadsByCategory } from '../data/mockData';
import ThreadPreview from '../components/ThreadPreview';
import Navbar from '../components/Navbar';
import { PlusSquare, ArrowLeft } from 'lucide-react';

const Category: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');
  const threads = getThreadsByCategory(categoryId || '');
  
  if (!category) {
    return (
      <div className="min-h-screen bg-retro-background">
        <Navbar />
        <div className="retro-container text-center">
          <h2 className="text-2xl font-pixel mb-4">Category not found</h2>
          <Link to="/" className="retro-button inline-flex items-center">
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link to="/" className="text-sm font-mono text-gray-500 hover:text-retro-purple inline-flex items-center mb-2">
              <ArrowLeft size={14} className="mr-1" />
              Back to Categories
            </Link>
            <h1 className="text-2xl font-pixel">{category.name}</h1>
            <p className="text-gray-600">{category.description}</p>
          </div>
          
          <button className="retro-button flex items-center gap-1">
            <PlusSquare size={16} />
            <span>New Thread</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {threads.length > 0 ? (
            threads.map((thread) => (
              <ThreadPreview key={thread.id} thread={thread} />
            ))
          ) : (
            <div className="retro-card p-8 text-center">
              <p className="text-lg font-pixel mb-4">No threads yet</p>
              <p className="text-gray-600 mb-4">Be the first to start a discussion!</p>
              <button className="retro-button">Start a New Thread</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
