const tableOf = document.querySelector('#table-number')//Tabuada de 

let multiplicationResults = document.querySelector('#multiplication-results')//Resultado das multiplicações

const multiplicationForm = document.querySelector('#multiplication-form')//Formulário
console.log(multiplicationForm)

let calcButton = document.querySelector('input[type="submit"')//Botão que chama a função calcular
calcButton.addEventListener('click', (e) => {
    e.preventDefault()

    let resultArray = []

    let tableNumber = document.querySelector('#table')//Número que vai ser feito a tabuada
    let multiplyNumber = document.querySelector('#multiplication')//Até que número vai multiplicar

    if (tableNumber.value == 0 || multiplyNumber.value == 0) {
        let error = document.querySelector('#error')
        .innerHTML = 'Preencha os campos acima.'
    } else {
        multiplicationResults.innerHTML = ''
        tableNumber = Number(tableNumber.value)
        multiplyNumber = Number(multiplyNumber.value)

        for (let i = 1; i <= multiplyNumber; i++) {
            resultArray.push(i * tableNumber)

            const template = `<div class="row">${tableNumber} x ${i} = ${resultArray[i - 1]}</div>`

            multiplicationResults.innerHTML += template
        }
        tableOf.innerHTML = `${tableNumber} até o ${multiplyNumber}`
    }
})
/*
let calcButton = document.querySelector('input[type="submit"')

let resultArray = []

function calcular() {
    let tableNumber = document.querySelector('#table')
    let multiplyNumber = document.querySelector('#multiplication')

    let error = document.querySelector('#error')

    if (tableNumber.value == 0 || multiplyNumber.value == 0) {
        error.innerHTML = 'Preencha os campos acima.'
    } else {
        error.innerHTML = ''

        let tableOf = document.querySelector('#table-number')

        let multiplicationResults = document.querySelector('#multiplication-results')

        resultArray = []
        tableNumber = Number(tableNumber.value)
        multiplyNumber = Number(multiplyNumber.value)

        multiplicationResults.innerHTML = ''

        for (let i = 0; i <= multiplyNumber; i++) {

            resultArray.push(tableNumber * i)

            let divRow = document.createElement('div')
            divRow.setAttribute('class', 'row')
            divRow.innerHTML = `${tableNumber} x ${i} = ${resultArray[i]}`
            multiplicationResults.appendChild(divRow)
        }
        tableOf.innerHTML = tableNumber
        console.log(resultArray)
    }

}
calcButton.addEventListener('click', (e) => {
    e.preventDefault()
    calcular()
})
*/