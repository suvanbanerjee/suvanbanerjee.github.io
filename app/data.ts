type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
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
      'Free and Open-Source Medical ID that stores medical information and emergency contacts inside QR code <em>Literally</em>',
    link: 'https://opentag.github.io/',
    video:
      'project1.mp4',
    id: 'project1',
  },
  {
    name: 'NammaLakes',
    description: 'Scalable infrastructure to connect lake(s) at any scale with open source hardware and software providing real-time analytics, monitoring and alerts',
    link: 'https://nammalakes.github.io/',
    video: 'project2.mp4',
    id: 'project2',
  },
  // {
  //   name: 'OpenVoiceOS',
  //   description: 'I mantain website if this cool open source voice assistant platform that provides a privacy-focused alternative to smart speakers',
  //   link: 'https://openvoiceos.org',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project3',
  // },
  // {
  //   name: 'GNOME Bangs',
  //   description: 'Simple and minimal GNOME Extension to enable support of DuckDuckGo Bangs on native search bar',
  //   link: 'https://extensions.gnome.org/extension/7824/bangs-search/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project4',
  // },
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
