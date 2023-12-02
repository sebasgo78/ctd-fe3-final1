import React from "react";
import Card from "../Components/Card";
import { useCharContext } from "../Context/Context";

const Home = () => {
  const { state } = useCharContext();

  return (
    <div>
      <h2>Listado de Dentistas</h2>
      {state.list.length > 0 ? (
        state.list.map((character) => (
          <Card character={character} key={character.id} />
        ))
      ) : (
        <p>No hay dentistas disponibles.</p>
      )}
    </div>
  );
};

export default Home;
