// Parašykite JavaScript kodą, kuris leistų vartotojui įvesti temperatūrą laipsniais Celsijaus ir
// matyti jos konversiją į:

//     Farenheitus (°F) | Formulė: °F = (°C * 9/5) + 32
//     Kelvinus (K) | Formulė: K = °C + 273.15

// Pastaba: Rezultatai turi būti matomi formoje su įvesties lauku ir mygtuku,
// ir rezultatai turi būti rodomi viduje <div id="output"></div> elemente.
// Užtikrinkite, kad naudotojo sąsaja turėtų bent minimalų stilių.

// ANSWER

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the input value (temperature in Celsius)
    const celsiusInput = parseFloat(document.getElementById("search").value);

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsiusInput * 9) / 5 + 32;

    // Convert Celsius to Kelvin
    const kelvin = celsiusInput + 273.15;

    // Create a string with the conversion results
    const resultString = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F <br> Temperature in Kelvin: ${kelvin.toFixed(2)}K`;

    // Display the results in the output div
    const outputDiv = document.getElementById("output");
    outputDiv.style.display = "block"; // Show the output div
    outputDiv.innerHTML = resultString;
  });
});
