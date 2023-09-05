function calculateNights(startDate, endDate) {
  // Convert the start and end dates to JavaScript Date objects
  var startDateObj = new Date(startDate);
  var endDateObj = new Date(endDate);

  // Calculate the difference between the two dates in milliseconds
  var differenceInMilliseconds = endDateObj.getTime() - startDateObj.getTime();

  // Calculate the number of days between the two dates
  var numberOfDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  return numberOfDays;
}

function calculateTotalAmount(numberOfNights, amount) {
  // Calculate the total amount by multiplying the number of nights with the amount
  var totalAmount = numberOfNights * amount;

  return totalAmount;
}
