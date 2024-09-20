// document
//   .getElementById("btn-show-cashout")
//   .addEventListener("click", function () {
//     document.getElementById("cash-out-form").classList.remove("hidden");

//     document.getElementById("add-money-form").classList.add("hidden");
//     document.getElementById("transaction-history").classList.add("hidden");
//   });


//   document.getElementById('show-addmoney-btn').addEventListener('click',function(){
//     document.getElementById('add-money-form').classList.remove('hidden');
//     document.getElementById('cash-out-form').classList.add('hidden');
//     document.getElementById('transaction-history').classList.add('hidden');
//   })

//   document.getElementById('btn-show-transaction').addEventListener('click',function(){
//     document.getElementById('transaction-history').classList.remove('hidden');
//     document.getElementById('add-money-form').classList.add('hidden');
//     document.getElementById('cash-out-form').classList.add('hidden');
//   })



function showSectionById(id){
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transaction-history').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}
document.getElementById('show-addmoney-btn').addEventListener('click',function(){
  showSectionById('add-money-form');
})
document.getElementById('btn-show-cashout').addEventListener('click',function(){
  showSectionById('cash-out-form');
})
document.getElementById('btn-show-transaction').addEventListener('click',function(){
  showSectionById('transaction-history');
})