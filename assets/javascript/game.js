var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var newRandom = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#number-to-guess").text(targetNumber);
var winning = "Congrats, You Are the Superior Being!";
var losing = "Oh-oh, Bettery Try Again";


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
    $("#number-to-guess").text(targetNumber);
    counter += firstVal;
    // Clicking the button updates total score
    $("#current-score").text(counter);
    // What Happens if user guesses right
    if (counter === targetNumber) {
        wins += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-wins").text(wins);
        $("#current-score").text(counter);
        $("#alert").text(winning);
    }
    // What Happens if user guesses wrong
    else if (counter >= targetNumber) {
        losses += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-losses").text(losses);
        $("#current-score").text(counter);
        $("#alert").text(losing);


    }
});

//crystal 2 logic
$("#second-image").on("click", function () {
    counter += secondVal;
    $("#current-score").text(counter);
    // What Happens if user guesses right
    if (counter === targetNumber) {
        wins += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-wins").text(wins);
        $("#current-score").text(counter);
        $("#alert").text(winning);
    }
    // What Happens if user guesses wrong
    else if (counter >= targetNumber) {
        losses += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-losses").text(losses);
        $("#current-score").text(counter);
        $("#alert").text(losing);
    }
});


//crystal 3 logic
$("#third-image").on("click", function () {
    counter += thirdVal;
    $("#current-score").text(counter);
    // What Happens if user guesses right
    if (counter === targetNumber) {
        wins += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-wins").text(wins);
        $("#current-score").text(counter);
        $("#alert").text(winning);
    }
    // What Happens if user guesses wrong
    else if (counter >= targetNumber) {
        counter = 0;
        losses += 1;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-losses").text(losses);
        $("#current-score").text(counter);
        $("#alert").text(losing);
    }
});

//crystal 3 logic
$("#fourth-image").on("click", function () {
    counter += fourthVal;
    $("#current-score").text(counter);
    // What Happens if user guesses right
    if (counter === targetNumber) {
        wins += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-wins").text(wins);
        $("#current-score").text(counter);
        $("#alert").text(winning);
    }
    // What Happens if user guesses wrong
    else if (counter >= targetNumber) {
        // Update score, reset values
        losses += 1;
        counter = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        firstVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        secondVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        thirdVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        fourthVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#number-to-guess").text(targetNumber);
        $("#number-of-losses").text(losses);
        $("#current-score").text(counter);
        $("#alert").text(losing);
    }
});



