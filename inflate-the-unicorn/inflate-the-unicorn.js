// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//1. Write a function using the onclick method inflateTheUnicorn
//ARRAY: the function needs to cycle through the images when you click a unicorn so we need an array
//LOGIC: we need to make a for loop that uses the click method to execute  function when n imge is clicked
//FUNCTION: the function will need to get the HTMl src from each image aand chnage it to the more inflated image
//ALERT: when a unicorn is fully inflated we need to trigger an alert to thaank the user

//ARRAY
let unicorns = document.getElementsByClassName('inflate-an-image')
console.log(unicorns)

//LOGIC
for (i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflateTheUnicorn
}

let unicornIsInflated = false //i'm going to create a bool variable here as a default variaable that I might need to caall on later

function inflateTheUnicorn(e) {
  //we need to write a function that will change the img of the unicorn on each click
  //there are three images to change between in order
  //when the third image is called, an alert must trigger saying thank you.
  //The first step is to get the function to change any clicked image src to unicorn-1.png
  let unicorn = e.target //here I have created a vaariable for the specific clicked target
  console.log('this is the ' + unicorn.src)

  if (
    unicorn.src ===
    'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-0.png'
  ) {
    unicorn.src =
      'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-1.png'
  } else if (
    unicorn.src ===
    'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-1.png'
  ) {
    unicorn.src =
      'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-2.png'
  } else if (
    unicorn.src ===
    'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-2.png'
  ) {
    unicorn.src =
      'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-3.png'
  }
}
