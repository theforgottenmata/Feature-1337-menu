function funcIcon(){
    var classNav = "navbar"
    var idNav = document.getElementById("nav");

    if (idNav.className === classNav) {
        idNav.className += " responsive";
    } else {
        idNav.className = classNav;
    }
}

