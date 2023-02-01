// Task One: Age in Days
function ageInDays() {
   var birthYear = prompt('What year were you born?');
   var age_Days = (2023 - birthYear) * 365;
   var h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('You are\t' + age_Days + '\tdays old');
   h1.setAttribute('id', 'ageInDays');
   h1.appendChild(textAnswer);
   var Result = document.getElementById('flex-box-result');
   Result.appendChild(h1);
}

function reset() {
   document.getElementById('ageInDays').remove();
}
//Task Two: Cat Generator
function generateCat() {
   var image = document.createElement('img');
   var div = document.getElementById("flex-box-img-gen");
   image.src = "static/images/birthday_01.jpg"
   div.appendChild(image);
}
function remove() {
   var div = document.getElementById("flex-box-img-gen");
   var image = div.querySelector("img");
   while (image) {
      div.removeChild(image);
      image = div.firstElementChild;
   }
}
// Task Three: Rock, Paper, Scissors game
function rspGame(yourChoice) {
   console.log(yourChoice);
   var humanChoice, botChoice;
   humanChoice = yourChoice.id;
   botChoice = numToChoice(randToRspInt());
   console.log(botChoice);
   results = decideWinner(humanChoice, botChoice);
   console.log(results); //returns array which could be [0,1] [1,0] or [0.5,0.5] depending on choice of bot and human.

   message = finalMessage(results); // printed depending on the value of the array from results
   console.log(message);
   rspFrontEnd(humanChoice, botChoice, message);
}
function randToRspInt() {
   return Math.floor(Math.random() * 3);
}
function numToChoice(number) {
   return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(humanChoice, botChoice) {
   var rspDatabase = {
      'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
      'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
      'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 }
   }
   var yourScore = rspDatabase[humanChoice][botChoice];
   var compScore = rspDatabase[botChoice][humanChoice];
   return [yourScore, compScore];
}
function finalMessage([yourScore, compScore]) {
   if (yourScore === 0) {
      return { 'message': 'You lost!', 'color': 'red' };
   } else if (yourScore === 0.5) {
      return { 'message': 'You tied!', 'color': 'yellow' };
   } else {
      return { 'message': 'You won!', 'color': 'green' };
   }
}
function rspFrontEnd(humanImgChoice, botImgChoice, finalMessage) {
   var ImgDatabase = {
      'rock': document.getElementById('rock').src,
      'scissors': document.getElementById('scissors').src,
      'paper': document.getElementById('paper').src
   }
   //remove all images of flex box
   document.getElementById('rock').remove();
   document.getElementById('scissors').remove();
   document.getElementById('paper').remove();
   // create new div
   var humanDiv = document.createElement('div');
   var botDiv = document.createElement('div');
   var messageDiv = document.createElement('div');
   humanDiv.innerHTML = "<img src='" + ImgDatabase[humanImgChoice] + "' height=auto width=200 style='box-shadow: 0px 10px 50px rgba(37, 100,50,1)'>"

   botDiv.innerHTML = "<img src='" + ImgDatabase[botImgChoice] + "' height=auto width=200 style='box-shadow: 0px 20px 70px rgba(200, 0,0,1)'>"

   messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + ";font-size:60px;padding:30px; '>" + finalMessage['message'] + "</h1>"

   document.getElementById('flex-box-rsp').appendChild(humanDiv);
   document.getElementById('flex-box-rsp').appendChild(messageDiv);
   document.getElementById('flex-box-rsp').appendChild(botDiv);

}
// Task Four: Change the color of all buttons
let allButtons = document.getElementsByTagName('button');
console.log(allButtons);
let ButtonColors = [];
function originalButttonColors(){
   for(let x=0; x<allButtons.length; x++){
      ButtonColors.push(allButtons[x].classList[0]);
   }
   return ButtonColors;
}

function buttonColorChange(optionSelect){
   console.log(optionSelect.value);
   originalButttonColors();
   if (optionSelect.value === 'red'){
      buttonRed();
   }
   else if (optionSelect.value === 'green'){
      buttonGreen();
   }
   else if (optionSelect.value === 'yellow'){
      buttonYellow();
   } 
   else if (optionSelect.value === 'random'){
      buttonRandom();
   }
   else if (optionSelect.value === 'reset'){
      buttonColorReset();
   }
}

function buttonRed(){
   for (let i=0; i<allButtons.length;i++) {
      allButtons[i].classList.remove(allButtons[i].classList[0]);
      allButtons[i].classList.add('btn-Red');
   }
}
function buttonGreen(){
   for(i=0;i<allButtons.length;i++){
      allButtons[i].classList.remove(allButtons[i].classList[0]);
      allButtons[i].classList.add('btn-Green');
   }
}
function buttonYellow(){
   for(i=0;i<allButtons.length;i++){
      allButtons[i].classList.remove(allButtons[i].classList[0]);
      allButtons[i].classList.add('btn-Yellow');
   }
}
function buttonColorReset(){
 for(i=0;i<allButtons.length;i++){
   allButtons[i].classList.remove(allButtons[i].classList[0]);
   allButtons[i].classList.add(ButtonColors[i]);
 }
}
function buttonRandom(){
   var choices = ['btn-Red' , 'btn-Green', 'btn-Yellow', 'btn-Blue'];
   for (i=0;i<allButtons.length;i++){
      let randNumber = Math.floor(Math.random() * 4);
      allButtons[i].classList.remove(allButtons[i].classList[0]);
      allButtons[i].classList.add(choices[randNumber]);
   }
}

//Task five: Blackjack
let blackjackGame = {
   'you':{'scoreSpan':'#user-blackjack-result','div':'#your-box','score': 0},
   'dealer':{'scoreSpan':'#bot-blackjack-result','div':'#bot-box','score': 0},
   'cards':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
   'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'J':10,'K':10,'Q':10,'A':[1,11]}
}
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/images/sounds/swish.m4a');

function blackjackHit(){
   let card = randomCard();
   console.log(card);
   showCard(card, YOU);
   updateScore(card, YOU);
   console.log(YOU['score']);
   
}
function showCard(card, activePlayer){
   let cardImage = document.createElement('img');
   cardImage.src = `static/images/images/${card}.png`;
   cardImage.style.height = "auto";
   cardImage.style.maxWidth = "25%";
   cardImage.style.padding = "10px";
   document.querySelector(activePlayer['div']).appendChild(cardImage);
   hitSound.play();
}
function blackjackDeal(){
   let yourImages = document.querySelector('#your-box').querySelectorAll('img');
   let dealermages = document.querySelector('#bot-box').querySelectorAll('img');

   for(i=0;i<yourImages.length;i++){
      yourImages[i].remove();
      dealermages[i].remove();
   }
}    
function randomCard(){
   let randIndex = Math.floor(Math.random()*13);
   return blackjackGame['cards'][randIndex];
}
function updateScore(card, activePlayer){
   activePlayer['score'] += blackjackGame['cardsMap'][card];

}