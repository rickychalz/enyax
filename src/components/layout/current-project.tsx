import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { currentProjectData } from "@/content/data";
//import { IconArrowUpRight } from "@tabler/icons-react";

export default function CurrentProjects() {
  return (
    <div className="my-6 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl">Currently Working On</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentProjectData.slice(0, 2).map((project, index) => (
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Card
              key={index}
              className="mt-4 shadow-none flex flex-col w-full p-4 justify-between  transition-all ease-in-out duration-300 transform hover:scale-100 hover:-translate-y-1  hover:border-blue-500 hover:shadow-lg"
            >
              {/* <img
              alt="thumbnail"
              src={project.thumbnail}
              width={400}
              height={250} // Fixed height
              className="rounded-t-lg object-cover h-[250px] w-full"
            /> */}

              <img
                alt="thumbnail"
                src={project.thumbnail}
                width={48}
                className="mb-4 h-12 object-contain object-left mr-4"
              />
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <CardHeader className="p-0 font-semibold text-lg">
                    {project.title}
                  </CardHeader>
                </div>
                <CardDescription className="p-0 leading-6 mb-3">
                  {project.description}
                </CardDescription>
                <div className="flex gap-2 flex-wrap ">
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
          </a>
        ))}
      </div>
    </div>
  );
}

// Define the props type for ReadMoreText
