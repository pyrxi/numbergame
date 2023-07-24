//number + modifiers
let number = 0;
let mod1   = 0;

//increment modifier
let increment = 1;
let respond;

function numberGoUp () {
  let newnumber = ((number*10) + (increment*10))/10;
  number = newnumber;
  document.getElementById('thenumber').innerHTML = number;
}

function modOneUp1() {
  if (number >= 2) {
  mod1++;
  increment = ((mod1*9) * (0.2*10)/10);
  number = number - 2;
  printNumber= number.toPrecision(2);
  document.getElementById('thenumber').innerHTML = number;
  document.getElementById('modifier1').innerHTML = mod1;
  document.getElementById('incremental').innerHTML = increment;
  }
}

function modOneUp10() {
  if (number >= 20) {
  mod1 = mod1 + 10;
  increment = ((mod1*9) * (0.2*10)/10);  
  number = number - 20;
  printNumber= number.toPrecision(2);  
  document.getElementById('thenumber').innerHTML = number;
  document.getElementById('modifier1').innerHTML = mod1;  
  document.getElementById('incremental').innerHTML = increment;
  }
}

function modOneUp100() {
  if (number >= 200) {
  mod1 = mod1 + 100;  
  increment = ((mod1*9) * (0.2*10)/10);  
  number = number - 200;  
  printNumber= number.toPrecision(2);  
  document.getElementById('thenumber').innerHTML = number;
  document.getElementById('modifier1').innerHTML = mod1;  
  document.getElementById('incremental').innerHTML = increment;
  }
}

function submitOnPress() {
  document.getElementById('response').innerHTML = "no";
}