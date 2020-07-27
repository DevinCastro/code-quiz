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
    a: '27',
    b: '26',
    c: '22',
  },
  answer3: {
    a: 'yes',
    b: 'no',
    c: 'Maybe',
  },
}

userChoices = []
localStorage.setItem('userChoices', JSON.stringify(userChoices))
// delete this later


let score = 0
let count = 15
let myInterval

















// when we click the start button, this event listener starts
document.getElementById('start').addEventListener('click', event => {
  // event.preventDefault()



  // lets try some time stuff
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
      finished
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
      <button class="rightChoice">A: ${answers.answer1.a}</button>
      <button class="wrongChoice">B: ${answers.answer1.b}</button>
      <button class="wrongChoice">C: ${answers.answer1.c}</button>
  `
})



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
        <button class="rightChoice1">A: ${answers.answer2.a}</button>
        <button class="wrongChoice1">B: ${answers.answer2.b}</button>
        <button class="wrongChoice1">C: ${answers.answer2.c}</button>
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
        <button class="rightChoice1">A: ${answers.answer2.a}</button>
        <button class="wrongChoice1">B: ${answers.answer2.b}</button>
        <button class="wrongChoice1">C: ${answers.answer2.c}</button>
        `
    })
  }
})



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
        <button class="rightChoice2">A: ${answers.answer3.a}</button>
        <button class="wrongChoice2">B: ${answers.answer3.b}</button>
        <button class="wrongChoice2">C: ${answers.answer3.c}</button>
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
        <button class="rightChoice2">A: ${answers.answer3.a}</button>
        <button class="wrongChoice2">B: ${answers.answer3.b}</button>
        <button class="wrongChoice2">C: ${answers.answer3.c}</button>
        `
    })
  }
})






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
      finished
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


  // first thing we do is grab the highScoreNames we already had or start with an empty array
  for (i = 0; i < highScoreNames.length; i++) {
    let itemElem = document.createElement('li')


    itemElem.innerHTML = `
      ${highScoreNames[i].name}
      ${highScoreNames[i].score}
      `
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




// later we will need to add local storage to store the answers

// somehow we need to store correct answers

// we will need to include a timer

// find a way to make the timmer dynamic