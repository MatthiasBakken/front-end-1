import React, { useEffect } from "react";

import PlantDetails from "./PlantDetails";
import { getPlants } from "../actions/plantActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PlantList = (props) => {
  const getPlants = props.getPlants;
  const { push } = useHistory();
  useEffect(() => {
    // debugger;
    getPlants();
  }, [getPlants]);

  const handleAddPlant = () => {
    push("/addplant");
  };

  if (props.isLoading) {
    return <h1>Loading...</h1>;
  }
  // console.log("Plants in PlantList");
  // console.log(props.plants);
  return (
    <div className="plantListContainer">
      <button onClick={handleAddPlant}>add plant </button>
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

export default connect(mapStateToProps, { getPlants })(PlantList);
