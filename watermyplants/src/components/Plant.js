import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlant } from "../actions/plantActions";
import { useHistory } from "react-router-dom";


const initialState = {
  nickname: "",
  species: "",
  h20_frequency: "",
  plant_img: "",
};

const errors = {
  length: "Must be at least 3 characters",
  waterFrequency: "Must be more than zero"
}

const Plant = (props) => {
  const [values, setValues] = useState(initialState);

  const addPlant = props.addPlant;
  const { push } = useHistory();

  const onCancel = (evt) => {
    evt.preventDefault();
    push("/plantlist");
  };

  const onChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <form className="formContainer" onSubmit={( evt ) => {
      evt.preventDefault();
      addPlant(values);
      push("/plantlist");
    }}>
      <h2>Water My Plants</h2>

      <div className="form-group errors">
        <div>{errors.nickname}</div>
        <div>{errors.species}</div>
        <div>{errors.h20_frequency}</div>
      </div>

      <div className="form-group inputs">
        <h4>Add a Plant </h4>
        <label>Plant's Nickname:</label>
        <input value={values.nickname} onChange={onChange} name="nickname" />
        {values.nickname && values.nickname.length <= 3 ? <div>{errors.length}</div> : null}
      
        <label>Species:</label>
        <input value={values.species} onChange={onChange} name="species" />
        {values.species && values.species.length <= 3 ? <div>{errors.length}</div> : null}

        <label>Watering Frequency:</label>
        <input value={values.h20_frequency} onChange={onChange} name="h20_frequency" type="number" />
        {values.h20_frequency && values.h20_frequency < 1 ? <div>{errors.waterFrequency}</div> : null}
        
        <label>Image URL:</label>
        <input value={values.plant_img} onChange={onChange} name="plant_img" type="url"/>
      </div>

      <div className="form-group buttons">
        <button type="submit">add plant</button>
        <button onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
};

export default connect(null, { addPlant })(Plant);
