import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
  
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  };

  useEffect(() => {
   props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites]);

  return (
    <div className={style.container}>
      <div>
        {isFav ? (
          <button className={style.favButton} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={style.favButton} onClick={handleFavorite}>🤍</button>
        )}
        <button className={style.closeButton} onClick={props.onClose}>
          X
        </button>
        <img className={style.imagen} src={props.image} alt="" />
        <Link to={`/detail/${props.id}`} className={style.cardText}>
          <h2>{props.name}</h2>
        </Link>
        <div className={style.cardText}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },

    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
