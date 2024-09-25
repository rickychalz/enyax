import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="py-4">
      <ul className="flex gap-8">
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
          <li className="font-light">Contact me</li>
        </Link>
      </ul>
    </div>
  );
}
