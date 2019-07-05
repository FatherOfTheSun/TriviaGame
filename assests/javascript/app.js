



function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    //array of question with answers
    var myQuestions = [
        {
            question: "Which dogs were bred to kill Bulls for sport?",

            answers: {
                a: 'German Shepard',
                b: 'Pitbull',
                c: 'Cane Corso',
                d: 'Bulldog',
                e: 'B and D'
            },
            correctAnswer: 'e'
        },
        {
            question: "Which dog were bred to hunt lions?",
            answers: {
                a: 'Rhodesian Ridgeback',
                b: 'German Shepard',
                c: 'Austtalian Shepard',
                d: 'Cane Corso',
                e: 'None of the Above'
            },
            correctAnswer: 'a'
        },
        {
            question: "Whick dog were bred to hunt Badger?",
            answers: {
                a: 'Australian Shepard',
                b: 'Husky',
                c: 'Dachshud',
                d: 'Chihuahua',
                e: 'Dalmatian'
            },
            correctAnswer: 'c'
        },
        {
            question: "Which dogs were bred for hearding livestock such as sheep?",
            answers: {
                a: 'German Shepard',
                b: 'Australian Shepard',
                c: 'Boarder Collies',
                d: 'Corgi',
                e: 'All of the Above'
            },
            correctAnswer: 'e'
        },
        {
            question: "Which dog were bred for mountain rescue?",
            answers: {
                a: 'St. Bernard',
                b: 'Husky',
                c: 'German Shepard',
                d: 'Alaskan Malamute',
                e: 'Rhodesian Ridgeback'
            },
            correctAnswer: 'a'
        },
        {
            question: "Which dogs were bred for bear hunting?",
            answers: {
                a: 'Caucasian Shepard Dog',
                b: 'Karelian Bear Dog',
                c: 'Tibetan Mastiff',
                d: 'Kangal Shepard Dog',
                e: 'All of the Above'
            },
            correctAnswer: 'e'
        }
    ];

    function showQuestion(questions, quizContainer) {

        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {

                // question and output
                answers.push(
                    '<label>'
                    + '<input type= "radio" name="question' + i + '"value="' + letter + '">'
                    + letter + ':'
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }



            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '<div>'
            );
        }
        //finally combine our output
        quizContainer.innerHTML = output.join('');
    }

    showQuestion(questions, quizContainer);

    function showResults(questions, quizContainer, resultsContainer) {

        // get answer from quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        //keeps track of answer

        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {

            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {

                numCorrect++;

                answerContainers[i].style.color = 'green';

            }
            else {
                answerContainers[i].style.color = 'blue';

            }
        }
        resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;

    }
    //questions

    //submit button on click 
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
}