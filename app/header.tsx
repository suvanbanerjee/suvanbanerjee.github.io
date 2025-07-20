'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import {HEADER} from './data'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'

export function Header() {
  const playSound = useCallback((soundPath: string) => {
    const audio = new Audio(soundPath);
    audio.play();
  }, []);
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className='flex items-center justify-between w-full'>
        <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <TextEffect
            as="h2"
            per="char"
            preset="fade"
            className="text-xl font-bold text-zinc-800 dark:text-zinc-100"
            delay={0.5}
          >
            {HEADER.name}
          </TextEffect>
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.7}
          >
            {HEADER.title} 
          </TextEffect>
        </div>
        {/* Not sure if i should put it :3 */}
        {/* {usePathname() === '/' && (
          <motion.div
            className="h-20 w-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.1 }}
          >
            <img src="https://media.tenor.com/GqKrjNyIJrMAAAAi/duck.gif" alt="Duck" className="h-20 w-20" onClick={() => playSound('/quack_5.mp3')} />
          </motion.div>
        )} */}
      </div>
    </header>
  )
}
