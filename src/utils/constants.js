

export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"; 

export const AVATAR = "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"; 


//we need to pass options whenever we make an API call
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMD_KEY
    }
  }; 

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w780/";

  export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg";

  export const Supported_Languages=[
    {identifier:"english", name:"English"}, 
    {identifier:"hindi", name:"Hindi"}, 
    {identifier:"spanish", name:"Spanish"}
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;