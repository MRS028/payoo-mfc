document
  .getElementById("btnCashout")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutInput = document.getElementById("cashout-input").value;

    const cashOutpin = document.getElementById("cashOut-pin").value;
    console.log(cashOutInput, cashOutpin);
    const mainBlance = document.getElementById("account-balance").innerText;

    if (cashOutpin === "1234") {
      if (parseFloat(cashOutInput) > parseFloat(mainBlance)) {
        alert("You have not sufficient balance for cash out.");
      } else if (parseFloat(mainBlance) > parseFloat(cashOutInput)) {
        console.log("cash out is continuing from your account");
        const balance = document.getElementById("account-balance").innerText;
        const newBalance = parseFloat(balance) - parseFloat(cashOutInput);
        console.log(newBalance);
        document.getElementById("account-balance").innerText = newBalance;
      }
    } else {
      alert("Invalid Pin");
    }
  });
