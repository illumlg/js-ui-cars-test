import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

// create component, using states to create variables shown on ui
function Create() {
    const [carBrand, setCarBrand] = useState('');
    const [origin, setOrigin] = useState('');
    const [popularModel, setPopularModel] = useState('');
    const [averagePrice, setAveragePrice] = useState(null);
    const submitData = () => {
        axios.post('http://localhost:8080/create', {
            carBrand,
            origin,
            popularModel,
            averagePrice
        })
        console.log(carBrand);
        console.log(origin);
        console.log(popularModel);
        console.log(averagePrice);
    }
    return (
        <Form>
            <Form.Field>
                <label>Сar brand</label>
                <input placeholder='Сar brand' onChange={(e) => setCarBrand(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Country of origin</label>
                <input placeholder='Country of origin' onChange={(e) => setOrigin(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Most popular model</label>
                <input placeholder='Most popular model' onChange={(e) => setPopularModel(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Average price</label>
                <input placeholder='Average price' onChange={(e) => setAveragePrice(e.target.value)} />
            </Form.Field>
            <Link to='/read'>
                <Button type='submit' onClick={submitData}>Submit</Button>
            </Link>
        </Form>
    )
}

export default Create;