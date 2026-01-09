// Solution 1:
// -----------------

function handleSubmit(e) {
    e.preventDefault();

    const inputString = e.target[0].value;
    const resultPara = document.getElementById('result');
    let reverseString = "";

    for (let i = inputString.length - 1; i >= 0; i--) {
        reverseString += inputString[i];
    }

    resultPara.textContent = reverseString;
    e.target[0].value = "";
}

// -----------------