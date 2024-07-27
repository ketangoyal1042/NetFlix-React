import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // this is like an eventListner this works on page refresh and auth state change loke login logouy signin signout
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({'uid': uid, 'email': email, 'displayName': displayName, 'photoURL': photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);
  return (
      <Outlet />
  );
};

export default Layout;
