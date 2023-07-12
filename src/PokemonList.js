import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div className="card">
      {pokemon.map((p) => (
        <div key={p}>
          <h2>{p}</h2>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
