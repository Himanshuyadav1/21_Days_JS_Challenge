// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const factors = [];
//     let loopCount = 0;

//     for (let i = 1; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             factors.splice(factors.length / 2, 0, i);
//             const otherPair = num / i;
//             if (i !== otherPair) {
//                 factors.splice(Math.floor((factors.length / 2)) + 1, 0, otherPair);
//             }
//         }
 
//         loopCount++;
//     }

//     resultPara.textContent = `LoopCount: ${loopCount} - [${factors}]`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num = parseInt(e.target[0].value);
//     const limit = parseInt(e.target[1].value);
//     const resultPara = document.getElementById('result');
//     const multilies = [];

//     // for (let i = 1; i <= Math.floor(limit / num); i++) {
//     //     multilies.push(num * i);
//     // }

//     for (let i = num; i <= limit; i+=num) {
//         multilies.push(i);
//     }

//     resultPara.textContent = `[${multilies}]`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num1 = parseInt(e.target[0].value);
//     const num2 = parseInt(e.target[1].value);
//     const resultPara = document.getElementById('result');

//     let divisor = num1 < num2 ? num1 : num2;
//     let dividend = num1 > num2 ? num1 : num2;
    
//     while (dividend % divisor !== 0) {
//         const remainder = dividend % divisor;
//         dividend = divisor;
//         divisor = remainder;
//     }

//     resultPara.textContent = `HCF = ${divisor}`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num1 = parseInt(e.target[0].value);
//     const num2 = parseInt(e.target[1].value);
//     const resultPara = document.getElementById('result');

//     let dividend = num1 > num2 ? num1 : num2;
//     let divisor = num1 < num2 ? num1 : num2;

//     while (dividend % divisor !== 0) {
//         const remainder = dividend % divisor;
//         dividend = divisor;
//         divisor = remainder;
//     }

//     resultPara.textContent = `LCM = ${(num1 * num2) / divisor}`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Practice Challenge

// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const factors = [];

//     for (let i = 1; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             factors.push(i);
//             const otherPair = num / i;
//             if (i !== otherPair) {
//                 factors.push(otherPair);
//             }
//         }
//     }

//     resultPara.textContent = `${factors.length} Factors`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const factors = [];
//     let sumOfAllFactorsOfNum = 0;

//     for (let i = 1; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             factors.push(i);
//             const otherPair = num / i;
//             if (i !== otherPair) {
//                 factors.push(otherPair);
//             }
//         }
//     }

//     sumOfAllFactorsOfNum = factors.reduce((acc, curr) => acc + curr);

//     resultPara.textContent = `Sum = ${sumOfAllFactorsOfNum}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let greatestFactorOfNumOtherThanItself = 1;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             greatestFactorOfNumOtherThanItself = num / i;
//             break;
//         }
//     }

//     resultPara.textContent = `${greatestFactorOfNumOtherThanItself}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const properDivisorsOfNum = [1];
//     let sumOfAllProperDivisorsOfNum = 0;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             properDivisorsOfNum.push(i);
//             const otherPair = num / i;
//             if (otherPair !== i) {
//                 properDivisorsOfNum.push(otherPair);
//             }
//         }
//     }

//     properDivisorsOfNum.sort((a,b) => a - b);

//     sumOfAllProperDivisorsOfNum = properDivisorsOfNum.reduce((acc, curr) => acc + curr);

//     resultPara.innerText = `Proper Divisors: [${properDivisorsOfNum}] \n ${num === sumOfAllProperDivisorsOfNum ? 'Perfect Number' : 'Not Perfect Number'}`;
//     e.target[0].value = "";
// }

// ----------------- 


// Solution 5:
// -----------------

function handleSubmit(e) {
    e.preventDefault();
    
    const num1 = parseInt(e.target[0].value);
    const num2 = parseInt(e.target[1].value);
    const num3 = parseInt(e.target[2].value);
    const resultPara = document.getElementById('result');
    let hcf, lcm;

    function getHCF(a, b) {
        let divisor = a < b ? a : b;
        let dividend = a > b ? a : b;

        while (dividend % divisor !== 0) {
            const remainder = dividend % divisor;
            dividend = divisor;
            divisor = remainder;
        }

        return divisor;
    }

    function getLCM(a, b) {
        return (a * b) / getHCF(a, b);
    }

    // hcf = getHCF(getHCF(num1, num2), num3);
    // lcm = getLCM(getLCM(num1, num2), num3);

    // For getting HCF and LCM of N numbers
    function getHCFOfN(a) {
        return function (b) {
            if (!b) {
                return a;
            }
            return getHCFOfN(getHCF(a, b));
        }
    }

    function getLCMOfN(a) {
        return function (b) {
            if (!b) {
                return a;
            }
            return getLCMOfN(getLCM(a, b));
        }
    }

    hcf = getHCFOfN(num1)(num2)(num3)();
    lcm = getLCMOfN(num1)(num2)(num3)();

    resultPara.innerText = `HCF = ${hcf}, LCM = ${lcm}`;
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
}

// ----------------- 