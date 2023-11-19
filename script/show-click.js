const hover = document.querySelector(".hover-me");
const allclickable = document.querySelectorAll(".clickable");
const clickableLink = document.querySelector(".clickable-link");

allclickable.forEach((clickable) => {
  hover.addEventListener("mouseenter", () => {
    clickable.style.webkitFilter = "drop-shadow(5px 5px 5px rgb(0, 221, 33))";
    clickable.style.filter = "drop-shadow(5px 5px 5px  rgb(0, 213, 78));"
    if(clickable.classList.contains("to-village-border")){
      clickable.style.border="solid 1px rgba(0, 213, 78,0.8)";
      clickable.style.dropShadow = " 5px 5px 5px rgb(0, 213, 78)";
    }
    // clickableLink.style.boxShadow="0px 0px 5px rgb(0, 221, 33)";
    // clickable.style.opacity = "0";
  });

  hover.addEventListener("mouseleave", () => {
    clickable.style.webkitFilter = "";
    clickable.style.filter = "";
    clickable.style.border="";
    clickable.style.dropShadow = "";
    // clickableLink.style.boxShadow="0px 0px 0px rgb(0, 0, 0)";
    // clickable.style.opacity = "100%";
  });
});
