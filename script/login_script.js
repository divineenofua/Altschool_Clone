const usersArray = JSON.parse(localStorage.getItem('usersArray'));

const username = document.getElementById('username');
const password = document.getElementById('password');
const logIn = document.getElementById('log-in');
const logInPage = document.getElementById('login-page');
const removeModal = document.querySelector('.login main .close i');
const addModal = document.querySelectorAll('.btn');

let savedUsername = '';

function checkLogin( username, password) {
    usersArray.forEach(userObj => {
        if (userObj.email == username.value || userObj.username == username.value) {
            if (userObj.password == password.value) {
                window.location.href = 'index.html';
            } else {
                password.style.border = '2px solid red';
                password.title = 'incorrect password';
            }
        } else {

        }
    });
}

logIn.addEventListener('click',(e) => {
    e.preventDefault();
        checkLogin(username, password)
});

removeModal.addEventListener('click', () => {
    logInPage.style.display = 'none';
});

addModal.forEach(btn => btn.addEventListener('click', () => {
    logInPage.style.display = 'block';
}))