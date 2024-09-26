import React, { useState, useCallback } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { currentProjectData } from "@/content/data";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import { useTheme } from '@/context/theme-context';


interface Project {
  thumbnail: string;
  thumbnail_dark: string;
  github_link?: string;
  project_link?: string;
  title: string;
  description: string;
  technology: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme(); // Use the theme

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <Card
      className="mt-4 shadow-none flex flex-col justify-between w-full transition-all ease-in-out duration-300 transform hover:scale-100 hover:-translate-y-1 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.08), transparent 50%)`,
        }}
      />
      <div className="flex flex-col p-4 relative z-10">
        <div className="flex items-start justify-between">
          
          <img
            alt="thumbnail"
            src={theme === 'dark' ? project.thumbnail_dark :project.thumbnail}
            width={48}
            className="mb-4 h-12 w-full object-contain object-left"
          />
          <div className="flex gap-4">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub className="transition-all ease-in-out duration-300 transform hover:scale-110 hover:-translate-y-1" />
              </a>
            )}
            {project.project_link && (
              <a
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWorld className="transition-all ease-in-out duration-300 transform hover:scale-110 hover:-translate-y-1" />
              </a>
            )}
          </div>
        </div>
        <CardHeader className="p-0 mb-4 font-semibold text-lg">
          {project.title}
        </CardHeader>
        <CardDescription className="p-0 leading-6 mb-4 min-h-[80px]">
          {project.description}
        </CardDescription>
        <div className="flex gap-2 flex-wrap mt-2">
          {project.technology.map((tech: string, techIndex: number) => (
            <Badge variant="outline" key={techIndex} className='dark:bg-neutral-900'>
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

const ProjectList: React.FC = () => {
  return (
    <div className="mt-6 mb-12 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl mb-3">Currently working on</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {currentProjectData.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;