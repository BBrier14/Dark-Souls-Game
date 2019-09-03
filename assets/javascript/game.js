//Variables needed for the game
var counter = 0;
var targetNumber = 50;
var numberOptions = [5,10,15,20];
var increment = numberOptions[Math.round(Math.random())];


//Target number required shown on screen to user
$("#souls-required").text(targetNumber);

for (var i = 0; i < numberOptions.length; i++) {
    var imageBoss = $("<img>");
    imageBoss.addClass("boss-image");
    imageBoss.attr("src", "assets/images/demon.jpg");
    imageBoss.attr("data-bossvalue", numberOptions[i]);
    $("#bosses").append(imageBoss);
}



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
if (counter === targetNumber) {
alert("You may enter Anor Lando!");
}

else if (counter >= targetNumber) {
alert("You may not enter!")
}
