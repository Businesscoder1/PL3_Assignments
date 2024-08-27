// Make balloons disappear on mouseover
document.querySelectorAll('.balloon').forEach(function(b) {
    b.addEventListener('mouseover', function() {
        this.style.opacity = 0;
    });
});

// Restore balloons' opacity on refresh button click
document.getElementById('refresh').addEventListener('click', function() {
    document.querySelectorAll('.balloon').forEach(function(b) {
        b.style.opacity = 1; // Reset the opacity to 1

        // Re-enable the mouseover event to allow balloons to disappear again
        b.addEventListener('mouseover', function() {
            this.style.opacity = 0;
        });
    });
});
