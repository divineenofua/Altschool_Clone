  
//  console.log("edrftygui");
 
 const userPassword = document.getElementById("password");
const confirmUserPassword = document.getElementById("confirm-password");
// const signUpForm = document.getElementById("form");
const form = document.getElementById("form");
const errorText = document.getElementById("text");
const userName = document.getElementById("firstName");
const subMit = document.getElementById("button");
 const loginName = document.getElementById("login-name");
const loginPassword = document.getElementById("login-password");
const log = document.getElementById("log");
 
 
 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userPassword.value == confirmUserPassword.value) {
    window.location.href = "login.html";
  } else {
    errorText.innerText = "Error: Passwords do not Match";
  }

  saveLocalData();
});

//  local storage
function saveLocalData() {
  localStorage.setItem("userName", userName.value);

  localStorage.setItem("confirmPassword", userPassword.value);
}
// login
 
 
 
 