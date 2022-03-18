function relogio(){
  let date = new Date();
  let hours = date.getHours();
  hours = ("0" + hours).slice(-2);
  let minutes = date.getMinutes();
  minutes = ("0" + minutes).slice(-2);
  let seconds = date.getSeconds();
  seconds = ("0" + seconds).slice(-2);

  document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval(relogio, 1000)