import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import { HOME } from "../paths";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar w-full navbar-expand-lg navbar-light bg-transparent">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div>
            <Link to={HOME}></Link>
            <img src={logo} className="w-10" alt="" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-white">Hey, I’m Erni</p>
            <p className="text-slate-400">your friendly earning buddy!</p>
          </div>
        </div>
        <div className="flex align-center w-10">
          <img src={hamburger} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
