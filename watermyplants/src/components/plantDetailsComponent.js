import React from "react";

const PlantDetails = (props) => {
  const { plant } = props;
  // plants structure
  // plant: {
  //     plant_id: "",
  //     nickname: "",
  //     species: "",
  //     h2o_frequency: "",
  //     image: "",
  //   }
  let plantImage;

  if (plant.image !== "") {
    plantImage = plant.image;
  } else {
    plantImage =
      "https://i.pinimg.com/originals/b1/14/fa/b114fa2591d6d4702b1b9442011f9db3.jpg";
  }

  return (
    <div className="container">
      <h2>Plant Details for {plant.name}</h2>
      {plant && (
        <div>
          <img src={plantImage} />
          <p>{plant.nickname}</p>
          <p>{plant.name}</p>
          <p>{plant.species}</p>
          <p>{plant.h20Frequency}</p>
        </div>
      )}
      <button>add plant </button>
      <button>delete plant </button>
    </div>
  );
};

export default PlantDetails;
