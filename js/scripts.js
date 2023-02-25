//Business logic
// Pizza object constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// Prototype method for calculating the cost of a pizza
Pizza.prototype.calculateCost = function () {
  let cost = 0;

  cost += this.toppings.length;

  // Add cost for the size
  if (this.size === "large") {
    cost += 10;
  } else if (this.size === "small") {
    cost += 5;
  }

  return cost;
};

function ShoppingCart() {
  this.pizzas = [];
  this.totalPrice = 0;
}

ShoppingCart.prototype.calculateTotalCost = function () {
  let total = 0;
  this.pizzas.forEach(function (pizza) {
    total += pizza.calculateCost();
  });

  return total;
};

// User Interface
// Function for getting the selected toppings and size, creating a new pizza object, and displaying the cost
function calculateCost() {

  // Collect a list of checkboxes with the name of "topping" that were checked 
  // querySelectorAll can give an array or undefined
  const selectedToppings = [];
  const toppingsChecked = document.querySelectorAll('input[name="topping"]:checked');
  if (toppingsChecked !== undefined) {
    toppingsChecked.forEach(function (topping) {
      // i'm pushing this checked topping into the array of sleected toppings
      selectedToppings.push(topping);
    });
  }

  // note from mentor:
  // A much more professional way and less "error-prone" way to do this is by:
  // const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked'))
  //   .map((input) => input.value);

  const selectedSizeRadio = document.querySelector('input[name="size"]:checked');
  if (!selectedSizeRadio) {
    // error
    document.querySelector("#pizza-form-error").innerHTML =
      "Please select a size";
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
