import React, { useState } from 'react';
import axios from 'axios'

export default function AddPerson() {
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeSurname = (event) => {
        setSurname(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            namepost: name,
        };

        axios.post("https://jsonplaceholder.typicode.com/users", { user }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre de la persona:
                    <input type="text" name="name" onChange={handleChangeName} /> <br />
                    <input type="text" name="surname" onChange={handleChangeSurname} />

                </label>
                <button type="submit">Añadir</button>
            </form>
        </div>
    )
} 