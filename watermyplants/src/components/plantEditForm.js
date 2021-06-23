import React, { useState } from "react";
import { connect } from "react-redux";
import { editPlant } from "../actions/plantActions";
import { useHistory } from "react-router-dom";


const PlantEditForm = (props) => {
  const plant_id = localStorage.getItem("plant_id");
  const currentPlant = props.plants.filter((plant) =>
    Number(plant.plant_id === Number(plant_id))
  );

  const [form, setForm] = useState(currentPlant[0]);
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
    <form onSubmit={onSubmit}>
      <label>
        Plant Name:
        <input name="nickname" value={form.nickname} onChange={handleChange} />
      </label>

      <label>
        Plant Species:
        <input name="species" value={form.species} onChange={handleChange} />
      </label>

      <br />
      <label>
        Watering Frequency:
        <input
          name="h20_frequency"
          value={form.h20_frequency}
          onChange={handleChange}
        />
      </label>
      <label>
        Plant Image:
        <input
          name="plant_img"
          value={form.plant_img}
          onChange={handleChange}
        />
      </label>
      <div className="form-group submit">
        <button>submit changes</button>
        <button id="cancelBtn" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants.plants,
  };
};

export default connect(mapStateToProps, { editPlant })(PlantEditForm);
