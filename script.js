const outputElement = document.querySelector("#output");
const btnCopy = document.querySelector('#btnCopy');
const passwordLengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const smallElement = document.querySelector('#small');
const capitalElement = document.querySelector('#capital');
const symbolElement = document.querySelector('#symbol');
const frm = document.querySelector('#frm');

// Button click to copy password
btnCopy.addEventListener('click', async() =>{
    const pass = outputElement.value;

    if(pass) {
        await navigator.clipboard.writeText(pass);
        alert("copied to clipboard");
    } else {
        alert("There is no password to copy")
    }
});


function generateRandomChar(min, max){
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit)+ min);
}

function capitalValue() {
    return generateRandomChar(65, 90);
}

function smallValue() {
    return generateRandomChar(97, 122);
}

function numberValue() {
    return generateRandomChar(48, 57);
}

function symbolValue() {
    const symbol = "!@#$%^&*()*+-./";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

const functionArray = [
    {
        element: numberElement,
        fun: numberValue
    },
    {
        element: capitalElement,
        fun: capitalValue
    },
    {
        element: smallElement,
        fun: smallValue
    },
    {
        element: symbolElement,
        fun: symbolValue
    }
];

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const limit = passwordLengthElement.value;

    let generatedPassword = "";

    const funArray = functionArray.filter(({element})=>element.checked);

    for(i=0; i < limit; i++){
        const index = Math.floor(Math.random() * funArray.length);
        const letter = funArray[index].fun();
        generatedPassword += letter;
    }

    outputElement.value = generatedPassword;
});

