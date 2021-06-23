import React from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions/plantActions";
import { useHistory } from "react-router-dom";

const PlantDetails = (props) => {
  const { plant } = props;
  const { push } = useHistory();

  const handleDelete = () => {
    props.deletePlant(plant);
    push("/plantlist");
  };

  const handleEdit = () => {
    localStorage.setItem("plant_id", plant.plant_id);
    push("/editplant");
  };

  let plantImage;

  if (plant.plant_img && plant.plant_img !== "") {
    plantImage = plant.plant_img;
  } else {
    plantImage =
      "https://i.pinimg.com/originals/b1/14/fa/b114fa2591d6d4702b1b9442011f9db3.jpg";
  }
  return (
    <div className="container">
      <h2>Plant Details for {plant.nickname}</h2>

      <div>
        <img className="plantImage" src={plantImage} alt="plant" />
        <p>nickname: {plant.nickname}</p>
        <p>Species: {plant.species}</p>
        <p>Watering Frequency: {plant.h20_frequency}</p>
      </div>
      <button onClick={handleDelete}>delete plant </button>
      <button onClick={handleEdit}>Edit plant </button>
    </div>
  );
};

export default connect(null, { deletePlant })(PlantDetails);
