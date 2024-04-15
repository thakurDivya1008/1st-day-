var timer = 60;
var score =0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function makeBubble(){
    var clutter = "";

for(var i =1; i<=95;i++){
    hitrn =  Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${hitrn}</div>`;
 
}
document.querySelector("#pbtn").innerHTML = clutter;
}

function getNewhit(){
     hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function runTimer(){
   var timerint =  setInterval(function () {

        if(timer>0) {
            timer--;
            document.querySelector("#timerval").textContent = timer; 
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtn").innerHTML = `<h1>GAME OVER</h1>`;
        }
       
    },1000)
}
document.querySelector("#pbtn")
.addEventListener("click",function(dets){
     var clickedNum =  Number(dets.target.textContent);
     if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewhit();
     }

    
});
runTimer();
makeBubble();
getNewhit();

