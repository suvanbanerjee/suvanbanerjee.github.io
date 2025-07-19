"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/ui/animated-background'
import { PROJECTS } from "../data";

type ProjectVideoProps = {
  src: string
  featured?: boolean
}

function ProjectVideo({ src, featured }: ProjectVideoProps) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      className="aspect-video w-full rounded-xl"
    />
  )
}

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const filteredProjects = PROJECTS.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredProjects = PROJECTS.filter(project => project.featured);
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-4xl font-bold mb-8 text-zinc-800 dark:text-zinc-100">Projects</h1>
      
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full py-3 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {searchQuery === '' && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {featuredProjects.map((project) => (
              <a 
                key={project.id} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline"
              >
                <motion.div 
                  className="h-full rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-zinc-800 dark:text-zinc-100 transition-colors">
                      {project.name}
                    </h3>
                    <p 
                      className="text-zinc-600 dark:text-zinc-400"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      )}
      
      {/* All Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
          {searchQuery ? 'Search Results' : 'All Projects'}
        </h2>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                className="group no-underline"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-id={project.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-full p-6 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="inline-block transform opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-zinc-400 group-hover:text-blue-500"
                        >
                          <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <p 
                      className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                    <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-100 mb-2">
                No projects found
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Try adjusting your search terms or browse all projects.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;