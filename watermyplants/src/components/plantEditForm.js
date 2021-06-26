import React, { useState } from "react";
import { connect } from "react-redux";
import { editPlant } from "../actions/plantActions";
import { useHistory } from "react-router-dom";

import '../styles/PlantEditForm.css';


const EDIT = "plant-edit__";

const PlantEditForm = (props) => {
  const plant_id = localStorage.getItem("plant_id");
  const currentPlant = props.plants.filter( ( plant ) =>
    Number(plant.plant_id === Number(plant_id))
  );

  const [ form, setForm ] = useState( currentPlant[ 0 ] )
  
  const { push } = useHistory();

  const onCancel = () => {
    push("/plantlist");
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.editPlant(form);

    push("/plantlist");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`${EDIT}container`}>
      <form onSubmit={onSubmit}>
        <label>Plant Name:</label>
        <input name="nickname" value={form.nickname} onChange={handleChange} />

        <label>Plant Species:</label>
        <input name="species" value={form.species} onChange={handleChange} />

        <label>Watering Frequency:</label>
        <input name="h20_frequency" value={form.h20_frequency} onChange={handleChange}/>
        
        <label>Plant Image:</label>
        <input name="plant_img" value={form.plant_img} onChange={handleChange}/>

        <div className={`${EDIT}buttons`}>
          <button>SUBMIT</button>
          <button id="cancelBtn" onClick={onCancel}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants.plants,
  };
};

export default connect(mapStateToProps, { editPlant })(PlantEditForm);
