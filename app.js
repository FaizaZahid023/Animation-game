var character = document.getElementById("character");
var character2 = document.getElementById("character2");
var right1 = 0;
var right2 = window.innerWidth - 100; // Adjust based on character2's width
var midpoint = (window.innerWidth / 2) + 50; // Adjust based on characters' widths

function animation(event) {
    console.log(event.keyCode);

    // Move character1 left
    if (event.keyCode === 37 && right1 > 0) {
        character.src = "img/a3.gif";
        right1 -= 10; // Decrease position to move left
        character.style.left = right1 + "px";
    }

    // Move character1 right
    if (event.keyCode === 39 && right1 < midpoint - 100) { // Ensure character1 doesn't cross the midpoint
        character.src = "img/a2.gif";
        right1 += 10; // Increase position to move right
        character.style.left = right1 + "px";
    }

    // Special action on spacebar press for character1
    if (event.keyCode === 32) {
        character.src = "img/light.gif";
        character.style.height = "300px";
        character.style.width = "200px";
        setTimeout(function () {
            character.src = "img/a2.gif";
            character.style.height = "200px";
            character.style.width = "150px";
        }, 3000);
    }

    // Move character2 left towards the center on 'A' key press
    if (event.keyCode === 65 && right2 > midpoint) { // Ensure character2 doesn't cross the midpoint
        character2.src = "img/right.gif";
        right2 -= 10; // Decrease position to move left
        character2.style.left = right2 + "px";
    }

    // Move character2 right towards the center on 'D' key press
    if (event.keyCode === 68 && right2 < window.innerWidth - 100) {
        character2.src = "img/left.gif";
        right2 += 10; // Increase position to move right
        character2.style.left = right2 + "px";
    }
    if (event.keyCode === 13) {
        character2.src = "img/special.gif";
        character2.style.height = "300px";
        character2.style.width = "200px";
        setTimeout(function () {
            character2.src = "img/right.gif";
            character2.style.height = "200px";
            character2.style.width = "150px";
        },1000);
    }
}
window.onkeydown = animation;