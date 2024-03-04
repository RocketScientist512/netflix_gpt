import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
    ]);

    useEffect(()=>{
        
        onAuthStateChanged(auth, (user) => {
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
            //now we redirect user to the /browse page. 
            
            
        } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            //if the user signs out, then we navigate them to the main page. 
            

        }
        });

    },[])
  
    return (
    <div>
        {/* <Login/>
        <Browse/> */}
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body