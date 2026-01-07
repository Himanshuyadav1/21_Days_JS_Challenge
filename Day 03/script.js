// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";

//     for(let i = 1; i <= rows; i++) {
//         for(let j = 1; j <= i; j++) {
//             resultPara.innerHTML += "* ";
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";

//     for(let i = 1; i <= rows; i++) {
//         for(let j = rows; j >= i; j--) {
//             resultPara.innerHTML += "* ";
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for(let i = 1; i <= rows; i++) {
//         for (let j = rows; j > i; j--) {
//             resultPara.innerHTML += "&ensp;  ";
//         }

//         for(let k = 1; k <= 2 * i - 1; k++) {
//             resultPara.innerHTML += "* ";
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for(let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= 2 * rows - i; j++) {
//             if (j < i) {
//                 resultPara.innerHTML += "&ensp;  ";
//             } else {
//                 resultPara.innerHTML += "* ";
//             }
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for(let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= rows; j++) {
//             if (i === 1 || i === rows || j === 1 || j === rows) {
//                 resultPara.innerHTML += "* ";
//             } else {
//                 resultPara.innerHTML += "&ensp;  ";
//             }
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 6:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for(let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= rows + i - 1; j++) {
//             if (i === rows || j === rows - i + 1 || j === rows + i - 1) {
//                 resultPara.innerHTML += "* ";
//             } else {
//                 resultPara.innerHTML += "&ensp;  ";
//             }
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 7:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for(let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= i; j++) {
//             if (i % 2 === 1) {
//                 resultPara.innerHTML += `${j % 2} `;
//             } else {
//                 resultPara.innerHTML += `${(j + 1) % 2} `;
//             }
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Practice Challenge

// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for(let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= 2 * rows - i; j++) {
//             if (i === 1 || j === i || j === 2 * rows - i) {
//                 resultPara.innerHTML += "* "
//             } else {
//                 resultPara.innerHTML += "&ensp;  ";
//             }
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for(let i = 1; i <= 2 * rows - 1; i++) {
//         for (let j = 1; j <= 2 * rows - 1; j++) {
//             if (i <= rows) {
//                 if (j <= i || j >= 2 * rows - i) {
//                     resultPara.innerHTML += "* "
//                 } else {
//                     resultPara.innerHTML += "&ensp;  ";
//                 }
//             } else {
//                 if (j >= i || j <= 2 * rows - i) {
//                     resultPara.innerHTML += "* "
//                 } else {
//                     resultPara.innerHTML += "&ensp;  ";
//                 }
//             }
//         }
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 3:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for (let i = 1; i <= 2 * rows - 1; i++) {
//         if (i <= rows) {
//             for (let j = 1; j <= rows + i - 1; j++) {
//                 if (j >= rows - i + 1) {
//                     resultPara.innerHTML += "* ";
//                 } else {
//                     resultPara.innerHTML += "&ensp;  ";
//                 }
//             }
//         } else {
//             for (let j = 1; j <= 3 * rows - i - 1; j++) {
//                 if (j > i - rows) {
//                     resultPara.innerHTML += "* ";
//                 } else {
//                     resultPara.innerHTML += "&ensp;  ";
//                 }
//             }
//         }

//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 4:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for (let i = 1; i <= 2 * rows - 1; i++) {
//         if (i <= rows) {
//             for (let j = 1; j <= 2 * rows - i; j++) {
//                 if (j > i - 1) {
//                     resultPara.innerHTML += "* ";
//                 } else {
//                     resultPara.innerHTML += "&ensp;  ";
//                 }
//             }
//         } else {
//             for (let j = 1; j <= i; j++) {
//                 if (j >= 2 * rows - i) {
//                     resultPara.innerHTML += "* ";
//                 } else {
//                     resultPara.innerHTML += "&ensp;  ";
//                 }
//             }
//         }

//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 5:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for (let i = 1; i <= 2 * rows - 1; i++) {
//         if (i <= rows) {
//             for (let j = 1; j <= rows + i - 1; j++) {
//                 if (j == rows - i + 1 || j == rows + i - 1) {
//                     resultPara.innerHTML += "* ";
//                 } else {
//                     resultPara.innerHTML += "&ensp;  ";
//                 }
//             }
//         } else {
//             for (let j = 1; j <= 3 * rows - i - 1; j++) {
//                 if (j === i - rows + 1 || j == 3 * rows - i - 1) {
//                     resultPara.innerHTML += "* ";
//                 } else {
//                     resultPara.innerHTML += "&ensp;  ";
//                 }
//             }
//         }
        
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 6:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();
    
//     const rows = parseInt(e.target[0].value);
//     const resultPara = document.getElementById('result');

//     // Remove previous star pattern
//     resultPara.innerHTML = "";
    
//     for (let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= 2 * rows - i; j++) {
//             if (j > rows - i) {
//                 resultPara.innerHTML += "* ";
//             } else {
//                 resultPara.innerHTML += "&ensp;  ";
//             }
//         }
        
//         resultPara.innerHTML += "<br />"
//     }

//     e.target[0].value = "";
// }

// -----------------


// Solution 7:
// -----------------

function handleSubmit(e) {
    e.preventDefault();
    
    const singleTable = parseInt(e.target[0].value);
    const upToTable = parseInt(e.target[1].value);
    const resultPara = document.getElementById('result');
    
    if (singleTable > 0) {
        resultPara.innerText += `Table of ${singleTable} \n`;

        for (let i = 1; i <= 10; i++) {
            resultPara.innerText += `${singleTable} x ${i} = ${singleTable * i} \n`;
        }
        resultPara.innerText += "\n";
    }

    if (upToTable > 0) {
        for (let i = 1; i <= upToTable; i++) {
            resultPara.innerText += `Table of ${i} \n`;

            for (let j = 1; j <= 10; j++) {
                resultPara.innerText += `${i} * ${j} = ${i * j} \n`;
            }

            resultPara.innerText += "\n";
        }
    }

    e.target[0].value = "";
}

// -----------------