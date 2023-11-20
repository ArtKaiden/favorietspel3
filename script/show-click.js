const hover = document.querySelector(".hover-me");
const allclickable = document.querySelectorAll(".clickable");
const clickableLink = document.querySelector(".clickable-link");


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////Event handlers////////////////////////

  hover.addEventListener("mouseenter", () => {
    allclickable.forEach((clickable) => {
    clickable.style.webkitFilter = "drop-shadow(5px 5px 5px rgb(0, 221, 33))";
    clickable.style.filter = "drop-shadow(5px 5px 5px  rgb(0, 213, 78))";
    });
  });

  hover.addEventListener("mouseleave", () => {
    allclickable.forEach((clickable) => {
    clickable.style.webkitFilter = "";
    clickable.style.filter = "";
    clickable.style.border = "";
    clickable.style.dropShadow = "";
    });
  });

//////////////////Event handlers////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////