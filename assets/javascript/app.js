
var number = 11;


var myQuestions = [
    {
        question: "Which dogs were bred to kill Bulls for sport?",

        answers: {
            a: 'German Shepard ',
            b: 'Pitbull ',
            c: 'Cane Corso ',
            d: 'Bulldog ',
            e: 'B and D '
        },
        correctAnswer: 'e'
    },
    {
        question: "Which dog were bred to hunt lions?",
        answers: {
            a: 'Rhodesian Ridgeback ',
            b: 'German Shepard ',
            c: 'Austtalian Shepard ',
            d: 'Cane Corso ',
            e: 'None of the Above '
        },
        correctAnswer: 'a'
    },
    {
        question: "Whick dog were bred to hunt Badger?",
        answers: {
            a: 'Australian Shepard ',
            b: 'Husky ',
            c: 'Dachshud ',
            d: 'Chihuahua ',
            e: 'Dalmatian '
        },
        correctAnswer: 'c'
    },
    {
        question: "Which dogs were bred for hearding livestock such as sheep?",
        answers: {
            a: 'German Shepard ',
            b: 'Australian Shepard ',
            c: 'Boarder Collies ',
            d: 'Corgi ',
            e: 'All of the Above '
        },
        correctAnswer: 'e'
    },
    {
        question: "Which dog were bred for mountain rescue?",
        answers: {
            a: 'St. Bernard ',
            b: 'Husky ',
            c: 'German Shepard ',
            d: 'Alaskan Malamute ',
            e: 'Rhodesian Ridgeback '
        },
        correctAnswer: 'a'
    },
    {
        question: "Which dogs were bred for bear hunting?",
        answers: {
            a: 'Caucasian Shepard Dog ',
            b: 'Karelian Bear Dog ',
            c: 'Tibetan Mastiff ',
            d: 'Kangal Shepard Dog ',
            e: 'All of the Above '
        },
        correctAnswer: 'e'
    }
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // each available answer...
            for (letter in questions[i].answers) {

                // answers
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // questions
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        //string
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

        //var results = resultsContainer
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);

        clearInterval(intervalId);








    }








    $("#start").on("click", run);
    $("#stop").on("click", stop);

    function run() {


        number = 11;



        intervalId = setInterval(decrement, 1000);


    }

    function decrement() {

        number--;

        $("#show-number").html("<h2>" + number + "</h2>");

        if (number <= 0) {



            showResults(questions, quizContainer, resultsContainer);

            clearInterval(intervalId);









        }

    }

    function stop() {

        generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

        run();





    }








}