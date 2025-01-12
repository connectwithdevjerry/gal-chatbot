import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import { HOME } from "../paths";
import { Link, Links } from "react-router-dom";
import bgImage from "../assets/bgImage.png";

const Navbar = () => {
  return (
    <nav
      className="navbar w-full px-5 py-3 navbar-expand-lg navbar-light z-50 darker fixed left-0 right-0 top-0 z-50"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <div>
            <Link to={HOME}></Link>
            <img src={logo} className="w-10" alt="" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-white">Hey, I’m Erni</p>
            <p className="text-slate-400 text-sm">
              your friendly earning buddy!
            </p>
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
