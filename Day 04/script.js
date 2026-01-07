// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const digits = [];

//     while (num > 0) {
//         let lastdigit = num % 10;
//         digits.unshift(lastdigit);
//         num = Math.floor(num / 10); 
//     }

//     resultPara.textContent = `[${digits}]`; 

//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseFloat(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     while (num % 1 !== 0) {
//         num = Number((num * 10).toFixed(10));
//     }

//     resultPara.textContent = `${num}`; 

//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseFloat(e.target[0].value);
//     const resultPara = document.getElementById('result');
    
//     const fractionalPart = Number((num % 1).toFixed(10));
//     const wholePart = num - fractionalPart;

//     resultPara.textContent = `Whole = ${wholePart}, Fraction = ${fractionalPart}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseFloat(e.target[0].value);
//     const resultPara = document.getElementById('result');
    
//     let fractionalPart = Number((num % 1).toFixed(10));
//     let wholePart = num - fractionalPart;
//     let wholePartCount = 0;
//     let fractionalPartCount = 0;

//     while (wholePart > 1) {
//         wholePart = wholePart / 10;
//         wholePartCount++;
//     }

//     while (fractionalPart > 0) {
//         fractionalPart = Number(((fractionalPart * 10) % 1).toFixed(10));
//         fractionalPartCount++;
//     }

//     resultPara.textContent = `Whole Count = ${wholePartCount}, Fraction Count = ${fractionalPartCount}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const wholePart = e.target[0].value;
//     const fractionalPart = e.target[1].value;
//     const resultPara = document.getElementById('result');
//     let num = 0;

//     const wholePartArray = wholePart.slice(1,-1).split(',');
//     const fractionalPartArray = fractionalPart.slice(1,-1).split(',');
    
//     for (let i = wholePartArray.length - 1; i >= 0; i--) {
//         num += +wholePartArray[i] * (10 ** (wholePartArray.length - i - 1));
//     }

//     for (let i = 0; i < fractionalPartArray.length; i++) {
//         num = Number(num.toFixed(10)) + Number((fractionalPartArray[i] * (10 ** -(i + 1))).toFixed(10));
//     }

//     resultPara.textContent = `${Number(num.toFixed(10))}`; 
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 6:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let reverseNum = 0;
//     let lastdigit;

//     while (num > 0) {
//         lastdigit = num % 10;
//         num = Math.floor(num / 10);
//         reverseNum = reverseNum * 10 + lastdigit;
//     }

//     resultPara.textContent = `${reverseNum}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 7:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const originalNum = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let num = originalNum;
//     let reverseNum = 0;
//     let lastdigit;

//     while (num > 0) {
//         lastdigit = num % 10;
//         num = Math.floor(num / 10);
//         reverseNum = reverseNum * 10 + lastdigit;
//     }
    

//     resultPara.textContent = `${reverseNum === originalNum ? 'Palindrome' : 'Not Palindrome'}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 8:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const originalNum = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let num = originalNum;
//     const digits = [];
//     let digitsPowerSum = 0;

//     while (num > 0) {
//         digits.unshift(num % 10);
//         num = Math.floor(num / 10);
//     }

//     digitsPowerSum = digits.reduce((acc, curr, i, arr) => acc + curr ** arr.length, 0);

//     resultPara.textContent = `${originalNum === digitsPowerSum ? 'Armstrong Number' : 'Not Armstrong Number'}`; 
//     e.target[0].value = "";
// }

// -----------------


// Practice Challenge

// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let sum = 0;

//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }

//     resultPara.textContent = `${sum}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const originalNum = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let num = originalNum;
//     let sum = 0;
//     let count = 0;
//     let avgOfDigits = 0;

//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//         count++;
//     }

//     avgOfDigits = Number((sum / count).toFixed(10));

//     resultPara.textContent = `${avgOfDigits}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let lastDigit = num % 10;
//     let largest = lastDigit, smallest = lastDigit;

//     while (num > 0) {
//         lastDigit = num % 10;
//         num = Math.floor(num / 10);

//         if (largest <= lastDigit) {
//             largest = lastDigit;
//         }

//         if (smallest >= lastDigit) {
//             smallest = lastDigit;
//         }
//     }

//     resultPara.textContent = `Largest = ${largest}, Smallest = ${smallest}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const originalNum = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let num = originalNum;
//     const digits = [];
//     let digitsFractorialSum = 0;

//     while (num > 0) {
//         digits.unshift(num % 10);
//         num = Math.floor(num / 10);
//     }

//     function factorial(n) {
//         if (n === 0 || n === 1) {
//             return 1;
//         }

//         return n * factorial(n - 1);
//     }

//     digitsFractorialSum = digits.reduce((acc, curr) => acc + factorial(curr), 0);

//     resultPara.textContent = `${originalNum === digitsFractorialSum ? 'Strong Number' : 'Not Strong Number'}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let sqOfNum = num ** 2;
//     let natureOfNum = "Automorphic Number";

//     while (num > 0) {
//         if (num % 10 !== sqOfNum % 10) {
//             natureOfNum = `Not ${natureOfNum}`;
//             break;
//         }
//         num = Math.floor(num / 10);
//         sqOfNum = Math.floor(sqOfNum / 10);
//     }

//     resultPara.textContent = `${natureOfNum}`; 
//     e.target[0].value = "";
// }

// -----------------


// Solution 6:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const frequencyOfDigits = {};
//     let lastDigit;

//     while (num > 0) {
//         lastDigit = num % 10;
//         if (frequencyOfDigits[lastDigit] === undefined) {
//             frequencyOfDigits[lastDigit] = 1;
//         } else {
//             frequencyOfDigits[lastDigit]++;
//         }

//         num = Math.floor(num / 10);
//     }

//     for (let prop in frequencyOfDigits) {
//         resultPara.textContent += `${prop} → ${frequencyOfDigits[prop]}, `; 
//     }

//     resultPara.textContent = resultPara.textContent.slice(0, -1);
//     e.target[0].value = "";
// }

// -----------------


// Solution 7:
// -----------------

function handleSubmit(e) {
    e.preventDefault();

    const originalNum = parseInt(e.target[0].value);
    const resultPara = document.getElementById('result');
    let num = originalNum;
    let sumOfDigits = 0, lastDigit;

    while (num > 0) {
        lastDigit = num % 10;
        sumOfDigits += lastDigit;
        num = Math.floor(num / 10);
    }

    resultPara.textContent = `${originalNum % sumOfDigits === 0 ? 'Harshad Number' : 'Not Harshad Number'}`
    e.target[0].value = "";
}

// -----------------