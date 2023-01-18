import "./styles.css";
var twok = document.getElementById("two-k");
var fivehundred = document.getElementById("five-hundred");
var hundred = document.getElementById("hundred");
var twenty = document.getElementById("twenty");
var ten = document.getElementById("ten");
var five = document.getElementById("five");
var one = document.getElementById("one");
var btn = document.getElementById("btn");
var cash = document.getElementById("cash");
var bill = document.getElementById("bill");
btn.addEventListener("click", () => {
  var balance = cash.value - bill.value;
  while (balance != 0) {
    if (balance >= 2000) {
      twok.innerText = parseInt(twok.innerText) + parseInt(balance / 2000);
      balance = balance % 2000;
    } else if (balance >= 500 && balance < 2000) {
      fivehundred.innerText =
        parseInt(fivehundred.innerText) + parseInt(balance / 500);
      balance = balance % 500;
    } else if (balance >= 100 && balance < 500) {
      hundred.innerText = parseInt(hundred.innerText) + parseInt(balance / 100);
      balance = balance % 100;
    } else if (balance >= 20 && balance < 100) {
      twenty.innerText = parseInt(twenty.innerText) + parseInt(balance / 20);
      balance = balance % 20;
    } else if (balance >= 10 && balance < 20) {
      ten.innerText = parseInt(ten.innerText) + parseInt(balance / 10);
      balance = balance % 10;
    } else if (balance >= 5 && balance < 10) {
      five.innerText = parseInt(five.innerText) + parseInt(balance / 5);
      balance = balance % 5;
    } else if (balance >= 1 && balance < 5) {
      one.innerText = parseInt(one.innerText) + parseInt(balance / 1);
      balance = balance % 1;
    }
  }
});
