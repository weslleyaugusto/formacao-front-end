//-array
/*
let meuArray = [10,'Weslley',true,1.5]
for(let i = 0;i < 4;i++){
    console.log(meuArray[i])
}
console.log(typeof meuArray)

let itens = ['lápis' , 14 , true , []]
for(let i = 0;i < itens.length;i++){
    console.log(typeof itens[i])
}

//2-propriedades
/*
const numeros = [2,3,6,9,7]

console.log(numeros.length)
for(let i = 0;i < numeros.length;i++){
    console.log(numeros[i])
}
let nomes = ['weslley','augusto','moraes','resende']
for(let i = 0;i < nomes.length;i++){
    console.log(nomes[i].length)
}

//4-métodos
const myNumbers = [1,2,3,4]
const otherNumbers = [5,6,7,8]
const allNumbers = myNumbers.concat(otherNumbers)
console.log(allNumbers)

const sobrenomes = ['silva','paacheco']
const names = nomes.concat(sobrenomes)//concat() junta dois arrays
console.log(names)

const ola = 'olá, mundo!'
console.log(ola.toUpperCase())//toUpperCase é um metodo interno do tipo string, ele transforma todas as letras do texto em maiusculas
console.log(typeof ola.toUpperCase)

console.log(ola.indexOf('!'))//Procura o índice do caractere dentro da minha string

//5-objetos
const meuObjeto = {nome: 'Weslley', idade: 14, cidade: 'Piracema'}
console.log(meuObjeto.nome)
console.log(meuObjeto)
console.log(meuObjeto.nome.length)
console.log(typeof meuObjeto.idade)


//6-criando e deletando propriedades
let carro = {motor: 1.0, marca: 'fiat', modelo: 'uno', km: 40.654}
console.log(carro)
carro.portas = 4
console.log(carro)
delete carro.modelo
console.log(carro)
*/

//7-mais sobre objetos
/*
const car = {motor: 1.0, marca: 'fiat', modelo: 'uno', km: 40.654}//decclara um objeto
console.log(car)
car.motor = 2.0//muda a  propriedade motor do objeto car para 2.0
car.marca = 'volkswagen'
console.log(car)
console.log(typeof car.modelo)//escreve no console o tipo da propriedade modelo dentro do objeto car
car.modelo = 3//muda o valor da propriedade modelo do objetto car para 3
console.log(typeof car.modelo)

//assign
const obj = {a: 'teste', b: true,c: 14}
console.log(obj)

console.log(obj instanceof Object)

const obj2 = { d:[] }
console.log(obj2)
console.log(typeof obj2.d)
Object.assign(obj2,obj)
console.log(obj2)

//8-conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log("______________________________")
console.log(Object.entries(car))

//9-mutação
const a = {nome:'weslley'}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 14

console.log(a)
console.log(b)

delete b.age
console.log(a)
console.log(b)

//10-loops em arrays
let n = [1,2,3,4,5,6,7,8,9,10]
/*
for(let pos in n){
    console.log(n[pos])
}
*/
/*
for(let pos = 0;pos <= n.length - 1;pos++){
    console.log(n[pos])
}
*/
//11-push e pop
let meuArray = ['a','b','c','d']
console.log(meuArray)

meuArray.push('e')
console.log(meuArray)
meuArray.pop()
console.log(meuArray)
console.log(meuArray.length)

for(let i = 0;i < meuArray.length;i++){
    console.log(meuArray[i])
}
meuArray.push('e')
for(let i = 0;i < meuArray.length;i++){
    console.log(meuArray[i])
}
meuArray.pop()
console.log(meuArray)

meuArray.push('f','g','h')
console.log(meuArray)

//12-shift e unshift
