import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handlebuttonClick = () => {
    const error = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(error);
    if (error) return;
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
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, displayName, email, photoURL }));
              // navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.errorMessage);
            });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
          // ..
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
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto text-white right-0 left-0"
      >
        <h1 className="text-2xl font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            className="w-80 h-12 px-4 py-2 rounded-lg my-2 bg-gray-700"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          ref={email}
          className="w-80 h-12 px-4 py-2 rounded-lg my-2 bg-gray-700"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className="w-80 h-12 px-4 py-2 rounded-lg my-2 bg-gray-700"
          type="password"
          placeholder="Password"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          onClick={handlebuttonClick}
          className="w-80 h-12 px-4 py-2 rounded-lg my-2 bg-red-600 text-white"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to netflix? Sign Up now"
            : "Already register? Sign In now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
