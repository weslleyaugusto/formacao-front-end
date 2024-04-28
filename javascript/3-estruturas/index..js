//5-objeto math
let n1 = 10
n2 = 7
n3 = 2
n4 = 5.13
console.log(Math.max(n3, n1, n2))
console.log(Math.floor(n4))
console.log(Math.ceil(n4))

//6-objeto console
console.log('teste')
console.debug('teste 2')
console.error('erro')
console.info('teste info')
console.warn('aviso')
console.table('1 2 3 4 5 6')

//7-if
let n = 10
m = 5
if (n > 5) {
    console.log(`${n} é maior do que ${m}`)
}

//8-else
let nome = 'weslley'
if (nome === 'weslley') {
    console.log(`Olá, ${nome}, seja bem-vindo!`)
} else {
    console.log('Forneça-nos seu nome!')
}

//9-else if
if (1 > 2) {
    console.log('1 é maior do que 2')
} else if (2 < 1) {
    console.log('2 é menor do que 1')
} else if (3 == '3') {
    console.log(3 + ' é igual a 3')
} else {
    console.log('dados inválidos')
}

//10-While
let c = 5
while (c >= 1) {
    console.log(c)
    c--
}

//11-do while
c = 10
do {
    console.log('o valor de c é: ' + c)
    c--
} while (c > 1)

//12-for
for (let t = 5; t >= 1; t--) {
    console.log(t)
}

//14-break em um loop
for (let g = 10; g >= 1; g--) {
    console.log(`O valor de g é ${g}`)
    if (g === 5) {
        break
    }
}

//15-continue
for (let s = 0; s < 10; s++) {

}

//16-switch
let idade = 15
switch (idade) {
    case 1:
        console.log('Você tem 1 ano')
        break
    case 14:
        console.log('voce tem 14 anos')
        break
    default:
        console.log('idade não encontrada')
}