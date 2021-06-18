import React, { useState, useEffect } from "react";
import PlantHelper from "./plantComponentHelper";

export default function Plant(props) {
  const { values, submit, change, disabled, errors } = props;

  const onCancel = (evt) => {
    evt.prevenDefault();
    // reset()
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change({ ...values, [name]: value });
  };
  return (
    <form className="form container" onSubmit={onSubmit}>
      <h2>Water My Plants</h2>

      <div className="form-group errors">
        {/* <div>{errors.plantname}</div>
            <div>{errors.nickname}</div>
            <div>{errors.species}</div>
            <div>{errors.h20frequency}</div> */}
      </div>

      <div className="form-group inputs">
        <h4>Add a plant </h4>
        <label>
          plant's nickname
          <input
            value={values.nickname}
            onChange={onChange}
            name="nickame"
            type="text"
          />
        </label>

        <label>
          plant's name
          <input
            value={values.plantname}
            onChange={onChange}
            name="plantname"
            type="text"
          />
        </label>

        <label>
          species
          <input
            value={values.species}
            onChange={onChange}
            name="species"
            type="text"
          />
        </label>

        <label>
          watering frequency
          <input
            value={values.h20frequency}
            onChange={onChange}
            name="h20frequency"
            type="text"
          />
        </label>
      </div>

      <h6>upload image</h6>

      <div className="form-group submit">
        <button disabled={disabled}>add plant</button>
        <button id="cancelBtn" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}
