import style from './Cards.module.css'
import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return ( 
      <div className={style.container}>
         {characters.map((char) => {
            return <Card 
            key={char.id}
            id={char.id}
            name={char.name} 
            species={char.species} 
            gender={char.gender} 
            image={char.image}
            onClose = {()=>props.onClose(char.id)}
         />
         }

      )}
      </div>
   );
}
