// Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCharContext } from "../Context/Context";

const Card = ({ character }) => {
  const { state, dispatch } = useCharContext();

  const addFav = () => {
    const findFav = state.favs.find((fav) => fav.id === character.id);
    if (findFav) {
      alert("Ya lo agregaste");
    } else {
      dispatch({ type: "ADD_FAV", payload: character });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to={"/detail/" + character.id}>
        <h4>{character.name}</h4>
        <img
          src="/images/doctor.jpg"
          alt="Dentist"
          style={{ width: "200px", height: "auto" }}
        />
      </Link>
      <button onClick={addFav}>Agregar</button>
    </div>
  );
};

export default Card;
