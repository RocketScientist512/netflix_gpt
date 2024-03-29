import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, Supported_Languages } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  //ensuring that the language bar only shows when someone clicks on GPT Search
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(()=>{
    //we have added unsubscribe from Firebase and made sure that it is called in the return whenever we wish to unload
   const unsubscribe=  onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(
            addUser({
                uid: uid, 
                email: email, 
                displayName: displayName, 
                photoURL: photoURL,
                })
            );

            //writing a condition that if a user is logged in, they always go to the browse page. 
                navigate('/browse'); //this throws an error because navigate is outside the Router Provider. We can only navigate inside the children of the Router Provider. 

        //now we redirect user to the /browse page. 
        
        
    } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        //if the user signs out, then we navigate them to the main page. 
        navigate('/');
        //we need to move the useEffect() inside the Router Provider and a central place. So we will move it from Body.js to Header.js
    }
    });

    //we need to unsubscribe onAuthState to avoid constant unmounting. Called when components unmounts and unsubscribes onAuth
    return () =>unsubscribe() ;

},[]);

const handleGptSearchClick = () =>{
  //toggle GPT Search option
  dispatch(toggleGptSearchView());
}

const handleLanguageChange = (e) =>{
  // console.log(e.target.value); this is to see if the language is correctly being collected or not
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex flex-col md:flex-row'>
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt = "Logo"/>
        {user && <div className="flex p-2 justify-between">
        {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
              {/* Fetching data for languages from constant.js because we created an export there */}
              {Supported_Languages.map( (lang) => (<option key={lang.identifier} value={lang.identifier} >{lang.name}</option>))}
              {/* <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option> */}

              {/* To modify the language on the page as well , we need to manage this via REDUX store */}
            </select>}
          <button className='py-2 px-4 mx-4 my-1 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GPT Search" }
          </button>
          <img className="hidden md:block w-11 h-11" alt="user icon" src={user?.photoURL} /> 
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign out)</button>
        </div>}
       
    </div>
  )
}

export default Header