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

var copyAllButtons = [];
for (let x=0; x < allButtons.length; x++){
   copyAllButtons.push(allButtons[x]);
}
console.log(copyAllButtons);

function buttonColorChange(optionSelect){
   console.log(optionSelect.value);
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
}

function buttonRed(){
   for (let i=0; i<allButtons.length;i++) {

   }
}