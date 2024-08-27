
let cnt=0;
function handleText(){
  
  if(cnt%2==0){
    document.getElementById('inputField').value=' ';
  }
  else{
    document.getElementById('inputField').value='Hello World';
  }
  cnt++;
}

document.getElementById('fill').addEventListener('click', handleText)