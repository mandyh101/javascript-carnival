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

// //LOGIC
for (i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflateTheUnicorn
}

function inflateTheUnicorn(e) {
  let unicorn = e.target //here I have created a vaariable for the specific clicked target

  let id = unicorn.id[3] //I got this code from Josephs video. it solved my issue of trying to return the number of the inflated unicorn image in my alert. I had created an ID for each unicorn image. This code creates a variable that is the 3rd leter of the elements ID. In this case, the number in the ID I gave these imgs. I can then call this id in my alert function
  // console.log(id)

  //okay, I thought I had my if/else statement nailed but then I couldn't get the URLs to work.
  //so I am going to use slice to take the 5th letter (the image number) from the source link.
  // I need a variable to assign the sliced src value
  //And then I can use this variable in my condition to iterate on each click and change the src link for the image.
  const srcNumber = unicorn.src.slice(-5, -4) //I paired with David to work through slicing the src link.

  switch (srcNumber) {
    case '0':
      unicorn.src = './images/unicorn-1.png'
      break
    case '1':
      unicorn.src = './images/unicorn-2.png'
      break
    case '2':
      unicorn.src = './images/unicorn-3.png'
      break
    default:
      alert(`Unicorn number ${id} says thank you!`)
  }
}
