$(function(){
    TweenMax.to("#logo-div1", 2, {ease: Power3.easeOut, opacity:1, delay:.5});
    TweenMax.set("#top-container", {className:"-=hidden"}); 
    TweenMax.staggerFrom(["#logo-div2", "#logo-div3", "#logo-div4"], 1, {ease: Power3.easeOut, top:-15, delay:2.5}, .2);
    TweenMax.staggerTo(["#logo-div2", "#logo-div3", "#logo-div4"], 1, {ease: Power3.easeOut, opacity:1, delay:2.5}, .2);
    TweenMax.to("#logo-div1", .8, {ease: Back.easeInOut.config(1), x:-58, delay:5.75});
    TweenMax.staggerFrom(["#name-title", "#title-title"], 1, {ease: Power3.easeOut, top:25, opacity:0, delay:4}, .3);
    TweenMax.staggerTo(["#nav-1", "#nav-2", "#nav-3", ], 1, {ease: Power3.easeInOut, bottom:15, opacity:1, delay:4.4}, .12);
    TweenMax.from(["#top-content"], 1.25, {ease: Power3.easeOut, opacity:0, delay:4.85});
    TweenMax.set("#top-scroller", {className:"-=hidden", delay:5});    
})