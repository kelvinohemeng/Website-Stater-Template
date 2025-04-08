import { NavLink } from "react-router";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <nav className="fixed">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Reach Out</NavLink>
      <div className=" block md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}
