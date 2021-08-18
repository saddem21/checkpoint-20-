import React from 'react';
import {Link,Route} from "react-router-dom";
function Description(props) {
  const movi =props.location.state.find(movie=>movie.Id==props.match.params.id)
    
    return (
        <div style={{textAlign: "center"}}>
          <Link to="/"><h1 style={{marginBottom: "40px"}}>Page d'accueil</h1></Link>
          <h1 style={{color: "white", backgroundColor: "green", marginLeft: "480px", marginRight: "480px", marginBottom: "40px" }}>Description</h1>
          <h2 style={{color: "white", marginBottom: "60px"}}>{movi.description}</h2>
          <h1 style={{color: "white", backgroundColor: "maroon", marginLeft: "480px", marginRight: "480px", marginBottom: "50px"}}>Bande annonce</h1>
        <iframe style={{marginBottom: "60px"}} width="560" height="315" src={`https://www.youtube.com/embed/${movi.bandeannonce}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}

export default Description
