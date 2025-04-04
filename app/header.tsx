'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import {HEADER} from './data'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
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
    </header>
  )
}
