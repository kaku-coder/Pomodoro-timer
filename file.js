let timer = document.querySelector(".timer p");
let startbtn = document.querySelector(".start");
let stopbtn = document.querySelector(".stop");
let resetbtn = document.querySelector(".reset");
let minute = 25;
let secand = 0;
let timerid;
let count = 0;

startbtn.addEventListener("click", () => {
  timerid = setInterval(() => {
    if (secand === 0) {
      // minute--;
      secand = 59;
      if (minute !== 0) {
        minute--;
      }if(minute <= 0){
        minute = 25;
        secand = 0;
        timer.innerHTML = "25 : 00";
      }
    } else {
      secand--;
    }

    timer.innerHTML = `${String(minute).padStart(2, '0')} : ${String(secand).padStart(2, '0')}`;
  }, 100);
})

stopbtn.addEventListener("click", () => {
  clearInterval(timerid);
})

resetbtn.addEventListener("click", () => {
  clearInterval(timerid);
  minute = 25;
  secand = 0;
  timer.innerHTML = "25 : 00";
})