const display = document.getElementById("display");
const btn = document.getElementById("btn");
const buttons=btn.querySelectorAll("button");
const clear = document.getElementById("cleardisplay");
const calculate = document.getElementById("Calculation");
const square_root = document.getElementById("squareRoot");
const sin = document.getElementById("sin_operaton");
const cos = document.getElementById("cos_operation");

buttons.forEach((button_1)=>{
    if(button_1.id !== "cleardisplay" && button_1.id !== "Calculation"){
        button_1.addEventListener('click', ()=>{
            display.value += button_1.textContent;
        });
    };
});

clear.addEventListener("click", ()=>{
    display.value=" ";
});

calculate.addEventListener("click", ()=>{
    try {
        const result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
});

square_root.addEventListener("click", ()=>{
     try {
        display.value = Math.sqrt(parseFloat(display.value))
     } catch (error) {
         display.value = "Error";
     }
});

sin.addEventListener("click", ()=>{
    try {
        const angle = parseFloat(display.value);
        const radians = angle * (Math.PI / 180); 
        display.value = Math.sin(radians).toFixed(4); 
    } catch (error) {
        display.value = "Error"
    }
});

cos.addEventListener("click", ()=>{
    try {
        const angle = parseFloat(display.value);
        const radians = angle * (Math.PI / 180); 
        display.value = Math.cos(radians).toFixed(4);
    } catch (error) {
        display.value = "Error"
    }
});

