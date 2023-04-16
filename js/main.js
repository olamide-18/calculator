let result = 0;
let calcInput = document.getElementById("calcInput");
// let data = [];

function enterValue(calcBtnValue){
    // if(calcBtnValue == "+" || calcBtnValue == "-" || calcBtnValue == "*" || calcBtnValue == "/"){
    //     data.push(calcInput.value);
    //     data.push(calcBtnValue);
    //     console.log(data);
    // }else{
    //     if(data[data.length] == "+" || data)
    //     if(calcInput.value == 0){
    //         calcInput.value = calcBtnValue;
    //     }else{
    //         calcInput.value += calcBtnValue;
    //     }
    // }
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

