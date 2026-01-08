// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const primeFactors = [];

//     // 1st Approach
//     // function isPrime(n) {
//     //     if (n <= 1) return false;
//     //     if (n === 2) return true;
//     //     if (n % 2 === 0) return false;

//     //     for (let i = 3; i <= Math.sqrt(n); i++) {
//     //         if (n % i === 0) return false
//     //     }

//     //     return true;
//     // }

//     // for (let i = 2; num > 1; i++) {
//     //     if (isPrime(i)) {
//     //         while (num % i === 0) {
//     //             primeFactors.push(i);
//     //             num = num / i;
//     //         }
//     //     }
//     // }


//     // 2nd Approach
//     while (num % 2 === 0) {
//         primeFactors.push(2);
//         num = num / 2;
//     }

//     let factor = 3;

//     while (factor <= Math.sqrt(num)) {
//         while (num % factor === 0) {
//             primeFactors.push(factor);
//             num = num / factor;
//         }
//         factor += 2;
//     }

//     if (num > 2) {
//         primeFactors.push(num);
//     }

//     resultPara.textContent = `[${primeFactors.join(', ')}]`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const primeFactors = {};

//     while (num % 2 === 0) {
//         primeFactors[2] = (primeFactors[2] || 0) + 1;
//         num /= 2;
//     }

//     let factor = 3;

//     while (factor <= Math.sqrt(num)) {
//         while (num % factor === 0) {
//             primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//             num /= factor;
//         }
//         factor += 2;
//     }

//     if (num > 2) {
//         primeFactors[num] = (primeFactors[num] || 0) + 1;
//     }

//     // Remove previous factors
//     resultPara.textContent = "";

//     for (let key in primeFactors) {
//         resultPara.textContent += `${key}^${primeFactors[key]}`
//         resultPara.textContent += " x ";
//     }

//     resultPara.textContent =  `"${resultPara.textContent.slice(0, -3)}"`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const primeFactors = {};

//     while (num % 2 === 0) {
//         primeFactors[2] = (primeFactors[2] || 0) + 1;
//         num /= 2;
//     }

//     let factor = 3;

//     while (factor <= Math.sqrt(num)) {
//         while (num % factor === 0) {
//             primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//             num /= factor;
//         }
//         factor += 2;
//     }

//     if (num > 2) {
//         primeFactors[num] = (primeFactors[num] || 0) + 1;
//     }

//     resultPara.textContent =  `Distinct Prime Factors = ${Object.keys(primeFactors).length}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const primeFactors = {};

//     while (num % 2 === 0) {
//         primeFactors[2] = (primeFactors[2] || 0) + 1;
//         num /= 2;
//     }

//     let factor = 3;

//     while (factor <= Math.sqrt(num)) {
//         while (num % factor === 0) {
//             primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//             num /= factor;
//         }
//         factor += 2;
//     }

//     if (num > 2) {
//         primeFactors[num] = (primeFactors[num] || 0) + 1;
//     }

//     resultPara.textContent =  `${Object.values(primeFactors).every(count => count >= 2) ? 'Powerful Number' : 'Not Powerful Number'}`;
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
//     const primeFactors = {};
//     let allDistinctPrimeFactorsProduct;

//     while (num % 2 === 0) {
//         primeFactors[2] = (primeFactors[2] || 0) + 1;
//         num /= 2;
//     }

//     let factor = 3;

//     while (factor <= Math.sqrt(num)) {
//         while (num % factor === 0) {
//             primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//             num /= factor;
//         }
//         factor += 2;
//     }
    
//     if (num > 2) {
//         primeFactors[num] = (primeFactors[num] || 0) + 1;
//     }

//     allDistinctPrimeFactorsProduct = Object.keys(primeFactors).reduce((acc, curr) => acc * curr); 

//     resultPara.textContent =  `Product = ${Object.keys(primeFactors).join(' x ')} = ${allDistinctPrimeFactorsProduct}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     let num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const primeFactors = {};
//     let isSquareFreeNumber = false;

//     while (num % 2 === 0) {
//         primeFactors[2] = (primeFactors[2] || 0) + 1;
//         num /= 2;
//     }

//     let factor = 3;

//     while (factor <= Math.sqrt(num)) {
//         while (num % factor === 0) {
//             primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//             num /= factor;
//         }
//         factor += 2;
//     }
    
//     if (num > 2) {
//         primeFactors[num] = (primeFactors[num] || 0) + 1;
//     }

//     isSquareFreeNumber = Object.values(primeFactors).every(n => n === 1); 

//     resultPara.textContent =  `${isSquareFreeNumber ? 'Square-Free Number' : 'Not Square-Free Number'}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const originalNumber = parseInt(e.target[0].value);    
//     const resultPara = document.getElementById('result');
//     let num = originalNumber;
//     const primeFactors = [];
//     let sumOfDigitsOfNum = 0;
//     let sumOfDigitsOfPrimeFactors = 0;
//     let isSmithNumber = false;

//     while (num % 2 === 0) {
//         primeFactors.push(2);
//         num /= 2;
//     }

//     let factor = 3;

//     while (factor <= Math.sqrt(num)) {
//         while (num % factor === 0) {
//             primeFactors.push(factor);
//             num /= factor;
//         }
//         factor += 2;
//     }
    
//     if (num > 2) {
//         primeFactors.push(num);
//     }

//     function sumOfDigits(n) {
//         let sum = 0;
//         while (n !== 0) {
//             let lastDigit = n % 10;
//             n = Math.floor(n / 10);
//             sum += lastDigit;
//         }
//         return sum; 
//     }

//     sumOfDigitsOfNum = sumOfDigits(originalNumber);
//     sumOfDigitsOfPrimeFactors = primeFactors.reduce((acc, curr) => acc + sumOfDigits(curr), 0);

//     isSmithNumber = primeFactors.length >= 2 && (sumOfDigitsOfNum === sumOfDigitsOfPrimeFactors);

//     resultPara.textContent =  `${isSmithNumber ? 'Smith Number' : 'Not Smith Number'}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

function handleSubmit(e) {
    e.preventDefault();

    let num = parseInt(e.target[0].value);    
    const resultPara = document.getElementById('result');
    const primeFactors = [1];
    let isUglyNumber = false;

    while (num % 2 === 0) {
        primeFactors.push(2);
        num /= 2;
    }

    let factor = 3;

    while (factor <= Math.sqrt(num)) {
        while (num % factor === 0) {
            primeFactors.push(factor);
            num /= factor;
        }
        if (primeFactors[primeFactors.length - 1] >= 7) {
            break;
        }
        factor += 2;
    }
    
    if (num > 2) {
        primeFactors.push(num);
    }

    isUglyNumber = !primeFactors.some(n => n >= 7);

    resultPara.textContent =  `${isUglyNumber ? 'Ugly Number' : 'Not Ugly Number'}`;
    e.target[0].value = "";
}

// -----------------