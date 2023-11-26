import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import * as Yup from "yup";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";
// import ThemeImage from "./components/ThemeImage";

export const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <FaHome className="nav_icon" />,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    icon: <FaUser className="nav_icon" />,
  },
  {
    id: 3,
    name: "Projects",
    path: "/projects",
    icon: <FaFolderOpen className="nav_icon" />,
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    desc: "Jonah",
  },
  {
    id: 2,
    title: "Last Name : ",
    desc: "Wakahiu",
  },

  {
    id: 3,
    title: "Nationality : ",
    desc: "Kenyan",
  },
  {
    id: 4,
    title: "Email : ",
    desc: "jonah.wakahiumaina@gmail.com",
  },
  {
    id: 5,
    title: "Phone Number : ",
    desc: "+254 796 893524",
  },
  {
    id: 6,
    title: "linkedin : ",
    desc: "Jonah Wakahiu",
  },
  {
    id: 7,
    title: "languages : ",
    desc: "English, Kiswahili",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },
  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },
  {
    id: 3,
    no: "10+",
    title: "Happy <br /> Clients",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "95",
  },
  {
    id: 2,
    title: "Css",
    percentage: "90",
  },
  {
    id: 3,
    title: "JavaScript",
    percentage: "60",
  },
  {
    id: 4,
    title: "React",
    percentage: "50",
  },
  {
    id: 5,
    title: "PHP",
    percentage: "80",
  },
  {
    id: 6,
    title: "Laravel",
    percentage: "40",
  },
  {
    id: 7,
    title: "JQuery",
    percentage: "60",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023",
    title: "Web Developer",
    desc: "Developed my own portfolio and others",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023, May - 2023, Aug",
    title: "System Development <span> Kenyatta University</span>",
    desc: "Development of Chandaria Incubation system",
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019, Aug - 2023, April",
    title:
      "Bsc. Applied Physics and Computer Science <span>Multimedia University of Kenya</span>",
    desc: "I learned and equipped myself with skills of programming",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019, Jan - 2019, April",
    title: "Computer package certificate <span>Dykaan College</span>",
    desc: "Microsoft office",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2014 - 2018",
    title: "Kenya Certificate of Secondary education <span>Njabini Boys</span>",
    desc: "I graduated with kenya certificate of secondary education",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const contactSchema = Yup.object().shape({
  name: Yup.string().required("Required").trim().min(2).max(50),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required").trim().min(5).max(100),
  message: Yup.string().required("Required").trim().min(10).max(1000),
});

export const themes = [
  {
    id: 1,
    color: "chartreuse",
  },
  {
    id: 2,
    color: "cornflowerblue",
  },
  {
    id: 3,
    color: "darkcyan",
  },
  {
    id: 4,
    color: "darkmagenta",
  },
  {
    id: 5,
    color: "darkgoldenrod",
  },
  {
    id: 6,
    color: "darkturquoise",
  },
  {
    id: 7,
    color: "gold",
  },
  {
    id: 8,
    color: "midnightblue",
  },
  {
    id: 9,
    color: "hotpink",
  },
  {
    id: 10,
    color: "orangered",
  },
];
