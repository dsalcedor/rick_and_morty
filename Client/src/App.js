import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido");
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const username = "ejemplo@gmail.com";
  // const password = "1password";

  // function login(userData) {
  //   if (userData.password === password && userData.username === username) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }
  /////////////////////////////////////////////////////////// nuevo login ///////////////////////
  function login(userData) {
    const { username, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    console.log(userData);
    axios(URL + `?username=${username}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  /////////////////////////////////////////////////////////// nuevo login ///////////////////////

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logout() {
    setAccess(false);
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} logout={logout} />
      )}
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="/about" element={<About />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
