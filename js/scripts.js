//Business logic. Pizza object constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

//Prototype method for calculating the cost of a pizza
Pizza.prototype.calculateCost = function () {
  let cost = 0;
// Add cost for each selected topping
  cost += this.toppings.length;
// Add cost for the size
  if (this.size === "large") {
    cost += 10;
  } else if (this.size === "small") {
    cost += 5;
  }

  return cost;
};

// User Interface
function calculateCost() {
  const selectedToppings = [];
  const toppingsChecked = document.querySelectorAll('input[name="topping"]:checked');
  if (toppingsChecked !== undefined) {
    toppingsChecked.forEach(function (topping) {
    selectedToppings.push(topping);
    });
  }
  const selectedSizeRadio = document.querySelector('input[name="size"]:checked');
  if (!selectedSizeRadio) {
    // Error message
    document.querySelector("#pizza-form-error").innerHTML = "Please select a size";
  } else {
    const selectedSize = selectedSizeRadio.value;
    const pizza = new Pizza(selectedToppings, selectedSize);
    const cost = pizza.calculateCost();
    document.getElementById("cost").textContent = `Total cost: $${cost}`;
  }
}

const pizzaForm = document.querySelector("#pizza-form");

pizzaForm.addEventListener("submit", () => {
  console.log("Submitted form");
  document.querySelector("#pizza-form-error").innerHTML = "";
  calculateCost();
});
