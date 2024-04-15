import React, { useState } from 'react';
import { createPlayer } from '../API';

const NewPlayerForm = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const playerData = { name, breed, imageUrl };
        const response = await createPlayer(playerData);
        if (response) {
            setSuccess(true);
            setName('');
            setBreed('');
            setImageUrl('');
        }
    };

    return (
        <div>
            {success && <p>Player added successfully!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Breed:
                        <input
                            type="text"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Add Player</button>
            </form>
        </div>
    );
};

export default NewPlayerForm;