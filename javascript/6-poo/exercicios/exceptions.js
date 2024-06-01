/*
const dividir = (n1,n2) =>{
    if(n2 === 0){
        throw new Error('Erro: não é possível dividir um numero por 0!')
    }
    else{
        return n1 / n2
    }
}
function testarDivisao(n1,n2){
    try{
        console.log(dividir(n1,n2))
    }catch(erro){
        console.log('Erro: não é possivel dividir um numero por 0!')
    }
}
testarDivisao(10,2)
testarDivisao(18,0)
testarDivisao(143,7)
testarDivisao(112,2)
testarDivisao(45,6)
*/
/*
function verificarIdade(idade){
        if(Object.getPrototypeOf(idade) === Number.prototype){//vrifica se idade é um number
            if(idade < 18){
                throw new Error('Voçê deve ter pelo menos 18 anos.')//lança um erro caso a verificação seja verdadeira
            }else{
                return idade//retorna o valor de idade
            }
        }else{
            throw new Error('Digite um numero válido.')
        }
}
function testarIdade(idade){
    try{
        return verificarIdade(idade)
    }catch(erro){
        console.log(erro)
    }
}
console.log(`Você tem ${verificarIdade(18)} anos de idade.`)
console.log(`Você tem ${verificarIdade(17)} anos de idade.`)
*/
/*
function verificarString(str){
    if(Object.getPrototypeOf(str) === String.prototype){
        return str
    }else{
        throw new Error('o valor fornecido não é uma string.')
    }
}
function testarString(str){
    try{
        console.log(verificarString(str)+' é uma string.')
    }catch(erro){
        console.log('Um erro ocorreu ' + erro)
    }
}
testarString('Ola mundo!')
testarString({})
*/
function verificarNumero(n){
    if(Object.getPrototypeOf(n) === Number.prototype){
        return n
    }else{
        throw new Error(`${n} não é um número.`)
    }
}
try{
    console.log(`${verificarNumero(10)} é um número.`)
}catch(erro){
    console.log(erro)
}