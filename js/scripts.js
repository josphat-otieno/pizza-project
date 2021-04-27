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
function pizza(flavor, size, crust, topping,  quantity, total){
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.toppping = topping;
    this.quantity = quantity;
    this.total=total;
}
function Total(sizePrice, quantity, delivery, crustPrice, toppingPrice,){
    this.sizePrice = sizePrice;
    this.quantity = quantity;
    this.delivery = delivery;
    this.crustPrice =crustPrice;
    this.toppingPrice = toppingPrice
}
Total.prototype.finalTotal = function(){
    return this.sizePrice*this.quantity + this.crustPrice;
}
$(document).ready(function(){
    $("button#make").click(function(event){
        var flavors = $("#flavors option:selected").val();
        var pizzaSize =$("#size option:selected").val();
        var pizzaCrust = $("#crust option:selected").val();
        var pizzaToppings = []
        $.each($("input[name='topping']:checked"),function(){
            pizzaToppings.push($(this).val());
        })
    })
    switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
        //    console.log(price);
         break;
         case "medium":
           price = 850;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
        //    console.log(price);
         default:
           console.log("error"); 
       }
       switch(pizzaCrust){
          case "0":
            crustPrice = 0;
          break;
          case "glutten":
            crustPrice = 200;
          break;
          case "thin":
            crustPrice = 250;
          break;
          case "crispy":
            crustPrice = 180;
          break;
          case "cheese":
            crustPrice = 180;
            break;
            case "bagels":
            crustPrice = 180;
          default:
            console.log("No price"); 
       }
       let toppingPrice = pizzaToppings.length*70;
       if((pizzaSize == "0") && (pizzaCrust == "0")){
        alert("nothing selected");
        $("button#make").show();
        $("#information").show();
        $("div.ordered").hide();
        alert("Please select pizza size and crust"); 
      }
      else{
        $("button#make").hide();
        $("#information").hide();
        $("div.ordered").slideDown();
      }
      total = finalTotal () + toppingPrice;
      let checkoutTotal = 0;
      checkoutTotal = checkoutTotal + total;

      $("#pizzaFlavor").html($(".name option:selected").val());
      $("#pizzaSize").html( $("#size option:selected").val());
      $("#pizzaCrust").html($("#crust option:selected").val());
      $("#pizzaTopping").html(pizzaTopping.join(", "));
      $("#totals").html(total);

})