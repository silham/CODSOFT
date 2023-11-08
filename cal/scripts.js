/*function insert(num) {
  document.getElementById("textview").value =
    document.getElementById("textview").value + num;
}
function clean() {
  document.getElementById("textview").value = "";
}
function back() {
  var exp = document.getElementById("textview").value;
  document.getElementById("textview").value = exp.substring(0, exp.length - 1);
}
function result() {
  var exp = document.getElementById("textview").value;
  if (exp) {
    document.getElementById("textview").value = eval(exp);
  }
}*/

let $operation = document.getElementById("operation");
let $results = document.getElementById("results");
let isOperatorAdded = false;
const symbols = ["+", "-", "×", "÷"];

function insert(num) {
  if (symbols.includes(num)) {
    if (!isOperatorAdded) {
      isOperatorAdded = true;
    } else {
      result();
    }
  }
  $results.innerText = $results.innerText + num;
}

function clean() {
  $operation.innerText = "";
  $results.innerText = "";
}

function back() {
  var exp = $results.innerText;
  $results.innerText = exp.substring(0, exp.length - 1);
}

function equal() {
  result();
  isOperatorAdded = false;
}

function result() {
  var exp = $results.innerText;
  if (exp) {
    console.log("result called");
    $operation.innerText = exp;
    $results.innerText = eval(exp.replace("÷", "/").replace("×", "*"));
  }
}
