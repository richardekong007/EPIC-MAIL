// Note: this is just for experimental purpose

const admin = 'admin';
const userPage = 'userPage.html';
const adminPage = 'adminPage.html';

function authenticate() {

    const usr = document.getElementById('email').value;
    const pwd = document.getElementById('password').value;
    if (usr && pwd) {
        if (usr === admin && pwd === admin) {
            accessPage(adminPage);
        } else {
            accessPage(userPage);
        }
    }
}

function accessPage(page) {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    if (signUpForm) {
        signUpForm.action = page;
    }
    if (signInForm) {
        signInForm.action = page;
    }
}