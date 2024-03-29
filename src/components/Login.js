import React, {useRef, useState} from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR, BG_URL } from '../utils/constants';


const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true);
    //we are declaring a state variable to help the sign in form become a sign up form

    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    //this will store the email entered by user in the form.
    const password = useRef(null); 
    //this will store the password entered by user in the form.

    const name = useRef(null); 

    const toggleSignInForm = () =>{
        setisSignInForm(!isSignInForm);
    }

    const handleButtonClick = () =>{
        //validate the form data. 
        console.log(email.current.value); 
        console.log(password.current.value);
        //console.log(name.current.value);

        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        //console.log(message);
        if(message) return; 
        
        else{
            //create a new user via Firebase
            //sign in / sign up should be done here

            //1. First check if the form is sign in or sign up

            if(!isSignInForm){
                //sign up logic - we get this from Firebase doc - https://firebase.google.com/docs/auth/web/password-auth
                //const auth = getAuth(); - Instead of writing it here, we are going to declare it in firebase.js and call it whenever required.

                createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: AVATAR ,
                      })
                      .then(() => {
                        // Profile updated!
                        // ...
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid, 
                                email: email, 
                                displayName: displayName, 
                                photoURL: photoURL,
                                })
                            );
                        //navigate("/browse");
                      }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(errorMessage);
                      });                      

                    console.log(user); 
                    //navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - "+ errorMessage);
                    // ..
                    console.log("Error while creating user - " + errorCode + " - "+ errorMessage);
                    console.log(name.current.value);
                    console.log(password);
                });


            }

            else{
                    //This will have sign in logic

                signInWithEmailAndPassword(auth, email.current.value , password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // will take user to the /browse page once success
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - "+ errorMessage);
                });

            }
        }
        

    }
return(
    <div>
        <Header/>
        <div className='absolute'>
            <img className='h-screen object-cover' src={BG_URL} alt="logo"/>
        </div>
        <form 
            onSubmit={(e) => e.preventDefault()} 
            className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
        >
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
            <input ref={name} type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700' />)}
            <input ref={email} type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
            <input ref={password} type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Are you new to Netflix? Sign up now" : "Already Registered, Sign in now"}</p>
        </form>
        
    </div>
);
}

export default Login;