document.getElementById("btnCashout").addEventListener("click", function (event){
    event.preventDefault();

    const cashOutInput = document.getElementById("cashout-input").value;

    const cashOutpin = document.getElementById("cashOut-pin").value;
    console.log(cashOutInput, cashOutpin);
    const mainBlance = document.getElementById("account-balance").innerText;
    // error messege
    let errorMessage2 = document.getElementById("errorMessage2");
    errorMessage2.textContent = "";

    if (cashOutpin === "1234") {
      if (isNaN(cashOutInput)) {
        errorMessage2.textContent = "Invalid Amount!";
      }else {
        if (parseFloat(cashOutInput) < parseFloat(mainBlance)) {
          console.log("cash out is continuing from your account");
          const balance = document.getElementById("account-balance").innerText;
          const newBalance = parseFloat(balance) - parseFloat(cashOutInput);
          console.log(newBalance);
          document.getElementById("account-balance").innerText = newBalance;

          // add transaction history
          const div = document.createElement('div');
          div.classList.add('bg-yellow-300');
          div.innerHTML = `
          <h4 class="text-2xl font-bold">Cash Out </h4>
          <p>${cashOutInput} withdraw. New balance: ${newBalance}</p>
          `;

          document.getElementById('transaction-container').appendChild(div);

        } else{
         errorMessage2.textContent ="You have not sufficient balance for cash out.";
        } 
      }
    } else {
     errorMessage2.textContent = "Invalid Pin!";
    }
  });
