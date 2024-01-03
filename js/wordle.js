
var height=6;//Number of guesses
var width=5;//length of the word

var row=0;//current guss(attempt #)
var col=0;//current letter for that attempt

var gameOver=false;
var word="SQUID";


window.onload=function(){
    intialize();
}


function intialize(){

    //create the game board
    for(let r=0; r<height;  r++){
        for(let C=0; C<width; C++){
            let tile=document.createElement("span");
            tile.id=r.toString() + "-"+C.toString();
            tile.classList.add("tile");
            tile.innerText="P";
            document.getElementById("board").appendChild(tile);
        }
    }
}