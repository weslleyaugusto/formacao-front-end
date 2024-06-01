/*
class veiculo{
    constructor(marca,modelo){
        this.marca = marca
        this.modelo = modelo
    }
    detalhes(){
        return `Este é um ${this.marca} ${this.modelo}.`
    }
}
class carro extends veiculo{
    constructor(marca,modelo,portas){
        super(marca,modelo)//Faz a classe carro herdar todas as propriedades do  construtor veiculo 
        this.portas = portas
    }
    detalhes(){
        return `Este é um ${newCarro.marca} ${newCarro.modelo} com ${newCarro.portas} portas.`
    }
}
const newCarro = new carro('Fiat','Uno',4)
console.log(newCarro.detalhes())
*/
/*
class animal{
    constructor(nome,som){
        this.nome = nome
        this.som = som
    }
    fazerSom(){
        return `O animal ${this.nome} faz ${this.som}!`
    }
}
class cachorro extends animal{
    constructor(nome,som,raca){
        super(nome,som)
        this.raca = raca
    }
    fazerSom(){
        return `${this.nome}, que é da raça ${this.raca} faz ${this.som}!`  
    }
}
const newAnimal = new animal('husk','Auuuuu')
console.log(newAnimal.fazerSom())
const newCachorro = new cachorro('Bob','Auuuuu','Husk')
console.log(newCachorro.fazerSom())
*/
/*
class animal{
    constructor(nome,som){
        this.nome = nome
        this.som = som
    }
    fazerSom(){
        return `${this.nome} faz ${this.som}`
    }
}
class cachorro extends animal{
    constructor(nome,som,raca,idade){
        super(nome,som)
        this.raca = raca
        this.idade = idade
    }
    fazerSom(){
        return `${this.nome}, que é um ${this.raca} de ${this.idade} anos faz ${this.som}!`
    }
    envelhecer(){
        return this.idade ++//incrementa idade do cachorro em 1
    }
}
const husk = new cachorro('Bob','AU au','Husk',5)
console.log(husk.fazerSom())
console.log('Meu husk tem ' + husk.idade + ' anos de idade!')
husk.envelhecer()
console.log('Agora ele tem ' + husk.idade + ' anos de idade!')
console.log(husk.fazerSom())
*/
