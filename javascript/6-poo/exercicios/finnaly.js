/*
function dividirNumeros(n1,n2){
    if(Object.getPrototypeOf(n1) ===  Number.prototype && Object.getPrototypeOf(n2) === Number.prototype){
        if(n2 === 0){
            throw new Error('Não se pode dividir um numero por 0.')
        }else{
            return n1 / n2
        }
    }else{
        throw new Error('Ambos os argumentos devem ser números.')
    }
}
try{
    console.log(dividirNumeros(10,10))
}catch(err){
    console.log(err)
}finally{
    console.log('Fim da execução.')
}
*/
function checkArray(a) {
    if (Object.getPrototypeOf(a) === Array.prototype) {
        if (a.length === 0) {
            throw new Error(`O array não pode estar vazio.`)
        } else {
            let total = 0
            for (let i = 0; i < a.length; i++) {
                total += a[i]
            }
            return total
        }
    } else {
        throw new Error('Isso não é um array.')
    }
}
try {
    console.log('A soma do numeros do array é: ' + checkArray([]))
} catch (erro) {
    console.log('erro: ' + erro)
}try {
    console.log('A soma dos numeros do array é: ' + checkArray([1,2,3]))
} catch (erro) {
    console.log('erro: ' + erro)
}
finally{
    console.log('Fim da execução.')
}