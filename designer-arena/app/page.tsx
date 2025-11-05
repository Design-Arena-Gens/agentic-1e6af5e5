'use client';

import { useState } from 'react';
import { Trophy, Users, Sparkles, Heart, MessageCircle, Eye } from 'lucide-react';

interface Design {
  id: number;
  designer: string;
  title: string;
  image: string;
  likes: number;
  comments: number;
  views: number;
  category: string;
}

export default function DesignerArena() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedDesigns, setLikedDesigns] = useState<Set<number>>(new Set());

  const designs: Design[] = [
    {
      id: 1,
      designer: 'Alex Chen',
      title: 'Futuristic UI Dashboard',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop',
      likes: 342,
      comments: 28,
      views: 1240,
      category: 'ui'
    },
    {
      id: 2,
      designer: 'Maria Garcia',
      title: 'Minimalist Brand Identity',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      likes: 567,
      comments: 45,
      views: 2100,
      category: 'branding'
    },
    {
      id: 3,
      designer: 'Jordan Lee',
      title: 'Mobile App Redesign',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      likes: 892,
      comments: 67,
      views: 3450,
      category: 'mobile'
    },
    {
      id: 4,
      designer: 'Sam Taylor',
      title: '3D Abstract Art',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=600&fit=crop',
      likes: 423,
      comments: 34,
      views: 1890,
      category: '3d'
    },
    {
      id: 5,
      designer: 'Riley Park',
      title: 'E-commerce UI Kit',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      likes: 678,
      comments: 52,
      views: 2567,
      category: 'ui'
    },
    {
      id: 6,
      designer: 'Casey Morgan',
      title: 'Typography Poster',
      image: 'https://images.unsplash.com/photo-1620421680010-0766ff230392?w=800&h=600&fit=crop',
      likes: 234,
      comments: 19,
      views: 987,
      category: 'typography'
    }
  ];

  const categories = ['all', 'ui', 'branding', 'mobile', '3d', 'typography'];

  const filteredDesigns = selectedCategory === 'all'
    ? designs
    : designs.filter(d => d.category === selectedCategory);

  const handleLike = (id: number) => {
    setLikedDesigns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">Designer Arena</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all">
                Login
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all">
                Upload Design
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Where Creativity Competes
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Showcase your designs, compete with talented designers worldwide, and climb the leaderboard
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="bg-pink-500/20 p-3 rounded-lg">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">12,847</div>
                <div className="text-blue-200">Active Designers</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">45,291</div>
                <div className="text-blue-200">Designs Posted</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Trophy className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2,134</div>
                <div className="text-blue-200">Active Challenges</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map(design => (
            <div
              key={design.id}
              className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {design.designer.charAt(0)}
                  </div>
                  <span className="text-white font-medium">{design.designer}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{design.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <button
                    onClick={() => handleLike(design.id)}
                    className="flex items-center gap-1 text-white hover:text-pink-400 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${likedDesigns.has(design.id) ? 'fill-pink-500 text-pink-500' : ''}`}
                    />
                    <span>{design.likes + (likedDesigns.has(design.id) ? 1 : 0)}</span>
                  </button>
                  <div className="flex items-center gap-1 text-blue-200">
                    <MessageCircle className="w-5 h-5" />
                    <span>{design.comments}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-200">
                    <Eye className="w-5 h-5" />
                    <span>{design.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-blue-200">
            <p>&copy; 2025 Designer Arena. Where creativity meets competition.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
