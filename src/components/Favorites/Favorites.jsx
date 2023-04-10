import Card from "../Card/Card";
import { connect } from "react-redux";

function Favorites(props) {
  return (
    <div>
      {props.myFavorites.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
