import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../API';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const playersData = await fetchPlayers();
            if (playersData) {
                setPlayers(playersData.data.players);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {players.map((player) => (
                <div key={player.id}>
                    <h2>{player.name}</h2>
                    <img src={player.imageUrl} alt={player.name} />
                    <p>{player.breed}</p>
                </div>
            ))}
        </div>
    );
};

export default AllPlayers;