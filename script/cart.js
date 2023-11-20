const order1 = document.getElementById("order-1");
const order2 = document.getElementById("order-2");
const order3 = document.getElementById("order-3");
const items1 = document.querySelector(".items-1");
const items2 = document.querySelector(".items-2");
const items3 = document.querySelector(".items-3");
const pcAmountInput = document.querySelector(".pc-amount");
const psAmountInput = document.querySelector(".ps-amount");
const xboxAmountInput = document.querySelector(".xbox-amount");
const total = document.querySelector(".total");

let pcAmount = sessionStorage.getItem("pcAmount");
let psAmount = sessionStorage.getItem("psAmount");
let xboxAmount = sessionStorage.getItem("xboxAmount");

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////////functions//////////////////////////
function UpdateItems() {
  CheckForNullOr0();
  items1.textContent = `Outer wilds PC: ${pcAmount}`;
  items2.textContent = `Outer wilds PS4: ${psAmount}`;
  items3.textContent = `Outer wilds XBOX ONE: ${xboxAmount}`;
  total.textContent = `aantal artikelen: ${Number(pcAmount) + Number(psAmount) + Number(xboxAmount)}`;
  pcAmountInput.value = pcAmount;
  psAmountInput.value = psAmount;
  xboxAmountInput.value = xboxAmount;
  sessionStorage.setItem("pcAmount", pcAmount);
  sessionStorage.setItem("psAmount", psAmount);
  sessionStorage.setItem("xboxAmount", xboxAmount);
}
function CheckForNullOr0() {
  if (pcAmount == null || pcAmount === "") pcAmount = 0;
  if (psAmount == null || psAmount === "") psAmount = 0;
  if (xboxAmount == null || xboxAmount === "") xboxAmount = 0;
}
//////////////////////functions//////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////Event handlers////////////////////////
order1.addEventListener("input", () => {
  pcAmount = order1.value;
  UpdateItems();
});
order2.addEventListener("input", () => {
  psAmount = order2.value;
  UpdateItems();
});
order3.addEventListener("input", () => {
  xboxAmount = order3.value;
  UpdateItems();
});

//////////////////Event handlers////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////




CheckForNullOr0();
order1.value = pcAmount;
order2.value = psAmount;
order3.value = xboxAmount;
UpdateItems();
