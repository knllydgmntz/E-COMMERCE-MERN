import { useState } from "react";
import { Link } from "react-router-dom";
// icon
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login function executed", formData);
  };

  const signup = async () => {
    console.log("signup function executed", formData);
  };
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3 font-semibold">{state}</h3>
        <p className="font-medium text-gray-500 mt-4">
          Please fill up details.
        </p>
        <div className="mt-8">
          <div className="mb-5">
            {state === "Sign Up" ? (
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                className="w-full border-2 bg-slate-900/5 rounded-xl p-4 mt-1"
                placeholder="Enter your name"
              />
            ) : (
              ""
            )}
          </div>
          <div className="mb-5">
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              className="w-full border-2 bg-slate-900/5 rounded-xl p-4 mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type={!showPassword ? "password" : "text"}
              className="w-full border-2 bg-slate-900/5 rounded-xl p-4 mt-1"
              placeholder="Enter your password"
            />
            <div
              className="absolute top-[25px] right-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
            className="py-3 rounded-xl border border-green-90 bg-green-90 hover:bg-black text-white text-lg font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out"
          >
            Continue
          </button>
        </div>

        {state === "Sign Up" ? (
          <div className="mt-6 flex justify-center items-center ">
            <p className="text-black font-bold">
              Already have an account?
              <span
                onClick={() => {
                  setState("Login");
                }}
                className="text-secondary underline cursor-pointer ml-1"
              >
                Login
              </span>
            </p>
          </div>
        ) : (
          <div className="mt-6 flex justify-center items-center ">
            <p className="text-black font-bold">
              Create an account?
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
                className="text-secondary underline cursor-pointer ml-1"
              >
                Click here
              </span>
            </p>
          </div>
        )}

        <div className="flexCenter mt-3 gap-2">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
