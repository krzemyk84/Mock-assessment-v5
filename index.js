var standardRate = 7.80; // regular rate 
var overtimeRate = 12.50; // overtime rate
var overtimeHours = 0; // the hours over 37 hours per week
var overtimePay = 0; // overtime pay
var standardPay = 0; // stadard pay 


start();// call function start()
function start() {
  alert("Menu:");
  alert("Option 1: Standard Pay £7.80");
  alert("Option 2: Overtime £12.50 \n");
  var hoursWorked = Number(prompt("Please enter the number of hours worked: "));
  // alert(hoursWorked);
  promptHoursWorked(hoursWorked);
}

function checkIfMoreThanZero(hoursWorked) { 
  if (hoursWorked > 0 && !isNaN(hoursWorked)) { // if the input is greater than 0 and a number
    checkIfOvertime(hoursWorked);
  }
  else {
    alert("Please enter a correct value \n");
    start();
  }
}

function promptHoursWorked(hoursWorked) {
  hoursWorked = parseInt(hoursWorked);
  // alert("Hours worked " + hoursWorked);
  checkIfMoreThanZero(hoursWorked);
}

function checkIfOvertime(hoursWorked) { 
  if (hoursWorked <= 37) { // if number of hours is less or equal to 37 per week
    totalPay = hoursWorked * standardRate;
    totalPay = totalPay.toFixed(2);
    result(totalPay);
  }
  else { // if number of  worked hours is over 37 per week
    standardPay = 37 * standardRate;
    overtimeHours = hoursWorked - 37;
    overtimePay = overtimeHours * overtimeRate;
    totalPay = standardPay + overtimePay;
    totalPay = totalPay.toFixed(2);
    result(totalPay);
  }
}

function result(totalPay) {
  alert("You take home £" + totalPay + "\n");
  restart();
}

function restart() {
  var ifRestart = prompt("Do you want to calculate it again? (y/n) ");
  if (ifRestart == "y") {
    console.clear();
    start();
  }
  else if (ifRestart == "n") {
    alert("Thanks and byeeeee!");
    return;
  }
  else {
    alert("Please enter y for yes or n for no. \n");
    restart();
  }
}
