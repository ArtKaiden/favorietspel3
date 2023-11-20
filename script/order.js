let shoppingCart = [0, 0, 0];
const order1 = document.getElementById("order-1");
const order2 = document.getElementById("order-2");
const order3 = document.getElementById("order-3");
const pcCart = document.querySelector(".pc-cart");
const psCart = document.querySelector(".ps-cart");
const xboxCart = document.querySelector(".xbox-cart");


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////////functions//////////////////////////
function ToCart() {
  window.location.href = "./cart.html";
}

function AddToCart(productNumber){
  if(productNumber === 1){
    shoppingCart[0] += Number(order1.value);
  }
  else if(productNumber === 2){
    shoppingCart[1] += Number(order2.value);
  }
  else if(productNumber === 3){
    shoppingCart[2] += Number(order3.value);
  }
  pcCart.textContent = `Pc: ${shoppingCart[0]}`
  psCart.textContent = `PS4: ${shoppingCart[1]}`
  xboxCart.textContent = `XBOX One: ${shoppingCart[2]}`

  sessionStorage.setItem("pcAmount",shoppingCart[0]);
  sessionStorage.setItem("psAmount",shoppingCart[1]);
  sessionStorage.setItem("xboxAmount",shoppingCart[2]);
}
//////////////////////functions//////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
