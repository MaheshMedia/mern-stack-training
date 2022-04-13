let form = document.getElementById("sumForm");

//onsubmit event handler to display sum
form.onsubmit = function (e) {
  e.preventDefault();

  let num1 = document.getElementById("num1"),
    num2 = document.getElementById("num2");

  let sum = +num1.value + +num2.value;

  //create new div to add innerHtml
  let div = document.createElement("div");
  div.innerHTML = `sum of ${num1.value} & ${num2.value} is ${sum}`;

  //append to body
  document.body.append(div);

  num1.value = null;
  num2.value = null;
};
