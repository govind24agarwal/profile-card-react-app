import About from "./components/About";
import Social from "./components/Social";
import ProgrammingLanguages from "./components/ProgrammingLangugaes";

const data = [
  { id: 0, title: "about", component: <About /> },
  { id: 1, title: "social", component: <Social /> },
  {
    id: 2,
    title: "programming languages",
    component: <ProgrammingLanguages />,
  },
];
export default data;
