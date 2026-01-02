"use client"

import React, { useState } from 'react';
import { Home, Compass, Bell, MessageSquare, Bookmark, TrendingUp, Menu, X } from 'lucide-react';

const OrbSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 1, label: 'Home', icon: Home, color: 'bg-blue-500' },
    { id: 2, label: 'Explore', icon: Compass, color: 'bg-purple-500' },
    { id: 3, label: 'Notifications', icon: Bell, color: 'bg-pink-500' },
    { id: 4, label: 'Messages', icon: MessageSquare, color: 'bg-green-500' },
    { id: 5, label: 'Bookmarks', icon: Bookmark, color: 'bg-orange-500' },
    { id: 6, label: 'Trending', icon: TrendingUp, color: 'bg-red-500' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative z-50 w-16 h-16 rounded-full bg-neutral-400 cursor-pointer hover:bg-neutral-600 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isExpanded ? 'rotate-90' : ''
          }`}
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {menuItems.map((item, index) => {
          const angle = (index * 60) - 90;
          const radius = 140;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={item.id}
              className={`absolute z-40 top-0 left-0 transition-all duration-500 ease-out ${
                isExpanded
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
              style={{
                transform: isExpanded
                  ? `translate(${x}px, ${y}px)`
                  : 'translate(0, 0)',
                transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
              }}
            >
              <div className="relative group">
                <button
                  className={`w-12 h-12 rounded-full ${item.color} shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </button>
                <div
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                >
                  <div className="bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-xl text-sm font-medium whitespace-nowrap">
                    {item.label}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-white" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {isExpanded && (
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-lg z-30"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </div>
    </div>
  );
};

export default OrbSidebar;