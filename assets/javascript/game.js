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

    $('#randomNumber').text(targetNumber);

    console.log('target number: ' + targetNumber);
    console.log('diamond value: ' + diamond);
    console.log('emerald value: ' + emerald);
    console.log('lapis value: ' + lapis);
    console.log('redstone value: ' + redstone);
    console.log('score: ' + score);

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

    $('.crystal').click(function () {

        if (score === targetNumber) {
            wins = wins + 1;
            $('#wins').text(wins);
            $('#result').text('You win!')
        } else if (score > targetNumber) {
            losses = losses + 1;
            $('losses').text(losses);
            $('#result').text('You lose');
        }
    });

});