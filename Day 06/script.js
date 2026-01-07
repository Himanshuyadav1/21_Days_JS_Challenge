// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let isPrime;
//     const factors = [];

//     for (let i = 1; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             factors.push(i);
//             const otherPair = num / i;
//             if (otherPair !== i) {
//                 factors.push(otherPair);
//                 isPrime = true;
//             }

//             if (factors.length > 2) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     resultPara.textContent = `${isPrime ? 'Prime Number' : 'Not Prime Number'}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num1 = parseInt(e.target[0].value);
//     const num2 = parseInt(e.target[1].value);
//     const resultPara = document.getElementById('result');
//     let divisor = num1 < num2 ? num1 : num2;
//     let divident = num1 > num2 ? num1 : num2;

//     while (divident % divisor !== 0) {
//         const remainder = divident % divisor;
//         divident = divisor;
//         divisor = remainder;
//     }

//     resultPara.textContent = `${divisor === 1 ? ' Co-Prime Numbers' : 'Not Co-Prime Numbers'}`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const fibonacciNumbers = [0, 1];

//     for (let i = 1; i < num - 1; i++) {
//         fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i]);
//     }

//     resultPara.textContent = `${fibonacciNumbers.join(', ')}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const fibonacciNumbers = [0, 1];

//     for (let i = 1; i < num - 1; i++) {
//         fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i]);
//     }

//     resultPara.textContent = `${fibonacciNumbers[num - 1]}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     // const fibonacciNumbers = [0, 1];

//     // for (let i = 1; fibonacciNumbers[fibonacciNumbers.length - 1] < num; i++) {
//     //     fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i]);
//     // }

//     // resultPara.textContent = `${fibonacciNumbers.includes(num) ? 'Yes' : 'No'}`;

//     if ((Math.sqrt(5 * (num ** 2) + 4) % 1 === 0) || Math.sqrt(5 * (num ** 2) - 4) % 1 === 0) {
//         resultPara.textContent = 'Yes';
//     } else {
//         resultPara.textContent = 'No';
//     }

//     e.target[0].value = "";
// }

// -----------------


// Practice Challenge

// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const primeNumbers = [];

//     function isPrime(n) {
//         if (n <= 1) return false;

//         if (n === 2) return true;

//         if (n % 2 === 0) return false;

//         for (let i = 3; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }

//         return true;
//     }

//     for (let i = 2; i <= num; i++) {
//         if (isPrime(i)) {
//             primeNumbers.push(i);
//         }
//     }

//     resultPara.textContent = `${primeNumbers.join(', ')}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const primeNumbers = [];
//     let sumOfPrimeNumbersTillNum = 0;

//     function isPrime(n) {
//         if (n <= 1) return false;

//         if (n === 2) return true;

//         if (n % 2 === 0) return false;

//         for (let i = 3; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }

//         return true;
//     }

//     for (let i = 2; i <= num; i++) {
//         if (isPrime(i)) {
//             primeNumbers.push(i);
//         }
//     }

//     sumOfPrimeNumbersTillNum = primeNumbers.reduce((acc, curr) => acc + curr);

//     resultPara.textContent = `${sumOfPrimeNumbersTillNum}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num1 = parseInt(e.target[0].value);
//     const num2 = parseInt(e.target[1].value);
//     const resultPara = document.getElementById('result');
    
//     function isPrime(n) {
//         if (n <= 1) return false;

//         if (n === 2) return true;

//         if (n % 2 === 0) return false;

//         for (let i = 3; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }

//         return true;
//     }

//     if (isPrime(num1) && isPrime(num2) && (num1 - num2 === 2 || num2 - num1 === 2)) {
//         resultPara.textContent = 'Twin Primes';
//     } else {
//         resultPara.textContent = 'Not Twin Primes';
//     }

//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const limit = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const fibonacciNumbers = [0, 1];

//     for (let i = 1; true; i++) {
//         const lastFibonacciNum = fibonacciNumbers[i - 1] + fibonacciNumbers[i];
//         if (lastFibonacciNum > limit) {
//             break;
//         }
//         fibonacciNumbers.push(lastFibonacciNum);
//     }

//     resultPara.textContent = `${fibonacciNumbers.join(', ')}`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const start = parseInt(e.target[0].value);
//     const end = parseInt(e.target[1].value);
//     const resultPara = document.getElementById('result');
//     const fibonacciNumbers = [0, 1];
//     let desiredFibonacciNumbers = [];

//     for (let i = 1; true; i++) {
//         const lastFibonacciNum = fibonacciNumbers[i - 1] + fibonacciNumbers[i];
//         if (lastFibonacciNum > end) {
//             break;
//         }
//         fibonacciNumbers.push(lastFibonacciNum);
//     }

//     desiredFibonacciNumbers = fibonacciNumbers.slice(fibonacciNumbers.findIndex(num => num >= start));

//     resultPara.textContent = `${desiredFibonacciNumbers.join(', ')}`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 6:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const term = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     const fibonacciNumbers = [0, 1];
//     let evenFibonacciNumbers = [];
//     let sumOfEvenFibonacciNumbers = 0;

//     for (let i = 1; i < term - 1; i++) {
//         fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i]);
//     }

//     evenFibonacciNumbers = fibonacciNumbers.filter(num => num >= 2 && num % 2 === 0);

//     sumOfEvenFibonacciNumbers = evenFibonacciNumbers.reduce((acc, curr) => acc + curr);

//     resultPara.textContent = `Sum = ${sumOfEvenFibonacciNumbers} (${evenFibonacciNumbers.join(' + ')})`;
//     e.target[0].value = "";
// }

// -----------------


// Solution 7:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const num1 = parseInt(e.target[0].value);
//     const num2 = parseInt(e.target[1].value);
//     const resultPara = document.getElementById('result');
//     const sum = num1 + num2;

//     function isPrime(n) {
//         if (n <= 1) return false;
//         if (n === 2) return true;
//         if (n % 2 === 0) return false;

//         for (let i = 3; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) return false;
//         }

//         return true;
//     }

//     resultPara.textContent = `${sum} is ${isPrime(sum) ? 'Prime' : 'not Prime'}`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 8:
// -----------------

function handleSubmit(e) {
    e.preventDefault();

    const num = parseInt(e.target[0].value);
    const resultPara = document.getElementById('result');
    const fibonacciNumbers = [0, 1];
    const primeFibonacciNumbers = [];

    function isPrime(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }

        return true;
    }

    for (let i = 1; primeFibonacciNumbers.length < num; i++) {
        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i]);
        
        if (isPrime(fibonacciNumbers[i])) {
            primeFibonacciNumbers.push(fibonacciNumbers[i]);
        }
    }


    resultPara.textContent = `${primeFibonacciNumbers.join(', ')}`;
    e.target[0].value = "";
}

// -----------------