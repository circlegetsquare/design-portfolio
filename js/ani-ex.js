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

gsap.set("#rect",{autoAlpha:1});

document.getElementById("chng").addEventListener("mouseover", function() {
  index = (index + 1) % fills.length;
  gsap.to("#chng", {
    autoAlpha: 1,
    fill: fills[index],
    overwrite: true,
    duration: 1
  });
});