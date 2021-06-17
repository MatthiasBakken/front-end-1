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

const onChange = evt = {
    const { name, value, checked, type } = evt.target
    change(name, valueToUse)
}
return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Add a Plant</h2>
            <button disabled={disabled}>add plant</button>
        </div>

        <div className='form-group inputs'>
            <h4>Plant Info</h4>

            <label>
                
            </label>
        </div>
    </form>

)

}