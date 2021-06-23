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

const PLANT = "plant-form__";

const Plant = (props) => {
  const [values, setValues] = useState(initialState);

  const addPlant = props.addPlant;
  const { push } = useHistory();

  const onCancel = () => {
    push("/plantlist");
  };

  const onChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div className={`${PLANT}container`}>
      <form className={`${PLANT}form`} onSubmit={( evt ) => {
        evt.preventDefault();
        addPlant(values);
        push("/plantlist");
      }}>
        <h4>ADD A PLANT </h4>
        <div className={`${PLANT}content`}>
          <span className={`${PLANT}label-input-containers`}>
            <label>Plant's Nickname:</label>
            <input value={values.nickname} onChange={onChange} name="nickname" />
            {values.nickname && values.nickname.length <= 3 ? <div>{errors.length}</div> : null}
          </span>
          <span className={`${PLANT}label-input-containers`}>
            <label>Species:</label>
            <input value={values.species} onChange={onChange} name="species" />
            {values.species && values.species.length <= 3 ? <div>{errors.length}</div> : null}
          </span>
          <span className={`${PLANT}label-input-containers`}>
            <label>Watering Frequency:</label>
            <input value={values.h20_frequency} onChange={onChange} name="h20_frequency" type="number" />
            {values.h20_frequency && values.h20_frequency < 1 ? <div>{errors.waterFrequency}</div> : null}
          </span>
          <span className={`${PLANT}label-input-containers`}>
            <label>Image URL:</label>
            <input value={values.plant_img} onChange={onChange} name="plant_img" type="url"/>
          </span>
        </div>

        <div className={`${PLANT}buttons-container`}>
          <button type="submit">add plant</button>
          <button onClick={onCancel}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addPlant })(Plant);
