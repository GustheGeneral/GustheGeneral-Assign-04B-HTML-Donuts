  //function declared
function donutCheck() {
  // Reset error messages
  let sizeErrorElement = document.getElementById("sizeError");
  let drinkErrorElement = document.getElementById("drinkError");
  sizeErrorElement.innerText = "";
  drinkErrorElement.innerText = "";

  // Get selected donut size
  let donutSize = document.getElementById("donut").value;
  let donutCost = 0;

  // Get selected toppings
  let toppings = document.getElementsByName("topping");
  let numToppings = 0;
  let toppingCost = 0.50; // Cost per topping
  for (let i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      numToppings++;
    }
  }

  // Check if toppings are selected without choosing a donut size
  if (numToppings > 0 && donutSize === "") {
    sizeErrorElement.innerText = "You did not order properly. To have toppings, you will need a size.";
    return;
  }

  // Check if a donut size is selected
  if (!donutSize || donutSize === "") {
    sizeErrorElement.innerText = " Please order something properly. You did not choose a size, topping, or any extra orders.";
    return;
  }

  // Set donut cost based on size
  switch (donutSize) {
    case "mini":
      donutCost = 3.00;
      break;
    case "regular":
      donutCost = 4.50;
      break;
    case "ultra":
      donutCost = 6.00;
      break;
    case "golden":
      let developerCode = prompt("Please enter the developer code:");
      if (developerCode === "limitedonut2024") {
        donutCost = 0; // Golden Skibidi donut is free
      } else {
        sizeErrorElement.innerText = "Invalid developer code. You cannot order the Golden Skibidi Donut.";
        return;
      }
      break;
    default:
      sizeErrorElement.innerText = "Invalid donut size.";
      return;
  }

  // Get selected drink
  let selectedDrink = document.querySelector('input[name="drink"]:checked');
  if (!selectedDrink) {
    drinkErrorElement.innerText = "Please select a drink.";
    return;
  }

  // Set drink cost based on selection
  let drinkCost = 0;
  switch (selectedDrink.value) {
    case "coke":
      drinkCost = 2.00;
      break;
    case "tea":
    case "tea2":
      drinkCost = 3.00;
      break;
    default:
      break;
  }

  // Calculate total cost
  let subtotal = donutCost + numToppings * toppingCost + drinkCost;
  let tax = subtotal * 0.13; // 13% tax (HST)
  let totalCost = subtotal + tax;

  // Display checkout message
  let checkoutMessage = "You ordered a " + donutSize + " skibidi donut with " + numToppings + " topping(s). The subtotal is $" + subtotal.toFixed(2) + ", the tax is $" + tax.toFixed(2) + ", and the total cost is $" + totalCost.toFixed(2) + ".";
  document.getElementById("result").innerText = checkoutMessage;
}
