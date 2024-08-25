function registration() {

    const signupName = document.getElementById("name").value;
    const signupEmail = document.getElementById("email").value;
    const signupPassword= document.getElementById("password").value;

    const namePattern = /^[A-Za-z\s\-']+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(!signupName){
        alert("Please enter your Full Name");
        return
    }

    if(!namePattern.test(signupName)){
        alert("Please enter valid name");
        return
    }

    if(!signupEmail){
        alert("Please enter your email");
        return
    }

    if(!emailPattern.test(signupEmail)){
        alert("Please enter valid email");
        return
    }

    if(!signupPassword){
        alert("Please enter your password");
        return
    }

    if(signupPassword.length < 8){
        alert("Password length should be 8 character!");
        return
    }

    // save datd at localstorage
    const users = JSON.parse(localStorage.getItem("user")) || [];
    const userExist = users.some(
        (newUser) => newUser.email === email
    );
    if (userExist){
        alert("User Already exist");
        return;
    }

    const newUser = {
        name : signupName,
        email: signupEmail,
        password : signupPassword,
        isLoggedIn : false
    };

    users.push(newUser);
    let objectConvertToString = JSON.stringify(users);
    localStorage.setItem("user", objectConvertToString);

    alert("Registration successful");
    window.location = "index.html";

}

function isUserExits(users, email){
        
    let userExist = false;
    for (let i=0; i<users.length; i++){
        if(users[i].email === email){
            userExist = true;
            break;
        }
    }
    return userExist;

}

function login(){

    let loginEmail = document.getElementById("email").value;
    let loginPassword = document.getElementById("password").value;

    let signupEmail = document.getElementById("email").value;
    let signupPassword = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem('user'));

    if (loginEmail == "" || loginPassword == "") {
        alert("all field is required!");
        return;
    }
    let isValid = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == signupEmail && users[i].password == signupPassword) {
            isValid = true;
            break;
        }

    }
    if (isValid) {
        window.location.href = "quizz.html";
    }
    else {
        alert("invalid data!");
        return;
    }

    let localStorageLogin = localStorage.setItem(JSON.stringify("isLogddin", "true"));



}