import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const authAuth = useSelector(store=> store.userAuth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-40 flex justify-between">
      <img src="../images/Netflix_Logo_PMS.png" alt="netfix" className="w-40" />
      {authAuth!=null ? <div className="profile my-auto flex ">
        <img src="../images/netflixUser.png" alt="netfix" className="w-10 m-2" />
        <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
      </div>:
      <div className="profile my-auto flex ">
      <button className="font-bold text-white" onClick={handleSignOut}>(Sign In)</button>
    </div>
      }
    </div>
  );
};

export default Header;
