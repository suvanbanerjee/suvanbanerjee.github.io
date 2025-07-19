type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
  featured?: boolean
}

type Header = {
  name: string
  title: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  featured?: boolean
}

type SocialLink = {
  label: string
  link: string
}

export const HEADER: Header = {
  name: 'Suvan Banerjee',
  title: 'Student | Developer',
}

export const PROJECTS: Project[] = [
  {
    name: 'OpenTag - Medical ID',
    description:
      'A free and open-source medical ID that stores medical information and emergency contacts inside a QR code for quick access.',
    link: 'https://opentag.github.io/',
    video:
      'project1.mp4',
    id: 'project1',
    featured: true,
  },
  {
    name: 'NammaLakes',
    description: 'A scalable IoT infrastructure to connect lakes at any scale with open-source hardware and software, providing real-time analytics, monitoring, and alerts.',
    link: 'https://nammalakes.github.io/',
    video: 'project2.mp4',
    id: 'project2',
    featured: true,
  },
  {
    name: 'OpenVoiceOS',
    description: 'An open-source voice AI platform providing a privacy-focused, Linux-based alternative to commercial smart speakers. I contribute to and maintain the project\'s website.',
    link: 'https://openvoiceos.org',
    id: 'project3',
  },
  {
    name: 'GNOME Bangs',
    description: 'A simple and minimal GNOME Shell Extension that enables the use of DuckDuckGo\'s !bang shortcuts directly in the native GNOME search bar. currenly has over 1.5k users.',
    link: 'https://extensions.gnome.org/extension/7824/bangs-search/',
    id: 'project4',
  },
  {
    name: 'Udhari',
    description: 'A simple, cross-platform expense tracking application built using Next.js and Capicator, Mainly i built this for my personal use to track my udharis.',
    link: 'https://github.com/suvanbanerjee/udhari',
    id: 'project5',
  },
  {
    name: 'OVOS Skill Store GUI',
    description: 'A Play Store like Web Store for OpenVoiceOS skills, used GGWave to send install commands to the voice assistant.',
    link: 'https://store.openvoiceos.org/',
    id: 'project6',
  },
    {
    name: 'WeatherKit',
    description: 'A Simple and easy to use python library to get weather data without any API key, making it easy to integrate weather information into applications.',
    link: 'https://pypi.org/project/weatherkit/',
    id: 'project7',
  },
  {
    name: 'Stock Lookup',
    description: 'An API to convert company name to stock ticker symbol, built using Python and FastAPI, and supports Fizzy input for company names. i built this for another project that is Open Voice OS plugin to get stock prices.',
    link: 'https://github.com/suvanbanerjee/stock_symbol_lookup_api',
    id: 'project8',
  },
  {
    name: 'Project Zeta - Aventus 2.0',
    description: 'Project Zeta is a web-based platform that allows users to create and manage small cybersecurity puzzels and challenges, designed for kids to try and learn cybersecurity concepts in a fun and engaging way.',
    link: 'https://projectzeta.vercel.app/',
    id: 'project9',
  },
  {
    name: 'Keyboard LED Remapper',
    description: 'This is my first ever project and/or repository on GitHub, initally it was a simple shell script to remap the keyboard indicator LED to disk activity, now is a TUI based installer for the same functionality with additional features.',
    link: 'https://github.com/suvanbanerjee/Keyboard-LED-Remapper',
    id: 'project10',
  },
  {
    name: 'PyCryp',
    description: 'An easy to use Python library for encryption and decryption of text, i use it mainly to hash passwords and sensitive data in my projects.',
    link: 'https://pypi.org/project/pycryp/',
    id: 'project11',
  },
  {
    name: 'Text Encrypter',
    description: ' This was my attempt to try a new language PyScript (run python in browser) and created a simple text encrypter/decrypter using PyScript and PyCryp.',
    link: 'https://aesencryptor.vercel.app/',
    id: 'project12',
  },
  {
    name: 'Token Scheduler',
    description: 'A command-line interface (CLI) tool to schedule and automate joining Google Meet classes or meetings.',
    link: 'https://github.com/suvanbanerjee/token-scheduler',
    id: 'project13',
  },
  {
    name: 'Smart Traffic Control',
    description: 'My First year mini project, it impliments a VAC (Vehicle Actuated Control) system using PI and OpenCV to detect vehicles and control traffic lights accordingly.',
    link: 'https://github.com/suvanbanerjee/Smart-Traffic-System',
    id: 'project14',
  },
  {
    name: 'Tic Tac Toe',
    description: 'A cookiecutter tic-tac-toe game built in python i built this mainly to learn PEP8 conventions and how to structure a python project.',
    link: 'https://github.com/suvanbanerjee/TicTacToe',
    id: 'project15',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'BurdenOff Consultency Pvt. Ltd.',
    title: 'Full Stack Intern',
    start: 'August 2024',
    end: 'Present',
    link: 'https://burdenoff.com',
    id: 'work1',
  },
  {
    company: 'Open Voice OS',
    title: 'Open Source Contributor',
    start: 'July 2024',
    end: 'Present',
    link: 'https://openvoiceos.org',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My Google Summer of Code 2025 Journey',
    description: 'My experience building a Cloudcasting UI dashboard for Open Climate Fix during GSoC 2025 - from application to completion',
    link: '/blog/gsoc25-journy',
    uid: 'blog-2',
    featured: true,
  },
  {
    title: 'Open Source Trail',
    description: 'How I started my open source journey from a small bug in GNOME extension to what I am doing now',
    link: '/blog/how-i-started-open-source',
    uid: 'blog-1',
    featured: true,
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/suvanbanerjee',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/suvanbanerjee',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/suvanbanerjee',
  },
  {
    label: 'Resume',
    link: 'https://suvanbanerjee.me/resume',
  },
  {
    label: 'Calendarly',
    link: 'https://calendly.com/suvanbanerjee',
  },
]

export const EMAIL = 'hello@suvanbanerjee.me'
