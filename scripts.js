function calculateBill() {
    // Retrieve input values
    const initialReading = parseFloat(document.getElementById('initialReading').value);
    const finalReading = parseFloat(document.getElementById('finalReading').value);
    const rate = parseFloat(document.getElementById('rate').value);

    // Check if input values are valid
    if (isNaN(initialReading) || isNaN(finalReading) || isNaN(rate) || finalReading < initialReading) {
        alert("Please enter valid meter readings and rate.");
        return;
    }

    // Calculate total usage and bill
    const usage = finalReading - initialReading;
    const totalBill = usage * rate;

    // Display the results
    document.getElementById('usageResult').innerText = `Total Usage: ${usage} units`;
    document.getElementById('billResult').innerText = `Total Bill: $${totalBill.toFixed(2)}`;
}
