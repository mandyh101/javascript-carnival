// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//PART 1 : store references to all of the cells
//the best way to do this is to create a 2D array.
//to create a 2d array we need an array first using the td element

var tableCells = document.getElementsByTagName('td')
console.log(tableCells)

//PART 2: Create a function to randomly select a cell
//Instead of a full function ( I was getting a NAN error) will use the javascript random method to assign a random cell using it's index to a variable
var randomIndex = Math.floor(Math.random() * tableCells.length) //instead of times a number, times length of array and then the code won't break if table size changes
//changed let to var as I was getting error: cannot re-declare block scoped variable.
//Assign the cell element that matches the randomIndex value to a variable
var randomCell = tableCells[randomIndex] //this uses the randomIndex value as the [index selector] for our table cells array
console.log(randomCell)

//PART 3: A way to show the mole in a random cell when it is clicked
//First create HTML image using JS (adding this step based on demo video)
//THEN create a function that makes the mole change cells on click
//BONUS - add the audio noise

var moleImg = document.createElement('img') //create the image
moleImg.src = './mole.PNG' //set the source
moleImg.alt = 'image of a mole' //set the alt text
randomCell.appendChild(moleImg) //get the element we want the image to appear in and appendchild = place the inside the parent element
moleImg.id = 'mole' //link to style element to make moleimg same size as cells
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
