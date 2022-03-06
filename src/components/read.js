import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { PieChart, Pie, BarChart, Bar, CartesianGrid, XAxis, YAxis} from 'recharts';

// read component, using effect as callback to request for data and render it in table
function Read() {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/read').then((response)=>{setTableData(response.data)});
    }, []);
    const setData = (data) => {
        let { id, carBrand, origin, popularModel, averagePrice } = data
        localStorage.setItem("id", id)
        localStorage.setItem("Car brand", carBrand)
        localStorage.setItem("Country of origin", origin)
        localStorage.setItem("Popular model", popularModel)
        localStorage.setItem("Average price", averagePrice)
        console.log(data)
    }
    const getData = () => {
        axios.get('http://localhost:8080/read').then((response)=>{setTableData(response.data)})
    }
    const onDelete = (id) => {
        axios.delete('http://localhost:8080/delete', {params: {id: id}}).then(() => getData())
    }
    return (
        <div className='App-header'>
            Cars
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Car brand</Table.HeaderCell>
                        <Table.HeaderCell>Country of origin</Table.HeaderCell>
                        <Table.HeaderCell>Most popular model</Table.HeaderCell>
                        <Table.HeaderCell>Average price</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {tableData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.carBrand}</Table.Cell>
                                <Table.Cell>{data.origin}</Table.Cell>
                                <Table.Cell>{data.popularModel}</Table.Cell>
                                <Table.Cell>{data.averagePrice}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell><Button onClick={() => setData(data)}>update</Button></Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Link to='/create'>
                <Table.Cell><Button>create</Button></Table.Cell>
            </Link>
            <PieChart width={600} height={500}>
                <Pie data={tableData} dataKey="averagePrice" label={(entry)=>{return entry.carBrand}} outerRadius={150} fill="green" />
            </PieChart>
            <BarChart width={600} height={300} data={tableData}>
                <Bar dataKey="averagePrice" fill="green" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="carBrand" />
                <YAxis />
            </BarChart>
        </div>
    )
}

export default Read;