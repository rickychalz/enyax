import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { workExperienceData } from "@/content/data";

export default function WorkExperience() {
  return (
    <div className="my-6 flex flex-col">
      <div className="font-semibold text-xl">Work Experience</div>

      {workExperienceData.map((experience, index) => (
        <Card key={index} className="mt-4 shadow-none p-4 flex justify-between  w-full transition-all ease-in-out duration-300 transform hover:scale-100 hover:-translate-y-1  hover:border-blue-500 hover:shadow-lg">
          <div className="flex gap-2 items-center">
          {/* <img alt="company-logo" src={experience.logo} width={50}/> */}
          <div className="flex flex-col">
            <CardHeader className="p-0">{experience.company}</CardHeader>
            <CardDescription className="p-0">{experience.role}</CardDescription>
          </div>
          </div>
          <div>{experience.duration}</div>
        </Card>
      ))}
    </div>
  );
}
