//Variables needed for the game
var counter = 0;
var targetNumber = 50;
var targetNumberOptions = (50,75,100,125)
var numberOptions = [5,10,15,20];
var increment = numberOptions[Math.round(Math.random())];
var wins = 0;
var losses = 0;


//Target number required shown on screen to user
$("#souls-required").text(targetNumber);
$("#souls-acquired").text(counter);

for (var i = 0; i < numberOptions.length; i++) {
    var imageBoss = $("<img>");
    imageBoss.addClass("boss-image");
    imageBoss.attr("src", "assets/images/demon.jpg");
    imageBoss.attr("data-bossvalue", numberOptions[i]);
    $("#bosses").append(imageBoss);
}

$(".boss-image").on("click", function() {
    bossValue = ($(this).attr("data-bossvalue"));
    bossValue = parseInt(bossValue);
    counter += bossValue;
    $("#souls-acquired").text(counter);

    if (counter === targetNumber) {
        alert("You may enter Anor Lando!");
        counter = 0;
        wins++;
        $("#souls-acquired").text(counter);
        $("#keys-acquired").text(wins);
        
        }
        
    else if (counter >= targetNumber) {
        alert("You have been consumed by the Abyss!")
        counter = 0;
        losses++;
        $("#souls-acquired").text(counter);
        $("#humanity-lost").text(losses);
        }
});


//On click functions for my images
// $("#demon").on("click", function() {
//     counter += increment;
// alert("You have collected  " + counter + " souls!")

// });

// $("#gundyr").on("click", function() {
//     counter += increment;
// alert("You have collected  " + counter + " souls!")
    
// });

// $("#soul").on("click", function() {
//     counter += increment;
// alert("You have collected  " + counter + " souls!")
        
// });

// $("#vordt").on("click", function() {
//     counter += increment;
// alert("You have collected  " + counter + " souls!")
    
// });

//Win & Loss conditions
// if (counter === targetNumber) {
// alert("You may enter Anor Lando!");
// }

// else if (counter >= targetNumber) {
// alert("You may not enter!")
// }
