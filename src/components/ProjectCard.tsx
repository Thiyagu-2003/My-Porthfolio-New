import React, { useState } from 'react';
import { ExternalLink, Github as GitHub, Eye, Code } from 'lucide-react';
import { ProjectType } from '../data/projects';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02] group border border-gray-100 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-52 group-hover:h-56 transition-all duration-500 ease-out">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-110 rotate-1' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end transition-all duration-500 ease-out group-hover:from-black/80">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              {/* <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ease-out cursor-pointer border border-white/20">
                {project.category.toUpperCase().replace('-', ' ')}
              </span> */}
              <div className="flex space-x-2">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 hover:scale-110 hover:rotate-12 transition-all duration-300 ease-out shadow-lg"
                    title="View Code"
                  >
                    <GitHub size={16} className="text-white" />
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 hover:scale-110 hover:-rotate-12 transition-all duration-300 ease-out shadow-lg"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 transition-all duration-500 ease-out">
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300 ease-out transform group-hover:translate-x-1">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300 ease-out">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 transition-all duration-300 ease-out">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="relative text-xs px-3 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-500 ease-out cursor-pointer transform hover:-translate-y-1 border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600 font-medium opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 hover:from-indigo-500/10 hover:to-purple-500/10 rounded-lg transition-all duration-300 ease-out"></div>
              <span className="relative z-10">{tech}</span>
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 transition-all duration-300 ease-out">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 ease-out text-sm shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 border border-indigo-500/20"
            >
              <Eye size={16} className="mr-2 transition-transform duration-300 ease-out group-hover:scale-110" />
              View Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center px-4 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 rounded-lg font-medium transition-all duration-300 ease-out text-sm shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 hover:border-indigo-700 dark:hover:border-indigo-300 ${
                project.demo ? 'flex-1' : 'w-full'
              }`}
            >
              <Code size={16} className="mr-2 transition-transform duration-300 ease-out group-hover:scale-110" />
              Project Code
            </a>
          )}
        </div>
        
        {!project.demo && !project.github && (
          <div className="text-center py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-out">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Project details available upon request
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;