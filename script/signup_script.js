const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const date = document.getElementById('date');
const gender = document.getElementById('gender');
const level = document.getElementById('level');
const phoneNumber = document.getElementById('phone-number');
const country = document.getElementById('country');
const userPassword = document.getElementById("password");
const confirmUserPassword = document.getElementById("confirm-password");
const submit = document.getElementById('btn-submit');
const signUpForm = document.getElementById("form");
let usersArray = [];

if (localStorage.key(usersArray)) {
    usersArray = JSON.parse(localStorage.getItem('usersArray'));
    console.log(usersArray);
    // export {usersArray};
}
// console.log(usersArray, localStorage.key(usersArray))

function detailsFunc() {
    class userDetails {
        constructor (firstName, lastName, email, date, gender, level, phoneNumber, country, password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.dateOfBirth = date;
            this.gender = gender;
            this.educationalLevel = level;
            this.phoneNumber = phoneNumber;
            this.country = country;
            this.password = password;
        }
    }
    return userDetails
}

const userDetails = detailsFunc();
let confirmedPassword;
let checkEmail;

submit.addEventListener('click',(e) => {
    e.preventDefault();
    if (userPassword.value === confirmUserPassword.value ) {
        if (usersArray.find((user) => user.email == email.value)) {
            checkEmail = true;
        } else {
            checkEmail = false;
        }
        if (!checkEmail) {
            confirmedPassword = userPassword.value;
        const newUserDetails = new userDetails(firstName.value, lastName.value, email.value, date.value, gender.value, level.value, phoneNumber.value, country.value, confirmedPassword);
        confirmUserPassword.style.border = '1.4px solid gray';
        usersArray.push(newUserDetails);
   
        localStorage.setItem('usersArray', JSON.stringify(usersArray))
        window.location.href = "login.html";
        } else {
            console.log('email has been used');
            document.querySelector('.notification').innerText = 'Email have already been used'
        }
        
        //console.log(JSON.parse(localStorage.getItem('usersArray')));
    } else {
        confirmUserPassword.style.border = '2px solid red';
        confirmUserPassword.title = 'password does not match';
        // console.log('incorrect password');
    }
})
