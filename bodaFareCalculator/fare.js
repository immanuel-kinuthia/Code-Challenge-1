function calculateBodaFare() {
  // Fare calculation constants
  const baseFare = 50;      // KES 50 per ride
  const chargePerKm = 15;   // KES 15 per kilometer

  // Prompt user and convert input to number
  let distanceInKm = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  distanceInKm = Number(distanceInKm);

  // Calculate total fare
  const baseCharge = baseFare;
  const distanceCharge = distanceInKm * chargePerKm;
  const totalFare = baseCharge + distanceCharge;

  // Print results in a user-friendly format
  console.log("Uko kwote? Io ni " + distanceInKm + " km:");
  console.log("Ukikalia Pikipiki: KES " + baseCharge);
  console.log("Mpaka Uko: KES " + distanceCharge);
  console.log("Total: KES " + totalFare);
  console.log("Panda Pikipiki!");
}
window.onload = calculateBodaFare;