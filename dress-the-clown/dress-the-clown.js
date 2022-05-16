// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//TASK - write some functions to move between the different parts of the clown nd chnge the clowns outfit.
//BIND the function to arrow keys
//Left and right = cycle between different clothes
//up and down to change the bodypart
//Get one bodypart working first, then work on the others, then refactor.

//The Head
//give the head img an id to reference and assign to a variable
//create changeClownHead function to chnage the src image of your file to head1
//test
//create a variable to store the current number of your head image (outside of function)
//create a variable to contain your src string so you cana manipulate this with the image number variable
//use the string variable to update your image src and index one-by-one
//test
//Bind the function to your right arrow key to cycle through images
//add a check to the function so that if the headIndex variable equals greater than 6 to staart back at 0

let clownHead = document.getElementById('head')
let clownBody = document.getElementById('body')
let clownFeet = document.getElementById('feet')
let headIndex = 0
let bodyIndex = 0
let feetIndex = 0
let headSrcStr = './images/head'
let bodySrcStr = './images/body'
let feetSrcStr = './images/shoes'

function changeClownHeadUp() {
  if (bodyPartsIndex == 0) {
    headIndex < 5 ? headIndex++ : (headIndex = 0)
    let headSrc = headSrcStr.concat(headIndex + '.png')
    clownHead.src = headSrc
  }
}
function changeClownHeadDown() {
  if (bodyPartsIndex == 0) {
    headIndex > 0 ? headIndex-- : (headIndex = 5)
    let headSrc = headSrcStr.concat(headIndex + '.png')
    clownHead.src = headSrc
  }
}
function changeBodyUp() {
  if (bodyPartsIndex == 1) {
    bodyIndex < 5 ? bodyIndex++ : (bodyIndex = 0)
    let bodySrc = bodySrcStr.concat(headIndex + '.png')
    clownBody.src = bodySrc
  }
}
function changeClownHeadDown() {
  if (bodyPartsIndex == 1) {
    bodyIndex > 0 ? bodyIndex-- : (bodyIndex = 5)
    let bodySrc = bodySrcStr.concat(headIndex + '.png')
    clownBody.src = bodySrc
  }
}

window.addEventListener('keydown', toggleImages, false)

function toggleImages(keyPressed) {
  if (keyPressed.keyCode == 39) {
    changeClownHeadUp()
    console.log('right arrow = increase headIndex')
    console.log(headIndex)
  } else if (keyPressed.keyCode == 37) {
    changeClownHeadDown()
    console.log('left arrow = decrease headIndex')
    console.log(headIndex)
  } else if (keyPressed.keyCode == 38) {
    changeBodyParts(1)
    console.log('up arrow = change bodyPartIndex up')
    console.log(bodyPartsIndex)
  } else if (keyPressed.keyCode == 40) {
    changeBodyParts(-1)
    console.log('down arrow = change bodyPartIndex down')
    console.log(bodyPartsIndex)
  }
}
//Toggle between different body parts
//create another index to keep track of which body part you are selecting clothing for (array using get element)
//Write  function that allows you to use the up and down arrows to increase/decrease the clothingindex variable
//add a check to make sure it doesn't go too high or low
//console.log to test
let bodyPartsIndex = 0

function changeBodyParts(change) {
  bodyPartsIndex += change
  if (bodyPartsIndex < 0) {
    bodyPartsIndex = 2
  }
  if (bodyPartsIndex > 2) {
    bodyPartsIndex = 0
  }
}
// console.log(bodyPartsIndex)

//Refactor and change all body parts
//use our head function
//Our function should cycle through the images depending on what the clothingIndex variabel is set at e.g. if == 0, change head images. If == 1, change body images. If == 2, change shows.
