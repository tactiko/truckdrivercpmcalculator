document.getElementById('cpm-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    const fuelCost = parseFloat(document.getElementById('fuel-cost').value);
    const maintenanceCost = parseFloat(document.getElementById('maintenance-cost').value);
    const insuranceCost = parseFloat(document.getElementById('insurance-cost').value);
    const otherExpenses = parseFloat(document.getElementById('other-expenses').value);
    const truckPayment = parseFloat(document.getElementById('truck-payment').value);
    const dispatchFeePercent = parseFloat(document.getElementById('dispatch-fee').value);

    const dispatchFee = dispatchFeePercent / 100 * (fuelCost + maintenanceCost + insuranceCost + otherExpenses + truckPayment);
    const totalCost = fuelCost + maintenanceCost + insuranceCost + otherExpenses + truckPayment + dispatchFee;
    const cpm = totalCost / distance;

    document.getElementById('result').textContent = `Cost Per Mile: $${cpm.toFixed(2)}`;
});