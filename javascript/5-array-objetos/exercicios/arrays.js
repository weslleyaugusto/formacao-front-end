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
/*
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
console.log(encontrarMaiorNumero(10))]
*/
/*
let arr = [2,43,6,3,3,2,8,76]

let pares = arr.filter(n => n % 2 === 0)

console.log(pares)
*/
const produtos = [
    { id: 1, nome: 'Camiseta', categoria: 'roupas', preco: 39.99 },
    { id: 2, nome: 'Tênis', categoria: 'calçados', preco: 129.90 },
    { id: 3, nome: 'Celular', categoria: 'eletronicos', preco: 899.90 },
    { id: 4, nome: 'Livro', categoria: 'livros', preco: 29.90 },
    { id: 5, nome: 'calça', categoria: 'roupas', preco: 49.90 },
    { id: 6, nome: 'chapéu', categoria: 'roupas', preco: 29.90 },
    { id: 7, nome: 'relogio', categoria: 'eletronicos', preco: 76.90}
    // ... outros produtos
];

function filterRoupas(produtos){
    return produtos.filter(produto => produto.categoria === 'roupas')
}

function filterEletronicos(produtos){
    return produtos.filter(produto => produto.categoria === 'eletronicos')
}

function filterCalcados(produtos){
    return produtos.filter(produto => produto.categoria === 'calçados')
}

function filterLivros(produtos){
    return produtos.filter(produto => produto.categoria === 'livros')
}
/*
console.log(filterRoupas(produtos))
console.log(filterEletronicos(produtos))
console.log(filterCalcados(produtos))
console.log(filterLivros(produtos))*/

function filterPreco(produtos){
    return produtos.filter(produto => produto.preco >= 40)
}

console.log(filterPreco(produtos))

function filterprecoECategoria(nome, categoria, preco){
    return
}