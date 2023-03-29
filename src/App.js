import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
//import characters from './data.js'

function App () {

  const [characters, setCharacters] = useState()

  return (
    <div className='App' style={{ padding: '25px' }}>
      <hr />
      <div>
        <Nav
          />
      </div>
      <hr />
      <div>
          <Cards
            characters={characters}
        />
      </div>
    </div>
  )
}

export default App
