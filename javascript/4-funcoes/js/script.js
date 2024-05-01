//1-Criando uma função
/*
function somar(n1, n2) {//pass dois parâmetros chamados n1 e n2 que funcionam apenas na função e atuam como variáveis
    let n3 = n1 + n2
    return n3//retorna o valor de n3 quando a função for chamada
    //function
}
console.log(somar(10, 5))

const minhaFuncao = function (txt) {//função dentro de uma variável
    console.log(`Seja bem-vindo, ${txt}`)
}
minhaFuncao('weslley')

//2-return
const a = 10
b = 21
c = 38
d = 45
e = 5
function parImpar(n1) {
    if (n1 % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
console.log('O número é ' + parImpar(a))
console.log('O número é ' + parImpar(b))
console.log('O número é ' + parImpar(c))
console.log('O número é ' + parImpar(d))
const res = parImpar(e)
console.log('teste de função com variável: ' + res)

//3-escopo das funções
let y = 40
function escopo(){
    let y = 10
    console.log(y)
} 
escopo()
console.log(y)*/

//4-escopo aninhado
/*
let m = 10
function aninhado() {
    let m = 20
    if (true) {
        let m = 30
        if (true) {
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}
aninhado()
console.log(m)

//5-Arrow functions
const testeArrow = () => {
    console.log('Teste de função de flecha')
}
testeArrow()

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log('par')
    } else {
        console.log('impar')
    }
}
parOuImpar(3)

//6-arrow function mais resumida
const raiz = (x) => x * x / 2

console.log(raiz(5))

function Hello() {
    console.log('Olá, mundo!')
}

const hello = () => Hello()

hello()

//7-parametro opcional
function multiplication(m, n) {
    if (n === undefined) {
        return m * 2
    } else {
        return m * n
    }
}
console.log(multiplication(5))
console.log(multiplication(7, 10))

const greeting = (name) => {
    if (name === undefined) {
        console.log('ola!')
    } else {
        console.log(`Olá, ${name}, seja bem-vindo!`)
    }
}
greeting()
greeting('weslley')

//8-argumento default
const customGreeting = (name,greet = 'ola') =>{
    return `${greet}, ${name}`
}
console.log(customGreeting('weslley','bom dia'))
console.log(customGreeting('weslley'))

function repeat(text, repeat = 2) {
    let c = 0
    for (let i = 0; i < repeat; i++) {
        console.log(text + ' ' + c)
        c++
    }
}
repeat('ola',5)

//9-closures
function ola(){
    let txt = 'ola, mundo 4!'
    function print(){
        console.log(txt)
    }
    print()
}
ola()*/

//10-mais sobre closures
const multiplication = (n) =>{
    return (m) => {
        return n * m
    }
}
const c1 = multiplication(5)

const c2 = multiplication(10)
console.log(c1)
console.log(c2)
console.log(c1(6))
console.log(c2(8))

//11-recursão
const untillTen = (n, m) => {
    if(n < 10){
        console.log('A função parou de ser executada!')
    }else{
        const x = n - m
       console.log(x) 
       untillTen(x, m)
    }
}
untillTen(100,7)

//fatorial
const fatorial = (x) =>{
    if(x === 0){
        return 1
    }else{
        return x * fatorial(x - 1)
    }
}

let num = 5
let result = fatorial(num)
console.log(`O fatorial de ${num} é ${result}!`)