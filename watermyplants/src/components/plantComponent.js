import React from 'react'

export default function Plant (props) {
    const {
        values, 
        submit, 
        change,
        disabled, 
        errors, 
    } = props


const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

// const onChange = evt = {
//     const { name, value, checked, type } = evt.target
//     change(name, valueToUse)
// }
return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Water My Plants</h2>
            
        </div>

        <div className='form-group inputs'>
            <h4>Add a plant </h4>
            <label>plant's nickname
                <input
                // value={values.plantNickname}
                // onChange={onChange}
                name='plantNickname'
                type='text'
                />
            </label>

            <label>plant's name
                <input
                // value={values.plantName}
                // onChange={onChange}
                name='plantName'
                type='text'
                />
            </label>

            <label>species
                <input
                // value={values.plantName}
                // onChange={onChange}
                name='species'
                type='text'
                />
            </label>

            <label>watering frequency
                <input
                // value={values.plantName}
                // onChange={onChange}
                name='wateringFrequency'
                type='text'
                />
            </label>
        </div>
        
        <h6>upload image</h6>

        <button disabled={disabled}>add plant</button>
        <button>cancel</button>

        
    </form>

)

}