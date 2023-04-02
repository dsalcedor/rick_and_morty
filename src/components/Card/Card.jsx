import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={style.container}>
         <div>
            <button className={style.closeButton} onClick={props.onClose}>X</button>
            <img className={style.imagen} src={props.image} alt="" />
            <Link to={`/detail/${props.id}`} className={style.cardText}><h2>{props.name}</h2></Link>
            <div className={style.cardText}>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
            </div>
         </div>
      </div>
   );
}
