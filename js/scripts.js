// User Interface Logic
document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("pizza-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let toppings = [];
    let toppingInputs = document.getElementsByName("toppings");
    for (let i = 0; i < toppingInputs.length; i++) {
      if (toppingInputs[i].checked) {
        toppings.push(toppingInputs[i].value);
      }
    }
    let size = document.getElementById("size").value;
    let pizza = new Pizza(toppings, size);
    let cost = pizza.calculateCost();
    let costElement = document.getElementById("cost");
    costElement.textContent = "Your pizza will cost $" + cost.toFixed(2);
  });
});