const elevatorButton = document.querySelector(".elevator-button");
const article = document.querySelector("article");
const code = document.getElementById("code");
const result = document.getElementById("result");
const up = document.querySelector(".up");

elevatorButton.addEventListener("click",() =>{
  article.classList.remove("invisible");
});
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Enter') {
    CheckCode();
  }
});


function CheckCode(){
  if (code.value == 5844) {
    result.textContent = "Je lanceercode is correct";
    up.classList.remove("invisible");
  } else {
    result.textContent = "Verkeerde lanceercode";
    up.classList.add("invisible");
  }
}