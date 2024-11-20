import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  calendly: 'https://calendly.com/suvanbanerjee/',
  linkedin: 'https://www.linkedin.com/in/suvanbanerjee/',
  mail: 'mailto:banerjeesuvan@gmail.com',
  matrix: 'https://matrix.to/#/@suvan:matrix.org',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Information Science',
    institution: 'Dayananda Sagar College of Engineering',
    link: 'https://www.dsce.edu.in/',
    date: '2022 - 2026',
    gpa: '9.36',
  },
]

export const EXPERIENCE = [
  {
    company: 'BurdenOff',
    location: 'Remote',
    position: 'Full Stack Developer Intern',
    start: 'July 2024',
    link: 'https://burdenoff.com/',
    end: 'Current',
    tasks: [
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
    ],
  },
  {
    company: 'Keploy',
    location: 'Remote',
    position: 'Keploy Rain of Code 24',
    start: 'Aug 2024',
    link: 'https://keploy.io/',
    end: 'Sep 2024',
    tasks: [
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
    ],
  },
]
