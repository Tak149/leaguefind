

function togNav() {
  var nav = document.getElementById("mySidenav");
  if (nav.style.width == '100%') {
    nav.style.width = '0%';
    nav.style.opacity = 0;
  } else {
    nav.style.width = "100%";
    nav.style.opacity = .8;
  }
}

function myFunction(x) {
    x.classList.toggle("change");
}

