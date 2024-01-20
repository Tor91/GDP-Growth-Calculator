function calculateGDP(currentGDP, growthRate, years) {
    return currentGDP * Math.pow((1 + (growthRate / 100)), years);
}

function calculateProjectedGDP() {
    // Get user input values
    let growthRate = parseFloat(document.getElementById('growthRate').value);
    let years = parseInt(document.getElementById('years').value);
    let currentGDP = 1000; // You can modify this to get the current GDP from user or a default value

    // Validate inputs
    if (isNaN(growthRate) || isNaN(years)) {
        alert("Please enter valid numbers for growth rate and years.");
        return;
    }

    // Calculate projected GDP
    let projectedGDP = calculateGDP(currentGDP, growthRate, years);
    let timesHigher = projectedGDP / currentGDP;

    // Display the result
    document.getElementById('result').innerText = `Projected GDP after ${years} years: ${timesHigher.toFixed(2)} times higher`;
}
