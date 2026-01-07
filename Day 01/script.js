// Solution 1:
// -----------------
// Time Complexity O(n)

// const num = +prompt("Provide a number to print from 1 to N");
// console.log(num, typeof num);

// for (let i = 1; i <= num; i++) {
//     console.log(i);
// }

// -----------------


// Solution 2:
// -----------------
// Time Complexity O(n)

// const num = parseInt(prompt("Provide a number to print from N to 1"));
// console.log(num, typeof num);

// for (let i = 1; i <= num; i++) {
//     console.log(num - i + 1);
// }

// -----------------


// Solution 3:
// -----------------
// Time Complexity O(n)

// const num = Number(prompt("Provide a number to print even number from 1 to N"));
// console.log(num, typeof num);

// for (let i = 1; i <= num; i++) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

// -----------------


// Solution 4:
// -----------------

// Brute Force Solution for Number
// -----------------
// Time Complexity O(n)

// console.time();
// const num = Number(prompt("Provide a number to print Sum of First N Natural Numbers"));
// console.log(num, typeof num);

// let sum = 0;

// for (let i = 1; i <= num; i++) {
//     sum = sum + i;
// }

// console.log(sum);

// console.timeEnd();

// ----------------------

// Brute Force Solution for BigInt
// -----------------
// Time Complexity O(n)
// It takes default: 68006.69995117188 ms 

// console.time();
// const num = 1000000000n;
// let sum = 0n;

// for (let i = 1n; i <= num; i++) {
//     sum += i;
// }

// console.log(sum);
// console.timeEnd();

// ----------------------

// Optimized Solution
// -----------------
// Time Complexity O(1)

// console.time();
// const num = Number(prompt("Provide a number to print Sum of First N Natural Numbers"));
// console.log(num, typeof num);

// const sum = (num * (num + 1)) / 2;

// console.log(sum);
// console.timeEnd();

// -----------------

// Optimized Solution for BigInt
// -----------------
// Time Complexity O(1)
// It takes default: 0.2900390625 ms

// console.time();
// const num = 1000000000n;
// console.log(num, typeof num);

// const sum = (num * (num + 1n)) / 2n;

// console.log(sum);
// console.timeEnd();

// -----------------


// Solution 5:
// -----------------
// Time Complexity O(n)

// const num = parseInt(prompt("Provide a number to print Product (Factorial) of N"));
// let factorialN = 1;

// for (let i = 1; i <= num; i++) {
//     factorialN *= i;
// }

// console.log(factorialN);

// -----------------


// Solution 6:
// -----------------
// Time Complexity O(n)

// const num = parseInt(prompt("Provide a number to print Sum of All Even Numbers up to N"));
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//     if (i%2 === 0) {
//         sum += i;
//     }
// }

// console.log(sum);

// -----------------


// Solution 7:
// -----------------
// Time Complexity O(n)

// const num = +prompt("Provide a number to print  Squares of Numbers from 1 to N");

// for (let i = 1; i <= num; i++) {
//     // console.log(i * i);
//     // console.log(i ** 2);
//     console.log(Math.pow(i, 2));
// }

// -----------------


// Home Work
// -----------------

// Solution 1:
// -----------------
// Time Complexity O(n)

// function handleSubmit(e) {
//     e.preventDefault();
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('show-result');
    
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             resultPara.textContent += `${i} `;
//         }
//     }

//     e.target[0].value = "";
// }

// -----------------

// Solution 2:
// -----------------
// Time Complexity O(n)

// function handleSubmit(e) {
//     e.preventDefault();
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('show-result');
//     let sum = 0;

//     for (let i = 1; i <= num; i++) {
//         if (i % 2 !== 0) {
//             sum += i;
//         }
//     }

//     resultPara.textContent = `${sum}`;
//     e.target[0].value = "";
// }

// -----------------

// Solution 3:
// -----------------
// Time Complexity O(n)

// function handleSubmit(e) {
//     e.preventDefault();
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('show-result');

//     for (let i = 1; i <= num; i++) {
//         resultPara.textContent += `${i ** 3}  `;
//     }

//     e.target[0].value = "";
// }

// -----------------

// Solution 4:
// -----------------
// Time Complexity O(n)

function handleSubmit(e) {
    e.preventDefault();
    const num = parseInt(e.target[0].value);
    const resultPara = document.getElementById('show-result');

    for (let i = 1; i <= num; i++) {
        if (Math.sqrt(i) % 1 === 0 && i % 2 === 0) {
            resultPara.textContent += `${i}  `;
        }
    }

    e.target[0].value = "";
}