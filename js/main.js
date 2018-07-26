// Inital page load animations and 
window.onload = function(){
    TweenMax.from("#logo-div1", 2, {ease: Power3.easeOut, opacity:0, delay:.5});
    TweenMax.staggerFrom(["#logo-div2", "#logo-div3", "#logo-div4"], 1, {ease: Power3.easeOut, top:-15,opacity:0, delay:2.5}, .2);
    TweenMax.to("#logo-div1", 1, {ease: Back.easeInOut.config(1), x:-58, delay:6});
    TweenMax.staggerFrom(["#name-title", "#title-title"], 1, {ease: Power3.easeOut, top:25, opacity:0, delay:4}, .3);
    TweenMax.staggerFrom(["#nav-1", "#nav-2", "#nav-3", ], 1, {ease: Power3.easeOut, bottom:15, opacity:0, delay:4.65}, .1);
    TweenMax.from(["#top-content", "#top-scroller"], 1.25, {ease: Power3.easeOut, opacity:0, delay:4.75});
   
    var scrollTarget = document.getElementById("top-scroller");

    scrollTarget.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section2", offsetY:195}, ease:Power2.easeInOut});
    }
}

/*window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("top-nav").className = "is-scrolled";
    } else {
        document.getElementById("top-nav").className = "unscrolled";
    }
}*/

var controller = new ScrollMagic.Controller();

var scene =new ScrollMagic.Scene({duration: 100, offset:40})
    .setTween("#top-scroller", {opacity: 0})
    .addTo(controller);

    /*new ScrollMagic.Scene({
        duration: 600,    // the scene should last for a scroll distance of 100px
        offset: 50        // start this scene after scrolling for 50px
    })
    .setPin("#top-scroller") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller*/


var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "darkgray-header") // add class toggle
    .addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger2"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "blue-header") // add class toggle
    .addIndicators({name: "2"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger3"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "green-header") // add class toggle
    .addIndicators({name: "3"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger4"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "yellow-header") // add class toggle
    .addIndicators({name: "4"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger5"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "mint-header") // add class toggle
    .addIndicators({name: "5"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger6"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "orange-header") // add class toggle
    .addIndicators({name: "6"}) // add indicators (requires plugin)
    .addTo(controller);
    


               