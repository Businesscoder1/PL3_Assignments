let cnt=1;
document.getElementById('click').addEventListener('click',function(){
    
    if(cnt%2==0){
        document.getElementById('input').value='OFF'
    }
    else{
        document.getElementById('input').value='ON'
    }
    cnt++;
    
})

