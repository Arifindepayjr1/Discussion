import React from "react";
import { useParams, Link } from "react-router-dom";
import { AVAILABLE_PLACES } from "../data";

function PlaceDetails() {
  const { id } = useParams();
  const place = AVAILABLE_PLACES.find((p) => p.id === parseInt(id));

  if (!place) return <h2> Nestled between rolling emerald hills and the tranquil waters of a vast, crystal-clear lake, the village of Eldermere feels like a place untouched by time. Cobbled streets wind through clusters of charming cottages, their roofs draped in moss and ivy, while the scent of fresh bread and blooming lavender drifts through the air. </h2>;

  return (
    <div>
      <h1>{place.title}</h1>
      <img src={place.image.src} alt={place.image.alt} width="300" />
      <p>{place.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default PlaceDetails;
