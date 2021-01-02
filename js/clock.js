document.addEventListener("DOMContentLoaded", function(){
  setInterval(showTime, 1000);
  function showTime() {
    let time = new Date();
    let h = time.getHours();
    let i = time.getMinutes();
    let d = time.getDate();
    let m = time.getMonth() + 1;
    let y = time.getFullYear();
    h = h < 10 ? "0" + h : h;
    i = i < 10 ? "0" + i : i;
    d = d < 10 ? "0" + d : d;
    m = m < 10 ? "0" + m : m;

    let currentTime = h + ":" + i + " " + d + "/" + m + "/" + y; 
    document.getElementById("clock").innerHTML = currentTime; 
  }
  showTime();
});
