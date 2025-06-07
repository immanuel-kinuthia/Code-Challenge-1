function estimateTransactionFee() {
  // Prompt user and convert input to number
  let amountToSend = prompt("Unatuma Ngapi? (KES):");
  amountToSend = Number(amountToSend);

  // Calculate base transaction fee (1.5% of amount)
  let transactionFee = amountToSend * 0.015;

  // Apply minimum fee (KES 10) and maximum fee (KES 70) limits
  transactionFee = Math.max(10, Math.min(70, transactionFee));

  // Calculate total amount to be debited
  const totalAmount = amountToSend + transactionFee;

  // Print results in a user-friendly format
  console.log("Sending KES " + amountToSend + ":");
  console.log("Calculated Transaction Fee: KES " + transactionFee.toFixed(2));
  console.log("Total amount to be debited: KES " + totalAmount.toFixed(2));
  console.log("Send Money Securely!");
}
window.onload = estimateTransactionFee;