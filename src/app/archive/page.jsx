"use client";
import { useEffect, useState } from "react";
import { ArchiveCarouselComponent } from "../common/components/projects/ArchiveCarouselComponent";

const ArchivePage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortOrder, setSortOrder] = useState('position'); // 'position', 'a-z', 'z-a', 'chronological'

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleSortToggle = () => {
    if (sortOrder === 'position') {
      setSortOrder('a-z');
    } else if (sortOrder === 'a-z') {
      setSortOrder('z-a');
    } else {
      setSortOrder('a-z');
    }
  };

  const handleChronologicalToggle = () => {
    console.log('Current sort order:', sortOrder);
    if (sortOrder === 'chronological-asc') {
      setSortOrder('chronological-desc');
    } else {
      setSortOrder('chronological-asc');
    }
    console.log('New sort order will be:', sortOrder === 'chronological-asc' ? 'chronological-desc' : 'chronological-asc');
  };

  const getSortedProjects = () => {
    if (!projects.length) return [];
    
    const sortedProjects = [...projects];
    
    if (sortOrder === 'a-z') {
      return sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'z-a') {
      return sortedProjects.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === 'chronological-asc') {
      console.log('Sorting chronologically ascending');
      return sortedProjects.sort((a, b) => {
        // Get date for comparison - prioritize monthYear, fallback to year
        const getDateForSort = (project) => {
          if (project.monthYear) {
            return project.monthYear; // Already in YYYY-MM format
          } else if (project.year) {
            return `${project.year}-01`; // Convert year to YYYY-01
          } else {
            return '9999-12'; // Projects without dates go to end
          }
        };
        
        const dateA = getDateForSort(a);
        const dateB = getDateForSort(b);
        console.log(`Comparing ${a.name}: ${dateA} vs ${b.name}: ${dateB}`);
        return dateA.localeCompare(dateB);
      });
    } else if (sortOrder === 'chronological-desc') {
      console.log('Sorting chronologically descending');
      return sortedProjects.sort((a, b) => {
        // Get date for comparison - prioritize monthYear, fallback to year
        const getDateForSort = (project) => {
          if (project.monthYear) {
            return project.monthYear; // Already in YYYY-MM format
          } else if (project.year) {
            return `${project.year}-01`; // Convert year to YYYY-01
          } else {
            return '0000-01'; // Projects without dates go to beginning
          }
        };
        
        const dateA = getDateForSort(a);
        const dateB = getDateForSort(b);
        console.log(`Comparing ${a.name}: ${dateA} vs ${b.name}: ${dateB}`);
        return dateB.localeCompare(dateA);
      });
    } else {
      // Default: sort by position (admin-set order)
      return sortedProjects.sort((a, b) => (a.position || 0) - (b.position || 0));
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/projects");
        const data = await response.json();
        if (response.ok) {
          // Filter only active projects and sort by position
          const activeProjects = data
            .filter(project => project.isProjectActive)
            .sort((a, b) => (a.position || 0) - (b.position || 0));
          setProjects(activeProjects);
        } else {
          console.error("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold uppercase">Project Archive</h1>
          <a
            href="/"
            className="text-sm bg-text-primary text-bg-primary px-4 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Home
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        {/* Left Side - 3 Column Project Directory */}
        <div className="w-full lg:w-1/2 border-r-0 lg:border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
            <button
                onClick={handleChronologicalToggle}
                className="text-sm text-gray-600 hover:text-text-primary hover:underline transition-colors duration-200"
              >
                chronological
              </button>
              
              {/* Minimalist Sort Button */}
              <button
                onClick={handleSortToggle}
                className="text-sm text-gray-600 hover:text-text-primary hover:underline transition-colors duration-200"
              >
                alphabetical
              </button>
            </div>
            
            {/* 3 Column List Layout */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1">
              {getSortedProjects().map((project, index) => (
                <div
                  key={project._id}
                  onClick={() => handleProjectSelect(project)}
                  className={`py-2 px-1 cursor-pointer transition-colors duration-200 hover:bg-gray-50 ${
                    selectedProject?._id === project._id
                      ? 'bg-gray-100 border-l-4 border-text-primary'
                      : ''
                  }`}
                >
                  <div className="text-left">
                    {/* Project Name with Date */}
                    <span className="text-sm font-medium text-gray-900">
                      {project.name}
                      {(() => {
                        if (project.monthYear) {
                          // Convert YYYY-MM to MM/YYYY
                          const [year, month] = project.monthYear.split('-');
                          return (
                            <span className="text-gray-600 font-normal">
                              {' '}({month}/{year})
                            </span>
                          );
                        } else if (project.year) {
                          // If only year is available, show as 01/YYYY
                          return (
                            <span className="text-gray-600 font-normal">
                              {' '}(01/{project.year})
                            </span>
                          );
                        }
                        return null;
                      })()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {getSortedProjects().length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No projects found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Rectangle Area for Image Slider */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {selectedProject ? (
            <>
              {/* Project Info Header */}
              <div className="p-3 lg:p-4 border-b border-gray-200">
                <h2 className="text-base lg:text-lg font-bold mb-1">{selectedProject.name}</h2>
                {selectedProject.title && (
                  <p className="text-gray-600 text-xs lg:text-sm">{selectedProject.title}</p>
                )}
                {selectedProject.year && (
                  <p className="text-xs text-gray-500 mt-1">Year: {selectedProject.year}</p>
                )}
              </div>
              
              {/* Image Slider Area */}
              <div className="flex-1">
                <div className="w-full h-72 lg:aspect-video lg:h-auto overflow-hidden relative">
                  <ArchiveCarouselComponent key={selectedProject._id} project={selectedProject} />
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">Select a Project</h3>
                <p className="text-gray-500">Click on any project from the directory to view its details and image slider.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
