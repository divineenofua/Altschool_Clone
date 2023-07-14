const openMenu = document.getElementById("open-menu-btn");
const closeMenu = document.getElementById("close-menu-btn");
const navMenu = document.getElementById("nav-class");
const closePageBtn = document.getElementById("close-btn");
const logInPage = document.getElementById("login-page");
const logInbtn = document.getElementById("login-btn");
const searchBtn = document.getElementById("search");
const hiddenSection = document.getElementById("hidden");
const closehiddenSection = document.getElementById("close-hide");
const progressBar = document.getElementById("angle-id");
const  courseProgress = document.querySelector('.course-progress');
const  courseProgressClass = document.querySelectorAll(".uil-angle-down");

// progressBar.addEventListener("click", () => {
//   courseProgress.classList.toggle("active");
// // courseProgress.style.display = 'block';
// })

 courseProgressClass.forEach(show => {
show.addEventListener("click", () => {
    courseProgress.classList.toggle("active");

    // courseProgress.classList.toggle("active");
})
})

searchBtn.addEventListener("click", () => {
    hiddenSection.style.display = "block";
     
   })
closehiddenSection.addEventListener("click", () => {
    hiddenSection.style.display = "none";
     
   })

openMenu.addEventListener("click", () => {
 navMenu.style.display = "flex";
 closeMenu.style.display = "inline-block";
 openMenu.style.display ="none"
});

closeMenu.addEventListener("click", () => {
    openMenu.style.display ="inline-block";
    closeMenu.style.display = "none";
    navMenu.style.display = " none";
} );

 if (document.querySelector('body').id == 'courses') {
    document.getElementById('name').textContent = localStorage.getItem('active user').toUpperCase()
 }

} )

 closePageBtn.addEventListener( "click", () => {
 logInPage.style.display = "none";
})

 logInbtn.addEventListener( "click", () => {
 logInPage.style.display = "block";
})
