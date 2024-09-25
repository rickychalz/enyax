import Contact from "../../components/layout/contact";
import CurrentProjects from "../../components/layout/current-project";
import ProjectList from "./components/project-lists";


const Projects: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="my-6"><h1 className="text-4xl font-bold">Projects</h1></div>
        <CurrentProjects/>
        <ProjectList/>
        <Contact/>
      </div>
    </>
  );
};

export default Projects;
