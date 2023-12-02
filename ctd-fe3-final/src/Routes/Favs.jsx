import React from "react";
import Card from "../Components/Card";
import { useCharContext } from "../Context/Context";

const Favs = () => {
  const { state } = useCharContext();

  return (
    <div>
      <h2>Dentistas Favoritos</h2>
      {state.favs.length > 0 ? (
        state.favs.map((fav) => (
          <Card character={fav} key={fav.id} isFav={true} />
        ))
      ) : (
        <p>No hay dentistas marcados como favoritos.</p>
      )}
    </div>
  );
};

export default Favs;
