


$(document).ready(function () {

    var totalSumCounter = 0;
    var winCounter = 0;
    var lossesCounter = 0;


    // Gems
    // var gem1 = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
    // var gem2 = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
    // var gem3 = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
    // var gem4 = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
    // var totalGem = gem1 + gem2 + gem3 + gem4;
    // console.log(totalGem);
    for (i = 0; i < 11; i++) {

    }
    // need to find out how to shorten the random numbers
    // var randomNum1 = Math.random(1 * (19 - 120));
    var revisedRandom = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // revisedRandom = randomNum1
    $("#random").html(revisedRandom);


    $('#lose').html(lossesCounter);
    $('#wintotal').html(winCounter);

    // sum of the value of Gems per click line 30
    // var totalValue = $(this)++;


    $(".button").on("click", function () {
        var value = $(this).val();
        console.log(value);
        value = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
        totalSumCounter += parseInt(value);
        console.log(totalSumCounter)
        $('#matchingTotal').html("Your total score:  " + totalSumCounter);
        $('#wintotal').html("Wins:  " + winCounter);
        $('#lose').html("Losses:  " + lossesCounter);
        console.log(winCounter);
        console.log(lossesCounter);



        // not sure if my winCounter is working.. :(
        if ($('#matchingTotal') === $('#random')) {
            winCounter++;
        } else if ($('#matchingTotal') !== $('#random')) {
            lossesCounter++;
            // ---------not sure why this isnt working. Tried to set an alert to restart the game. 
        } else if ($('#lose') === 10) {
            alert("You lost! To play again please hit refresh");

        }
        // need to add win and lose nums
        // if/else statement here
        // need to pass the matching num into the win to the winCounter





    })

    // list all of the pressed and trying to sum them up
    // $(".button").keypress(function () {
    //     var sumPerClick = value;

    // });




});