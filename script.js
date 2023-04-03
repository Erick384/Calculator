function clearResult() {
  document.getElementById("output").value = "";
}

function appendValue(value) {
  document.getElementById("output").value += value;
}

function calculate() {
  var result = eval(document.getElementById("output").value);
  document.getElementById("output").value = result;
}