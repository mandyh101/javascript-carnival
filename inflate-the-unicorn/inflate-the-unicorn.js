// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//1. Write a function using the onclick method inflateTheUnicorn
//ARRAY: the function needs to cycle through the images when you click a unicorn so we need an array
//LOGIC: we need to make a for loop that uses the click method to execute  function when n imge is clicked
//FUNCTION: the function will need ti get the HTMl src from each image aand chnage it to the more inflated image
//ALERT: when a unicorn is fully inflated we need to trigger an alert to thaank the user

//ARRAY
let unicorns = document.getElementsByClassName('inflate-an-image')
console.log(unicorns)

//LOGIC
for (i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflateTheUnicorn()
}

function inflateTheUnicorn() {
  console.log('hello')
}
