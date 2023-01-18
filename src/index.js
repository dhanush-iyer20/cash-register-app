import "./styles.css";
var twok = document.getElementById("two-k");
var fivehundred = document.getElementById("five-hundred");
var btn = document.getElementById("btn");
var cash = document.getElementById("cash");
var bill = document.getElementById("bill");
btn.addEventListener("click", () => {
  var balance = cash.value - bill.value;
  // while (balance != 0) {
  if (balance >= 2000) {
    twok.innerText = 1;
    balance = balance % 2000;
  } else if (balance >= 500) {
    fivehundred.innerText++;
    balance = balance % 500;
  }
  // }
});
