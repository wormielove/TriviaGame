var answerKey = ["8", "56", "Philadelphia, PA", "Hawaii", "27"];
var userGuesses = []
var correctAnswer = 0
var incorrectAnswer = 0
var incomplete = 0
var intervalID

function compareAnswers() {
    for (var i = 0; i < answerKey.length; i++) {

        if (userGuesses[i] === undefined) {
            incomplete++
        }
        else if (userGuesses[i] === answerKey[i]) {
            correctAnswer++
        }
        else {
            incorrectAnswer++
        }
    }

    console.log("Number of correct: " + correctAnswer);
    $("#correct").html("Number of Correct Answers: " + correctAnswer);
    console.log("Number of incorrect: " + incorrectAnswer);
    $("#incorrect").html("Number of Incorrect Answers: " + incorrectAnswer);
    console.log("Number of incomplete: " + incomplete);
    $("#incomplete").html("Number of Incomplete Answers: " + incomplete);
    
}

function startTimer(duration, display) {

    var start = Date.now(),
        diff,
        seconds;

    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        if (seconds === 0) {
            compareAnswers()
            clearInterval(intervalID);
        }
        seconds = (diff % 30) | 0;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = ":" + seconds;

        if (diff <= 0) {

            start = Date.now() + 1000;
            $("#noTimeLeft").html("YOUR ARE OUT OF TIME!");
        }

    };

    timer();
    intervalID = setInterval(timer, 1000);

}

window.onload = function () {
    var thirtySeconds = 30,
        display = document.querySelector('#time');
    startTimer(thirtySeconds, display);
};


$('input[type="radio"]').on('click', function () {
    var isChecked = $('#pfv1').prop('checked');
    var userGuess = $(this).val();
    var questionNumber = $(this).attr("question-number");
    userGuesses[questionNumber - 1] = userGuess

})

$("#submit").on('click', function () {
    compareAnswers();
    clearInterval(intervalID);
})



//Tried to get them to show and then hide, but it wouldn't work. :(
// $(document).ready(function () {
//     $("#submit").click(function () {
//         $("#submit").show();
//     });
//     $("#submit").click(function () {
//         $("#submit").hide();
//     });

//hide submit
//display how many were right, unanswered and incomplete
//play again
