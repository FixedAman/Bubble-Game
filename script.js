var timer = 1 ;
var hitrn = 0 ;
function bubblestart(){
    clutter = "" ;
    for (var i = 1 ; i <=133 ; i++){
        var  random = Math.floor(Math.random()*10)
        clutter += ` <div class="bubble">${random}</div>`
    }
    document.querySelector("#panel2").innerHTML = clutter ;
}
function runTime(){
    var timervalue = setInterval(function(){
         if(timer>0){
             timer--;
             document.querySelector("#timerval").textContent = timer
         }
         else{
             clearInterval(timervalue);
            document.querySelector("#panel2").innerHTML = `<h1>Game Over</h>`
         }
  
     },1000)
 }
function getNewHit(){
     hitrn = Math.floor(Math.random()*10) ;
    document.querySelector("#hitval").textContent = hitrn ;
}
var score = 0 ;
function getNewScore(){
    score+=10 ;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#panel2").addEventListener("click",function(dets){
      var clickedNumber = Number(dets.target.textContent);
      if(clickedNumber === hitrn){
        getNewScore();
        bubblestart();
        getNewHit();
      }
})

bubblestart();
runTime();
getNewHit();



