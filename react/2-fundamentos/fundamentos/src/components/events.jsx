function Events() {
    const Print = (e) => {
        console.log(e)
        console.log('Executou a função!')
    }

    //8 - Função de renderização
    function RenderSomething(x){
        if(x){
            return (
            <div>O x veio!</div>
        )
        }else{
            return (
                <div>O x não veio!</div>
            )
        }
    }

    //  return 5 < 10 && <p>Carregando...</p> early return

  return (
    <div>
        <div>
            {/*6 - Eventos de clique*/}
            <button onClick={() => console.log('Testando evento de clique em react')}>Clique aqui</button>
        </div>
        <div>
            {/*7 - Eventos de clique com função */}
            <button onClick={Print}>Clique aqui</button>
        </div>
        {/*8 - Função com render */}
        {RenderSomething('String vazia')}
        {RenderSomething()}
    </div>
  )
}//Dentro das chaves, javascript é executado

export default Events