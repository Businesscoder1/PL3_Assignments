let cnt = 0;

document.getElementById('checkbutton').addEventListener('click', function() {
    cnt++;
    
    // Toggle the checkbox based on whether cnt is odd or even
    if (cnt % 2 !== 0) {
        document.getElementById('mycheckbox').checked = true;
    } else {
        document.getElementById('mycheckbox').checked = false;
    }
});


