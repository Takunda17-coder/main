
//Open Store From Men's View Products Button
function openPage() {
    window.location.href = 'Store Page.html';
  }

  const MenEx = document.getElementById('MenEx');
  const MenEx2 = document.getElementById('MenEx2');
  const MenEx3 = document.getElementById('MenEx3');
  const MenEx4 = document.getElementById('MenEx4');
  const MenEx5 = document.getElementById('MenEx5');
  const MenEx6 = document.getElementById('MenEx6');

  MenEx.addEventListener('click', openPage);
  MenEx2.addEventListener('click', openPage);
  MenEx3.addEventListener('click', openPage);
  MenEx4.addEventListener('click', openPage);
  MenEx5.addEventListener('click', openPage);
  MenEx6.addEventListener('click', openPage);

  //Open Store From Women's View Products Button
function openPageW() {
  
    window.location.href = "Store Women's.html";
  }

  const WomenEx = document.getElementById('WomenEx');
  const WomenEx2 = document.getElementById('WomenEx2');
  const WomenEx3 = document.getElementById('WomenEx3');
  const WomenEx4 = document.getElementById('WomenEx4');
  const WomenEx5 = document.getElementById('WomenEx5');
  const WomenEx6 = document.getElementById('WomenEx6');

  WomenEx.addEventListener('click', openPageW);
  WomenEx2.addEventListener('click', openPageW);
  WomenEx3.addEventListener('click', openPageW);
  WomenEx4.addEventListener('click', openPageW);
  WomenEx5.addEventListener('click', openPageW);
  WomenEx6.addEventListener('click', openPageW);

  

//Cart

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active")
}
//Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active")
}

//Cart Working
if (document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded",ready)
}else{
  ready()
}

//Making function

function ready(){
  //Remove items from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length;i++){
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem)
  }
  //Quantity Changes
 var quantityInputs = document.getElementsByClassName('cart-quantity')
 for (var i = 0; i < quantityInputs.length; i++){
   var input = quantityInputs[i]
   input.addEventListener("change", quantityChanged)
 }

 //Add cart
 var addCart = document.getElementsByClassName('add-cart')
 for (var i = 0; i < addCart.length; i++){
  var button = addCart[i]
  button.addEventListener("click", addCartClicked);
 }
 //Buy Button work
 document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonClicked);

}
function buyButtonClicked(){
alert("Your order has been placed");
var cartContent = document.getElementsByClassName('cart-content')[0]
while(cartContent.hasChildNodes()){
  cartContent.removeChild(cartContent.firstChild)

}
updatetotal();
}
 

//Remove from cart
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}


//Quantity changes
function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  } 
  updatetotal();
}

//Add to cart
function addCartClicked(event){
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  var price = shopProducts.getElementsByClassName('price')[0].innerText;
  var productImg = shopProducts.getElementsByClassName('productimg')[0].src;
  AddProductToCart(title, price, productImg);
  updatetotal()
}

function AddProductToCart(title, price, productImg){
  var cartShopBox = document.createElement("div")
  cartShopBox.classList.add('cart-box')
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
  for (var i = 0; i < cartItemsNames.length; i++){
    if (cartItemsNames[i].innerText == title){
      alert("You have already added this to cart");
      return;
    }
  }
  var cartBoxContent =`   
                    <img src="${productImg}" alt="" class="cart-image">
                    <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>

                    <!--Remove from cart-->
                   
                    <i class="bx bxs-trash-alt cart-remove" id="remove-item"></i>
                           `; 

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
                    
}



//Update Total
function updatetotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0]
  var cartBoxes = cartContent.getElementsByClassName("cart-box")
  var total = 0
  for (var i = 0 ; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName("cart-price")[0]
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
    var price = parseFloat(priceElement.innerText.replace("$",""))
    var quantity = quantityElement.value
    total = total + (price * quantity)
    total = Math.round(total * 100)/100;
  }
    document.getElementsByClassName('total-price')[0].innerText = "$" + total;
  

}


