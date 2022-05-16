// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//TASK - write some functions to move between the different parts of the clown nd chnge the clowns outfit.
//BIND the function to arrow keys
//Left and right = cycle between different clothes
//up and down to change the bodypart
//Get one bodypart working first, then work on the others, then refactor.

let clownHead = document.getElementById('head')
let clownBody = document.getElementById('body')
let clownFeet = document.getElementById('feet')
let headSrcStr = './images/head'
let bodySrcStr = './images/body'
let feetSrcStr = './images/shoes'
let headIndex = 0
let bodyIndex = 0
let feetIndex = 0
let bodyPartsIndex = 0

function changeOutfit(change) {
  //my functions were too body part specific. I watched the demo video and learned about using an event paramenter and += to incrementally increase the number variable. I then copied my code to update the source.
  if (bodyPartsIndex == 0) {
    headIndex += change
    if (headIndex < 0) {
      headIndex = 5
    }
    if (headIndex > 5) {
      headIndex = 0
    }
    let headSrc = headSrcStr.concat(headIndex + '.png')
    clownHead.src = headSrc
  }
  if (bodyPartsIndex == 1) {
    bodyIndex += change
    if (bodyIndex < 0) {
      bodyIndex = 5
    }
    if (bodyIndex > 5) {
      bodyIndex = 0
    }
    let bodySrc = bodySrcStr.concat(bodyIndex + '.png')
    clownBody.src = bodySrc
  }
  if (bodyPartsIndex == 2) {
    feetIndex += change
    if (feetIndex < 0) {
      feetIndex = 5
    }
    if (feetIndex > 5) {
      feetIndex = 0
    }
    let feetSrc = feetSrcStr.concat(feetIndex + '.png')
    clownFeet.src = feetSrc
  }
}

function changeBodyParts(change) {
  bodyPartsIndex += change
  if (bodyPartsIndex < 0) {
    bodyPartsIndex = 2
  }
  if (bodyPartsIndex > 2) {
    bodyPartsIndex = 0
  }
}

window.addEventListener('keydown', toggleImages, false)

function toggleImages(keyPressed) {
  if (keyPressed.keyCode == 39) {
    changeOutfit(1)
  } else if (keyPressed.keyCode == 37) {
    changeOutfit(-1)
  } else if (keyPressed.keyCode == 38) {
    changeBodyParts(1)
  } else if (keyPressed.keyCode == 40) {
    changeBodyParts(1)
  }
}
