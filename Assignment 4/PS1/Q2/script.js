const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.textContent = "ON";
    });

    item.addEventListener('mouseout', () => {
        item.textContent = "OFF";
    });
});
