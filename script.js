function showTransportCalculator() {
  document.getElementById("transportCalculator").style.display = "block";
  document.getElementById("lifestyleCalculator").style.display = "none";
}

function showLifestyleCalculator() {
  document.getElementById("transportCalculator").style.display = "none";
  document.getElementById("lifestyleCalculator").style.display = "block";
}

// Transport calculator function remains the same as in the previous example

function calculateLifestyleFootprint() {
  const electricityUsage = parseFloat(
    document.getElementById("electricity").value
  );
  const foodConsumption = parseFloat(document.getElementById("food").value);
  // Add more variables for other aspects of lifestyle footprint calculation

  // Calculate lifestyle footprint based on different factors
  const lifestyleFootprint = electricityUsage * 0.5 + foodConsumption * 365;
  // Add more calculations for other aspects of lifestyle footprint

  document.getElementById(
    "lifestyleResult"
  ).innerHTML = `Your lifestyle carbon footprint is approximately ${lifestyleFootprint.toFixed(
    2
  )} kg CO2/year.`;
}
