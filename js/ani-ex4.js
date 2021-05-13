var fills = [
    "#241F21",
    "#A8E382",
    "#29807D",
    "#8CD9EB",
    "#C2F2FF",
    "#FF99C4",
    "#FFC4DE",
    "#FF9405",
    "#FFD65E",
    "#F05323"
  ],
  index = -1;

var indexID = 1;
var elementID = "element-1";

  // Color transformation for background elements
  document.querySelectorAll('.cls-1').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.setAttribute('id', elementID);
      index = (index + 1) % fills.length;
        gsap.fromTo("#" + elementID, {
          opacity: 0,
          fill: "#ffffff",
        },
        {fill: fills[index], opacity: 1, duration: .5, repeat: 1, yoyo: true,})
      indexID = (indexID + 1);
      elementID = "element-" + indexID;
    })
  })

  // Color transformation for letters
  document.querySelectorAll('.cls-2').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.setAttribute('id', elementID);
      index = (index + 1) % fills.length;
        gsap.to("#" + elementID, {
          //opacity: 0,
          fill: fills[index],
          overwrite: true,
          duration: 1
        });
      indexID = (indexID + 1);
      elementID = "element-" + indexID;
    })
  })

  // Scrolltrigger
  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -125;
      y = 25;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 125;
      y = 25;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      delay: .5,
      duration: 1.5, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  
  