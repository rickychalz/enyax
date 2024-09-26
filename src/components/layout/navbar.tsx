import { useTheme } from "@/context/theme-context";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="py-4 px-6 md:px-8 xl:px-4 flex justify-between w-full backdrop-blur-xl ">
      <ul className="flex gap-4 md:gap-6 xl:gap-8">
        <Link to="/">
          {" "}
          <li className="font-light flex gap-2">
            <span>About</span>
            <span></span>
          </li>
        </Link>
        <Link to="/projects">
          <li className="font-light">Projects</li>
        </Link>
        <Link to="/contact">
          <li className="font-light">Contact Me!</li>
        </Link>
      </ul>
      <button onClick={toggleTheme} className="">
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </button>
    </div>
  );
}
