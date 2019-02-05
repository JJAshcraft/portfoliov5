const projects = [
  {
    title: "LS-8 Emulator",
    description:
      "This repo contains an implementation of a CPU emulator to learn more about low-level computer architecture. This is an 8-bit computer with 8-bit memory addressing, written in C.",
    tech: ["C"],
    link: "",
    frontend_repo: "",
    backend_repo:
      "https://github.com/JJAshcraft/Computer-Architecture/tree/master/ls8",
    thumb: "./thumbs/code.jpg"
  },
  {
    title: "Data Structures",
    description:
      "This repo contains implementations of Linked Lists, Queue's, Binary Search Trees and Heaps in Python.",
    tech: ["Python", "Data Structures"],
    link: "",
    frontend_repo: "",
    backend_repo: "https://github.com/JJAshcraft/Data-Structures",
    thumb: "./thumbs/code.jpg"
  },
  // {
  //   title: "Find My Rep",
  //   description:
  //     "This fully-responsive web app is built with React and Material UI. Allows you to search by state to get your senate and house of representative info.",
  //   tech: ["React", "Material UI"],
  //   link: "https://instagramm.netlify.com/",
  //   frontend_repo: "https://github.com/JJAshcraft/find-my-rep",
  //   backend_repo: "",
  //   thumb: "./thumbs/findmyrep.png"
  // },
  // {
  //   title: "Not My DJ",
  //   description:
  //     "This fully-responsive web app is built with React and Styled Components. It is built on the Spotify API, and currently pulls in the logged in users playlist. App is for experimenting with Spotify API...limited features at this time. ",
  //   tech: ["React", "Material UI"],
  //   link: "https://instagramm.netlify.com/",
  //   frontend_repo: "https://github.com/JJAshcraft/find-my-rep",
  //   backend_repo: "",
  //   thumb: "./thumbs/findmyrep.png"
  // },
  {
    title: "JasonMoledzki.com (in development)",
    description:
      "One of my current projects for author and reknowned professional skydiver, Jason Moledzki. A portfolio and career site built with React and Styled Components. Features complex CSS animations and basic Soundcloud integration.",
    tech: [
      "React",
      "Styled Components",
      "Illustrator",
      "Photoshop",
      "HTML/CSS",
      "GSAP"
    ],
    link: "https://jaymo.netlify.com",
    frontend_repo: "",
    backend_repo: "",
    thumb: "./thumbs/jaymo.png",
    large: "./large/jaymo.png"
  },
  {
    title: "Team Communicator",
    description:
      "A web app that helps distributed or remote teams with real-time document collaboration and scheduling meetings. Team Communicator is built with a React/Redux frontend (deployed to Netlify) and Node/Express backend (deployed to Heroku). Learning moments: Had to learn MongoDB specifically for this project, and implementing a Real-time document collaboration feature built with Socket.IO.",
    tech: [
      "React",
      "Redux",
      "Styled Components",
      "NodeJS",
      "Socket.IO",
      "MongoDB",
      "Heroku",
      "Illustrator",
      "HTML/CSS",
      "Adobe Premiere",
      "Adobe After Effects"
    ],
    link: "https://team-comm.netlify.com",
    frontend_repo: "https://github.com/Lambda-School-Labs/Labs8-TeamComms",
    backend_repo: "https://github.com/Lambda-School-Labs/Labs8-TeamComms",
    thumb: "./thumbs/teamcomm.png",
    large: "./large/teamcomm.png"
  },
  {
    title: "Caliber Coatings (in development)",
    description:
      "This is a fully-responsive site for Caliber Coatings, a paint company local to Tampa, Florida. The owner was looking for a quick web presence to help gain additional clients. ",
    tech: [
      "HTML/CSS",
      "Bootstrap",
      "Photoshop",
      "Illustrator",
      "Netlify Forms"
    ],
    link: "https://calibercoatings.netlify.com/",
    frontend_repo: "https://github.com/JJAshcraft/caliber",
    backend_repo: "",
    thumb: "./thumbs/caliber.png",
    large: "./large/caliber.png"
  },
  {
    title: "Tiki's Island Adventure",
    description:
      "Tiki's Island Adventure is an online MUD game developed with a React frontend (deployed to Netlify) and Python/Django backend (deployed to Heroku). The goal was to build out a multiplayer text adventure game using Pusher websockets for player status and real-time messaging. The MVP was built over 2 weeks, with a week dedicated to front and backend portions. SQLite3 was used for db during development, and then converted to postgres for Heroku (This is on a free dyno at Heroku, so it may take a moment to load). Learning moments: Converting to Postgres for the first time and figuring out how to use Pusher.",
    tech: [
      "React",
      "Python",
      "Django",
      "Pusher",
      "Heroku",
      "Postgres",
      "SQLite3",
      "Styled Components",
      "Illustrator",
      "HTML/CSS"
    ],
    link: "https://tikisisland.netlify.com/",
    frontend_repo: "https://github.com/JJAshcraft/LambdaMUD-Client",
    backend_repo: "https://github.com/JJAshcraft/LambdaMUD-Project",
    thumb: "./thumbs/tikis.png",
    large: "./large/tikis.png"
  },
  {
    title: "Node Server for Lambda Notes",
    description: "This repo contains a RESTful web server built with NodeJS",
    tech: ["Node"],
    link: "",
    frontend_repo: "",
    backend_repo: "https://github.com/JJAshcraft/back-end-project-week",
    thumb: "./thumbs/code.jpg"
  },
  {
    title: "Game of Life",
    description:
      "This is a React app built on the principles of Conway's Game of Life. Features step by step sequencing life objects and prebuilt life templates.",
    tech: ["React", "Styled Components", "HTML/CSS", "CSS Grid"],
    link: "https://jjashcraft-gameoflife.netlify.com/",
    frontend_repo: "https://github.com/JJAshcraft/gameoflife",
    backend_repo: "",
    thumb: "./thumbs/gameoflife.png",
    large: "./large/gameoflife.png"
  },
  {
    title: "TrustTheJourney.Today",
    description:
      "This project was a quick build for a client who needed a website up in 24 hours for their new podcast series. Based on time and scope, Wordpress and a previously developed podcast theme were chosen and customized to the client's taste. Learning moments: Although I would have preferred to use React/Gatsby for this project - the time and budgetary restraints of the client didn't allow for the development time needed to build out a fully featured react site. In hindsite, customization of Wordpress can also end up taking just as long as a normal build when the theme doesn't have everything needed.",
    tech: ["Wordpress", "Photoshop", "Illustrator", "Soundcloud", "HTML/CSS"],
    link: "http://TrustTheJourney.Today",
    backend_repo: "",
    frontend_repo: "",
    thumb: "./thumbs/ttj.png",
    large: "./large/ttj.png"
  },
  // {
  //   title: "Lambda Notes",
  //   description:
  //     "This is a full-stack desktop web application built using React/Redux for the frontend, and Firebase for the backend. Authorization is handled via Firebase Auth, and the Database is a Firebase Realtime Database. Note: You must login to see the current notes, which are not yet designated for individual users...notes are viewable/editable as a collection which any logged in user has access to. This app features CSV export and theme-switching.",
  //   tech: ["React", "Redux", "Firebase", "Styled Components", "HTML/CSS"],
  //   link: "https://frontend-project-42d1e.firebaseapp.com/",
  //   frontend_repo: "https://github.com/JJAshcraft/front-end-project-week",
  //   backend_repo: "",
  //   thumb: "./thumbs/lambdanotes.png",
  //   large: "./large/lambdanotes.png"
  // },
  {
    title: "S and J Architects",
    description:
      "This is a fully-responsive site for S and J Architects. This was my first successful site built to pixel perfection from Sketch mockups. Learning moment: Utilizing GSAP for animations.",
    tech: ["HTML/CSS", "VanillaJS", "GSAP", "Netlify Forms"],
    link: "https://sandjarchitects.netlify.com/",
    frontend_repo:
      "https://github.com/JJAshcraft/My-User-Interface-Project-Week",
    backend_repo: "",
    thumb: "./thumbs/sandjarch.png",
    large: "./large/sandjarch.png"
  },
  {
    title: "Interplanetary Packing Guide",
    description:
      "This is a basic React application built similar to a todo app, but as a packing guide. Learning Moment: I spent more time on this project learning the better ways to structure a React Application, and learned more about CSS Animations.",
    tech: ["React", "HTML/CSS"],
    link: "https://frontend-project-42d1e.firebaseapp.com/",
    frontend_repo: "https://github.com/JJAshcraft/front-end-project-week",
    backend_repo: "",
    thumb: "./thumbs/interplanetary.png",
    large: "./large/interplanetary.png"
  }
];

export default projects;
