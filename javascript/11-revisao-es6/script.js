//1-var, let e const
/*
var a = 10
var b = 15

if (a < b) {
    var n1 = 5//substitui o valor anterior por ser declarado com escopo global
    console.log(n1)
}
console.log(a)

let c = 10
let d = 15

if (c < d) {
    let c = 5//Dentro do if, é criada uma nova variavel, que é diferente da varivel declarada fora do bloco
    console.log(c)
}
console.log(c)
const name = 'Caio'

function logName(){
    const name = 'Weslley'
    console.log(name)
}
logName()
console.log(name)
*/
//2-Arrow functions
/*
const soma = function (a, b) {
    return a + b
}

const soma2 = (a, b) => a + b//Pode-se omitir o retorno e o bloco de {} se a função tiver só uma linha

console.log(soma(1, 1))

console.log(soma2(2, 2))

const greeting = name => 'Olá, ' + name

console.log(greeting('Weslley'))

const greeting2 = name => {
    if (name) {
        return 'Olá, ' + name + '.'
    } else {
        return `Olá`
    }
}

console.log(greeting2('Weslley'))
console.log(greeting2())

//this
const user = {
    name: 'Theo',
    logName() {
        setTimeout(() => {
            console.log(this)//Dentro de uma arrow function, this se refere ao objeto
            console.log(this.name)
        }, 1000)
    },
    logNameArrow(){
        setTimeout(function () {
            console.log(this)//Em um função normal, this se refere ao objeto window
            console.log(this.name)
        },1200)
    }
}
user.logName()
user.logNameArrow()
*/
//3-filter()
/*
/é um metodo que remove elementos especificos de um array
const arr = [1, 2, 3, 4, 5]
console.log(arr.filter(n => {
    if (n >= 3) {
        return n
    }
}))

const users = [
    { name: 'Weslley', avaible: true },
    { name: 'Pedro', avaible: true },
    { name: 'Caio', avaible: false },
    { name: 'João', avaible: true }
]

const avaibleUsers = users.filter(user => {
    if (user.avaible === true) {
        return user
    }
})

let test = []

users.forEach(e => {
    if(e.avaible === true){
        test.push(e)
    }
})

console.log(test)

for (pos in avaibleUsers) {
    console.log(avaibleUsers[pos].name + ' está disponivel para fazer um freelances')
}
*/
//4-map()
/*
//map é um metodo que altera os elementos que precisamos
const products = [
    {name: 'Camisa', price: 20.99, category: 'Roupas'},
    {name: 'Celular', price: 100.99, category: 'Eletronicos'},
    {name: 'Micro-ondas',price: 70.99, category: 'Eletrodomesticos'},
    {name: 'Calça', price: 25.99, category: 'Roupas'}
]

products.map(product => {
    if(product.category === 'Roupas'){
        product.discount = 15
    }
})

console.log(products)
*/
//5-Template literals
/*
const nome = 'Weslley'
const age = 21

console.log(`O meu nome é ${nome} e eu tenho ${age} anos de idade`)
*/
//6-destructuring
//quando o destructuring for aplicado à um array, na criação das variaveis deve ser usado []
/*
const fruits = ['Maçã', 'Mamão', 'Abacate']
const [f1, f2, f3] = fruits//Cria uma variavel para cada elemento do array
console.log(f1)//Imprime Maçã

const product = {
    nome: 'Calça',
    price: 20.99,
    category: 'Roupas'
}
//quando o destructuring for aplicado à um array, na criação das variaveis deve ser usado []
const {nome,price,category} = product

console.log(product)
console.log(nome,price,category)
*/
//7-Spread operator
/*
const a1 = [1, 2]
const a2 = [3, 4]

console.log(a1, a2)
const a3 = [...a1, ...a2, 5, 6]//une dois arrays em um array e adiciona 5 e 6 nele

console.log(a3)
const a4 = [1, 2, ...a2]

console.log(a4)

const carName = { carName: 'Civic' }
const carBrand = { carBrand: 'Honda' }
const carYear = { carYear: 2010 }

const civic = { ...carName, ...carBrand, ...carYear }

console.log(civic)
*/
//8-classes
/*
class product {
    constructor(name, price) {//recebe dois parametros para criar propriedades em objetos
        //this se refere ao objeto que está sendo criado
        this.price = price
        this.nome = name
    }

    discount(discount) {
        return (this.price * (100 - discount) / 100).toFixed(2)
    }
}
const banana = new product('banana', 1.03)
//new: novo, product: classe. Cria um novo objeto da classe produto
console.log(banana)
console.log(banana.discount(11))
console.log(banana.discount(45))
console.log(banana.discount(23))
*/
//9-herança
class product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class fruit extends product {
    constructor(name, price, color) {
        super(name, price)

        this.color = color
    }
    showColor(){
        console.log(`As cores de ${this.name}, são:`)
        console.log(this.color.forEach(e => {
            console.log(e)
        })  )
    }
}

let banana = new fruit('banana', 1.54, ['amarelo','preto']) 
console.log(banana)
console.log(banana.showColor())

console.log(Object.prototype)