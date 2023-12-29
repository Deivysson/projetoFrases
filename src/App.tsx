import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
  {
    id: 1,
    nome: "Motivação",
    frases: [
      'A vida é uma jornada, e não um destino.',
      'Sonhe, acredite, dedique-se e realize!',
      'É sem medo de errar que conseguimos os melhores acertos.'
    ]
  },
  {
    id: 2,
    nome: "Bem estar",
    frases: [
      'Para que o seu dia seja ainda melhor, tome uma dose de bem-estar e de felicidade.',
      'Escolha elogiar, pois ajudar no bem-estar dos outros também contribui para a nossa felicidade.',
      'O preço da felicidade é o bem-estar consigo mesmo.'
    ]
  }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio])
  }

  return (
      <div className='container'>
        <img 
        alt='logo frases'
        src={logoImg}
        className='logo'
        />
      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button 
          key={item.id}
          className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ))}
        
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
      </div>
     
  )
}

export default App
