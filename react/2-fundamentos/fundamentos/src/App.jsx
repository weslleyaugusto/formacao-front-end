import { useState } from 'react'
import './App.css'

//2 - Importando componente
import FirstComponent from './components/firstComponent'

//4 - Template expression
import TemplateExpression from './components/templateExpressions'
{/* */}

//5 - Hierarquia de componentes
import MyComponent from './components/myComponent'

//6 - Eventos
import Events from './components/events'

function App() {
  //3 - Comentarios que podem ser usados dentro e fora das funções

  return (
    
    <>
    {/*3 - Comentario jsx*/}
    <h1 className='title'>Fundamentos do react</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App