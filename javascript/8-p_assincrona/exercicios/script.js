/*
exercicios de setTimeout
function print(str){
    console.log(str)
}
setTimeout(function (){
    print('Ola')
}, 2000)
*/
/*
//exercicio de promises
const myPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('Ola mundo!')
    }, 2000);
})
myPromise.then((str) => {
    console.log(str)
    return str + 'Como você está?'
})
.then((str) => console.log(str))
.catch((erro) => {
    console.log(erro)
})
*/
/*
const myPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('Primeira promise!')
    }, 2000);
})
myPromise.then((v) =>{
    console.log(v)
}).catch((erro) =>{
    console.log(erro)
})
const myPromise2 = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Segunda promise!')
    },1000)
})
myPromise2.then((str) => console.log(str))
*/
/*
const myPromise = new Promise((resolve, reject) =>{
    let soma = 10 + 10
    if(soma === 29){
        resolve('Tudo certo!')
    }else{
        reject(new Error('O numero não esta correto.'))
    }
})
myPromise.then((value) => console.log(`O resultado da promise é: ${value}.`))
.catch((erro) => console.log(`Um erro ocorreu ${erro}`))
.finally(() => console.log('Fim  do codigo.'))
console.log('Esperando promise')
*/
/*
function getUserData(obj){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(Object.getPrototypeOf(obj) === Object.prototype){
                resolve(obj)
            }else{
                reject('Não foi possivel acessar os seus dados de usuario. Tente novamente mais tarde.')
            }
        },2000)
    })
}
const data = {name: 'Weslley' , email:'testedemail1@gmail.com' , age: 22}
getUserData(data).then((obj) => console.log(obj))
.catch((erro) => console.log(`Um erro ocorreu ${erro}.`))
.finally(() => console.log('Processo finalizado.'))
*/
/*
function getServerData1(obj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(obj)
            reject('Não foi possivel acessar seus dados.')
        }, 1300)
    })
}

let user = { nome: 'weslley', idade: 22, sex: 'masculino' }
let dataUser = getServerData1(user)

dataUser.then((obj) => console.log('Usuario', obj))
    .catch((erro) => console.log(`Um erro ocorreu ${erro}`))
    .finally(() => console.log('Requisição 1 completada.'))

function getServerData2(obj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(obj)
            reject('Não foi possivel acesar seus dados.')
        }, 1700)
    })
}

let brother = { nome: 'Carlos', idade: 33, sex: 'Masculino' }
let dataBrother = getServerData2(brother)

dataBrother.then((obj) => console.log('Irmão do usuario', obj))
    .catch((erro) => console.log('Um erro ocorreu', erro))
    .finally(() => console.log('Requisição 2 completada.'))

Promise.all([getServerData1(user), getServerData2(brother)])
    .then((value) => console.log('Dados combinados', value))
    .catch((erro) => console.log('Um erro ocorreu', erro))

function printData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`O usuario ${user.nome} de ${user.idade} anos de idade de sexo ${user.sex}, tem um irmão chamado ${brother.nome} de ${brother.idade} anos de idade de sexo ${brother.sex}.`)
        }, 1800)
    })
}
printData().then((value) => console.log(value))
    .finally(() => console.log('O codigo foi finalizado.'))
    * /
/*
function getWeatherCity(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({city: 'Belo Horizonte', temperatura: 27 , descricao: 'Ensolarado'})
            reject('Não foi possivel fazer a previsão do tempo nessa cidade.')
        },1300)
    })
}
getWeatherCity().then((obj) => console.log(`A temperatura de ${obj.city} é ${obj.temperatura} graus celsius. O tempo está ${obj.descricao}.`))
.catch((erro) => console.log('Um erro ocorreu' , erro))
.finally(() => console.log('Previsão concluida.'))
*/

function getWeatherCity(city, temp) {
    return new Promise((resolve, reject) => {
        console.log('Fazendo requisição ao servidor...')
        setTimeout(() => {
            if (Object.getPrototypeOf(city) === String.prototype) {
                if (Object.getPrototypeOf(temp) === Number.prototype) {
                    let description
                    if (temp < 10) {
                        description = 'Esta um clima frio.'
                    } else if (temp < 20) {
                        description = 'Esta um clima ameno.'
                    } else if (temp < 30) {
                        description = 'Esta um clima quente.'
                    } else {
                        description = 'Esta um clima escaldante.'
                    }
                    resolve(`Hoje, na cidade ${city}, está fazendo ${temp} graus celsius. ${description}`)
                }
            } else {
                reject('Dados ivalidos.')
            }
        }, 2000)

    })
}

getWeatherCity('Piracema', 20).then((value) => console.log(value))
setTimeout(() => {
    console.log('Requisição completada.')
}, (2001))

/*
function getData(){
    return new Promise((resolve) => {//retorna uma promise resolvida
        setTimeout(() => {
            console.log('Acessando servidor...')
            resolve('Resolvida.')
        }, 1000)
    })
}

async function getDataAsync(){
    const p1 = await getData()//espera a promise retornada de getData() ser resolvida  para guardar seu valor em uma variavel
    console.log('Fazendo requisição...')
    console.log('A promise foi' , p1)
}

getDataAsync()

function promise(){
    return new Promise((resolve, reject) => {
        resolve('Resolveu.')
        reject('Rejeitou.')
    })
}
promise().then((v1) => {
    console.log(v1)
    return v1
})
.then((v1) => {
    console.log(v1)
})
.then((v1) => console.log(v1))//O resultado é undefined porque o then() anterior não retorna nada, e os then sequenciais usam do valor do retorno do ultimo then, como não há retorno, o valor é undefined
*/
/*
function getUserId(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(erro => console.log(erro))
}

async function showName(id) {
    try {
        const user = await getUserId(id)
        console.log(user)

        console.log(`O nome do usuario é ${user.data.first_name}`)
    } catch (erro) {
        console.log(`Um erro ocorreu: ` + erro)
    }
}

showName(15)
*/
/*
async function consultarDados(id) {
    const resposta = await fetch(`https://reqres.in/api/users?id=${id}`);
    return resposta.json();
  }
  
  async function processarDados(data) {
    return await consultarDados(data);
  }
  
  async function mostrarResultado(id) {
    try {
      const dados = await processarDados(id);
      console.log('Dados recebidos:', dados);
    } catch (erro) {
      console.error('Erro na requisição:', erro);
    }
  }
  
  mostrarResultado(1);
*/
/*
async function resolver(){
    return new Promise((resolve) => {
        setTimeout(() => resolve('Promessa resolvida.'),2000)
    })
}

async function teste() {
    await resolver().then(resultado => console.log(resultado))
}

teste()
*/
/*
function* print(){
    yield 'Teste de generator'
    yield 'Teste de generator 2'
    yield 'Teste de generator 3'
}

console.log(print().next())
console.log(print().next())
console.log(print().next())
*/