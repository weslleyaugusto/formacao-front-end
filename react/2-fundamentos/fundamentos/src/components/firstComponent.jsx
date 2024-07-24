//1 - Criando componentes
//5 - Hierarquia de componentes
import MyComponent from "./myComponent"
function FirstComponent(){
    return (
        //O que esta dentro do return é o jsx(html do react)
        <div>
            <h2>Meu primeiro componente!</h2>
            <p>Um paragrafo em um componente!</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent