import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSinglePlayer } from '../API';

const SinglePlayer = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const playerData = await fetchSinglePlayer(id);
            if (playerData) {
                setPlayer(playerData.data.player);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            {player.name && (
                <div>
                    <h1>{player.name}</h1>
                    <img src={player.imageUrl} alt={player.name} />
                    <p>{player.breed}</p>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
            )}
        </div>
    );
};

export default SinglePlayer;