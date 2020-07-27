// first lets populate a question and some answers

let questions = {
  question1: '1. What is the HTML tag under which one can write the JavaScript code?',
  question2: '2. Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
  question3: '3. JavaScript is a ___ -side programming language.',
}


let answers = {
  answer1: {
    a: 'javascript',
    b: 'scripted',
    c: 'script',
    d: 'js',
  },
  answer2: {
    a: 'alertbox(“GeeksforGeeks”);',
    b: 'msg(“GeeksforGeeks”);',
    c: 'msgbox(“GeeksforGeeks”);',
    d: 'alert(“GeeksforGeeks”);',
  },
  answer3: {
    a: 'Client',
    b: 'Server',
    c: 'Both',
    d: 'None',
  },
}

userChoices = []
localStorage.setItem('userChoices', JSON.stringify(userChoices))
// delete this later


let score = 0
let count = 60
let myInterval

// =============================================


// when we click the start button, this event listener starts
document.getElementById('start').addEventListener('click', event => {
  // event.preventDefault()


  // this will run the function every interval on miliseconds
  // interval to decrement amount of time by each one second
  myInterval = setInterval(() => {
    console.log(count)
    // displays time left on screen
    count--
    document.getElementById('count').textContent = `
    ${count} Seconds
    `
    // moves count down by 1
    if (count <= 0) {

      console.log('works')
      clearInterval(myInterval)



      document.getElementById('count').innerHTML = ``

      document.getElementById('question').innerHTML = `
      All Finished!
      `
      document.getElementById('answers').innerHTML = `
      Great job! Your score is: ${score}
      `

      displayHisghscores()

    }
  }, 1000)


  document.getElementById('count').textContent = `
    ${count} Seconds
    `
  document.getElementById('intro').innerHTML = ``

  // fill the question element with the following HTML
  document.getElementById('question').innerHTML = `
    ${questions.question1}
  `
  // fill the answers element with the following html
  document.getElementById('answers').innerHTML = `
      <button class="wrongChoice">A: ${answers.answer1.a}</button>
      <button class="wrongChoice">B: ${answers.answer1.b}</button>
      <button class="rightChoice">C: ${answers.answer1.c}</button>
      <button class="wrongChoice">D: ${answers.answer1.d}</button>
  `
})

// =============================================

// now set an event listener to the entire page
document.addEventListener('click', event => {


  // This logic is for the case when we click a list element with the class 'wrongChoice' and we want to execute the following
  if (event.target.classList.contains('wrongChoice')) {
    console.log("wrong")

    // decrement the time left by 10 seconds if there is a wrong answer
    count = count - 10

    event.target.dataset.wrong = 'wrong'
    userChoices.push(event.target.dataset.wrong)
    localStorage.setItem('userChoices', JSON.stringify(userChoices))


    // reset the answers element
    document.getElementById('answers').innerHTML = `
    WRONG
    <button id="next">Next</button>   
    `

    // start the next question
    document.getElementById('next').addEventListener('click', event => {
      document.getElementById('question').innerHTML = `
        ${questions.question2}
        `
      document.getElementById('answers').innerHTML = `
        <button class="wrongChoice1">A: ${answers.answer2.a}</button>
        <button class="wrongChoice1">B: ${answers.answer2.b}</button>
        <button class="wrongChoice1">C: ${answers.answer2.c}</button>
        <button class="rightChoice1">D: ${answers.answer2.d}</button>
        `
    })
  } else if (event.target.classList.contains('rightChoice')) {
    console.log('right')
    // reset the answers element


    event.target.dataset.correct = 'correct'
    userChoices.push(event.target.dataset.correct)
    localStorage.setItem('userChoices', JSON.stringify(userChoices))



    document.getElementById('answers').innerHTML = `
    CORRECT!
    <button id="next">Next</button> 
    `

    // start the next question
    document.getElementById('next').addEventListener('click', event => {
      document.getElementById('question').innerHTML = `
        ${questions.question2}
        `
      document.getElementById('answers').innerHTML = `
        <button class="wrongChoice1">A: ${answers.answer2.a}</button>
        <button class="wrongChoice1">B: ${answers.answer2.b}</button>
        <button class="wrongChoice1">C: ${answers.answer2.c}</button>
        <button class="rightChoice1">D: ${answers.answer2.d}</button>
        `
    })
  }
})

// =============================================

