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
        }
            
        

    })
})
