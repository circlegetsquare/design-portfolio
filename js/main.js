// Inital page load animations and 
$(function(){

    var logoNav= document.getElementById("nav-logo");
    logoNav.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section1", offsetY:140}, ease:Power2.easeInOut});
    }

    var nav1= document.getElementById("nav-1");
    nav1.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section2", offsetY:140}, ease:Power2.easeInOut});
    }

    var scrollArrow = document.getElementById("top-scroller");
    scrollArrow.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section2", offsetY:140}, ease:Power2.easeInOut});
    }

    var leftNav1= document.getElementById("left-nav1");
    leftNav1.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section2", offsetY:140}, ease:Power2.easeInOut});
    }

    var leftNav2= document.getElementById("left-nav2");
    leftNav2.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section3", offsetY:140}, ease:Power2.easeInOut});
    }

    var leftNav3= document.getElementById("left-nav3");
    leftNav3.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section4", offsetY:140}, ease:Power2.easeInOut});
    }

    var leftNav4= document.getElementById("left-nav4");
    leftNav4.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section5", offsetY:140}, ease:Power2.easeInOut});
    }
    
    // LazyLoad
    var myLazyLoad = new LazyLoad({
        data_src: "src"
    });    
})

/* ... add scenes to offsetScenes array ... */

/*window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("top-nav").className = "is-scrolled";
    } else {
        document.getElementById("top-nav").className = "unscrolled";
    }
}*/

var controller = new ScrollMagic.Controller();


var scene = new ScrollMagic.Scene({triggerElement: "#section2", offset: -140})
    .setPin("#side-nav")
    .triggerHook("onLeave")
    //.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#top-scroller", offset:-200})
    .triggerHook(".15")
    //.removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-scroller", "scrolled") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: -120})
    .triggerHook("onLeave")
    .on('enter leave', function () {
    $('#top-nav').toggleClass('blue-header');
    $('#left-nav1').toggleClass('left-nav-active');
    $('#my-html').toggleClass('html-bkg-toggle');
    })
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", offset: -120})
    .triggerHook("onLeave")
    .on('enter leave', function () {
        $('#top-nav').toggleClass('blue-header');
        $('#top-nav').toggleClass('mint-header');
        $('#left-nav1').toggleClass('left-nav-active');
        $('#left-nav2').toggleClass('left-nav-active');
        })
    //.addIndicators({name: "2"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", offset: -120})
    .triggerHook("onLeave")
    .on('enter leave', function () {
        $('#top-nav').toggleClass('mint-header');
        $('#top-nav').toggleClass('darkgray-header');
        $('#left-nav2').toggleClass('left-nav-active');
        $('#left-nav3').toggleClass('left-nav-active');
        })
    //.addIndicators({name: "3"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", offset: -120})
    .triggerHook("onLeave")
    .on('enter leave', function () {
        $('#top-nav').toggleClass('darkgray-header');
        $('#top-nav').toggleClass('orange-header');
        $('#left-nav3').toggleClass('left-nav-active');
        $('#left-nav4').toggleClass('left-nav-active');
        })
    //.addIndicators({name: "3"}) // add indicators (requires plugin)
    .addTo(controller);

   /* var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'https://placekitten.com/600/400',
            w: 600,
            h: 400
        },
        {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
        }
    ];
    
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };
    
    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
    */
  
   (function($) {
    $('.picture').each( function() {
        // Get the items.
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }

                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        // Preload image.
       /* var image = [];
        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        }); */

        // Binding click event.
        var $pswp = $('.pswp')[0];
        $pic.on('click', 'figure', function(event) {
            event.preventDefault();
            
            var $index = $(this).index();
            var options = {
                index: $index,
                bgOpacity: 0.7,
                showHideOpacity: true
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
})(jQuery);

               