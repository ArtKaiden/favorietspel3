const allClickableLink = document.querySelectorAll(".clickable-link");

allClickableLink.forEach((clickableLink) => {
  hover.addEventListener("mouseenter", () => {
    clickableLink.style.webkitFilter = "drop-shadow(5px 5px 5px rgb(0, 221, 33))";
    clickableLink.style.filter = "drop-shadow(5px 5px 5px  rgb(0, 213, 78));";
    clickableLink.style.boxShadow = "0px 0px 10px rgb(0, 221, 33)";
    // clickable.style.opacity = "0";
  });

  hover.addEventListener("mouseleave", () => {
    // clickableLink.style.webkitFilter = "drop-shadow(0px 0px 0px rgb(0, 0, 0))";
    // clickableLink.style.filter = "drop-shadow(0px 0px 0px  rgb(0, 0, 0));";
    clickableLink.style.boxShadow = "0px 0px 0px rgb(0, 0, 0)";
    // clickable.style.opacity = "100%";
  });
});
