let count = document.getElementById("count");

let plus = document.getElementById("plus");

let minus = document.getElementById("minus");

let reset = document.getElementById("reset");

let counter = 0;

plus.addEventListener("click", () => {
  counter++;
  count.innerText = counter;
});

minus.addEventListener("click", () => {
  counter--;
  count.innerText = counter;
});

reset.addEventListener("click", () => {
  counter = 0;
  count.innerText = counter;
});
