// icons
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full">
      <div className="max_padd_container relative top-32 xs:top-52 flex flex-col items-center">
        <h1 className="text-center h1 capitalize max-w-[37rem] text-white">
          Digital Shopping Hub Junction
        </h1>
        {/* text-gray-50 */}
        <p className="regular-16 mt-6 max-w-[33rem] text-white uppercase ">
          keep the balance
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3 text-white">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20 text-white">
            5k{" "}
            <span className="regular-16 sm:regular-20 text-white">
              Excellent Reviews
            </span>
          </div>
        </div>
        <div className="max-xs-:flex-col flex gap-2">
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            Shop now
          </NavLink>
          <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-2"}>
            <MdOutlineLocalOffer className="text-2xl" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
