const slider = document.querySelector(".slider")
const progressSlider = document.querySelector(".slider-progress")

const twenty5 = document.querySelector(".twenty5");

const pageView = document.querySelector(".pageview") ;

slider.oninput = function() {
    progressSlider.style.width = this.value + "%";
}

function mediaQuery(x) {
    if (x.matches) { // If media query matches
      twenty5.style.fontSize = "10px";
      twenty5.innerHTML = "-25%"
    } else {
      twenty5.style.fontSize = "20px";
      twenty5.innerHTML = "25%"
    }
  }
  
  var x = window.matchMedia("(max-width: 375px)")
  mediaQuery(x) 



