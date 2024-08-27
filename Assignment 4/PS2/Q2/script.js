// Function to change the text inside the circle
function changeText(text) {
    document.getElementById('circle').innerText = text;
}

// Add an event listener to the circle to call changeText with "Hello World!" on mouseover
document.getElementById('circle').addEventListener('mouseover', function() {
    changeText("Hello World");
});

// Optionally, you can add an event listener for when the mouse leaves the circle
document.getElementById('circle').addEventListener('mouseout', function() {
    changeText("Hover me!");
});
