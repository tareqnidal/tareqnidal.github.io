import React from 'react';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-video bg-gray-800 shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <img 
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.description}</p>
          <div className="flex gap-2 mb-3">
            {project.language && (
              <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                {project.language}
              </span>
            )}
            {project.topics.slice(0, 2).map(topic => (
              <span key={topic} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                {topic}
              </span>
            ))}
          </div>
          <a 
            href={project.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium inline-block hover:bg-gray-100 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;