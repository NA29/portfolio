export const cleanContent = {
  global: {
    title: "Nathan Audegond",
    name: "nathan\naudegond",
    email: "nathan.audegond@hotmail.com",
    links: {
      resume: "/resume.pdf", // Assuming resume location
      blog: "https://blog.nathanaudegond.com",
      linkedin: "https://linkedin.com/in/nathanaudegond",
      github: "https://github.com/NA29",
    }
  },
  navbar: [
    { name: "Projects", path: "/#selected-work" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about-me" },
  ],
  about: {
    typingLines: [
      "Hi! Nice to meet you 👋",
      "Welcome to my portfolio!"
    ],
    paragraphs: [
      "I’m Nathan, a 3rd-year Software Engineering student at McGill University.",
      "Last summer, I interned at Transports Canada, where I worked on data pipelines and reporting to support analytics across multiple teams. This winter, I’m interning at Intact Financial Corporation as a Full-Stack Software Engineering Intern.",
      "I’m currently focused on building full stack applications. Right now, I’m developing a Pokémon card trading app that helps collectors organize and track their collections.",
      "For fun, I run, play video games, take photos, and mass-apply to internships."
    ],
    memeRequest: "PLEASE REFER ME OR GIVE ME A JOB I NEED TO FEED MY FAMILY PLEASE PALSDPSA DLASPDLP ASKODPAE LADPSAPD LPASPDPL EASEPLES @!)(#!#! !@^$!@&! #+=!$#?"
  },
  experience: [
    {
      title: "Software Developer Intern",
      company: "Intact Financial Corp., Montreal",
      date: "Jan 2026 – May 2026",
      details: [
        "Full-Stack - Group Benefits and Travel",
        "Currently working on the frontend of a customer-facing app"
      ]
    },
    {
      title: "Software Developer",
      company: "Optim-Structure (Remote), Montreal",
      date: "Oct 2024 – Present",
      details: [
        "Designed and developed a React Native mobile app to streamline inspectors’ and engineers’ tasks.",
        "Developed and maintained an Angular dashboard for employee and inspection data management.",
        "Built the company’s official React website, reaching 1,000+ weekly impressions."
      ]
    },
    {
      title: "Data Engineer Intern",
      company: "Transports Canada, Montreal",
      date: "May 2025 – Aug 2025",
      details: [
        "Collaborated with an 8-member Data Visualization team to migrate 30+ SAP reports to Power BI.",
        "Built a Power BI semantic model supporting 5 government reports for unified, scalable reporting.",
        "Optimized SQL-based data models in Oracle SQL Developer and SSMS, improving query efficiency up to 10×."
      ]
    },
    {
      title: "Undergraduate Researcher",
      company: "McGill University, Montreal",
      date: "May 2024 – Aug 2024",
      details: [
        "Reimagined YouTube’s UI to promote healthier usage and reduce negative engagement patterns.",
        "Enhanced content diversity and reduced misinformation through fact-checked recommendations.",
        "Researched predatory UI patterns and proposed user-centric design alternatives.",
        "Collaborated in a cross-functional team to brainstorm and implement design improvements."
      ]
    },
    {
      title: "Software Developer",
      company: "McGill Robotics (UAV), Montreal",
      date: "Oct 2023 – May 2024",
      details: [
        "Worked on the computer vision team to ensure reliable data handling and processing from camera sensors.",
        "Adapted to a complex ROS-based codebase and contributed to debugging and optimization efforts.",
        "Enhanced image processing pipelines and improved performance of Python scripts.",
        "Participated in weekly scrum meetings and sprint planning discussions."
      ]
    }
  ],
  projects: [
    {
      title: "PokéTrading",
      date: "Sep 2025 – Present",
      stack: "TypeScript, React, Vite, Supabase, FastAPI",
      image: "https://placehold.co/800x600/2a2a2a/FFF?text=PokeTrading",
      description: [
        "Built a full-stack trading platform for Pokémon card collectors with portfolio tracking and real-time pricing.",
        "Implemented secure authentication and a PostgreSQL data model with Supabase for portfolio and trade management.",
        "Developed a hybrid API layer with FastAPI and third-party integrations for pricing, search, and portfolio sync.",
        "Added filtering and search features for cards by name, set, rarity, and availability."
      ]
    },
    {
      title: "Rack Inspection Mobile App",
      date: "Jun 2025 – Present",
      stack: "TypeScript, React Native, Firebase",
      image: "https://placehold.co/800x600/3a4a5a/FFF?text=Rack+Inspection",
      description: [
        "Developed a cross-platform mobile app with QR code scanning, photo uploads, and dynamic forms for digitized inspections.",
        "Integrated Firebase Auth and Firestore for secure login, persistent storage, and real-time data sync with offline support.",
        "Implemented role-based workflows tailored for engineers and inspectors.",
        "Streamlined on-site data collection, cutting inspection logging time by ~50%."
      ]
    },
    {
      title: "Resume Builder / Tracker App",
      date: "May 2025 – Present",
      stack: "TypeScript, React, FastAPI, Supabase",
      image: "https://placehold.co/800x600/5a4a3a/FFF?text=Resume+Builder",
      description: [
        "Built a resume-building platform with version control, PDF export, and Supabase-backed data persistence.",
        "Implemented tagging and restoration of past resume versions using PostgreSQL.",
        "Integrated Gemini LLM to analyze job descriptions and suggest content (keyword extraction, bullet rewrites)."
      ]
    },
    {
      title: "ZenOS App",
      date: "Mar 2025 – April 2025",
      stack: "Electron, SwiftUI, Firebase",
      image: "https://placehold.co/800x600/3a5a4a/FFF?text=ZenOS",
      description: [
        "Built a cross-platform focus environment to minimize digital distractions and encourage structured breaks.",
        "Implemented real-time sync across devices using Firebase Firestore and session-tracking features."
      ]
    },
    {
      title: "Spotify Music Recommendation System",
      date: "Sep 2024",
      stack: "Python, Pandas, Scikit-Learn",
      image: "https://placehold.co/800x600/4a3a5a/FFF?text=Spotify+Recs",
      description: [
        "Extracted and standardized audio features from user playlists using Pandas.",
        "Trained a KNN model on a dataset of 1M+ songs to recommend similar tracks."
      ]
    },
    {
      title: "Loan Risk Grade Prediction",
      date: "Sep 2024",
      stack: "Python, PyTorch, NumPy",
      image: "https://placehold.co/800x600/5a3a4a/FFF?text=Loan+Risk",
      description: [
        "Preprocessed credit data using Pandas and NumPy, handling missing values and scaling features.",
        "Built and trained a PyTorch neural network, achieving 82% accuracy on grade classification."
      ]
    }
  ],
  contact: {
    body: "Feel free to reach out for collaborations, opportunities, or just to say hello.",
    ascii: `
             *     ,MMM8&&&.            *
                  MMMM88&&&&&    .
                 MMMM88&&&&&&&
     *           MMM88&&&&&&&&
                 MMM88&&&&&&&&
                 'MMM88&&&&&&'
                   'MMM8&&&'      *
          |\\___/|     /\\___/\\
          )     (     )    ~( .              '
         =\\     /=   =\\~    /=
           )===(       ) ~ (
          /     \\     /     \\
          |     |     ) ~   (
         /       \\   /     ~ \\
         \\       /   \\~     ~/
  jgs_/\\_/\\__  _/_/\\_/\\__~__/_/\\_/\\_/\\_/\\_/\\_/
  |  |  |  |( (  |  |  | ))  |  |  |  |  |  |
  |  |  |  | ) ) |  |  |//|  |  |  |  |  |  |
  |  |  |  |(_(  |  |  (( |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |\\)|  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |`
  }
};
