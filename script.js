const form = document.querySelector(".form");

let random = parseInt(Math.random()*100 + 1);
console.log(`random no is ${random}`);
const guesses = document.querySelector(".guesses");
const RemainGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const p =document.createElement("p")




let prevGuess = [];
let numguess = 1;
let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }

function validateGuess(guess){
    if(isNaN(guess)){
        console.log(isNaN(guess) , "rerw");
        alert("please enter a valid number");
    }else if(guess < 1){
        alert("number  should not be negative ");
    }else if(guess > 100){
        alert("number should be less than  100");
    }else{
        prevGuess.push(guess);
        if(numguess>10){
            displayGuess(guess);
            displayMessage(`game over ! The correct guess was ${random}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
            
            
        }
    }
}
const checkGuess =(guess)=>{
    if(guess>random){
        displayMessage("guess lower");
    }else if(guess<random){
        displayMessage("guess higher");
    }else{
        displayMessage("You Won , that was the right guess");
        endGame();
    }

}
const displayGuess = (guess)=>{
    userInput.value="";
    guesses.innerHTML += `${guess} `
    numguess++;
    RemainGuess.innerHTML = `${11-numguess}`
}
const displayMessage = (message)=>{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
const endGame = () =>{
    userInput.value="";
    guesses.innerHTML="";
    prevGuess=[];
    numguess=1;
    playGame=false;
    RemainGuess.innerHTML = `${11-numguess}`
    document.getElementById("guessField").setAttribute('disabled',"");
    p.classList.add('button');
    p.innerHTML = "<h2>Start Game</h2>";
    p.setAttribute('id', 'newGame');
    startOver.appendChild(p);
    newGame();

}
const newGame = ()=>{
    document.querySelector(".button").addEventListener("click",(e)=>{
        random = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numguess=1;
        playGame = true;
        guesses.innerHTML="";
        RemainGuess.innerHTML = `${11-numguess}`
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);

    })
}
// function main(){
//     let userInput = document.querySelector(".guessField");
//     if(playGame){
//         document.getElementById("subt").addEventListener("click",(e)=>{
//             e.preventDefault();
//             const guess = parseInt(userInput.value);   
//             console.log(guess , "A");
//             validateGuess(guess); 
//         })
//     }
// }

