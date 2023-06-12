var random1 = Math.floor((Math.random()*6)+1);
var randomImg1 = "dice" + random1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg1);



var random2 = Math.floor((Math.random()*6)+1);
var randomImg2 = "dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);




if(random1>random2){
   document.querySelector("h1").textContent = "Win : Player 1";
}else if(random2>random1){
   document.querySelector("h1").textContent = "Win : Player 2";
}else{
  document.querySelector("h1").textContent = "Draw";
}