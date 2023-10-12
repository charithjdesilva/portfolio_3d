import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    slitt,
    esoft,
    btech,
    google,
    school,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI/ML Engineering",
      icon: web,
    },
    {
      title: "Computer Vision",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "Web Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "BSc(Hons) in Computing and Information Systems",
      company_name: "Sabaragamuwa University of Sri Lanka",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Current semester - 3rd year 2nd semester",
        "GPA - 3.7946",
      ],
    },
    {
      title: "AI/ML Engineer - Stage 1",
      company_name: "SLIIT",
      icon: slitt,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
      ],
    },
    {
      title: "Google IT Support Professional",
      company_name: "Google (Coursera Platform)",
      icon: google,
      iconBg: "#E6DEDD",
      date: "2021",
      points: [
        "Technical Support Fundamentals",
        "The Bits and Bytes of Computer Networking",
        "Operating Systems and You: Becoming a Power User",
        "System Administration and IT Infrastructure Services",
        "IT Security: Defense against the digital dark arts"      ],
    },
    {
      title: "Pearson BTEC Level 5 HND in Software Engineering",
      company_name: "Pearson BTEC",
      icon: btech,
      iconBg: "#E6DEDD",
      date: "2018-2021",
      points: [
        
      ],
    },
    {
      title: "Pearson Assured Diploma in Business Management",
      company_name: "ESOFT",
      icon: esoft,
      iconBg: "#383E56",
      date: "2020",
      points: [
        
      ],
    },
    {
      title: "Pearson Assured Diploma in Software Engineering",
      company_name: "ESOFT",
      icon: esoft,
      iconBg: "#E6DEDD",
      date: "2021",
      points: [
      ],
    },
    {
      title: "GCE Advanced Level",
      company_name: "Richmond College",
      icon: school,
      iconBg: "#E6DEDD",
      date: "2018",
      points: [
        "Combined Mathematics - B",
        "Chemistry - B",
        "Physics - C",
        "With these results got selected to the BSc(Hons) in Computing and Informations System offered by the Faculty of Computing, \n\r\n Sabaragamuwa University"
      ],
    },
    {
      title: "GCE Ordinary Level",
      company_name: "Richmond College",
      icon: school,
      iconBg: "#383E56",
      date: "2013",
      points: [
        "IT - A" ,
        "English - A",
        "Mathematics - A",
        "Science - A",
        "Commerce - A",
        "Sinhala - A"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "1st runner up at the DiscoverIFS challenge series organized by the IFS Company.",
      name: "DiscoverIFS challenge",
      designation: "by the IFS company",
      company: "Sri Lanka",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Won the 1st place at the Inter-university startup challenge.",
      name: "HackX 2021",
      designation: "by Department of Industrial Management",
      company: "UoK",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "1st runner up at an Indie Game Development Workshop.",
      name: "Indispier 2021",
      designation: "by the IEEE Student Branch",
      company: "Wayamba University of Sri Lanka",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };