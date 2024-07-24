import { useState } from "react"

function data() {
    let someData = 10
    const [anotherNumber, setAnotherNumber] = useState(someData)
  return (
    <div>
        <p>O valor de someData é: {someData}</p>
        <button onClick={() => setAnotherNumber(someData + 1)}>Mudar valor</button>
    </div>
  )
}

export default data