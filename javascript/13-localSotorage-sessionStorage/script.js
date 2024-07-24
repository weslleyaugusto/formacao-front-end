//1 Inserindo dados
localStorage.setItem('name', 'weslley')//O primeiro argumento é a chave e o segundo o valor delaa

//2 Restart sem perder dados

//3 Resgatar itens
const userName = localStorage.getItem('name')//Acessa o valor da chave name
console.log(userName)

//4 Resgatando um item que não existe
const age = localStorage.getItem('age')//Null
console.log(age)

if (!age) console.log('A idade não foi fornecida!')

//5 Remover item
setTimeout(() => localStorage.removeItem('name'), 2000)

//6 Limpar todos os itens
localStorage.setItem('age', 19)
localStorage.setItem('lastName', 'Resende')
localStorage.setItem('b', true)

console.log(typeof (localStorage.getItem('age')))
console.log(typeof (localStorage.getItem('lastName')))
console.log(typeof (localStorage.getItem('b')))

setTimeout(() => localStorage.clear(), 2000)