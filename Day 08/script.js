// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     let reverseString = "";

//     for (let i = inputString.length - 1; i >= 0; i--) {
//         reverseString += inputString[i];
//     }

//     resultPara.textContent = reverseString;
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

function handleSubmit(e) {
    e.preventDefault();

    const inputString = e.target[0].value;
    const resultPara = document.getElementById('result');
    let isPalindrome = true;
    const stringLength = inputString.length;


    // 1st approach
    // for (let i = 0, j = stringLength - 1; i < stringLength, j >= 0; i++, j--) {
    //     if (inputString[i] !== inputString[j]) {
    //         isPalindrome = false;
    //         break;
    //     }
    // }

    // 2nd approach (More Optimized)
    let leftSide = 0;
    let rightSide = stringLength - 1;

    while (leftSide < rightSide) {
        if (inputString[leftSide] !== inputString[rightSide]) {
            isPalindrome = false;
            break;
        }
        leftSide++;
        rightSide--;
    }

    resultPara.textContent = `${isPalindrome ? 'Palindrome' : 'Not Palindrome'}`;
    e.target[0].value = "";
}

// -----------------