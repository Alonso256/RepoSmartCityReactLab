import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, ListGroup, ListGroupItem, Table } from 'reactstrap';


export default function PersonList() {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resultado) => {
                setPersons(resultado.data);
            }, [])
        });

        const handleClickRow = (event) => {
            console.log(event.target.getAttribute('data-item'));
        }    

    return (
        // <ul>
        //     {persons.map((person) => <li>{person.name}</li>)}
        // </ul>
        <Container>
            <ListGroup>
                {persons.map((person) => <ListGroupItem>{person.name}</ListGroupItem>)}
            </ListGroup>

            <div style={{ height: '90px' }}></div> 

            <Table striped hover>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            E-mail
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => <tr data-item={person.name} onClick={handleClickRow}><th>{person.id}</th><td>{person.name}</td><td>{person.username}</td><td>{person.email}</td></tr>)}
                </tbody>
            </Table>
        </Container>
    );
}