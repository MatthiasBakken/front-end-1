import React, { useState, useEffect } from 'react'
import Plant from './plantComponent'

export default function PlantHelper() {


// Initial States
const initialFormValues = {
    name: '',
    nickname: '', 
    species: '', 
    h20frequency: '', 
}

const initialFormErrors = {
    name: '',
    nickname: '', 
    species: '', 
    h20frequency: '',  
}
const initialPlants = []
const initialDisabled = true 

// States
const [plants, setPlants] = useState(initialPlants)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)


// Helpers
const getPlants = () => {
    // axios
    // .get(res => {
    //     const plantsFromApi = res.data
    //     setPlants(plantsFromApi)
    // })
    // .catch(err => console.log(err))
}

const postNewPlant = newPlant => {
    // axios.post(newPlant) 
    // .then((res) => {
    //     setPlants([...plants, newPlant])
    // })
    // .catch(err => console.log(err))
    // .finally(() => {
    //     setFormValues(initialFormValues)
    // })
}

// Event Handlers
const inputChange = (name, value) => {

    setFormValues({
        ...formValues, 
        [name]: value 
    })
}

const formSubmit  = () => {
    console.log('trying to submit the form')
    const newPlant = {
        name: formValues.name.trim(), 
        nickname: formValues.nickname.trim(),
        species: formValues.species.trim(),
        h20frequency: formValues.h20frequency.trim(),
    }
    postNewPlant(newPlant)
}

// Side Effects

// useEffect(() => {
//     getPlants()
// }, [])

}