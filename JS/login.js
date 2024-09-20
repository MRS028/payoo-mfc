document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('Login button click');

    const phoneNumber = document.getElementById("phone-Number").value;
    const pinNumber = document.getElementById("pin-number").value;

    console.log(phoneNumber, pinNumber);
    if (phoneNumber === "015" && pinNumber === "1234") {
      console.log("You are logged in.");
      window.location.href = "home.html";
    } else {
      const p = document.createElement("p");
      p.innerText = `Wrong Phone or Pin!`;
      // console.log(p);
      //   commonfunction
      document.getElementById("wrongPhone").appendChild(p);
    }
  });

  document.getElementById("myLink").addEventListener("click", function() {
    
    document.getElementById("message").textContent = "Phone: 015 & pin: 1234";
});