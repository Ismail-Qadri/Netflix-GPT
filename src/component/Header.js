import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import {signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constant';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {

    const navigate= useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            // navigate("/error")

          });
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
              navigate("/browse")
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });

          // Unsubscribe when component unmounts
          return ()=>unsubscribe();
    }, [])


  return (
    <div className="absolute flex justify-between top-0 left-0 w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black to-transparent z-10 w-screen">
      <img
        className="w-28 sm:w-36 md:w-44 lg:w-52"
        src={LOGO}
        alt="Netflix Logo"
      />
      {user && 
      <div className='flex p-2'>
        <img 
        className='w-12 h-12 '
        src={user?.photoURL}
        alt='user-icon'
        />
        <button
        onClick={handleSignOut}
        className='font-bold text-white'>(Sign Out)</button>
      </div>
}
    </div>
  );
};

export default Header;
// data:image/png;base64,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'
