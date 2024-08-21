import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg"
          alt="bglogo"
        />
      </div>

      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80">
        <h1 className="font-bold text-3xl m-3 p-3">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="FullName"
            className="p-2 m-3 w-full"
          />
        )}

        <input type="text" placeholder="Email" className="p-2 m-3 w-full" />

        <input
          type="password"
          placeholder="password"
          className="p-2 m-3 w-full"
        />

        <button className=" relative p-2 m-3 w-full  bg-red-800 rounded-md">
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>

        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? SIgn Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
