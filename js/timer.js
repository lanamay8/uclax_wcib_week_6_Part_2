window.onload = function () {

    var countDownDate = new Date("Dec 16, 2019 08:00:00").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="timer"
      document.getElementById("timer").textContent = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      // Countdown is finished
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").textContent = "We're Here!!!";
      }
    }, 1000);

}
