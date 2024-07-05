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
  number_display.innerHTML = Math.floor(main_number);
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
    number_display.innerHTML = Math.floor(main_number);
    modifier1_display.innerHTML = Math.floor(mod1);
    incremental_display.innerHTML = Math.floor(increment);
  }
}

function submitOnPress() {
  response_display.innerHTML = "no";
}