const navItems = document.getElementById("navitems")
const menuIcon = document.getElementById("hamburger")
const menuActiveIcon = document.getElementById("triangle")

menuIcon.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "flex";
    menuIcon.style.display = "inline-flex";
    navItems.style.display = "flex";
});

// menuIcon.addEventListener('click',(e) => {
//     menuActiveIcon.style.display = "none";
//     menuIcon.style.display = "inline-flex";
//     navItems.style.display = "none";
// });