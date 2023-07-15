const usersArray = JSON.parse(localStorage.getItem('usersArray'));

const username = document.getElementById('username');
const password = document.getElementById('password');
const logIn = document.getElementById('log-in');
const logInPage = document.getElementById('login-page');
const removeModal = document.querySelector('.close i');
const addModal = document.querySelectorAll('.btn');
const openMenu = document.getElementById("open-menu-btn");
const closeMenu = document.getElementById("close-menu-btn");
const navMenu = document.getElementById("nav-class");

let savedUsername = '';

openMenu.addEventListener("click", () => {
    navMenu.style.display = "flex";
    closeMenu.style.display = "inline-block";
    openMenu.style.display ="none"
   })
   
   closeMenu.addEventListener("click", () => {
       openMenu.style.display ="inline-block";
       closeMenu.style.display = "none";
       navMenu.style.display = " none";
   } )

function checkLogin( username, password) {
    let incorrectPassword = false;
    let validEmail = false;
    usersArray.forEach(userObj => {
        if (userObj.email == username.value || userObj.username == username.value) {
            validEmail = true;
            username.parentElement.style.border = 'none';
            username.parentElement.nextElementSibling.innerText = '';
            if (userObj.password == password.value) {
                localStorage.setItem('active user', `${userObj.lastName} ${userObj.firstName}`);
                username.parentElement.nextElementSibling.innerText = '';
                incorrectPassword = false;
                window.location.href = 'courses.html';
            } else {
                password.parentElement.style.border = '2px solid red';
                password.title = 'incorrect password';
                incorrectPassword = true;
                password.parentElement.nextElementSibling.innerText = 'incorrect password';
            }
        } else if((userObj.email != username.value || userObj.username != username.value) && password.parentElement.style.border == '2px solid red' && !incorrectPassword && !validEmail) {
            incorrectPassword = true;
            validEmail = false;
            username.parentElement.nextElementSibling.innerText = 'username not found';
            password.parentElement.style.border = 'none';
            username.parentElement.style.border = '2px solid red';
            username.title = 'username / email not found';
        } else if ((userObj.email != username.value || userObj.username != username.value) && !validEmail) {
            username.parentElement.nextElementSibling.innerText = 'username not found';
            username.parentElement.style.border = '2px solid red';
            username.title = 'username / email not found';
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