import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects, ProjectType } from '../data/projects';

type FilterType = 'all' | 'beginner' | 'intermediate' | 'advanced' | 'other';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my AWS cloud projects from beginner to advanced level implementations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-indigo-600 text-white shadow-lg transform scale-105' 
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('beginner')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'beginner' 
                ? 'bg-indigo-600 text-white shadow-lg transform scale-105' 
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            Beginner Projects
          </button>
          <button 
            onClick={() => setFilter('intermediate')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'intermediate' 
                ? 'bg-indigo-600 text-white shadow-lg transform scale-105' 
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            Intermediate
          </button>
          <button 
            onClick={() => setFilter('advanced')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'advanced' 
                ? 'bg-indigo-600 text-white shadow-lg transform scale-105' 
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            Advanced
          </button>
          <button 
            onClick={() => setFilter('other')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'other' 
                ? 'bg-indigo-600 text-white shadow-lg transform scale-105' 
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            Other
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;