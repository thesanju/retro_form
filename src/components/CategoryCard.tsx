
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types/forum';
import { Cpu, Globe, Square, Sparkles, MinusSquare, MessageSquare } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cpu': return <Cpu size={22} className="text-retro-cyan" />;
      case 'globe': return <Globe size={22} className="text-retro-purple" />;
      case 'square': return <Square size={22} className="text-retro-pink" />;
      case 'sparkles': return <Sparkles size={22} className="text-retro-yellow" />;
      case 'minus-square': return <MinusSquare size={22} className="text-retro-cyan" />;
      default: return <MessageSquare size={22} className="text-retro-purple" />;
    }
  };
  
  return (
    <Link to={`/category/${category.id}`}>
      <div className="retro-card hover:border-retro-purple transition-all duration-200 p-5 pixel-shadow hover:bg-gray-50">
        <div className="flex items-start">
          <div className="p-2 bg-muted rounded-sm">
            {getIcon(category.icon)}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-pixel mb-1 text-retro-dark hover:text-retro-purple transition-colors">{category.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{category.description}</p>
            <div className="flex justify-between text-xs text-gray-500 font-mono">
              <span className="bg-retro-purple/10 px-2 py-1 rounded-sm">{category.threadCount} threads</span>
              {category.lastActivity && (
                <span className="bg-retro-cyan/10 px-2 py-1 rounded-sm">Last active: {new Date(category.lastActivity).toLocaleDateString()}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
