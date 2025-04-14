
import React from 'react';
import { categories } from '../data/mockData';
import Navbar from '../components/Navbar';
import CategoryCard from '../components/CategoryCard';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      
      <div className="retro-container">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-pixel mb-3">RETRO<span className="text-retro-purple">FORUM</span></h1>
          <p className="text-lg font-mono text-gray-600 max-w-2xl mx-auto">
            A text-based community for retro tech enthusiasts, web nostalgia, and digital minimalists
          </p>
        </header>
        
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-pixel">Discussion Categories</h2>
          </div>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
        
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500 font-mono">
          <p>RetroForum © 2025 • A minimalist, text-based community</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
