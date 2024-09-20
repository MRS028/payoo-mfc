document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('Login button click');

    const phoneNumber = document.getElementById('phone-Number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber,pinNumber);
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in.');
        window.location.href = 'home.html';

    }
    else{
        alert("Wrong Phone or Pin");
    }
})