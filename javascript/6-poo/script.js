//1-metodos
const person = {
    name: 'Weslley',
    speak: function (frase){
        console.log(frase + person.name)
    }
}
console.log(person.name)
person.speak('Meu nome é ')