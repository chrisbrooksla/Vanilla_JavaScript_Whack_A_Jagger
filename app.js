// selects all divs with name of "square"
const squares = document.querySelectorAll('.square')

// selects div with name of "mole"
const mole = document.querySelectorAll('.mole')

// selects div with ID of "time-left"
const timeLeft = document.querySelector('#time-left') 

// this is a "let" declaration because this will change during the game
let score = document.querySelector('#score')

let result = 0;

let hitPosition

let currentTime = 60

let timerId = null

function randomSquare() {
  squares.forEach(square => {
    // this removes all (mole) class from all of the squares in the grid
    square.classList.remove('mole')
  })
  // define a random position on the 9 square grid with Math.random 
  // Math.floor rounds down to the nearest integer
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  // once randomPosition is defined, add the class of "mole" to it
  randomSquare.classList.add('mole')

  // assign the ID of the randomPosition to hitPosition for us to use later
  hitPosition = randomSquare.id
}

// add an event listener for 'mousedown', or when we hit our mouse on an element
squares.forEach(square =>{
  square.addEventListener('mousedown', () =>{
    // if the ID of that div equals the ID of the hitPosition...
    if(square.id === hitPosition){
      // we win, and add 1 point to our result
      result = result + 1
      // we use textContent to display that result in the browser...
      score.textContent = result

      hitPosition = null
    }
  })
})

// this will move the mole every half second....
function moveMole() {
  // this runs the function "randomSquare" run every half second...
  timerId = setInterval(randomSquare, 500)
}

// this invokes the function
moveMole()


// this function makes our current time go down by 1 incrementally
function countDown() {
  currentTime--
  // show this new time in the browser...
  timeLeft.textContent = currentTime

  // if currentTime reaches 0, we have a game over
  if(currentTime === 0){
    // we clear the time interval and set an alert with the final result
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your Final Score Is ' + result)
  }
}

// using setInterval, we invoke the countDown function every 1 second...
let countDownTimerId = setInterval(countDown, 1000)

