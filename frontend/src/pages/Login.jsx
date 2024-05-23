import { useState } from "react";
import { Link } from "react-router-dom";
// icon
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3 font-semibold">Sign Up</h3>
        <p className="font-medium text-gray-500 mt-4">
          Please fill up details.
        </p>
        <div className="mt-8">
          <div>
            <label className=" font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border-2 bg-slate-900/5 rounded-xl p-4 mt-1"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className=" font-medium">Email</label>
            <input
              type="email"
              className="w-full border-2 bg-slate-900/5 rounded-xl p-4 mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <label className=" font-medium">Password</label>
            <input
              type={!showPassword ? "password" : "text"}
              className="w-full border-2 bg-slate-900/5 rounded-xl p-4 mt-1"
              placeholder="Enter your password"
            />
            <div
              className="absolute top-[50px] right-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="flex justify-between items-center"></div>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="py-3 rounded-xl border border-green-90 bg-green-90 hover:bg-black text-white text-lg font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            Create account
          </button>
        </div>
        <div className="mt-6 flex justify-center items-center ">
          <p className="text-black font-bold">
            Already have an account?
            <span className="text-secondary underline cursor-pointer ml-1">
              Login
            </span>
          </p>
        </div>
        <div className="flexCenter mt-3 gap-2">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
