let buttons = document.querySelectorAll('button');
let h2 = document.querySelector('h2');
let buttonArray = [];
let select = document.querySelector('select');
function playerButtons() {
    for (let i = 0; i < 2; i++) {
        buttonArray.push(buttons[i]);
    }; return buttonArray;
}
playerButtons();
let innerNum = parseInt(h2.innerText[0]);
let outerNum = parseInt(h2.innerText[5]);
funcName = function () {
    innerNum += 1;
    firstSpan().innerText = `${parseInt(firstSpan().innerText) + 1}`;
    terminator();
};secondFunc = function () {
    outerNum += 1;
    secondSpan().innerText = `${parseInt(secondSpan().innerText) + 1}`;
    terminator();
};
buttonArray[0].addEventListener("click", funcName);
buttonArray[1].addEventListener("click", secondFunc);

firstSpan = function () {
    return document.querySelector('span');
}; secondSpan = function () {
    return document.querySelector('span:nth-of-type(2)');
}
let resetButton = document.querySelector('#reset');
function terminator() {
    if (parseInt(select.value) == innerNum || parseInt(select.value) == outerNum) {
        buttonArray[0].style.backgroundColor = "rgba(175,227,4,0.50)";
        buttonArray[1].style.backgroundColor = "rgba(72,128,207,0.50)";
        assignClass();
        unclickable();
        resetButton.addEventListener("click", reset);
    }
}; function assignClass() {
    if (innerNum > outerNum) {
        firstSpan().className = 'editClass';
        secondSpan().className = 'secondEditClass';
    } else if (outerNum > innerNum) {
        secondSpan().className = 'editClass';
        firstSpan().className = 'secondEditClass';
    }
};
unclickable = function () {
    buttonArray[0].removeEventListener("click", funcName);
    buttonArray[1].removeEventListener("click", secondFunc);
}

function reset() {
    firstSpan().innerText = '0';
    secondSpan().innerText = '0';
    buttonArray[0].addEventListener("click", funcName);
    buttonArray[1].addEventListener("click", secondFunc);
    buttonArray[0].style.backgroundColor = "rgba(175,227,4)";
    buttonArray[1].style.backgroundColor = "rgba(72,128,207)";
    select.value = 1;
    secondSpan().className = '';
    firstSpan().className = '';
    innerNum = parseInt(h2.innerText[0]);
    outerNum = parseInt(h2.innerText[5]);
}

