var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var newRandom = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#number-to-guess").text(targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;

//individual random values for each crystal
var firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

//crystal 1 logic
$("#first-image").on("click", function () {
    counter += firstVal;
    // Clicking the button updates total score
    $("#score").text(counter);
    if (counter === targetNumber) {
        wins += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-wins").text(wins);
        $("#score").text(counter);

        alert("You Win!");
    }
    else if (counter >= targetNumber) {
        losses += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-losses").text(losses);
        $("#score").text(counter);

        alert("You lose!!");
    }
});

//crystal 2 logic
$("#second-image").on("click", function () {
    counter += secondVal;
    // Clicking the button updates total score
    $("#score").text(counter);
    if (counter === targetNumber) {
        wins += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-wins").text(wins);
        $("#score").text(counter);
    }
    else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
        losses += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-losses").text(losses);
        $("#score").text(counter);
    }
});


//crystal 3 logic
$("#third-image").on("click", function () {
    counter += thirdVal;
    // Clicking the button updates total score
    $("#score").text(counter);
    if (counter === targetNumber) {
        wins += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-wins").text(wins);
        $("#score").text(counter);
    }
    else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
        counter = 0;
        losses += 1;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-losses").text(losses);
        $("#score").text(counter);
    }
});

//crystal 3 logic
$("#fourth-image").on("click", function () {
    counter += fourthVal;
     // Clicking the button updates total score
     $("#score").text(counter);
    if (counter === targetNumber) {
        wins += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-wins").text(wins);
        $("#score").text(counter);
    }
    else if (counter >= targetNumber) {
        // Update score, reset values
        losses += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-losses").text(losses);
        $("#score").text(counter);
    }
});



