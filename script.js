/*To practice JavaScript events, create a webpage which can help people check if they have colour blindness.
 Create a grid of the colours of the rainbow that the user can select from.
Each grid cell should have an ID matching its colour (red, orange, yellow, green, blue, indigo or violet).
Bind an event listener to the grid and use event delegation to determine which colour was clicked.
Place a message below the grid which asks the user to click on a particular colour and once clicked, 
update the message to let them know if they were correct or not */

var gridContainer= document.querySelector('.gridContainer')
var guessColor= document.querySelector('colour')


var colorsArray = ["red", "orange", "yellow", "green", "blue", "violet"]

//to select random color
function getRandomColor(){
var random = Math.floor(Math.random() * colorsArray.length)
return colorsArray[random]
}

var currentColor = getRandomColor()
guessColor.textContent= currentColor
//get random color to stay on screen

gridContainer.addEventListener('click', function(e){
if (e.target.id == currentColor){
result.textContent = "Correct"
currentColor = getRandomColor()
guessColor.textContent =  currentColor
} else{
result.textContent = "You might be Colour Blind"
}
})