const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const sideNav = document.getElementById("sideNav");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const featureBtn = document.querySelector(".featureBtn");
const featureMenu = document.querySelector(".featuresMenu");
const companyBtn = document.querySelector(".companyBtn");
const companyMenu = document.querySelector(".companyMenu");
const overlay = document.getElementById("backOverlay");
const body = document.getElementById("body");

// Functions
openMenu.addEventListener("click", () => {
    sideNav.classList.add("show-nav");
    overlay.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    sideNav.classList.remove("show-nav");
    overlay.style.display = "none";
});

featureBtn.addEventListener("click", () => {
    featureMenu.classList.toggle("sub-toggle");
    if (featureMenu.classList.contains("sub-toggle")) {
        arrow1.style.transform = "rotate(180deg)";
        featureMenu.style.display = "flex";
    } else {
        arrow1.style.transform = "rotate(0deg)";
        featureMenu.style.display = "none";
    }
});

companyBtn.addEventListener("click", () => {
    companyMenu.classList.toggle("sub-toggle");
    if (companyMenu.classList.contains("sub-toggle")) {
        arrow2.style.transform = "rotate(180deg)";
        companyMenu.style.display = "flex";
    } else {
        arrow2.style.transform = "rotate(0deg)";
        companyMenu.style.display = "none";
    }
});
