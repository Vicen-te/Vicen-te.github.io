// When we scroll call myfunction
window.onscroll = function() {myFunction()};

// Get the header/navbar
const header = document.getElementById("header");

// Get the offset position of the navbar
const animate = header.offsetTop + 30;

let section = document.querySelectorAll(".section");
let menu = document.querySelectorAll(".links li a");

function myFunction() {
  // If the pageYOffset is greater than the navbar position, add the animate class
  if (window.pageYOffset > animate) {
      header.classList.add("animate");
  } 
  // If not, remove the animate class
  else {
      header.classList.remove("animate");
  }

  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active_color");
        document.querySelector(".links li a[data-ref*=" + id + "]").classList.add("active_color");
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  myFunction();
});

const home = document.getElementById("home");
const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

let clickhome = document.getElementsByClassName("homeRef");
let clickabout = document.getElementsByClassName("aboutRef");
let clickportfolio = document.getElementsByClassName("portfolioRef");
let clickcontact = document.getElementsByClassName("contactRef");


Object.values(clickhome).forEach(element => {
  element.addEventListener("click", function(){scrollid(home)});
});
Object.values(clickabout).forEach(element => {
    element.addEventListener("click", function(){scrollid(about)});
});

Object.values(clickportfolio).forEach(element => {
  element.addEventListener("click", function(){scrollid(portfolio)});
});
Object.values(clickcontact).forEach(element => {
    element.addEventListener("click", function(){scrollid(contact)});
});

function scrollid(element){
    doScrolling(element.getBoundingClientRect().y, 1000);
}

function doScrolling(elementY, duration) { 
    let startingY = window.pageYOffset;
    let start;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      
      // Elapsed milliseconds since start of scrolling.
      let time = timestamp - start;

      // Get percent of completion in range [0, 1].
      let percent = Math.min(BezierBlend(time / duration), 1);
  
      window.scrollTo(0, startingY + elementY * percent);
  
      // Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    })
}

//Ease in
function BezierBlend(time)
{
  if(time > 1) return 1;
  return time * time * (3.0 - 2.0 * time);
}

// DropDown
const clickdropdown= document.getElementById("links-toggle");
clickhome[1].addEventListener("click", closeDropDown);
clickabout[0].addEventListener("click", closeDropDown);
clickportfolio[0].addEventListener("click", closeDropDown);
clickcontact[0].addEventListener("click", closeDropDown);

function closeDropDown(){
  if(document.body.offsetWidth < 1040){
    clickdropdown.checked = false;
  }
}