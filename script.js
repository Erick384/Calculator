function clearResult() {
  document.getElementById("output").value = "";
}

function appendValue(value) {
  document.getElementById("output").value += value;
}

function calculate() {
  //   let result = eval(document.getElementById("output").value);
  let expression = document.querySelector("#output");
//   let equal = document.querySelector("#equal");
//   equal.style.border = "none"
  let result = eval(expression.value);

  document.getElementById("output").value = result;
}

// const input_field = document.getElementById("output")
// console.log(input_field.value)

