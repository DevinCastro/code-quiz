// first lets populate a question and some answers

let questions = {
  question1: 'what is your name?',
  question2: 'how old are you?',
  question3: 'Do you code?',
}
let answers = {
  answer1: {
    a: 'Devin',
    b: 'Maya',
    c: 'Christy',
  },
  answer2: {
    a: '20',
    b: '21',
    c: '22',
  },
  answer3: {
    a: 'yes',
    b: 'no',
    c: 'Maybe',
  },
}

userChoices = []

// delete this later



// when we click the start button, this event listener starts
document.getElementById('start').addEventListener('click', event => {
  event.preventDefault()
  // fill the question element with the following HTML
  document.getElementById('question').innerHTML = `
    ${questions.question1}
  `
  // fill the answers element with the following html
  document.getElementById('answers').innerHTML = `
      <li class="rightChoice">A: ${answers.answer1.a}</li>
      <li class="wrongChoice">B: ${answers.answer1.b}</li>
      <li class="wrongChoice">C: ${answers.answer1.c}</li>
  `
})

// now set an event listener to the entire page
document.addEventListener('click', event => {
  // This logic is for the case when we click a list element with the class 'wrongChoice' and we want to execute the following
  if (event.target.classList.contains('wrongChoice')) {
    console.log("wrong")

    // reset the answers element
    document.getElementById('answers').innerHTML = ``
    // remove the questions from the page
    // display wrong and present the 'next' button
    document.getElementById('rightWrong').innerHTML = `
    WRONG
    `
    // add the next button into the 'next' element
    document.getElementById('next').innerHTML = `
    <button id="next">Next</button>    
    `

    // start the next question
    document.getElementById('next').addEventListener('click', event => {
      document.getElementById('question').innerHTML = `
        ${questions.question2}
        `
      document.getElementById('answers').innerHTML = `
        <li class="rightChoice">A: ${answers.answer2.a}</li>
        <li class="wrongChoice">B: ${answers.answer2.b}</li>
        <li class="wrongChoice">C: ${answers.answer2.c}</li>
        `
    })
  } else if (event.target.classList.contains('rightChoice')) {
    console.log('right')
    // reset the answers element
    document.getElementById('answers').innerHTML = ``
    // remove the questions from the page
    // display wrong and present the 'next' button
    document.getElementById('rightWrong').innerHTML = `
    CORRECT!
    `
    // add the next button into the 'next' element
    document.getElementById('next').innerHTML = `
    <button id="next">Next</button>    
    `

    // start the next question
    document.getElementById('next').addEventListener('click', event => {
      document.getElementById('question').innerHTML = `
        ${questions.question2}
        `
      document.getElementById('answers').innerHTML = `
        <li class="rightChoice">A: ${answers.answer2.a}</li>
        <li class="wrongChoice">B: ${answers.answer2.b}</li>
        <li class="wrongChoice">C: ${answers.answer2.c}</li>
        `
    })
  }
})






// now set an event listener to the entire page
document.addEventListener('click', event => {
  // This logic is for the case when we click a list element with the class 'wrongChoice' and we want to execute the following
  if (event.target.classList.contains('wrongChoice')) {
    console.log("wrong")

    // reset the answers element
    document.getElementById('answers').innerHTML = ``
    // remove the questions from the page
    // display wrong and present the 'next' button
    document.getElementById('rightWrong').innerHTML = `
    WRONG
    `
    // add the next button into the 'next' element
    document.getElementById('next').innerHTML = `
    <button id="next">Next</button>    
    `

    // start the next question
    document.getElementById('next').addEventListener('click', event => {
      document.getElementById('question').innerHTML = `
        ${questions.question3}
        `
      document.getElementById('answers').innerHTML = `
        <li class="rightChoice">A: ${answers.answer3.a}</li>
        <li class="wrongChoice">B: ${answers.answer3.b}</li>
        <li class="wrongChoice">C: ${answers.answer3.c}</li>
        `
    })
  } else if (event.target.classList.contains('rightChoice')) {
    console.log('right')
    // reset the answers element
    document.getElementById('answers').innerHTML = ``
    // remove the questions from the page
    // display wrong and present the 'next' button
    document.getElementById('rightWrong').innerHTML = `
    CORRECT!
    `
    // add the next button into the 'next' element
    document.getElementById('next').innerHTML = `
    <button id="next">Next</button>    
    `

    // start the next question
    document.getElementById('next').addEventListener('click', event => {
      document.getElementById('question').innerHTML = `
        ${questions.question3}
        `
      document.getElementById('answers').innerHTML = `
        <li class="rightChoice">A: ${answers.answer3.a}</li>
        <li class="wrongChoice">B: ${answers.answer3.b}</li>
        <li class="wrongChoice">C: ${answers.answer3.c}</li>
        `
    })
  }
})












// later we will need to add local storage to store the answers

// somehow we need to store correct answers

// we will need to include a timer

// find a way to make the timmer dynamic