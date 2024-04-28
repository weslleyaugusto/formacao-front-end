//1-Criando uma função
function somar(n1, n2) {//pass dois parâmetros chamados n1 e n2 que funcionam apenas na função e atuam como variáveis
    let n3 = n1 + n2
    return n3//retorna o valor de n3 quando a função for chamada
    //function
}
console.log(somar(10, 5))

const minhaFuncao = function(txt){//função dentro de uma variável
    console.log(`Seja bem-vindo, ${txt}`)
}
minhaFuncao('weslley')

//2-return
const a = 10
b = 21
c = 38
d = 45
e = 5
function parImpar(n1){
    if(n1 % 2 === 0){
        return 'par'
    }else{
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
/*
let y = 40
function escopo(){
    let y = 10
    console.log(y)
} 
escopo()
console.log(y)*/

//4-escopo aninhado
let m = 10
function aninhado(){
    let m = 20
    if(true){
        let m = 30
        if(true){
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}
aninhado()
console.log(m)
