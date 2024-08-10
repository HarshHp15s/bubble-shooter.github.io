let timer = 60;
let score = 0;
let hitrn = '';

function increaseScore() {
   score += 10;
   document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble()
{let clutter = '';

for(let i = 1; i<=96; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
   let timerInt = setInterval(function () {
      if(timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
     }
     else{
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML = `<h1 id="gmovr"> GAME OVER </h1>`;
     }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click" , function (dets){
let clickedNum = Number(dets.target.textContent);
if(clickedNum === hitrn) {
   increaseScore();
   makeBubble();
   getNewHit();
}
});

runTimer();
makeBubble();
getNewHit();


