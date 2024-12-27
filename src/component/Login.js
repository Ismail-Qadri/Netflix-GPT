import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword ,
    updateProfile}
     from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { User_Avtar } from '../utils/constant';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate=useNavigate();
    const dispatch= useDispatch();

    const email=useRef(null);  // it will create a reference to input box
    const password= useRef(null);
    const name=useRef(null);

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick=()=>{
        //validation
        const nameValue = name.current ? name.current.value : ''; // Safely handle name reference
    const msg = checkValidData(email.current.value, password.current.value, isSignInForm ? '' : nameValue); // Pass name only for Sign Up
        // const msg= checkValidData(email.current.value, password.current.value, name.current.value);
        console.log("msg",msg);
        setErrorMessage(msg);
        if(msg) return;

        console.log("email",email.current.value); // ref of input box as an OBJECT
        console.log("pswd:",password.current.value);
        console.log("name:",nameValue);

        if(!isSignInForm){
            // Signup logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value,
                nameValue
            )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);

    updateProfile(user, {
        displayName: nameValue, 
        photoURL: User_Avtar
      }).then(() => {
        // Profile updated!
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(
            addUser({
                uid: uid,
                email:email, 
                displayName: displayName, 
                photoURL: photoURL
            }));
        // navigate("/browse")

      }).catch((error) => {
        // An error occurred
        setErrorMessage(error.message)
      });

      
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+" "+ errorMessage)
  });
        }
        else{
            // SignIn logic
            signInWithEmailAndPassword(auth, 
                email.current.value, 
                password.current.value,
                nameValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+ errorMessage)
  });
        }
    
        
    }
    return (
        <div className="relative h-screen">
            <Header />
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
                    alt="background-img"
                    className="h-full w-full object-cover"
                />
            </div>
            <form
            onSubmit={(e)=> e.preventDefault()}  // dont want to submit the form/ stop reloading the page
                className="absolute p-6 bg-black bg-opacity-85 w-11/12 max-w-md sm:w-9/12 md:w-6/12 lg:w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg shadow-lg"
            >
                <h1 className="font-bold text-2xl sm:text-3xl py-4 text-center">
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </h1>
                {!isSignInForm && (
                    <input
                    ref={name}
                        className="p-3 my-2 w-full bg-transparent border border-white rounded-lg focus:outline-none"
                        type="text"
                        placeholder="Full Name"
                    />
                )}
                <input
                ref={email}
                    className="p-3 my-2 w-full bg-transparent border border-white rounded-lg focus:outline-none"
                    type="text"
                    placeholder="Email or mobile number"
                />
                <input
                ref={password}
                    className="p-3 my-2 w-full bg-transparent border border-white rounded-lg focus:outline-none"
                    type="password"
                    placeholder="Password"
                />
                <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
                <button
                    className="p-3 my-4 text-white font-bold bg-red-600 rounded-lg w-full hover:bg-red-700 transition"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p
                    className="py-4 text-center cursor-pointer underline hover:text-red-600 transition"
                    onClick={handleSignInForm}
                >
                    {isSignInForm
                        ? 'New to Netflix? Sign Up Now'
                        : 'Already registered? Sign In Now'}
                </p>
            </form>
        </div>
    );
};

export default Login;
