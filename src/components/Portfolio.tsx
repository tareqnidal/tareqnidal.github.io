import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { fetchGithubRepos } from '../utils/github';
import { ProjectType } from '../types';

type FilterType = 'ALL' | 'FRONT END' | 'BACK END';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('ALL');
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const repos = await fetchGithubRepos();
        setProjects(repos);
      } catch (error) {
        console.error('Failed to fetch repositories:', error);
        // Fallback to placeholder projects if GitHub API fails
        setProjects([
          {
            id: '1',
            name: 'Project 1',
            description: 'A sample project description',
            html_url: '#',
            homepage: '',
            topics: ['frontend'],
            language: 'JavaScript',
            image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: '2',
            name: 'Project 2',
            description: 'Another sample project',
            html_url: '#',
            homepage: '',
            topics: ['backend'],
            language: 'Python',
            image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects = projects.filter(project => {
    if (filter === 'ALL') return true;
    if (filter === 'FRONT END') return project.topics.includes('frontend') || project.language === 'JavaScript' || project.language === 'TypeScript';
    if (filter === 'BACK END') return project.topics.includes('backend') || ['Python', 'Java', 'C#', 'Go'].includes(project.language || '');
    return true;
  });

  return (
    <section>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <h3 className="text-2xl font-bold">My Work</h3>
        <div className="flex gap-4">
          {(['ALL', 'FRONT END', 'BACK END'] as FilterType[]).map((type) => (
            <button 
              key={type}
              className={`px-2 py-1 transition-colors ${filter === type ? 'text-white font-medium' : 'text-gray-400'} hover:text-white`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;