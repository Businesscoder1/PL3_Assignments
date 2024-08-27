let cnt=0;

document.getElementById('increament').addEventListener('click',function(){
    cnt++;
    document.getElementById('count').textContent=cnt;

})

document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('count').textContent='0 ';
})