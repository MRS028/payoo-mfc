document.getElementById('btnAddmoney').addEventListener('click',function(event){
    event.preventDefault();
 const addMoney = document.getElementById('addmoney-input').value;
 const pinNumber = document.getElementById('pin').value;
//  console.log(addMoney,pinNumber);
 if(pinNumber ==='1234'){
    console.log('Adding money to your account...');
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

    const newBalance = parseFloat(balance) + parseFloat(addMoney);
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;


 }
 else{
    alert('Invalid Pin');
 }
 

});