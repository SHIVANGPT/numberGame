'use strict';

let secretNumber = Math.floor(Math.random() * 100 + 1);
console.log(secretNumber);


let guess = Number(document.querySelector('.guess').value);
let score = 20;
var scoreCount=document.querySelector(".score");
var highscore = 0;


let msg = document.querySelector('.message').textContent;
let checkButton = document.querySelector('.check').addEventListener(
  'click',
  function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
      document.querySelector('.message').textContent="Please Enter valid input Number";


      

      // When guess is too High
    }else if (guess > secretNumber){
      document.querySelector('.message').textContent="It's to high"
      scoreCount.textContent= --score;
      if (score <=  0){
        document.querySelector('.message').textContent="Game over";
        
      }
    }
    // When guess is too low
    else if (guess < secretNumber){
      document.querySelector('.message').textContent="It's too low"
      scoreCount.textContent= --score;
      
    }
    else if (guess === secretNumber){
      document.querySelector('.message').textContent="You'r Genius Correct Answer"
      document.querySelector('body').style.backgroundColor="green";
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('h1').textContent="Correct Number HUray";
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }else{

      }
    } 
     

    
  }   
)

 document.querySelector(".again").addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent="Start guessing...";
  document.querySelector('body').style.backgroundColor="#222";
  document.querySelector(".score").textContent=20;
  secretNumber = Math.floor(Math.random() * 100 + 1);
  console.log(secretNumber);
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('h1').textContent="Guess My Number!";
  document.querySelector('.number').textContent="??";
  
  
})


 