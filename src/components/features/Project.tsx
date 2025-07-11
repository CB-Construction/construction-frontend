import React, { useState } from "react";
import {
  Star,
  ArrowRight,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useProjects } from "../../hooks/useProjects";

/**
 * Project Component with Advanced Pagination
 *
 * @param activeProject - Index of currently active/highlighted project
 * @param setActiveProject - Function to set active project index
 * @param isDarkMode - Whether dark mode is enabled
 * @param getGlassCardClass - Function returning glassmorphism CSS classes
 * @param itemsPerPageOptions - Array of options for items per page selector (default: [3, 6, 9, 12])
 * @param defaultItemsPerPage - Default number of items per page (default: 6)
 * @param showPaginationInfo - Whether to show page info like "Page 1 of 3 (15 total projects)" (default: true)
 * @param enableItemsPerPageSelector - Whether to show items per page dropdown (default: true)
 * @param maxPaginationButtons - Maximum number of page buttons to show (default: 5)
 * @param onPageChange - Callback function called when page or items per page changes
 * @param customItemsPerPage - External control of items per page (overrides internal state)
 *
 * @example
 * // Basic usage
 * <Project
 *   activeProject={activeProject}
 *   setActiveProject={setActiveProject}
 *   isDarkMode={isDarkMode}
 *   getGlassCardClass={getGlassCardClass}
 * />
 *
 * @example
 * // Custom pagination settings
 * <Project
 *   activeProject={activeProject}
 *   setActiveProject={setActiveProject}
 *   isDarkMode={isDarkMode}
 *   getGlassCardClass={getGlassCardClass}
 *   itemsPerPageOptions={[4, 8, 12, 16]}
 *   defaultItemsPerPage={8}
 *   maxPaginationButtons={7}
 *   onPageChange={(page, itemsPerPage) => console.log(`Page ${page}, ${itemsPerPage} items`)}
 * />
 *
 * @example
 * // Minimal pagination (no selector, no info)
 * <Project
 *   activeProject={activeProject}
 *   setActiveProject={setActiveProject}
 *   isDarkMode={isDarkMode}
 *   getGlassCardClass={getGlassCardClass}
 *   enableItemsPerPageSelector={false}
 *   showPaginationInfo={false}
 *   defaultItemsPerPage={9}
 * />
 */
interface ProjectComponentProps {
  activeProject: number;
  setActiveProject: (index: number) => void;
  isDarkMode: boolean;
  getGlassCardClass: () => string;
  itemsPerPageOptions?: number[];
  defaultItemsPerPage?: number;
  showPaginationInfo?: boolean;
  enableItemsPerPageSelector?: boolean;
  maxPaginationButtons?: number;
  onPageChange?: (page: number, itemsPerPage: number) => void;
  customItemsPerPage?: number;
}

