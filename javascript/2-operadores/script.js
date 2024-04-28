//1-Number
console.log(typeof 2)
console.log(typeof 2.0)
console.log(typeof -4)

//2-operaçôes aritiméticas
console.log(1 + 3)
console.log(8 * 9)
console.log(8 / 2)
console.log(9 - 3)
console.log(11 % 2)
console.log(1 + (10 * 2) + 7 - 3)

//1-special numbers
let string = "Hoje eu comi feijão!"

console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof NaN)
console.log(932 / string.length)

//4-strings
console.log('ola mundo!')
console.log('tenho 14 anos de idade!')
console.log("Me chamo Weslley!")
console.log(`Estou estudando javascript!`)
console.log('14')

console.log(typeof 'ola mundo!')
console.log(typeof 'tenho 14 anos de idade!')
console.log(typeof "Me chamo Weslley!")
console.log(typeof `Estou estudando javascript!`)
console.log(typeof '14')

//5-caracteres especiais
console.log('Isso é um texto com \nquebra de linha')
console.log('Isso é um texto com \tespaço')

//6-concatenação
console.log('Meu nome é Weslley e eu tenho '+14+' anos de idade.')
console.log(`Meu nome é Weslley e eu tenho ${14} anos de idade.`)

//7-template string
console.log(`A soma de 2 + 2 é igual à: ${2 + 2}`)
console.log(`Podemos executar qualquer coisa aqui: ${console.log('teste')}`)

//8-Booleans
console.log(12 < 5)
console.log(8 > 4)

//9-Comparações: < menor, > maior, <= menor ou igual, >= maior ou igual, == igual, === idêntico, != diferente
console.log(5 <= 5)
console.log(5 >= 5)
console.log(10 == 10)
console.log(10 != 2)//verifica se 10 é diferente de 2
console.log(10 <= '10')//verififca se 10 é menor ou igual à '10'

//10-idêntico
console.log(10 == "10")//verifica de se 10 é igual a "10"
console.log(10 === "10")//verifica se 10 é idêntico à "10"
console.log(10 != '10')
console.log(10 !== '10')

//11-operadores lógicos

console.log(true && true)
console.log(true && false)
console.log(true || false)
console.log(!true)
console.log(5 > 2 && 2 < 10)
console.log(5 > 2 && 1 === 'Weslley')
console.log(5 > 2 || 1 === 'Weslley')

//12-empty values
console.log(typeof null, undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null == false)
console.log(undefined == false)

//13-Mudança de tipos
console.log(9 * null)
console.log(9 * '8')
console.log(9 * undefined)
console.log(9 + '9')
console.log(9 - '1')
console.log(9 * Infinity)