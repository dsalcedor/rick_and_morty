import style from './Cards.module.css'
import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return ( 
      <div className={style.container}>
         {characters.map((char) => {
            return <Card 
            name={char.name} 
            species={char.species} 
            gender={char.gender} 
            image={char.image}
            onClose = {() => window.alert('Emulamos que se cierra la card')}
         />
         }

      )}
      </div>
   );
}
