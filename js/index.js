
let currentValue = ' ';

function displayKey(keyValue){
  currentValue += keyValue
  updateDisplay()
}

function updateDisplay(){
  document.getElementById('display').value = currentValue;
}

function calculate(){
  currentValue = eval(currentValue).toString();
  updateDisplay()
}

function clearDisplay(){
  currentValue = ' ';
  updateDisplay();
}
