//Variables needed for the game
var counter = 0;
var targetNumber = 50;


//Target number required shown on screen to user
$("#souls-required").text(targetNumber);



//On click functions for my images
$("#demon").on("click", function() {
    counter += 1;
alert("You have collected  " + counter + " souls!")

});

$("#gundyr").on("click", function() {
    counter += 1;
alert("You have collected  " + counter + " souls!")
    
});

$("#soul").on("click", function() {
    counter += 1;
alert("You have collected  " + counter + " souls!")
        
});

$("#vordt").on("click", function() {
    counter += 1;
alert("You have collected  " + counter + " souls!")
    
});