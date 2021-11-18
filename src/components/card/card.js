import React from "react";
import api from "../../services/api";

function Cards() {
  const [pokeName, setPokeName] = React.useState("");

  React.useEffect(() => {
    api.get("/charmander").then(({ data }) => {
      setPokeName(data);
    });
    console.log(pokeName);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1></h1>
        <img src="" alt="" />
      </div>
      <div className="card">
        <img src="" alt="" />
      </div>
      <div className="card">
        <img src="" alt="" />
      </div>
      <div className="card">
        <img src="" alt="" />
      </div>
      <div className="card">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Cards;
