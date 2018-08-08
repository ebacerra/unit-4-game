


$(document).ready(function () {

    var totalSumCounter = 0;
    var winCounter = 0;
    var lossesCounter = 0;


    // Gems
    var gem1 = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
    var gem2 = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
    var gem3 = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
    var gem4 = Math.floor(Math.random() * (1 - 12 + 1)) + 12;

    // need to find out how to shorten the random numbers
    // var randomNum1 = Math.random(1 * (19 - 120));
    var revisedRandom = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // revisedRandom = randomNum1
    $("#random").html(revisedRandom);


    $('#loss').html(lossesCounter);
    $('#result').html(winCounter);

    // sum of the value of Gems per click line 30
    // var totalValue = $(this)++;

    for (i = 0; i < 10; i++) {
        if ($('#title1') === $('#random')) {
            $('#result').html('You Win') + $('#matchingNum')++;
        } else {
            + $('#loss').html();
        }
    }
    $(".button").on("click", function () {
        var value = $(this).val()
        console.log(value);
        totalSumCounter += parseInt(value);
        console.log(totalSumCounter)
        $('#title1').html("Your total score:  " + totalSumCounter);
        $('titles2').html("Wins:  " + winCounter);
        $('titles3').html("Losses:  " + lossesCounter);
        console.log(winCounter);
        console.log(lossesCounter);
        // need to add win and lose nums
        // if/else statement here
        // need to pass the matching num into the win to the winCounter


    })

    // list all of the pressed and trying to sum them up
    // $(".button").keypress(function () {
    //     var sumPerClick = value;

    // });




});