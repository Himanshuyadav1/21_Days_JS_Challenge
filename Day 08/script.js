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

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     const stringLength = inputString.length;
//     const characterCountObj = {};
//     let firstNonRepeatingChar = "";

//     for (let i = 0; i < stringLength; i++) {
//         characterCountObj[inputString[i]] = (characterCountObj[inputString[i]] || 0) + 1;
//     }

//     for (let i = 0; i < stringLength; i++) {
//         if (characterCountObj[inputString[i]] === 1) {
//             firstNonRepeatingChar = inputString[i];
//             break;
//         }
//     }

//     resultPara.textContent = `${firstNonRepeatingChar}`;
//     e.target[0].value = "";
// }

// -----------------


// Practice Challenge

// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     const stringLength = inputString.length;
//     const characterCountObj = {};
//     let newString = "";

//     for (let i = 0; i < stringLength; i++) {
//         characterCountObj[inputString[i]] = (characterCountObj[inputString[i]] || 0) + 1;

//         if (characterCountObj[inputString[i]] === 1) {
//             newString += inputString[i];
//         }
//     }

//     resultPara.textContent = `${newString}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     const stringLength = inputString.length;
//     let isOnlyContainAlphabet = true;

//     for (let i = 0; i < stringLength; i++) {
//         let charCode = inputString[i].charCodeAt();
        
//         if (!((charCode > 64 && charCode < 90) || (charCode > 96 && charCode < 123))) {
//             isOnlyContainAlphabet = false;
//             break;
//         }
//     }

//     resultPara.textContent = `${isOnlyContainAlphabet ? 'True' : 'False'}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     let stringLength = inputString.length;
//     let newString = "";
//     let wordEndingIndex = stringLength;  

//     for (let i = stringLength - 1; i >= 0; i--) {
//         const char = inputString[i];
        
//         if (char === " " || i === 0) {
//             let wordStartingIndex = i ? i + 1 : 0;
//             while (wordStartingIndex < wordEndingIndex) {
//                 newString += inputString[wordStartingIndex];
//                 wordStartingIndex++;
//             }

//             wordEndingIndex = i;

//             if (i !== 0) {
//                 newString += " ";
//             }
//         }
//     }

//     resultPara.textContent = `${newString}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     let stringLength = inputString.length;
//     let longestWord = "";
//     let longestWordLength = 0; 
//     let wordLength = 0;
//     let wordStartingIndex = 0;
//     let wordEndingIndex = 0;  

//     for (let i = 0; i < stringLength; i++) {
//         const char = inputString[i];

//         if (char !== " " && i < stringLength) {
//             wordEndingIndex++;
//         }

//         if (char === " " || i === stringLength - 1) {
//             wordLength = wordEndingIndex - wordStartingIndex;
            
//             if (wordLength > longestWordLength) {
//                 longestWordLength = wordLength;
//                 longestWord = "";

//                 while (wordStartingIndex < wordEndingIndex) {
//                     longestWord += inputString[wordStartingIndex];
//                     wordStartingIndex++;
//                 }
//             }
//             wordStartingIndex = i + 1;
//             wordEndingIndex++;
//         }
//     }

//     resultPara.textContent = `${longestWord}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const resultPara = document.getElementById('result');
//     const stringLength = inputString.length;
//     let wordCount = 0;
//     let startIndex = 0;
//     let endIndex = 0;
//     let char = "";
//     let newWord;

//     for (let i = 0; i < stringLength; i++) {
//         char = inputString[i];

//         if (char !== " " || i === stringLength - 1) {
//             startIndex = i;
//             break;
//         }
//     }

//     for (let i = stringLength - 1; i > startIndex; i--) {
//         char = inputString[i];

//         if (char !== " ") {
//             endIndex = i;
//             break;
//         }
//     }

//     for (let i = startIndex; i < endIndex; i++) {
//         char = inputString[i];

//         if ((char === " " || i === endIndex - 1) && newWord) {
//             wordCount++;
//             newWord = false;
//         } else if (char !== " ") {
//             newWord = true;
//         }
//     }

//     resultPara.textContent = `${wordCount}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 6:
// -----------------

function handleSubmit(e) {
    e.preventDefault();

    const inputString = e.target[0].value;
    const resultPara = document.getElementById('result');
    const stringLength = inputString.length;
    let allSubStrings = "";
    let subStrings = "";

    for (let i = 0; i < stringLength; i++) {
        let char = inputString[i];
        allSubStrings += char;
        subStrings = char;

        for (let j = i + 1; j < stringLength; j++) {
            subStrings += inputString[j];
            allSubStrings += `, ${subStrings}`;
        }

        if (i !== stringLength - 1) {
            allSubStrings += ", ";
            subStrings = "";
        }
    }

    resultPara.textContent = `${allSubStrings}`;
    e.target[0].value = "";
}

// -----------------