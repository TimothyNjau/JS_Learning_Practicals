// Task One: Age in Days
function ageInDays() {
   var birthYear = prompt('What year were you born?');
   var age_Days = (2023-birthYear) * 365;
   var h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('You are\t' + age_Days + '\tdays old');
   h1.setAttribute('id','ageInDays');
   h1.appendChild(textAnswer);
   var Result = document.getElementById('flex-box-result');
   Result.appendChild(h1);
}

function reset(){
   document.getElementById('ageInDays').remove();
}
