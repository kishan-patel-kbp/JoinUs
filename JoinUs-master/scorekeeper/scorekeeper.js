var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetbutton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var input = document.querySelector("input");
p1Score = 0;
p2Score = 0;
var gameOver = false;
var winningScore = 5;


console.log(p1Display)
p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score ++;
        if (p1Score === Number(winningScore)){
            p1Display.classList.add("winner");
            console.log("gameover");
            gameOver =true;
        }
        p1Display.textContent  = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score ++;
        if (p2Score === Number(winningScore)){
            p2Display.classList.add("winner");
            console.log("gameover");
            gameOver= true;
        }
        p2Display.textContent  = p2Score;
    }
    
});

resetbutton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent  = p1Score;
    p2Display.textContent  = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    

}
numInput.addEventListener("change", function(){
    winningScore = input.value;
    winningScoreDisplay.textContent  = input.value;
    reset();
});