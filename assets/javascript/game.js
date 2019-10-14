$(document).ready(function () {

    //define variables:

    let targetNumber = Math.floor(Math.random() * 120) + 19;
    let diamond = Math.floor(Math.random() * 12) + 1;
    let emerald = Math.floor(Math.random() * 12) + 1;
    let lapis = Math.floor(Math.random() * 12) + 1;
    let redstone = Math.floor(Math.random() * 12) + 1;
    let wins = 0;
    let losses = 0;
    let score = 0;
    let values = [targetNumber, diamond, emerald, lapis, redstone]

    //console log the values of each crystal and the random target number:

    for (let i = 0; i < values.length; i++){
        console.log(values[i]);
    }

    //assign the random target number to the html #randomNumber div:

    $('#randomNumber').text(targetNumber);

    //new game function, called when the player wins or loses:

    function newGame() {
        targetNumber = Math.floor(Math.random() * 120) + 19;
        diamond = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
        lapis = Math.floor(Math.random() * 12) + 1;
        redstone = Math.floor(Math.random() * 12) + 1;
        score = 0;

        $("#currentScore").text(score)
        $('#randomNumber').text(targetNumber);
        
        for (let i = 0; i < values.length; i++){
            console.log(values[i]);
        }
        
    };

    //assigning the values of the crystals to their respective html elements:

    $("#diamond").click(function () {
        score = score + diamond;
        $('#currentScore').text(score);
        console.log('score: ' + score);
    });
    $("#emerald").click(function () {
        score = score + emerald;
        $('#currentScore').text(score);
        console.log('score: ' + score);
    });
    $("#lapis").click(function () {
        score = score + lapis;
        $('#currentScore').text(score);
        console.log('score: ' + score);
    });
    $("#redstone").click(function () {
        score = score + redstone;
        $('#currentScore').text(score);
        console.log('score: ' + score);
    });

    //function checking whether the player has won or lost, called each time player clicks a crystal:

    $('.crystal').click(function () {

        if (score === targetNumber) {
            wins++;
            $('#wins').text(wins);
            $('#result').text('You win!')
            newGame();
        } else if (score > targetNumber) {
            losses++;
            $('#losses').text(losses);
            $('#result').text('You lose');
            newGame();
        }
    });
});