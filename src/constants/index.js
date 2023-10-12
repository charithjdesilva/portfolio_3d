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
      image: "../assets/achievements/IFS.png",
    },
    {
      testimonial:
        "Won the 1st place at the Inter-university startup challenge.",
      name: "HackX 2021",
      designation: "by Department of Industrial Management",
      company: "UoK",
      image: "../assets/achievements/UoK.png",
    },
    {
      testimonial:
        "1st runner up at an Indie Game Development Workshop.",
      name: "Indispier 2021",
      designation: "by the IEEE Student Branch",
      company: "Wayamba University of Sri Lanka",
      image: "../assets/achievements/UoW.png",
    },
  ];
  
  const projects = [
    {
      name: "Criminal Identification System with AI",
      description:
        "This system uses computer vision, face-detection library and dlib library to recognize photos of criminals. Accuracy : 0.983",
      tags: [
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "FastAPI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/charithjdesilva/Face-detection-system",
    },
    {
      name: "Face Recognition Attendance System",
      description:
        "Can save measurement of faces and using them it can identify a person. And then it will mark the attendance to a csv",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Dlib",
          color: "pink-text-gradient",
        },
        {
          name: "NumPy",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/charithjdesilva/Face-detection-system",
    },
    {
      name: "Virtual Whiteboard",
      description:
        "This is an innovative product created by me while learning to work with the OpenCV library. It provide users to write on air and it is drawn on a canvas area as in a whiteboard.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "NumPy",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/charithjdesilva/Virtual-Whiteboard",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };