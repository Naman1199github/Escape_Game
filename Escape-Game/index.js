var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d");
ctx.fillStyle= "#FF0000"
var one =200
var two =150
var three =30
var four =30
 ctx.fillRect(one,two,three,four);
 var i =0;
function moveRight(){
  if(document.getElementById("gameover").innerHTML=="Game Over!!"){
    console.log("");
  }
  else{
      ctx.clearRect(one,two,three,four);
      ctx.fillStyle= "#FF0000"
    one = one+three
    ctx.fillRect(one,two,three,four)
  }
}

function moveLeft(){
  if(document.getElementById("gameover").innerHTML=="Game Over!!"){
    console.log("");
  }
  else{
    ctx.clearRect(one,two,three,four);
    ctx.fillStyle= "#FF0000"
  one = one-three
  ctx.fillRect(one,two,three,four)
  }
}

function moveUp(){
  if(document.getElementById("gameover").innerHTML=="Game Over!!"){
    console.log("");
  }
  else{
    ctx.clearRect(one,two,three,four);
    ctx.fillStyle= "#FF0000"
  two = two-four
  ctx.fillRect(one,two,three,four)
  }
}

function moveDown(){
  if(document.getElementById("gameover").innerHTML=="Game Over!!"){
    console.log("");
  }
  else{
    ctx.clearRect(one,two,three,four);
    ctx.fillStyle= "#FF0000"
  two = two+four
  ctx.fillRect(one,two,three,four)
  }
}


function obstacle(){
    if(document.getElementById("gameover").innerHTML=="Game Over!!"){
        ctx.font = "50px Arial";
        ctx.fillStyle = "#800080"
        ctx.fillText("Game Over",300,150);
        document.getElementById("Replay").style.display ="block"
        document.getElementById("All_buttons").style.display ="none"
    }
   else {
let ctx1 = canvas.getContext("2d");
ctx1.fillStyle = "yellow"
let ran1 = Math.floor(Math.random()*200);
let ran2 = 300-ran1-70;
let g = 770;
ctx1.fillRect(g,0,30,ran1);
ctx1.fillRect(g,ran1+70,30,ran2);

var set2 = setInterval(()=>{
    ctx1.clearRect(g,0,30,ran1);
    ctx1.clearRect(g,ran1+70,30,ran2);
    ctx1.fillStyle = "yellow"
      g = g-30;
      ctx1.fillRect(g,0,30,ran1);
      ctx1.fillRect(g,ran1+70,30,ran2);

      if((one+three-g)>=0 && (one+three-g)<60){
          if(two>=ran1&&(two+four)<=(300-ran2)){
              document.getElementById("score").innerHTML = "Your Score : "+Math.floor((++i)/2);
          }
          else{
              document.getElementById("gameover").innerHTML = "Game Over!!"
              clearInterval(set2);
          }
      }

      else if((one <=0) || (one+three >=800) || (two <= 0) || (two+four >=300)){
        document.getElementById("gameover").innerHTML = "Game Over!!"
        clearInterval(set2);
      }
},150)
}
}



 document.getElementsByName("body").addEventListener("onload",setInterval(()=>{
obstacle();
},3000));


function Re(){
  window.location.reload();
}

