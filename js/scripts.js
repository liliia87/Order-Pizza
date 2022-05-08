function Pizza(){
  this.type;
  this.size;
  this.cost;
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
  let p = this.type[0].trim();
  this.cost = tp.get(p);

  const sp = this.size;
  
  switch(sp[1].trim()) {
    case 'Small':
      this.cost = this.cost + 1;
      break;
    case 'Medium':
      this.cost = this.cost + 1.50;
      break;
    case 'Large':
      this.cost += 2;
      break;
    case 'Fiesta':
      this.cost +=2.50;
      break;

  }

  return this.cost;
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
    pizza.cost = pizza.calculateCost();
    

    order.push(pizza);
    $("#row-bottom").append(k+"." +`${pizza.type[0]}`+`${pizza.size}`+": " + `${pizza.cost}`+"$"+"<hr>")

  });

  $('#placeTheOrder').click(function(event){
    event.preventDefault();
    let total = order.reduce(function(sum, current){
      return sum + current.cost;
    },0);

    $("#row-bottom").append("You total cost: "+"<bold>"+total +"</bold>"+"$");
    
  });
  
});