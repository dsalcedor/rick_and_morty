import style from './Cards.module.css'

export default function SearchBar(props) {
   return (
      <div className={style.add}>
         <input className={style.input} type='search' />
         <button className={style.addButton} onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
