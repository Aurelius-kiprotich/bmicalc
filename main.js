let table = document.querySelector('table')
let form = document.querySelector('form')
let div = document.querySelector('#bmi-cat')
let tbody = document.querySelector('tbody')
let label = document.querySelectorAll('.logs')
let result = document.querySelector('.result')
let calculateButton = document.querySelector('button')

let weight, height,BMI 

calculateButton.addEventListener("click", ()=>{

    height = labelInput.value;
    weight = labelInput.value;
    your_BMI = weight/(height**2); 
    result.innerText = calculateButton;

    console.log(labelInput.value)

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
});