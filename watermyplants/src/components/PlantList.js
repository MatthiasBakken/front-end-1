import React, { useEffect } from "react";

import PlantDetails from "./plantDetailsComponent";
import { getPlants, addPlant } from "../actions/plantActions";
import { connect } from "react-redux";

const PlantList = (props) => {
  const getPlants = props.getPlants;

  useEffect(() => {
    // debugger;
    getPlants();
  }, [getPlants]);

  if (props.isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log("Plants in PlantList");
  console.log(props.plants);
  return (
    <div className="plantListContainer">
      <button>add plant </button>
      {props.plants.map((plant, index) => {
        return <PlantDetails plant={plant} key={index} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.plants.isLoading,
    plants: state.plants.plants,
  };
};

export default connect(mapStateToProps, { getPlants, addPlant })(PlantList);
