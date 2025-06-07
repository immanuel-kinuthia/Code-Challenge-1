function calculateChaiIngredients() {
  // Standard recipe for 1 cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50;   // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2;    // teaspoons

  // Prompt user and convert input to number
  let numberOfCups = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  numberOfCups = Number(numberOfCups);

  // Calculate total ingredients
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // Print results in a readable format
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("Enjoy your Chai Bora!");
}
window.onload = calculateChaiIngredients;