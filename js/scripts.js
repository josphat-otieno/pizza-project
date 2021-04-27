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
        $.each($("input[name='toppings']:checked"),function(){
            pizzaToppings.push($(this).val());
        })
        console.log(pizzaTopping.join(", "));
    })
    switch(pizzaSize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1500;
        //    console.log(price);
         break;
         case "medium":
           price = 1000;
           console.log("The price is "+price);
         break;
         case "small":
           price = 700;
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
            crustPrice = 300;
          break;
          case "crispy":
            crustPrice = 350;
          break;
          case "cheese":
            crustPrice = 400;
            break;
            case "bagels":
            crustPrice = 500;
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

      $("button#cart").click(function(){
        var flavors = $("#flavors option:selected").val();
        var pizzaSize =$("#size option:selected").val();
        var pizzaCrust = $("#crust option:selected").val();
        var pizzaToppings = []
        $.each($("input[name='topping']:checked"),function(){
            pizzaToppings.push($(this).val());
        });
        console.log(ptopping.join(", "));
        switch(psize){
            case "0":
                price =0;
              break;
              case "large":
                 price = 1500;
              //    console.log(price);
               break;
               case "medium":
                 price = 1000;
                 console.log("The price is "+price);
               break;
               case "small":
                 price = 700;
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
                  crustPrice = 300;
                break;
                case "crispy":
                  crustPrice = 350;
                break;
                case "cheese":
                  crustPrice = 400;
                  break;
                  case "bagels":
                  crustPrice = 500;
                default:
                  console.log("No price"); 
          }
          let toppingPrice = pizzaTopping.length*50;
          
          total = finalTotal() + toppingPrice
  
          checkoutTotal = checkoutTotal + total;
          
        var newOrder = new Pizza(flavor, pizzaSize, pizzaCrust,pizzaTopping,total);
  
        $("").append('<tr><td id="pizzaFlavor">'+newOrder.flavor +'</td><td id="pizzaSize">' + newOrder.size + '</td><td id="pizzaCrust">'+newOrder.crust + '</td><td id="pizzaTopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
        console.log(newOrder);
        
        
  
      });
      // Checkout button
      $("button#checkout").click(function(){ 
        $("button#checkout").hide();
        $("button#cart").hide();
        $("button#home").slideDown(1000);
        $("#addedprice").slideDown(1000);
        console.log("Your total bills is sh. "+checkoutTotal);
        $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
      });
  
      // home delivery button
      $("button#home").click(function(){
        $("#ptable").hide();
        $("#order h2").hide();
        $("#home").slideDown(1000);
        $("#deliveryPrice").hide();
        $("button#home").hide();
        $("#pizzaTotal").hide();
        let deliveryFee = checkoutTotal+ 200;
        console.log("You will pay sh. "+deliveryFee+" on delivery");
        $("#totalBill").append("Your bill plus delivery fee is: "+deliveryFee);
      });
  
      // when one clicks place order button
      $("button#place").click(function(event){
        event.preventDefault();
  
        $("#pizzatotal").hide();
        $(".delivery").hide();
        $("button#place").hide();
        let deliveryFee= checkoutTotal+200;
        console.log("Final Bill is: "+deliveryFee);
        let person = $("input#name").val();
        let phone = $("input#pnumber").val();
        let location = $("input#address").val();
  
        if ($("input#name").val() && $("input#pnumber").val() && $("input#address").val()!=""){
    
          $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliveryFee);
          $("#totalbill").hide();
          $("#finallmessage").slideDown(1200);
        }
        else {
          alert("Please fill in the details for delivery!");
          $("#home").show();
          $("button#place").show();
        }
      });
     event.preventDefault();
    });
  
  
