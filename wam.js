const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.getElementById('start')
const canvas = document.getElementById('canvas')
const instruction = document.getElementById('instruction')

let result = 0
let hitPosition
let timerId = null
let currentTime = 60


function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 800)
}

moveMole()

function startGame() {
  start.style.display = "none"
  instruction.style.display = "none"
  canvas.style.display = "block"
  start()
}

start.addEventListener('click', function() {
  let countDownTimerId = setInterval(countDown, 1000)
  function countDown() {
    currentTime--
    timeLeft.innerHTML = currentTime
    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game over! Your final score is ' + result + '. Please refresh if you wish to try again.')
    }
}
}) 