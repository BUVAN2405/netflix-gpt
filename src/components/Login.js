import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="bglogo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[70%] md:w-3/12 fixed bg-black   pt-4  p-14 my-36 mx-auto   right-0 left-0 text-white rounded-xl bg-opacity-80"
      >
        <h1 className="   font-bold text-3xl  p-2  m-3 ">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="FullName"
            className="p-2 m-3 w-full bg-gray-900 left-0 right-0"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-3 w-full bg-gray-900 left-0 "
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 m-3 w-full  bg-gray-900 left-0 right-0"
        />
        <p>{errorMessage}</p>

        <button
          className=" relative p-2 m-3 w-full  bg-red-800 rounded-md"
          onClick={handleButtonClick}
        >
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
