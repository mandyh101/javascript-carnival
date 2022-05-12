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

// //LOGIC
for (i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflateTheUnicorn
}

let unicornIsInflated = false //i'm going to create a bool variable here as a default variaable that I might need to caall on later

function inflateTheUnicorn(e) {
  //we need to write a function that will change the img of the unicorn on each click
  //there are three images to change between in order
  //when we reach the image with a fully inflated horn an alert must trigger saying thank you.
  //we need to be able to see what unicorn image we're clicking on
  //The first step is to get the function to change any clicked image src to unicorn-1.png
  let unicorn = e.target //here I have created a vaariable for the specific clicked target
  console.log(unicorn)
  console.log('this is the ' + unicorn.src)
  let id = unicorn.id[3] //I got this code from Josephs video. it solved my issue of trying to return the number of the inflated unicorn image in my alert. I created an ID for each unicorn image. This code creates a variable that is the 3rd leter of the elements ID. In this case, the number in the ID I gave these imgs.
  console.log(id)
  //okay, I thought I had my if/else statement nailed but then I couldn't get the URLs to work.
  //so I am going to try and use slice to take the 5th letter (the image number) to change the links and compare. I thought I needed to create an array of string out of the src first but one of my peers told me that wasn't necessary.
  //I need a variable to assign the split link
  // I need a variable to assign the sliced letter array to
  //And then I can use this to change the HTML link in my function

  if (unicorn.src.slice(-5) === '0') {
    console.log(unicorn.src)
    // } else if (
    //   unicorn.src ===
    //   'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-1.png'
    // ) {
    //   unicorn.src =
    //     'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-2.png'
    // } else if (
    //   unicorn.src ===
    //   'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-2.png'
    // ) {
    //   unicorn.src =
    //     'file:///Users/mandyhale/devacademy/DA_projects/sprint-5-projects/javascript-carnival/inflate-the-unicorn/images/unicorn-3.png'
    // } else {
    // alert(`Unicorn number ${id} says thank you!`)
  }
}
