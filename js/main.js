let result = 0;
let calcInput = document.getElementById("calcInput");

function enterValue(calcBtnValue){
    if(calcInput.value == 0){
        calcInput.value = calcBtnValue;
    }else{
        calcInput.value += calcBtnValue;
    }
}

function resetValue(){
    calcInput.value = calcInput.defaultValue;
}

function negateValue(){
    // let 
}

function calculateValue(){
    result = eval(calcInput.value);
    calcInput.value = result;
}

