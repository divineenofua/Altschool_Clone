const openMenu = document.getElementById("open-menu-btn");
const closeMenu = document.getElementById("close-menu-btn");
const navMenu = document.getElementById("nav-class");
const closePageBtn = document.getElementById("close-btn");
const logInPage = document.getElementById("login-page");
const logInbtn = document.getElementById("login-btn");
const searchBtn = document.getElementById("search");
const hiddenSection = document.getElementById("hidden");
const closehiddenSection = document.getElementById("close-hide");
const courseProgress = document.querySelectorAll(".course-progress");
const progressIcon = document.getElementsByClassName("uil-angle-down");
let courseShow = document.getElementsByClassName("content");
const openAll = document.getElementById("angle-id");

var faqs = document.querySelectorAll(".content");
function faqOpen() {
  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("open");

      //  change icon
      const icon = faq.querySelector(".btn i");
      if (icon.className === "uil uil-angle-down") {
        icon.className = "uil uil-angle-up";
      } else {
        icon.className = "uil uil-angle-down";
      }
    });
  });
}
faqOpen();

openAll.addEventListener("click", () => {
  for (i = 0; i < faqs.length; i++) {
    faqs[i].classList.toggle("open");
  }
});



// search text
const messages = document.querySelector(".item-content");

const message = messages.querySelector(".top");
let messageSearch = document.getElementById("Search-input");

// searches chat
function searchMessage() {
  messageSearch = document.getElementById("Search-input").value;
  messageSearch = messageSearch.toLowerCase();
  let x = document.getElementsByClassName("content");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(messageSearch)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

// search chat
messageSearch.addEventListener("keyup", searchMessage);

searchBtn.addEventListener("click", () => {
  hiddenSection.style.display = "block";
});
closehiddenSection.addEventListener("click", () => {
  hiddenSection.style.display = "none";
});




openMenu.addEventListener("click", () => {
  navMenu.style.display = "flex";
  closeMenu.style.display = "inline-block";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  openMenu.style.display = "inline-block";
  closeMenu.style.display = "none";
  navMenu.style.display = " none";
});

closePageBtn.addEventListener("click", () => {
  logInPage.style.display = "none";
});
logInbtn.addEventListener("click", () => {
  logInPage.style.display = "block";
});

 
openMenu.addEventListener("click", () => {
  navMenu.style.display = "flex";
  closeMenu.style.display = "inline-block";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  openMenu.style.display = "inline-block";
  closeMenu.style.display = "none";
  navMenu.style.display = " none";
} );

 if (document.querySelector('body').id == 'courses') {
    document.getElementById('name').textContent = localStorage.getItem('active user').toUpperCase()
 } ;

closePageBtn.addEventListener("click", () => {
  logInPage.style.display = "none";
});
logInbtn.addEventListener("click", () => {
  logInPage.style.display = "block";
});


 