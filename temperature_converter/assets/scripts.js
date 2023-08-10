let input = document.getElementById("unit");
let result = document.getElementById("result");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

// Adding an event listener to the "Celsius" checkbox
celsius.addEventListener("click", function () {
   // Checking if the "Celsius" checkbox is checked
   if (celsius.checked) {
      // If "Celsius" is checked, uncheck the "Fahrenheit" checkbox
      fahrenheit.checked = false;
   }
});

// Adding an event listener to the "fahrenheit" checkbox
fahrenheit.addEventListener("click", function () {
   // Checking if the "Fahrenheit" checkbox is checked
   if (fahrenheit.checked) {
      // If "Fahrenheit" is checked, uncheck the "Celsius"   checkbox
      celsius.checked = false;
   }
});

// Temperature converter function
const convertUnit = () => {
   const unitIs = input.value;

   if (celsius.checked) {
      // Celsius to Fahrenheit
      result.innerHTML =
         `${unitIs}<sup>°</sup>Celsius is = ` +
         ((unitIs * 9) / 5 + 32).toFixed(1) +
         "<sup>°</sup>F";
   } else {
      // Fahrenheit to Celsius
      result.innerHTML =
         `${unitIs}<sup>°</sup>Fahrenheit is = ` +
         (((unitIs - 32) * 5) / 9).toFixed(1) +
         "<sup>°</sup>C";
   }
};
