let isMoving = false;
let direction = 1; // 1 for right, -1 for left
let moveInterval;

function move() {
    const button = document.getElementById('movingButton');
    const buttonWidth = button.offsetWidth;
    const windowWidth = window.innerWidth;
    let left = parseInt(window.getComputedStyle(button).left, 10) || 0;

    // Change direction if the button hits the edge of the screen
    if (left + buttonWidth >= windowWidth || left <= 0) {
        direction *= -1;
    }

    // Move the button
    button.style.left = (left + direction) + 'px';
}

document.getElementById('movingButton').addEventListener('click', function() {
    if (isMoving) {
        clearInterval(moveInterval); // Stop the movement
    } else {
        moveInterval = setInterval(move, 10); // Start moving continuously
    }
    isMoving = !isMoving; // Toggle the movement state
});
