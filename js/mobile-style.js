//For Responsive Navigation Bar.
function openNav() {
    var sideNav = document.getElementById("mySidenav");
    sideNav.style.width = "250px";
    var dropDownButton = document.getElementById("dropdown-menu-btn");
    dropDownButton.classList.remove('deactivated_drop_down');
    dropDownButton.classList.add('activated_drop_down');
}

function closeNav() {
    var sideNav = document.getElementById("mySidenav");
    sideNav.style.width = "0";
    var dropDownButton = document.getElementById("dropdown-menu-btn");
    dropDownButton.classList.remove('activated_drop_down');
    dropDownButton.classList.add('deactivated_drop_down');
}