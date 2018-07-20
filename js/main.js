window.onload = function(){
    TweenMax.staggerFrom(["#logo-div", "#name-title", "#title-title", "#nav-menu"], 1, {ease: Power3.easeOut, top:35, opacity:0, delay:.5}, .3);
    TweenMax.from("#top-content", 1.25, {ease: Power3.easeOut, opacity:0, delay:2.75});
   }

var scrollTarget = document.getElementById("#test-scroll");

scrollTarget.onclick = function() {
    TweenMax.to(window, 2, {scrollTo:"#section2"});
  }