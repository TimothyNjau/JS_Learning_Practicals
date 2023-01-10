function ageinDays (){
   var birthYear = prompt('What year were you born')
   var AgeinDays = (2022 - birthYear) * 365;
   var h1 = document.createElement('h1')
   var textAnswer = document.createTextNode('You are '+ AgeinDays +' days old');
   h1.setAttribute('id', 'AgeinDays')
   h1.appendChild(textAnswer)
   document.getElementById('flex-box-result').appendChild(h1)
}
function reset() {
   document.getElementById('AgeinDays').remove()
}