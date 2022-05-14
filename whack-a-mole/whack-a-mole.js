// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//PART 1 : Create an array of cells

var tableCells = document.getElementsByTagName('td')

//PART 2: Create a function to randomly select a cell
//Instead of a full function ( I was getting a NAN error) I will use the javascript random method to assign a random cell using it's index to a variable
var randomIndex = Math.floor(Math.random() * tableCells.length) //instead of times a number, times length of array and then the code won't break if table size changes
var randomCell = tableCells[randomIndex] //this uses the randomIndex value as the [index selector] for our table cells array

//PART 3: A way to show the mole in a random cell when it is clicked
//First create HTML image using JS (adding this step based on demo video)
//THEN create a function that makes the mole change cells on click (used w3 schools and video for this part)
//Add the audio noise when the mole gets whacked.

var moleImg = document.createElement('img') //create the image
moleImg.src = './mole.PNG' //set the source
moleImg.alt = 'image of a mole' //set the alt text
randomCell.appendChild(moleImg) //get the element we want the image to appear in and appendchild = place the inside the parent element
moleImg.id = 'mole' //link to style element to make moleimg same size as cells
//stretch idea - can I change the style without using an id?
let moleSoundEffect = new Audio() //used this resurce to add soundeffect https://www.developphp.com/lib/JavaScript/Audio
moleSoundEffect.src = 'whack-audio.wav'

moleImg.onclick = whackTheMole

function whackTheMole() {
  //had to use the vid for this part as my brain couldn't compute but now I see its so obvious!
  randomIndex = Math.floor(Math.random() * tableCells.length) //repeat the random index generator
  randomCell = tableCells[randomIndex] //reassign the new index number to select a new cell
  randomCell.appendChild(moleImg) //we can use this code again to place the image element in its new parent element based on teh random cell value
  moleSoundEffect.play() //call sound effect
}
