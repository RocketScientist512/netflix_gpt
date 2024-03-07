# Netflix GPT

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploy app to production
- Create sign up user in firebase
- Implement sign in user API
- Created our redux store with userSlice
- Implemented Sign Out feature
- Update profile api call
- Fetch movies from TMDB Movies
- Bug fix : for sign up user displayName and profile picture update
- Bug fix : If user is not logged in, take them to sign in page and if logged in, take them to /browse all the time.
- Unsubscribed to the onAuthStateChange callback. 
- Added hardcoded values to the constant files. 
- Register for TMDB API and create an application there. Then get access token. 
- From the documentation get data from NOW PLAYING movies list. Pass the options in the constants file to be re-used. 
- Custom Hook for now playing movies
- Create a movie slice
- Update store with movies data
- Planning for main container & secondary container
- Fetch data for trailer video
- Update store with Trailer video data
- Embedded the Youtube video & make it autoplay and mute. 
- Added tailwind classes to make the Main container YT video look good. 
- Build secondary component


# Features we are going to build
- Login / sign up
    - We have a logged out page
    - We have a sign in page with a form
 - Browse page will have 
   - a header and 
   - a background movie playing
        - Trailer in background
        - Movie title and description
        - Movies list with several movie rows (Suggestions)
            - Movies list * N
            - This appears for a logged in user
- Netflix GPT
    - Search bar
    - Movie Suggestions
