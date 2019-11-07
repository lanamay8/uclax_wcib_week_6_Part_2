window.onload = function () {
console.log('Hello from js/scripts.js!');

// $(function () {
//     $(".submit").on('click', function() {
//         $('#bigModal').modal('hide');
//     });
// });

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


// var newMessage = document.querySelector('.newMessage');
//
// submit.addEventListener('click', customName);
//
// function customName() {  if(firstName.value !== '') {
//     var name = firstName.value;
//     var message = 'Thank you for visiting ' + name + '! See you soon!'
//     //var newMessage =  message;
//     newMessage.textContent = message;
//   }
// }


/* Looping through images */
// var imageSet = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']
// var displayedImage = document.querySelector('.displayed-img');
// var thumbBar = document.querySelector('.thumb-bar');
//
// for (let i = 0; i < imageSet.length; i++) {
//   var newImage = document.createElement('img');
//   newImage.setAttribute('src', imageSet[i]);
//   thumbBar.appendChild(newImage);
//   newImage.onclick = function(e) {
//     displayedImage.setAttribute('src', imageSet[i]);
//   }
// }
//
// /* Wiring up the Darken/Lighten button */
// var btn = document.querySelector('button');
// var overlay = document.querySelector('.overlay');
// let darkness = false;
// btn.addEventListener('click', darkLight);
//
// function darkLight() {
//   if (darkness === true) {
//     darkness = false;
//     btn.setAttribute('class', 'light');
//     btn.textContent = 'Darken';
//     overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';
//   } else {
//     darkness = true;
//     btn.setAttribute( 'class', 'dark' );
//     btn.textContent = 'Lighten';
//     overlay.style.backgroundColor = 'rgba(0,0,0,.5)';
//   }
//   }

var tmr = document.querySelector('.timer');
var overlay = document.querySelector('.overlay');
//let darkness = false;
tmr.addEventListener('click', countDown);
/*countdown timer*/
function countDown() {
var countDownDate = new Date("Nov 25, 2019 08:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Display the result in the element with id="demo"
document.getElementById("timer").textContent = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
// Count down is finished
if (distance < 0) {
  clearInterval(x);
  document.getElementById("timer").textContent = "We're Here!!!";
  }
}, 1000);
}





}
