function entryKeyboard(event) {
    if (!isNaN(event.key)){
        displayCalc.textContent += event.key
    }
}
function appendNumber(number){
    if (number === '.'){
        let text_content = displayCalc.textContent
        if (text_content && !(text_content.includes('.'))){
            displayCalc.textContent += number
        }
    }
    else{
        displayCalc.textContent += number
    }
}

function preCalculo(operation){
    displayCalcOld.textContent = displayCalc.textContent
    displayCalc.textContent = ''
    typecalc.textContent = operation

}

function calculate(){
    if (displayCalc.textContent && displayCalcOld.textContent){
        let mathExpression = `${displayCalcOld.textContent} ${typecalc.textContent} ${displayCalc.textContent}`
        displayCalcOld.textContent = mathExpression
        displayCalc.textContent = eval(mathExpression)
        typecalc.textContent = ''
    }
}

function clearDisplay(){
    displayCalc.textContent = ''
    displayCalcOld.textContent = ''
    typecalc.textContent = ''
}

const displayCalc = document.getElementById('calc-display')
const displayCalcOld = document.getElementById('calc-display-old')
const typecalc = document.getElementById('operation-type')

for (let i = 0; i <= 9; i++) {
    console.log(document.querySelector(`[data-calc="${i}"]`))
    document.querySelector(`[data-calc="${i}"]`).addEventListener('click', () => appendNumber(i))
}
document.querySelector('[data-calc="."]').addEventListener('click', () => {
    appendNumber('.')
})

document.querySelector('[data-calc="+"]').addEventListener('click', () => {
    preCalculo('+')
})

document.querySelector('[data-calc="-"]').addEventListener('click', () => {
    preCalculo('-')
})

document.querySelector('[data-calc="x"]').addEventListener('click', () => {
    preCalculo('*')
})

document.querySelector('[data-calc="/"]').addEventListener('click', () => {
    preCalculo('/')
})

document.querySelector('[data-calc="="]').addEventListener('click', () => {
    calculate()
})

document.querySelector('[data-calc="reset"]').addEventListener('click', () => {
    clearDisplay()
})