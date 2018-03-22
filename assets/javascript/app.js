//create a variable for my guestions
var questions = ["Why does Monica receive her dad's Porsche?", "What did Ross give Phoebe, because she never had on when she was little?", "How does Ross finally make it to his class on time?", "What is Monica's plan after her and Richard break up?", "What does Joey find in Las Vegas that astonished him?"];
//create a variable for my answer
var answers = [
    ["Wedding Gift","Birthday Gift","He ruined all her childhood memories","He likes Monica better than Ross"], 
    ["A dog", "A wagon", "A bicycle", "A doll"],
    ["Roller Skating", "Drives", "He never does", "He cancels class"],
    ["To make jam", "To move", "To get a new job at the Iron Dragon", "To move in with Chandler"]
    ["His sister lives there", "His identical hand twin", "A 2 headed turtle", "Food"]
];
//create a variable for correct/wrong/unanswered questions
var correctAnswer = 0;
var wrongAnsweer = 0;
var unanswered = 0;
//display my question and answers
function startGame() {
   $("#question").show(questions[0] + answers[0]);
    console.log(questions[0] + answers[0]);
}

startGame();
//set a timeout of 30 seconds for each question
//if user answers right, the guestion and answers will disappear and a message of "Correct!" will appear along with an image.
//if user answers wrong, the question and answers will disappear and two messages will come up, "Nope!" and "The correct answer was:" along with an image.
//each question will be set for 30 seconds.
//if time runs out and the user didnt guess an answer, itll display "out of time" and what the correct answer was along with an image.
//next guestion will appear after 3 second.
//when all the questions end, there'll be displayed how many correct answers, wrong answer, unanswered.
//creat a button to start over the game