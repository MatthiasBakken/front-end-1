import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlant } from "../actions/plantActions";
import { useHistory } from "react-router-dom";

const Plant = (props) => {
  const [values, setValues] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
    plant_img: "",
  });

  const [errors, setErrors] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
  });

  const addPlant = props.addPlant;
  const { push } = useHistory();

  const onCancel = (evt) => {
    evt.preventDefault();
    push("/plantlist");
    // reset()
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    addPlant(values);
    push("/plantlist");
    // submit()
  };

  const onChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <h2>Water My Plants</h2>

      <div className="form-group errors">
        <div>{errors.nickname}</div>
        <div>{errors.species}</div>
        <div>{errors.h20_frequency}</div>
      </div>

      <div className="form-group inputs">
        <h4>Add a plant </h4>
        <label>
          plant's nickname
          <input value={values.nickname} onChange={onChange} name="nickname" />
        </label>

        <label>
          species
          <input value={values.species} onChange={onChange} name="species" />
        </label>

        <label>
          watering frequency
          <input
            value={values.h20_frequency}
            onChange={onChange}
            name="h20_frequency"
          />
        </label>

        <label>
          <h6> - optional - </h6>
          image URL:
          <input
            value={values.plant_img}
            onChange={onChange}
            name="plant_img"
          />
        </label>
      </div>

      <div className="form-group submit">
        <button type="submit">add plant</button>
        <button id="cancelBtn" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
};

export default connect(null, { addPlant })(Plant);
