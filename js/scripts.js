window.onload = function () {
console.log('Hello from js/scripts.js!');

var submit = document.getElementById('Submit');
var firstName = document.getElementById('inputFirstName');
var thankYou = document.getElementById('thankYou');

submit.addEventListener('click', customName);

function customName() {  if(firstName.value !== '') {
    var name = firstName.value;
    var message = 'Thank you for your interest ' + name + '! We\'ll be in touch with exciting news about our release. Stay tuned for and pop-up ThinkDrink tastings in your area. See you soon!';
    var thx = 'Thank you ' + name + '!';
    var smallMessage = document.querySelector('.smallMessage');
    var thxMessage = document.querySelector('.thankYou');
    smallMessage.textContent = message;
    thxMessage.textContent = thx;
  }
}

}
