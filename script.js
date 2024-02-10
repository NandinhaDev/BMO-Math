const face = document.querySelector('.face')
const calculator = document.querySelector('.calculator')
const result = document.getElementById('result')
const multiplicate = document.getElementById("multiplicateButton")
const divide = document.getElementById("divideButton")

face.addEventListener('click', startCalculator)
calculator.addEventListener('click', endCalculator)
function startCalculator() {
    calculator.classList.add("active")
}

function endCalculator() {
    calculator.classList.remove("active")
}

function display(val) {
    result.value += val  
    
    return val
}

function deleteNumber() {
    const currentValue = result.value;  
    if (currentValue.length > 0) {   
         result.value = currentValue.slice(0, -1)
        }
}

function clearScreen (){
    result.value = ""
}

function solve() {
    let calculation = result.value.replace(/x/g, '*').replace(/÷/g,'/')
    let solution = eval(calculation)
    result.value = solution
    return solution 
}