document.querySelectorAll('.balloon').forEach(function(b) {
    let state = 0; 

    b.addEventListener('mouseover', function() {
        if (state === 0) {
            this.style.backgroundColor = 'blue'; 
            state = 1;
        } else if (state === 1) {
            this.style.opacity = 0;
            state = 2;
        } else {
            this.style.opacity = 1; 
            this.style.backgroundColor = 'red'; 
            state = 0;
        }
    });
});

document.getElementById('refresh').addEventListener('click', function() {
    document.querySelectorAll('.balloon').forEach(function(b) {
        b.style.opacity = 1; 
        b.style.backgroundColor = 'red';
        
        let state = 0;

        b.addEventListener('mouseover', function() {
            if (state === 0) {
                this.style.backgroundColor = 'blue';
                state = 1;
            } else if (state === 1) {
                this.style.opacity = 0;
                state = 2;
            } else {
                this.style.opacity = 1;
                this.style.backgroundColor = 'red';
                state = 0;
            }
        });
    });
});
