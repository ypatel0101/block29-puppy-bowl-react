import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<AllPlayers />} />
                <Route path="/players" element={<AllPlayers />} />
                <Route path="/players/:id" element={<SinglePlayer />} />
                <Route path="/new-player" element={<NewPlayerForm />} />
            </Routes>
        </Router>
    );
};

export default App;