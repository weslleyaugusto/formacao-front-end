//1-metodos
/*
let person = {
    name: 'Weslley',
    speak: function (frase){
        console.log(frase + person.name)
    }
}
console.log(person.name)
person.speak('Meu nome é ')

//2-this
const pessoa = {
    name:'Weslley',
    getName: function (){
        return this.name 
    },
    setName: function (newName){
        this.name = newName
    }
}
console.log(pessoa.getName())//Os dois fazem a mesma função mas este usa this para  se referenciar ao objeto
console.log(pessoa.name)
pessoa.setName('caio')
console.log(pessoa.getName())

//3-prototype
const text = 'asd'
const bool = true
const number = 10
const meuArray = [1,2,3,4,5]
const object = {}

console.log(Object.getPrototypeOf(text))//acessa o prototipo de text que tem o valor 'asd'(string)
console.log(Object.getPrototypeOf(bool))//acessa o prototipo de bool que tem o valor bool(boolean)
console.log(Object.getPrototypeOf(number))//acessa o prototipo de number que tem o valor 10(number)
console.log(Object.getPrototypeOf(array))//acessa o prototipo de meuArray que tem o valor meuArray(array)
console.log(Object.getPrototypeOf(object))//acessa o prototipo de object (object)

console.log(Object.getPrototypeOf(meuArray) === Array.prototype)//verifica se a variavel meuArray tem o prototipo igual ao prototipo dos arrays

//4-mais sobre prototypes
const myObject = {
    a: 'b'
}
console.log(Object.getPrototypeOf(myObject))//acessa o prototipo de myObject
console.log(Object.getPrototypeOf(myObject) === Object.prototype)//verifica se myObject tem o prototipo igual ao prototipo dos objetos

const secondObject = Object.create(myObject)//cria um objeto
console.log(secondObject)
console.log(secondObject.a)
console.log(Object.getPrototypeOf(secondObject) === myObject)

//5-classes baiscas
const cachorro = {raca: null,patas:4}

const buldog = Object.create(cachorro)//cria um objeto com o prototipo de cachorro
buldog.raca = 'Buldog'

console.log(buldog)
console.log(buldog.patas)

const podlle = Object.create(cachorro)//cria um objeto com o prototipo de cachorro
podlle.raca = 'Podlle'

console.log(podlle)
console.log(podlle.patas)

//6-funções como classes - função construtora => cria um objeto
const criarCachorro = (nome,raca) => {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca
    return cachorro
}
const bob = criarCachorro('bob','buldog')
console.log(bob)

const rufus = criarCachorro('rufus','pincher')
console.log(rufus)

console.log(Object.getPrototypeOf(bob))
console.log(Object.getPrototypeOf(rufus))
let teste = {
    nome:'weslley',
    idade:14
}
console.log(teste)
delete teste.idade
console.log(teste)
console.log(Object.getPrototypeOf(teste))
*/
/*
//7-Funções como classes
function cachorro(nome, raca) {//cria uma função construtora(função que cria um objeto)
    this.name = nome
    this.raca = raca
}
let husk = new cachorro('Ozzy', 'Husk')//cria uma nova instância da classe cachorro
let podlle = new cachorro('Lola', 'Podlle')//cria uma nova instância da classe cachorro
console.log(husk)
console.log(podlle)
//8-metodos na função construtora
cachorro.prototype.latir = () => {//adiciona um metodo no prototype dos objetos da classe cachorro
    return 'Au au au!'
}
console.log('O husk latiu: ' + husk.latir())
console.log(Object.getPrototypeOf(husk))
console.log(cachorro.prototype)
*/
/*
//9-classes em javascript
class cachorro{//mais moderno, mas faz o mesmo que uma função construtora igual a da seção 7
    constructor(nome,raca){
        this.name = nome
        this.raca = raca
    }
}
const husk = new cachorro('Ozzy','Husk')
console.log(husk)
console.log(Object.getPrototypeOf(husk))
*/
/*
//10-mais sobre classes
class caminhao {//cria uma classe chamada caminhao que cria um novo objeto caminhao e atribui propriedades a ele
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }
    descreverCaminhao() {//cria um metodo para a classe caminhao
        return `Este caminhão tem ${this.eixos} eixos e tem a cor ${this.cor}(a)`
    }
}
let newCaminhao = new caminhao(4, 'Vermelho')//cria um novo objeto daa classe caminhao
console.log(newCaminhao.descreverCaminhao())//usa o metodo da classe caminhao
console.log(newCaminhao)

caminhao.motor = 2.0//não adiciona propriedade porque não é possivel fazer isso direto na classe
console.log(caminhao.motor)//undefined porque essa propriedade não existe

let c2 = new caminhao(6, 'Preto')//cria um novo objeto da classe caminhao
console.log(c2.motor)

console.log(c2.descreverCaminhao())
caminhao.prototype.motor = 2.0//adiciona uma nova propriedade a classe caminhao pelo prototype, assim é possivel adicionar

let c3 = new caminhao(4, 'Amarelo')
console.log(c3.motor)
*/
/*
//11-override(substitui uma propriedade através do seu prototype)
class humano{
    constructor (idade,nome){
        this.nome = nome
        this.idade =  idade
    }
}
let Weslley = new humano(14,'Weslley')//cria m novo objeto da classe humano com dois parametros
console.log(Weslley)

humano.prototype.idade = 'Não definida'//altera o valor padrão da propriedade
humano.prototype.nome = 'Não definido'//altera o valor padrão da propriedade
console.log(humano.prototype.idade)
console.log(humano.prototype.nome)

console.log(Weslley)
*/
//12-symbol
/*
class plane{
    constructor(marca,turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}
const boieng = new plane('boieng',10)

const asa = Symbol()
plane.prototype[asa] = 2
const piloto = Symbol()
plane.prototype[piloto] = 3

console.log(boieng)
console.log(boieng[asa])
console.log(boieng[piloto])
*/
/*
//13-grtter e setter
class post{
    constructor(titulo,descricao,tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }
    get exibir(){
        return`Voçê está lendo o post sobre: ${this.titulo}`
    }
    set adicionar(tags){
        const tagsArray = tags.split(', ')
        this.tags = tagsArray
    }
}
let newPost = new post('Peste negra','Um post de historia sobre a doença')
console.log(newPost)
console.log(newPost.exibir)
newPost.adicionar = 'Peste negra, peste bubonica, doenças, historia'
console.log(newPost)
*/
/*
//14-herança
class mamifero{
    constructor(patas){
        this.patas = patas
    }
}
class lobo extends mamifero{
    constructor(patas,nome){
        super(patas)
        this.nome = nome
    }
}
const newLobo = new lobo(4,'Bob')
console.log(`O lobo ${newLobo.nome} tem ${newLobo.patas} patas.`)
*/
/*
//15-instanceOf
class animal{
    constructor(patas){
        this.patas = patas
    }
}
class mamifero extends animal{
    constructor(patas,raca){
        super(patas)
        this.raca = raca
    }
}
const cachorro = new mamifero(4,'husk')
console.log(cachorro)
console.log(cachorro instanceof animal)//true porque é verificado se um objeto é da classe animal
console.log(mamifero instanceof animal)//falso porque o operador instanceOf so serve para objetos e aqui verifica-se uma classe é uma instancia de outra
*/