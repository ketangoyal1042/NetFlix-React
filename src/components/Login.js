import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState("");
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    const Message = validateData(email.current.value, password.current.value);
    setMessage(Message);
    if (Message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }).then(() => {
            console.log("profile Updated");
            // navigate("/browse");
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({uid, email, displayName, photoURL}));
          }).catch((error) => {
            // An error occurred
            const errorMessage = error.message;
            setMessage(errorMessage);
            navigate("/");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage);
          // navigate("/");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Logged in", user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setMessage(errorMessage);
          // navigate("/");

        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="../images/NetfixBackground.jpg" alt="" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="bg-black bg-opacity-80 absolute mx-auto my-36 right-0 left-0 w-3/12 p-10 h-3/2 text-white"
      >
        <table className="flex flex-col ">
          <td>
            <h1 className="font-bold text-3xl py-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
          </td>
          {!isSignInForm && (
            <td>
              <input
                ref={username}
                type="text"
                name="Name"
                id="Name"
                placeholder="Name"
                className="p-4 my-3 w-full bg-slate-700 border border-gray-500"
              />
            </td>
          )}
          <td>
            <input
              ref={email}
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              className="p-4 my-3 w-full bg-slate-700 border border-gray-500"
            />
          </td>
          <td>
            <input
              ref={password}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-4 my-3 w-full bg-slate-700 border border-gray-500"
            />
          </td>
          <td>
            <p className="text-red-600">{message}</p>
            <button
              className="p-3 my-5 bg-red-700 text-white font-bold w-full mx-0 rounded-lg"
              onClick={handleSubmit}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </td>
        </table>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netfix? SignUp Now"
            : "Already Registered! Login Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
