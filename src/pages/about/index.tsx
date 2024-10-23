import Contact from "../../components/layout/contact";
import CurrentProjects from "../../components/layout/current-project";
import Hero from "./components/hero";
import Projects from "./components/projects";
import WorkExperience from "./components/work-experience";


const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <WorkExperience />
        <CurrentProjects />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default About;
