//1-strict
/*
"use strict"
//nome = 'weslley' não funciona por não declarar let, const ou var antes
let nome = 'weslley'
console.log(nome)

//2-console.log | muito usado para debgug
let a = 1
let b = 2
if(a == 1){
    a = b + 2
}
console.log(a)

//3-debugger
let num = 3
for(let i = 0;i < num;i++){
    console.log(`O valor de i é ${i}`)
}
debugger
let n = 3
for(let i = 0;i < n;i++){
    console.log(`O valor de n é ${i}`)
}
*/
/*
//4-tratamento de dados
function isNum(n){
    let result = Number(n)
    if(Number.isNaN(result)){
        console.log('Digite um numero valido' + result)
        return
    }
    console.log('Valor correto'+ result)
    return result
}
isNum(10)
isNum('10')
isNum([])
isNum({})
isNum('teste')
*/
/*
//5-exceptions
function dividir(n1,n2){
    if(n2 === 0){
        throw new Error('Erro: não é possivel dividir um numero por 0')
    }else{
        return n1 / n2
    }
}
console.log(dividir(10,2))
/*console.log(dividir(10,0)) causa um erro */
/*
//6-try catch
function checkNumber(n){
    if(Object.getPrototypeOf(n) === Number.prototype){
        return n
    }else{
        throw new Error(`Isso não é um número.`);
    }
}
try{
    console.log(checkNumber(10))
}catch(erro){
    console.log(erro)
}
*/
/*
//7-finnaly
function checkNumber(n){
    if(Object.getPrototypeOf(n) === Number.prototype){
        return `${n} é um número.`
    }else{
        throw new Error('Isso não é um número.')
    }
}
try{
    console.log(checkNumber(10))
}catch(erro){
    console.log(erro)
}finally{
    console.log('Fim do teste de finnaly')
}
*/
//8-assertions
function checkArray(a){
    if(Object.getPrototypeOf(a) === Array.prototype){
        if(a.length === 0){
            throw new Error('O array não pode estar vazio.')
        }else{
            return `Isso é um array.`
        }
    }else{
        throw new Error('Isso não é um array.')
    }
}
console.log(checkArray([12]))
console.log(checkArray([]))
console.log(checkArray(''))