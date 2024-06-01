/*
function somaArray(array){
    if(Object.getPrototypeOf(array) === Array.prototype){
        if(array.length == 0){
            throw new Error('O array não pode estar vazio.')
        }else{
            let total = 0
            for(let pos in array){
                total += array[pos]
            }
            return total
        }
    }else{
        throw new Error('Isso não é um array.')
    }
}
let meuArray = [23,54,32,53]
console.log(somaArray(meuArray))
console.log(somaArray([1,2,3,4]))
*/
function encontrarMaiorNumero(a){
    if(Object.getPrototypeOf(a) === Array.prototype){
        if(a.length === 0){
            throw new Error('O array não pode estar vazio.')
        }else{
            return Math.max.apply(null,a)
        }
    }else{
        throw new Error('Isso não é um array.')
    }
}
let meuArray = [1,2,3,4,5]
console.log(encontrarMaiorNumero(10))