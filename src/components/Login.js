import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
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
