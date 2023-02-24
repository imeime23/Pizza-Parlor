
// Define pizza object constructor
class Pizza {
  constructor(toppings, size) {
    this.toppings = toppings;
    this.size = size;
  }

  // Define prototype method for calculating cost of pizza
  cost() {
    let cost = 0;
    if (this.size === "medium") {
      cost += 10;
    } else if (this.size === "large") {
      cost += 12;
    }
    cost += this.toppings.length * 1;
    return cost;
  }
}

// Add event listener for form submission
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const toppings = [];
  const toppingInputs = document.querySelectorAll('input[name="topping"]:checked');
  toppingInputs.forEach((input) => toppings.push(input.value));
  const size = document.querySelector('input[name="size"]:checked').value;
  const pizza = new Pizza(toppings, size);
  const totalCost = pizza.cost();
  document.getElementById("total-cost").textContent = totalCost;
});