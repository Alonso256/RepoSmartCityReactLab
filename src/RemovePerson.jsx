import React, { useState } from 'react';
import axios from 'axios';

export default function RemovePerson() {

    const [id, setId] = useState(null);

    const handleChange = (event) => {
        setId(event.target.value);
    }

     const handleSubmit = (event) => {
        event.preventDefault();

        axios.delete("https://jsonplaceholder.typicode.com/users/${id}")
            .then(res => {
                console.log("borrado ID:"+ id);
                console.log(res.data);
            })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Identificador de la persona:
                    <input id="campoTexto" type="text" name="id" onChange={handleChange} />
                </label>
                <button type="submit">Borrar</button>
            </form>
        </div>
    )
} 