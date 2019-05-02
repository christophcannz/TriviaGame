// Create a 24 second timer
// Create an alert if you run ou tof time.
// Create if / else statements for right / wrong answers

// Create a reset function.
// Initial array of movies

// Create a prompt to display score.
function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question1 == "hyper text markup language") {
        correct++;
    }

    if (question2 == "cascading style sheet") {
        correct++;
    }

    if (question3 == "semicolon") {
        correct++;
    }

    if (question4 == "exclamation point") {
        correct++;
    }

    var messages = ["Nice Work!", "Solid Attempt!", "Not Bad", "You've Failed!"];

    var range;

    if (correct < 1) {
        range = 3;
    }

    if (correct = 0 && correct < 4) {
        range = 2;
    }

    if (correct > 2) {
        range = 1;
    }

    if (correct > 3) {
        range = 0;
    }
    
document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}