

function togNav() {
  var nav = document.getElementById("mySidenav");
  if (nav.style.width == '100%') {
    nav.style.width = '0';
    nav.style.opacity = 0;
  } else {
    nav.style.width = "100%";
    nav.style.opacity = .8;
  }
}

function myFunction(x) {
    x.classList.toggle("change");
}



/* Set the width of the side navigation to 250px 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

*/