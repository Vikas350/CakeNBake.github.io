var litretag = document.getElementsByClassName("butn");
var addToCart = document.getElementsByClassName("addToCart");
var checkQuantity = document.querySelectorAll(".tags button");
var smallestQuantity = document.querySelectorAll(".smallest");
var middleQuantity = document.querySelectorAll(".middle");
var largestQuantity = document.querySelectorAll(".largest");
var displayPrice = document.querySelector(".cart p")
var cartNumber=0;
var quantity=0;
var price=0;

console.log(addToCart);
console.log(litretag);
console.log(checkQuantity);
console.log(smallestQuantity);
console.log(middleQuantity);
console.log(largestQuantity);

document.querySelector("body").addEventListener("load",checkCookie)

/**
 * Quantity tag clicked
 */
clicktag=()=>{
    console.log("clicked");
}

reset=()=>{
    flag=0;
}
resetColor=()=>{
    for (let index = 0; index < smallestQuantity.length; index++){
    document.querySelectorAll(".smallest")[index].style.backgroundColor="#ffffff";
    document.querySelectorAll(".smallest")[index].style.color="#000000";
    document.querySelectorAll(".middle")[index].style.backgroundColor="#ffffff";
    document.querySelectorAll(".middle")[index].style.color="#000000";
    document.querySelectorAll(".largest")[index].style.backgroundColor="#ffffff";
    document.querySelectorAll(".largest")[index].style.color="#000000";
    console.log("entered");
    }
}
resetPrice=()=>{
    price=0;
}

/**
 * 250ml selected
 */
smallTag=()=>{
    console.log("clicked");
    for (let index = 0; index < smallestQuantity.length; index++) {
        document.querySelectorAll(".smallest")[index].style.backgroundColor="#E50051";
        document.querySelectorAll(".smallest")[index].style.color="#ffffff";
        document.querySelectorAll(".price")[index].style.display = "block";
        document.querySelectorAll(".price span")[index].innerHTML="100Rs";
    }
    flag=1;
}
/**
 * 500ml selected
 */
middleTag=()=>{
    console.log("clicked");
    for (let index = 0; index < middleQuantity.length; index++) {  
        document.querySelectorAll(".middle")[index].style.backgroundColor="#E50051";
        document.querySelectorAll(".middle")[index].style.color="#ffffff";
        document.querySelectorAll(".price")[index].style.display = "block";
        document.querySelectorAll(".price span")[index].innerHTML="180Rs";
    }
    flag=2;
}
/**
 * 250ml selectedlargest
 */
 largeTag=()=>{
    console.log("clicked");
    for (let index = 0; index < largestQuantity.length; index++) { 
        document.querySelectorAll(".largest")[index].style.backgroundColor="#E50051";
        document.querySelectorAll(".largest")[index].style.color="#ffffff"; 
        document.querySelectorAll(".price")[index].style.display = "block";
        document.querySelectorAll(".price span")[index].innerHTML="360Rs";
    }
    flag=3;
}

/**
 * Quantity tag clciked
*/
tagclick=()=>{
    console.log("clicked");
}

/**
 * add to cart buttton is pressed
 */
addCart=()=>{
    console.log("clicked");
    console.log(cartNumber);
    if(flag===1){
        price=price+100;
        cartNumber++;
    }
    else if(flag===2){
        price=price+180;
        cartNumber++;
    }
    else if(flag===3){
        price=price+360;
        cartNumber++;
    }
    else{
        alert(`Please select quantity of your order!`)
    }
    alert(`Item added to cart. Total items in your cart are ${cartNumber}. Total amount is ${price}`);
    document.querySelector(".cart p").style.display = "block";
    displayPrice.innerHTML=`Order total is ${price} Rs.`;
    resetColor();
    reset();
}

function checkCookie() {
    console.log("entered");
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + "'"+ user + "'"+" your order is placed.");
  } else {
     user = prompt("Please enter your name:",""+"We have potential to make your stressed day fresh!");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

