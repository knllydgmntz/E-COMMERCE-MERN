import logo from "../assets/logo.svg";
import logo1 from "../assets/logo1.svg";
import profileImg from "../assets/profile.png";

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-full px-6 lg:px-20 3xl:px-6 flexBetween bg-white py-2 ring-1 ring-slate-900/5 relative">
      <div>
        <img src={logo1} alt="logoImg" height={66} width={88} />
      </div>
      <div className="uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1">
        Admin Panel
      </div>
      <div>
        <img
          src={profileImg}
          alt="profileImg"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
