let input = document.getElementById("unit");
let result = document.getElementById("result");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

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
