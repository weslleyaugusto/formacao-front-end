//4 - Template expressions
//5 - Hierarquia de componentes
import MyComponent from "./myComponent"
function TemplateExpression(){
    const name = 'Weslley'
    const person = {
        name: 'Weslley',
        age: 21,
        job: 'programador'
    }
    return (
        <div>
            <p>A soma de 2 + 2 é {2 + 2}</p>
            <h3>Bem vindo: {name}</h3>
            <p>Você tem {person.age} anos de idade e é {person.job} </p>
            <MyComponent/>
        </div>
    )
}

export default TemplateExpression