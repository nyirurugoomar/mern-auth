// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

function OAuth() {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      // eslint-disable-next-line no-unused-vars
      const data = await res.json();

      dispatch(signInSuccess(data));
    } catch (error) {
      console.log("could not able to login with google", error);
    }
  };
  return (
    <button
      type="button"
      // eslint-disable-next-line no-undef
      onClick={handleGoogleClick}
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}

export default OAuth;
