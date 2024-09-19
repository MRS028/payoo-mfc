document.getElementById('btnCashout').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('cashout-input').value;
    
    const cashOutpin = document.getElementById('cashOut-pin').value;
    console.log(cashOutInput, cashOutpin);
    if(cashOutpin === '1234'){
        console.log("cash out is continuing from your account");
        const balance = document.getElementById('account-balance').innerText;
        const newBalance = parseFloat(balance) - parseFloat(cashOutInput);
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid Pin');
    }
})