import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    origin: "",
    image: "",
  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            specie: char.specie,
            gender: char.gender,
            origin: char.origin.name,
            image: char.image,
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.container}>
      <div>
        {character.name && <p className={styles.texto}><b>Name:</b>{character.name}</p>}
        {character.status && <p className={styles.texto}><b>Status:</b>{character.status}</p>}
        {character.specie && <p className={styles.texto}><b>Specie:</b>{character.specie}</p>}
        {character.gender && <p className={styles.texto}><b>Gender:</b>{character.gender}</p>}
        {character.origin && <p className={styles.texto}><b>Origin:</b>{character.origin}</p>}
      </div>
      <div>
        <img src={character.image} alt="" />
      </div>
    </div>
  );
}
