import { NavLink } from "react-router-dom";
// icons

import { GrRestroomWomen } from "react-icons/gr";
import { IoMan } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { TbMoodKidFilled } from "react-icons/tb";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaHome />
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <IoMan />
          Men's
        </div>
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <GrRestroomWomen />
          Women's
        </div>
      </NavLink>
      <NavLink
        to={"/kids"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <TbMoodKidFilled />
          Kid's
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
