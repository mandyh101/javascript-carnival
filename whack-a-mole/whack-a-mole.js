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
