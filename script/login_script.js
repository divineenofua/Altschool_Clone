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
    usersArray.forEach(userObj => {
        if (userObj.email == username.value || userObj.username == username.value) {
            if (userObj.password == password.value) {
                localStorage.setItem('active user', `${userObj.lastName} ${userObj.firstName}`)
                window.location.href = 'courses.html';
            } else {
                password.style.border = '2px solid red';
                password.title = 'incorrect password';
            }
        } else {
            username.style.border = '2px solid red';
            username.title = 'incorrect password';
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