import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LANG_SELECTOR } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const authAuth = useSelector(store=> store?.userAuth?.userAuth);
  const showGPTPage = useSelector(store=> store?.gpt?.showGptSearch);
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

  const handleGptSearchClick = () => {
    // Toggle search GPT
    dispatch(toggleGptSearchView());
  };

  const handleLangSelect = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-40 flex justify-between">
      <img src="../images/Netflix_Logo_PMS.png" alt="netfix" className="w-40" />
      {authAuth!=null ? <div className="profile my-auto flex ">
        <select onChange={handleLangSelect} className="m-2 rounded-sm bg-transparent text-white font-bold border-none">
          {LANG_SELECTOR.map(lang=>(
            <option key={lang.Identifier} value={lang.Identifier} className="text-black">{lang.name}</option>
          ))}
        </select>
        <img src="../images/netflixUser.png" alt="netfix" className="w-10 m-2" />
        <button className="font-bold text-white mx-3 my-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded-sm" onClick={handleGptSearchClick}>{!showGPTPage?'GPT Search':"Home Page"}</button>
        <button className="font-bold text-white  mx-3 my-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded-sm" onClick={handleSignOut}>(Sign Out)</button>
      </div>:
      <div className="profile my-auto flex ">
      <button className="font-bold text-white  mx-3 my-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded-sm" onClick={handleSignOut}>(Sign In)</button>
    </div>
      }
    </div>
  );
};

export default Header;
