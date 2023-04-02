import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState(0);

   const handleSearch = (event) => {
      let { value } = event.target;
      setCharacter(value);
   }

   return (
      <div className={style.add}>
         <input className={style.input} onChange={handleSearch} type='search' />
         <button className={style.addButton} onClick={()=>props.onSearch(character)}>Agregar</button> 
         <button className={style.addButton} onClick={props.random}>Agregar Random</button> 
      </div>
   );
}
