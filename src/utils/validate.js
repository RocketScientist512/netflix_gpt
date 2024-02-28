// contains validation logic for handleButtonClick() in Login.js

export const checkValidData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); //will pass either true or false
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isEmailValid) {return "Email ID is not valid";}
    if(!isPasswordValid){return "Password is not valid";}
    // if(!isNameValid){return "Name is not valid";}
    
    return null; 

};

