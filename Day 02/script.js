// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num1 = parseInt(e.target[0].value);
//     const num2 = parseInt(e.target[1].value);
//     const num3 = parseInt(e.target[2].value);
//     const resultPara = document.getElementById('result');
    
//     if (num1 >= num2 && num1 >= num3) {
//         resultPara.textContent = `${num1}`;
//     } else if (num2 >= num3) {
//         resultPara.textContent = `${num2}`;
//     } else {
//         resultPara.textContent = `${num3}`;
//     }

//     e.target[0].value = "";
//     e.target[1].value = "";
//     e.target[2].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const num = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
    
//     if (num > 0) {
//         resultPara.textContent = `Positive`;
//     } else if (num < 0) {
//         resultPara.textContent = `Negative`;
//     } else {
//         resultPara.textContent = `Zero`;
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

function handleSubmit(e) {
    e.preventDefault();
    
    const units = parseInt(e.target[0].value);
    const resultPara = document.getElementById('result');
    let totalBill = 0;

    if (units <= 100) {
        totalBill = 5 * units;
    } else if (units <= 200) {
        totalBill = (5 * 100) + 7 * (units - 100);
    } else if (units <= 300){
        totalBill =  (5 * 100) + (7 * 100) + 10 * (units - 200);
    } else {
        totalBill = (5 * 100) + (7 * 100) + (10* 100) + 12 * (units - 300);
    }
    
    resultPara.textContent = `Total Bill = ₹${totalBill}`;
    e.target[0].value = "";
}

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const letter = e.target[0].value;
//     const resultPara = document.getElementById('result');
    
//     if (
//         letter === 'a' || letter === 'A' ||
//         letter === 'e' || letter === 'E' ||
//         letter === 'i' || letter === 'I' ||
//         letter === 'o' || letter === 'O' ||
//         letter === 'u' || letter === 'U'
//     ) {
//         resultPara.textContent = `Vowel`;
//     } else {
//         resultPara.textContent = `Consonent`;
//     }
    
//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const year = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//         resultPara.textContent = `Leap Year`;
//     } else {
//         resultPara.textContent = `Not Leap Year`;
//     }
    
//     e.target[0].value = "";
// }

// -----------------


// Practice Challenge

// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const character = e.target[0].value;
//     const asciiCode = character.charCodeAt(0);
//     const resultPara = document.getElementById('result');

//     if (asciiCode >= 65 && asciiCode <= 90) {
//         resultPara.textContent = `Uppercase`;    
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         resultPara.textContent = `Lowercase`;
//     } else if (asciiCode >= 48 && asciiCode <= 57) {
//         resultPara.textContent = `Digit`;
//     } else if (
//         (asciiCode >= 33 && asciiCode <= 47) || 
//         (asciiCode >= 58 && asciiCode <= 64) ||
//         (asciiCode >= 91 && asciiCode <= 96) ||
//         (asciiCode >= 123 && asciiCode <= 126)
//     ) {
//         resultPara.textContent = `Special Character`;
//     } 

//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const side1 = parseInt(e.target[0].value);
//     const side2 = parseInt(e.target[1].value);
//     const side3 = parseInt(e.target[2].value);
//     const resultPara = document.getElementById('result');

//     if (
//         ((side1 ** 2) + (side2 ** 2) === side3 ** 2) ||   
//         ((side1 ** 2) + (side3 ** 2) === side2 ** 2) ||   
//         ((side2 ** 2) + (side3 ** 2) === side1 ** 2)   
//     ) {
//         resultPara.textContent = `Right-angled`;    
//     } else if (side1 === side2 && side2 === side3) {
//         resultPara.textContent = `Equilateral`;
//     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//         resultPara.textContent = `Isosceles`;
//     } else {
//         resultPara.textContent = `Scalene`;
//     } 

//     e.target[0].value = "";
//     e.target[1].value = "";
//     e.target[2].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const income = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');
//     let taxableIncome = 0;
//     let tax = 0;

//     if (income <= 250000) {
//         resultPara.textContent = 'No tax';
//     } else if (income <= 500000) {
//         taxableIncome = income - 250000;
//         tax = (taxableIncome * 5) / 100;
//         resultPara.textContent = `Tax = ₹${tax}`;
//     } else if (income <= 1000000) {
//         taxableIncome = income - 500000;
//         tax = 12500 + ((taxableIncome * 20) / 100);
//         resultPara.textContent = `Tax = ₹${tax}`;
//     } else if (income > 1000000) {
//         taxableIncome = income - 1000000;
//         tax = 12500 + 100000 + ((taxableIncome * 30) / 100);
//         resultPara.textContent = `Tax = ₹${tax}`;
//     } 

//     e.target[0].value = "";
// }

// -----------------