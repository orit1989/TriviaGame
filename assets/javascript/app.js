$(document).ready(function () {
    //create a variable for my guestions
    var questions = [{
            q: "Why does Monica receive her dad's Porsche?",
            opt1: "Wedding Gift",
            opt2: "Birthday Gift",
            opt3: "He ruined all her childhood memories",
            opt4: "He likes Monica better than Ross",
            a: "He ruined all her childhood memories",
            img: "assets/images/monica.gif"
        },

        {
            q: "What did Ross give Phoebe, because she never had one when she was little?",
            opt1: "A dog",
            opt2: "A wagon",
            opt3: "A bicycle",
            opt4: "A doll",
            a: "A bicycle",
            img: "assets/images/phoebe.gif"
        },

        {
            q: "How does Ross finally make it to his class on time?",
            opt1: "Roller Skating",
            opt2: "Drives",
            opt3: "He never does",
            opt4: "He cancels class",
            a: "Roller Skating",
            img: "assets/images/ross.gif"
        },

        {
            q: "What is Monica's plan after her and Richard break up?",
            opt1: "To make jam",
            opt2: "To move",
            opt3: "To get a new job at the Iron Dragon",
            opt4: "To move in with Chandler",
            a: "To make jam",
            img: "assets/images/jam.gif"
        },

        {
            q: "What does Joey find in Las Vegas that astonished him?",
            opt1: "His sister lives there",
            opt2: "His identical hand twin",
            opt3: "A 2 headed turtle",
            opt4: "Food",
            a: "His identical hand twin",
            img: "assets/images/joey.gif"
        }

    ];

    var correctAnswer = 0;
    var wrongAnsweer = 0;
    var unAnswered = 0;
    var counter = 15;
    var questionIndex = 0;
    var intervalId;

    $("#answerOptions").hide();
    $("#restartGame").hide();
    $("#image").hide();


    $("#startGame").on('click', function () {
        $("#friends").hide();
        renderQuestion();
    });

    function renderQuestion() {
        $("#answer").hide();
        $("#time").show();
        decrement();

        // If there are still more questions, render the next one.
        if (questionIndex < (questions.length)) {
            $("#question").text(questions[questionIndex].q);
            $("#opt1").text(questions[questionIndex].opt1);
            $("#opt2").text(questions[questionIndex].opt2);
            $("#opt3").text(questions[questionIndex].opt3);
            $("#opt4").text(questions[questionIndex].opt4);
            $("#image").attr("src",questions[questionIndex].img);
            $("#image").hide();
            $("#question").show();
            $("#answerOptions").show();
            intervalId = setInterval(decrement, 1000);

        }
        // If there aren't, render the end game screen.
        else {
            $("#time").hide();
            $("#image").hide();
            $("#final").text("Here's How You Did!");
            $("#correctAnswers").text("Correct Answers: " + correctAnswer);
            $("#wrongAnswers").text("Wrong Answers: " + wrongAnsweer);
            $("#unAnswered").text("Unanswered: " + unAnswered);
            $("#endGame").show();
            $("#restartGame").show();

        }

    };

    $("button").on('click', function () {

        var userSelect = $(this).text();
        stop();
        $("#question").hide();
        $("#answerOptions").hide();

        if (userSelect === questions[questionIndex].a) {
            $("#answer").text("Correct!");
            $("#answer").show();
            $("#image").show();

            correctAnswer++;
            
        }
        else {
            $("#answer").text("Nope! The Correct Answer Was: " + questions[questionIndex].a + ".");
            $("#answer").show();
            $("#image").show();

            wrongAnsweer++;
        }
        nextQuestion();
    });

    function decrement() {
        $("#time").text("Time Remaining: " + counter);
        if (counter === 0) {
            stop();
            $("#question").hide();
            $("#answerOptions").hide();
            $("#answer").text("Out Of Time! The Correct Answer was: " + questions[questionIndex].a + ".");
            $("#answer").show();
            $("#image").show();
            unAnswered++;
            nextQuestion();
        }
        else {
            counter--;
        }
    }

    $("#restartGame").on('click', function () {
        counter = 15;
        questionIndex = 0;
        correctAnswer = 0;
        wrongAnsweer = 0;
        unAnswered = 0;
        $("#image").hide();
        $("#endGame").hide();
        $("#restartGame").hide();
        renderQuestion();
    });

    function nextQuestion () {
        counter = 15;
        questionIndex++;
        setTimeout(renderQuestion, 3000);
    }

    function stop() {
        clearInterval(intervalId);
    }

    //set a timeout of 30 seconds for each question
    //if user answers right, the guestion and answers will disappear and a message of "Correct!" will appear along with an image.
    //if user answers wrong, the question and answers will disappear and two messages will come up, "Nope!" and "The correct answer was:" along with an image.
    //each question will be set for 30 seconds.
    //if time runs out and the user didnt guess an answer, itll display "out of time" and what the correct answer was along with an image.
    //next guestion will appear after 3 second.
    //when all the questions end, there'll be displayed how many correct answers, wrong answer, unanswered.
    //creat a button to start over the game


});