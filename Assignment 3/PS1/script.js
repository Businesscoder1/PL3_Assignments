function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
        return num % 2 === 0 ? sum + parseInt(num, 10) : sum;
    }, 0);
}

function calculateSum() {
    const input = document.getElementById("numbers").value;
    const numberArray = input.split(",").map(Number);
    const sum = sumEvenNumbers(numberArray);
    document.getElementById("result").textContent = "Sum of even numbers: " + sum;
}
