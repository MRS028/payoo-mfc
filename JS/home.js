document
  .getElementById("btnAddmoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = document.getElementById("addmoney-input").value;
    const pinNumber = document.getElementById("pin").value;

    //  error messege setup
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    //  console.log(addMoney,pinNumber);
    if (pinNumber === "1234") {
      if (isNaN(addMoney)) {
        errorMessage.textContent = "Invalid Amount!";
      } else {
        console.log("Adding money to your account...");
        const balance = document.getElementById("account-balance").innerText;
        console.log(balance);

        const newBalance = parseFloat(balance) + parseFloat(addMoney);
        console.log(newBalance);
        document.getElementById("account-balance").innerText = newBalance;
        const p = document.createElement('p');
        p.innerText = `Added:${addMoney} TK. New Balance: ${newBalance}`;
        console.log(p);
      //   commonfunction
         document.getElementById('transaction-container').appendChild(p);

      }
    } else {
      errorMessage.textContent = "Invalid Pin!";
    }
  });
