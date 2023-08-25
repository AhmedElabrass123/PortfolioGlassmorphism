window.addEventListener("load", (e) => {
  document.querySelector(".home-section").classList.add("active");
  document.querySelector(".page-loader").classList.add("fadeOut");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 1000);
});
/*-----------
Toggle Navbar
-----------*/

let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", (e) => {
  hideSections();
  togglerNavbar();
});
function hideSections() {
  document.querySelector("section.active").classList.toggle("fadeOut");
}
function togglerNavbar() {
  document.querySelector(".header").classList.toggle("active");
}
/*-----------
Active Sections
-----------*/
let sections = document.querySelectorAll("section");
let linkItems = document.querySelectorAll(".link-item");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active");
    const hash = e.target.hash;
    console.log(hash);
    if (e.target.classList.contains("nav-item")) {
      togglerNavbar();
    } else {
      hideSections();
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fadeOut");
      document.querySelector(hash).classList.add("active");
      window.scrollTo(0, 0);
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});
