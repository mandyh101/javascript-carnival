// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//PART 1 : store references to all of the cells
//the best way to do this is to create a 2D array.
//to create a 2d array we need an array first using the td element

let tableCells = document.getElementsByTagName('td')
console.log(tableCells)

//PART 2: Create a function to randomly select a cell

function getRandomCell(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min)) //will change to return when working
}
getRandomCell(0, 10) //test arguments

//PART 3: A way to show the mole in a random cell when it is clicked
