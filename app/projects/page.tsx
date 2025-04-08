"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/ui/animated-background'
import { PROJECTS } from "../data";

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
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
  
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
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
      
      <div className="grid grid-cols-1 gap-8">
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            <div className="relative rounded-t-xl overflow-hidden bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectVideo src={project.video} />
            </div>
            
            <div className="p-6">
              <a
                className="font-base group relative inline-block font-[450] text-xl mb-4 text-zinc-900 dark:text-zinc-50"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
              </a>
              
              <p 
                className="text-base text-zinc-600 dark:text-zinc-400 mb-4"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              
              <div className="flex justify-between items-center">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-zinc-600 dark:text-zinc-400">No projects found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;