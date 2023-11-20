const slate = document.querySelector(".slate");
const fire = document.querySelector(".fire");
const bed = document.querySelector(".bed");
const welcome = document.querySelector(".welcome");
const info = document.querySelector(".info");
const voiceline = document.querySelector(".voiceline");

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////Event handlers////////////////////////
fire.addEventListener("click", ()=>{
  info.classList.remove("invisible");
  welcome.classList.add("invisible");
  voiceline.classList.add("invisible");
});
slate.addEventListener("click", ()=>{
  voiceline.classList.remove("invisible");
  welcome.classList.add("invisible");
  info.classList.add("invisible");
});
bed.addEventListener("click", ()=>{
  welcome.classList.remove("invisible");
  voiceline.classList.add("invisible");
  info.classList.add("invisible");
});
//////////////////Event handlers////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////