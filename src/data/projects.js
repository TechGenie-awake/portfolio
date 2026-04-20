import gitInsightsImg from '../assets/projects/gitInsights.png'
import sipSavorImg from '../assets/projects/sipsavor.png'
import campusBuddyImg from '../assets/projects/campusbuddy.png'
import mySubletImg from '../assets/projects/sublease.png'
import nurdleImg from '../assets/projects/nurdle.png'
import houseOnTheCloudsImg from '../assets/projects/houseontheclouds.png'

export const projects = [
  {
    slug: 'gitinsights-pro',
    title: 'GitInsights Pro',
    category: 'Full-Stack',
    year: '2025',
    featured: true,
    image: gitInsightsImg,
    summary:
      'Interactive analytics dashboards for commits, repos, PRs, and languages with real-time AI health indicators and a modern, usable UI.',
    description: [
      'GitInsights Pro is an analytics platform that turns raw GitHub activity into clear, interactive dashboards — tracking commits, repositories, pull requests, and language usage across time.',
      'The interface surfaces real-time AI-powered health indicators alongside rich data visualizations, letting developers quickly understand the shape of their work and the teams they collaborate with.',
      'I designed the full analytics interface and modern UI theme with a focus on clarity and usability, and built the backend auth + data layer end-to-end.',
    ],
    tags: ['React', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express', 'MySQL', 'Prisma', 'GitHub OAuth', 'REST API'],
    role: 'Full-stack developer — frontend, analytics UI, REST APIs, and auth.',
    links: {
      github: 'https://github.com/TechGenie-awake/gitinsights-pro',
      demo: 'https://gitinsights-pro.vercel.app/',
    },
  },
  {
    slug: 'sip-savor',
    title: 'Sip-Savor',
    category: 'Mobile App',
    year: '2025',
    featured: true,
    image: sipSavorImg,
    summary:
      'A React Native app to discover and save food recipes and cocktails, backed by a Node.js + Prisma API with authentication and data persistence.',
    description: [
      'Sip-Savor is a cross-platform mobile app that helps users discover and save food recipes and cocktails, pulling data from the Spoonacular and TheCocktailDB APIs.',
      'I built the responsive mobile UI with React Native and Expo, focusing on performance and a smooth feel across devices.',
      'The backend uses Node.js, Express, Prisma, and MySQL to handle authentication and persist user saves reliably.',
    ],
    tags: ['React Native', 'Expo', 'Node.js', 'Express', 'Prisma', 'MySQL', 'Spoonacular API', 'TheCocktailDB'],
    role: 'Sole developer — mobile UI, REST APIs, auth, and data layer.',
    links: {
      github: 'https://github.com/TechGenie-awake/Sip-Savor',
      demo: 'https://drive.google.com/file/d/1X-jbPJS18vsrS9_zsBr_LNu9Che0vKHv/view',
    },
  },
  {
    slug: 'campus-buddy',
    title: 'Campus-Buddy',
    category: 'Full-Stack',
    year: '2025',
    featured: true,
    image: campusBuddyImg,
    summary:
      'A platform for students and clubs to discover, manage, and track campus events with RSVP workflows and complete REST APIs.',
    description: [
      'Campus-Buddy is a college event management platform that lets students and clubs discover, manage, and track campus events end-to-end, including RSVP workflows.',
      'I built the backend with Express.js and Supabase, designing complete RESTful APIs for events, RSVPs, and club dashboards.',
      'JSON Server was used for rapid local prototyping and efficient API testing during development.',
    ],
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'JSON Server', 'REST API'],
    role: 'Backend developer — API design, data model, and integrations.',
    links: {
      github: 'https://github.com/TechGenie-awake/Campus-Buddy',
      demo: 'https://campus-buddy-eight.vercel.app/home',
    },
  },
  {
    slug: 'mysublet',
    title: 'MySublet',
    category: 'Full-Stack',
    year: '2025',
    image: mySubletImg,
    summary:
      'A verified, map-centric subleasing platform with identity verification, interactive map discovery, secure messaging, and cloud-optimized media.',
    description: [
      'MySublet is a real-estate and subleasing platform that connects verified listers with prospective tenants in a secure, intuitive, and map-centric environment — replacing the fragmented social-media flow renters usually fall back on.',
      'The core discovery experience is built on React-Leaflet with dynamic bounding, custom price-pin markers, and live popups. Address-to-coordinates geocoding runs in the background via OpenStreetMap Nominatim, so listing creation stays fast.',
      'Beyond listings, the platform includes integrated messaging, a dedicated admin verification suite, Cloudinary-backed image uploads, and a fully installable PWA — turning it from a board into a trust-first housing product.',
    ],
    tags: ['React 19', 'Vite', 'Tailwind CSS 4', 'React-Leaflet', 'Zustand', 'React Hook Form', 'Zod', 'Supabase', 'Cloudinary', 'PWA'],
    role: 'Frontend & full-stack — map UX, auth flows, verification admin, media pipeline.',
    links: {
      github: 'https://github.com/wiz-AR-d/MySublet',
      demo: 'https://my-sublet.vercel.app/',
    },
  },
  {
    slug: 'nurdle',
    title: 'Nurdle',
    category: 'Full-Stack',
    year: '2025',
    image: nurdleImg,
    summary:
      'A personal productivity hub with Pomodoro, memos, calendar reminders, and ambient sounds — tied together by Firebase auth and data.',
    description: [
      'Nurdle is a productivity web app designed to help users focus, organize, and relax. It bundles a customizable Pomodoro timer (Focus / Short Break / Long Break) with per-task tracking, a memo board with autosave, and a calendar powered by @schedule-x/calendar for visual task planning.',
      'Ambient soundscapes — Nature, Urban, and Meditative — let users shape their work environment without leaving the app.',
      'User accounts and per-user data are handled through Firebase Authentication, so memos, tasks, and timer history persist securely across devices.',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Firebase Auth', 'Firebase', '@schedule-x/calendar'],
    role: 'Full-stack developer — UI, auth, and data model.',
    links: {
      github: 'https://github.com/TechGenie-awake/Nurdle',
      demo: 'https://nurdle-five.vercel.app/',
    },
  },
  {
    slug: 'house-on-the-cloud',
    title: 'House On the Cloud',
    category: 'Frontend',
    year: '2025',
    image: houseOnTheCloudsImg,
    summary:
      'A client project — a web presence for a Spiti-based stay, built as a polished, responsive marketing site that reflects the property\'s character.',
    description: [
      'House On the Cloud is a client project: a web presence for a Himalayan stay in Spiti. The brief was to translate the property\'s calm, elevated character into a site that feels the same way to browse.',
      'The focus was on thoughtful typography, imagery, and flow — letting prospective guests get a feel for the place before they ever pick up the phone.',
      'Built as a responsive, production site and shipped live for the client.',
    ],
    tags: ['React', 'Responsive Design', 'Client Work'],
    role: 'Frontend developer — responsive UI, content structure, deployment.',
    links: {
      github: 'https://github.com/TechGenie-awake/HouseonthecloudsSpiti',
      demo: 'https://houseonthecloudsspiti.com/',
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
