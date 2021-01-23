var email = document.getElementById('Email');
var password = document.getElementById('Password');
function validate() {
    var u = document.getElementById("Email").value;
    var p1 = document.getElementById("Password").value;
    // Name and Password from the register-form

    if (u == "") {
        alert("Please input your Email!");
        return false;
    }
    if (p1 == "") {
        alert("Please input your Passsword !");
        return false;
    }
    localStorage.setItem('Email', email.value);
    localStorage.setItem('Password', password.value);
    var storedName = localStorage.getItem('Email');
    var storedPw = localStorage.getItem('Password');
    alert("welcome " + storedName)
    return true;
}
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('Email');
    var storedPw = localStorage.getItem('Password');

    // entered data from the login-form
    var userName = document.getElementById('UEmail');
    var userPw = document.getElementById('UPassword');

    // check if stored data from register-form is equal to data from login form
    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
        return true;
    } else {
        alert("error" + storedName);
        return false;
    }
}