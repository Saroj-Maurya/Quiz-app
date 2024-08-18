function handleSignup() {

    let signupName = document.getElementById("name").value;
    let signupEmail = document.getElementById("email").value;
    let signupPassword = document.getElementById("password").value;
    if (signupEmail == "" || signupPassword == "") {
        alert("all field is requid!");
        return;
    }

    let isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isEmail.test(signupEmail)) {
        alert("invalid Email!")
        return false;
    }

    if (signupPassword.length < 6) {
        alert("password length should be 6 character!");
        return;
    }



    let users = JSON.parse(localStorage.getItem('user')) || [];
    if (isUserExits(users, signupEmail)) {
        alert("user already exits!");
        return;
    }

    let userCredential = {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        isLoggedIn: false
    }

    users.push(userCredential);
    localStorage.setItem("user", JSON.stringify(users));

    window.location.href = "login.html";
}

function isUserExits(users, email) {

    let userExist = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            userExist = true;
            break;
        }
    }

    return userExist;
}

function handleLogin() {


    let loginEmail = document.getElementById("email").value;
    let loginPassword = document.getElementById("password").value;

    let signupEmail = document.getElementById("email").value;
    let signupPassword = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem('user'));

    if (loginEmail == "" || loginPassword == "") {
        alert("all field is requid!");
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
        window.location.href = "quizstart.html";
    }
    else {
        alert("invalid data!");
        return;
    }

    let localStorageLogin = localStorage.setItem(JSON.stringify("isLogddin", "true"));



}