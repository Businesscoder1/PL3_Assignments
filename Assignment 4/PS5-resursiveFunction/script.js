        let goRight = 1;
        let keepGoing = true;
        const myButton = document.getElementById('clicked');

        function go() {
            if (keepGoing) {
                const howFar = parseInt(getComputedStyle(myButton).left, 10) || 0;
                const newSpot = howFar + goRight;
                myButton.style.left = newSpot + 'px';
                
                const buttonSize = myButton.offsetWidth;
                const windowSize = window.innerWidth;

                if (newSpot <= 0 || newSpot + buttonSize >= windowSize) {
                    goRight *= -1;
                }

                setTimeout(go, 10);
            }
        }

        myButton.addEventListener('click', function() {
            keepGoing = !keepGoing;
            if (keepGoing) {
                go();
            }
        });

        go();
