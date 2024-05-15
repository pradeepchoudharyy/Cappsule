import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import './App.css';

const App = () => {
    const [results, setResults] = useState(null);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`https://backend.cappsule.co.in/api/v1/new_search?q=${query}&pharmacyIds=1,2,3`);
            setResults(response.data.data.saltSuggestions);
        } catch (error) {
            console.error('Error fetching the data', error);
        }
    };

    return (
        <div className="App">
            <Header />
            <h1>Cappsule Search</h1>
            <SearchBar onSearch={handleSearch} />
            <Results data={results} />
        </div>
    );
};

export default App;
