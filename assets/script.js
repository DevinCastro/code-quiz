// first lets populate a question and some answers

let questions = {
  quesion1: 'what is your name?',
  question2: 'how old are you?',
  question3: 'Do you code?',
}
let answers1 = {
  a: 'Devin',
  b: 'Maya',
  c: 'Christy',
}




document.getElementById('start').addEventListener('click', event => {
  event.preventDefault()
  document.getElementById('question').innerHTML = `
    ${questions.quesion1}
  `


  document.getElementById('answers').innerHTML = `
  a
  b
  c
  d
  `

})



// later we will need to add local storage to store the answers

// somehow we need to store correct answers

// we will need to include a timer

// find a way to make the timmer dynamic