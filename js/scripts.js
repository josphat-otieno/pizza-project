constfrm =document.querySelector("#frm");
frm.addEventListener('submit',function(event){
    event.preventDefault()
const fd = new FormData(frm)
 let order = {};
 let cart  = [];
for (const key of fd.keys()){
    if(fd.get(key).toString().length>0){
        order[key] = fd.get(key).toString();
    }
}
if(confirm("this pizza will be added to your cart")){
cart.push(order);
localStorage.setItem("cart", JSON.stringify(cart));
}
})

var price, crustPrice, toppingPrice;
var total = 0;
function pizza(flavor, size, crust, topping,  quantity,){
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.toppping = topping;
    this.quantity = quantity;
}
function Total(sizePrice, quantity, delivery, crustPrice, toppingPrice,){
    this.sizePrice = sizePrice;
    this.quantity = quantity;
    this.delivery = delivery;
    this.crustPrice =crustPrice;
    this.toppingPrice = toppingPrice
}
Total.prototype.finalTotal = function(){
    return this.sizePrice*this.quantity + this.crustPrice + this.toppingPrice;
}
$(document).ready(function(){
    $("#frm").submit(function(event){
        event.preventDefault();
        var sizePrice={
            small: 700,
            medium: 1000,
            large: 1500
        };
        var crustPrice ={
            glutten: 200,
            thin: 300,
            crispy: 350,
            cheese: 400,
            bagels:500
        }; 
        function calculatePrice(size){
            if(size=="small"){
                return sizePrice.small;
            }else if(size=="medium"){
                return sizePrice.medium;
            }else{
                return sizePrice.large
            }
        } 
        function crustCalcPrice(crust){
            if (crust=="glutten"){
                return crustPrice.glutten;
            }else if(crust=="thin"){
                return crustPrice.thin
            }
            else  if(crust==crispy){
                return crustPrice.crispy;
            }else if(crust==cheese){
                return crustPrice.cheese;
            }else{
                return crustPrice.bagels;
            }
        } 
    })
    var crust = $("#crustPizza").val();
    var toppings =$("#toppings").val();
    var flavors = $("#flavors").val();
    var size = $("#size").val()
    var pizzaPrice = (sizePrice, crustPrice, toppingPrice);
    var inputtedQuantity = parseInt($("#qty").val());
     
    var newDetails = new Deatils (flavor, size, crust, toppings, inputtedQuantity)
    var total = new Total(sizePrice, crustPrice, toppingPrice, inputtedQuantity)
    var newBill = newTotal.finalTotal();
      var totalQuantity= parseInt($("total").val());
      function calcTotal(){
          var priceOnePizza = calculatePrice(sizePrice()) +
          crustCalcPrice(crustPrice()) + toppingPrice();
      }
      var size = $("#size").find(":selected").val();
      alert("your order is " + ", "+ size +' ,' + newDetails.selectedToppings + ' and ' + newDetails.selectedCrust +' '+"pizza"+". click ok to view your bill" );

})
