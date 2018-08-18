// Inital page load animations and 
$(function(){

    var scrollTarget = document.getElementById("top-scroller");

    scrollTarget.onclick = function() {
        TweenMax.to(window, 1.25, {scrollTo:{y:"#section2", offsetY:140}, ease:Power2.easeInOut});
    }
    // LazyLoad

    var myLazyLoad = new LazyLoad({
        data_src: "src"
    });
    
})

/*window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("top-nav").className = "is-scrolled";
    } else {
        document.getElementById("top-nav").className = "unscrolled";
    }
}*/

var controller = new ScrollMagic.Controller();

/* var scene =new ScrollMagic.Scene({duration: 200, offset:40})
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
    //.removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-scroller", "scrolled") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);


var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1"
    })
    .triggerHook(.1)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "blue-header") // add class toggle
    //.addIndicators({name: "1"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger2"
    })
    .triggerHook(.1)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "mint-header") // add class toggle
    //.addIndicators({name: "2"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger3"
    })
    .triggerHook(.1)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "darkgray-header") // add class toggle
    //.addIndicators({name: "3"}) // add indicators (requires plugin)
    .addTo(controller);
/*
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger4"
    })
    .triggerHook(.1)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "orange-header") // add class toggle
    //.addIndicators({name: "4"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger5"
    })
    .triggerHook(.1)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "yellow-header") // add class toggle
    //.addIndicators({name: "5"}) // add indicators (requires plugin)
    .addTo(controller); */

/*var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger6"
    })
    .triggerHook(.1)
    .removeClassToggle(true) //remove class toggle
    .setClassToggle("#top-nav", "mint-header") // add class toggle
    //.addIndicators({name: "6"}) // add indicators (requires plugin)
    .addTo(controller); */
    

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

               