const Project: React.FC<ProjectComponentProps> = ({
  activeProject,
  setActiveProject,
  isDarkMode,
  getGlassCardClass,
  itemsPerPageOptions = [3, 6, 9, 12],
  defaultItemsPerPage = 6,
  showPaginationInfo = true,
  enableItemsPerPageSelector = true,
  maxPaginationButtons = 5,
  onPageChange,
  customItemsPerPage,
}) => {
  const { projects, loading, error, refetch } = useProjects();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(
    customItemsPerPage || defaultItemsPerPage
  );

  // Update items per page if customItemsPerPage changes
  React.useEffect(() => {
    if (customItemsPerPage && customItemsPerPage !== itemsPerPage) {
      setItemsPerPage(customItemsPerPage);
      setCurrentPage(1);
    }
  }, [customItemsPerPage, itemsPerPage]);

  // Pagination logic
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setActiveProject(0); // Reset active project when changing pages

    // Call optional callback
    if (onPageChange) {
      onPageChange(page, itemsPerPage);
    }
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page when changing items per page
    setActiveProject(0);

    // Call optional callback
    if (onPageChange) {
      onPageChange(1, items);
    }
  };

  // Pagination Component
  const PaginationControls = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-8 border-t border-cyan-400/20">
      {/* Items per page selector */}
      {enableItemsPerPageSelector && (
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <span
            className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Show:
          </span>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            className={`${getGlassCardClass()} border border-cyan-400/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {itemsPerPageOptions.map((option) => (
              <option
                key={option}
                value={option}
                className={isDarkMode ? "bg-gray-800" : "bg-white"}
              >
                {option}
              </option>
            ))}
          </select>
          <span
            className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            projects per page
          </span>
        </div>
      )}

      {/* Pagination info and controls */}
      <div className="flex items-center space-x-2">
        {showPaginationInfo && (
          <span
            className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mr-4`}
          >
            Page {currentPage} of {totalPages} ({projects.length} total
            projects)
          </span>
        )}

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg ${getGlassCardClass()} border border-cyan-400/30 transition-all duration-300 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
          }`}
        >
          <ChevronLeft
            className={`w-4 h-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          />
        </button>

        <div className="flex items-center space-x-1">
          {Array.from(
            { length: Math.min(totalPages, maxPaginationButtons) },
            (_, i) => {
              let pageNum;
              if (totalPages <= maxPaginationButtons) {
                pageNum = i + 1;
              } else if (
                currentPage <=
                Math.floor(maxPaginationButtons / 2) + 1
              ) {
                pageNum = i + 1;
              } else if (
                currentPage >=
                totalPages - Math.floor(maxPaginationButtons / 2)
              ) {
                pageNum = totalPages - maxPaginationButtons + 1 + i;
              } else {
                pageNum =
                  currentPage - Math.floor(maxPaginationButtons / 2) + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                    pageNum === currentPage
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg"
                      : `${getGlassCardClass()} border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`
                  }`}
                >
                  {pageNum}
                </button>
              );
            }
          )}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-lg ${getGlassCardClass()} border border-cyan-400/30 transition-all duration-300 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
          }`}
        >
          <ChevronRight
            className={`w-4 h-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          />
        </button>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              Showcasing our commitment to innovation and excellence in every
              smart building we create
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
            <span
              className={`ml-3 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Loading projects...
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              Showcasing our commitment to innovation and excellence in every
              smart building we create
            </p>
          </div>
          <div className="text-center py-20">
            <div
              className={`text-lg ${isDarkMode ? "text-red-400" : "text-red-600"} mb-4`}
            >
              Error loading projects: {error}
            </div>
            <p
              className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4`}
            >
              Please check your database connection and try again.
            </p>
            <button
              onClick={refetch}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p
            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
          >
            Showcasing our commitment to innovation and excellence in every
            smart building we create
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={startIndex + index}
              className={`group relative ${getGlassCardClass()} rounded-3xl overflow-hidden card-hover hover:shadow-2xl hover:shadow-cyan-500/20 ${
                startIndex + index === activeProject
                  ? "ring-2 ring-cyan-400/50 shadow-xl shadow-cyan-500/30 animate-glow"
                  : ""
              }`}
              onMouseEnter={() => setActiveProject(startIndex + index)}
            >
              {/* ...existing code... */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
                    <span
                      className={`${project.status === "Completed" ? "text-emerald-400" : project.status === "In Progress" ? "text-cyan-400" : "text-purple-400"}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm text-yellow-400 flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {project.rating}
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm text-emerald-400 font-semibold">
                  {project.investment}
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-cyan-400 font-semibold mb-2">
                  {project.category}
                </div>
                <h3
                  className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} mb-3`}
                >
                  {project.title}
                </h3>
                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4 text-sm leading-relaxed`}
                >
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Progress
                    </span>
                    <span className="text-sm font-semibold text-cyan-400">
                      {project.progress}%
                    </span>
                  </div>
                  <div
                    className={`w-full ${isDarkMode ? "bg-gray-700" : "bg-gradient-to-r from-orange-100 to-amber-100"} rounded-full h-2`}
                  >
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-2 rounded-full progress-bar"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 ${isDarkMode ? "bg-white/10" : "bg-gradient-to-r from-orange-50 to-amber-50 shadow-sm"} rounded-lg text-xs text-emerald-400 border border-emerald-400/20 hover:bg-emerald-400/10 transition-colors`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Completion: {project.completion}
                  </span>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center text-sm group/btn">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show pagination only if there are projects and more than one page */}
        {projects.length > 0 && totalPages > 1 && <PaginationControls />}
      </div>
    </section>
  );
};

export default Project;
