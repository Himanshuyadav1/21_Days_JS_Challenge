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

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     let isPalindrome = true;
//     const stringLength = inputString.length;


//     // 1st approach
//     // for (let i = 0, j = stringLength - 1; i < stringLength, j >= 0; i++, j--) {
//     //     if (inputString[i] !== inputString[j]) {
//     //         isPalindrome = false;
//     //         break;
//     //     }
//     // }

//     // 2nd approach (More Optimized)
//     let leftSide = 0;
//     let rightSide = stringLength - 1;

//     while (leftSide < rightSide) {
//         if (inputString[leftSide] !== inputString[rightSide]) {
//             isPalindrome = false;
//             break;
//         }
//         leftSide++;
//         rightSide--;
//     }

//     resultPara.textContent = `${isPalindrome ? 'Palindrome' : 'Not Palindrome'}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     let characterCountObj = {};
//     const stringLength = inputString.length;

//     for (let i = 0; i < stringLength; i++) {
//         characterCountObj[inputString[i]] = (characterCountObj[inputString[i]] || 0) + 1;
//     }

//     resultPara.textContent = '{';

//     Object.entries(characterCountObj).forEach(([key, value]) => {
//         resultPara.textContent += ` ${key}:${value}, `;
//     })

//     resultPara.textContent = resultPara.textContent.slice(0, -2) + " }";
//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     let characterCountObj = {};
//     const stringLength = inputString.length;
//     const mostFrequentChar = [];
//     let frequencyNum = 0;

//     for (let i = 0; i < stringLength; i++) {
//         characterCountObj[inputString[i]] = (characterCountObj[inputString[i]] || 0) + 1;
//     }

//     for (let key in characterCountObj) {        
//         if (frequencyNum === characterCountObj[key]) {
//             mostFrequentChar[mostFrequentChar.length] = key;
//             mostFrequentChar[mostFrequentChar.length] = characterCountObj[key];
//         }

//         if (frequencyNum < characterCountObj[key]) {
//             frequencyNum = characterCountObj[key];
//             mostFrequentChar.length = 0;
//             mostFrequentChar[0] = key;
//             mostFrequentChar[1] = characterCountObj[key]
//         }
//     }

//     resultPara.textContent = 'Most frequent:';

//     for (let i = 0; i < mostFrequentChar.length - 1; i = i + 2) {
//         resultPara.textContent += ` ${mostFrequentChar[i]} (${mostFrequentChar[i+1]} times),`;
//     }

//     resultPara.textContent = resultPara.textContent.slice(0, -1);
//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const firstInputString = e.target[0].value;
//     const secondInputString = e.target[1].value;
//     const resultPara = document.getElementById('result');
//     let areStringsAnagrams = firstInputString.length === secondInputString.length;
//     const firstStringCharacterCountObj = {};
//     const secondStringCharacterCountObj = {};
//     const stringLength = firstInputString.length;
//     let i = 0;

//     while (areStringsAnagrams && i < stringLength) {
//         firstStringCharacterCountObj[firstInputString[i]] = (firstStringCharacterCountObj[firstInputString[i]] || 0) + 1;
//         secondStringCharacterCountObj[secondInputString[i]] = (secondStringCharacterCountObj[secondInputString[i]] || 0) + 1;
//         i++;
//     }

//     for (let key in firstStringCharacterCountObj) {
//         if (firstStringCharacterCountObj[key] !== secondStringCharacterCountObj[key]) {
//             areStringsAnagrams = false;
//             break;
//         }
//     }

//     resultPara.textContent = `${areStringsAnagrams ? 'Anagram' : 'Not Anagram'}`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 6:
// -----------------

function handleSubmit(e) {
    e.preventDefault();

    const inputString = e.target[0].value;
    const resultPara = document.getElementById('result');
    const stringLength = inputString.length;
    const characterCountObj = {};
    let firstNonRepeatingChar = "";

    for (let i = 0; i < stringLength; i++) {
        characterCountObj[inputString[i]] = (characterCountObj[inputString[i]] || 0) + 1;
    }

    for (let i = 0; i < stringLength; i++) {
        if (characterCountObj[inputString[i]] === 1) {
            firstNonRepeatingChar = inputString[i];
            break;
        }
    }

    resultPara.textContent = `${firstNonRepeatingChar}`;
    e.target[0].value = "";
}

// -----------------