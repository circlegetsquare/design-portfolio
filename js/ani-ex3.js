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

  