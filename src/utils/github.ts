import { ProjectType } from '../types';

// Image placeholders for projects based on language
const getImageForLanguage = (language: string) => {
  const images = {
    JavaScript: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    TypeScript: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    HTML: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    CSS: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Python: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Java: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'C#': 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    default: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };
  
  return images[language as keyof typeof images] || images.default;
};

// Function to fetch GitHub repositories
export const fetchGithubRepos = async (): Promise<ProjectType[]> => {
  const username = 'tareqnidal';
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  
  const repos = await response.json();
  
  // Transform the GitHub API response into our ProjectType format
  return repos.map((repo: any) => ({
    id: repo.id.toString(),
    name: repo.name,
    description: repo.description || 'No description provided',
    html_url: repo.html_url,
    homepage: repo.homepage || '',
    topics: repo.topics || [],
    language: repo.language || 'Unknown',
    image: getImageForLanguage(repo.language)
  }));
};