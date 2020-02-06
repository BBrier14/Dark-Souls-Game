//Variables needed for the game
var counter = 0;
var targetNumber = soulsRequired;
var targetNumberOptions = [24,35,65,47]
var soulsRequired = targetNumberOptions[Math.floor(Math.random()*targetNumberOptions.length)];
var numberOptions = [2,5,7,9];
var hiddenValues = numberOptions[Math.floor(Math.random()*numberOptions.length)];
var increment = numberOptions[Math.round(Math.random())];
var wins = 0;
var losses = 0;
var images = ["assets/images/demon.jpg", "assets/images/gundyr.jpg", "assets/images/soul.jpg", "assets/images/vordt.jpg"];


//Target number required shown on screen to user
$("#souls-required").text(soulsRequired);
$("#souls-acquired").text(counter);

function generateValues() {
    $("#bosses").html("");
for (var i = 0; i < numberOptions.length; i++) {
    var imageBoss = $("<img>");
    imageBoss.addClass("boss-image");
    imageBoss.attr("src", images[i]);
    imageBoss.attr("data-bossvalue", numberOptions[Math.floor(Math.random() * numberOptions.length)]);
    $("#bosses").append(imageBoss);
}}

generateValues();


// $(".boss-image").on("click", function() {
    $(document).on("click", ".boss-image", function() {
        console.log("clicked");
    bossValue = $(this).attr("data-bossvalue");
    bossValue = parseInt(bossValue);
    counter += bossValue;
    $("#souls-acquired").text(counter);
    

    if (counter === soulsRequired) {
        // alert("You may enter Anor Lando!");
        counter = 0;
        wins++;
        $("#souls-acquired").text(counter);
        $("#keys-acquired").text(wins);
        soulsRequired = targetNumberOptions[Math.floor(Math.random()*targetNumberOptions.length)];
        $("#souls-required").text(soulsRequired);

       generateValues();
        }
        
    else if (counter > soulsRequired) {
        // alert("You have been consumed by the Abyss!")
        counter = 0;
        losses++;
        $("#souls-acquired").text(counter);
        $("#humanity-lost").text(losses);
        soulsRequired = targetNumberOptions[Math.floor(Math.random()*targetNumberOptions.length)];
        $("#souls-required").text(soulsRequired);

       generateValues();
        }

    if (wins > 9) {
        alert("You may enter Anor Londo")
        wins = 0;
        losses = 0;
        $("#keys-acquired").text(wins);
        $("#humanity-lost").text(losses);
        generateValues();
    }
    if (losses > 9) {
        alert("You have been consumed by the abyss")
        wins = 0;
        losses = 0;
        $("#keys-acquired").text(wins);
        $("#humanity-lost").text(losses);
        generateValues();
    }
});



