//append x and o
let startgame = 1; //default value
let gameon=true; //default boolean
function tapfun(item){    
  if(startgame == 1 && gameon == true){ //condition if value 1 and boolean true
   item.classList.add("x") //add class "x"
   item.innerHTML="x";    //add text "x"
   document.querySelector(".turn").innerHTML="Player 'O' Turn"; //player turn
   startgame=2; // the default value is change 1 to 2
   win() //call win function to check
   }else if(startgame == 2 && gameon == true){ //condition if value 2 and boolean true
    item.classList.add("o"); //add class "o"
    item.innerHTML="o";    //add text "o"
    document.querySelector(".turn").innerHTML="Player 'X' Turn"; //player turn
    startgame=1; //the value change 2 to 1
    win() // win fun to check
    } 
   
}
//reset the game
 function restart(){
  let elem=document.querySelectorAll(".x")
  let el=document.querySelectorAll(".o")
  let del=document.querySelectorAll(".rounded")
  elem.forEach(function(reset){  //function for remove the class "x" 
    reset.classList.remove("x")
  })
  el.forEach(function(reset){  //function for remove the class "o"
    reset.classList.remove("o")
  })
  del.forEach(function(reset){ //remove innerhtml for all boxes
    reset.innerHTML="";
  })
  document.querySelector(".turn-one").innerHTML="" //remove the innerhtml in won div
  gameon=true; //change the boolean value false to true
  startgame=1; // set the value 1
  document.querySelector(".turn").innerHTML="" //remove th innerhtml in player turn div
}
// winning function
function win(){
let	box1 = document.getElementById("box1").innerHTML;
let	box2 = document.getElementById("box2").innerHTML;
let	box3 = document.getElementById("box3").innerHTML;
let	box4 = document.getElementById("box4").innerHTML;
let	box5 = document.getElementById("box5").innerHTML;
let	box6 = document.getElementById("box6").innerHTML;
let	box7 = document.getElementById("box7").innerHTML;
let	box8 = document.getElementById("box8").innerHTML;
let	box9 = document.getElementById("box9").innerHTML;
//check the winning combination using OR logic
// check x player
if(
   (box1=="x" && box2=="x" && box3=="x")||(box4=="x" && box5=="x" && box6=="x")||
   (box7=="x" && box8=="x" && box9=="x")||(box1=="x" && box5=="x" && box9=="x")||
   (box3=="x" && box5=="x" && box7=="x")||(box1=="x" && box4=="x" && box7=="x")||
   (box2=="x" && box5=="x" && box8=="x")||(box3=="x" && box6=="x" && box9=="x")){
  document.querySelector(".turn-one").innerHTML="x won"
  gameon=false;
}
// check o player
else if(
(box1=="o" && box2=="o" && box3=="o")||(box4=="o" && box5=="o" && box6=="o")||
(box7=="o" && box8=="o" && box9=="o")||(box1=="o" && box5=="o" && box9=="o")||
(box3=="o" && box5=="o" && box7=="o")||(box1=="o" && box4=="o" && box7=="o")||
(box2=="o" && box5=="o" && box8=="o")||(box3=="o" && box6=="o" && box9=="o")){
  document.querySelector(".turn-one").innerHTML="o won"
  gameon=false;
//match draw
}else if(
  (box1 != "" && box2 != "" && box3 !=""&& box4 !="" && 
  box5 !=""&& box6!=""&& box7 !=""&& box8!=""&& box9!="" )){
  document.querySelector(".turn-one").innerHTML="match draw"
}
}