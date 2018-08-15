
// Inital page load animations and 
window.onload = function(){
   
    var scrollTarget = document.getElementById("top-scroller");

    scrollTarget.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section2", offsetY:140}, ease:Power2.easeInOut});
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

/*var scene =new ScrollMagic.Scene({duration: 400, offset:40})
    .setTween("#top-scroller", {opacity: 0})
    .addTo(controller); */

    /*new ScrollMagic.Scene({
        duration: 600,    // the scene should last for a scroll distance of 100px
        offset: 50        // start this scene after scrolling for 50px
    })
    .setPin("#top-scroller") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller*/

var scene = new ScrollMagic.Scene({triggerElement: "#top-scroller", offset:-400})
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-scroller", "scrolled") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "light-nav") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#Rect1", "light-logo") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#Rect2", "light-logo") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#Rect3", "light-logo") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1"
    })
    .triggerHook(.15)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#Rect4", "light-logo") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);





               