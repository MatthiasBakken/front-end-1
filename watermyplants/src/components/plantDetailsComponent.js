import React, { useState, useEffect } from 'react'

export default function PlantDetails(props) {
    const { plantId, close } = props 
    const [details, setDetails] = useState(null)



    return (
        <div className='container'>
            <h2>Plant Details (of plant with id {plantId})</h2>
            {
                details && 
                <>
                    <img>plant pic</img>
                    <p>{details.plant.nickname}</p>
                    <p>{details.plant.name}</p>
                    <p>{details.plant.species}</p>
                    <p>{details.plant.h20Frequency}</p>
                    {details.PlantDetails.map((plant) => <li key={plant}>{plant}</li>)}
                </>
            }
            <button>add plant </button>
            <button>delete plant </button>
        </div>
    )
}

