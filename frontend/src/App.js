import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [animals, setAnimals] = useState([]);
    const [animalName, setAnimalName] = useState('');

    // Fetch animals when component mounts
    useEffect(() => {
        fetchAnimals();
    }, []);

    const fetchAnimals = () => {
        axios.get('http://localhost:8000/animals/')
            .then(
                (response) => {
                    setAnimals(response.data);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    };

    const addAnimal = () => {
        axios.post('http://localhost:8000/animals/', { name: animalName })
            .then(() => {
                setAnimalName('');
                fetchAnimals();
            })
            .catch(error => console.error('Error adding animal:', error));
    };

    const removeAnimal = (animalID) => {
        axios.delete(`http://localhost:8000/animals/${animalID}/`).then(
            () => {
                fetchAnimals();
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <div>
            <h1>Farm Management</h1>
            <div>
                <input
                    type="text"
                    value={animalName}
                    onChange={(e) => setAnimalName(e.target.value)}
                />
                <button type="submit" onClick={addAnimal}>Add Animal</button>
            </div>
            <h2>Animals on my farm:</h2>
            <ul>
                {animals.map(animal => (
                    <li key={animal.name}>
                        {animal.name}
                        <button onClick={() => removeAnimal(animal.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
