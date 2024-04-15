const navItems = document.getElementById("navitems")
const menuIcon = document.getElementById("hamburger")
const menuClose = document.getElementById("hamburgerClose")
const menuActiveIcon = document.getElementById("triangle")

menuIcon.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "flex";
    menuIcon.style.display = "none";
    navItems.style.display = "flex";
    menuClose.style.display = "flex";
});

menuClose.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "none";
    menuIcon.style.display = "flex";
    navItems.style.display = "none";
    menuClose.style.display = "none";
});