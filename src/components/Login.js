import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="../images/NetfixBackground.jpg" alt="" />
      </div>
      <form
        action=""
        className="bg-black bg-opacity-80 absolute mx-auto my-36 right-0 left-0 w-3/12 p-10 h-3/2 text-white"
      >
        <table className="flex flex-col ">
          <td>
            <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
          </td>
          {!isSignInForm && <td>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
              className="p-4 my-3 w-full bg-slate-700 border border-gray-500"
            />
          </td>}
          <td>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              className="p-4 my-3 w-full bg-slate-700 border border-gray-500"
            />
          </td>
          <td>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-4 my-3 w-full bg-slate-700 border border-gray-500"
            />
          </td>
          <td>
            <button className="p-3 my-5 bg-red-700 text-white font-bold w-full mx-0 rounded-lg">
              {isSignInForm?"Sign In":"Sign Up"}
            </button>
          </td>
        </table>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netfix? SignUp Now":"Already Registered! Login Now"}</p>
      </form>
    </div>
  );
};

export default Login;
