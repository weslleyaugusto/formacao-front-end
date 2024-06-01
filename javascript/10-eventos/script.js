//1-Acionando eventos
//forma não recomendada, pois polui o html

/*
let button = document.getElementsByTagName('button')[0]

function mudarFundoGray(){
    document.body.style.backgroundColor = 'gray'
    button.setAttribute('onclick','mudarFundoRosa()')
}
function mudarFundoRosa(){
    document.body.style.backgroundColor = 'pink'
    button.setAttribute('onclick','mudarFundoGray()')
}
document.body.style.transition = '1s'
*/

//forma recomendada usando addEventListener
//primeiro argumento é a ação que vai chamar a função e o segundo a função que vai ser executada
/*
let button = document.getElementsByTagName('button')[0]
document.body.style.transition = '1s'
button.addEventListener('click',() =>{
    document.body.style.backgroundColor = 'gray'
})
*/

//2-Removendo eventos: removeEventListener
/*
let evento = document.querySelector('#evento')
function imprimir(){
    console.log('teste')
}

evento.addEventListener('click',imprimir)//Chama e função imprimir ao clicar em evento

let tirarEvento = document.querySelector('#tirar')

tirarEvento.addEventListener('click',() => {//cria uma função que remove um evento
    evento.removeEventListener('click',imprimir)
    console.log('Evento removido')
})
//para remover um evento, a função não pode ser anonima, pois o javascript precisa saber o que vai remover
*/

//3-Argumento do evento
/*

let h1 = document.getElementsByTagName('h1')[0]
h1.style.cursor = 'pointer'

h1.addEventListener('click',(event) => {//event armazena todas as informações sobre o evento em forma de objeto
    h1.style.backgroundColor = 'pink'
    console.log(event)
    console.log(event.target)
    console.log(event.pointerType)
})

let buttons = document.querySelectorAll('button')

*/

//4-Propagação de eventos
/*

let btn = document.querySelector('#div-btn')

let divBtn = document.getElementsByTagName('div')[0]
divBtn.style.backgroundColor = 'lightgray'
divBtn.style.padding = '20px'

divBtn.addEventListener('click', () =>{
    console.log('Evento 1  disparado')
})

btn.addEventListener('click', (event) =>{
    event.stopPropagation()//faz com que apenas o evento deste elemento seja executado
    console.log('Evento 2 disparado')
})
*/

//5-Removendo eventos padrão
/*

const a = document.querySelector('#google-link')

a.addEventListener('click', event => {
    event.preventDefault()//remove o evento padrão de redirecionamento
    console.log('Não redirecionou a o usuario.')
})
*/

//6-Eventos de tecla
/*

//keyup: Dispara o  evento ao soltar a tecla
document.addEventListener('keyup', event => console.log('Soltou a tecla  ' + event.key))

//keydown: Dispara o evento ao pressionar a tecla
document.addEventListener('keydown', event => console.log(`Apertou a tecla ${event.key}`))
*/

//7-Eventos de mouse
/*

const changeColor = document.querySelector('#change-color-button')
changeColor.addEventListener('mousedown', () => document.body.style.backgroundColor = 'lightgray')

const alertButton = document.querySelector('#alert-button')
alertButton.addEventListener('mouseup', () => alert('Você apertou o botão e um alerta foi disparado.'))

const confirmButton = document.querySelector('#confirm-button')
confirmButton.addEventListener('dblclick', () => confirm('Está gostando de aprender javascript?'))

console.log(changeColor, alertButton, confirmButton)

*/
//8-Movimentto de mouse
/*

document.addEventListener('mousemove', (e) => {
    if(e.y === 100){
        console.log(`O eixo y chegou no ${e.y}`)
        document.body.innerHTML += 'O mouse chegou no eixo y 100'
    }
})
*/

//9-Eventos de por scroll
/*
window.addEventListener('scroll', () => {//adiciona um evento à viewport ao escrolar a pagina
    if(window.scrollY > 200){//verifica se o scroll é maior do que 200px
        console.log('Passou de 200px')
    }
})
*/
/*
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        alert("O eixo y passou de 500px")
    }
})

document.body.style.height = '3000px'
*/
//10-Eventos e focus/blur
/*
const input = document.querySelector('input')

input.addEventListener('focus',//Cria um evento que é disparado ao clicar em um input
    () => console.log('O input está selecionado'))

input.addEventListener('blur',//Cria um evento que é disparado quando sai de um input
    () => console.log('O input não está mais selecionado'))
*/

//11-Evento de carregamento
/*

window.addEventListener('load' ,//dispara um evento ao carregar a pagina
 () => console.log('A pagina carregou'))

window.addEventListener('beforeunload' , e => e.preventDefault()) 
*/

//12-debounce: Diminui as vezes que o evento é disparado

function debounce(Function, delay) {
    let time
    return (...arg) => {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(() => {
            Function.apply(arg)
        }, delay)
    }
}

window.addEventListener('mousemove', debounce(() => {
    console.log('Executou o evento de mouse')
}, 1000))