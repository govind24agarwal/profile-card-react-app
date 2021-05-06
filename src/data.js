import About from "./components/About";
import Social from "./components/Social";
import ProgrammingLanguages from "./components/ProgrammingLangugaes";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

const tabs = [
  { id: 0, title: "about", component: <About /> },
  { id: 1, title: "social", component: <Social /> },
  {
    id: 2,
    title: "programming languages",
    component: <ProgrammingLanguages />,
  },
];

const social = [
  {
    id: 0,
    title: "facebook",
    icon: <FaFacebookSquare />,
    link: "https://www.facebook.com/govindagarwal24/",
  },
  {
    id: 1,
    title: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/govind_agarwal_24/",
  },
  {
    id: 2,
    title: "github",
    icon: <FaGithub />,
    link: "https://github.com/govind24agarwal",
  },
  {
    id: 3,
    title: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/govind-agarwal-080147120/",
  },
  {
    id: 4,
    title: "personal mail",
    icon: <FaMailBulk />,
    link: "mailto:govindagarwal24@gmail.com",
  },
  {
    id: 5,
    title: "college provided mail",
    icon: <FaMailBulk />,
    link: "mailto:govind.agarwal@iiitg.ac.in",
  },
];

export { tabs, social };
