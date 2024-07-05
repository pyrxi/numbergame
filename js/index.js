// number + modifiers
let main_number = 0;
let mod1 = 0;
let increment = 1;

// UI Elements
let number_display = document.getElementById('thenumber');
let modifier1_display = document.getElementById('modifier1');
let incremental_display = document.getElementById('incremental');
let response_display = document.getElementById('response');

function numberGoUp () {
  // reassigns the value of the number to the incremented amount
  main_number = ((main_number*10) + (increment*10))/10;
  // updates the ui
  number_display.innerHTML = main_number;
}

function modOneUp(amount, price) {
  // if the main number is high enough
  if (main_number >= price) {
    // increment mod1
    mod1 = mod1 + amount;
    // add modifier amount to total increment
    increment = ((mod1*9) * (0.2*10)/10);
    // subtract main number by modifier1 cost
    main_number = main_number - price;
    // update display
    number_display.innerHTML = main_number.toPrecision(2);
    modifier1_display.innerHTML = mod1;
    incremental_display.innerHTML = increment;
  }
}

function submitOnPress() {
  response_display.innerHTML = "no";
}