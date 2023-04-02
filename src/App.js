import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail/Detail.jsx'
import About from './components/About/About.jsx'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'

function App () {

  const [characters, setCharacters] = useState([])

  function onClose(id){
    setCharacters(characters.filter(element => element.id !== id));
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             characters.find((element) => element.id === data.id) === undefined
              ? setCharacters((characters) => [...characters, data])
              : alert('Personaje repetido');
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function random(){
  let randomId = Math.floor(Math.random() * 826);
  onSearch(randomId)
 }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <hr />
      <div>
        <Nav
            onSearch={onSearch}
            random={random}
          />
      </div>
      <hr />
      <Routes>

        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />

        <Route path='/detail/:detailId' element={<Detail />} />

        <Route path='/about' element={<About />} />
        
      </Routes>
    </div>
  )
}

export default App
