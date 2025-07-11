import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, Search, Grid, List, SortDesc } from 'lucide-react';
import Project from '../components/features/Project';
import { useTheme } from '../contexts/ThemeContext';
import { Header } from '../components';

const ProjectPage: React.FC = () => {
  const { isDarkMode, getGlassCardClass, toggleTheme } = useTheme();
  const [activeProject, setActiveProject] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock user and functions for header
  const user = null; // You can replace this with actual user state
  const handleLogout = () => console.log('Logout');
  const scrollToSection = (sectionId: string) => {
    // For project page, we don't need section scrolling
    console.log('Scroll to section:', sectionId);
  };

  const categories = ['All', 'Residential', 'Commercial', 'Smart Buildings', 'Sustainable'];
  const sortOptions = ['Latest', 'Oldest', 'Name A-Z', 'Name Z-A', 'Progress', 'Investment'];

  return (
    <>
      <Header 
        isDarkMode={isDarkMode}
        scrollY={scrollY}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        user={user}
        handleLogout={handleLogout}
      />
      
      {/* Main Content with proper spacing for header */}
      <div className={`min-h-screen pt-20 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
          }`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
            isDarkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
          }`}></div>
          <div className={`absolute top-3/4 left-1/2 w-64 h-64 rounded-full blur-2xl animate-pulse delay-2000 ${
            isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/5'
          }`}></div>
        </div>

        <div className="relative z-10">
          {/* Enhanced Page Header Section */}
          <div className={`${getGlassCardClass()} border-b ${
            isDarkMode ? 'border-white/10' : 'border-gray-200/50'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-8">
                <div className="flex items-center space-x-4">
                  <Link
                    to="/"
                    className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 group ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Home</span>
                  </Link>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <h1 className={`text-4xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        Our Projects
                      </span>
                    </h1>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Explore our innovative smart building solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {/* Enhanced View Mode Toggle */}
                  <div className={`flex rounded-xl ${getGlassCardClass()} p-1 ${
                    isDarkMode ? 'shadow-lg shadow-black/20' : 'shadow-md'
                  }`}>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid'
                          ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg transform scale-105'
                          : isDarkMode 
                            ? 'text-gray-400 hover:text-white hover:bg-white/10' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        viewMode === 'list'
                          ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg transform scale-105'
                          : isDarkMode 
                            ? 'text-gray-400 hover:text-white hover:bg-white/10' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Filters and Search Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className={`${getGlassCardClass()} rounded-2xl p-8 mb-8 ${
              isDarkMode ? 'shadow-2xl shadow-black/20' : 'shadow-xl'
            }`}>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Enhanced Search Bar */}
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Search Projects
                  </label>
                  <div className="relative">
                    <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="text"
                      placeholder="Search by name, type, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent ${
                        isDarkMode
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 hover:bg-white/15'
                          : 'bg-white/70 border-gray-200 text-gray-900 placeholder-gray-500 hover:bg-white focus:bg-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Enhanced Category Filter */}
                <div className="lg:w-56">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Category
                  </label>
                  <div className="relative">
                    <Filter className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className={`w-full pl-12 pr-10 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none cursor-pointer ${
                        isDarkMode
                          ? 'bg-white/10 border-white/20 text-white hover:bg-white/15'
                          : 'bg-white/70 border-gray-200 text-gray-900 hover:bg-white focus:bg-white'
                      }`}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Enhanced Sort Options */}
                <div className="lg:w-56">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Sort By
                  </label>
                  <div className="relative">
                    <SortDesc className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className={`w-full pl-12 pr-10 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none cursor-pointer ${
                        isDarkMode
                          ? 'bg-white/10 border-white/20 text-white hover:bg-white/15'
                          : 'bg-white/70 border-gray-200 text-gray-900 hover:bg-white focus:bg-white'
                      }`}
                    >
                      {sortOptions.map((option) => (
                        <option key={option} value={option} className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Enhanced Active Filters Display */}
              {(searchTerm || filterCategory !== 'All' || sortBy !== 'Latest') && (
                <div className="mt-6 pt-6 border-t border-gray-200/20">
                  <div className="flex flex-wrap gap-3">
                    <span className={`text-sm font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Active Filters:
                    </span>
                    {searchTerm && (
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${
                        isDarkMode
                          ? 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300'
                          : 'bg-cyan-100 border-cyan-200 text-cyan-700'
                      }`}>
                        Search: "{searchTerm}"
                      </span>
                    )}
                    {filterCategory !== 'All' && (
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${
                        isDarkMode
                          ? 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300'
                          : 'bg-emerald-100 border-emerald-200 text-emerald-700'
                      }`}>
                        Category: {filterCategory}
                      </span>
                    )}
                    {sortBy !== 'Latest' && (
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${
                        isDarkMode
                          ? 'bg-purple-500/20 border-purple-400/30 text-purple-300'
                          : 'bg-purple-100 border-purple-200 text-purple-700'
                      }`}>
                        Sort: {sortBy}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Project Grid/List */}
            <div className={`${getGlassCardClass()} rounded-2xl overflow-hidden ${
              isDarkMode ? 'shadow-2xl shadow-black/20' : 'shadow-xl'
            }`}>
              <div className={`px-8 py-6 border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200/50'}`}>
                <div className="flex items-center justify-between">
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Project Portfolio
                  </h2>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300' 
                      : 'bg-gradient-to-r from-cyan-100 to-emerald-100 text-cyan-700'
                  }`}>
                    {viewMode === 'grid' ? 'Grid View' : 'List View'}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <Project
                  activeProject={activeProject}
                  setActiveProject={setActiveProject}
                  isDarkMode={isDarkMode}
                  getGlassCardClass={getGlassCardClass}
                  itemsPerPageOptions={[6, 9, 12, 18]}
                  defaultItemsPerPage={9}
                  showPaginationInfo={true}
                  enableItemsPerPageSelector={true}
                  maxPaginationButtons={7}
                  onPageChange={(page, itemsPerPage) => {
                    console.log(`Page ${page}, ${itemsPerPage} items per page`);
                  }}
                />
              </div>
            </div>

            {/* Enhanced Statistics Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Project Excellence
                  </span>
                </h2>
                <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Delivering cutting-edge smart building solutions with unmatched quality and innovation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`${getGlassCardClass()} rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? 'hover:shadow-2xl hover:shadow-cyan-500/10' : 'hover:shadow-xl'
                }`}>
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">50+</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Completed Projects
                  </h3>
                  <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Successfully delivered smart building solutions across various sectors with cutting-edge technology
                  </p>
                </div>

                <div className={`${getGlassCardClass()} rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? 'hover:shadow-2xl hover:shadow-purple-500/10' : 'hover:shadow-xl'
                }`}>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">98%</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Client Satisfaction
                  </h3>
                  <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Our commitment to excellence reflected in outstanding client feedback and premium service ratings
                  </p>
                </div>

                <div className={`${getGlassCardClass()} rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? 'hover:shadow-2xl hover:shadow-orange-500/10' : 'hover:shadow-xl'
                }`}>
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">15+</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Active Projects
                  </h3>
                  <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Currently developing innovative solutions for future smart cities with sustainable technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
