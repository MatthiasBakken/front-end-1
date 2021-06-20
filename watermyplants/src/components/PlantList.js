import React, { useEffect } from "react";

import PlantDetails from "./plantDetailsComponent";
import { getPlants } from "../actions/plantActions";
import { connect } from "react-redux";

const PlantList = (props) => {
  const getPlants = props.getPlants;

  useEffect(() => {
    getPlants();
  }, [getPlants]);

  return (
    <div className="plantListContainer">
      {props.plants.map((plant, index) => {
        return <PlantDetails plant={plant} key={index} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    plants: state.plants,
  };
};

export default connect(mapStateToProps, { getPlants })(PlantList);
