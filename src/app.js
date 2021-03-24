let clock = () => {
  //define let and const
  const fullDate = new Date();
  let hour = fullDate.getHours();
  let min = fullDate.getMinutes();
  let sec = fullDate.getSeconds();

  //set time
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minute").innerHTML = ": " + min;
  document.getElementById("second").innerHTML = ": " + sec;
};

setInterval(clock, 1000);
