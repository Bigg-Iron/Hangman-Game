// array of birds and their letters... Pigeon, Owl, Woodpecker, Finch, Parrot, Sparrow, Gulls, Goose, Hummingbird.
var birds = ["Pigeon", "Owl", "Woodpecker", "Finch", "Parrot", "Sparrow", "Seagull", "Goose", "Hummingbird"]

// Generates a random bird from the bird array and logs it to the console
var birds = birds[Math.floor(Math.random() * birds.length)];
console.log(birds);



// Clicking the hint button reveals the word
window.onload = function () {
    document.getElementById("show").onclick = function () {
        if (birds == "Owl") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/owl.jpg'/>";
        }
        if (birds == "Pigeon") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/pigeon.jpg'/>";
        }
        if (birds == "Woodpecker") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/woodpecker.jpg'/>";
        }
        if (birds == "Finch") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/finch.jpg'/>";
        }
        if (birds == "Parrot") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/parrot.jpg'/>";
        }
        if (birds == "Sparrow") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/sparrow.jpg'/>";
        }
        if (birds == "Seagull") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/seagull.jpg'/>";
        }
        if (birds == "Goose") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/goose.jpg'/>";
        }
        if (birds == "Hummingbird") {
            document.getElementById("birdImage").innerHTML="<img src='assets/images/hummingbird.jpg'/>";
        }

        currentWord.innerHTML = birds;
        
        
    }
}




var guesses = [];

// Prints user key presses
document.onkeypress = function (evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    document.getElementById("pressed").innerHTML = (charStr);

    console.log(charStr);

    guesses.push(charStr);
    document.getElementById("pressed").innerHTML = guesses;

    
    if (charStr == currentWord) {
        console.log(currentWord.append);
        document.getElementById("currentWord").innerHTML = charStr;
        
    }

};