import { useState } from 'react'
import './App.css'

//2 - Imagem em assets
import img1 from "./assets/city.jpg"

// 3 - Hook useState
import Data from '../components/data'

function App() {

  return (
    <div style={{ paddingBottom: "500px"}}>
      <h1>Avançando em react!</h1>
      {/* 1 - Imagens em public */}
      <img src="/img1.jpg" alt="" />
      {/* 2 - Imagem de assets */}
      <img src="assets/city.jpg" alt="" />
      <img src={img1} alt="" />
      {/* 3 - useState */}
      <Data/>
    </div>
  )
}

export default App