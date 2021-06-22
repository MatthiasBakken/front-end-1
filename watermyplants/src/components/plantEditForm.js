import React, { useState } from 'react'
import Plant from './plantComponent'




export default function EditPlant() {
    const [task, setTask] = useState('')
    const onCancel = evt => {
        evt.prevenDefault()
        // reset()
    }
    
const onSubmit = evt => {
    evt.preventDefault()
    // submit()
}

const onChange = evt => {
    const { name, value } = evt.target   
    // change({...values, [name]:value})
}

    return (
<form>
<label>Plant Image: 
        <button>
        <Editable 
        text={task}
        placeholder="Edit"
        type='input'
        >
            <input 
            type='text'
            name='task'
            placeholder='edit image'
            value={task}
            onChange={e => setTask(e.target.value)}
            />
        </Editable>
        </button>
    </label>

    <label>Plant Name:
        <button>
        <Editable 
        text={task}
        placeholder="Edit"
        type='input'
        >
            <input 
            type='text'
            name='task'
            placeholder='edit name'
            value={task}
            onChange={e => setTask(e.target.value)}
            />
        </Editable>
        </button>
    </label>

    <label>Plant Species:
        <button>
        <Editable 
        text={task}
        placeholder="Edit"
        type='input'
        >
            <input 
            type='text'
            name='task'
            placeholder='edit species'
            value={task}
            onChange={e => setTask(e.target.value)}
            />
        </Editable>
        </button>
    </label>

        <br/>
    <label>Plant Nickname: 
        <button>
        <Editable 
        text={task}
        placeholder="Edit"
        type='input'
        >
            <input 
            type='text'
            name='task'
            placeholder='edit nickname '
            value={task}
            onChange={e => setTask(e.target.value)}
            />
        </Editable>
        </button>
    </label>

    <label>Watering Frequency:
        <button>
        <Editable 
        text={task}
        placeholder="Edit"
        type='input'
        >
            <input 
            type='text'
            name='task'
            placeholder='times a week'
            value={task}
            onChange={e => setTask(e.target.value)}
            />
        </Editable>
        </button>
    </label>

    <div className='form-group submit'>
            <button>add plant</button>
        <button id='cancelBtn' onClick={onCancel}>cancel</button>
        </div>

</form>   
    )
}

const Editable = ({
    text, 
    type, 
    placeholder, 
    children, 
    ...props
}) => {
    const [isEditing, setEditing] = useState(false)
    const handleKeyDown = (event, type) => {

    }
    return (
        <section {...props}> 
        {isEditing ? (
            <div
            onBlur={() => setEditing(false)}
            onKeyDown={e => handleKeyDown(e, type)}
            >
                {children}
            </div>
        ) : (
            <div
            onClick={() => setEditing(true)}
            >
                <span>
                    {text || placeholder || "Editable Content"}
                </span>
            </div>
        )}
        </section>
    )
}