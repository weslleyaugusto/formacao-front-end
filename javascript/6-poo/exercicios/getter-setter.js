"use strict"
/*
class pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    get getNome(){
        return this.nome
    }
    set novoNome(nome){
        return this.nome = nome
    }
    get getIdade(){
        return this.idade
    }
    set novaIdade(idade){
        return this.idade = idade
    }
}
const mark = new pessoa('Mark',27)
console.log(`${mark.nome} tem ${mark.getIdade} anos de idade.`)
const oldName = mark.nome
mark.novoNome = 'Weslley'
mark.novaIdade = 28
console.log(`${mark.nome} antes se chamava ${oldName} e fez ${mark.idade} anos de idade.`)
*/
/*
class carro{
    constructor(marca,modelo,ano){
        this.marca = marca
        this.modelo = modelo
        if(ano >= 1886){
            this.ano = ano
        }else{
            'Digite um ano válido para seu carro!'
        }
    }
    get acessarMarca(){
        return this.marca
    }
    get acessarModelo(){
        return this.modelo
    }
    get acessarAno(){
        return this.ano
    }
    set mudarMarca(marca){
        return this.marca = marca
    }
    set mudarModelo(modelo){
        return this.modelo = modelo
    }
    set mudarAno(ano){
        if(this.ano >= 1886){
            return this.ano = ano
        }else{
            return 'Digite um ano válido para seu carro!'
        }
    }
}
const uno = new carro('fiat','uno',2015)
console.log(uno)
console.log(`Tenho um carro ${uno.acessarMarca + ' ' + uno.acessarModelo} do ano ${uno.acessarAno}.`)
uno.mudarMarca = 'Honda'
uno.mudarModelo = 'civic'
uno.mudarAno = 2002
console.log(`Agora eu tenho um ${uno.acessarMarca} ${uno.acessarModelo} do ano ${uno.acessarAno}`)
console.log(uno)
*/
class produto{
    constructor(name,price,discount){
        this.name = name
        this.price = price
        if(discount < 0){
            return `Não é possível adicionar menos de 0% de desconto.`
        }else{
            this.discount = discount
        }
    }
    get getName(){
        return this.name
    }
    get getPrice(){
        return this.price
    }
    get getDiscount(){
        return (this.price * this.discount) / 100
    }
    set setName(name){
        return this.name = name
    }
    set setPrice(price){
        return this.price = price
    }
    set setDiscount(discount){
        return this.discount = (discount * this.price) / 100
    }
}
const bombom = new produto('milho',22.32,15)
console.log(bombom)
console.log(`O produto ${bombom.getName} custa $R${bombom.getPrice} reais mas com desconto de ${bombom.discount}% vai para $R${bombom.getPrice - bombom.getDiscount} reais.`)
let oldPrice = bombom.price
bombom.setName = 'tilápia'
bombom.setPrice = 10
bombom.setDiscount = 13
console.log(`O produto ${bombom.getName}, que custava $R${oldPrice} reais agora com o novo preço de $R${bombom.getPrice} reais e o novo desconto de $R${bombom.discount} reais fica $R${bombom.price - bombom.getDiscount} reais`)