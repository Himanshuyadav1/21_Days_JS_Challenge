// Solution 1:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const subString = e.target[1].value;
//     const resultPara = document.getElementById('result');
//     const stringLength = inputString.length;
//     const subStringLength = subString.length;
//     let isSubString;

//     for (let i = 0; i <= stringLength - subStringLength ; i++) {
//         isSubString = true;
        
//         for (let j = 0; j < subStringLength; j++) {
            
//             if (inputString[i + j] !== subString[j]) {
//                 isSubString = false;
//                 break;
//             }
//         }

//         if (isSubString) {
//             break;
//         }
//     }

//     resultPara.textContent = `${isSubString}`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 2:
// -----------------

// function handleSubmit(e) {
//     e.preventDefault();

//     const inputString = e.target[0].value;
//     const subString = e.target[1].value;
//     const resultPara = document.getElementById('result');
//     const stringLength = inputString.length;
//     const subStringLength = subString.length;
//     let isSubString;
//     let index = -1;

//     for (let i = 0; i <= stringLength - subStringLength; i++) {
//         isSubString = true;

//         for (let j = 0; j < subStringLength; j++) {
//             if (inputString[i + j] !== subString[j]) {
//                 isSubString = false;
//                 break;
//             }
//         }

//         if (isSubString) {
//             index = i;
//         }
//     }
    
//     resultPara.textContent = `Found at index ${index}`;
//     e.target[0].value = "";
//     e.target[1].value = "";
// }

// -----------------


// Solution 3:
// -----------------

function handleSubmit(e) {
    e.preventDefault();

    const inputString = e.target[0].value;
    const subString = e.target[1].value;
    const resultPara = document.getElementById('result');
    const fullRotation = inputString + inputString;
    const fullRotationLength = fullRotation.length;
    const subStringLength = subString.length;
    let isRotationString;

    for (let i = 0; i <= fullRotationLength - subStringLength; i++) {
        isRotationString = true;

        for (let j = 0; j < subStringLength; j++) {
            if (fullRotation[i + j] !== subString[j]) {
                isRotationString = false;
                break;
            }
        }

        if (isRotationString) {
            break;
        }
    }
    
    resultPara.textContent = `${isRotationString ? 'Rotation' : 'Not Rotation'}`;
    e.target[0].value = "";
    e.target[1].value = "";
}

// -----------------