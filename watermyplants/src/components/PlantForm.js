import React, { useState, useEffect } from 'react'


const PlantForm = ( props ) => {
    const values = {
        plant: {
            id: "",
            nickname: "",
            species: "",
            h2oFrequency: "",
            image: "",
        },
    };

    const onCancel = evt => {
        evt.prevenDefault();
        // reset()
    };
    
    const onSubmit = evt => {
        evt.preventDefault();
        // submit()
    };

    const onChange = evt => {
        const { name, value } = evt.target;
        // change({...values, [name]:value})
    };
    return (
        <form className='form container' onSubmit={onSubmit}>
        
            <h2>Water My Plants</h2>
        

            <div className='form-group errors'>
                <div>this will be plant name error</div>
                <div>this will be plant name errornickname</div>
                <div>this will be plant name error species</div>
                <div>this will be plant name errorh20frequency</div>
            </div>
        
            <div className='form-group inputs'>
                <h4>Add a plant </h4>
                <label>plant's nickname</label>
                <input
                    value={values.plant.nickname}
                    onChange={onChange}
                    name='nickame'
                    type='text'
                />
                <label>plant's name</label>
                    <input
                        value={values.plant.plantname}
                        onChange={onChange}
                        name='plantname'
                        type='text'
                    />
                <label>species</label>
                    <input
                        value={values.plant.species}
                        onChange={onChange}
                        name='species'
                        type='text'
                    />
                <label>watering frequency</label>
                    <input
                        value={values.plant.h20frequency}
                        onChange={onChange}
                        name='h20frequency'
                        type='text'
                    />
            </div>

            <h6>upload image</h6>
        
            <div className='form-group submit'>
                <button>add plant</button>
                <button id='cancelBtn' onClick={onCancel}>cancel</button>
            </div>
        
        </form>
    );
};

export default PlantForm;