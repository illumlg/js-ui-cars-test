import React, { useEffect, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

// update component, using local storage to save current values of updating object
function Update() {
    const [id, setId] = useState(null);
    const [carBrand, setCarBrand] = useState('');
    const [origin, setOrigin] = useState('');
    const [popularModel, setPopularModel] = useState('');
    const [averagePrice, setAveragePrice] = useState(null);
    useEffect(() => {
        setId(localStorage.getItem('id'))
        setCarBrand(localStorage.getItem('Car brand'))
        setOrigin(localStorage.getItem('Country of origin'))
        setPopularModel(localStorage.getItem('Popular model'))
        setAveragePrice(localStorage.getItem('Average price'))
    }, [])
    const submitData = () => {
        axios.put('http://localhost:8080/update', {
            id,
            carBrand,
            origin,
            popularModel,
            averagePrice
        })
    }
    return (
        <Form>
            <Form.Field>
                <label>Сar brand</label>
                <input placeholder='Сar brand' value={carBrand} onChange={(e) => setCarBrand(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Country of origin</label>
                <input placeholder='Country of origin' value={origin} onChange={(e) => setOrigin(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Most popular model</label>
                <input placeholder='Most popular model' value={popularModel} onChange={(e) => setPopularModel(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Average price</label>
                <input placeholder='Average price' value={averagePrice} onChange={(e) => setAveragePrice(e.target.value)} />
            </Form.Field>
            <Link to='/read'>
                <Button type='submit' onClick={submitData}>Update</Button>
            </Link>
        </Form>
    )
}

export default Update;