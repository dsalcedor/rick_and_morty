import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.container}>
         <div>
            <button className={style.closeButton} onClick={props.onClose}>X</button>
            <img className={style.imagen} src={props.image} alt="" />
            <h2>{props.name}</h2>
            <div className={style.cardText}>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
            </div>
         </div>
      </div>
   );
}
