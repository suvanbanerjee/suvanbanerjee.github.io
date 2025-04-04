"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS } from "../data";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const featuredPosts = BLOG_POSTS.filter(post => post.featured).length > 0 
    ? BLOG_POSTS.filter(post => post.featured)
    : BLOG_POSTS.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-4xl font-bold mb-8 text-zinc-800 dark:text-zinc-100">Blog</h1>
      
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full py-3 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {searchQuery === '' && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.slice(0, 2).map((post) => (
              <Link 
                key={post.uid} 
                href={post.link}
                className="group no-underline"
              >
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-full p-6 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-xl font-medium mb-2 text-zinc-800 dark:text-zinc-100 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {post.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
          {searchQuery ? 'Search Results' : 'All Posts'}
        </h2>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
                <Link
                key={post.uid}
                className="block rounded-xl my-2 group no-underline"
                href={post.link}
                data-id={post.uid}
                >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal text-lg dark:text-zinc-100 group-hover:font-medium dark:group-hover:text-medium transition-colors flex items-center gap-1">
                  {post.title}
                  <span className="inline-block transform opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  </span>
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                  {post.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="py-12 text-center text-zinc-500 dark:text-zinc-400">
              No posts found matching your search.
            </div>
          )}
      </div>
    </div>
  );
};

export default BlogPage;