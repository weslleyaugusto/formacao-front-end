/*
class estudante{
    constructor(nome,idade,){
        this.age = idade
        this.name = nome
    }
}
estudante.prototype.apresentar = () => {
    return `Olá meu nome é ${novoEstudante.name} e eu tenho ${novoEstudante.age} anos de idade!`
}
let novoEstudante = new estudante('Weslley',14)
console.log(novoEstudante.apresentar())
*/
/*
class produto{
    constructor (name,price,discount){
        this.name = name
        this.price = price
        this.discount = discount
    }
}
produto.prototype.priceDiscount =  () => {
    let percent = (newProduct.price * newProduct.discount) / 100
    return `O preço de ${newProduct.name} é ${newProduct.price} e com deconto fica ${newProduct.price - percent}`
}
let newProduct = new produto('Computador',1000,15)
console.log(newProduct.priceDiscount())
*/
/*
class circulo{
    constructor (raio){
        this.raio = raio
    }
}
circulo.prototype.area = function (){
    return 3.14 * this.raio **2
}
circulo.prototype.circunferencia = function (){
    return 2 * 3.14 * this.raio
}
let meuCirculo = new circulo(4)
console.log(`A area de meuCirculo é ${meuCirculo.area()}`)
console.log(`A circunferencia de meuCirculo é ${meuCirculo.circunferencia()}`)
*/
/*
class retangulo{
    constructor(height,width){
        this.height = height
        this.width = width
    }
}
let newRetangulo = new retangulo(4,6)
retangulo.prototype.area = function (){
    return this.width * this.height
}
retangulo.prototype.perimetro = function (){
    return 2 * (this.height + this.width)
}
console.log(`A area desse retangulo é de ${newRetangulo.area()}.`)
console.log(`O perímetro desse retangulo é de ${newRetangulo.perimetro()}`)
*/
class retangulo {
    constructor (height,width){
        this.height = height
        this.width = width
    }
    area(){
        return this.width * this.height
    }
    perimetro(){
        return 2 * (this.height * this.width)
    }
}
let newRetangulo = new retangulo(4,6)
console.log(`A area desse retangulo é de ${newRetangulo.area()}`)
console.log(`O perimetro desse nretangulo é de ${newRetangulo.perimetro()}`)