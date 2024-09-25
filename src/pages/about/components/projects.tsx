import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { projectData } from "@/content/data";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="my-6 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl">Projects</div>
        <Link to="/projects" className="text-sm text-neutral-400">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectData.slice(0, 2).map((project, index) => (
          <Card
            key={index}
            className="mt-4 shadow-none flex flex-col justify-between w-full transition-all ease-in-out duration-300 transform hover:scale-100 hover:-translate-y-1  hover:border-blue-500 hover:shadow-lg"
          >
            {/* <img
              alt="thumbnail"
              src={project.thumbnail}
              width={400}
              height={250} // Fixed height
              className="rounded-t-lg object-cover h-[250px] w-full"
            /> */}

            <div className="flex flex-col p-4">
              <div className="flex items-start justify-between">
                <img
                  alt="thumbnail"
                  src={project.thumbnail}
                  width={48}
                  className="mb-4 h-12 w-full object-contain object-left"
                />
                <div className="flex gap-4">
                  {/* Conditionally render GitHub icon */}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandGithub className="transition-all ease-in-out duration-300 transform hover:scale-100 hover:-translate-y-1" />
                    </a>
                  )}
                  {/* Conditionally render project link icon */}
                  {project.project_link && (
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconWorld  className="transition-all ease-in-out duration-300 transform hover:scale-100 hover:-translate-y-1"/>
                    </a>
                  )}
                </div>
              </div>

              <CardHeader className="p-0 mb-4 font-semibold text-lg">
                {project.title}
              </CardHeader>
              <CardDescription className="p-0 leading-6 mb-4 min-h-[80px]">
                {project.description}
              </CardDescription>
              <div className="flex gap-2 flex-wrap mt-2">
                {project.technology.map((tech, techIndex) => (
                  <Badge variant={"outline"} key={techIndex}>
                    {tech}
                  </Badge>
                ))}
              </div>
              {/* <div className="flex items-center gap-1 text-sm justify-end">
               <span><Link to = {project.project_link}>View project</Link></span> 
               <span><IconArrowUpRight size={12}/></span>
            </div> */}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Define the props type for ReadMoreText
