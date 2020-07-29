# Code-Quiz

Here is an application that the user takes a short 3 question quiz about some javascript concepts.  Upon landing on the page you can see a breif intro and the instructions for the quiz.  

As soon as you click the start button the quiz begins.  I dynamilly render the html of each element with vanilla javascript and populate the question and corresponding answers.  The timer also begins when you click start!  You have 60 seconds to finish the quiz, but if you get a question wrong you also lose 10 more seconds.  For every question you get correct you are awarded 100 points.

At any point you are able to able to click the 'View Highscores" button in the upper left corner and that will take you to the leader board where you can see the users initials and highscore!

Once you have start the quiz, I used DOM manipulation to listen for when you click an answer.  Once you click, I dynamically update the html to tell you if the answer was correct or incorrect.  Then display the next button to go to the next question.

After the last question you are taken to the highscores where you can log your Initials into the local storage and it will be displayed along with your corresponding score!