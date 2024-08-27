
function toggleColor(isEntering) {
    const circle = document.getElementById('circle');
    if (isEntering) {
        circle.style.backgroundColor = 'orange';
    } else {
        circle.style.backgroundColor = 'black';
    }
}

document.getElementById('circle').addEventListener('mouseover', function() {
    toggleColor(true);  
});

document.getElementById('circle').addEventListener('mouseout', function() {
    toggleColor(false); 
});
