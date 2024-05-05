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
/*
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
console.log(meuArray)*/

//12-shift e unshift
/*
let alfabeto = ['a','b','c','d']
console.log(alfabeto)
alfabeto.shift()
console.log(alfabeto)
alfabeto.unshift(5)
console.log(alfabeto)
*/
//13-indexOf e lastIndexOf
/*
let fruits = ['morango','abacate','pera','kiwi','abacate']
console.log(fruits)
console.log(fruits.indexOf('abacate'))
console.log(fruits.lastIndexOf('abacate'))

console.log(fruits[1])
console.log(fruits[fruits.indexOf('abacate')])//faz o mesmo que o comando acima mas se o elemento abacate for mudado de indice apenas essa linha vai imprimir abacate
console.log(fruits.lastIndexOf('abacate'))

//14-slice
let num = [1,2,3,4,5,6,7,8,9,10]
console.log(num.slice(0,6))//imprime no console os elementos do array num, começando do elemento co índice 0 indo até o elemento com indice 5(não vai até o índice 6 porque o último elemento é ignorado)

console.log(num.slice(15,19))//retorna uma lista vazia, pois não existem elementos com indice do numero 15 até o 19 no array num

console.log(num.slice(3))//imprime no console os elementos a partir do elemento co  índice 3 até o último índice
*/

//15-foreach
/*
const num = [1,2,3,4,5]
num.forEach((number) => {
    console.log(`O elemento ${number} está no índice ${number-1}`)
})

const posts = [
    {title: 'Primeiro post',category:'Javascript'},
    {title: 'Segundo post',category:'Python'},
    {title: 'Terceiro post',category:'Java'}
]
posts.forEach((index) => {
    console.log(`${index.title} da categoria ${index.category}`)
})

const people = [
    {name:'weslley' , age:14 , sex:'male'},
    {name:'Pedro' , age:35 , sex:'male'},
    {name:'Joana' , age:42 , sex:'female'},
    {name:'Arthur' , age:21 , sex:'male'}
]
people.forEach((person,indice,array) => {
    if(person.age < 18){
        console.log(`O cliente ${person.name}, na posição ${indice} é menor de idade`)
    }else if(person.age >= 18){
        console.log(`${person.name,person.age,person.sex} está no índice ${indice}`)
    }
    if(indice === people.length - 1){
        console.log(array)
    }

})
*/
//16-includes
/*
const person = ['weslley', 14, 'weslleyresende15@gmail.com', '12qw34er56ty']

const name = person[0]

if (person.includes('weslley') && person.includes('weslleyresende15@gmail.com') && person.includes('12qw34er56ty') && person.includes(14)) {
    console.log(`bem-vindo, ${person[0]}!`)
} else {
    console.log('Não é o cliente cadastrado!')
}

console.log(`O valor retornado foi ${person.includes('weslley')}`)//Retorna true porque o metodo includes() retorna valores booleanos

person[0] = 'Pedro'//guarda o valor original de person
if (person.includes('weslley') && person.includes('weslleyresende15@gmail.com') && person.includes('12qw34er56ty') && person.includes(14)) {
    console.log(`Bem-vindo, ${person[0]}!`)
} else {
    console.log('Não é o cliente cadastrado! \nO cliente cadastrado é ' + name + '.')//a variavel name aqui esta marcada como preterida porque?
}
console.log(`O valor retornado foi ${person.includes('weslley')}`)
console.log(person.includes('Pedro'))//verifica se há um elemento com o valor Pedro no array
//17-reverse em arrays
let testeReverse = [1,2,3,4,5]
let testeReverseOriginal = testeReverse.slice() //guarda o valor original de testeReverse dentro de uma nova variavel
//O metodo slice, quando nenhum valor é usado como parametro ele retorna o array
console.log(testeReverse)

testeReverse.reverse()//inverte a ordem dos elementos dentro do meu array
console.log(testeReverse)

console.log(testeReverseOriginal)


//18-metodo trim() de strings
let text = '    Meu nome é Pedro,\ntenho 22 anos e sou médico!\n\n'
console.log(text,text.length)
console.log(text.trim())
console.log(text.trim().length)

//19-padStart() e padEnd()
let lote = '15'
console.log(lote)
let newLote = lote.padStart(3,'0')
console.log(newLote)

let numero = '1'
let numeroPadStart = numero.padStart(4,'0')
console.log(numeroPadStart)

let numeroPadend = numero.padEnd(4,'0')
console.log(numeroPadend)
//Também se pode mesclar esses dois metodos

//20-split()
let nome = ' Meu nome é João!'
console.log(nome)
let nomeArray = nome.split(' ')
console.log(nomeArray)
let testeBarraN = 'Seja bem-vindo à escola \nestadual da minha cidade'
console.log(testeBarraN)
let testeBarra = testeBarraN.split('\n')
console.log(testeBarra)

//21-join()
let nomeSeeparado = ['Weslley','Augusto','Moraes','Resende']
console.log(nomeSeeparado)
let nomeJunto = nomeSeeparado.join(' ')
console.log(nomeJunto)

let listaDeCompras = ['mouse','teclado','monitor']
console.log(listaDeCompras)
let fraseDeCompra = `Precisamos de ${listaDeCompras.join(' ,')}!`
console.log(fraseDeCompra)

//22-repeat()
let text = 'Texto '
console.log(text)
console.log(text.repeat(5))

//23-rest operator
let somaInfinita = (...argumentos) =>{
    let total = 0

    for(let i = 0;i < argumentos.length; i++){
        total += argumentos[i]
    }
    return total
}
console.log(somaInfinita(1,2,3))
console.log(somaInfinita(490,2,24354,566,57687,6876,4,2,13,4))


//24-for of
const somaInfinita = (...argumentos) => {
    let total = 0

    for (n of argumentos) {
        total += n
    }
    return total
}

console.log(somaInfinita(1, 2, 3, 4, 5))

//25-destructuring em objetos
let userDetails = {
    firstName:'Weslley',
    lastName:'Augusto',
    job:'Programador'
}
const {firstName,lastName,job} = userDetails//cria variaveis com os nomes das propriedades do objeto
console.log(firstName,lastName,job)
console.log(userDetails)

//renomear as variaveis
console.log(firstName)
const {firstName: primeiroNome} = userDetails//renomeia a variavel firstName que vem da propriedade firstName do objeto userDetails para primeiroNome
console.log(primeiroNome)

//26-destructuring em arrays
let fullName = ['Weslley','Augusto']
console.log(fullName)
const [firstName,lastName] = fullName
console.log(firstName)
console.log(lastName)
console.log(fullName)
*/
//27-JSON
//json ivalido
/*
let myJson ='{"nome" : "Weslley", "Age" : 14 , "Skills" : ["javascript","html","css"]}'


//28-conversão de json para objeto e objeto para json
console.log(myJson)
const myObject = JSON.parse(myJson)
console.log(myObject)
console.log(typeof myObject)
const myString = JSON.stringify(myObject)
console.log(typeof myString)
console.log(myString)
myObject.isOpenToWork = true
console.log(myObject)
console.log(typeof myObject)

//jason invalido
const badJson = '{"nome" : Weslley ,"age": 14}'//A string weslley não está entre aspas
const myBadObject = JSON.parse(badJson)
console.log(myBadObject)
*/
