"use strict"
//1-setTimeout
/*
console.log('Ainda não executou')

setTimeout(function () {//função anonima que vai ser 
    console.log('Foi executado.')
}, 5000)//5000 é o tempo que a função vai demorar para começar a ser executada

console.log('Ainda não executou 2')
//recebe 2 parametros: uma função anônima que será executada e o tempo que vai demorar para executa-lá em milissegundos
*/
/*
//2-setInterval
console.log('espere pela execução do ccodigo')

setInterval(function () {//funciona como o setTimeout() porem é executado infinitamente com um intervalo definido entre as execuções
    console.log('Intervalo executado')
}, 2000)
*/
//3-promises
/*
const promessa = Promise.resolve(10 + 10)//A variavel promessa recebe 20, pois é o valor da promessa resolvida

console.log('Espere o resultado...')

setTimeout(function (){
    promessa.then((value) =>{
        console.log(`O resultado da soma é ${value}`)
        return value + 5//retorna 20(o valor de value) + 5
    })
},2000)
*/
/*
const promessa = Promise.resolve(5 + 5)//cria uma promise e resolve ela

promessa.then((value) => {//acessa o valor da promessa e cria uma função pra manipula-lo caso o valor seja resolvido
    console.log(`A soma é ${value}`)
    return value//retorna o valor da promise
})

//os dois metodos then acessam o valor retornado da promise na função
.then((value) => value  - 1)
.then((value) => console.log(value))
*/
/*
//4-falhas nas promises
Promise.resolve(5 * 'asd')//Ocorrerá um err0
.then((n) =>{
    if(Number.isNaN(n)){//Verifica se n é um numero
        throw new Error('Valores inválidos.')//lança um erro
    }
})
.catch((erro) => {//Funciona como o catch do try catch mas com promises(o erro da promise, no caso, uma exception)
    console.log(erro)
})
*/
/*
//5-reject
function checkNumber(n){
    return new Promise((resolve,reject) =>{
        if(n < 10){
            reject('Numero muito baixo.')//Se o codigo for rejeitado, o valor de reject vai para o catch
        }else{
            resolve('O numero é maior do que 10.')//Se o codigo for resolvido, o resultado vai para then
        }
    })
}
let n1 = checkNumber(10)
let n2 = checkNumber(9)

n1.then((value) => console.log(value))
.catch((erro) => console.log('Um erro ocorreu ' + erro))

n2.then((value) => console.log(value))
.catch((erro) => console.log(`Um erro ocorreu ` + erro))
*/
//6-resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1 + 1)
        reject('Erro.')
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    resolve(2 + 2)
    reject('Erro.')
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3 + 3)
        reject('Erro.')
    }, 2000)
})

p1.then((v) => console.log(v))
.catch((erro) => console.log(erro))

p2.then((v) => console.log(v))
.catch((erro) => console.log(erro))

p3.then((v) => console.log(v))
.catch((erro) => console.log(erro))

Promise.all([p1,p2,p3])//retorna uma promise, por isso o then, catch e finally podem ser usados
//Esse trecho de codigo so é executado apos a resolução das 3 promises
.then((v) => console.log(v))
let promessa = Promise.resolve('Ola'),
promessa2 = Promise.resolve('Mundo'),
promessa3 = Promise.resolve('tudo bem?')

let promessas = Promise.all([promessa,promessa2,promessa3])
promessas.then(resultado => console.log(resultado))

/*
//7-Async function
async function soma(a, b) {
    return a + b
}
soma(1, 2).then((value) => console.log(value))
soma(1, 'o').then((value) => console.log(value))

console.log('Teste async')
*/
/*
//8-async await
function delay(){
    return new Promise((resolve) => {
        setTimeout(() => resolve('Promise resolvida.'),1000)
    })
}

async function call(){
    console.log('Chamada da promise.')
    const p1 = await delay()
    console.log('resultado: ' + p1)
}
call()
*/
/*
//9-generators
function* generator(){
    yield 1 
    yield 2
    yield 3
    yield 4
}

let teste = generator()

console.log(teste.next().value)
console.log(teste.next().value)
console.log(teste.next().value)
console.log(teste.next().value)
*/
