import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  const onButtonClick = () => {
    const pdfUrl = "Erick_Nyakiha_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Erick_Nyakiha_CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className="my-6 flex flex-col">
      <p className="text-4xl md:text-6xl font-semibold">Hi, I'm Erick 👋🏽</p>
      <p className="text-2xl md:text-4xl font-medium mt-1">
        I design and build meaningful <br /> experiences.
      </p>
      <p className="text-md md:text-lg font-light my-6">
        I am a digital polymath, a designer and a developer — a constantly evolving digital creator driven
        by a passion for lifelong <br /> learning and the desire to leave a
        lasting impact by designing & developing websites, systems and
        mobile applications.
      </p>
      <div className="flex gap-4 mt-4">
        <Button onClick={onButtonClick} >My Resume</Button>
       <Link to="/contact"> <Button variant={"outline"}>Contact Me</Button></Link>
      </div>
    </div>
  );
}
