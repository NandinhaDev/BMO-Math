const face = document.querySelector('.face')
const calculator = document.querySelector('.calculator')


face.addEventListener('click', startCalculator)
calculator.addEventListener('click', endCalculator)
function startCalculator() {
    calculator.classList.add("active")
}

function endCalculator() {
    calculator.classList.remove("active")
}