// now set an event listener to the entire page
document.addEventListener('click', event => {
  // This logic is for the case when we click a list element with the class 'wrongChoice' and we want to execute the following
  if (event.target.classList.contains('wrongChoice1')) {
    console.log('wrong1')

    count = count - 10

    document.getElementById('answers').innerHTML = `
    WRONG
    <button id="next1">Next</button>   
    `

    event.target.dataset.wrong = 'wrong'
    userChoices.push(event.target.dataset.wrong)
    localStorage.setItem('userChoices', JSON.stringify(userChoices))


    // start the next question
    document.getElementById('next1').addEventListener('click', event => {
      document.getElementById('question').innerHTML = `
        ${questions.question3}
        `
      document.getElementById('answers').innerHTML = `
        <button class="wrongChoice2">A: ${answers.answer3.a}</button>
        <button class="wrongChoice2">B: ${answers.answer3.b}</button>
        <button class="rightChoice2">C: ${answers.answer3.c}</button>
        <button class="wrongChoice2">D: ${answers.answer3.d}</button>
        `
    })
  } else if (event.target.classList.contains('rightChoice1')) {
    console.log('right1')
    // reset the answers element
    document.getElementById('answers').innerHTML = `
    CORRECT!
    <button id="next1">Next</button> 
    `

    event.target.dataset.correct = 'correct'
    userChoices.push(event.target.dataset.correct)
    localStorage.setItem('userChoices', JSON.stringify(userChoices))


    // start the next question
    document.getElementById('next1').addEventListener('click', event => {
      document.getElementById('question').innerHTML = `
        ${questions.question3}
        `
      document.getElementById('answers').innerHTML = `
        <button class="wrongChoice2">A: ${answers.answer3.a}</button>
        <button class="wrongChoice2">B: ${answers.answer3.b}</button>
        <button class="rightChoice2">C: ${answers.answer3.c}</button>
        <button class="wrongChoice2">D: ${answers.answer3.d}</button>
        `
    })
  }
})



// =============================================


document.addEventListener('click', event => {

  if (event.target.classList.contains('wrongChoice2')) {
    console.log('wrong2')

    event.target.dataset.wrong = 'wrong'
    userChoices.push(event.target.dataset.wrong)
    localStorage.setItem('userChoices', JSON.stringify(userChoices))


  } else if (event.target.classList.contains('rightChoice2')) {
    console.log('right2')
    // reset the answers element

    event.target.dataset.correct = 'correct'
    userChoices.push(event.target.dataset.correct)
    localStorage.setItem('userChoices', JSON.stringify(userChoices))

  }


  // This will finish the quiz 
  if (event.target.classList.contains('wrongChoice2') || event.target.classList.contains('rightChoice2')) {

    for (i = 0; i < userChoices.length; i++) {


      // gives the user 100 points per correct answer
      if (userChoices[i] === 'correct') {
        score = score + 100
      }

    }

    count = 0
    // if we are out of time we run this

    // This logic is for the case when we click a list element with the class 'wrongChoice' and we want to execute the following
    if (count <= 0) {

      console.log('works')
      clearInterval(myInterval)



      document.getElementById('count').innerHTML = ``

      document.getElementById('question').innerHTML = `
      All Finished!
      `
      document.getElementById('answers').innerHTML = `
      Great job! Your score is: ${score}
      `

    }

    displayHisghscores()

  }


})


// ===========================================


// Listen for someone to click the viewScores button and the display JUST the highscores
document.getElementById('viewScores').addEventListener('click', event => {

  // execute our displayHighScores function
  displayHisghscores()
  // clear out the other elements
  document.getElementById('intro').innerHTML = ``
  document.getElementById('question').innerHTML = ``
  document.getElementById('answers').innerHTML = ``
  document.getElementById('enterScore').parentNode.remove()


})




// ===========================================
// function for displaying high scrores

function displayHisghscores() {

  // populate the 'scores' element with the following html:
  // this will put in a form for the user to input their initials for their score
  document.getElementById('scores').innerHTML = `
        <form>
        <p id="enterScore">
        <label for="initials">Enter your innitials:</label>
        <input type="text" name="initials" id="initials">
        </p>
        <p>
        <button id="addScore">Add Score!</button>
        </p>
        </form>
        
        <h1>High Scores:</h1>
        <ul id="highScores"></ul>    
        `


  // ````````````````~~~~~~~~~~~~~~~~~~~~~

  // set highScoreNames to whatever is in local storage OR an empty array
  let highScoreNames = JSON.parse(localStorage.getItem('highScoreNames')) || []
  console.log(highScoreNames)


  // this starts the loop that will go through and input list elements for each of the PREVIOUS scores in the local storage
  for (i = 0; i < highScoreNames.length; i++) {
    let itemElem = document.createElement('li')

    // this will assign the initials and scores to those list elemts
    itemElem.innerHTML = `
      ${highScoreNames[i].name}
      ${highScoreNames[i].score}
      `
    // this appends those list elements to the 'highScores' element
    document.getElementById('highScores').append(itemElem)
  }


  // ````````````````~~~~~~~~~~~~~~~~~~~~~


  // listen for when the button is clicked and then do this function
  document.getElementById('addScore').addEventListener('click', event => {
    event.preventDefault()
    console.log('hello')

    let highScoreNamesObj = {
      name: document.getElementById('initials').value,
      score: score,
    }

    // push the object into the array 'initials'
    highScoreNames.push(highScoreNamesObj)


    localStorage.setItem('highScoreNames', JSON.stringify(highScoreNames))


    // create the type of html element we want
    let itemElem = document.createElement('li')

    // set its inner HTML
    itemElem.innerHTML = `
              ${document.getElementById('initials').value}
              ${score}
              `

    document.getElementById('enterScore').innerHTML = ``

    // add it to the ul by append
    document.getElementById('highScores').append(itemElem)
    // clear out the string
  })

}


