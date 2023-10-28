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
    IFS,
    UoK,
    UoW,
    juiceBar,
    visiventure,
    galleria,
    gtoys,
    movieLookups,
    twofac,
    mail,
    linkedIn
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
      id: "myProjects",
      title: "Projects",
    },
    {
      id: "achievements",
      title: "Achievements",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: creator,
    },
    {
      title: "Desktop App Development",
      icon: web,
    },
    {
      title: "SQL/NoSQL Databases",
      icon: backend,
    },
    {
      title: "AI/ML Engineering",
      icon: mobile,
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
      image: IFS,
    },
    {
      testimonial:
        "Won the 1st place at the HackX 2021 (an Inter-university startup challenge).",
      name: "HackX 2021",
      designation: "by Department of Industrial Management",
      company: "UoK",
      image: UoK,
    },
    {
      testimonial:
        "1st runner up at an Indie Game Development Workshop.",
      name: "Indispier 2021",
      designation: "by the IEEE Student Branch",
      company: "Wayamba University of Sri Lanka",
      image: UoW,
    },
    // {
    //   testimonial:
    //     "1st runner up at an Indie Game Development Workshop.",
    //   name: "Indispier 2021",
    //   designation: "by the IEEE Student Branch",
    //   company: "Wayamba University of Sri Lanka",
    //   image: "../assets/achievements/UoW.png",
    // },
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
          name: "React",
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
    {
      name: "E-Commerce Store for a Juice Bar",
      description:
        "Created an e-commerce store for a Juice bar using Laravel. It uses MVC architecture. Customers can view products and add, delete, edit quantity of products added to cart.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: juiceBar,
      source_code_link: "https://github.com/charithjdesilva/JuiceBar-E-Commerce-Web-App",
    },
    {
      name: "Visiventure",
      description:
        "Visiventure is a YouTube Clone Web Application. Created using React functional components. It uses a Youtube API to fetch and display videos and details. Has the features of youtube such as displaying trending videos, view a single video, view channels, sidebar navigations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
      ],
      image: visiventure,
      source_code_link: "https://github.com/charithjdesilva/visiventure",
    },
    {
      name: "Galleria",
      description:
        "This is a simple Instagram Clone Web Application. Created using React class components. (with React 18). Has features adding, removing images, and commenting, reacting to posts.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "FireStore",
          color: "pink-text-gradient",
        },
      ],
      image: galleria,
      source_code_link: "https://github.com/charithjdesilva/Galleria",
    },
    {
      name: "2-Factor Authentication",
      description:
        "This is a secured web logging system (Group Project). Implementation of QR code authentication and OTP verification using for a web app. Allows a user to enter their login credetntials, if they are correct allow them to login to the system either using a QR code provided to them or an OTP send to gmail.",
      tags: [
        {
          name: "NodeJs",
          color: "blue-text-gradient",
        },
        {
          name: "jQuery",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "EJs",
          color: "blue-text-gradient",
        },
      ],
      image: twofac,
      source_code_link: "https://github.com/charithjdesilva/Galleria",
    },
    {
      name: "Gryfindo Toys",
      description:
        "This is a windows desktop application created using Windows forms. Implementation of OOP concepts is focused on this project. Also has utilized better UIs for the app.",
      tags: [
        {
          name: "Windwos-forms with C#",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Studio 2015",
          color: "pink-text-gradient",
        },
      ],
      image: gtoys,
      source_code_link: "https://github.com/charithjdesilva/Galleria",
    },
    {
      name: "Movie-Lookups",
      description:
        "This is a movie searching web app created with React and Open movie database API. A user can search movies using the seacrh bar and it will return all availabe movies according to the searched keyword. Created using react functional componenets",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: movieLookups,
      source_code_link: "https://github.com/charithjdesilva/movie_lookup",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };