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
    displaytypecalc.textContent = operation

}

function calculate(){
    if (displayCalc.textContent && displayCalcOld.textContent){
        let mathExpression = `${displayCalcOld.textContent} ${displaytypecalc.textContent} ${displayCalc.textContent}`
        displayCalcOld.textContent = mathExpression
        displayCalc.textContent = eval(mathExpression)
        displaytypecalc.textContent = ''
    }
}

function clearDisplay(){
    displayCalc.textContent = ''
    displayCalcOld.textContent = ''
    displaytypecalc.textContent = ''
}

const displayCalc = document.getElementById('calc-display')
const displayCalcOld = document.getElementById('calc-display-old')
const displaytypecalc = document.getElementById('calc-display-operation-type')

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