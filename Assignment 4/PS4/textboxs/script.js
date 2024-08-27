

window.onload=function (){
    document.getElementById('first').value=' ';
    document.getElementById('last').value=' ';
    document.getElementById('fullName').value=' ';
}


document.getElementById('combine').addEventListener('click', function() {
    let first = document.getElementById('first').value;
    let last = document.getElementById('last').value;

    // Correctly setting the value of the 'fullName' input
    document.getElementById('fullName').value = first + ' ' + last;

    
});
