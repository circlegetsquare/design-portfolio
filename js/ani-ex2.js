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


document.getElementById("letter-S").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-S", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

document.getElementById("letter-h").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-h", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

  document.getElementById("letter-u").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-u", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

  document.getElementById("letter-t1").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-t1", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

  document.getElementById("letter-t2").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-t2", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

  document.getElementById("letter-e").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-e", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

  document.getElementById("letter-r").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-r", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

  document.getElementById("letter-f").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-f", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

  document.getElementById("letter-l").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-l", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });

  document.getElementById("letter-y").addEventListener("mouseover", function() {
    index = (index + 1) % fills.length;
    gsap.to("#letter-y", {
      autoAlpha: 1,
      fill: fills[index],
      overwrite: true,
      duration: 1
    });
  });
