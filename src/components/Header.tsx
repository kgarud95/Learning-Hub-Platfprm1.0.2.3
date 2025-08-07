import React, { useState } from 'react';
import { Search, ShoppingCart, Bell, User, Globe, ChevronDown, Menu, BookOpen } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = [
    { name: 'Development', subcategories: ['Web Development', 'Mobile Apps', 'Programming Languages', 'Game Development'] },
    { name: 'Business', subcategories: ['Entrepreneurship', 'Finance', 'Marketing', 'Management'] },
    { name: 'Design', subcategories: ['UX/UI Design', 'Graphic Design', '3D Animation', 'Fashion Design'] },
    { name: 'Marketing', subcategories: ['Digital Marketing', 'Social Media', 'SEO', 'Content Marketing'] },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">LearnHub</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setIsCategoryOpen(true)}
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <span className="font-medium">Categories</span>
                  <ChevronDown size={16} />
                </button>
                
                {/* Mega Dropdown */}
                {isCategoryOpen && (
                  <div 
                    className="absolute top-full left-0 w-96 bg-white shadow-xl border border-gray-200 rounded-lg mt-2 p-6"
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {categories.map((category) => (
                        <div key={category.name}>
                          <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                          <ul className="space-y-1">
                            {category.subcategories.map((sub) => (
                              <li key={sub}>
                                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for courses, instructors, or topics..."
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Globe size={18} />
              <span className="text-sm">EN</span>
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                For Learners
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                For Teams
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Teach on LearnHub
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button className="relative text-gray-700 hover:text-blue-600 transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </button>
              
              <button className="relative text-gray-700 hover:text-blue-600 transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="hidden md:flex items-center space-x-2">
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors">
                  Log in
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors">
                  Sign up
                </button>
              </div>

              <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg"
                />
                <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <div className="space-y-2">
                <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Categories</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">For Learners</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">For Teams</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Teach on LearnHub</a>
              </div>
              <div className="flex space-x-2 pt-4 border-t border-gray-200">
                <button className="flex-1 py-2 text-blue-600 border border-blue-600 rounded-lg font-medium">
                  Log in
                </button>
                <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-medium">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}