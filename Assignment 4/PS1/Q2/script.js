const listItems = document.querySelectorAll('li');

let cnt=1;

listItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        cnt++;
        if(cnt%2==0){
            this.innerText = 'OFF';
        }
        else{
            this.innerText = 'ON';
        }
        
    });
});
