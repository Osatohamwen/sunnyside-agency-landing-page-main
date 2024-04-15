const navItems = document.getElementById("navitems")
const menuIcon = document.getElementById("hamburger")
const triangle = document.getElementById("triangle")
const menuActiveIcon = document.getElementById("hamburgerClose")

menuIcon.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "inline-flex";
    menuIcon.style.display = "none";
    navItems.style.display = "flex";
    triangle.style.display = "flex";
});

menuActiveIcon.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "none";
    menuIcon.style.display = "inline-flex";
    navItems.style.display = "none";
    triangle.style.display = "none";
});