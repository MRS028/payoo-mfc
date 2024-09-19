document
  .getElementById("btn-show-cashout")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.remove("hidden");

    document.getElementById("add-money-form").classList.add("hidden");
  });


  document.getElementById('show-addmoney-btn').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
  })