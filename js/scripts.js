function Pizza(){
  this.type;
  this.size;
  this.cost;
  this.toppings=[];
}

let order = [];

Pizza.prototype.calculateCost = function (){
  let tp = new Map([
    ['New York-Style Pizza', 6.50],
    ['Greek Pizza', 7.50],
    ['Detroit Pizza', 6.50],
    ['Sicilian Pizza', 8.50],
    ['Californian Pizza', 6.50]
  ]);
  let topp = new Map([
    ['pineapple', 1],
    ['anchovies', 0.5]
  ]);

  let p = this.type[0].trim();
  this.cost = tp.get(p);

  const sp = this.size;
  
  switch(sp[1].trim()) {
    case 'Small':
      this.cost = this.cost + 0;
      break;
    case 'Medium':
      this.cost = this.cost + 1;
      break;
    case 'Large':
      this.cost += 1.50;
      break;
    case 'Fiesta':
      this.cost += 2;
      break;

  }
  for(let i=0; i<this.toppings.length;i++)
    this.cost += topp.get(this.toppings[i]);
  return this.cost;
}

Pizza.prototype.toppingsToString = function(){
  let result = "";
  for(let i=0;i<this.toppings.length;i++){
    result+=this.toppings[i]+" ";
  }
  if(result == ""){
    return "None";
  }
  return result;
}


$(document).ready(function(){
  $(".description").html("");
  $('select').change(function(event){

    event.preventDefault();
    
    $(".description").html("<mark>"+"You selected: "+"</mark>" + $("#type-pizza").val()+"<br>");
    $(".description").append("<mark>"+"The size of pizza is: "+"</mark>" + $("#size-pizza").val());
  });

  let k=0;

  $("#set-choose").click(function(event){
    event.preventDefault();
    
    k+=1;
    let pizza = new Pizza();
    pizza.type = $('#type-pizza').val().split("~");
    pizza.size = $('#size-pizza').val().split('~');
    $.each($("input[name='toppings']:checked"), function(){
      pizza.toppings.push(this.id);
    });
    pizza.cost = pizza.calculateCost();
    
    
  

    

    order.push(pizza);
    $("#row-bottom").append(k+"." +`${pizza.type[0]}`+`${pizza.size}`+": " + `${pizza.cost}`+"$<br>")
    $("#row-bottom").append("Your toppings: " + pizza.toppingsToString()+"<hr>");

  });

  $('#placeTheOrder').click(function(event){
    event.preventDefault();
    let total = order.reduce(function(sum, current){
      return sum + current.cost;
    },0);

    $("#row-bottom").append("You total cost: "+"<bold>"+total +"</bold>"+"$");
    
  });
  
});